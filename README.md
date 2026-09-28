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

Use [publications/jmlr/tmp/](publications/jmlr/tmp/README.md) for reference
transcriptions, exploratory proofs and supporting material while working on the
JMLR proof. Keep these separate from the active manuscript until validated.

## Pull request PDF previews

Add the `jmlr`, `neurips`, or `thesis` label to a pull request to automatically build and link a PDF preview of that publication after each commit.
