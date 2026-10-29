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

For a JMLR review copy with blue margin bars beside added or revised passages:

```sh
make jmlr REVIEW=1
```

This writes `publications/jmlr/build/jmlr-review.pdf`, leaving the manuscript and
clean PDF untouched. It compares the current working files, including uncommitted
edits, with the original paper before the proof replacement (`d9a1efc`). To use
another Git revision, add `REVIEW_BASE=<revision>`. The resolved baseline is saved
beside the PDF in `jmlr-review-base.txt`.

Bars mark changes in the LaTeX text and equations. Deleted passages are omitted;
deletion-only changes have no bar, and moved passages may be marked as new.
Changes inside external figures or bibliography files are not highlighted, and
macro-definition or formatting changes do not mark every affected passage.
The normal `make jmlr` command continues to produce the clean `jmlr.pdf`.

Use [publications/jmlr/tmp/](publications/jmlr/tmp/README.md) for reference
transcriptions, exploratory proofs and supporting material while working on the
JMLR proof. Keep these separate from the active manuscript until validated.

## Pull request PDF previews

Add the `jmlr`, `neurips`, or `thesis` label to a pull request to automatically build and link a PDF preview of that publication after each commit.
