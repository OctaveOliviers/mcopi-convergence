const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const PUBLICATIONS = ['jmlr', 'neurips', 'thesis'];
const LABELS = { jmlr: 'JMLR', neurips: 'NeurIPS', thesis: 'Thesis' };
const MARKER = '<!-- publication-pdf-preview -->';
const SITE = '.preview-site';
const BRANCH = 'chore/publication-previews';
const STATE = '.preview-state.json';

function selectedPublications(labels) {
  return PUBLICATIONS.filter(publication => labels.includes(publication));
}

function selection(pr) {
  return selectedPublications(pr.labels.map(label => label.name));
}

function stillCurrent(current, previous, publications) {
  return current.state === 'open' && current.head.sha === previous.head.sha
    && selection(current).join(',') === publications.join(',');
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim();
}

function commentBody(pr, status, runUrl, publications = [], pageUrl = '') {
  const lines = [MARKER, '### Publication PDF preview', '',
    `Commit: \`${pr.head.sha}\``, '', status];
  if (pageUrl) {
    lines.push('', ...publications.map(publication =>
      `- [View ${LABELS[publication]} PDF](${pageUrl.replace(/\/$/, '')}/pr-${pr.number}/${pr.head.sha}/${publication}.pdf)`));
  }
  if (runUrl) lines.push('', `[View build details](${runUrl})`);
  return lines.join('\n');
}

async function updateComment(github, repo, pr, body, create = true) {
  const comments = await github.paginate(github.rest.issues.listComments,
    { ...repo, issue_number: pr.number, per_page: 100 });
  const previous = comments.find(comment => comment.user.login === 'github-actions[bot]'
    && comment.body.startsWith(MARKER));
  if (previous && previous.body !== body) {
    await github.rest.issues.updateComment({ ...repo, comment_id: previous.id, body });
  } else if (!previous && create) {
    await github.rest.issues.createComment({ ...repo, issue_number: pr.number, body });
  }
}

// Read only the expected PDF entries. Never extract an archive into the checkout
// or execute any script from the pull request or its artifact.
function readPdfs(archive, destination, publications) {
  execFileSync('python3', ['-c', `
import pathlib, sys, zipfile
archive, destination, *publications = sys.argv[1:]
with zipfile.ZipFile(archive) as zipped:
    for publication in publications:
        name = publication + '.pdf'
        info = zipped.getinfo(name)
        if info.file_size > 100 * 1024 * 1024:
            raise ValueError('PDF exceeds 100 MB: ' + name)
        data = zipped.read(info)
        if not data.startswith(b'%PDF-'):
            raise ValueError('Invalid PDF: ' + name)
        pathlib.Path(destination, name).write_bytes(data)
`, archive, destination, ...publications]);
}

function loadSite() {
  const existing = git('ls-remote', '--heads', 'origin', BRANCH).split(/\s/)[0];
  if (existing) {
    git('fetch', '--depth=1', 'origin', BRANCH);
    git('worktree', 'add', '--detach', SITE, 'FETCH_HEAD');
  } else {
    git('worktree', 'add', '--detach', SITE, 'HEAD');
    for (const entry of fs.readdirSync(SITE)) {
      if (entry !== '.git') fs.rmSync(path.join(SITE, entry), { recursive: true, force: true });
    }
  }
  return existing;
}

function saveSite(previous) {
  git('-C', SITE, 'add', '--all');
  const tree = git('-C', SITE, 'write-tree');
  // One generated snapshot, without keeping every old PDF in branch history.
  const commit = git('-c', 'user.name=github-actions[bot]',
    '-c', 'user.email=41898282+github-actions[bot]@users.noreply.github.com',
    'commit-tree', tree, '-m', 'Update publication PDF previews');
  git('push', `--force-with-lease=refs/heads/${BRANCH}:${previous}`,
    'origin', `${commit}:refs/heads/${BRANCH}`);
}

async function prepare({ github, context, core }) {
  const repo = context.repo;
  const previous = loadSite();
  const prs = await github.paginate(github.rest.pulls.list,
    { ...repo, state: 'open', per_page: 100 });
  const openNumbers = new Set(prs.map(pr => `pr-${pr.number}`));
  let changed = !previous;
  const ready = [];
  const removed = [];
  for (const entry of fs.readdirSync(SITE)) {
    if (/^pr-\d+$/.test(entry) && !openNumbers.has(entry)) {
      const number = Number(entry.slice(3));
      const { data: closed } = await github.rest.pulls.get({ ...repo, pull_number: number });
      if (closed.state !== 'closed') continue;
      fs.rmSync(path.join(SITE, entry), { recursive: true, force: true });
      removed.push(closed);
      changed = true;
    }
  }
  if (context.eventName === 'pull_request_target' && context.payload.action === 'closed') {
    const closed = context.payload.pull_request;
    if (!removed.some(pr => pr.number === closed.number)) removed.push(closed);
  }
  for (const pr of prs) {
    const publications = selection(pr);
    const directory = path.join(SITE, `pr-${pr.number}`);
    if (!publications.length) {
      if (fs.existsSync(directory)) {
        fs.rmSync(directory, { recursive: true, force: true });
        changed = true;
      }
      await updateComment(github, repo, pr, commentBody(pr, 'No publication preview labels are selected. Add `jmlr`, `neurips`, or `thesis` to build a PDF.'), false);
      continue;
    }
    if (fs.existsSync(directory)) {
      for (const sha of fs.readdirSync(directory).filter(entry => /^[a-f0-9]{40}$/.test(entry))) {
        for (const publication of PUBLICATIONS.filter(item => !publications.includes(item))) {
          const pdf = path.join(directory, sha, `${publication}.pdf`);
          if (fs.existsSync(pdf)) {
            fs.rmSync(pdf);
            changed = true;
          }
        }
      }
    }
    const { data } = await github.rest.actions.listWorkflowRuns({ ...repo,
      workflow_id: 'publication-previews.yml', event: 'pull_request', head_sha: pr.head.sha, per_page: 100 });
    const run = data.workflow_runs.sort((a, b) => b.id - a.id).find(run => run.head_sha === pr.head.sha
      && (run.pull_requests.some(item => item.number === pr.number) || run.head_branch === pr.head.ref));
    if (!run || run.status !== 'completed' || run.conclusion !== 'success') {
      const status = !run || run.status !== 'completed'
        ? 'Compiling the latest commit. The PDF links will appear here when publishing finishes.'
        : `The latest build ended with status **${run.conclusion}**. There is no preview for this commit.`;
      await updateComment(github, repo, pr, commentBody(pr, status, run?.html_url));
      continue;
    }
    const revision = `${run.id}-${run.run_attempt}`;
    const manifest = path.join(directory, 'build.json');
    const cached = fs.existsSync(manifest) && JSON.parse(fs.readFileSync(manifest, 'utf8'));
    try {
      if (!cached || cached.revision !== revision || cached.sha !== pr.head.sha
        || cached.publications.join(',') !== publications.join(',')) {
        const artifacts = await github.paginate(github.rest.actions.listWorkflowRunArtifacts,
          { ...repo, run_id: run.id, per_page: 100 });
        const artifact = artifacts.find(item => item.name === 'publication-pdfs' && !item.expired);
        if (!artifact) throw new Error('The PDF build attachment is missing or expired. Re-run the build to publish it.');
        const download = await github.rest.actions.downloadArtifact({ ...repo,
          artifact_id: artifact.id, archive_format: 'zip' });
        const archive = path.resolve(`.preview-${pr.number}.zip`);
        const temporary = fs.mkdtempSync(path.resolve('.preview-pdfs-'));
        try {
          fs.writeFileSync(archive, Buffer.from(download.data));
          readPdfs(archive, temporary, publications);
          // A newer push or closure may have happened during the download.
          const { data: current } = await github.rest.pulls.get({ ...repo, pull_number: pr.number });
          if (!stillCurrent(current, pr, publications)) continue;
          fs.rmSync(directory, { recursive: true, force: true });
          fs.mkdirSync(directory, { recursive: true });
          fs.renameSync(temporary, path.join(directory, pr.head.sha));
          fs.writeFileSync(manifest, JSON.stringify({ revision, sha: pr.head.sha, publications }));
          changed = true;
        } finally {
          fs.rmSync(archive, { force: true });
          fs.rmSync(temporary, { recursive: true, force: true });
        }
      }
      await updateComment(github, repo, pr, commentBody(pr, 'Build complete. Publishing the PDF preview…', run.html_url));
      ready.push({ pr, publications, runUrl: run.html_url });
    } catch (error) {
      core.warning(`PR #${pr.number}: ${error.message}`);
      await updateComment(github, repo, pr, commentBody(pr,
        `The preview could not be prepared. ${error.message}`, run.html_url));
    }
  }
  fs.writeFileSync(path.join(SITE, 'index.html'), '<!doctype html><html lang="en"><meta charset="utf-8"><title>Publication previews</title><h1>Publication previews</h1><p>Open a pull request to find its latest PDF preview links.</p></html>\n');
  fs.writeFileSync(STATE, JSON.stringify({ ready, removed, previous, changed }));
  core.setOutput('deploy', String(changed));
}

async function finish({ github, context, failed = false }) {
  const { ready, removed, previous, changed } = JSON.parse(fs.readFileSync(STATE, 'utf8'));
  const repo = context.repo;
  // Persist only after a successful deployment, so failed uploads and cleanup
  // attempts are retried from the last site that actually went live.
  if (!failed && changed) saveSite(previous);
  let pageUrl = process.env.PAGE_URL;
  if (!failed && ready.length && !pageUrl) {
    const { data } = await github.rest.repos.getPages(repo);
    pageUrl = data.html_url;
  }
  for (const item of ready) {
    const { data: current } = await github.rest.pulls.get({ ...repo, pull_number: item.pr.number });
    if (!stillCurrent(current, item.pr, item.publications)) continue;
    await updateComment(github, repo, current, failed
      ? commentBody(current, 'The PDF compiled, but publishing failed. Check the publishing workflow and re-run it.', item.runUrl)
      : commentBody(current, 'The preview is ready for this commit.', item.runUrl, item.publications, pageUrl));
  }
  for (const pr of removed) {
    const { data: current } = await github.rest.pulls.get({ ...repo, pull_number: pr.number });
    if (current.state !== 'closed') continue;
    await updateComment(github, repo, pr, commentBody(pr, failed
      ? 'This pull request is closed. Preview cleanup failed; re-run the publishing workflow.'
      : 'This pull request is closed. Its hosted PDF previews have been removed.'), false);
  }
}

module.exports = { selectedPublications, stillCurrent, commentBody, readPdfs, prepare, finish };
