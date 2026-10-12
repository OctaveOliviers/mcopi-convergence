# Reader’s independent response: preservation-first-v1

Unassisted initial response, saved before follow-up questions. I read the frozen active/results/2-probability-to-improve.tex and active/results/3-convergence.tex in full, with active/2-mcopi.tex, active/results/1-mean-field.tex and active/z-appendix.tex as dependencies. I also read active/3-results.tex for uniform-update definitions and inspected frozen rendering definitions. I read the exposition-checker role and its required local guides and session template. I did not read raw sources, SPEC, STATUS, other reports, private author assessments or previous reader answers. Correctness and notation clearance were supplied by the assignment, not independently checked here. No hints or corrections were received.

Prerequisites: algebra, finite sets/sums, inequalities, sequences/limits, probability/expectation and induction. I use the advanced convergence consequence stated in the appendix as a supplied dependency, not a result I independently derive from these prerequisites.

## Independent explain-back

The estimates converge almost surely to optimal action values. The crucial stronger intermediate conclusion is that the true action-value targets of selected policies change only finitely often. This does not necessarily make the selected policy constant: distinct policies may share a target, especially with optimal ties. Eventually every selected action is optimal; uniqueness of optimal actions then makes the policy constant.

The preliminary results reduce the problem to finite target changes. A fixed-target tail is an averaging process and converges to its target. A policy recurring infinitely often on that tail is greedy for the limit and has the same target, so it is greedy for its own true values and optimal. Separately, comparison averages trap estimates asymptotically inside an envelope of true policy values; this supplies eventual containment in a deterministic bound exceeding all those values.

Without noise, equal action update probabilities within each state allow an action switch only toward an action at least as good under the current true values. Thus every target change improves strictly. Noise can undo this, so the stochastic proof needs a positive conditional chance of a safe interval, uniform across sufficiently late starts and reference policies.

At an interval start, fix the reference policy and protect only actions strictly worse than its reference action under its true values. Positive estimate differences exclude these harmful actions from being greedy. Equal action probabilities produce a gap recursion pulled toward a positive true gap, with drift and variance both carrying the same state sampling probability. The fixed bound K is imposed through a recognizable exit time to control variance, not by conditioning on future containment.

The preservation estimate distinguishes small gaps from gaps that have reached delta. Before reaching delta, a crossing requires noise to cancel the initial gap and at least three delta times accumulated learning at that state. Partitioning this learning clock into doubling ranges makes the noise bounds summable: variance grows linearly in the range while the required excursion grows linearly too, and its square appears in the denominator. The bound scales as learning rate divided by starting gap. Once delta has been reached, a later crossing requires a noise difference of at least delta since the last visit above that threshold. One absolute noise-sum value must then reach half delta, so the squared-learning-rate tail controls the remaining danger. This explains why the required starting margin is a large multiple of the current learning rate rather than a fixed interior distance.

Seeding creates that margin. If the reference estimate is sufficiently underestimated, a favorable return raises it. Otherwise a harmful competitor with a small estimate gap must be overestimated, and a favorable return lowers it. Either change increases the intended gap without lowering others and retains the reference action as greedy. Inertia retains it through ties and waits. Bounded variance and zero mean give a positive one-sided favorable-return probability; uniform actions give a fixed requested-action probability conditional on the selected state. No lower bound for selecting that state is needed. The learning-rate comparison condition converts earlier successful increments into a margin proportional to the rate at the state’s own completion time.

The auxiliary law is essential because different states complete at different times. Conditioning the whole future run on seed success could bias intervening ordinary returns. Instead each current requested update is reweighted toward success, while state selection and completed-state update laws stay unchanged. The appendix’s request indicators divided by conditional success probabilities have mean-one multipliers and bounded eventual weights. Future factors average out given the next history, leaving only the current factor; at a completed selected state this is one. The bound on the total weight transfers an auxiliary probability back to the original algorithm.

Choose the request count first to make the summed preservation ratio terms small, then start late enough to make the summed squared-rate tails small. Average protection estimates from individual completion times back to the entry history and use a union bound. With auxiliary probability at least one half, all completed gaps survive through the endpoint. At a finite target change, earlier completed states exclude harmful actions; unfinished states and those completing at that endpoint retain their reference actions. The improvement inequality holds at every state, and changed targets make improvement strict. An exit first or an infinite interval without exit already counts as stopping. All states need not finish their seeds. Transfer gives a fixed positive original probability for these alternatives.

Finally, count consecutive successes rather than all improvements. From each surviving interval, repeated conditioning at finite transitions gives at least p to the power m chance of stopping or m consecutive improvements. Taking m equal to the number of policies makes the improvement-only alternative impossible. Each surviving block therefore has a uniform positive stopping probability, and survival through many blocks has a geometric bound tending to zero. Worsening transitions do not invalidate a fresh opportunity in the next block. Intersect conclusions over deterministic restart integers, then choose on each path a restart after eventual containment in K. Exit disappears, target changes are finite, and fixed-target convergence finishes the proof.

## Assumption roles

Finiteness supplies the positive minimum harmful-action true gap, finite seed and union bounds, a maximum length of strict improvement chains, a recurring final policy, and exclusion of all nonoptimal actions. Discounting or properness supplies finite true values and the policy-improvement/optimality properties; bounded return variance is an additional assumption. Initial visits make actual competing gap updates disjoint. Uniform actions supply a shared drift coefficient and requested-action probability. Inertia preserves unfinished reference actions. Rates at most one preserve averaging and the deterministic threshold bound; square summability controls noise tails; the comparison condition controls future steps and the seed margin at completion. Infinite accumulated learning forces fixed-target error to zero. The interval-success argument does not require a waiting-time bound or proof of simultaneous or universal seed completion.

## Actual reading stops

1. **results/2-probability-to-improve.tex:111–122:** I wondered why the clock is unstopped although the noise sum stops at the gap threshold/endpoint. Reconstructing the extra clock-threshold stopping resolved this: retained increments are limited by that threshold, and the earlier gap stopping can only remove noise. The event with clock below b is covered by the additionally stopped maximal estimate. No unresolved inference.

2. **results/2-probability-to-improve.tex:148–156:** I initially considered summing nonnegative drift from the first visit to delta. This fails for a gap above its true target. The last-visit argument resolves it: the deterministic update from the last visit preserves delta, and subsequent below-delta drift is nonnegative. The index is used pathwise, not conditioned on.

3. **results/3-convergence.tex:32–43:** My initial tentative interpretation was whole-future conditioning on successful requests. This would not justify unbiased completed-state returns in an adaptive process. **z-appendix.tex:176–192** resolves it: future weights average out at the next history and the current factor is one for a completed selected state. This appendix step is substantive and necessary.

4. **results/3-convergence.tex:55–63:** I expected infinite accumulated learning to ensure seed completion under the auxiliary law. The next paragraph removes the need: unfinished states are safe at finite endpoints, while an infinite endpoint without exit is already a constant target.

5. **results/3-convergence.tex:76–82:** Merely counting successful improvements fails when bad transitions undo them. The fresh consecutive-success block argument resolves this; its explicit sentence about unsuccessful transitions is useful.

6. **results/3-convergence.tex:84:** Mere almost-sure boundedness with a random supremum would not ensure containment in this predetermined K. The stronger bounded-limit-set lemma and its appendix proof resolve it: the limiting envelope is strictly inside K. This was a dependency-checking pause.

7. **z-appendix.tex:67–85:** I can expand the squared-error recursion and explain why its convergent squared error must have zero limit when its weighted-error sum is finite and weights sum infinitely. I rely on the stated supermartingale convergence consequence for those two conclusions. I cannot derive that cited theorem from the elementary prerequisites. It is an explicitly supplied advanced dependency.

No main-mechanism inference remains unresolved after these dependencies. This account does not certify every measure-theoretic detail independently; conditional/random-restart versions require careful reading and are supported by the appendix’s finite-time-event reductions.

## Reader effort

Preservation before seeding is helpful: the margin is a response to a quantitative need. Completion times, the state clock, last-visit index and auxiliary weights each have a real job; I found no unnecessary core symbol.

Two optional changes: at **results/3-convergence.tex:84**, name convergence to the policy-value envelope as the reason for eventual containment in fixed K. This distinguishes it from a path-dependent global bound. The final recap at **results/3-convergence.tex:89** repeats the opening strategy and could be shortened or omitted. The explanations about endpoint protection, nonsimultaneous completion and fresh runs after bad transitions should remain.

The specialist labels “stability–ODE” and “lock-in” in results/2-probability-to-improve.tex:17 are not prerequisites for my reconstruction; the following boundary/separation explanation suffices. No extra framework definitions seem needed.

No suspected mathematical gap arose in this initial reading. Final exposition disposition remains for the non-leading follow-up dialogue.


## Socratic exchange: unassisted answers

No hints, corrections or additional assistance were supplied for these answers. Locations below refer to the same frozen active manuscript.

### Question 1

How does the preservation bound behave at increasingly late starts when the initial gap equals alpha_{t'}^2, and when it equals C alpha_{t'} for a fixed C>0? What does waiting achieve in each case?

**Answer:** Since alpha tends to zero, both starting gaps are eventually below delta. For gap alpha squared, the first term becomes c_g c_alpha divided by alpha and diverges; the tail term vanishes. The bound is then trivial (a probability is at most one anyway). Waiting does not make this estimate assure preservation. This does not prove that the actual crossing probability approaches one.

For gap C alpha, the first term is c_g c_alpha/C, independent of start time, while the tail vanishes. Waiting removes the tail but does not reduce this fixed ratio term. A sufficiently large fixed C makes that term small; a small C can leave the bound trivial. Manuscript support: the preservation display and its discussion in results/2-probability-to-improve.tex:87–94. The substitutions and distinction between an upper bound and the actual probability are my direct inference.

### Question 2

In the composition proof, justify the displayed ratio bound at random T_s when the deterministic learning rates can have infinitely many increases.

**Answer:** Ordinary monotonicity is unnecessary. For every earlier successful update index k at this state, k is at least the start t, hence at least k_alpha, and k < T_s. The comparison condition gives alpha_{T_s} <= c_alpha alpha_k, even on a realized path with random T_s. Thus N successful increments each at least c_s alpha_k produce at least c_s N alpha_{T_s}/c_alpha. A gap reaching delta satisfies the other branch of the seed margin; subsequent favorable updates do not lower it.

Moreover T_s >= t >= k_0, and the deterministic late-start choice holds at every integer at least k_0, so N alpha_{T_s} <= 2 c_alpha. Since c_s = delta/2, c_s N alpha_{T_s}/c_alpha <= delta. The seed margin therefore implies min{d_{T_s}, delta} >= c_s N alpha_{T_s}/c_alpha. Dividing yields c_alpha alpha_{T_s}/min{d_{T_s},delta} <= c_alpha squared/(c_s N). Randomness of T_s changes neither of these pointwise inequalities. Manuscript support: seed-margin proof in results/2-probability-to-improve.tex:200–202 and choices/ratio in results/3-convergence.tex:23–47. Applying the deterministic all-indices statements on each realized finite completion time is my inference. No assistance needed.

### Question 3

Suppose state u finishes its seed before state v, and later favorable requests at v can depend on the intervening returns at u. Why is the preservation estimate still applicable at u under the auxiliary law? What happens to the overall argument if v never completes?

**Answer:** The auxiliary law is not ordinary conditioning on the whole future success event. Its limiting weight has conditional mean L_{k+1} given the next history. For a current return observable Y, this makes the weighted conditional law depend on L_{k+1}/L_k: all later request factors average out, even if those requests depend on Y. Given that completed state u is selected, this current factor is one; its action and return law remains original. State-selection probabilities also remain original. Consequently the gap drift and conditional noise moments at u remain valid from T_u until the target-change/exit endpoint, so preservation applies under the auxiliary law. Support: z-appendix.tex:176–192 and results/3-convergence.tex:43–55.

If v is unfinished at a finite endpoint, successful requests retain its reference action, so it cannot obstruct the policy-improvement inequality there. If there is no finite target change and no exit, the interval itself already has constant target; if exit occurs, the stopped proof counts exit. Thus the progress trichotomy does not require v to complete, and the block argument and later removal of exit remain valid. Support: results/3-convergence.tex:57–67. This explains why no simultaneous-completion or waiting-time argument is necessary. No assistance needed.
