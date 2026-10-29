# Gap-proof integration — notation review v1

## Assignment and provenance

- Review ID: gap-proof-integration-notation-v1.
- Role: independent notation/reference reviewer; initial source review.
- Result IDs: `lem:barrier`, `eq:barrier`, and their local use in `lem:seeds` and `thm: fixed prob that bad actions dont become greedy`.
- Date: 2026-10-29.
- Reviewer: `/root/integrated_gap_notation`; assigned routing GPT-6.1 Sol / medium (runtime identity not independently introspected).
- Independence: fresh checker context containing the role assignment and repository instructions; no writer history, expected reader answers, other reviews, STATUS, SPEC, raw/before files, or author notes consulted. No manuscript edits or subagents.
- Guides read: `.agents/agents/notation-checker.md`, its required `notation.md` and `reviewing-principles.md`, and `review-record.md`.
- Exact version: `v1/VERSION.md`, base commit `d7bb9f821f1c16cdfd03f80ba7c15a7a68eb05e1`; all 13 `active/` file SHA-256 entries in `v1/MANIFEST.sha256` verified against file bytes. The active sources retain line numbers and remove comment text.
- Principal reviewed file: `v1/active/results/2-probability-to-improve.tex`, SHA-256 `167457040d1ea196991348c0b66f94e3a041b11434e639d7d36da2bd9cb8a875`.
- Detailed scope: lines 20–330, including both cases of the new proof. Integration inspected at lines 332–376 and `results/3-convergence.tex:1–85`. Definitions/dependencies inspected in `1-introduction.tex` (norm convention), `2-mcopi.tex` (filtrations, learning rates, action domains, combined noise, uniform starts), `results/1-mean-field.tex` through relevant symbol/reference scans, `z-appendix.tex` (remaining dependency statements/proofs), `z-maths.tex`, `z-packages.tex`, `3-results.tex`, and `jmlr.tex`. Global active TeX source labels/references and relevant introduction/discussion claims were scanned for effects of the change.
- Omitted: independent correctness certification, unrelated manuscript revision, historical attribution of any source defect, rendered PDF review pending supply.

## Assessment

**Verdict: pass for the assigned source notation/integration scope.** This is not a whole-manuscript reference or rendering pass; the unrelated unresolved reference below remains open.

The lemma bounds the conditional probability that one positive estimated action gap becomes nonpositive through the finite target-change/containment endpoint. Its two terms control first crossing before any visit to the level delta, and crossing after such a visit. The proof uses a stopped scalar noise sum, a random accumulated-learning clock, and a predictable threshold rescaling in the first case; the last visit to delta is only a pathwise index in the second case.

Checks performed:

- The meanings and scopes of `d_k(s,a)`, the fixed-reference target gap `d_pi(s,a)`, gap noise `xi_k(s,a)`, `c_xi`, `delta`, and `bar alpha_k` precede the lemma. Suppression to `d_k` is explicitly proof-local. State-dependent action sets are covered by the preliminary convention for `S x A`.
- The reference policy is selected at the stopping time and remains the reference even if actual selected policies change without changing the target. This agrees with the recursion and downstream strict policy-improvement comparison.
- `K`, learning-rate sequence and global target-gap minimum are deterministic. `d_t'`, the restart, clock, thresholds, and noise sums are random; the proof does not claim otherwise. `bar alpha_t'` is determined by the restart since the rate sequence is deterministic. The conditional bound retains the random starting gap in its denominator.
- `eta`, `M_n`, `A_n`, `b_n`, and `Z_n` are defined near use and used within the proof. Their domains are supplied by the restart-indexed sums. There is no active conflicting use escaping this scope.
- The stopped-noise indicator is predictable, and `b_(k+1)` is known from the current primed filtration even though `A_(k+1)` carries the next index. Filtration definitions in `2-mcopi.tex:194–196` support this use. The text explicitly handles local square integrability when the starting gap is arbitrarily small and countably many finite restart values. No change to conditioning information occurs at the non-stopping last-visit index ell.
- The first case requires strictly positive gaps below delta at all preceding times. The second allows a preceding gap equal to or above delta, including at the start; equality at zero is failure. These cases cover all finite first failures and keep the update ending at the endpoint. The possibility `t' = tau wedge zeta_r` has no failure because its starting gap is positive.
- The last-visit definition of ell, its index range, the possibility `ell = n-1`, and the empty remaining-update sum are consistent with the formulas. No undefined gap at an infinite endpoint is evaluated: crossing events explicitly require finite indices.
- Application under the auxiliary law uses the lemma's explicit law-dependent moments. Completed-state starts strictly before the endpoint are protected through it; exact-endpoint completions are treated separately in `results/3-convergence.tex:39–54`. This preserves the endpoint convention rather than losing the last update.
- All new proof equation labels exist exactly once, and their references resolve. No remaining source reference points to an absent gap-proof appendix label. `eq:transfer` used in the remaining appendix is defined in `results/3-convergence.tex:32`. The discussion of learning-rate regularity agrees with its absence from the preservation lemma's hypotheses.

The global source inventory contained 86 labels and 156 reference commands, with no duplicate labels. `LastPage` is package-generated and therefore not a missing source label. One other reference was unresolved as documented below.

## Findings

### N-GPI-V1-01 — Unrelated unresolved discussion figure reference

- Role/category: notation/reference; definite source-reference defect.
- Severity: nonblocking for this assigned lemma/integration review, because it appears in an unrelated discussion example and does not support or refer to the gap-preservation argument. It prevents a claim that all active manuscript references resolve.
- Version/location: v1 active `4-discussion.tex:40`.
- Evidence: the active text uses `autoref{fig: experiment smallest MDP for iv vs fv}`, but no active TeX source defines that label. This was the only non-package unresolved reference in the global source inventory.
- Consequence: the discussion's illustration reference cannot resolve from these active inputs. Historical attribution to the removed appendix subsection was not verified because the assignment excludes before/raw files; no semantic connection to that subsection or the assigned proof is visible in the active source.
- Resolution criterion: supply the intended active figure and its label, or revise the unrelated illustration reference within a separately authorized scope; verify the resulting source/build reference.
- Status: open.
- Author response / revision: none at this review.
- Resolving reviewer and disposition: not yet applicable.

## Version and dependency effects

This review applies only to the verified v1 active bytes and their inspected meanings. A change to the lemma, gap definitions/constants, filtration conventions, endpoint conventions, learning-rate assumptions, auxiliary-law use, or affected reference labels requires reassessment. No prior approval is carried forward, and no STATUS file is edited by this checker.

## Rendering follow-up

Pending the supplied PDFs. No rendered equation legibility, clipping, equation-number placement, or page-break assessment is implied by the source pass.
