const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { test } = require('node:test');
const { selectedPublications, stillCurrent, commentBody, readPdfs, prepare, finish } = require('./publication-previews.cjs');

function pr(number, labels = ['jmlr'], sha = 'a'.repeat(40)) {
  return { number, state: 'open', head: { sha, ref: `feature/paper-${number}` },
    labels: labels.map(name => ({ name })) };
}

function zip(filename, entries) {
  execFileSync('python3', ['-c', `
import json, sys, zipfile
with zipfile.ZipFile(sys.argv[1], 'w') as zipped:
    for name, data in json.loads(sys.argv[2]).items():
        zipped.writestr(name, data)
`, filename, JSON.stringify(entries)]);
}

test('only exact publication labels select builds, including multiple labels', () => {
  assert.deepEqual(selectedPublications(['documentation']), []);
  assert.deepEqual(selectedPublications(['thesis', 'jmlr', 'jmlr', 'bug']), ['jmlr', 'thesis']);
  assert.deepEqual(selectedPublications(['JMLR', 'neurips-extra']), []);
});

test('a changed commit, changed label set, or closed PR cannot receive stale links', () => {
  const previous = pr(1);
  assert.equal(stillCurrent(pr(1), previous, ['jmlr']), true);
  assert.equal(stillCurrent(pr(1, ['jmlr'], 'b'.repeat(40)), previous, ['jmlr']), false);
  assert.equal(stillCurrent(pr(1, ['thesis']), previous, ['jmlr']), false);
  assert.equal(stillCurrent({ ...pr(1), state: 'closed' }, previous, ['jmlr']), false);
  const body = commentBody(previous, 'Ready', 'https://example.com/run', ['jmlr'], 'https://example.com/site/');
  assert.ok(body.includes(`/pr-1/${previous.head.sha}/jmlr.pdf`));
  assert.ok(body.includes(previous.head.sha));
});

test('artifact handling reads only expected PDFs and rejects malformed or missing PDFs', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'preview-archive-'));
  try {
    const archive = path.join(root, 'artifact.zip');
    const output = path.join(root, 'output');
    fs.mkdirSync(output);
    zip(archive, { 'jmlr.pdf': '%PDF-1.7\nfixture', '../escape': 'unsafe', 'script.sh': 'unsafe' });
    readPdfs(archive, output, ['jmlr']);
    assert.deepEqual(fs.readdirSync(output), ['jmlr.pdf']);
    assert.equal(fs.existsSync(path.join(root, 'escape')), false);
    assert.throws(() => readPdfs(archive, output, ['thesis']));
    zip(archive, { 'jmlr.pdf': '<html>not a PDF</html>' });
    assert.throws(() => readPdfs(archive, output, ['jmlr']));
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('publisher reconciles multiple PRs, retries deployment, hides failed builds, and cleans up', async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'preview-publisher-'));
  const originalDirectory = process.cwd();
  const originalUrl = process.env.PAGE_URL;
  const git = (...args) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  try {
    git('init', '--bare', path.join(root, 'origin.git'));
    git('init', '-b', 'feature/preview-test', path.join(root, 'repo'));
    process.chdir(path.join(root, 'repo'));
    git('config', 'user.name', 'Preview tests');
    git('config', 'user.email', 'tests@example.com');
    fs.writeFileSync('source.txt', 'Source files must not be deployed.');
    git('add', '.');
    git('commit', '-m', 'Seed test repository');
    git('remote', 'add', 'origin', path.join(root, 'origin.git'));
    const archive = path.join(root, 'artifact.zip');
    zip(archive, { 'jmlr.pdf': '%PDF-1.7\nJMLR', 'thesis.pdf': '%PDF-1.7\nThesis' });
    let prs = [pr(1), pr(2, ['thesis'], 'b'.repeat(40)), pr(3, ['documentation'])];
    let conclusion = 'success';
    const comments = new Map();
    const outputs = {};
    let downloads = 0;
    const rest = {
      pulls: {
        list: async () => prs,
        get: async ({ pull_number }) => ({ data: prs.find(item => item.number === pull_number) || { ...pr(pull_number), state: 'closed' } }),
      },
      issues: {
        listComments: async ({ issue_number }) => comments.has(issue_number) ? [comments.get(issue_number)] : [],
        createComment: async ({ issue_number, body }) => comments.set(issue_number,
          { id: issue_number, body, user: { login: 'github-actions[bot]' } }),
        updateComment: async ({ comment_id, body }) => { comments.get(comment_id).body = body; },
      },
      actions: {
        listWorkflowRuns: async ({ head_sha }) => ({ data: { workflow_runs: prs.filter(item => item.head.sha === head_sha)
          .flatMap(item => [
            { id: 0, status: 'completed', conclusion: 'failure', head_sha, head_branch: item.head.ref, pull_requests: [] },
            { id: item.number, run_attempt: 1, status: 'completed', conclusion,
              head_sha, head_branch: item.head.ref, pull_requests: [{ number: item.number }], html_url: 'https://example.com/build' }]) } }),
        listWorkflowRunArtifacts: async () => [{ id: 1, name: 'publication-pdfs', expired: false }],
        downloadArtifact: async () => { downloads++; return { data: fs.readFileSync(archive) }; },
      },
    };
    const github = { rest, paginate: (method, args) => method(args) };
    const context = { repo: { owner: 'owner', repo: 'repo' }, eventName: 'workflow_run', payload: {} };
    const core = { setOutput: (key, value) => { outputs[key] = value; }, warning: message => assert.fail(message) };
    const nextRunner = () => git('worktree', 'remove', '--force', '.preview-site');
    process.env.PAGE_URL = 'https://example.com/previews/';

    await prepare({ github, context, core });
    assert.equal(outputs.deploy, 'true');
    assert.equal(downloads, 2);
    assert.equal(fs.existsSync('.preview-site/source.txt'), false);
    await finish({ github, context });
    assert.ok(comments.get(1).body.includes('/jmlr.pdf'));
    assert.ok(comments.get(2).body.includes('/thesis.pdf'));
    assert.equal(comments.has(3), false);

    nextRunner();
    await prepare({ github, context, core });
    assert.equal(downloads, 2, 'cached snapshots should not download artifacts again');
    assert.equal(outputs.deploy, 'false', 'unchanged, deployed snapshots need no new deployment');
    await finish({ github, context, failed: true });
    assert.ok(comments.get(1).body.includes('publishing failed'));
    assert.equal(comments.get(1).body.includes('/jmlr.pdf'), false);

    nextRunner();
    conclusion = 'failure';
    prs[0] = pr(1, ['jmlr'], 'c'.repeat(40));
    await prepare({ github, context, core });
    assert.ok(comments.get(1).body.includes('**failure**'));
    assert.equal(comments.get(1).body.includes('/jmlr.pdf'), false);

    nextRunner();
    prs = [pr(1, []), pr(3, ['documentation'])];
    await prepare({ github, context, core });
    assert.equal(fs.existsSync('.preview-site/pr-1'), false, 'removing labels cleans up the preview');
    assert.equal(fs.existsSync('.preview-site/pr-2'), false, 'closing another PR cleans up its preview');
    assert.equal(outputs.deploy, 'true');
    assert.ok(comments.get(1).body.includes('No publication preview labels'));
    await finish({ github, context, failed: true });
    nextRunner();
    await prepare({ github, context, core });
    assert.equal(outputs.deploy, 'true', 'failed cleanup must be retried');
    await finish({ github, context });
    assert.ok(comments.get(2).body.includes('hosted PDF previews have been removed'));
    const snapshot = git('ls-remote', 'origin', 'refs/heads/chore/publication-previews').split(/\s/)[0];
    assert.equal(git('rev-list', '--count', snapshot), '1', 'generated branch must not accumulate PDF history');
  } finally {
    process.chdir(originalDirectory);
    if (originalUrl === undefined) delete process.env.PAGE_URL;
    else process.env.PAGE_URL = originalUrl;
    fs.rmSync(root, { recursive: true, force: true });
  }
});
