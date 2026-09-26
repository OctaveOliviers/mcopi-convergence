# New Proofs and Counterexamples for the Convergence of Monte Carlo Optimistic Policy Iteration

Requires Docker and Make. On this Mac, start Docker with `colima start`.

From the repository root:

```sh
make neurips
make jmlr
make thesis
```

Each command produces `neurips.pdf`, `jmlr.pdf`, or `thesis.pdf` in that
publication's `build/` folder, which Git ignores.

All three use the same pinned TeX Live 2025 container. The first run downloads
about 2.6 GB; no local LaTeX installation is needed.

## Pull request PDF previews

Add one or more of these pull request labels to request a browser preview:

| Label | PDF |
| --- | --- |
| `jmlr` | JMLR paper |
| `neurips` | NeurIPS paper |
| `thesis` | Thesis |

Labels select the publications, regardless of which files changed. Each new
commit rebuilds the selected PDFs using the same pinned container as the local
`make` commands. Adding or removing a label also refreshes the selection. Without
these labels, no publications are compiled for the pull request.

A single bot comment links to the PDFs on GitHub Pages and identifies the exact
commit. While a build is pending or has failed, the comment shows its status
instead of presenting an older PDF as current. PDF links include the commit SHA;
the publisher checks both the latest commit and current labels before posting
links. Browser settings may cause a PDF to download instead of opening inline.

Removing a label removes that publication's hosted PDF. Closing or merging a
pull request removes its hosted previews. These are public draft previews, not
permanent publication links; downloaded or cached copies cannot be recalled.
Build attachments are retained for 14 days. A failed publication build prevents
publication of the selected set; the comment links to the build log.

### One-time repository setup

Create the three labels above and enable **Settings → Pages → Build and deployment
→ Source: GitHub Actions**. No additional hosting account or repository secret is
required. The workflows must be merged into the repository's default branch before
the publisher can run. Existing pull requests can then be activated by adding a
publication label or pushing a new commit.

The build runs with read-only permissions, including for fork pull requests.
GitHub may require a maintainer to approve a first-time contributor's workflow.
The separate publisher runs code from the default branch with permission to update
comments, the generated preview snapshot, and GitHub Pages. It reads only expected
PDF files from build attachments; it never executes pull request code.

The `chore/publication-previews` branch is managed by the publisher and contains
only the current site snapshot. Each successful deployment replaces that snapshot
without preserving a history of generated PDFs. Do not edit or protect this
branch against its automated updates. It is not intended to be merged into `main`.
The repository's GitHub Pages site is reserved for these previews.

Publishing runs are serialized and reconcile all open pull requests, so queued
events from different pull requests can be combined without losing updates.
If publishing fails, re-run **Publish publication previews** in the Actions tab.
If a build fails or its attachment expires, re-run the latest **Build publication
previews** run or push a new commit. Re-running an old build uses that old event's
label selection; use the latest run when labels have changed.

To check the publishing logic locally:

```sh
node --test .github/scripts/publication-previews.test.cjs
```
