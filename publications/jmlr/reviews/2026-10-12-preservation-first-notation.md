# Preservation-first v1 notation review

## Assignment and provenance

- Review ID: `2026-10-12-preservation-first-notation`.
- Role: independent notation checker; initial review of the frozen revised increment, with checks against its assembled dependencies.
- Reviewer: `/root/preservation_first_notation`; model reported by the session as GPT-6 (precise variant and effort unavailable).
- Date: 2026-10-12.
- Independence: started without the writer's conversation history. Read the assigned checker instructions, notation guide, reviewing principles and review-record format. Did not read SPEC, STATUS, writer notes, other review reports, raw manuscript sources or the earlier manuscript. The supplied build-completion message identified the new compiled artifacts; it did not supply an expected notation verdict.
- Result scope: `thm: convergence mcopi uniform`, `def: gap variables`, `lem:barrier`, `def: seed construction`, `lem:seeds`, `thm: fixed prob that bad actions dont become greedy`, and `lem:measure`.

## Exact version

Frozen root: `publications/jmlr/reviews/2026-10-12-preservation-first-v1/`, version `preservation-first-v1`, base commit `09d7e4cc45fb1a59153c2a40da2b7da59fedaff4`.

Authoritative source digests:

| Input | SHA-256 |
| --- | --- |
| `active/results/2-probability-to-improve.tex` | `728bd7e2a8558adb5894a5cebd08b4a12a9023eb1a8b4f94cd2ce65a520eef13` |
| `active/results/3-convergence.tex` | `cb377fae1c6cc2a3f8758a1c418869d39ab3daba6958faa25a2e881d6921d895` |
| `active/z-appendix.tex` | `57a86ba2b3a6c916021e5f1d2634ec80cbf0eabe1e073d6b7701899f1a5091e2` |

All 17 `active/` entries were independently checked against `MANIFEST.txt` and matched. Dependency checks used the supplied active introduction conventions, preliminaries and standing assumptions, mean-field section, results assembly, discussion, macro definitions, package definitions and main document. Reference labels were scanned across the active TeX inputs, including the figure input. The retained frozen sources and manifest specify the remaining dependency digests without duplicating them here.

Compiled PDF: `jmlr.pdf`, SHA-256 `0f2b73eef0161e711bc1692bc59c0afc494961b527fabb2c5e31b89b88398bd2`, 28 pages. Its hash and the retained `jmlr.log`, `jmlr.fls` and `jmlr.bbl` hashes matched the appended manifest entries. Visually inspected Poppler renders of pages 12–19 and 24–27, covering the revised argument, auxiliary-law proof and supporting maximal inequality. Shared main-text renders were supplied by the writer; appendix renders were produced independently from the retained PDF.

## Assessment

**Verdict: `pass` for the assigned notation scope and its checked global dependencies.** No blocking or nonblocking notation findings were identified.

The argument as understood is that each gap compares estimates against the action of the reference policy selected at the restart. Its positive target gap remains fixed until the next change of action-value target. Gap preservation supplies a bound whose first term depends on learning rate divided by starting margin, while its second term is a square-summable tail. Favorable updates supply the margin separately at each state. An auxiliary probability law forces only requested seed updates, preserves ordinary updates at completed states, and transfers a uniform progress probability back to the original law. The final repetition argument counts target transitions and distinguishes eventual optimality of selected policies from eventual constancy under unique optimal actions.

### Checked meanings and scopes

1. **Definition before use and ordering.** `B_pi` is defined at lines 21–25 of `results/2-probability-to-improve.tex`; the gap definition introduces `K`, `r`, `zeta_r`, reference policy `pi=pi_t`, `tau`, `d_k`, `d_pi` and `xi_k` before the preservation lemma. `delta` and `c_g` appear before that lemma; `c_s`, `p_0`, `N` and `T_s` appear before their seed uses. The subsequent probability lemma explicitly reuses these definitions. Preservation now precedes seeding without leaving an undefined seed quantity in its statement or proof.

2. **Shared domains and printed meanings.** The preliminaries expressly define the state-dependent shorthand `S x A` as admissible state-action pairs, so its cardinality in the request and union bounds is consistent with `A(s)`. The introduction supplies the supremum norm, elementwise order and empty-infimum convention. `sigma_k(s)` is the per-action probability at state `s`, whereas the state-selection probability is `|A(s)| sigma_k(s)`. The preservation clock uses the former consistently. The policy order `succ` is defined by a strict state-value improvement at some state, and its use at a changed action-value target invokes the supplied strict policy-improvement lemma.

3. **Constants and dependencies.** `delta` is uniform over the finite nonempty collection of positive policy gaps, with the globally empty case handled separately. `c_xi` is explicit in terms of `c_v` and `K`; `c_g` is explicit in terms of `c_xi` and `delta`. The uniform probability proof chooses `N` first and deterministic `k_0` second, making `p` independent of restart time and selected reference policy. `c_alpha` and `k_alpha` already have deterministic, globally quantified meanings in the learning-rate comparison condition. Reusing the symbols across these sections does not silently change those dependencies.

4. **Stopping and conditioning.** The gap definitions distinguish target changes from selected-policy changes. The gap recursion and conditional noise bounds apply strictly before `tau wedge zeta_r`; crossing events include the finite endpoint produced by the last retained increment. Completion at the endpoint is expressly included in the seed statement and distinguished from earlier completion in the preservation application. The histories `F'_k` contain the policy and sampling choices before the episode draw, and all relevant stopping times use this filtration. The last-visit index `ell` is used only pathwise, with an explicit warning against conditioning at it. The eventual restart in the global proof is chosen after a countable intersection rather than treated as a stopping time. No displayed expression requires evaluating the policy at an infinite transition in a counted success event.

5. **Auxiliary probabilities.** `widehat P` is introduced before its main-text use and defined by a nonnegative bounded likelihood weight in the appendix. `p_k(s)` is distinguished from `p_0` and from the eventual progress probability `p`, and its conditioning includes both the current history and selected state. `L_k`, its initial value, update factors, limit, zero-weight convention and random-start convention are supplied locally. The weighted conditional-expectation formula uses `widehat E` consistently with `widehat P`; the event and bounded-variable symbols used to verify it remain local to that proof. The explanation explicitly shows why later adaptive request factors average out. Original-law moments are not silently transferred to unfinished states under the auxiliary law: the main application concerns completed states whose conditional update law is unchanged.

6. **Probability-bound explanation and notation burden.** The paragraph immediately after `eq:barrier` accurately distinguishes a fixed positive starting gap from a margin tending to zero, and explains the separate purposes of a large multiple of the learning rate and a late start. The accumulated-learning symbol `A_s(t',n)` exposes the common sampling factor in drift and variance, justifying its local memory cost. The stopped sums and their stopping indices separate the two crossing mechanisms. `T_s` is needed to express asynchronous completion, and the auxiliary-law symbols are needed to distinguish laws with different conditional moments. None of these symbols requires a new global registry or an additional invented event name.

7. **Labels and rendered notation.** Active TeX labels are unique and all explicit manuscript reference targets resolve; `LastPage` is generated by its loaded package. The rendered bound, probability union, sums, denominator minima, history primes and weighted conditional-law equation are legible and correctly grouped on the inspected pages. References to the revised lemmas print the correct environment names and numbers. No glyph collision or visible equation overlap was found in this scope.

## Findings and responses

No findings; no stable objection IDs were created and no author response was needed. The numbered assessment checks above are evidence entries, not unresolved objections or transfers of earlier approvals.

## Scope limits and version effects

This is a notation approval of the frozen revised argument and compatibility with the inspected definitions and dependencies. It is not an independent proof-correctness verdict, a Socratic exposition test, an empirical reproducibility audit or an assessment of novelty. External cited sources were not opened; their notation is not needed to interpret the displayed increment. The PDF inspection covers the relevant pages listed above, not every rendered page of the paper.

No manuscript or macro edits were made. No earlier review was read or carried forward, and this review does not close any finding belonging to another role or version. Changes to the assigned definitions, constants, sampling conventions, histories, stopping rules, auxiliary law or corresponding macros require reassessment of this verdict. The writer may link this record and its current version from STATUS; the checker did not read or edit STATUS.
