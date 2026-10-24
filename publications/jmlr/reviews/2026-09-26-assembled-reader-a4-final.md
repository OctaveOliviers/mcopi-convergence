# Clean final assembled exposition test: A4-E

Reader `/root/assembled_reader_final`, requested `gpt-5.6-sol`, medium, fresh context (`fork_turns=none`). Runtime model identity was not separately exposed. Exact manuscript: [assembled-v4](2026-09-26-assembled-v4/MANIFEST.txt), cleared by A4-C and A4-N. Supplied the compiled manuscript, checked active sources and neutral role/prerequisite guides. Explicit access boundaries excluded raw sources, inactive comments, writer notes, SPEC/STATUS and earlier reviews. No assistance supplied. The following initial response was retained before follow-up questions.

## Initial independent account

Theorem 12 says that tabular initial-visit MC-O-PI converges almost surely to the optimal action-value table in a finite discounted or proper episodic MDP. Initial states may be sampled adaptively and at very unequal rates. The required symmetry is only that, conditional on a chosen state, all its actions have equal initial-pair probability. Each state must accumulate infinite learning weight. Returns must be conditionally unbiased with uniformly bounded variance; steps are square summable and cannot later exceed an earlier step by more than a fixed factor; policy ties use full inertia. The selected action-value target changes only finitely often, every sufficiently late selected policy is optimal, and the policy labels eventually stabilize if every state has one optimal action ([Theorem 12](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/2-probability-to-improve.tex:18)).

The proof works in three layers.

1. The preliminary lemmas make the setting safe. Properness implies a uniform geometric termination tail even for history-dependent control, giving finite values and suitable return moments. Policy improvement says that if a new policy never chooses an action worse under the old policy’s true values, its true values improve; a policy greedy for its own values is optimal ([2-mcopi.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/2-mcopi.tex:126), [2-mcopi.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/2-mcopi.tex:142)).

2. The deterministic mean field explains the direction of progress. Equal action-update coefficients within a state let the before-and-after greedy inequalities be combined to show that any newly selected action is at least as good under the previous policy’s true values. If the coefficient is zero, inertia retains the action. Policy improvement therefore makes true policy values monotone. Since only finitely many true policy-value tables exist, the target eventually freezes; divergent accumulated state weights then pull the estimate to that target, which must be optimal ([1-mean-field.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/1-mean-field.tex:14)).

3. The stochastic proof replaces guaranteed monotonicity with a uniform positive chance of progress. On an interval with reference target \(q_\pi\), a “bad” action is one whose true value is below the reference action. If every estimated gap against such actions stays positive, the next policy cannot be worse under \(q_\pi\).

   Favorable updates first seed positive gaps. If the reference estimate is too low, a sufficiently high return raises it; otherwise, a sufficiently low return lowers the bad competitor. Either update enlarges the intended gap and preserves the reference action. Uniform initial actions and the variance bound give every requested update a fixed positive conditional success probability ([2-probability-to-improve.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/2-probability-to-improve.tex:157)).

   States may wait arbitrarily long, so their seeds finish separately. Bounded future step increases ensure earlier successful updates remain large enough relative to the completion-time step. Full inertia keeps the reference action at unfinished states. The auxiliary probability law conditions only requested seed updates, leaving state-selection timing and later updates at completed states unchanged ([2-probability-to-improve.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/2-probability-to-improve.tex:184), [2-probability-to-improve.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/2-probability-to-improve.tex:233)).

   The state-clock barrier then bounds the chance that noise erases a completed positive gap. It measures time by accumulated learning at that state, so pauses cost nothing. Choosing enough seed updates and going sufficiently far into the square-summable step sequence makes the union probability of any protected gap failing at most \(1/2\). Consequently every sufficiently late fixed-target interval has a uniform positive chance of ending by leaving the temporary bounded ball, persisting forever, or changing to a strictly better target ([2-probability-to-improve.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/2-probability-to-improve.tex:35), [3-convergence.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/3-convergence.tex:5)).

A finite scalar ranking \(W(\pi)=\sum_iq_\pi(i)\) converts componentwise improvement into strict scalar increase. There cannot be indefinitely many consecutive increases among finitely many \(W\)-values. Repeating the fixed positive progress bound therefore rules out infinitely many target changes before a ball exit. The earlier stability lemma says almost every trajectory eventually stays inside every ball of radius \(K>B\); a countable intersection over deterministic restart times avoids conditioning on a non-stopping “last exit.” Hence only finitely many target changes occur. The persistent-target lemma then yields \(q_k\to q_{\pi_*}\), and convergence plus finite positive optimality gaps excludes every nonoptimal action from late greedy policies ([3-convergence.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/3-convergence.tex:62)).

The assumptions have distinct roles:

- Finiteness gives finitely many targets, a positive minimum bad-action gap, finite union bounds, and positive optimality gaps.
- Discounting or uniform termination makes values finite and supports policy verification; the explicit return-moment assumption supplies the stochastic estimates.
- Infinite accumulated learning makes actual update weight diverge and lets a persistent target determine the limit.
- Square summability makes accumulated Monte Carlo noise converge and controls late barrier failures.
- Uniform action probabilities give the common gap drift and a state-independent lower bound on each requested action.
- Full inertia preserves reference actions at unupdated and unfinished states.
- Bounded future step increases relates seed sizes to completion-time and later-noise scales.
- Initial-visit sampling makes the controlled initial-pair probabilities equal the actual update rates.

My main reading stops were resolved by later text:

- I initially wondered why every state’s seed must finish despite arbitrarily sparse sampling. It need not: unfinished states retain the reference action at any finite endpoint, while an infinite endpoint already means the target persists ([3-convergence.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/results/3-convergence.tex:45)).
- Conditioning all favorable updates seemed capable of corrupting the return distribution needed by the barrier. Lemma 15 explicitly conditions only active seed updates and proves that completed-state laws remain unchanged.
- Stability only gives eventual containment, whose starting time need not be a stopping time. The final proof resolves this through conclusions proved for every deterministic restart and a countable intersection.
- A constant target need not mean a constant policy label. The persistent-target lemma handles this by choosing a policy occurring infinitely often and passing its greedy inequalities to the limiting table.

I found no inference that I cannot justify from the manuscript. The remaining points are reader-effort issues rather than missing logic. The change-of-measure proof is necessarily dense for the stated prerequisite profile, although it introduces the needed concepts locally. “Combined stability–ODE” and “lock-in” are not independently explained as general methods, but no outside knowledge of them is needed to follow the actual proof. The one-sided Chebyshev sentence at lines 170–177 could state more directly that each desired event is the complement of the corresponding upper-tail event; its current wording briefly obscures the sign switch. The discussion correctly limits the theorem to tabular initial-visit MC-O-PI and does not claim the temporal-difference or function-approximation extensions ([4-discussion.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/4-discussion.tex:160), [4-discussion.tex](/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-09-26-assembled-v4/active/4-discussion.tex:173)).

## Follow-up dialogue

Writer questions, supplied after saving the initial response:

> (1) Why does the terminal likelihood have conditional mean one when request times have no deterministic bound? Give the limiting argument. (2) Later requests can depend on earlier completed-state returns. Why does Lemma 15 nevertheless preserve the completed-state action/return law, and what is the conditioning? (3) Would the local retention argument survive replacement of full inertia by fixed action priorities? Specify any initialization requirement. (4) In the final finite-level argument, unsuccessful transitions may lower W. Explain why the block bound still excludes infinitely many transitions before exit. Distinguish manuscript-supported answers from anything you cannot justify. No hints or corrections are being supplied. Also disclose whether any excluded files or inactive material were accessed during your initial reading or this follow-up.

Reader's actual response:

1. The likelihood process \(L_k\) is a martingale starting from \(L_t=1\). At most \(JN\) factors differ from one, so \(0\le L_k\le p_0^{-JN}\), even though their times are unbounded. On every path, \(L_k\) is eventually constant and therefore converges to \(L_\infty\). Bounded convergence gives, for every \(A\in\mathcal F'_t\),
\[
\mathbb E[\mathbf1_A L_\infty]
=\lim_n\mathbb E[\mathbf1_A L_n]
=\mathbb P(A).
\]
Thus \(\mathbb E[L_\infty\mid\mathcal F'_t]=1\). The manuscript also supplies a direct bounded-convergence argument:
\[
\mathbb E|X_n-X|
\le \varepsilon+2M\,\mathbb P(|X_n-X|>\varepsilon)\to\varepsilon,
\]
then lets \(\varepsilon\downarrow0\). For random \(t\), it applies the fixed-time construction separately on \(\{t=j\}\).

2. For bounded \(Y\) measurable with respect to the next history \(\mathcal F'_{k+1}\),
\[
\widehat{\mathbb E}[Y\mid\mathcal F'_k]
=\frac{\mathbb E[L_\infty Y\mid\mathcal F'_k]}{L_k}
=\frac{\mathbb E[L_{k+1}Y\mid\mathcal F'_k]}{L_k}.
\]
The second equality follows because future likelihood factors average out:
\(\mathbb E[L_\infty\mid\mathcal F'_{k+1}]=L_{k+1}\).
Writing \(R_{k+1}=L_{k+1}/L_k\), the relevant finer conditioning is
\[
\widehat{\mathbb E}[Y\mid\mathcal F'_k,S_{k+1}=s]
=\mathbb E[R_{k+1}Y\mid\mathcal F'_k,S_{k+1}=s].
\]
At a completed state, the current update is not conditioned, so \(R_{k+1}=1\). Hence its conditional action and return law, given the current history and selected state, is unchanged. Later requests may depend on that return, but their likelihood factors have already averaged to one in the passage from \(L_\infty\) to \(L_{k+1}\).

3. Yes. Fixed action priorities preserve the local retention argument if the same priorities are used consistently from initialization. At the reference time, the reference action is the highest-priority current maximizer. Leaving the table unchanged, raising that action’s estimate, or lowering a competitor cannot create a higher-priority maximizer ahead of it. Thus unfinished states retain their reference actions. The manuscript also states that fixed priorities give the same deterministic and stochastic convergence conclusions under this initialization convention.

4. The proof does not require \(W\) to remain monotone across unsuccessful transitions. From any alive interval, success has conditional probability at least \(p\), where success means absorption or a strict increase in \(W\). By the tower property, the probability of absorption within the next \(m\) intervals or of \(m\) consecutive strict increases is at least \(p^m\). On this selected branch there are no unsuccessful transitions, so \(W\) cannot fall.

If \(W\) has \(L\) distinct possible values, \(L\) consecutive strict increases are impossible. Therefore the all-success event over \(L\) intervals must include absorption and has conditional probability at least \(p^L\). Each surviving block of \(L\) transitions consequently has conditional survival probability at most \(1-p^L\), regardless of how far unsuccessful transitions lowered \(W\). Iterating at block-start stopping times gives survival through \(j\) blocks at most \((1-p^L)^j\), which tends to zero. No independence is used.

All four answers are directly supported by the assigned manuscript. I found no part here that I cannot justify from it. I accessed no excluded files, inactive manuscript material, writer records, earlier reports, specifications, status files, or raw files during either reading. The permitted manifest displayed names and hashes of raw files, but I did not open their contents.

## Writer assessment and disposition

**A4-E: pass**, 2026-09-26. The initial account reconstructs the full dependency chain, the roles of all main assumptions, and the distinction between target and policy-label changes. The four unassisted answers justify terminal conditional mean one without a waiting-time bound, the completed-state law with return-dependent future requests, fixed-priority retention from consistent initialization, and the conditional block argument despite downward transitions. The original response also explains deterministic restarts and pathwise selection after a countable intersection. No hint, correction or expected answer was supplied. Access disclosure confirms a clean test.

The initially difficult points were resolved by the reader from the manuscript. The one-sided Chebyshev complement wording is an optional exposition suggestion, not an inability to justify the estimate. General-method terminology is contextual; the proof introduces the specific probability facts it uses. No blocking prerequisite, notation or mathematical issue was identified, and no further edit is justified by this test. The argument remains technically demanding; this pass is evidence about this model's reading, not measured human comprehension or a formal certificate. Existing experiments and a comprehensive literature audit were outside the assignment.
