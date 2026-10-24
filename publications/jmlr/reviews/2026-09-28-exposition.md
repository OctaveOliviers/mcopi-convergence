# Restoration exposition test

Writer-side record. Do not supply this file to a reader. Final disposition: **pass** for restoration-v4, session R-E4 below. Earlier diagnostic sessions and their revisions are retained as evidence. Session R-E2 began with fresh `/root/restored_reader`, requested GPT-5.6 Sol/medium, on restoration-v2 after restoration-v2-correctness and restoration-v2-notation-followup clearance. Only active sources, the PDF and role/background guides were supplied. The private assessment below was prepared before reader answers.

## Private assessment

The reader should understand the main theorem as initial-visit tabular convergence under uniform actions within a state, cumulative learning, bounded conditional return variance, deterministic square-summable rates with bounded future increases, and inertia in greedy selection. Targets eventually stabilize and late policies are optimal; arbitrary optimal ties do not imply policy-label constancy.

The proof's progression should be reconstructible without knowing the reference draft: ordinary fixed-target stochastic averaging gives the bounded envelope and convergence of persistent targets; common action update weights give mean-field policy improvement; favorable initial-pair updates create positive estimated gaps against policy-worsening actions; each state finishes separately; the state learning sum controls drift and variance through the same sampling factor; reweighting only pending requests preserves completed states' update laws; a uniform probability of success and finitely many possible consecutive improvements yield eventual target persistence. Countably many deterministic restarts remove localization without conditioning on future containment.

Important distinctions to probe: infinitely many visits versus infinite learning; state selection versus per-action update probability; original and reweighted laws; target changes versus policy labels; fixed-target convergence not relying on actual boundedness; finite conditional success chains not requiring independent trials or monotonicity on unsuccessful transitions. The clock/gap notation should support this explanation, not merely be decipherable by an expert.

Planned neutral transfer questions (adapt only to actual reader uncertainty, do not supply expected answers):

1. What would change if every pair were visited infinitely often but the cumulative-learning condition were removed?
2. If one state completes its seed stage and another remains unfinished, what justifies using the gap bound for the completed state? Explain which information is conditioned on.
3. A failed transition may undo earlier improvements. Why can the final finite-policy argument still rule out infinitely many transitions?
4. Why can the final restart be selected from the realized path? What earlier step permits this?
5. Which conclusions follow if the target is constant but the selected policy label continues changing, and which hypotheses make the label constant?

The final assessment will distinguish unassisted manuscript-supported answers from coaching. A reader who reconstructs a step from unstated specialist knowledge does not resolve a manuscript accessibility gap. New notation or rewording is warranted only by a concrete reading difficulty; preserve sound original exposition.

## R-E2 independent initial response

The reader correctly described initial-visit updates, the finite discounted/proper episodic setting, the conditional variance/rate/tie assumptions and adaptive state frequencies with infinite cumulative learning. It distinguished target changes from policy-label changes and the additional unique-action condition.

Its independent dependency account covered: strict policy improvement; fixed-target averaging; lower/upper comparisons and persistent-target optimality via a recurrent greedy policy; mean-field improvement from common action weights; gaps against policy-worsening actions; seed/growth/lock-in; preservation of completed-state update laws under the auxiliary measure; uniform conditional progress and the finite-policy block argument. It explicitly noted that states need not complete simultaneously, unsuccessful transitions may worsen policies, and independence is not used.

Verbatim reading-stop and burden report:

> `2-mcopi.tex:194-196`, `388-400`: The proof would use “history,” conditional expectation, and stopping times beyond the declared basic-probability background. The informal stopping-time definition explains recognizability, but not why conditional estimates can be restarted there. Later arguments repeatedly explain conditioning only on finite-time events, and the appendix treats random restarts by splitting over their finite values. I could follow the intended logic, though this remains a substantial undeclared probability prerequisite.
>
> `results/2-probability-to-improve.tex:125-135`: I did not initially see how one could force every seed success without corrupting the later return distribution at already completed states. `z-appendix.tex:125-179` resolves the mathematical mechanism by constructing the bounded likelihood weight L_infinity. The proof is self-contained at an algebraic level, but terms such as martingale, auxiliary law, and conditional law arrive with too little conceptual introduction for the stated reader.
>
> `results/2-probability-to-improve.tex:180-197`: The dyadic partition and the chosen pairs (b,z) appeared abruptly; I had to reconstruct why a crossing in each accumulated-learning band forces the corresponding maximal-noise event. My calculation resolved it: equation (33) supplies the needed noise threshold, and T(b) restricts the clock to that band. The manuscript never states this bridge explicitly.
>
> `results/3-convergence.tex:63-71`: I initially wondered how the argument survives unsuccessful transitions that can worsen the policy. Lines 71 and the preceding block construction resolve this: each surviving interval begins a new chance of |P| consecutive successes; monotonicity is required only within that successful run.
>
> `3-results.tex:7-13`: “Experiments show” sounded like an advertised supporting result for failure under arbitrary update distributions. The later numerical example compares initial- and first-visit behavior, but does not establish the stated suboptimal-equilibrium claim. This remained unresolved in the assigned manuscript.
>
> `jmlr.tex:154` and `1-introduction.tex:69-76`: “Realistic implementation when the state space is large or unknown” seemed stronger than the finite-state theorem, which requires every pair to receive infinite accumulated learning. The discussion restates the flexibility but does not explain how that condition is ensured when the finite state set is unknown. I understood the mathematical relaxation, but the practical claim remained insufficiently qualified.
>
> The high-level chain is clear and well motivated. The main memory burden begins inside the stochastic proof: r,t,t',tau,zeta_r,T_s,T(b),nu,rho,eta, two stopped noise sums, the state clock, several filtrations, and the original versus auxiliary probability laws. Lemma boundaries help, but T_s and T(b) are especially easy to confuse because they denote unrelated stopping times.

The reader proposed a time-symbol dependency map, a different clock-hitting symbol, a sentence linking the clock ranges to noise thresholds, a plain-language likelihood roadmap, support for the inherited experimental assertion, and further qualification of the practical statement. It reported no assistance or excluded-material access.

## R-E2 neutral questions

1. If one state finishes seeding while another remains unfinished, why does its later return law retain the properties needed for the gap bound? Identify the relevant conditional calculation.
2. For a crossing in the j-th accumulated-learning range, what inequality selects b and z in the maximal estimate?
3. K is fixed before the path is observed. Which earlier conclusion ensures a late restart remains inside that particular K, and what permits choosing the restart after seeing the path?
4. What fails if each pair is visited infinitely often but infinite cumulative learning is removed?

The reader was asked to distinguish specialist knowledge absent from the text from steps justified by later manuscript text. No answer, correction or hint was supplied.

## R-E2 unassisted answers and disposition

1. The reader supplied equation (41): the next-step auxiliary conditional expectation uses L_{k+1}, because later likelihood factors average out. State-selection probabilities are preserved; at a completed state the current factor is one, hence its conditional action/return law is unchanged. It identified the appendix calculation and imported no external theorem.
2. The reader derived b from the upper endpoint of each clock band and z from equation (33) and its lower endpoint; it noted that the selected z is weaker than the exact threshold. This was elementary reconstruction, but the manuscript had not explicitly stated the bridge.
3. The reader correctly used convergence to the recurrent-target box, whose norm is strictly below the predetermined K, rather than mere pathwise boundedness. It explained that a countable intersection over deterministic restarts precedes pathwise selection of a sufficiently late restart.
4. The reader explained that sparse visits can carry finite weight, so fixed-target squared-error convergence need not have zero limit and the deterministic product need not vanish. It understood the role of cumulative learning in target convergence.

R-E2 disposition: **revise** for the concrete clock-band bridge and the clock-hitting-symbol burden, not for a mathematical failure. The reader's main mechanism and four answers were accurate and unassisted. Its broader probability-language concern was resolved algebraically by the text; a short plain-language introduction to probability reweighting is nevertheless useful. No extra glossary or duplicate time-symbol map is needed because those quantities are already defined locally.

Changes prepared for v3: remove T(b) altogether, express the maximal bound directly over finite indices with accumulated learning below b, state how each band supplies b and z, and introduce the likelihood construction as assigning new probabilities via ordinary conditional reweighting. Mathematical review must confirm the equivalent stopped estimate. The earlier `restoration-final` snapshot is retained as the whitespace-only intermediary and is superseded by v3.

The inherited experimental-support observation remains a scope limitation from A4, outside the main proof replacement; no simulation was rerun or empirical claim changed. The practical statement is already conditional on finite-state coverage/cumulative learning in the abstract and introduction; this task does not establish a sampling algorithm for discovering unknown states. Those observations do not justify another introduction rewrite under the user's explicit restoration instruction.

The complete original R-E2 responses are retained separately in [reader-v2-verbatim](2026-09-28-reader-v2-verbatim.md), copied from the reader's own preserved responses without author rewriting.

## R-E3 assignment

Fresh reader `/root/restored_reader_v3`, requested GPT-5.6 Sol/medium. Exact version: restoration-v3, after `restoration-v3-correctness` and `restoration-v3-notation` clearance. Only that snapshot's active manuscript, macros, bibliography, PDF, manifest and local reader/role guides were supplied. Earlier responses, writer assessments and expected answers were excluded. The private mechanism assessment above still applies; the direct clock-band event replaces the former clock-hitting notation. Initial response pending.

## R-E3 initial response, dialogue and disposition

[Exact unassisted report and answers](2026-09-28-reader-v3-verbatim.md). The reader accurately reconstructed the theorem and complete dependency progression, including the distinct target/policy conclusions, conditioning at completed states, the dyadic growth mechanism and the finite-policy block argument. It reported no excluded-material access.

Three concrete reading findings remained:

- E3-01: the one-sided Chebyshev bound is essential to p_0 but not derived or provided as a clearly stated prerequisite. The reader recognized it from outside the stated background.
- E3-02: the 3 delta drift coefficient required looking back to d_pi ≥ 4 delta and combining it with d_k < delta. The elementary reconstruction worked, but the critical link was unstated.
- E3-03: calling sigma_k(s) the “state's update probability” was easy to confuse with the state-selection probability |A(s)| sigma_k(s), despite the correct preliminary definition.

The neutral follow-up asked whether every seed/growth stage must finish, why future-dependent requests do not bias completed-state returns, and why a late restart may be chosen pathwise with K fixed beforehand. All answers were unassisted and correct. The reader distinguished unfinished states and finite/infinite endpoints, gave the conditional likelihood identity, and explained the countable deterministic-restart intersection.

Disposition: **revise**, limited to these three explanation/terminology issues. V4 adds a short self-contained one-sided probability calculation in the appendix, states the 4 delta versus delta drift comparison before the crossing inequality, and consistently calls sigma_k(s) the per-action update probability at state s. No claim, assumption, numerical constant or substantive proof strategy changes. No additional main-text glossary or new lemma is introduced.

## R-E4 assignment

Fresh `/root/restored_reader_v4`, requested GPT-5.6 Sol/medium, on restoration-v4 after current correctness and notation clearance. The supplied scope, prerequisite profile and exclusion protocol are unchanged. No earlier reader response, writer expectation or other review was supplied. The private mechanism assessment remains as prepared before any reader answers, with v4 now explicitly supplying the one-sided estimate and growth coefficient.

## R-E4 independent response, dialogue and final disposition

Exact version: [restoration-v4](2026-09-28-restoration-v4/MANIFEST.txt), PDF SHA-256 `446c114389c3751d6a33405eaa62293681a150037e39b8431b7a28bccd7b976e`. Clearance IDs: `restoration-v4-correctness` and `restoration-v4-notation`. Model/effort are recorded as requested, not independently attested by the reader. The [verbatim initial response and unassisted answers](2026-09-28-reader-v4-verbatim.md) were copied from the reader's own saved record. The reader verified the snapshot hashes and reported no access to excluded material.

The initial response accurately reconstructed the theorem, assumptions, full dependency chain, seed/growth/lock-in, conditional reweighting and finite-policy repetition. It distinguished targets from policy labels, infinite visits from infinite cumulative learning, and stochastic progress from deterministic monotonicity. All reported reading stops were resolved by the manuscript, including the appendix's construction of the auxiliary law and the summed dyadic bound. The reader reported no necessary exposition gap.

Three neutral questions were asked after saving that response; their exact wording and full answers appear in the verbatim record. No hints, corrections or explanations were supplied.

1. Whether every seed stage must finish or every gap must reach delta: the reader correctly separated finite and infinite endpoints. At a finite transition, completed gaps remain protected through its final update, while unfinished states retain their reference actions. An infinite endpoint already means a persistent target; convergence does not require all stages to complete.
2. Why later requests depending on the present return do not bias a completed state's return: the reader gave the conditional identity replacing the terminal likelihood by its next-step value. Future factors average out; the current factor equals one at completed states.
3. Why a late restart stays inside a predetermined K, and why it may be chosen pathwise: the reader used convergence in distance to the recurrent-target envelope strictly inside K, explicitly noting that mere pathwise boundedness would be insufficient. It identified the countable intersection over deterministic restart indices before any pathwise choice.

Writer assessment: **pass** for the complete setup, assembled convergence proof and supporting appendix on restoration-v4. The evidence includes accurate unassisted reconstruction and justification of the probed nontrivial steps, not just the reader's self-assessment. E3-01 through E3-03 are resolved by the supplied calculation, drift explanation and per-action terminology. No manuscript changes follow this test.

The optional suggestion to rename return noise v_k is declined consistently with the independently dismissed N-REST-05: the user requires preservation of sound established notation, and the reader identified no ambiguous formula. The current notation gate remains applicable. The earlier empirical-support and unknown-state sampling limitations remain recorded above; this exposition pass does not validate experiments, establish a sampling algorithm, certify the proof formally or constitute human sign-off.
