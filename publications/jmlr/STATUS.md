# JMLR proof review status

Updated 2026-09-28. The restoration addressing the user's general feedback and all 18 PDF comments is **agent-checked**. The agreed theorem and weaker assumptions are unchanged. No mathematical scope decision or blocking review finding remains open.

## Current version

Branch: `feature/simplify-jmlr-proof`; [PR #4](https://github.com/OctaveOliviers/mcopi-convergence/pull/4), with the `jmlr` label. The original manuscript used for restoration is `d9a1efc31b838533c20e0e4f6d7058c0d1ca77c1`. The exact reviewed sources, dependencies and PDF are retained in [restoration-v4](reviews/2026-09-28-restoration-v4/MANIFEST.txt), based on `2fd2e18e4d0815dab88c4fe89e91deccaacb0073`. The active manuscript matches that snapshot.

Sections 1–2 and the mean-field section preserve the original exposition wherever sound. Necessary repairs concern policy ordering, cumulative learning, conditional moments, stopping times and persistent-target reasoning. The stochastic proof introduces its gaps before use and follows seed/growth/lock-in. Unnecessary aliases and arbitrary lemma names are removed; all main-theorem assumptions appear together. The [18-comment response map](reviews/2026-09-28-comment-responses.md) and [restoration audit](reviews/2026-09-28-restoration-audit.md) identify the changes and justify repairs outside the main proof.

## Review and validation

| Check | Current evidence |
| --- | --- |
| Correctness | `restoration-v4-correctness`: pass; full dependency-chain review and verification of every subsequent substantive change. [Findings and resolutions](reviews/2026-09-28-restoration-review.md). |
| Notation | `restoration-v4-notation`: pass; all original findings independently resolved or dismissed, including preservation of established value/noise notation. Same review record. |
| Exposition | R-E4: pass; fresh unassisted explain-back and three neutral follow-ups covering endpoints, conditional reweighting and deterministic restarts. [Session record](reviews/2026-09-28-exposition.md) and [verbatim responses](reviews/2026-09-28-reader-v4-verbatim.md). |
| Sources | Standard proper-policy termination and fixed-target supermartingale results directly verified. [Source audit](reviews/2026-09-28-source-checks.md). |
| Build and rendering | `make jmlr` passes with pinned TeX Live 2025. All 28 pages checked directly or by pixel comparison with previously inspected pages. No undefined references, duplicate labels, overfull or underfull boxes; only the inherited caption-package warning remains. |
| Version integrity | All 404 historical/current snapshot manifest entries verified. The active sources and PDF match restoration-v4; `git diff --check -- publications/jmlr` passes. |

Final PDF: `build/jmlr.pdf`, 28 pages, SHA-256 `446c114389c3751d6a33405eaa62293681a150037e39b8431b7a28bccd7b976e`.

## Boundaries and history

Fresh checkers received only the frozen active manuscript, dependencies and permitted guides or source evidence. Writer specifications, assessments and earlier reader answers were excluded. Earlier A4 and restoration-v1/v2/v3/intermediary snapshots are historical evidence, not approvals of the final version. The [previous status](reviews/2026-09-28-status-before-comments.md) preserves prior decisions and scope limits.

Existing experiments were not rerun. Exhaustive novelty review and a sampling algorithm for unknown state discovery remain outside scope, as do other publications and first-/every-visit, temporal-difference and function-approximation extensions. The faithful reference transcription is unchanged. Agent checks are not formal proof certification or human sign-off.
