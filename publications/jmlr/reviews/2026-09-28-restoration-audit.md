# Preliminary restoration dependency audit

Reviewer: `/root/restore_dependencies`, GPT-6 Astra, high, fresh context. Scope: original active preliminaries, mean-field section and appendix versus assembled-v4 active material. This was a preliminary dependency audit, not clearance of the restoration draft.

The original structure, short policy-improvement proof, algorithm component progression, noise statement, recurrent-policy bounded envelope and transition-time definition were recoverable. The audit identified the following necessary corrections:

1. State-value dominance implies action-value dominance; the converse fails. In a one-state MDP with two actions terminating for rewards 0 and 1, both policies have the action-value table (0,1), while their state values differ.
2. The same example disproves the original claim that every suboptimal selected policy must have a finite next target transition. The corrected statement concerns a nonoptimal target; constant targets converge to the optimal table by passing a recurrent policy's greedy inequalities to the limit.
3. Mean-field improvement needs a zero-update branch and a valid transition comparison. Inertia retains an action when its state's estimates are unchanged; positive updates use the original algebra. Per-step policy improvement and transitivity justify comparisons across transitions.
4. Infinitely many visits need not give infinite learning: rates 1/(k+1) with visits at powers of two carry finite total weight. Use cumulative learning.
5. The no-visit example yields at least, rather than exactly, 50%. A fixed policy fixes the target, while rates and update probabilities can still vary. The combined-noise law also depends on the current estimate.
6. The original lower/upper comparison proof works with actual sampled updates and fixed-target convergence established simultaneously for every deterministic restart and candidate target. The countable intersection must precede pathwise selection of the future-dependent envelope and restart. This avoids conditioning on future containment.
7. A separate general uniform-termination lemma is unnecessary. The proper-policy reference and a uniform conditional return-moment assumption suffice.

These findings guided local repairs. Independent review of the actual restored manuscript is recorded separately; this preliminary audit is not treated as approval of those repairs.
