# Weighted preservation v1: independent notation review

## Assignment and provenance

- Review ID: `weighted-preservation-v1-notation-2026-10-18`.
- Role: independent notation checker; initial assembled-manuscript review, focused on the weighted gap-preservation result and its use in convergence.
- Reviewer: Codex agent `/root/weighted_notation`; exact model variant and reasoning setting are not exposed to this agent.
- Date: 2026-10-18.
- Independence: fresh checker context containing the explicit assignment and repository instructions only. No writer history, proposed reviewer replacement argument, raw manuscript files, other review records, STATUS, or SPEC was read. No manuscript was edited and no writer workflow was started.
- Local instructions applied: `.agents/agents/notation-checker.md`, `.agents/guidelines/notation.md`, `.agents/guidelines/reviewing-principles.md`, and `.agents/skills/write-and-review-paper/review-record.md`. The PDF skill was used for read-only rendering checks.
- Frozen version: `publications/jmlr/reviews/2026-10-18-weighted-preservation-v1/`, base commit `4482943da344c64e972b302999a6651253b5491c`, as recorded by `MANIFEST.txt`. All 17 `active/` digests in that manifest were checked against the retained files and matched.
- Authoritative manuscript: `active/jmlr.tex` and its active input tree. All manuscript prose, mathematical statements/proofs, macro definitions, and the simulation caption were inspected. Relevant bibliography entries were inspected for Bertsekas--Tsitsiklis (1996), Borkar (2002), Howard (1960), Kushner--Yin (2003), and Tsitsiklis (2002); original external source texts were not independently audited.
- Rendered version: `jmlr.pdf`, 28 pages, SHA-256 `ec295ffef5ba5858d7dd7cdffb0ad6744d665bdab1fe123ae80a1c5d5a26d745`. Visual notation inspection covered pages 13--19 (gap definitions, preservation, seeding, auxiliary-law transfer, and convergence), 25--27 (probability and maximal-inequality appendix), and page 21 (printed simulation notation and sampling discussion). Extracted text was used only to locate pages, not as a substitute for visual inspection.

## Assessment

**Verdict: pass for notation in the frozen active manuscript.** No blocking semantic ambiguity, notation inconsistency, or required convention correction was identified. No optional taste suggestion is needed for this increment.

As understood, the argument distinguishes the fixed action-value target at a random transition from the policy selected at later iterations. A state's estimated gaps against the reference action are seeded separately and then preserved under an auxiliary law that keeps that state's subsequent update distribution unchanged. The learning clock carries the same per-action sampling factor as the conditional variance. The resulting probability bound is uniform over late transition times and deterministic restarts and can be iterated without conditioning on future containment.

This is a notation verdict, not an independent certification of mathematical correctness, contribution significance, or the entire PDF layout. The external cited results were not audited, and uninspected PDF pages are not covered by the rendered-notation conclusion.

## Checks and evidence

### Definitions, domains, and shared notation

- The state-dependent action domain is expressly defined at `active/2-mcopi.tex:38`: `S × A` means pairs with `a ∈ A(s)`. Thus the cardinality `|S × A|`, the bad-pair set `B_pi`, and all minima over pairs have an unambiguous domain. No actual Cartesian-product assumption is imposed by the shorthand.
- `P` denotes the greedy-policy correspondence and `Q(pi)` its inverse region, while calligraphic `P` denotes the finite policy set and calligraphic `Q` the estimate space (`active/2-mcopi.tex:46,162,200,339`). These meanings remain distinct in active uses. Unused macros with potentially colliding expansions do not create an active-manuscript collision and do not justify unrelated macro cleanup.
- Elementwise operations, componentwise order, the supremum norm, and the empty-infimum convention are declared in `active/1-introduction.tex:112--119`. The policy order is then separately defined through state values in `active/2-mcopi.tex:107--110`; the strict order used in the transition proof has the same meaning throughout.
- `q_pi`, `q_{pi_*}`, and the selected policy `pi_k` remain distinct. Target-change times are expressly based on inequality of the complete action-value functions, not on any policy change (`active/2-mcopi.tex:390--400`; `active/results/2-probability-to-improve.tex:35--49`). Equal-value policy changes therefore do not silently change the fixed reference target.

### Probability law, information, and stopping conventions

- The two histories are defined before conditional moments are used: `F_k` precedes the iteration's policy/sampling/method choices, and `F'_k` follows them but precedes the episode (`active/2-mcopi.tex:194--196`). The inclusion `F_k ⊆ F'_k ⊆ F_{k+1}` and the stopping-time convention at `:388` make the subsequent conditioning scope recoverable.
- `sigma_k(s)` is explicitly the probability of **each pair** at state `s`, not the marginal probability of selecting that state; the state probability is `|A(s)| sigma_k(s)` (`active/2-mcopi.tex:264--271`). The drift, clock, variance bound, and completed-state auxiliary-law argument all use that same convention. Its nonstandard appearance does not warrant changing a clearly explained, useful shorthand.
- The deterministic bound `K`, restart `r`, exit `zeta_r`, reference policy, target-change time `tau`, gaps, and gap noise are defined together before use (`active/results/2-probability-to-improve.tex:28--47`). The event on which the random reference is defined is stated. Gap values are defined beyond the stopped recursion, so the terminal-update crossing event is meaningful.
- The endpoint convention is explicit in the preservation lemma and repeated in its proof: crossing includes the update ending at `tau ∧ zeta_r` (`active/results/2-probability-to-improve.tex:83--91,147`). The strict completion test `T_s < tau ∧ zeta_r` is kept separate from a state completed exactly at the endpoint in `active/results/3-convergence.tex:39--59`.
- `eta`, `M_n`, `A_n`, `b_n`, and `Z_n` are temporary notation with definitions adjacent to their use, and the suppression `d_k = d_k(s,a)` is confined expressly to the preservation proof (`active/results/2-probability-to-improve.tex:96--121`). The predictable denominator uses `A_{k+1}`, whose new increment is known at `F'_k`. The last-visit index `ell` is expressly pathwise rather than a conditioning time (`:139--147`).
- The generic preservation lemma explicitly interprets its probability and conditional moments under the given law (`active/results/2-probability-to-improve.tex:84--85`). At application, the auxiliary law is identified before its use, and only completed-state gaps are assigned the unchanged moment law (`active/results/3-convergence.tex:28--39`). The apparent reuse of an unhatted probability symbol inside the generic lemma is therefore explained and not an ambiguity.
- `widehat P` is defined on the same algorithm runs using the density `L_infinity`; `widehat E` consequently has its usual derived meaning. The appendix explains zero-weight histories, future factors averaging out, conditional state selection, and finite-time treatment of random starts (`active/z-appendix.tex:145--199`). These are enough to distinguish the auxiliary probabilities from conditioning the original process on future seed success.
- The countable deterministic restart argument is expressly separated from choosing a restart pathwise after eventual containment (`active/results/3-convergence.tex:80`). No stopped-time notation is attached to that future-dependent choice.

### Constants, scope, and necessity

- `c_v` is a deterministic uniform return-variance constant in the standing assumptions; `c_w` is quantified uniformly in time and pairs, and its proof supplies permitted dependence through `c_v` and the finitely many policy targets (`active/2-mcopi.tex:332,354--362`; `active/z-appendix.tex:52--62`).
- `c_alpha` and `k_alpha` are deterministic constants for the declared global rate sequence, uniform over all later indices (`active/2-mcopi.tex:187--191`). `bar alpha_k` is the supremum over that sequence's tail and is defined before the preservation estimate (`active/results/2-probability-to-improve.tex:75--79`).
- The positive deterministic target-gap constant `delta` is defined by the finite minimum over all bad policy/pair combinations, with the empty case separately disposed of. `c_xi = 2(c_v + 4K^2)` makes its dependence on the chosen localization bound explicit (`active/results/2-probability-to-improve.tex:60,67--72`).
- `p_0`, the favorable-request cap `N`, the completion times `T_s`, and the late-start constants `k_0,p` are defined before their uses. The progress lemma fixes `K` before quantifying deterministic constants uniformly over `r,t`; its proof shows their dependence on the finite MDP, gap constant, variance bound, and fixed learning-rate sequence (`active/results/2-probability-to-improve.tex:169,173--187`; `active/results/3-convergence.tex:6,15--26,61`). It does not claim uniformity over the choice of `K`.
- The new symbols each perform a concrete job: `A_n` isolates the state-weighted learning clock; `b_n` isolates the growing noise threshold; `Z_n` names the rescaled martingale; `T_s` allows different states to complete independently; and `L_k` records the bounded change of probability. Their scope is controlled and their memory cost is justified by the argument. There is no need for additional names, decorated clock variants, or a copied notation registry.
- The discussion continues the per-action interpretation of `sigma_k(s)` and defines the Bellman operator `T_pi` where it first appears (`active/4-discussion.tex:164--168,250--254`). Printed simulation labels define the local suboptimal policy and starting estimates in the figure; they do not alter the convergence notation.

### Rendered notation

The inspected pages have readable primes, bars, hats, Greek indices, strict-policy-order signs, stopping endpoints, conditional-expectation delimiters, sums, and fraction grouping. The long preservation bound fits on one line without clipping. The conditional integral bound and weighted conditional-law identity preserve their grouping in the PDF. The ordinary and auxiliary probability glyphs remain visually distinguishable. No notation-specific clipping, overlap, missing glyph, or misleading line break was found on the inspected pages.

## Findings and responses

- Required findings: none.
- Optional taste findings: none.
- No prior finding was supplied for reassessment; no writer response was used to close an objection.

## Version and dependency effects

This pass applies only to the manifest-verified active version and the PDF fingerprint above. Any change to the histories, per-action sampling convention, target/transition definition, stopping endpoints, learning clock, auxiliary-law conditional identity, or constant quantifiers requires a focused notation reassessment. A prose clarification that preserves these meanings may be eligible for carry-forward only after the changed text is actually inspected. The writer remains responsible for preserving this report and updating durable status; this reviewer did not modify STATUS.


# Follow-up: deterministic-threshold clarification, weighted preservation v2

## Assignment and provenance

- Follow-up review ID: `weighted-preservation-v2-notation-2026-10-18`.
- Reviewer: the same independent notation checker, `/root/weighted_notation`.
- Model provenance supplied by the writer after the initial review: GPT-6.1 Sol, high reasoning effort.
- The initial v1 assessment above is preserved exactly as originally written. After it was completed, the writer supplied an explicit finding that the maximal-inequality appendix initially declared `z` restart-measurable but pulled `z^2` outside an unconditional expectation. No other review record was read. I independently inspected the original formula, revised sentence, and its subsequent conditional extension.
- Version: `publications/jmlr/reviews/2026-10-18-weighted-preservation-v2/`, base `4482943da344c64e972b302999a6651253b5491c`. All 17 active-file digests match the v2 manifest. Byte comparison against v1 shows exactly one changed active file, `active/z-appendix.tex`; its only textual change is the threshold declaration at line 204.

## Independently reassessed finding

### WPN-01: randomness of the maximal-inequality threshold

- Category: notation/semantic dependency; **blocking for the v1 displayed unconditional argument** because the declared type of a threshold changes how its square can appear outside expectation. This is also a correctness issue in that calculation.
- Original location/version: v1 `active/z-appendix.tex:204--211`, PDF pages 26--27. The original text permitted `z > 0` merely to be known at the restart, then printed the bound `E[1_{theta=j} M_j^2] >= z^2 P(theta=j)`.
- Evidence: with such a random restart-measurable `z`, the immediate unconditional bound is `E[1_{theta=j} M_j^2] >= E[1_{theta=j} z^2]`; it is not in general the printed scalar product. The initial source notation audit did not identify this dependency error, so its v1 pass is superseded on this localized issue. The finding was actually reassessed here rather than closed based on a writer assurance.
- Resolution criterion: either make `z` deterministic during the unconditional finite-horizon derivation, or write the entire derivation conditionally with the restart sigma-algebra and keep the threshold inside expectation when needed.
- Revision and changed location: v2 `active/z-appendix.tex:204` now says to fix a finite horizon `N` **and a deterministic threshold `z > 0`** before defining `theta`.
- Disposition: **resolved**, verified by `/root/weighted_notation`, 2026-10-18. The new declaration permits the printed unconditional scalar bound. The unchanged final paragraph at `:212` separately explains the conditional extension for thresholds known at the restart. The main preservation proof uses deterministic thresholds `1/2` and `delta/2` after its initial-gap localization, so this local repair creates no incompatible new threshold requirement in the applications.

## Assessment and carry-forward

**Verdict: pass for notation in v2 source.** No new notation defect is introduced by the clarification. The v1 source audit's other observations carry forward on direct byte-equivalence evidence; the appendix threshold scope was independently rechecked above. No manuscript was edited by this reviewer.

Rendered v2 carry-forward remains to be recorded after the supplied v2 PDF is available. The v1 rendered inspection above is retained as version-specific evidence and is not being presented as inspection of an unseen v2 artifact.


## Rendered v2 follow-up

- Revised PDF: `publications/jmlr/reviews/2026-10-18-weighted-preservation-v2/jmlr.pdf`, SHA-256 `d979d40c0cbe6e6bd62b846d1b6cb6b235e231f9cd7b22ba0bc26fb15d00f0af` (independently computed).
- Visually inspected pages 26--27 at 130 dpi, including the complete corrected threshold paragraph, its displayed unconditional bound, and the subsequent conditional extension. The threshold is visibly declared deterministic before the bound, and the equation and later continuation are legible with no clipping, overlap, missing glyphs, or misleading line breaks.
- **Final v2 notation verdict: pass**, with source carry-forward and focused rendered verification as documented above. All required notation findings are resolved; no optional taste changes are requested. This does not extend the rendered inspection to unseen revised PDF pages or close another reviewer's findings on their behalf.
