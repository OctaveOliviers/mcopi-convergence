# Independent exposition response: weighted preservation v2

## Scope and assistance

I read the active snapshot rooted at `publications/jmlr/reviews/2026-10-18-weighted-preservation-v2/active/jmlr.tex`, the definitions and basic properties in `2-mcopi.tex`, Section 3 including all three results files, and the necessary appendix arguments in `z-appendix.tex`. I also read the introduction and the prescribed local exposition, notation, reader-background, reviewing, and session-format guides. I did not read excluded status/specification/review material, raw manuscript files, other reader answers, or author assessments. I did not use the PDF. This is my unassisted initial response, before follow-up questions. I am an AI reader, not a simulated human student. No author assistance was received.

The assigned background is basic algebra, finite sets, sequences, probability, and expectation. I can use advanced probability knowledge I possess to inspect the text, but distinguish that from what the manuscript actually supplies.

## My understanding of the result and mechanism

The estimate q is used immediately to select a greedy policy, rather than being allowed to finish evaluating that policy first. Thus the true evaluation target q_pi can change while q is still learning it. The theorem says those targets eventually stop changing, and then the ordinary averaging process converges to the optimal target. It does not assert that policy choices always improve or even that the selected policy is always eventually constant: different optimal policies can remain possible.

The useful unit of progress is a change of target, not every change of policy. Policies with identical action values can change without changing the direction in which the estimates are being pulled. This distinction lets the argument work with ties.

In the noise-free update, the two action estimates compared at one state move with the same coefficient toward their true values under the current policy. An action that was no better in the estimate and becomes better after that equal-weight update must have been at least as good according to the current target. The Policy Improvement Theorem converts these state-by-state comparisons into improvement of the whole policy. Because there are finitely many policies, strict improvement cannot continue indefinitely.

For sampled updates that argument fails on an individual run. The proof therefore does not attempt to make the stochastic estimate follow an entire deterministic trajectory. Instead it gives each sufficiently late target interval a fixed conditional chance of ending well: either the target stays fixed, or the next target is strictly better. The estimates are temporarily stopped at exit from a deterministic bound K so that the noise bounds have deterministic constants.

For a reference policy pi, only actions worse than pi(s) according to q_pi need to be excluded. Their estimated gaps d_k compare q_k(s,pi(s)) with q_k(s,a). Equal action sampling probabilities make the expected change of such a gap pull toward a positive target gap. Both this pull and its noise variance have the factor sigma_k(s). This common factor is the reason infrequent state updates can be handled: the amount of useful drift and the amount of variance both decrease together.

The preservation argument has two regimes. Before a gap has reached delta, a closure needs accumulated noise to offset both the initial gap and the positive drift accumulated at that state. Rescaling the noise by that growing threshold gives a second-moment bound proportional to the largest future learning rate divided by the initial gap. After the gap has reached delta, a later closure requires a noise excursion of at least delta over some interval; the sum of squared learning rates bounds that possibility. Hence a gap need not be bounded away from zero permanently. It needs to be a sufficiently large multiple of the remaining learning-rate scale, with a sufficiently late start to control the squared-rate tail.

A new target interval may start with zero estimated gaps, so preservation alone is insufficient. Seeding requests favorable updates. If a bad action's gap is small, either the reference estimate is too low or the competitor estimate is too high; their errors sum to a quantity exceeding 3 delta. Updating the appropriate estimate with a return noise of the allowed sign increases the intended gap by more than delta alpha_k. It cannot lower other gaps against the same reference action. Inertia retains that reference action while the state is unfinished. Each requested action and return event has a fixed positive probability conditional on that state being sampled.

Each state seeds separately. This is essential: a state may wait arbitrarily long while others finish. The learning-rate comparison condition makes each of its N favorable increments large enough relative to the future learning-rate supremum at its completion time, however long the waits were. A completed state is then protected by the preservation estimate while other states still seed.

The difficult probability combination is handled by an auxiliary law. The ordinary probability of all favorable requests can be exponentially small in N, while the gap-loss bound is only proportional to 1/N. Subtracting these two estimates would fail. Nor may we condition on eventual seed success and presume completed states still have unbiased noise. The auxiliary law instead changes only a current requested action/return distribution, leaving state selection and completed-state updates unchanged conditional on the current history. Under it all requests succeed. Choosing N large and the start late makes the probability that any completed gap closes at most one half. Unfinished states remain safe by inertia, so every finite target change before exit on the complementary event is a strict improvement. The bounded likelihood weight transfers this probability back to the actual law, at a fixed positive multiplicative cost.

Finally, the proof repeats conditional opportunities, without independence. A run of |P| successful intervals must stop, because |P| consecutive strict improvements are impossible. Each block therefore has a conditional stopping chance at least p raised to |P|, even if previous failed intervals worsened the policy. The probability of surviving arbitrarily many blocks is zero. Doing this for every deterministic restart and then choosing a restart on a path that eventually remains within K removes the artificial exit alternative. Once the target is constant, averaging forces q to converge to it; a policy occurring infinitely often is greedy for that limiting target and has that target as its own action values, so it is optimal.

## Where assumptions do work

- Finite states/actions give finitely many policies, a positive minimum of the nonzero bad-action gaps, a finite number of seed requests, and a finite union of gap-loss events.
- Discounting or properness ensures finite policy values and the policy-improvement/optimality facts used to identify the limiting target.
- Initial visits update just one pair. This gives disjoint gap updates and permits a requested update at one state to leave other states unchanged.
- Uniform actions within a state give the shared gap drift coefficient and the lower bound on the requested action's conditional probability. Uniform states are unnecessary.
- Conditional unbiasedness and bounded return variance supply zero-mean noise, the gap second-moment bound, and positive probability of each favorable one-sided return event.
- Inertia protects unfinished states and prevents changes at untouched states.
- Rates at most one preserve the convex-combination property used in comparison and in the post-delta crossing argument.
- Square summability controls future noise; the learning-rate comparison controls the margin built at widely separated requests relative to later rates.
- Infinite accumulated learning forces a constant-target average to converge to its target. It is not needed in the local preservation integral bound, and the progress argument does not need every state to finish seeding before a finite endpoint.

## Reading stops and resolutions

1. **`results/2-probability-to-improve.tex:49`, target constant although policy changes.** I first checked whether the fixed reference action in d_k could make this recursion invalid after a policy change. The transition definition in `2-mcopi.tex:390–400` resolves this: the target remains the same function, and the gap is a comparison against the original reference action, not necessarily the presently selected one. This is a resolved bookkeeping difficulty, not a missing hypothesis.

2. **`results/2-probability-to-improve.tex:117–135`, rescaling at the next threshold.** I stopped to check why division by b_(k+1) retains zero conditional mean and how it controls a crossing of M. Lines 121 and 123–129 explain predictability and summation by parts. I can reproduce the displayed summation identity and use the nonnegative increments of b to obtain the factor two. The appendix states/proves the maximal inequality needed next. Resolved by the manuscript; this is a hard inference receiving appropriate detail.

3. **`results/2-probability-to-improve.tex:139–147`, last visit to delta.** I checked whether the last-visit index was being treated as a stopping time. The proof uses it only to identify an interval of a realized path and bounds that interval's noise difference by twice the global maximum. Line 147 explicitly confirms that no conditioning is performed at this index. Resolved.

4. **`results/3-convergence.tex:28–39`, auxiliary probability law.** The main-text statement tells me what law is wanted but did not by itself let me justify that future favorable requests leave a completed state's current update unbiased. I read the appendix rather than assuming ordinary conditioning on success would do this. `z-appendix.tex:176–192` resolves the issue: the conditional expectation of the final likelihood weight is the current weight, so future request factors average out, even if their occurrence depends on the current return. I can reproduce this for bounded indicators and hence for the conditional update distribution. Applying it to return moments additionally uses the usual extension from bounded truncations to nonnegative variables. That extension is not spelled out, but it is a bounded verification step rather than an unresolved part of the mechanism.

5. **`results/3-convergence.tex:53–59`, no simultaneous seed completion.** I checked the finite-endpoint case before assuming the seed must finish. States completed strictly earlier are protected; unfinished states and those completing exactly at the endpoint retain the reference action after their successful update. Thus every state is safe at the transition. Lines 59 and the seed lemma resolve the concern. This explanation is necessary and useful.

6. **`results/3-convergence.tex:72–78`, arbitrary failed transitions.** A single chance of improvement would not prevent cycling, so I checked why failed transitions do not invalidate the finite-policy argument. The proof asks for a fresh consecutive run of successes in each block, not monotonicity of the whole stochastic policy sequence. The conditional induction and geometric survival estimate are sufficient. Resolved without an independence assumption.

7. **`results/3-convergence.tex:80`, eventual containment in this K.** Bare pathwise boundedness does not guarantee eventual containment in a predetermined K. I returned to `2-mcopi.tex:369–382` and `z-appendix.tex:88–109`: the stronger conclusion is convergence to the rectangle between policy values, all of which lie strictly inside K. That does guarantee eventual containment. The line's reference is sufficient, but naming this stronger conclusion would reduce effort: “convergence to the bounded policy-value set implies eventual containment in K.” This is a local clarification opportunity, not a mathematical gap.

## Reproducible inferences and limits of this response

I can reconstruct the main convergence mechanism, the purpose of the state clock, both preservation cases, the seed-margin comparison, the need for reweighting, the likelihood-transfer argument, the asynchronous completion logic, and the finite-block repetition. I did not find a central inference I remain unable to justify after reading the appendix.

I am accepting the explicitly stated and cited supermartingale convergence consequence in `z-appendix.tex:67` as a supplied advanced probability fact; I did not prove that theorem from elementary probability. The displayed fixed-target inequality, finite negative-term sum, and infinite-learning implication are understandable once this fact is supplied. Likewise the paper states the Policy Improvement Theorem and self-greedy optimality property as dependencies. This response is comprehension evidence, not an independent correctness clearance or evidence of human undergraduate comprehension.

I do not see a useful large cut. The explanations of why direct subtraction fails, why ordinary success-conditioning fails, and why states need not complete together carry distinct logical burdens. The main opportunity I found is the precise eventual-containment reminder above. The appendix's advanced probability treatment is demanding, but its key unfamiliar facts are stated and its central maximal/reweighting arguments are explained rather than presumed as stochastic-approximation expertise.

## Neutral follow-up exchange

No hints, corrections, or additional material were supplied. The following answers use the manuscript already read and do not alter the initial response.

### Question 1

Consider restarts where d_(t')(s,a) = c times bar_alpha_(t') for a fixed c > 0. What does increasing t' establish, and what does it leave uncontrolled?

**Answer.** Substitution into the preservation bound makes its first term exactly 4 c_xi/(3 delta c), independent of the restart time. Increasing t' makes the second term, 4 c_xi/delta^2 times the squared-learning-rate tail, tend to zero. It therefore removes that tail contribution but does not make the ratio-dependent contribution vanish. A fixed c need not give a small upper bound; if c is small, the stated upper bound may even exceed one and be uninformative. To obtain a chosen small bound from this estimate, one must first choose c sufficiently large and then choose t' sufficiently late. This does not show that the actual crossing probability fails to tend to zero for a fixed c; it shows that increasing t' alone does not establish that conclusion through this bound. No uncertainty about this deduction.

### Question 2

If A_n converges to a finite value, does the integral comparison in the first preservation case still follow? Justify your answer from the displayed sum.

**Answer.** Yes. Put f(x) = 1/(d_(t') + 3 delta x)^2. This is positive and decreasing. Each term in the displayed sum is (A_(k+1)-A_k) f(A_(k+1)). Because f(x) is at least f(A_(k+1)) for x between A_k and A_(k+1), that term is at most the integral of f over that interval. Summing finite partial sums gives an upper bound by the integral from zero to the corresponding A endpoint. If A_n tends to a finite A_infinity, the infinite sum is bounded by the integral from zero to A_infinity, which is at most the integral from zero to infinity used in the proof. Zero clock increments simply contribute zero. Thus no divergence of the clock is needed. The clock can be random: this comparison holds on each path, after which the conditional expectation preserves the inequality. The full integral evaluates to 1/(3 delta d_(t')), producing the displayed bound after multiplying by 4 c_xi bar_alpha_(t'). No uncertainty about this deduction.

### Question 3

A return at a completed state changes which seed requests occur later. Trace why the auxiliary law nevertheless preserves that return's conditional distribution, identifying the relevant conditional-expectation identity.

**Answer.** Later requests may depend on the current return, so the final weight L_infinity is generally related to that return. The important fact is not independence. It is the conditional-mean identity E[L_infinity | F'_(k+1)] = L_(k+1). For a bounded quantity Y determined by the next history, the appendix's weighted conditional-law identity gives

hat E[Y | F'_k] = E[L_infinity Y | F'_k]/L_k = E[L_(k+1) Y | F'_k]/L_k

on histories with L_k > 0. The second equality follows by first conditioning at F'_(k+1): Y is already known there, and all subsequent likelihood factors have conditional expected product one. This holds even if which factors occur later depends on the observed return.

To isolate a completed state s, let H be the event that s is selected. On H, the current likelihood factor is one, so L_(k+1) = L_k. Taking Y = 1_H times the indicator that the current action and return lie in a specified event C therefore gives

hat P(H and C | F'_k) = P(H and C | F'_k).

Taking Y = 1_H similarly preserves the state-selection probability. Dividing these identities when that probability is positive gives the same conditional action/return distribution under both laws, given F'_k and selection of completed state s. Histories with L_k = 0 have auxiliary probability zero, and zero-probability state selections need no conditional-law assertion. Future requests can still change the weighting of whole runs; their conditional averaging is what prevents them from changing this current completed-state distribution. No uncertainty about the bounded-indicator argument.
