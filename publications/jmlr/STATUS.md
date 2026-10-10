# JMLR proof review status

Updated 2026-10-10. The focused revision presents the stochastic proof as seeding followed by gap preservation, explains protection from a sufficiently large multiple of the learning rate, and removes the redundant constant c_l. The theorem and assumptions are unchanged. Correctness, notation and fresh unassisted exposition review pass. The revision is agent-checked within the scope below. No scope decision is pending.

## Current version

Branch: `feature/simplify-jmlr-proof`; [PR #4](https://github.com/OctaveOliviers/mcopi-convergence/pull/4), with the `jmlr` label. The exact reviewed sources, dependencies and PDF are retained in [gap-preservation-v1](reviews/2026-10-10-gap-preservation-v1/MANIFEST.txt), based on `cae73243ee232631cf77a3d2fb3d27d92f8db5c3`. The active manuscript and PDF match this snapshot.

This revision changes only the probability-of-improvement section, its composition with convergence, and one matching appendix sentence. The single gap-preservation estimate starts at each state's seed completion. Its before/after-threshold cases bound possible failures; they do not require a separate growth stage. The alias c_l is replaced by its exact value, 16 c_xi. No symbol is added.

Sections 1–2, the mean-field section, the theorem and its assumptions are unchanged from restoration-v4. That restoration preserved the original exposition wherever sound, with necessary repairs to policy ordering, cumulative learning, conditional moments, stopping times and persistent-target reasoning. The [18-comment response map](reviews/2026-09-28-comment-responses.md) and [restoration audit](reviews/2026-09-28-restoration-audit.md) retain those earlier decisions.

## Review and validation

| Check | Current evidence |
| --- | --- |
| Correctness | `gap-preservation-v1-correctness`: pass. Independent inspection of the changed claims and assembled dependency chain, followed by reconciliation of prior findings, confirms that restoration-v4's mathematical clearance carries forward. [Full report](reviews/2026-10-10-gap-preservation-correctness.md). |
| Notation | `gap-preservation-v1-notation`: pass. Exact constant substitution, current terminology, references and all changed rendered pages independently checked. [Full report](reviews/2026-10-10-gap-preservation-notation.md). |
| Exposition | GP-E2: pass. A fresh unassisted reader reconstructed the full mechanism and answered four questions about completion-time bounds, shrinking margins, unattained thresholds and probability transfer. The earlier assisted diagnostic is retained, not counted as a pass. [Session and assessment](reviews/2026-10-10-gap-preservation-review.md). |
| Sources | The [earlier source audit](reviews/2026-09-28-source-checks.md) remains applicable to the unchanged proper-policy and fixed-target dependencies, as verified in the correctness reconciliation. No new external-source audit is claimed. |
| Build and rendering | `make jmlr` passes with pinned TeX Live 2025. All changed pages (12–22 and 27) were inspected directly; pages 1–11, 23–26 and 28 are pixel-identical to the previously inspected PDF. No undefined references, duplicate labels, overfull or underfull boxes; only the inherited caption-package warning remains. |
| Version integrity | All 427 historical/current snapshot manifest entries verified. Current inputs and PDF match gap-preservation-v1. The staged whitespace check passes for the live edits and review prose; exact frozen copies retain inherited/generated whitespace. |

Final PDF: `build/jmlr.pdf`, 28 pages, SHA-256 `0a04d412c1467dfb91b32e1aae367814bf84bb923ecdab44f4943b791077cf97`.

## Boundaries and history

Fresh checkers received only the frozen active manuscript, dependencies and permitted guides. Earlier correctness findings were supplied only after the independent current inspection; writer assessments and earlier reader answers were excluded from fresh comprehension tests. The [current review record](reviews/2026-10-10-gap-preservation-review.md) retains assignments, exact reports, assistance and scope. Earlier A4 and restoration snapshots/reviews remain historical evidence; their applicability to this revision is established by the current checks, not assumed. The [previous status](reviews/2026-09-28-status-before-comments.md) preserves prior decisions and scope limits.

Existing experiments were not rerun. Exhaustive novelty review and a sampling algorithm for unknown state discovery remain outside scope, as do other publications and first-/every-visit, temporal-difference and function-approximation extensions. The faithful reference transcription is unchanged. Agent checks are not formal proof certification or human sign-off.
