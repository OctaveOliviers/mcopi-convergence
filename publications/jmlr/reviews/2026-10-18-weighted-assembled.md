# Initial independent assembled-proof correctness review

## Assignment and provenance

- Review ID: `weighted-preservation-v2-assembled-initial`.
- Role: correctness checker; final assembled-proof review.
- Reviewer: `/root/weighted_assembled`, fresh checker context. Exact runtime model and effort were not exposed to this checker.
- Date: 2026-10-18.
- Assignment: independently audit the complete theorem dependency chain, including the finite/proper MDP setting, policy improvement, boundedness, persistent targets, deterministic mean field, stochastic gap preservation, seeding, the auxiliary law, fixed progress, stopping and global convergence. Check that the advertised theorem and mathematical discussion match the argument.
- Version: `publications/jmlr/reviews/2026-10-18-weighted-preservation-v2/active/`, as listed in that snapshot's `MANIFEST.txt`; base commit `4482943da344c64e972b302999a6651253b5491c`.
- Verified all 17 `active/` file SHA-256 digests against the manifest using a local hash check; all matched. The manifest's description of the change was not treated as evidence of correctness.
- Read the checker role, reviewing-principles guide, notation guide, and review-record schema. Began from `active/jmlr.tex`; read all included active mathematical/text sources, including all three results files and the appendix, plus the macro file and figure caption source. Checked the bibliography for the cited dependency keys.
- Did not read `raw/`, SPEC, STATUS, previous reports, reviewer proposals, writer notes, or reader transcripts. No prior findings or source-verification evidence were provided before this report. No manuscript edits were made.
- This is a mathematical review, not a build/render audit or independent reproduction of the illustration's numerical experiments. External source texts were not supplied or opened. Classical finite-MDP and supermartingale facts were checked at the level of their mathematical contracts; historical priority and exact published-theorem comparisons remain outside this initial pass.

Principal reviewed source fingerprints:

| Source | SHA-256 |
| --- | --- |
| `active/jmlr.tex` | `ec4269faeb70c58fdcd4eb367cd2f6c4b702707a093510edb2159f0b837b8d35` |
| `active/1-introduction.tex` | `0f2c15322afc0773824fc5086eafd4657af43173b775ae9ca68c0d747dbdedb2` |
| `active/2-mcopi.tex` | `9ce6bc18bda6178689c654ca7df850c2d5bb3c8b86a875a7062d6062c4b91380` |
| `active/3-results.tex` | `240d1f17949d1fe3fcaeca3e127413d934bc2f806c7a48b1e425b67f1887669a` |
| `active/results/1-mean-field.tex` | `091fdf6e952b0a0243922e3f4f10a050bfc23b137fa85aebb390709b54012113` |
| `active/results/2-probability-to-improve.tex` | `53f3d77fe91f1bbfbef8a8de89b0ab6027ba134dda6c07e53b058da12af073ed` |
| `active/results/3-convergence.tex` | `725fa6db5e012525217e9d7893db9018f36f654e53f16bfe75fca5d3713e1663` |
| `active/z-appendix.tex` | `faa58abb716cae4de205478b7c214af7db15ad7a1cb3ca3e993bcd2ce68066c4` |
| `active/4-discussion.tex` | `a90fa6de3a4ea48c8654800d23938df506c63f6b761c74c1285fbfbd8b5f929b` |
| `active/z-maths.tex` | `4e25719e8af691c50e9b2602c96c8e4c6e8a0725722eb65978e8d8b1d3982b6f` |

## Verdict

**Pass for the assembled mathematical proof, within the stated scope.** I found no blocking error or missing stronger assumption in the proof of `thm: convergence mcopi uniform`. Its local estimates compose into the stated almost-sure result, including finite target changes, under the standing assumptions as written. One nonblocking discussion accuracy finding is recorded below; the proof itself explicitly allows sampled updates to worsen a policy and is not affected by it.

The pass is not an external-source, empirical-reproducibility, or formal-proof certificate. I have not independently verified the exact literature comparisons or the numerical counts in the discussion. Those limitations do not mask an unresolved step in the assembled convergence proof.

## Exact claim and assumptions checked

The main theorem concerns finite tabular state/action sets, finite deterministic initialization, and either discount factor below one or an undiscounted MDP in which every deterministic stationary policy is proper. Rewards have finite expected absolute value. Learning rates are one deterministic global sequence, positive and at most one, with divergent sum, square-summable squares, and a deterministic eventual bound `alpha_j <= c_alpha alpha_k` for all later `j >= k`. Policies are greedy and retain the preceding action whenever it remains greedy. Only the episode's initial pair is updated. Its return error has zero mean and a common finite second-moment bound conditional on the pre-episode history and selection of that pair. Conditional initial actions are uniform within each state; state selection can depend on history and the chosen policy. Every pair has divergent cumulative expected learning weight almost surely.

The conclusion is almost-sure convergence of the estimates to optimal action values, only finitely many changes of the target action-value function, and eventually optimal selected policies. Eventual constancy of the selected policy is asserted only when every state has a unique optimal action. None of these distinctions is lost in the proof: policies with the same target may change inside a block, and finite target changes are not equated with finite policy changes.

## Dependency and calculation audit

### 1. Finite/proper MDP foundation and policy improvement

Locations: `2-mcopi.tex:37-148`.

The finite state/action assumptions imply finitely many deterministic stationary policies. Properness of a fixed such policy gives a finite transient transition matrix and geometric termination tail; with a finite uniform bound on one-step expected absolute rewards, its values, including arbitrary initial actions, are finite. The discounted case is also integrable. Thus the maximum over policy target norms used later is deterministic and finite.

The policy-improvement contract is valid in both stated settings. The strict addition is correctly one-directional: weak improvement plus different action-value functions implies strict improvement at some state because equal state-value functions would imply equal action-value functions by their one-step expression. The proof does not require the false converse that equal action-value functions force equal state-value functions for arbitrary policies. Existence of a deterministic optimal policy and optimality of a policy greedy for its own action values are the standard finite discounted/all-proper contracts used subsequently.

### 2. Filtration, return moments, fixed-target averages and boundedness

Locations: `2-mcopi.tex:187-196,239-271,352-414`; `z-appendix.tex:4-109`.

The pre-episode histories satisfy `F_k subset F'_k subset F_{k+1}` and form an increasing filtration at the primed times. Chosen policy, sampling distribution, target, and estimate are measurable before the episode. Zero conditional mean for the return error given selection is sufficient to derive zero conditional mean for the combined noise. The second-moment estimate uses finite policy targets and the assumed return variance, not bounded returns.

For each deterministic restart, policy target and coordinate, the auxiliary fixed-target average uses the original indicator and centered return noise. Expanding its squared error gives a contraction coefficient `1 - sigma(2 alpha - alpha^2) <= 1 - alpha sigma` and summable additive error. Its initial squared error is integrable by finite-time induction. The supermartingale conclusion and divergent cumulative weight force its squared error to zero.

The countable intersection over restarts and finite policies/coordinates legitimately permits a pathwise later choice of the eventual target or coordinate extrema. The lower/upper comparisons use `0 <= alpha u <= 1`, so the coupling is order-preserving. This avoids conditioning on the future-dependent set of recurrent policies. Constant-target convergence is obtained on that same full-probability event.

The persistent-target lemma uses a policy occurring infinitely often inside a constant-target block and passes its greedy inequalities to the estimate limit. That policy is greedy for its own target and therefore optimal. No assumption of a positive lower sampling probability or finite expected waiting time is introduced.

### 3. Mean-field improvement and deterministic convergence

Locations: `results/1-mean-field.tex:29-85`; `z-appendix.tex:112-122`.

Equality of action update probabilities within each state permits subtraction and division by `alpha mu` when positive. The multiplier `(1-alpha mu)/(alpha mu)` is nonnegative. If the state has zero update probability, inertia retains its previous action. This establishes one-step policy improvement in every state. Targets are fixed between transition times, so the claimed target-block inequality also follows by chaining those action comparisons. Distinct targets at transitions imply strict policy improvement, with finitely many policies ruling out infinitely many such transitions.

The residual product on the final deterministic block tends to zero under divergent effective weights. The same subsequence-greediness argument makes the target optimal. The stated deterministic relaxation correctly does not need square summability or learning-rate comparison.

### 4. Gap identity and conditional variance

Locations: `results/2-probability-to-improve.tex:28-72`.

The reference policy is selected at the stopping time and then fixed in the gap definitions. Before the next target change, the current policy may change but its target remains the reference target. That is enough for the displayed scalar gap recursion. A bad action differs from the reference action, so their initial-update events are disjoint. Subtracting their update variables and centering gives variance at most the sum of their two uncentered second moments, bounded by `2 sigma (c_v + 4 K^2)` before exit. This uses only the assumed conditional return variance.

The minimum positive target disadvantage exists over a finite nonempty collection. The empty case is handled separately and correctly: every policy satisfies the weak improvement condition relative to every other, in both directions, so all policy values are optimal.

### 5. Weighted gap preservation, including terminal increments

Locations: `results/2-probability-to-improve.tex:74-148`; `z-appendix.tex:202-212`.

The indicator `k < eta` is known at the pre-episode history. It retains the increment from `n-1` to `n` when `n` is the first gap closure, target transition, or bound exit. Hence the estimates cover the endpoint used in the subsequent policy-improvement test.

For a closure before reaching delta, every preceding drift is at least `3 delta alpha_k sigma_k(s)`. The accumulated-learning clock is adapted and its next increment is already known before the episode. Consequently dividing a stopped noise increment by the next threshold `d_start + 3 delta A_{k+1}` preserves its conditional mean. The summation-by-parts identity and bound `|M_n| <= 2 b_n max |Z_m|` are correct. The sum of right-endpoint rectangles for the decreasing inverse-square function is at most its integral, giving precisely the first displayed bound `4 c_xi bar_alpha/(3 delta d_start)`. This does not need the state clock to diverge.

Localization to positive initial gaps bounded below by a deterministic epsilon makes the rescaled sum square integrable; finite-time decomposition handles random starts. The epsilon localization can be removed because the lemma assumes a strictly positive initial gap.

For a closure after reaching delta, the last preceding index at or above delta is used only pathwise. The noise-free update there is a convex combination of quantities at least delta; subsequent drifts before closure are nonnegative. A closure therefore forces two values of the same stopped martingale to differ by at least delta, and hence its supremum in absolute value is at least delta/2. Its variance sum is bounded by `c_xi sum alpha_k^2`, giving the second term. No conditioning at the last-visit index is used.

The appendix's maximal-inequality argument starts with a deterministic threshold, has the needed zero cross terms at the first crossing, then obtains conditional and infinite-horizon forms by localization and limiting thresholds. It supports the uses here. The two crossing cases exhaust finite closures, even if the initial gap is already at least delta or overshoots delta in an update.

### 6. Favorable updates, asynchronous completion and the auxiliary law

Locations: `results/2-probability-to-improve.tex:150-194`; `z-appendix.tex:125-200`.

For a gap below delta, the two estimation errors sum to more than `3 delta`; the requested update changes the selected coordinate in the favorable direction by more than `delta alpha_k`. Raising the reference action or lowering its competitor cannot reduce any other reference gap or destroy its greediness. Inertia therefore retains the reference action at every unfinished state, including when other states are sampled and on its final successful update.

The one-sided return estimate follows from the conditional second-moment assumption, including the zero-variance case. Uniform actions give the stated positive conditional success probability given that state is selected. There is no hidden state-selection lower bound.

Each processed gap is either at least delta or gains at least N favorable increments. Subsequent favorable requests cannot reduce it. Each such increment precedes completion, and the learning-rate condition bounds every rate after completion by `c_alpha` times that increment's rate. This proves the displayed margin in terms of `bar_alpha` at the state's own completion time, regardless of waiting times. There are at most the stated finite number of requests.

The likelihood process multiplies by a conditional success indicator divided by its success probability at requested updates, with conditional expectation one given the state and pre-episode history. It is a bounded nonnegative martingale because only a deterministically bounded number of factors can occur; a failure stops further requests and makes the weight zero. Its limit has conditional expectation one at the restart and at later finite histories. Thus the limit defines an absolutely continuous auxiliary law and gives the stated event-probability transfer in the correct direction.

The conditional-law verification uses the next-step weight rather than conditioning on the future event that all requests succeed. Future factors average to the next-step weight even if future requests depend on the present return. This preserves state-selection probabilities, and at completed states preserves the conditional action/return law since the current factor is one. At those states, the original gap recursion and variance bounds therefore remain applicable while other states are being seeded. The extension over finite-time events of a random restart preserves these conclusions. Original almost-sure properties remain valid by absolute continuity.

### 7. Fixed progress and global composition

Locations: `results/3-convergence.tex:4-82`.

N is chosen before the deterministic late starting index, so the constants are uniform over reference policies, states, restarts and future adaptive samples. The two numerical choices make the union bound on loss of any completed bad-action gap at most one half under the auxiliary law. Events of completing before the endpoint are known at the completion stopping time, enabling the conditional tower argument. The separate treatment of completion exactly at the endpoint is correct: its last favorable update still retains the reference action, so no preservation interval is needed for that state.

On the no-loss event, every state is safe at a finite target transition before exit: earlier completed states have positive bad-action gaps, and unfinished or just-completed states retain the reference action. This supplies the policy-improvement inequality at every state. Distinct targets make the improvement strict. No simultaneous or eventual completion of all state lists is assumed. A constant target forever is already a stopping outcome. The transfer inequality gives the positive uniform lower bound `p = (1/2) p_0^(number_of_pairs N)` for stopping or strict improvement.

The global argument does not multiply independent events. It conditions only on finite surviving transition histories and uses the tower property. On a branch that stops, success for the finite run is already decided; there is no need to condition at an infinite transition time. A run of as many strict improvements as there are policies is impossible, so every surviving block has a fixed positive probability of stopping. Repeating this bound makes infinite continuation before exit a null event, even though failed transitions can worsen the policy.

Removing localization is justified by more than mere pathwise boundedness: the bounded-limit-set lemma and the sup norm defined in `1-introduction.tex:118` imply eventual containment in every fixed K exceeding all policy target norms. Intersecting over deterministic integer restarts and only then choosing the contained restart pathwise avoids treating eventual containment as a stopping time. After finite target changes, the persistent-target lemma gives optimal estimate convergence. Finiteness of the action sets and strict gaps for nonoptimal actions give eventually optimal greedy selections, with uniqueness yielding eventual constancy.

## Assumption use and edge cases

- Finite policy and action sets are used for bounded targets, the positive disadvantage minimum, simultaneous null-event control, the finite strict-improvement chain, and exclusion of nonoptimal actions.
- Conditional return variance, not a bounded-return assumption, supplies every stochastic estimate. Heavy-tailed returns with the stated finite variance remain covered.
- Square summability supplies fixed-target averaging errors and the large-gap martingale tail; rate comparison is used for seeding relative to future rates. No lower comparison of future rates with past rates is used.
- Cumulative expected learning is used to force fixed-target averages to their target; the seeding argument does not require all lists to complete.
- Zero sampling probabilities and arbitrarily long state waits are allowed throughout. One-action states or states with no bad actions need no seed protection.
- Inertia is used for retention, not to assume policies are constant within a target block. The discussion's fixed-priority alternative preserves exactly this local retention property and appears valid under consistent initialization.
- The case gamma = 0 does not cause a problem even though different policies can share all action-value targets. Finite target changes and eventual optimal greedy policy selection remain separate conclusions.
- No numerical experiment is needed for the preceding mathematical verifications, and none was used as proof evidence.

## Findings and responses

### WA2-C1 — Sampled trajectories described as straight lines

- Category: definite discussion accuracy issue; **nonblocking for the convergence theorem**.
- Exact version/location: `weighted-preservation-v2`, `active/4-discussion.tex:48-58`, especially line 49: “initial-visit solutions follow straight lines that always point towards better policies.” The figure caption identifies blue curves as MC-O-PI solutions and grey curves as the mean-field flow.
- Evidence: the stated initial-visit recursion updates exactly one coordinate at a time. A sampled path in a two-action table therefore consists of coordinate-direction increments, not the straight mean-field trajectory generated by simultaneous equal-rate averaging. More substantively, the proof itself correctly states that sampled updates may worsen the policy (`results/2-probability-to-improve.tex:15`); its conclusion is a late conditional chance of progress, not monotone stochastic policy improvement. Line 58's broad “typically the best policy encountered so far” sentence is also not a theorem consequence and would need to be understood as an observation restricted to the illustrated experiment.
- Consequence: this wording can lead a reader to attribute the mean-field property or a general early-stopping guarantee to the stochastic algorithm. It does not enter the proof.
- Resolution criterion: identify the straight-line/improving-flow statement explicitly as the mean-field description for this example, and keep any stochastic early-stopping observation explicitly confined to the reported experiment. No change to the theorem or proof is required for this finding.
- Status: **open**. No author response or independent follow-up has occurred.

## Remaining scope limitations and handoff

The exact quantitative simulation outcomes (43, 68, and 70 updates over 1000 runs) were not reproduced because only the active manuscript and frozen figure artifacts were assigned. The historical comparison with prior MC-O-PI results, exact citation locations, and whether the cited literature supports the introductory “classical guarantees” formulation were not independently source-verified in this pass. These are distinct from the checked internal proof contracts.

This is the complete initial independent report. Any later author clarification, external source-verification evidence, or revision should be appended as a separately dated reassessment, preserving this initial verdict and finding. A substantive proof revision invalidates the affected part of this pass until reviewed; changing the nonblocking discussion sentence alone does not change the mathematical dependencies audited above.

## Reconciliation after the independent initial report — 2026-10-18

### New evidence and provenance

After completion and delivery of the initial report, the writer supplied `publications/jmlr/reviews/2026-09-28-source-checks.md` for reconciliation. I read that record only at this stage. Its SHA-256 is `9b35acb5aaad913a93ab11a9b2bb7fb52054b1e4604bfc94d4baacf76e9c2bb3`. It records independent source inspection on 2026-09-28 by `/root/standard_references` (GPT-5.6 Sol, medium), identifies the author-hosted Bertsekas–Tsitsiklis source and its digest, and gives the relevant page and proposition locations. The writer also supplied `GPT-6 Astra high` as dispatch metadata for this review. The initial report's statement that exact runtime metadata was not exposed at review time is preserved as part of its provenance.

I repeated the snapshot hash check during this reconciliation: all 17 active-file digests still match the v2 manifest. No manuscript revision has occurred between the initial review and this final proof verdict. I have not opened any other previous review, SPEC, STATUS, writer note, reader transcript, or raw manuscript. The supplied source-check record is now an explicitly disclosed exception to the initial no-prior-reports boundary.

### Assessment of the supplied source evidence

1. **Proper-policy termination and return moments.** The source record identifies NDP Section 2.2.1, Definition 2.1 and equations (2.7)–(2.9), printed pages 18–19, as the finite-policy geometric absorption-tail result. That is precisely the contract used in `2-mcopi.tex:114,246`. The ensuing finite-second-moment and finite-family uniformity synthesis is mathematically valid and was independently checked in the initial review. The source record correctly distinguishes that synthesis from a verbatim statement in the book. The main theorem assumes the conditional return moments directly; bounded rewards are given only as a sufficient way of obtaining them. Thus this evidence introduces no extra bounded-return or bounded-reward requirement into the theorem.

2. **Fixed-target supermartingale convergence.** The record identifies NDP Proposition 4.2, printed pages 148–149, as the nonnegative-process convergence theorem with summable positive error and finite accumulated negative drift. This matches the inequality at `z-appendix.tex:77-85`. Its hypotheses are supplied by the proof's finite-time integrability, adapted squared error, nonnegative effective weight, and deterministic square-summable error. The result does not require a positive sampling floor, deterministic state frequencies, or a prior bound on the actual iterates. The choice of Proposition 4.2 rather than the other results mentioned in the record is therefore appropriate for the adaptive sampling allowed here.

3. **Discounted versus episodic support.** The record's explicit separation of Tsitsiklis's discounted variance discussion from the episodic argument is consistent with v2. The proof does not rely on Tsitsiklis (2002) to supply an undiscounted convergence extension; it supplies its own argument under all-policy properness and the conditional return-moment assumption.

4. **Methodological sources.** The record says that Kushner–Yin Section 5.4 and Borkar Section 3 were previously checked for the combined strategy and fixed-interior lock-in setup. Those citations provide context and motivation in v2, not a missing convergence theorem on which this proof rests. The actual gap-preservation, auxiliary-measure and progress arguments are proved in the manuscript and were audited directly. I have not independently opened either source or the earlier methodology-source record, and do not expand the review into a source-history certification on the strength of this summary alone.

**No additional external source is needed to establish the mathematical proof within this review's scope.** The supplied source-verification evidence reconciles the two cited probabilistic foundations with the contracts checked independently in the initial review. The standard finite-MDP policy-improvement and greedy-optimality facts have the appropriate discounted/all-proper hypotheses, and their use does not conceal a stronger external convergence result. Exact attribution, historical priority and the broad comparison with all prior MC-O-PI guarantees remain separate source-review questions; this reconciliation does not claim those questions have been exhaustively checked.

### Finding disposition and final verdict

The writer acknowledges WA2-C1 as a legitimate pre-existing discussion concern and defers it from the focused proof-simplification revision. The experiment is unchanged and will not be rerun in this task. I agree that WA2-C1 does not affect theorem dependencies. **WA2-C1 remains open and nonblocking for the proof; it is not resolved, dismissed, or independently verified as corrected.** The numerical experiment counts and general empirical interpretation remain outside the verification performed here.

**Final verdict on unchanged weighted-preservation-v2: pass for the assembled convergence proof, with the initial source/history/experiment scope limits retained and the source-evidence reconciliation above added.** No blocking mathematical issue emerged from the reconciliation. This is a proof-scope pass, not a full empirical, historical, rendering, or publication-readiness approval. The exact reviewed version, initial findings and original independent assessment remain preserved above.
