# Assembled correctness review: gap-proof integration v1

## Assignment and provenance

- **Review ID:** `gap-integration-assembled-v1`.
- **Role / stage:** independent correctness checker; initial assembled-proof review.
- **Date:** 2026-10-29.
- **Reviewer:** `/root/integrated_gap_assembled`; assigned routing GPT-6 Astra / high.
- **Independence:** fresh checker context. Read the supplied manuscript and the explicit assignment, not the writer's drafting history, specification, status, previous reports, or author notes. No subagents were used. This initial report was saved before receiving historical findings or a rebuttal.
- **Instructions read:** `.agents/agents/correctness-checker.md`, `.agents/guidelines/reviewing-principles.md`, `.agents/guidelines/notation.md`, and `.agents/skills/write-and-review-paper/review-record.md`.
- **Reviewed version:** `reviews/2026-10-29-gap-proof-integration/v1/active/`, identified by `v1/VERSION.md` as based on commit `d7bb9f821f1c16cdfd03f80ba7c15a7a68eb05e1`. Active sources preserve original line numbers while removing comment text. Locations below are relative to that active directory.
- **Hash verification:** independently recomputed and matched all 13 `active/` entries in `v1/MANIFEST.sha256`, and `figure-dependency/active.tex` against its supplied manifest. Raw-source manifest entries were not opened or verified, as instructed.

Version fingerprints:

| Artifact | SHA-256 |
| --- | --- |
| `v1/VERSION.md` | `2bd920f3cef79a3924c42cce2b4d26d10aca39da1d140744a45bc3bb89828358` |
| `v1/MANIFEST.sha256` | `9f877a22736e1d9e13d8fc1ec2f2dedcdad4ddd642ebc0abb34a0f2a54276fbe` |
| `active/2-mcopi.tex` | `2420fd6fdc434b65be3e57fda7b82aa9404ef124d7dd808df88427653cb1790a` |
| `active/results/1-mean-field.tex` | `091fdf6e952b0a0243922e3f4f10a050bfc23b137fa85aebb390709b54012113` |
| `active/results/2-probability-to-improve.tex` | `167457040d1ea196991348c0b66f94e3a041b11434e639d7d36da2bd9cb8a875` |
| `active/results/3-convergence.tex` | `1c7115bf453862f21f7378a39deb17070d23bdabdaab0c67b4aba39b865d695a` |
| `active/z-appendix.tex` | `b2142c0d0f4fa104aafaf8827487fefeeba6d2c115fd982eb639fbabf2d65c68` |
| `figure-dependency/active.tex` | `61e765ffdc56f3b64cfe59164908c82bc1ff4ab1e1ba86460a43f3c6af751ce4` |
| `figure-dependency/MANIFEST.sha256` | `22542e218a09888e5b8211d29978d1787e8e588cb14896d00762be481f3eeb8a` |
| `v1/jmlr.pdf` (observed fingerprint) | `f56f176d3187386e4ab7f07818dd066245a0c143f78f36a7c336c79bfbac54f5` |

The PDF has no supplied comparison digest in the source manifest; its fingerprint records the artifact inspected. Extracted PDF text confirms the reviewed theorem, gap-preservation proof, and downstream convergence proof are present. This was not a page-layout review.

## Scope and claim understood

The assigned result is `thm: convergence mcopi uniform`, with its complete convergence dependency chain: finite-MDP assumptions, noise and fixed-target averaging, bounded limit sets, persistent-target identification, gap definitions and moments, both cases of `lem:barrier`, `lem:seeds`, `lem:measure`, stopped positive progress, repeated transitions, removal of containment, and optimal-policy identification. The mean-field propositions and strict Policy Improvement Theorem were also checked as incoming context. The revised unit is `lem:barrier`; no prior local pass was assumed.

The theorem concerns a finite MDP, either discounted or with every deterministic stationary policy proper, and finite deterministic initialization. Initial-visit MC-O-PI uses deterministic scalar rates in `(0,1]` with divergent sum, square-summable squares, and eventual bounded future increases `alpha_j <= c_alpha alpha_k` for `j >= k >= k_alpha`. Policies are greedy with inertial ties. The return noise is conditionally centered, with a common conditional second-moment bound given the pre-episode history and sampled pair. Sampling is uniform across the actions of each selected state, may adapt to history and the selected policy, and satisfies `sum_k alpha_k sigma_k(s,a) = infinity` almost surely for every pair.

Under precisely these assumptions, the theorem asserts, almost surely: finitely many changes in the action-value target `q_{pi_k}`; convergence of `q_k` to `q_{pi_*}`; optimality of every sufficiently late selected policy; and eventual constancy of the policy when each state has a unique optimal action. It does not assert eventual policy constancy with multiple optimal actions, a first-visit theorem, arbitrary fresh tie randomization, or convergence without the stated learning-rate regularity.

## Assessment

**Verdict: `pass` for the assigned assembled convergence argument in v1.** No blocking or nonblocking correctness finding was identified. The local gap estimate composes with the auxiliary-law construction and stopped progress argument to yield the stated theorem. This is a scoped mathematical audit, not a formal verification or a manuscript-wide publication recommendation.

### Foundations and fixed targets

Checked `2-mcopi.tex:112–148, 187–195, 239–271, 325–335, 352–413` and `z-appendix.tex:7–125`.

- Finiteness and discounting/properness make the policy values finite. Conditional return moments, rather than merely unconditional unbiasedness, supply the martingale differences used later. The filtrations satisfy `F_k subset F'_k subset F_{k+1}`; episode increments are measurable by the next pre-episode history.
- For a fixed comparison target, expanding the squared error gives the coefficient `1 - 2 alpha_k sigma_k + alpha_k^2 sigma_k`, which is at most `1 - alpha_k sigma_k`. The remaining conditional variance is bounded by `c_v alpha_k^2`. The nonnegative-supermartingale conclusion and divergent effective weights therefore force the comparison error to zero.
- The fixed-target calculation is made simultaneously for countably many deterministic restart times and finitely many policies and coordinates. This permits the later pathwise choice of the last discarded policy and coordinatewise extremal targets without conditioning the noise on future events. The two comparison averages bound the actual recursion because its coefficient `1 - alpha_k u_k` is nonnegative. No bounded-estimate premise is used to prove boundedness.
- A persistent action-value target need not imply a fixed policy, and the manuscript does not require that implication. Selecting an infinitely recurring policy, then passing its greedy inequalities along its subsequence to the fixed-target limit, correctly identifies the target as optimal.
- The strict-improvement implication is valid: nondecreasing state values follow from policy improvement; if those values were equal, their one-step expressions would make the action-value targets equal too. Thus differing targets force strict state-value improvement at a state.

### Gap recursion and both preservation cases

Checked `results/2-probability-to-improve.tex:20–330`.

- The reference policy is fixed at the restart, but later selected policies may change before the next target change. This is sufficient: the common target remains `q_pi`, and equal per-action sampling probabilities give the stated scalar gap recursion. The two possible initial-pair updates defining a gap are disjoint. Centering their signed return increment gives the variance bound `2(c_v + 4K^2) sigma_k(s)` without an independence assumption.
- The stopped noise includes the increment whose endpoint is the first nonpositive gap, target change, or exit. Its multiplier is known at the beginning of that increment. The zero-mean and second-moment identities apply before that endpoint; after stopping the increments are zero.
- In the first case, every preceding gap is strictly between zero and `delta`, while the target gap is at least `4 delta`. Summing the recursion gives `M_n <= -d_{t'} - 3 delta A_n`. The denominator `b_{k+1}` in the rescaled noise is predictable because the current sampling probabilities are already in `F'_k`.
- Summation by parts gives exactly the displayed endpoint term and interior weights, and hence `|M_n| <= 2 b_n max_{m <= n}|Z_m|`. The resulting threshold is `1/2`. The positive-start cutoff provides square integrability before invoking the conditional maximal inequality. A countable union of cutoffs removes any fixed lower bound on the random starting gap. Applying the deterministic-start argument on each `{t'=j}` handles the stopping-time restart. Conditional monotone convergence then covers all finite crossing times.
- The right-endpoint integral comparison is in the correct direction, including zero clock increments. Its integral is `1/(3 delta d_{t'})`; the bound is valid even if the clock has a finite terminal value. The first term is consequently `4 c_xi bar_alpha_{t'} / (3 delta d_{t'})`.
- In the second case, the last index with gap at least `delta` is used only pathwise. The noise-free update from that index is at least `delta`, because it is a convex combination of a value at least `delta` and the positive target. All subsequent pre-crossing drifts are nonnegative. Thus `M_n - M_ell <= -delta`, forcing the stopped noise magnitude to reach `delta/2`. The conditional squared-increment tail gives exactly `4 c_xi sum_{k>=t'} alpha_k^2 / delta^2`.
- These cases cover every finite first nonpositive gap: either there was an earlier gap at least `delta`, or all earlier gaps were in `(0,delta)`. They include direct crossings, equality at zero, starting gaps already at or above `delta`, and crossings ending at the stopping endpoint. No conditioning at a last-visit index is introduced. Learning-rate comparison is not used inside this lemma.

### Seeding and the auxiliary probability law

Checked `results/2-probability-to-improve.tex:332–376` and `z-appendix.tex:128–205`.

- The two estimation errors sum to more than `3 delta` when the current gap is below `delta`. At least one exceeds `3 delta/2`; the specified one-sided return event therefore increases the intended gap by more than `delta alpha_k`. Raising the reference estimate or lowering its competitor cannot decrease another reference gap. Inertia retains the reference action at unfinished states, including waits and the last successful update.
- The conditional one-sided second-moment calculation yields the stated positive action-and-return bound `p_0`. It does not require a lower state-selection probability. Each unfinished state requests only a finite number of updates, and processing/skipping has a stopping-time interpretation. For each of the `N` updates contributing to a completed gap, the rate comparison bounds every learning rate after completion by `c_alpha` times that update's rate. This yields the claimed margin in terms of `bar_alpha_{T_s}`, even across arbitrarily long waits and even at a completion coinciding with the endpoint.
- The auxiliary law conditions only a currently requested action-and-return event, after the state has been selected. Its density is a nonnegative martingale with conditional-mean-one factors and a deterministic bound `p_0^{-M}`, where `M = |S x A| N`. At most `M` request factors occur. The limiting density has conditional expectation one at the restart and gives the stated transfer inequality and absolute continuity.
- Crucially, future request factors average out at the next history. The displayed weighted conditional-law calculation therefore establishes unchanged state-selection probabilities and unchanged action-and-return laws at completed states. It does not replace this fact with conditioning on the global event of successful seeding. Dependence of future requests on present returns does not invalidate the calculation.
- On a completed state, the gap noise depends on its own update or a zero indicator when another state is selected. Preserving the state probability and its conditional action/return law is enough to preserve the gap moments under the auxiliary law, even while other states are receiving forced favorable updates. This verifies the probability-law premise of `lem:barrier` at its downstream use.

### Positive progress and assembly

Checked all of `results/3-convergence.tex`.

- The choice of `N` controls the rate-to-margin term, and the subsequent deterministic choice of `k_0` controls the squared-rate tail and ensures `N bar_alpha_{k_0} <= c_alpha`. These choices give a bound of `1/2` after summing over the finitely many bad pairs. The constants are uniform over sufficiently late stopping-time entries, policies, and adaptive state probabilities, for the fixed `K`.
- A state's completion event is known at its completion time. Conditional estimates there can be multiplied by the completion indicator and averaged back to `F'_t`; simultaneous completion and independent gaps are unnecessary. Completed states are protected through the endpoint; unfinished states retain their reference action; states completing exactly at the endpoint retain it on their last favorable update. Therefore a finite transition strictly before exit satisfies the policy-improvement inequalities against the restart policy.
- The event bounded in `eq:progress` is specifically a non-improving transition **before** exit. Exit at the same iteration stops the argument; later exit cannot retroactively excuse an earlier non-improving transition. If the interval is infinite without exit, its target is already constant. No assertion that every state must finish seeding is needed. Transferring the auxiliary success bound gives `p = p_0^M/2 > 0`.
- Iterating the conditional bound on finite continuing transition branches gives a probability at least `p^m` of stopping or obtaining `m` consecutive strict improvements. Stopped branches have no further conditioning requirement. A run of `|P|` strict improvements is impossible in the finite policy set, so successive blocks have survival probability at most `(1-p^{|P|})^j`. This conclusion remains valid when unsuccessful transitions worsen policies.
- Removing containment uses the **limit-set conclusion**, not merely the existence of a random finite bound. The norm is explicitly the supremum norm (`1-introduction.tex:118`), so the limiting coordinate box is contained in the ball of radius `max_pi ||q_pi|| < K`. Thus almost every path is eventually inside this particular deterministic `K`. Intersecting the stopped conclusions over deterministic integer restarts first, and only then choosing a contained restart pathwise, is valid and does not condition the noise on future containment.
- Finite target changes plus the persistent-target lemma give convergence to the optimal action values. Finitely many nonoptimal actions have strictly positive gaps from their state maxima, so convergence excludes them from all sufficiently late greedy policies. A greedy policy for the optimal values is optimal in the stated MDP setting; unique optimal actions give eventual policy constancy. These are exactly the theorem's conclusions.

## Findings and responses

No correctness findings are opened in this independent initial report. No findings have been resolved, withdrawn, or inherited from earlier reviews; historical findings have not yet been supplied. No manuscript edits were made.

## Limits and dependency effects

- This review independently checked the mathematical chain above. It did not carry forward approval merely because component reviews might exist.
- Standard finite-MDP policy-improvement/optimality facts and the nonnegative-supermartingale convergence theorem were used with their stated hypotheses. The cited books/papers were not fetched to verify bibliographic page numbering or original wording. The conditional calculations needed for their application were checked in the supplied manuscript.
- Introduction, abstract, discussion, and the supplied figure source were used for conventions and scope context. Novelty, experiment validity, first-visit behavior, broader extension claims, publication readiness, and detailed layout were not audited. No simulations or numerical checks were used; they are not evidence for the almost-sure theorem.
- This pass applies to the retained v1 sources and the stated dependencies. Changes to the moment assumptions, filtrations, tie retention, seed construction, auxiliary conditional laws, gap stopping convention, or repeated-progress/containment steps require reassessment of affected conclusions. The writer should record this result in the paper's status file; this checker did not edit that file.
