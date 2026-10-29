# JMLR proof review status

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


## Independent core referee audit, 2026-10-18

The user requested a fresh JMLR-style audit of gap preservation, seeding, positive improvement probability and global convergence, including assumptions and graduate-RL accessibility. The [referee report](reviews/2026-10-18-core-referee-audit/REPORT.md) and [exact retained source manifest](reviews/2026-10-18-core-referee-audit/MANIFEST.sha256) record this review at HEAD 067ac4022a5f9605bd66d906e72831b21acfef5a. The manuscript is unchanged.

Fresh independent [correctness](reviews/2026-10-18-core-referee-audit/correctness.md) and [semantic notation](reviews/2026-10-18-core-referee-audit/notation.md) reviews pass the assigned chain with no blocking finding. The [preliminary reader diagnostic](reviews/2026-10-18-core-referee-audit/reader-assessment.md), with retained unassisted initial and follow-up answers, reconstructs the mechanism; it is not a new formal exposition gate or a measurement of human readability. Open nonblocking recommendations concern finite unbiased return sampling in discounted nonterminating MDPs, practical scope, completion indexing, and a few dependency cross-references. These do not change prior manuscript clearance or constitute human sign-off.

A [separate independent follow-up](reviews/2026-10-18-core-referee-audit/correctness-followup.md) verifies reviewer-supplied practical examples and a possible strengthening: finite target changes alone do not require cumulative learning, using bounded comparison averages and a countable collection of deterministic containment bounds. Optimality still requires coverage. This proposal has not been implemented, and no revised manuscript has been approved. The user requested review, not drafting.

Parent-tool metadata: GPT-6 Astra/high for mathematics; GPT-6.1 Sol/high for notation; GPT-6.1 Sol/medium for the reader, after the requested GPT-6 Sol deployment was unavailable. Clean checker contexts were used; explicit proposals were shared only after the initial independent reports were saved.

## Appendix navigation, 2026-10-24

Numbered the existing appendix subsections A.1–A.7 and replaced vague references with precise links. The gap-preservation proof now cites A.7 for its maximal inequality and random starts. Mathematical statements, assumptions, formulas, arguments and ordering are unchanged. A fresh [notation/navigation check](reviews/2026-10-24-appendix-links/notation-check.md) passes this scoped update. Both 28-page PDFs compile with resolved references and stable review bars; the affected pages were visually inspected. The [review record](reviews/2026-10-24-appendix-links/REVIEW.md), [source manifest](reviews/2026-10-24-appendix-links/MANIFEST.sha256) and [artifact hashes](reviews/2026-10-24-appendix-links/ARTIFACTS.sha256) identify the exact versions. Previous mathematical and exposition assessments carry forward for the unchanged content.

## First-crossing explanation proposed in chat, 2026-10-26

The user requested a clearer, explicitly referenced explanation of the first crossing case for discussion in chat before integration. The [retained proposal and review record](reviews/2026-10-26-first-crossing-chat/REVIEW.md) identify the exact text, dependencies and separate correctness, notation and fresh-reader checks. All pass within this local scope; user agreement is pending. The proposal adds intermediate justifications and temporary equation numbers without changing the claim or assumptions. Active manuscript sources and both PDFs are unchanged. No integration, compilation, commit or PR update was performed; existing whole-paper assessments are not re-certified by this proposal.

## Revised first-case explanation proposed in chat, 2026-10-29

The [revised proposal and review record](reviews/2026-10-29-first-crossing-chat/REVIEW.md) address the user's requests for explicit boundary descriptions, expanded conditional moments, linear justification of summation by parts, and a local explanation of Doob's inequality and the temporary cutoff. Exact v3 passes scoped correctness and notation review and a fresh-reader test with three independent follow-up answers. The claim and assumptions are unchanged. Appendix A.7 is used only in Lemma 13; its relevant reasoning is included in the chat proposal, with no source or appendix edits. Manuscript and PDF hashes remain unchanged. User agreement is pending; no integration, compilation, commit, push or PR update was performed.
