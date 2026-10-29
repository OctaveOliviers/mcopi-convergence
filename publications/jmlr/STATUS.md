# JMLR proof review status

Updated 2026-10-29. The author-approved first-case explanation is integrated into Lemma 13, and the second case now follows the same explicit progression from a necessary noise fluctuation to its probability bound. The duplicate Appendix A.7 has been brought into the proof and removed. The theorem, assumptions, constants and later proof structure are unchanged.

Current version: [gap-proof integration v1](reviews/2026-10-29-gap-proof-integration/v1/MANIFEST.sha256), with a separately supplied [figure dependency](reviews/2026-10-29-gap-proof-integration/figure-dependency/MANIFEST.sha256) and [PDF fingerprints](reviews/2026-10-29-gap-proof-integration/v1/ARTIFACTS.sha256). The [review record](reviews/2026-10-29-gap-proof-integration/REVIEW.md) links independent local correctness, assembled correctness, notation/rendering and fresh-reader checks: all pass within their stated scopes. No blocking finding remains; the pre-existing experiment-wording issue WA2-C1 remains outside scope.

Both standard builds produce 32-page PDFs. Read pages 14–19 for Lemma 13; the second case begins on page 18. Permanent equation references, the conditional maximal argument, and blue review bars have been checked. The review build preserves the clean PDF. [Validation details](reviews/2026-10-29-gap-proof-integration/VALIDATION.md) record source-scope checks, existing typography diagnostics and all 170 matching numbered-equation occurrences.

Fresh GPT-6 Astra/high checkers reviewed local and assembled mathematics; separate GPT-6.1 Sol/medium checkers reviewed notation/rendering and exposition. No tutoring was needed in the fresh-reader follow-ups. The first-case author approval is explicit; agent review is not formal certification or a human-readability score. Branch and [PR #4](https://github.com/OctaveOliviers/mcopi-convergence/pull/4), labelled `jmlr`, remain unchanged.

## Earlier records

Updated 2026-10-18. The authorized mathematical simplifications are implemented and **agent-checked**: weighted gap preservation, symmetric favorable updates and a single use of condition (5) to compare seed increments with future steps. The main theorem and standing mathematical assumptions are unchanged. No blocking proof finding remains. One pre-existing, nonblocking experiment-discussion issue is recorded below.

## Current version

Branch: `feature/simplify-jmlr-proof`; [PR #4](https://github.com/OctaveOliviers/mcopi-convergence/pull/4), label `jmlr`. The exact current source/dependency version is [weighted-preservation-v2](reviews/2026-10-18-weighted-preservation-v2/MANIFEST.txt), based on `4482943da344c64e972b302999a6651253b5491c`; [artifact hashes](reviews/2026-10-18-weighted-preservation-v2/ARTIFACTS.sha256) identify both PDFs and build records. The v1 snapshot preserves the initial review and its subsequently corrected appendix sentence.

The order remains preservation (Lemma13, bound27), seed (Lemma15, margin30), positive progress (Lemma16), and global convergence. The preservation proof uses a rescaled martingale with explicit small-gap localization, removes the dyadic argument and c_g, and needs no weak monotonicity locally. Symmetric favorable updates remove c_s. The seed margin directly compares each favorable step with the largest future step, removing the extra c_alpha factor from composition. The existing auxiliary-law construction and finite/infinite transition handling are unchanged.

Outside the main stochastic proof, changes only align the one-sided return calculation, fix the maximal-inequality threshold declaration, and clarify conditional action uniformity, the global deterministic step sequence, sufficient episode-generation conditions, and where weak monotonicity is used. The introduction, mean-field proof, figure and experimental results are unchanged.

## Review and validation

| Check | Current evidence |
| --- | --- |
| Correctness | [Initial audit, v2 correction and source reconciliation](reviews/2026-10-18-weighted-correctness.md): pass. WPC-01 resolved by the responsible checker. |
| Assembled theorem | [Fresh full-chain audit and source reconciliation](reviews/2026-10-18-weighted-assembled.md): pass on v2. |
| Notation | [Independent source and PDF audit](reviews/2026-10-18-weighted-notation.md): pass on v2; threshold-scope reassessment retained. |
| Exposition | [Unassisted account and three follow-ups](reviews/2026-10-18-weighted-reader.md): pass as assessed in [the writer record](reviews/2026-10-18-weighted-review.md). No tutoring or subsequent explanatory revision. |
| Build/render | Both builds pass, 28 pages each; affected equations and bars inspected. Only inherited caption/review typography diagnostics remain. No undefined references; bars stabilized; all 110 extracted numbered equation references agree. Review build preserves clean PDF. |
| Integrity | Reviewed source manifests and artifact hashes identify exact inputs/outputs. Live source matches final raw snapshot. Prior approvals remain historical for changed units. |

The review PDF compares with the original paper at `d9a1efc31b838533c20e0e4f6d7058c0d1ca77c1`. Start at page14 for gap preservation, page16 for seeding and page17 for composition. Clean/review page breaks differ.

## Open findings and boundaries

WA2-C1 remains open and nonblocking for this revision: existing experimental discussion describes sampled initial-visit paths as straight and generalizes its early-stopping observation. The assembled report recommends distinguishing the illustrated mean-field geometry and confining the empirical observation to that experiment. This is outside the focused proof change and does not enter its dependencies.

Fresh checkers saw only active text and permitted dependencies; reports and source history were shared only after independent mathematical assessments. GPT-6 Astra checked mathematics, GPT-6.1 Sol checked notation and exposition. The requested GPT-6 Sol reader deployment was unavailable; the fresh replacement and its provenance are recorded. These checks are not formal certification or human-readability measurements. Experiments, other publications, original review proposals and unrelated workspace changes were left untouched. The [previous status](reviews/2026-10-18-status-before-simplification.md) and [full review record](reviews/2026-10-18-weighted-review.md) preserve history and dispositions.

## Appendix navigation, 2026-10-24

Numbered the existing appendix subsections A.1–A.7 and replaced vague references with precise links. The gap-preservation proof now cites A.7 for its maximal inequality and random starts. Mathematical statements, assumptions, formulas, arguments and ordering are unchanged. A fresh [notation/navigation check](reviews/2026-10-24-appendix-links/notation-check.md) passes this scoped update. Both 28-page PDFs compile with resolved references and stable review bars; the affected pages were visually inspected. The [review record](reviews/2026-10-24-appendix-links/REVIEW.md), [source manifest](reviews/2026-10-24-appendix-links/MANIFEST.sha256) and [artifact hashes](reviews/2026-10-24-appendix-links/ARTIFACTS.sha256) identify the exact versions. Previous mathematical and exposition assessments carry forward for the unchanged content.
