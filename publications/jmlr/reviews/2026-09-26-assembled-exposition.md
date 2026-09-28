# Assembled manuscript exposition test

## Assignment and version

Session A2-E: exact [assembled-v2](2026-09-26-assembled-v2/MANIFEST.txt), cleared by A2-C and A2-N. PDF SHA-256 `cd930c68655dce4ff6c2615ceb751e13d64e4091b2ab7d07a8cde0089fb92a62`. Fresh reader `/root/assembled_reader`, requested GPT-5.6 Sol/medium, with `fork_turns=none`. Supplied the assembled PDF/text, active sources/macros/bibliography and neutral role/guidelines. No writer history, prior reviews, private notes or prior exposition answers supplied. Prerequisites are algebra, finite sets/sums, inequalities, limits, elementary probability/expectation and elementary proofs; specialized probability and RL concepts must be introduced. Whole Sections 1–3 and discussion scope are assigned. Private assessment below was prepared before assignment and is excluded from reader access.

## Private writer assessment prepared before reader answers

The result concerns a finite tabular initial-visit algorithm, with full-inertia ties and uniform conditional initial actions within each state, deterministic square-summable steps with bounded future increases, infinite conditional learning weight per state and bounded conditional return variances. The action-value target changes finitely often; estimates converge to the optimal table; selected policies are eventually optimal but their labels need not become constant without unique optimal actions.

The main mechanism should emerge without prompting: common action coefficients give deterministic policy improvement; stochastic noise can obstruct it locally, so one constructs uniformly positive conditional chances of progress. Direct filtering gives boundedness and convergence for a persistent target. A barrier measured on each state's learning clock controls a gap starting with a small margin. Favorable requests preserve unfinished states under inertia and produce completion margins. A bounded likelihood product conditions only requested initial-visit updates, preserving the conditional laws needed by already completed states. A bounded number of requests permits a positive uniform transfer probability without a waiting-time bound. Strict improvement in a finite set of target levels, combined with the stopped estimate, excludes infinitely many transitions before exit. Countably many deterministic restart assertions and pathwise stability remove the artificial ball. No conditioning on an eventual-containment time is permitted.

Probe whichever difficult inference the reader's account makes least explicit. Useful transfer cases include arbitrarily long pauses at one state; replacing inertia with fixed priorities consistently from initialization; a future step much larger than the completion step; target equality despite a changed/nonoptimal policy label; or replacing one updated pair with several updates from an episode. Expected reasoning: waiting-time bounds are absent because variance and drift share the state clock, and local construction does not need every state to complete before the endpoint; fixed priorities require the separate local retention argument; bounded future increases enter the margin and variance comparison; targets, not labels, carry finite ordered progress; collateral updates can spoil safe unfinished states or conditional laws, so a broader theorem is not obtained for free.

A second inference to test if needed is the likelihood conditional law: future factors average to one at the next history; conditioning additionally on the selected completed state leaves the current factor one. Another is the finite-level block argument: failures may lower the level, but a uniform chance of L consecutive successes or absorption still bounds survival by a geometric sequence conditional at finite continuing times.

Accept any mathematically equivalent explanation. Reader confusion alone is not a proof defect. Preserve the initial account and all follow-ups verbatim; any teaching or hints invalidate an unassisted pass. This private section is not included in the reader assignment.

## A2-E diagnostic result and revision

The [retained initial response and unassisted dialogue](2026-09-26-assembled-reader-a2.md) show accurate understanding of the full mechanism, arbitrary waits, and policies sharing action-value targets. The reader identified one reliance on an unstated advanced definition: characterizing conditional expectation by its averages on known events. **A2-E: revise** for the declared prerequisite profile. Stable finding A2-E-01; no mathematical gap or assistant tutoring.

A3 adds the conditional averaging identity beside the history definitions and verifies the weighted formula against that identity in Lemma 15. It also explicitly identifies the next history. The repair does not change a claim, estimate, algorithm or assumption. Correctness and notation carry-forward checks are pending before a new fresh reader. The unchanged core expectations above apply; for the new bridge, the reader should be able to verify the formula using the supplied test-event identity without an unstated measure-change theorem. Do not provide this expectation or the old reader's answer to the fresh reader.

## A3-E fresh assignment

Version [assembled-v3](2026-09-26-assembled-v3/MANIFEST.txt), cleared by A3-C and A3-N. Reader `/root/assembled_reader_v3`, requested GPT-5.6 Sol/medium, started with no inherited turns. The complete active manuscript, PDF/text and role/prerequisite guides were supplied. No old reader report, writer assessment, SPEC/STATUS, raw source comments or peer findings supplied. The neutral initial task matches A2's scope. Assessment expectations above were fixed before this reader's answers.

## A3-E diagnostic and A4 revision

[Retained A3 reader account and dialogue](2026-09-26-assembled-reader-a3.md). The reader reconstructed all mechanisms and answered the probability probes accurately. It identified one undeveloped probability fact, conditional bounded convergence, plus nearby terminology. **A3-E: revise**, A3-E-01. This is a prerequisite/exposition issue, not a mathematical error or assistant-coached answer. Other proof stops resolved independently; empirical/discussion concerns are retained as scope limits.

A4 defines adaptedness and the likelihood martingale identity, explains ordinary bounded expectation convergence with an epsilon estimate, and obtains terminal conditional mean one using the already introduced test-event identity. This replaces reliance on an unstated conditional convergence theorem. Fresh correctness/notation checks and a new reader are required. The private expected mechanism is unchanged; the terminal-mean derivation should now follow from the supplied bound, elementary probability and the conditional averaging definition.

## A4-E fresh assignment

Exact [assembled-v4](2026-09-26-assembled-v4/MANIFEST.txt), cleared by A4-C and A4-N. Fresh reader `/root/assembled_reader_v4`, requested GPT-5.6 Sol/medium, no inherited turns. Same manuscript/prerequisite scope and neutral explain-back assignment; existing experiments and literature research remain outside proof comprehension. No prior findings, writer expectations or reader answers supplied. All private expectations above predate this reader's answers.

## A4-E protocol incident and unchanged clean retest

The first A4 reader accurately explained the mechanism and reported: “The proof is comprehensible end to end, and I found no inference I could not justify.” It nevertheless disclosed accidentally reading one inactive comment in the repository's `1-introduction.tex:79`, beginning “The proof of this new theorem…”, during a search. The comment overlaps the public introduction, but it was outside the assigned active excerpt. Under the harness's context-separation rule, this is a protocol-invalid diagnostic and **does not clear the exposition gate**. Its optional suggestion to gloss display (31) did not identify a missing inference, and no manuscript revision was made.

The unchanged retest is required by that explicit access violation, not selection among comprehension outcomes. A new reader `/root/assembled_reader_final` received A4 with `fork_turns=none`, requested GPT-5.6 Sol/medium, the same neutral assignment and prerequisites, and explicit allowed-file boundaries prohibiting repository-wide searches and raw/inactive material. The prior favorable response, writer expectations, SPEC/STATUS and prior reviews were excluded. Runtime model identity was not separately exposed. The [actual initial account](2026-09-26-assembled-reader-a4-final.md) was saved before any follow-up.

## Final A4-E verdict

**Pass**, 2026-09-26. The clean reader reconstructed the mechanism and essential dependencies, then answered four non-leading probes on terminal likelihood limits, preserved completed-state laws, fixed-priority retention and finite-level blocks. The [full actual dialogue and writer assessment](2026-09-26-assembled-reader-a4-final.md) are retained. No assistance was supplied; the reader explicitly confirmed that no excluded contents were accessed. The initial account independently explains deterministic restarts and eventual optimality despite possible policy-label changes.

No missing inference remained. A suggested one-sided Chebyshev wording clarification is optional and does not require revising the checked manuscript. General-method terminology imposes no external proof dependency. A2/A3 diagnostic failures and the first A4 access incident remain historical evidence; only this clean test supplies final exposition clearance. A4-C, A4-N and A4-E now pass on the same exact assembled-v4 content. No human sign-off or formal proof certification is inferred.
