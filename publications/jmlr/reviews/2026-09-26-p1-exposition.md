# P1 v1 exposition session

Version: 2026-09-26-p1-v1/MANIFEST.txt. Clearances: P1-v1-C-replacement and P1-v1-N-A. This file is writer-only and must not be supplied to the reader.

## Author assessment prepared before reader answers

Mechanism: policy improvement follows a nonnegative resolvent; state-value order implies action-value order, not conversely. Square-summable conditional-centered return errors accumulate to a convergent series. Actual learning differs from conditional learning by another convergent series. Summation by parts turns small error-series tails into small filtered errors even with random realized weights. This proves boundedness without assuming bounded iterates. If targets stabilize, a recurrent selected policy is greedy at its own limiting table, proving optimality. No conditioning on an eventual random time is required. Deterministic equal within-state coefficients yield action advantage; zero coefficients require action retention. Finitely many ordered targets imply stabilization.

Potential probes: whether infinite visits with summable effective weights suffice; what replaces division by c at c=0; why eventual target constancy does not make the last transition's policy necessarily optimal; what independence is needed in filtering; whether stochastic finite transitions have yet been established. Accept any mathematically equivalent explanation. Reader prerequisite profile: finite sets, algebra, functions, elementary inequalities, sequences/limits, basic probability and expectation, direct/inductive proofs. Specialized probability must be explained or identified as missing.

## Reader response and dialogue

Reader: /root/p1_reader, GPT-5.6 Sol medium, fresh context. No answer key, prior reports or these notes supplied. Initial response and follow-ups were unassisted.

The reader correctly explained: uniform termination through decreasing worst-case survival probabilities; policy improvement through accumulated nonnegative advantage; conditional versus actual learning separated by a convergent martingale; filtering accumulated errors pathwise; a recurrent policy proving an eventual target optimal; and common within-state mean-field coefficients giving monotone finite targets. The reader correctly limited the result to deterministic convergence and conditional stochastic convergence.

Reading stops, as reported:
- foundations.tex:28: could interpret P_pi^n -> 0 as loss of nonterminal mass but could not derive it from prerequisites; geometric-tail-to-second-moment identity unstated.
- foundations.tex:48: could interpret the matrix series as repeated substitution but could not justify its convergence from prerequisites.
- foundations.tex:58: finite-horizon verification under a history-dependent law too compressed; requested displayed induction and remainder.
- foundations.tex:75: information definitions helpful but no concrete event example; stopping-time measurability not reproducible.
- foundations.tex:108–113: largest gap was the maximal inequality; orthogonality and threshold stopping not taught enough to reproduce the calculation.
- mean-field.tex:34: reader briefly mistook the finite target sequence for q_k, then resolved it; name q_{pi_k} explicitly.
- J and Q(pi) unused in this isolated unit, and “Robbins–Monro” terminology unexplained. These are contextual suggestions; both symbols are used in the subsequent full proof/context, and the actual conditions are stated.

## Socratic exchange (no assistance)

Q1: If every pair is selected infinitely often but its accumulated learning weight is finite, which convergence step fails?
Reader: “The application of Lemma 5 in Lemma 6 would fail. For coordinate i, its effective weight is b_k=alpha_k u_k(i). If sum b_k<infinity, the product product(1-b_k) need not vanish, so the coordinate may retain part of its initial value and need not converge to an eventual constant target.” The reader marked the retained-initial-value explanation as inferred from the unrolling.

Q2: Which property of the filtering weights makes the estimate work, and would dependence on errors invalidate it?
Reader: the weights are nonnegative and increase to one, with total variation at most one; summation by parts bounds the filtered error by twice the largest unweighted partial sum. Dependence does not invalidate a pathwise estimate. The separate series-convergence proof still needs conditional moments.

Q3: Does eventual target constancy imply the policy at the start of the last interval was optimal?
Reader: “No.” That policy need not be greedy for the limiting target; recurrence allows greedy inequalities to pass to the limit. A nonoptimal policy can share the optimal action-value table.

## Assessment

**Revise** for prerequisite/explanation gaps, despite accurate mechanism and all three transfer answers. No mathematical contradiction suspected. Writer added row-sum/probability explanation, tail-sum identity, finite matrix iteration and remainder, displayed Bellman induction, an example stopping event, tower property, and explicit maximal-inequality calculation. Named target sequence and clarified two notation findings. Revised P1 v2 is in 2026-09-26-p3-v1; it needs correctness/notation confirmation and a fresh unassisted reader. The earlier reader was not tutored; the new test must still be fresh because the explanation changed.
