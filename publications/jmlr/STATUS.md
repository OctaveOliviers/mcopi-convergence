# JMLR proof review status

Updated 2026-10-12. The authorized revision presents gap preservation before seeding, interprets the probability bound immediately before its proof, and introduces the auxiliary probabilities inside the combination argument. The theorem and assumptions are unchanged. Independent correctness, notation, unassisted comprehension and assembled-chain reviews pass. The revision is **agent-checked** within the scope below; no scope decision or blocking finding is pending.

## Current version

Branch: `feature/simplify-jmlr-proof`; [PR #4](https://github.com/OctaveOliviers/mcopi-convergence/pull/4), with the `jmlr` label. Exact sources, dependencies and both PDFs are retained in [preservation-first-v1](reviews/2026-10-12-preservation-first-v1/MANIFEST.txt), based on `09d7e4cc45fb1a59153c2a40da2b7da59fedaff4`.

The main-text order is gap preservation (Lemma 13, bound 28), seed construction and Lemma 15, positive progress (Lemma 16), then global convergence. The auxiliary-law contract appears where used in the progress proof, with its formal statement and unchanged proof together in the appendix (Lemma 17). The interpretation distinguishes waiting with a fixed positive gap from starting with a gap that shrinks with the learning rate. The existing constants retain their values; the seed constant is introduced with seeding. No symbol was added.

Only the probability-of-improvement section, the introduction/local probability construction in its composition, and the matching appendix placement changed. The introduction, problem setting, algorithm exposition, standing assumptions, mean-field section, main theorem, discussion and global-convergence proof are unchanged from the previous version. The preservation and seed proofs are unchanged after relocation. Comparisons with abandoned proof stages were removed from the preservation introduction.

## Review and validation

| Check | Current evidence |
| --- | --- |
| Correctness | [Independent revision audit and historical reconciliation](reviews/2026-10-12-preservation-first-correctness.md): pass. The prior mathematical clearance carries forward after direct equivalence, dependency and resolved-finding checks. |
| Assembled proof | [Fresh full-chain audit](reviews/2026-10-12-preservation-first-assembled.md): pass. Conditional laws, stopping endpoints, uniform bounds, localization and the final convergence conclusion checked independently. |
| Notation | [Source/global dependency and PDF review](reviews/2026-10-12-preservation-first-notation.md): pass. Definitions precede their uses; relocated constants retain their meanings. |
| Exposition | PF-E1: pass. [Unassisted explain-back and three follow-ups](reviews/2026-10-12-preservation-first-reader.md), assessed in [the writer's review record](reviews/2026-10-12-preservation-first-review.md). No tutoring or manuscript revision followed. |
| Sources | [Existing source checks](reviews/2026-09-28-source-checks.md) remain applicable to unchanged dependencies, as reconciled by the current correctness reviewer. No new external-source audit is claimed. |
| Build/render | Both `make jmlr` and `make jmlr REVIEW=1` pass; both outputs have 28 pages. Clean pages 12–28 inspected; pages 1–11 pixel-identical to the previously checked version. Changed review passages and margin bars inspected. The clean PDF has only the inherited caption warning. Review-only microtype and 0.19 pt box diagnostics are recorded with their visual check in the review record. No undefined references or unstable bars. |
| Integrity | All 473 historical/current manifest entries verified. Live inputs and outputs match the current snapshot. The review build preserves the clean PDF, and all 127 extracted numbered equation references agree between outputs. |

The review PDF compares with the original baseline `d9a1efc31b838533c20e0e4f6d7058c0d1ca77c1`. Start on page 14 for the preservation lemma and its interpretation; seeding starts on page 16, followed by combination on page 17. The clean and review versions have different page breaks.

## Boundaries and history

Fresh checkers received only the frozen active manuscript, dependencies and permitted guides. Earlier findings were disclosed only after independent mathematical reports; private expectations and prior reader answers stayed excluded. The [review record](reviews/2026-10-12-preservation-first-review.md) retains assignments, scope, exact evidence and the unavailable-model substitution. No experiments were rerun, other publications edited, or new claims added. Agent checks do not constitute formal proof certification or human sign-off.

The [previous status](reviews/2026-10-12-status-before-reordering.md) preserves gap-preservation-v1's historical approvals. Earlier restoration decisions remain in the [18-comment response map](reviews/2026-09-28-comment-responses.md) and [restoration audit](reviews/2026-09-28-restoration-audit.md). Reference transcription and prior snapshots are unchanged. First-/every-visit, temporal-difference and function-approximation extensions remain outside scope.
