### Independent explain-back

The paper studies initial-visit MC-O-PI. At iteration \(k\), it chooses a deterministic policy \(\pi_k\) greedy for the current estimate \(q_k\), samples one initial state-action pair, observes the episode return, and moves that entry of \(q_k\) toward the true value \(q_{\pi_k}\) plus zero-mean noise.

The theorem says \(q_k\to q_{\pi_*}\) almost surely under finite discounted/proper episodic MDPs, suitable learning rates, inertial tie-breaking, bounded return variance, uniform sampling across actions within each chosen state, and infinite accumulated learning for every pair. State frequencies may differ, be adaptive, vanish temporarily, and allow arbitrarily long waits. Eventually every selected policy is optimal; it becomes constant when every state has a unique optimal action.

The proof tracks changes in the target \(q_{\pi_k}\), rather than every policy change, because distinct policies can share an action-value function.

The dependency progression is:

1. **Strict policy improvement.** Lemma 1 turns the pointwise comparison
   \[
   q_\pi(s,\pi'(s))\ge q_\pi(s,\pi(s))
   \]
   into \(\pi'\succeq\pi\), strictly when their action-value functions differ.

2. **Fixed-target averaging and boundedness.** The appendix shows that an asynchronously updated scalar estimate converges to any fixed target when its accumulated learning weight diverges and squared step sizes are summable. Lower- and upper-target comparisons then bound \(q_k\). If the target eventually stops changing, the estimate converges to it, and an infinitely recurring greedy policy must be greedy for its own values, hence optimal.

3. **Mean-field policy improvement.** With noise removed, equal update rates for all actions at a state allow the greedy inequalities before and after an update to be rearranged into the Policy Improvement Theorem’s hypothesis. Target changes are therefore strict policy improvements. Finitely many deterministic policies imply that the target eventually stops changing; fixed-target averaging then gives the optimal value.

4. **Protecting improvement from stochastic noise.** For a current reference policy \(\pi\), \(\mathcal B_\pi\) contains actions that are genuinely worse than \(\pi(s)\) according to \(q_\pi\). The estimated gap between \(\pi(s)\) and each such action has positive drift toward the true positive gap. Preventing every bad gap from reaching zero ensures that the next target change is an improvement.

5. **Seed, growth, and lock-in.**
   - The **seed** requests finitely many favorable updates that create a positive gap. Uniform action sampling supplies a state-independent lower bound on each request’s success conditional on that state being selected.
   - **Growth** uses accumulated learning at that state as its clock, so long pauses do not hurt. The learning-rate comparison condition makes the created margin large enough relative to all later steps.
   - **Lock-in** uses square summability and a maximal inequality to make the chance that accumulated noise closes a fixed gap small.
   - The auxiliary probability law forces the finite seed requests to succeed while preserving ordinary update laws at states whose seed stage has finished. This avoids biasing their later returns by conditioning on all future seed successes.

6. **Uniform positive chance and repetition.** Choosing the number of seed requests first, then starting sufficiently late, gives a fixed \(p>0\): before leaving a fixed bounded set, an interval either lasts forever with one target or ends in a strict improvement, with probability at least \(p\). A run of \(|\mathcal P|\) strict improvements is impossible. Repeating blocks therefore rules out infinitely many target changes before exit. Almost-sure boundedness supplies a late restart from which exit never occurs. The fixed-target result then yields convergence to \(q_{\pi_*}\).

The most significant inferences I could reproduce were:

- Uniformity within a state, rather than across states, is exactly what permits the mean-field rearrangement in `results/1-mean-field.tex:41-63`.
- The proof never needs a lower bound on state-selection probability: the seed probability is conditional on selection, while growth is indexed by accumulated learning.
- States need not finish their seeds simultaneously. At a finite endpoint, unfinished states still retain their reference actions; an infinite endpoint already means a constant target.
- Failed intervals may worsen the policy. The final argument needs only a uniformly positive probability of a fresh consecutive run of improvements from every surviving interval.
- Finitely many target changes do not imply finitely many policy changes when different policies share the same target, which explains the theorem’s separate conclusion about unique optimal actions.

### Actual reading stops

| Location | What I initially thought | Resolution |
|---|---|---|
| `2-mcopi.tex:194-196`, `388-400` | The proof would use “history,” conditional expectation, and stopping times beyond the declared basic-probability background. The informal stopping-time definition explains recognizability, but not why conditional estimates can be restarted there. | Later arguments repeatedly explain conditioning only on finite-time events, and the appendix treats random restarts by splitting over their finite values. I could follow the intended logic, though this remains a substantial undeclared probability prerequisite. |
| `results/2-probability-to-improve.tex:125-135` | I did not initially see how one could force every seed success without corrupting the later return distribution at already completed states. | `z-appendix.tex:125-179` resolves the mathematical mechanism by constructing the bounded likelihood weight \(L_\infty\). The proof is self-contained at an algebraic level, but terms such as martingale, auxiliary law, and conditional law arrive with too little conceptual introduction for the stated reader. |
| `results/2-probability-to-improve.tex:180-197` | The dyadic partition and the chosen pairs \((b,z)\) appeared abruptly; I had to reconstruct why a crossing in each accumulated-learning band forces the corresponding maximal-noise event. | My calculation resolved it: equation (33) supplies the needed noise threshold, and \(T(b)\) restricts the clock to that band. The manuscript never states this bridge explicitly. |
| `results/3-convergence.tex:63-71` | I initially wondered how the argument survives unsuccessful transitions that can worsen the policy. | Lines 71 and the preceding block construction resolve this: each surviving interval begins a new chance of \(|\mathcal P|\) consecutive successes; monotonicity is required only within that successful run. |
| `3-results.tex:7-13` | “Experiments show” sounded like an advertised supporting result for failure under arbitrary update distributions. | The later numerical example compares initial- and first-visit behavior, but does not establish the stated suboptimal-equilibrium claim. This remained unresolved in the assigned manuscript. |
| `jmlr.tex:154` and `1-introduction.tex:69-76` | “Realistic implementation when the state space is large or unknown” seemed stronger than the finite-state theorem, which requires every pair to receive infinite accumulated learning. | The discussion restates the flexibility but does not explain how that condition is ensured when the finite state set is unknown. I understood the mathematical relaxation, but the practical claim remained insufficiently qualified. |

### Reader burden and rewriting needs

The high-level chain is clear and well motivated. The main memory burden begins inside the stochastic proof: \(r,t,t',\tau,\zeta_r,T_s,T(b),\nu,\rho,\eta\), two stopped noise sums, the state clock, several filtrations, and the original versus auxiliary probability laws. Lemma boundaries help, but \(T_s\) and \(T(b)\) are especially easy to confuse because they denote unrelated stopping times.

The text would benefit from:

- a short dependency map before Definition 12 identifying \(r\) as the deterministic restart, \(t\) as the current transition, \(\tau\) as the next target change, and \(\zeta_r\) as the bounding exit;
- renaming \(T(b)\) to a visibly different clock-hitting symbol;
- one sentence before the dyadic calculation stating exactly how equation (33) maps each clock band to a maximal-noise threshold;
- a plain-language roadmap for the likelihood reweighting in Lemma 15’s appendix proof, together with an explicit statement or citation of the probability result being used;
- support, a precise pointer, or removal of the arbitrary-update experimental claim at `3-results.tex:7-13`;
- qualification of the “large or unknown state space” implementation claim to acknowledge the finite-state and infinite-accumulated-learning requirements.

No assistance or expected-answer material was used. I am ready for neutral follow-up questions.

1. Under the auxiliary law, future seed-success weights average out. For any bounded \(Y\) determined by the next history,
\[
\widehat{\mathbb E}[Y\mid\mathcal F'_k]
=\frac{\mathbb E[L_{k+1}Y\mid\mathcal F'_k]}{L_k}
\]
(`z-appendix.tex:156-170`, equation (41)). State-selection probabilities are preserved because the current likelihood factor has conditional mean one given the history and selected state. If the selected state has completed seeding, that current factor is exactly one, so conditioning further on that state leaves its action and return law unchanged (`z-appendix.tex:172`). Hence the original gap recursion and conditional zero-mean/variance bounds still hold there.

2. Equation (33),
\[
M_n\le-d_{t'}(s,a)-3\delta A_s(t',n),
\]
is the selecting inequality. In the \(j\)-th range,
\[
2^{j-1}\frac{d_{t'}}{3\delta}\le A_s(t',n)
<2^j\frac{d_{t'}}{3\delta},
\]
the upper endpoint puts \(n\) before the clock threshold
\[
b=2^j d_{t'}/(3\delta),
\]
while the lower endpoint makes the negative excursion at least \(2^{j-1}d_{t'}\) (indeed equation (33) gives a slightly stronger threshold). Thus the maximal estimate uses
\[
(b,z)=\left(2^j d_{t'}/(3\delta),\,2^{j-1}d_{t'}\right).
\]

3. Lemma 4, the bounded-limit-set result, ensures eventual containment in that particular \(K\). It says \(q_k\) approaches the coordinatewise box spanned by the action values of infinitely recurring policies. Every point of that box has norm at most \(\max_{\pi\in\mathcal P}\|q_\pi\|<K\), so eventually \(\|q_k\|\le K\).

The proof first establishes its interval conclusion simultaneously for every deterministic integer restart \(r\ge k_0\), by taking a countable intersection of probability-one events. On a path in that intersection, one may then choose a deterministic-index value \(r\) lying after eventual containment. This is a pathwise selection from already-established conclusions, rather than conditioning at a future-dependent stopping time (`results/3-convergence.tex:73`).

4. Infinite visits alone can carry finite total learning weight because late visits may occur when \(\alpha_k\) is very small. Then
\[
\sum_k\alpha_k\sigma_k(s,a)<\infty.
\]
For a fixed target, the supermartingale argument only shows that the squared error converges and that its weighted sum is finite; it uses divergence of the weights to force the limiting error to zero (`z-appendix.tex:75-85`). Likewise, in mean field, the residual error contains
\[
\prod_j(1-\alpha_j\mu_j(s,a)),
\]
which need not vanish when the effective weights have finite sum (`z-appendix.tex:115-122`). The state clock used in growth can also accumulate only finite time. Therefore repeated visits need not fully erase an initial error or carry the gap to its target.

The auxiliary-law identity, late-restart argument, and cumulative-learning failure are all supplied explicitly by later manuscript text. The only inference I reconstructed rather than found stated in prose was the exact bridge from equation (33) and the \(j\)-th clock band to the choices of \(b\) and \(z\). That reconstruction uses elementary inequalities. Understanding why equation (41) defines a changed conditional law uses specialized conditional-expectation language absent from the declared prerequisites, but the manuscript supplies the calculation itself; I did not import an external theorem.
