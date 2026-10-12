# Reader's independent initial response

## Assignment and independence

I read the frozen `gap-preservation-v1` manuscript sources, including the assigned two stochastic-proof files, their preliminaries and mean-field dependencies, and the supporting appendix. I also read the supplied checker instructions and local guides. I did not read specifications, status files, other review reports, previous reader responses, or private author notes. I verified that the supplied PDF has SHA-256 `0a04d412c1467dfb91b32e1aae367814bf84bb923ecdab44f4943b791077cf97`. This is an exposition explain-back, not an independent correctness or novelty verdict. The exact reader model and reasoning effort are not independently exposed to me.

All source locations below are relative to this frozen version's `active/` directory.

## What is claimed

The algorithm repeatedly chooses a policy greedy for its current estimates, samples an initial state and a uniformly chosen action at that state, simulates the current policy's return, and updates only that initial pair. It can choose states unevenly and adaptively; the requirement is that every pair receives infinite accumulated learning weight, rather than that every state has a positive fixed sampling probability. The sampled return is unbiased for the selected policy's action value and has uniformly bounded conditional variance.

Under the complete standing assumptions, the true action-value target associated with the selected policy changes only finitely often almost surely. After the last change, the estimates converge to the optimal action values. Eventually every selected policy is optimal. The theorem does not assert eventual constancy of the policy in the presence of multiple optimal actions; it asserts that additional conclusion when each state has a unique optimal action. These distinctions are explicit in `results/2-probability-to-improve.tex:4–11` and `results/3-convergence.tex:73–75`.

A target change is a change of the whole function q_pi, not simply a change of the selected policy. Different policies can have the same target and can therefore occur inside one target interval. This is defined in `2-mcopi.tex:388–400` and matters throughout the gap argument.

## How the proof works and why the steps are needed

### 1. Constant targets are already understood

The first reduction is that the hard issue is how often the target changes, rather than convergence of estimates to a fixed target.

For a fixed scalar target, the appendix's squared-error inequality says that the expected next squared error is at most the current error minus a weighted portion of that error, plus a square-summable noise allowance. The supplied supermartingale convergence result makes the squared error converge and makes the sum of these weighted errors finite. Infinite accumulated learning then forces the limiting error to be zero: a strictly positive limit would make that sum infinite. See `z-appendix.tex:65–86`.

This scalar calculation also gives boundedness without assuming the policy stabilizes. At each pair, use the same sampled updates and noise to run two comparison averages whose fixed targets are the smallest and largest action values of policies recurring infinitely often. The actual estimate stays between these averages because the update is a convex combination with coefficient between zero and one. Each comparison average converges to its target, so the actual estimate approaches the corresponding finite box. See `z-appendix.tex:88–109` and `2-mcopi.tex:369–383`.

If the actual target stops changing, fixed-target convergence applies to the actual estimates. Some policy must appear infinitely often because there are only finitely many policies. Along its occurrences it is greedy for the estimates; passing these inequalities to the limit makes it greedy for its own action values. The supplied optimality criterion then makes it optimal. This is `2-mcopi.tex:403–414`, using the criterion at `2-mcopi.tex:144–149`.

The appendix takes the probability-one intersection over all deterministic restarts, policies and pairs before allowing a path-dependent choice of the last target and its starting time. Thus it does not obtain this result by conditioning on the future event that the target remains constant.

### 2. The noiseless mechanism identifies what must be protected

With noise removed, equal update probabilities for all actions at a state make their interpolation toward the policy's true action values use the same coefficient. A newly greedy action could not overtake the previous greedy action unless it is at least as good according to the current true target. The algebra in `results/1-mean-field.tex:41–63` makes this precise. When a state's update probability is zero, its estimates are unchanged and inertia retains its action.

The Policy Improvement Theorem then orders the policies. At a target transition the order is strict: if the state-value functions were equal, their one-step action-value expectations would also be equal, contrary to the definition of a target change. Therefore there can be only finitely many noiseless target transitions. See `results/1-mean-field.tex:65–67` and `2-mcopi.tex:118–141`.

The stochastic proof does not assume each actual transition improves the policy. It needs a uniform positive chance of a successful interval, so that a sufficiently long consecutive run of such intervals cannot continue indefinitely.

### 3. Protect only actions that would violate policy improvement

Fix the policy selected at the beginning of a target interval. For every action whose true value under that reference policy is lower than its reference action's true value, define the estimate gap between the reference action and that action. These are the pairs in B_pi at `results/2-probability-to-improve.tex:21–46`.

If these gaps stay strictly positive at completed states, those inferior actions cannot become greedy there. At unfinished states a different mechanism will retain the reference action itself. Together these facts make the next policy satisfy the Policy Improvement Theorem's inequality against the reference policy, even if its selected actions have changed at some completed states.

Before the next target change, subtracting the two estimate recursions gives a scalar gap recursion. Uniformity within the state lets the two drifts combine into a drift toward the fixed positive true gap. The reference action need not remain selected at completed states for this recursion to hold: the whole target remains q_pi before the next target transition. See `results/2-probability-to-improve.tex:49–62`.

The exit time from a deterministic bound K makes the conditional gap variance bounded by a constant times that state's per-action update probability. Importantly, this is a stopped estimate, not an estimate obtained by conditioning on the future event of never exiting. Every inferior true gap is at least 4 delta because there are only finitely many policies and pairs; see `results/2-probability-to-improve.tex:67–79`.

### 4. Seed margins state by state

An interval can begin on or arbitrarily near a boundary where an inferior action ties with the reference action in the estimates. Thus a positive true gap by itself does not give a useful initial estimate margin.

For a small estimate gap, either the reference action is sufficiently underestimated, in which case a favorable update raises it, or the competing action is sufficiently overestimated, in which case a favorable update lowers it. The two cases in `results/2-probability-to-improve.tex:82–92` cover the possibilities by comparing the true gap with the small estimated gap. Either favorable update increases the intended gap by at least c_s times the current learning rate and cannot reduce the other reference gaps at that state. It also retains the reference action through the inertia rule.

A one-sided variance bound gives a fixed lower probability for the favorable return condition. Uniform action sampling adds the reciprocal of the number of actions. The resulting p_0 is conditional on selecting the state; it does not contain a lower bound on that state's selection probability. The appendix supplies the elementary one-sided calculation at `z-appendix.tex:125–132`.

The construction requests at most N favorable updates for each inferior pair, skipping or stopping early once a gap reaches delta. The total number of requests is bounded even though their iteration times need not be. Each state completes separately. If a state completes at T_s, its gaps are at least the smaller of delta and c_s N alpha_T_s / c_alpha. Earlier increases count toward this margin because the learning-rate comparison condition bounds alpha_T_s by c_alpha times any earlier rate used for those increases. See `results/2-probability-to-improve.tex:101–122`.

This is enough margin at the current learning-rate scale. Waiting for all states to acquire a fixed positive margin would impose unnecessary sampling restrictions.

### 5. The auxiliary law avoids conditioning completed states on future seed success

Completed states continue to receive ordinary updates while other states wait. Simply conditioning on all future successful seed requests could bias the completed state's return distribution, especially when future sampling decisions depend on its current return.

Instead, the proof changes probabilities locally only when requesting a favorable update at an unfinished state. Its likelihood factor is the favorable-event indicator divided by that event's conditional probability given the state selection. Each factor has conditional mean one; at most a fixed number of factors differ from one, and their product is bounded above by p_0 to the negative number of allowed requests.

Under the resulting law every request succeeds. State-selection probabilities remain unchanged, and completed states' conditional action and return law is unchanged. The key reason future requests do not bias the present update is that their product has conditional expected value equal to the current weight. Therefore when evaluating a variable known after the current update, the eventual weight can be replaced by the next weight. At a completed state that next factor is exactly one. This is established explicitly in `z-appendix.tex:134–189`, particularly `166–182`.

The bound on the final weight converts an auxiliary probability into at least p_0 raised to the request bound times that probability under the original law. This is useful even without independence of requests or a bound on the waits. Originally null events remain null under the auxiliary law. The law changes only the proof's probability accounting, not the algorithm.

### 6. Preserve a seeded gap using the state's accumulated learning

The gap-preservation estimate is the central quantitative step. It bounds the probability that a positive seeded gap closes before or at the next target change or exit. The inclusion of the endpoint matters: a bad action selected at the transition itself would already defeat policy improvement.

For a gap initially below delta, stop on crossing zero, reaching delta, transition or exit. While the gap is between zero and delta, its true target is at least 4 delta, giving mean increase at least 3 delta times alpha_k sigma_k(s). Thus crossing zero requires a negative noise sum of magnitude at least the initial gap plus 3 delta times the accumulated learning A_s. See `results/2-probability-to-improve.tex:154–168`.

Both drift and noise variance are indexed by this same state probability. Up to accumulated learning b, the noise variance is at most a constant times the initial learning rate times b plus one-step overshoot. This follows by bounding all later alpha_k by c_alpha alpha_t'. The maximal inequality then bounds the chance of a large noise excursion before that accumulated learning level, with no dependence on how many ordinary iterations elapsed. See `169–180`.

Partitioning accumulated learning into an initial range and doubling ranges gives increasingly large noise excursions required for crossing. The variance grows proportionally to accumulated learning, whereas the squared excursion threshold grows quadratically. The resulting probabilities decay geometrically across ranges. Their sum is a constant times alpha_t' divided by the initial gap. This explains the alpha/gap scale in the lemma, rather than merely restating its bound. If the gap is smaller than c_alpha alpha_t', the displayed bound is already at least one, so no estimate is needed for that case. See `182–199`.

After the gap has reached delta, a deterministic update from a gap at least delta cannot drop below delta. At a hypothetical subsequent crossing, choose the last preceding index whose gap was at least delta. Between that index and the crossing the positive gaps below delta have nonnegative mean drift. Consequently a noise difference of at least delta is necessary. That difference forces the noise sum to attain absolute magnitude at least delta/2 at one of its two endpoints. The remaining sum of squared learning rates bounds that probability. The last preceding index is used pathwise; the proof does not condition at a future-dependent last visit. See `201–216`.

The appendix derives the needed maximal probability inequality from zero conditional means, square expansion, and a first crossing at a finite horizon. It also explains conditioning and stopping. Thus I need not silently assume specialized martingale knowledge to follow its use; see `z-appendix.tex:192–202`.

### 7. Convert protected gaps into progress, then terminate target changes

First choose N large, then choose the start late. Substituting the seed margin into the alpha/gap term makes it at most a fixed constant divided by N. The late start also makes the square-summable variance tail small. A union bound over all inferior pairs makes the auxiliary probability of any completed gap closing at most one half. Conditional estimates at the distinct T_s are averaged back to the interval start; simultaneous completion and independence are unnecessary. See `results/3-convergence.tex:19–44`.

On the complementary event, every finite transition before exit selects no inferior pair: completed states have protected positive gaps, unfinished states retain the reference action, and a state finishing exactly at the endpoint retains it too. The policy-improvement inequality therefore holds at every state. A genuine target change makes that improvement strict. If no transition or exit occurs, the target stays constant forever, which is also successful. Transfer from the auxiliary law gives the fixed p > 0. See `46–56`.

This success includes exit as a stopping alternative. It does not assert that every interval improves, and it does not count a later exit as redeeming an earlier bad transition.

From each continuing interval, the probability of stopping or making a strict improvement is at least p. Iterating conditional probabilities gives at least p to the m power for stopping within m intervals or making m consecutive improvements. There cannot be as many consecutive strict improvements as there are policies. Therefore every block of that many intervals has a fixed positive chance of stopping. Survival through j blocks has a geometric upper bound tending to zero, irrespective of occasional worsening transitions. See `results/3-convergence.tex:63–71`.

Finally, intersect this stopped conclusion over deterministic restart integers. The bounded-set result actually puts late estimates inside any K strictly larger than all true policy-target norms. On almost every path choose such a late restart, after the countable intersection, for which exit never occurs. The remaining stopping alternative is an eventually constant target. Fixed-target convergence gives optimal values, and finite positive optimal-action gaps exclude nonoptimal actions from late greedy policies. See `73–75`.

## Where assumptions matter

- Finiteness supplies finitely many policies, a strictly positive minimum over inferior true gaps when that set is nonempty, bounded policy targets, a recurrent policy for the constant-target argument, and a finite upper bound on consecutive strict improvements.
- Discounting or universal properness supplies finite true values and the policy-improvement and greedy-self-optimality facts stated in the preliminaries. Uniform conditional return variance is separately assumed; it powers fixed-target averaging, the seed probability and the gap-noise estimate.
- Initial-visit updates make the two updates in a gap disjoint and give the stated state-dependent variance bound. The proof is not a convergence proof for first-visit or every-visit updates.
- Uniformity among actions at a state gives a common gap drift coefficient and a uniform favorable-action probability conditional on the state. The state itself may have arbitrarily small or zero probability at some iterations.
- Inertia retains reference actions under successful requests and at states receiving no update. Greediness alone would permit switching away from the reference action at ties.
- Positive rates at most one give convex-combination comparisons and prevent the deterministic part of a gap above delta from falling below delta. Infinite accumulated learning makes fixed-target limits equal their targets. Square summability makes the noise tails vanish.
- The learning-rate comparison condition is used in opposite time directions for the seed and preservation estimates: it gives earlier seed steps a lower bound relative to the completion rate, and gives later preservation steps an upper bound relative to the restart rate. The manuscript appropriately describes it as sufficient for this proof, rather than necessary for algorithmic convergence.

## Reading stops and their resolution

1. `results/2-probability-to-improve.tex:49`: I initially needed to check why the gap keeps the same target when the selected policy can change. My attempted interpretation was that transitions track q_pi rather than the policy identity. `2-mcopi.tex:390–400` explicitly confirms this; the stop is resolved. No added explanation is needed.

2. `results/2-probability-to-improve.tex:124–135`: I needed to see why future seed success does not bias a completed state's current return. A naive global conditioning would not justify the moments needed for preservation. My attempted interpretation was a sequential likelihood change whose later factors average to one. The weighted conditional-law calculation at `z-appendix.tex:166–182` establishes exactly that. This was a temporary reading stop resolved by the supplied appendix, not a remaining exposition gap.

3. `results/2-probability-to-improve.tex:169–180`: I needed the stopped maximal inequality with conditional and random-start conventions. I interpreted retained increments as being selected using information available before they are drawn, so their zero conditional means survive stopping. The elementary proof and conventions at `z-appendix.tex:192–202` resolved the specialized prerequisite. The appendix proves a bound even stronger than the factor-four version used in the main proof; retaining the looser constant creates no comprehension issue.

4. `results/3-convergence.tex:73`: Boundedness alone would not imply eventual containment inside this particular fixed K. My attempted interpretation was that the stronger bounded-limit-set conclusion, with all comparison targets having norm strictly below K, supplies eventual containment. `2-mcopi.tex:372–379` and `z-appendix.tex:103–109` resolve this. The citation is sufficient, though saying “approach a box lying strictly inside K” here would make the precise reason more immediately visible. This is an optional clarification, not a missing justification.

I have no remaining reading stop in the assigned mechanism. I can reproduce the nontrivial connections above from the manuscript. I use the expressly stated/cited fixed-target supermartingale result and the expressly stated/cited policy-improvement and self-greedy optimality facts; I have not derived those general results from elementary prerequisites independently. They are supplied dependencies, rather than hidden assumptions.

## Reader effort and possible compression

The state-specific completion times, accumulated-learning variable, exit time, and temporary noise sums each address a distinct obstacle. I do not see an unnecessary symbol in the central seed/preservation argument. In particular, replacing the accumulated-learning variable by ordinary elapsed time would hide why sparse state sampling is allowed; removing endpoint discussion would hide why a crossing at the transition is covered.

The two crossing regimes are useful: one explains protection from a vanishing margin using drift, and the other uses the small remaining variance after a fixed margin has been reached. Combining them merely to shorten the proof would make the mechanism harder to retain.

One optional compression is `results/1-mean-field.tex:67`: after chaining the policy-improvement inequalities, the strict conclusion could refer directly to the strict policy-improvement lemma instead of repeating its equal-state-values/equal-action-values argument. The existing version is readable, and this is not required for understanding.

I make no requested restructuring of the stochastic proof. Its progression from purpose, to seeding, to preserving, to a probability of progress, to the finite-policy block argument is coherent. I am awaiting neutral follow-up questions before any final exposition disposition.
