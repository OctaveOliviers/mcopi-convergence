# Replacement proof development

This folder retains the independently reviewed proof increments used to replace the main JMLR argument. The active paper is now in [the JMLR manuscript](../../jmlr.tex); this development copy is not included by that build.

- `draft.tex` assembles foundations, mean field, barrier, favorable updates and the final convergence argument. Its reviewed complete version is retained under [reviews/2026-09-26-p4-v2](../../reviews/2026-09-26-p4-v2/MANIFEST.txt).
- `paper/` retains the full-manuscript integration candidate. Final assembled reviews and exact input versions are recorded under [reviews](../../reviews/2026-09-26-assembled-review.md).
- The separate [faithful reference transcription](../simplified-proof-reference/README.md) preserves the supplied PDF's notation and assumptions. It is not the revised proof.

Build the active paper from the repository root with `make jmlr`. For development excerpts, use `make -C publications/jmlr/tmp/proof-replacement`.
