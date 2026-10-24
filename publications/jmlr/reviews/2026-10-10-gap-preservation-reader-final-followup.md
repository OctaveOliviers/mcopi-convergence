# Neutral follow-up exchange

No hint, correction or expected answer was supplied with these questions. The exact reader model and reasoning effort are not independently exposed to me.

## Question 1

At results/3-convergence.tex:23–36, derive the bound on the first gap-preservation term at a finite random completion time T_s. State the bounds used and why they apply at that time.

### Answer 1

For a state completing before the stopped endpoint, T_s is a finite stopping time and T_s >= t >= k_0 >= k_alpha. The seed lemma gives

    d_T_s >= min{delta, c_s N alpha_T_s / c_alpha}.

The deterministic choice of k_0 ensures N alpha_j <= 2 c_alpha for every integer j >= k_0. It therefore applies pathwise to the realized finite T_s, even though T_s is random. Since c_s = delta/2, it gives

    c_s N alpha_T_s / c_alpha <= delta.

Consequently

    min{d_T_s, delta} >= c_s N alpha_T_s / c_alpha,

and, because alpha_T_s > 0,

    c_alpha alpha_T_s / min{d_T_s, delta}
    <= c_alpha^2 / (c_s N)
    = 2 c_alpha^2 / (delta N).

Multiplying by c_g bounds the first term by 2 c_g c_alpha^2/(delta N).

The seed margin itself uses the learning-rate comparison: every earlier seed-update index k satisfies k >= t >= k_alpha and k <= T_s, so alpha_T_s <= c_alpha alpha_k. Thus each of N successful increases is at least c_s alpha_T_s/c_alpha, unless the gap has already reached delta; subsequent favorable requests cannot reduce it.

Under the auxiliary law, all requested updates succeed. At a state already completed, its subsequent conditional update law is unchanged, so the recursion and noise moments required to apply gap preservation at T_s hold under that law. Completion exactly at the endpoint is handled instead by retention of the reference action; no subsequent preservation estimate is required there. The source is results/3-convergence.tex:23–44 together with results/2-probability-to-improve.tex:104–120 and 142–150.

## Question 2

Suppose a gap at seed completion equals a fixed multiple of the current learning rate. What does the gap-preservation estimate say as completion times become late, and how does the size of that multiple matter?

### Answer 2

Write the completed gap as d_T_s = C alpha_T_s for a fixed C > 0. Since alpha_j tends to zero, eventually C alpha_T_s < delta. The displayed bound then becomes

    crossing probability <= c_g c_alpha / C
                            + (16 c_xi / delta^2) sum_{k=T_s}^infinity alpha_k^2.

The tail tends to zero at late completion times. The first term remains a fixed bound inversely proportional to C; lateness alone does not make it vanish. A sufficiently large fixed multiple makes the bound small, and the seed construction obtains such a multiple by choosing N large before choosing a late starting time. For a small C, the bound may be at least one and provide no useful protection. In particular, the proof explicitly treats a gap below c_alpha alpha_T_s as a case where its first-term bound is already at least one.

This is an upper bound on crossing probability, not a claim that the actual crossing probability converges to c_g c_alpha/C. It explains why a margin that tends to zero can still give a uniform useful success probability. See results/2-probability-to-improve.tex:145–156 and results/3-convergence.tex:19–42.

## Question 3

Suppose a completed gap never reaches delta before the stopped interval ends. Which parts of the argument still apply, and what must hold at a finite endpoint to obtain policy improvement?

### Answer 3

The seeded positive margin and the first, below-delta crossing analysis still apply throughout the relevant period. While the gap remains in (0,delta), the mean drift is at least 3 delta times the state-specific learning increment. A crossing therefore requires the noise excursion bounded by the accumulated-learning ranges and their geometric sum. This analysis does not require the state to accumulate learning rapidly or the gap ever to reach delta. The after-reaching-delta part is unnecessary if the gap never reaches delta at all; if it first reaches delta exactly at the endpoint, it is positive there and no post-delta protection is needed.

For a finite target transition tau before exit, a state that completed earlier must still have strictly positive estimate gaps at tau against every action in B_pi. Protecting only times strictly before tau would be insufficient: the update ending at tau could make an inferior action greedy. The lemma includes that endpoint. Thus those inferior actions cannot be selected at the completed state. Unfinished states, and states completing exactly at the endpoint, retain the reference action through successful requests and inertia. These two forms of protection yield

    q_pi(s, pi_tau(s)) >= q_pi(s, pi(s))

at every state. Since a target transition means q_pi_tau differs from q_pi, the strict policy-improvement lemma gives pi_tau strictly better than pi. A finite exit endpoint is counted as an exit alternative, so policy improvement at exit is not required. See results/2-probability-to-improve.tex:150–180 and 215–216; results/3-convergence.tex:44–52.

## Question 4

Under which probability law is the one-half bound established, what event does it concern, and what bound does the manuscript obtain under the original law?

### Answer 4

The one-half bound is established under the auxiliary law, conditional on the interval-start history F'_t. It is an upper bound on the probability that any inferior-pair gap at a state completed strictly before tau wedge zeta_r closes at a finite time from its completion through the stopped endpoint. Each state's estimate is first conditional on its completion history, then multiplied by the event that it completed before the endpoint and averaged back to F'_t; summing over pairs gives at most one half. There is no independence assumption. Under this law every requested seed update succeeds.

The complement therefore has auxiliary conditional probability at least one half. On that complement, the interval either exits before or at the next target change, never transitions or exits, or transitions before exit with strict policy improvement. Writing M = |S x A| N, the likelihood transfer yields, under the original law,

    P(successful interval | F'_t) >= (1/2) p_0^M = p > 0,

on the stated event that t is finite and precedes exit. This is the original-law positive lower bound on the union of successful alternatives in results/3-convergence.tex:9–16. It is not an original-law one-half lower bound, and it is not a lower bound on strict improvement alone. See results/3-convergence.tex:32–55 and results/2-probability-to-improve.tex:128–134.

## Uncertainty, necessary repair and reader disposition

I have no unresolved uncertainty in these four answers and no remaining necessary exposition repair for the tested proof mechanism. The optional clarification and optional mean-field compression in my initial response remain optional; neither blocks comprehension.

My reader disposition is **pass** for the assigned main convergence proof and its inspected prerequisites and appendix support. The initial unassisted explain-back and these neutral follow-ups support understanding of the vanishing seed margin, the state-specific preservation estimate, endpoint protection, the auxiliary-law transfer and the final finite-policy argument. This is an exposition assessment, not a correctness certification or a novelty/experiments assessment. The general policy-improvement, self-greedy optimality and fixed-target supermartingale results remain supplied dependencies as recorded in my initial response.
