# Follow-up questions and answers

## 1. Re-derive the substitution you questioned at results/3-convergence.tex:23–36 using the hypotheses as stated and quantified. Record each bound used, and whether your objection remains.

Write T=T_s and R=c_alpha alpha_T/min{d_T,delta}. The seed lemma gives

    d_T >= min{delta, c_s N alpha_T/c_alpha},   c_s=delta/2.

The late-start choice gives N alpha_t <= 2 c_alpha. Since T>=t, condition (comparison) gives alpha_T <= c_alpha alpha_t, hence only

    N alpha_T <= 2 c_alpha^2.

Therefore

    R <= c_alpha alpha_T/min{delta,c_s N alpha_T/c_alpha}.

If c_s N alpha_T/c_alpha <= delta, this gives

    R <= c_alpha^2/(c_s N),

as claimed. If c_s N alpha_T/c_alpha > delta, the stated hypotheses instead give

    R <= c_alpha alpha_T/delta
      <= c_alpha^2 alpha_t/delta
      <= 2 c_alpha^3/(delta N)
       = c_alpha^3/(c_s N).

I cannot remove the extra factor c_alpha when c_alpha>1. To force the first case one needs N alpha_T <= 2 c_alpha; the written assumptions give only N alpha_T <= 2 c_alpha^2. My objection remains. A sufficient minimal repair is to require N alpha_t <= 2, which is possible because alpha_t -> 0; alternatively, carry the extra c_alpha and choose N using c_alpha^3.

## 2. Suppose a gap at seed completion equals a fixed multiple of the current learning rate. What does the gap-preservation estimate say as completion times become late, and how does the size of that multiple matter?

If d_T=C alpha_T for fixed C>0, then at late completion times d_T<delta, and the barrier lemma gives

    P(crossing through endpoint | F'_T)
    <= c_g c_alpha/C
       + (16 c_xi/delta^2) sum_{k=T}^infinity alpha_k^2.

The square-sum tail tends to zero, but the first term does not shrink merely because T is late. The asymptotic upper bound is c_g c_alpha/C. Thus a learning-rate-scale gap is useful when its multiple C is chosen large; the bound decreases as 1/C. For small C it may be at least one and uninformative. The manuscript uses seeding to make C proportional to the chosen integer N. This is only an upper bound, not a claim that the actual crossing probability converges to that value.

## 3. Suppose a completed gap never reaches delta before the stopped interval ends. Which parts of the argument still apply, and what must hold at a finite endpoint to obtain policy improvement?

The whole pre-delta argument at results/2-probability-to-improve.tex:154–199 still applies. It partitions every possible crossing time by the accumulated state-learning clock and does not require the gap ever to reach delta. The post-delta argument is simply unused.

On the complement of the crossing event, the completed gap stays strictly positive through the endpoint, including its final update. For policy improvement at a finite endpoint, the endpoint must be a target transition before exit: tau<zeta_r. Then completed gaps are positive at tau; unfinished states retain the reference action by inertia; and a state completing exactly at tau has its positive seed margin. Hence no pair in B_pi is selected and

    q_pi(s,pi_tau(s)) >= q_pi(s,pi(s))

for every state. Since the target changes at tau, the strict policy-improvement lemma yields pi_tau strictly better than pi. If exit occurs first, the progress lemma counts exit and does not assert policy improvement.

## 4. Under which probability law is the one-half bound established, what event does it concern, and what bound does the manuscript obtain under the original law?

The one-half estimate is established under the auxiliary law P-hat, conditionally on F'_t. It concerns the union of events that a completed bad-action gap closes at some finite time after its completion and through tau wedge zeta_r. Barrier estimates started at each T_s<tau wedge zeta_r are averaged back to F'_t and union-bounded over at most |S x A| pairs. The intended choices of N and k_0 make the auxiliary probability of any such closing at most 1/2, so the complementary safe event has auxiliary probability at least 1/2.

Together with safe unfinished states and endpoint completions, this complementary event yields the progress alternative: exit, an infinite constant-target interval without exit, or a finite pre-exit strict improvement. The transfer inequality gives

    P(E | F'_t) >= p_0^(|S x A|N) P-hat(E | F'_t).

Thus under the original law the manuscript obtains

    P(progress | F'_t) >= (1/2) p_0^(|S x A|N) =: p > 0

on {t<infinity,t<zeta_r}.

## Remaining difficulty and proposed minimal change

The constant mismatch in Question 1 remains my only reading difficulty. It is not resolved later. Replacing N alpha_t <= 2 c_alpha by N alpha_t <= 2 makes the displayed substitution valid, because comparison then gives N alpha_T <= 2 c_alpha. Carrying one extra factor of c_alpha through the choice of N is another sufficient repair. I otherwise find the other three steps justified by the frozen manuscript.
