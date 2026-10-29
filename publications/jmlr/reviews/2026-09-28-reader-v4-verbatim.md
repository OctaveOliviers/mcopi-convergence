## Reader’s independent response

**Version tested:** `restoration-v4`, PDF SHA-256 `446c114389c3751d6a33405eaa62293681a150037e39b8431b7a28bccd7b976e`. The source hashes I checked match `MANIFEST.txt`. I accepted the assignment’s statement that this exact version has correctness and notation clearance; no clearance reports or IDs were exposed.

**Scope read:** the full setup, assembled convergence proof, and supporting appendix in the permitted snapshot. I did not read `raw/`, `SPEC`, `STATUS`, writer notes, other reviews, or previous reader answers.

### Explain-back

The theorem concerns initial-visit Monte Carlo optimistic policy iteration on a finite discounted or terminating MDP. At iteration \(k\), the algorithm chooses a deterministic policy \(\pi_k\) greedy for its current estimate \(q_k\), samples one initial state-action pair, observes a full-episode return, and moves that one estimate toward \(q_{\pi_k}\). States may be sampled at unequal and adaptive rates. Within a selected state, however, every action must have the same sampling probability. Each pair must accumulate infinite total learning weight. The step sizes are square summable, have divergent sum, and later steps cannot exceed an earlier step by more than a fixed factor. Ties retain the previous greedy action.

The conclusion is stronger than convergence of a subsequence: almost surely, the policy action-value target \(q_{\pi_k}\) changes only finitely often, \(q_k\to q_{\pi_*}\), and all sufficiently late selected policies are optimal. The policy itself becomes constant when every state has a unique optimal action.

The proof first removes the noise. Equal update rates for actions in the same state are the key algebraic fact. If \(\pi_{k+1}\) is greedy for the new estimate, comparing its chosen action with \(\pi_k(s)\) after the common convex update shows
\[
q_{\pi_k}(s,\pi_{k+1}(s))
\ge q_{\pi_k}(s,\pi_k(s)).
\]
Thus the Policy Improvement Theorem makes every change of action-value target a strict policy improvement. Since there are finitely many deterministic policies, the mean-field target eventually stops changing. Fixed-target averaging then sends \(q_k\) to that target, and a recurrent greedy policy is greedy for its own action values, so the target is optimal.

Noise destroys deterministic improvement on individual transitions, so the stochastic proof establishes a fixed positive chance of progress instead. At a transition time \(t\), it fixes the current target policy \(\pi\) and calls an action “bad” when its true value under \(\pi\) is below that of \(\pi(s)\). For each bad action it tracks the estimated gap
\[
d_k(s,a)=q_k(s,\pi(s))-q_k(s,a).
\]
As long as the target remains \(q_\pi\), equal within-state sampling makes this gap drift toward the strictly positive true gap \(d_\pi(s,a)\); its noise has conditional mean zero and variance proportional to the state’s sampling probability.

The positive-gap construction has three parts.

1. **Seed.** If a bad gap is small, either raise the reference estimate or lower the competitor, choosing which according to the current estimation error. A one-sided second-moment bound gives each requested favorable return a uniform positive probability, conditional on the state being selected. Inertia keeps the reference action selected at unfinished states. After at most \(N\) requests per gap, the seed size is proportional to \(N\alpha_{T_s}\), unless it has already reached a fixed margin.

2. **Growth.** Once seeded, positive mean drift moves a gap toward a fixed margin \(\delta\). The proof measures time by the state-specific accumulated learning
\[
A_s(t',n)=\sum_{k=t'}^{n-1}\alpha_k\sigma_k(s),
\]
so arbitrarily long pauses in sampling that state cause no problem. A stopped martingale maximal estimate, applied over dyadic ranges of this clock, bounds the probability of closing the gap before reaching \(\delta\) by a constant times \(\alpha_{t'}/d_{t'}\). The step-size comparison turns the seed lower bound into an \(O(1/N)\) failure probability.

3. **Lock-in.** After the gap reaches \(\delta\), its deterministic update cannot push it below \(\delta\), and below \(\delta\) the mean drift is nonnegative. Closing the gap therefore requires a martingale fluctuation of fixed size. Square summability makes the probability of such a late fluctuation small.

States finish seeding at different, possibly very distant times. Conditioning directly on all seed successes could bias later returns at states that already finished. The auxiliary law avoids this: it reweights only requested favorable outcomes. Its bounded likelihood weight forces all requests to succeed while preserving state-selection probabilities and the ordinary action/return law at completed states. The resulting event probability transfers back to the original law at the cost of a fixed factor.

Choosing \(N\) first and then starting sufficiently late makes the total gap-failure probability less than one. Consequently, every sufficiently late target interval has a uniform conditional probability \(p>0\) of one of three outcomes: the estimate exits a fixed bound, the target remains unchanged forever, or the next target is strictly better.

The final repetition argument groups target intervals into blocks. A run of \(|\mathcal P|\) successful continuing intervals is impossible because it would contain too many consecutive strict improvements among finitely many policies. Hence every block has a fixed positive chance to stop, even though unsuccessful transitions may worsen the policy and the intervals are not independent. The probability of continuing through indefinitely many blocks tends to zero. Almost-sure boundedness lets the proof choose a late deterministic restart after which exit never occurs. Thus only finitely many target changes remain. A constant suboptimal target is impossible: fixed-target averaging makes \(q_k\) converge to it, and a recurrent greedy policy then becomes greedy for its own values and must be optimal.

### Critical inferences I could reproduce

- Equal action-update rates are used exactly when rearranging the new greedy inequality; unequal rates would leave unmatched coefficients and destroy the policy-improvement conclusion.
- Infinite accumulated learning identifies a fixed target; square summability controls noise. They have different jobs.
- The step-size comparison is needed twice: to compare earlier seed steps with the completion step and to control later growth noise relative to the seed margin.
- Inertia protects unfinished states during seeding.
- Boundedness is not obtained by conditioning on eventual containment. The proof first works before \(\zeta_r\), proves statements for every deterministic restart, and only then chooses a suitable restart pathwise on a countable intersection.
- Transition times track changes in \(q_{\pi_k}\), not every change in \(\pi_k\). Policies with identical action values may vary without affecting the target.
- Independence is unnecessary in the repeated-progress argument; conditioning at each finite transition and the tower property provide the product lower bound.

### Reading stops

1. **`2-mcopi.tex:170–179` — which pairs are actually updated.** The initial algorithm description mentions returns for pairs appearing in an episode before specifying “chosen pairs.” Sections 2.2.2 and the standing assumptions resolve this: the theorem uses only the sampled initial pair. This was a temporary ordering issue, not a gap.

2. **`2-mcopi.tex:390–400` — transition versus policy changes.** I initially read \(t_n\) as policy-switch times. The definition explicitly uses \(q_{\pi_k}\neq q_{\pi_{t_n}}\), and the constant-target lemma explains why this is the relevant object. Resolved.

3. **`2-probability-to-improve.tex:125–135`; `z-appendix.tex:134–189` — auxiliary probability law.** This was the main genuine stop because reweighting paths and conditional expectations exceed the stated reader prerequisites. The appendix supplies the construction, explains the martingale weight in ordinary language, proves boundedness and normalization, checks the law at completed states, and proves the transfer inequality. I could reconstruct its purpose and logic after that appendix. The advanced dependency is introduced rather than silently presumed.

4. **`2-probability-to-improve.tex:181–198` — dyadic growth estimate.** I had to verify why infinitely many clock ranges still yield a finite bound. The displayed \(2^{-j}\) estimate and the following summation resolve it.

5. **`3-convergence.tex:63–73` — repeated opportunities despite worsening transitions.** I paused to check whether a failed transition invalidates the finite-improvement argument. The proof restarts the probability bound from every surviving interval and only requires a consecutive successful run; line 71 addresses this explicitly. Resolved.

I found no unresolved inference that I would classify as a necessary exposition gap. The hardest material is genuinely advanced, but the manuscript states or derives the required machinery rather than asking this reader to know it already.

### Notation and memory burden

The main distinction \(q_k\) versus \(q_{\pi_k}\) is essential and consistently maintained. The local progression \(\pi,\mathcal B_\pi,d_k,d_\pi,\xi_k,\delta\) is manageable because each symbol has one job and remains close to its use. The later stopping indices \(\zeta,\tau,T_s,\nu,\rho,\eta\) and martingale symbols \(M,\widetilde M\) create high local memory load, but section boundaries and descriptive stage names make it tolerable.

The most noticeable collision is \(v_\pi\) for state value versus \(v_k(s,a)\) for return noise. Context disambiguates them, so I did not infer a wrong formula, but a different noise letter would reduce memory burden. This is an optional notation improvement, not a necessary explanation repair.

### Initial assessment

The independent read recovered the theorem, mechanism, assumptions, dependency progression, and delicate restart/change-of-law logic without assistance. I found no necessary revision from the initial explain-back. A formal exposition verdict remains pending the neutral Socratic questions required by the session protocol.

## Socratic exchange: unassisted answers

### 1. Does convergence require every state to complete its seed stage or every positive gap to reach \(\delta\)? Explain the finite and infinite endpoint cases.

No. Neither condition is required.

At a finite endpoint \(\tau\wedge\zeta_r\), a state that completed earlier is protected by the growth-and-lock-in estimate, including the update that ends at the endpoint. A state still unfinished retains its reference action because every successful seed update either raises the reference estimate or lowers a competitor, an unsampled state does not change, and inertia retains the still-greedy reference action. A state may also complete exactly at the endpoint; the Seed Lemma expressly includes that case. Therefore, if the finite endpoint is a target transition before exit, no bad action can be chosen: completed states have positive protected gaps, while unfinished states still choose the reference action. The Policy Improvement Theorem then makes the new target policy strictly better. The protected gaps do not all have to reach \(\delta\): the growth estimate protects a positive seed while it moves toward \(\delta\), and lock-in takes over only if it reaches \(\delta\).

At an infinite endpoint without exit, \(\tau=\zeta_r=\infty\), the target remains constant forever. That outcome already counts as stopping/progress in Lemma 13, regardless of whether all states ever finish seeding or all gaps reach \(\delta\). The later fixed-target argument then shows that such a permanent target must be optimal. This is why the proof explicitly says that it does not need every state to complete.

### 2. Which conditional identity ensures that completed-state return laws are preserved even when later requests depend on the current return?

The identity is Equation (28) in the rendered manuscript, labelled `eq: weighted conditional law` in `z-appendix.tex:166–180`:
\[
\widehat{\mathbb E}[Y\mid\mathcal F'_k]
=\frac{\mathbb E[L_\infty Y\mid\mathcal F'_k]}{L_k}
=\frac{\mathbb E[L_{k+1}Y\mid\mathcal F'_k]}{L_k}.
\]
The second equality uses
\[
\mathbb E[L_\infty\mid\mathcal F'_{k+1}]=L_{k+1}.
\]
It is the step that averages out all later request factors, even when those requests depend on the present return. At a completed state the current factor is one, so conditioning further on selection of that state leaves its action and return law unchanged under the auxiliary measure.

### 3. \(K\) is fixed before observing the path. Which precise boundedness conclusion makes a late restart stay inside that \(K\), and what justifies choosing the restart after observing the path? Note any step requiring knowledge absent from the text.

Lemma 3 gives the precise conclusion
\[
\sup_{k\ge0}\|q_k\|<\infty\qquad\text{almost surely},
\]
but that statement alone would only give a path-dependent finite bound and would not ensure containment inside an arbitrarily preselected \(K\). The stronger part of the same lemma says that the distance from \(q_k\) to the set bounded coordinatewise by
\[
\min_{\pi\in\mathcal P_\infty}q_\pi(s,a)
\quad\text{and}\quad
\max_{\pi\in\mathcal P_\infty}q_\pi(s,a)
\]
tends to zero. Because the proof fixes
\(K>\max_{\pi\in\mathcal P}\|q_\pi\|\), this whole limit set lies strictly inside the radius-\(K\) ball. Convergence in distance to that set therefore gives a finite path-dependent index \(r\) after which \(\|q_k\|\le K\) for every \(k\ge r\), equivalently \(\zeta_r=\infty\).

The restart may be selected after observing the path because the argument first proves the probability-one conclusion separately for every deterministic integer \(r\ge k_0\), then intersects those countably many probability-one events. On a path in that intersection, bounded-limit-set convergence identifies some deterministic integer value \(r\) that works for that path. The proof is making a pathwise choice among already-established deterministic-restart conclusions; it is not conditioning at an eventual-containment time or claiming that this path-dependent choice is a stopping time.

No step in these answers requires mathematical knowledge absent from the text. The implication from convergence in distance to an interior bounded set to eventual containment in the larger radius-\(K\) ball is not written as a separate lemma, but follows directly from the definition of distance and the strict margin \(K-\max_\pi\|q_\pi\|>0\). The countable-intersection justification is stated both in the fixed-target appendix and in the final convergence proof.
