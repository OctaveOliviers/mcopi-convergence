# Full proof v2 fresh exposition

Exact version 2026-09-26-p4-v2/MANIFEST.txt. Clearances P4-v2-C-carryforward and P4-v2-N-A. Author-only expectations; no earlier reader transcript or findings to be supplied.

P1–P3 mechanism expectations are as in the previous author assessment, with the conditional maximal bound and likelihood conditional-law calculations now explicitly provided. P4 must distinguish probability of each stopped interval's progress from an unconditional claim. At most L-1 consecutive strict W increases possible. A block of L successful-or-absorbed intervals therefore has absorption probability >=p^L by the tower property at finite transitions, with no independence. Conditional geometric survival tail gives finitely many intervals before exit at each deterministic restart. Countable intersection first, pathwise choice of a no-exit restart second, makes localization harmless. Stable target then converges to optimum; late actions are optimal, labels may change with ties.

Non-leading probes should test: finite state-clock without completion; why arbitrary future conditioning differs from local likelihood factors; endpoint protection; two C_alpha factors in crossing risk; restarting at an eventual-containment time; whether per-interval p alone gives a global geometric tail; why policy label at last transition need not optimal. Accept alternative valid reasoning. No assistance should precede saved answers.

Reader /root/full_proof_reader, GPT-5.6 Sol medium, fresh context. All six mathematical inputs, manifest, wrapper, macro file and 14-page PDF read. No writer notes, prior sessions or other reviews supplied/read. No assistance.

Initial explain-back accurately reconstructed all eight mechanisms: policy improvement, stability/persistent targets, gap drift, two-stage state-clock barrier, favorable seeds, bounded auxiliary law preserving completed states, uniformly positive stopped progress, and the finite-rank block argument followed by deterministic-restart localization. All essential assumptions correctly mapped to their uses. Reader identified finite stochastic target changes, optimal limiting table and eventual optimal policies, distinguishing label constancy under unique actions.

All reported reading stops were resolved from the manuscript without help: noise-tail/Borel–Cantelli step; dyadic clock ranges; opposite-tail complement in one-sided Chebyshev; current/future likelihood averaging; and allowing rank drops on unsuccessful intervals. No inference ultimately remained unjustified and no mathematical gap was suspected. Optional further wording suggestions were to motivate dyadic ranges, spell out the tail complement, and name the weighted conditional formula as Bayes' rule. Writer declined further edits in this pass because the reader reconstructed each step independently and extra wording had no demonstrated blocking benefit.

### Non-leading exchange

Q1: Why does the completed-state conditional law survive return-dependent future requests?
Answer: the terminal likelihood averages to L_{k+1} at the next history, and at a completed-state update the current factor is one; independence unnecessary. Reader inferred this is conditional Bayes' rule.

Q2: Where do the two C_alpha factors come from?
Answer: future barrier steps are <=C_alpha alpha_{T_s}; earlier seed steps are >=alpha_{T_s}/C_alpha; dividing gives C_alpha^2/(gN). Both comparisons and exact bound correctly derived.

Q3: Can the proof condition at the first time after which the path never leaves the ball?
Answer: no, that depends on the future and generally is not a stopping time. Establish a probability-one result for every deterministic integer restart, intersect first, then choose a no-exit restart pathwise.

Precision follow-up to Q1: state conditioning when next sampled state is not yet known; is entire next-update law unchanged?
Answer: preservation is conditional on F'_k and S_{k+1}=s for completed s; state selection itself is unchanged given F'_k. The complete next-update law can change because active unfinished-state conditional laws are deliberately tilted. The reader wrote the two correct conditional identities. This was a neutral request for precision, with no hint or correction supplied.

### Writer assessment

**Pass** for the full P4 v2 proof excerpt, including revised P1–P3. Accurate unassisted mechanism, nontrivial-step reconstruction, and transfer/conditioning answers meet the stated gate. This is evidence about this model and text, not a human-comprehension guarantee. No open blocking exposition finding remains. A fresh test of the assembled manuscript is still required after integration.
