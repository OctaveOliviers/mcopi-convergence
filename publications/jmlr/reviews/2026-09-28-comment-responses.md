# Responses to the 18 PDF comments

Applies to the restoration of PR #4. The original source is `d9a1efc`; the annotated PDF is historical assembled-v4. Page numbers change in the revised PDF. All 18 comments are addressed in [restoration-v4](2026-09-28-restoration-v4/MANIFEST.txt), which passed independent [correctness and notation review](2026-09-28-restoration-review.md) and the final [exposition test](2026-09-28-exposition.md). This table maps the changes; the linked records contain the review evidence.

| Comment | Response and manuscript location |
| --- | --- |
| 1 | Restored S × A throughout; removed the admissible-pair alias I and size alias J. Section 2 states the admissible-action convention. |
| 2 | Removed the expanded termination proof. Section 2.1 cites the verified finite-state proper-policy result in NDP §2.2.1. |
| 3 | Policy-improvement hypothesis now explicitly holds for every state. |
| 4 | Restored state/state-action-pair language and the original short strictness argument; corrected the false converse between value orders. |
| 5 | Restored the short original proof; removed its new residual and h aliases. |
| 6 | Restored algorithm-component progression and the original definition and explanation of policy regions. |
| 7 | Added the direct explanation that the policy does not change in an unupdated state. |
| 8 | Restored a structured standing-assumptions block covering MDP, rates, greedy selection, initial-visit updates, moments and sampling. |
| 9 | Restored the progression from update indicator and return noise to combined noise and the difference inclusion, before the assumptions. The indicator representation is described for initial/first visits; every-visit multiplicities are not incorrectly claimed to be binary. |
| 10 | Restored Basic properties, motivated its two conclusions and moved technical proofs to the appendix. Removed arbitrary filtering/accumulated-error lemma names. |
| 11 | Separated boundedness from constant-target convergence; both use a standard fixed-target calculation, and the latter does not assume bounded iterates. |
| 12 | Restored a boxed transition-time definition where target changes become the next proof objective, with stopping-time explanation and a section transition. |
| 13 | Restored the mean-field exposition and original algebra, with only necessary zero-update, cumulative-learning and target-transition repairs. Statements explicitly reference their assumptions. |
| 14 | The weak monotonicity condition is part of the standing assumptions. |
| 15 | Defined policy-worsening pairs and their estimated/target gaps before discussing drift and variance. |
| 16 | Removed the detached generic barrier setup. The bound now acts directly on the algorithm's gap d_k(s,a), after its recursion, noise and role have been introduced. |
| 17 | Applied the same conventions to later results. Seed, growth and lock-in are introduced before use; other lemmas remain unnamed. Cardinality is written as |S × A|. |
| 18 | Removed duplicate gap and variance aliases and the policy ranking W. Seed/growth/lock-in constants are c_s, c_g, c_l, introduced together; temporary stopping times and the state learning sum are defined locally. |

Across the paper: preserve sound earlier exposition; no unnecessary renaming, no unintroduced concepts, complete assumption references and an explicit purpose for each result. The main theorem retains the previously agreed weaker assumptions and conclusions. The [dependency audit](2026-09-28-restoration-audit.md) records why the limited mathematical repairs outside the main proof are necessary.
