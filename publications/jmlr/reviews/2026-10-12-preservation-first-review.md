# Preservation-first exposition revision

Date: 2026-10-12. Version: preservation-first-v1, base commit `09d7e4cc45fb1a59153c2a40da2b7da59fedaff4`. Exact source/dependency/build inputs are retained in [the snapshot](2026-10-12-preservation-first-v1/MANIFEST.txt). The revision follows the user's approved order; no theorem or assumption change is intended.

## Assignments and boundaries

Fresh checkers received only role instructions, local guides, the frozen active manuscript and its manifest. Correctness and notation may compare the earlier active manuscript only after inspecting the new version. No writer notes, SPEC, STATUS, prior findings or reader answers were supplied for independent initial reviews. The checker reports retain exact assessments and any later reconciliation separately.

- Correctness: `/root/preservation_first_correctness`, GPT-6 Astra, high. Revised stochastic argument and affected dependency composition, with explicit equivalence/carry-forward assessment.
- Notation: `/root/preservation_first_notation`, GPT-6.1 Sol, medium. Changed definitions, explanation, ordering, global semantic consistency and rendered output.
- Reader and final assembled check: assignments and evidence to be recorded after the prerequisite reviews clear.

## Private writer assessment prepared before reader answers

The expected mechanism is preservation first, construction second, composition third. The preservation inequality controls closure of one specified positive bad-action gap through the stopped endpoint. For a fixed positive lower bound on its initial gap, lateness makes both terms small. A shrinking gap instead requires control of alpha/min(gap,delta); a gap proportional to alpha with a large enough coefficient controls the first term but does not make it vanish merely by waiting. Late starts independently control the square-sum tail.

The seed construction keeps unfinished states safe and gives each completed state its own stopping-time margin. Weak step comparison converts earlier increments into a lower bound in terms of the completion-time learning rate. The deterministic late-time choice holds at every later index and so applies directly at a random finite completion. The auxiliary law conditions only current favorable requests, preserves state selection and completed-state conditional returns, and transfers estimates to the original law with a fixed finite factor. No independence, simultaneous completion, state-sampling floor or bounded waiting time is used. Endpoint-completed states are safe by inertia, earlier-completed states by preservation, and an infinite interval is already a constant target. Finitely many strict improvements plus conditional repeated opportunities force eventual target constancy after localization is removed by deterministic restarts and a countable intersection.

Potential probes, to be adapted after the first answer: changing the relation between initial gap and learning rate; application at a random completion time under nonmonotone rates; interaction of completed and unfinished states; the precise stopped success event. Correct answers must be supported by the supplied manuscript, not writer tutoring. Accept mathematically equivalent explanations.

## Version effects

The preservation and seed proofs are relocated unchanged. The auxiliary-law statement is moved to its appendix proof; its main-text contract appears inside the composition proof at its use. The preservation bound receives a direct interpretation before its proof. The seed constant is introduced with seeding; its value is unchanged. The main theorem, standing assumptions, introduction, algorithm section, mean-field section and global-convergence proof are unchanged. Old clearance is historical until independent current reconciliation; no new external-source, experiment or novelty audit is claimed.

## Build and visual verification

Both `make jmlr` and `make jmlr REVIEW=1` passed with the pinned TeX Live 2025 container. Both outputs have 28 pages. The clean PDF stayed byte-identical after the review build. The review baseline remains `d9a1efc31b838533c20e0e4f6d7058c0d1ca77c1`.

The writer inspected clean pages 12–28 directly at 1400-pixel render size. Clean pages 1–11 are pixel-identical to the previously inspected gap-preservation-v1 output at a common 1000-pixel render size. The notation checker independently inspected clean pages 12–19 and 24–27. The review version's changed proof and appendix pages were rendered for margin-bar inspection; final inspection coverage is recorded below.

No undefined references, duplicate labels, overfull/underfull boxes or new warning occurs in the clean build; only the inherited caption-package warning remains. The review build has the caption warning, a microtype footnote-patch warning, and a 0.18776 pt overfull box on the unchanged sampling discussion (review page 6, visually checked with no clipping). Its margin-bar stabilization check passed. These review-build diagnostics do not affect the mathematical content or require manuscript edits. The sequence of all 127 numbered equation references extracted from each PDF agrees.

The attempted GPT-6 Luna exposition probe failed before producing a review because that deployment returned 404. No content from it is counted as evidence. A fresh GPT-6.1 Sol reader at medium effort was assigned the same neutral scope instead; no answers or writer assessment were supplied.

Review-PDF inspection covered pages 13–19 and 25–27 directly, plus page 6 for its small box warning. The revised lemma, explanation, seed construction, probability transfer and appendix construction are legible; blue bars follow the changed passages without clipping the mathematics. The review version retains the normal version's 28 pages and equation/reference numbers, although its page breaks differ.

All 473 historical and current SHA-256 manifest entries were checked successfully. The revised active files match their raw live inputs; the remaining active excerpts and dependencies are unchanged from the previously checked snapshot.


## Final reader assessment

Session PF-E1: **pass**, unassisted. The full initial explain-back, seven reading stops, and the exact three questions/answers are retained in [the reader report](2026-10-12-preservation-first-reader.md). The writer assessment above predates all answers. No hints, corrections or expected answers were supplied.

The reader correctly reconstructed the whole convergence mechanism and its dependency structure, distinguished target changes from policy-label changes, and explained the conditional reweighting and endpoint arguments. Its transfer answers correctly show that an alpha-squared margin leaves this upper bound trivial, whereas a fixed C-times-alpha margin leaves a constant first term while the noise tail vanishes. It derived the random-completion ratio using the weak comparison for earlier seed increments and the all-late-indices bound directly at finite T_s. It also explained why adaptive future requests average out and why an unfinished state at the endpoint does not invalidate progress. These are the substantive points in the private assessment; the exposition pass is based on those answers, not the reader's own verdict.

The reported stops were resolved by the current manuscript and supplied appendix, without tutoring. Reliance on the explicitly stated supermartingale theorem is an allowed dependency, not a demand that the reader prove it from elementary prerequisites. The reader's two optional suggestions concern the unchanged global-convergence paragraph and final recap. They are not adopted: the existing bounded-limit-set reference supplied the needed meaning, and the recap closes the argument. No unresolved comprehension or mathematical objection requires another edit. No new core notation was found unnecessary.

The full-proof reader scope also supplies the final assembled-mechanism exposition test for this single coherent revision. No material was edited during or after the tests.

## Final independent evidence

- [Correctness and historical reconciliation](2026-10-12-preservation-first-correctness.md): pass; exact relocation/equivalence and current verification of earlier resolutions. Reviewer dispatched as GPT-6 Astra, high.
- [Notation and rendering](2026-10-12-preservation-first-notation.md): pass; revised sources and global dependency compatibility, with direct PDF inspection. Reviewer dispatched as GPT-6.1 Sol, medium.
- [Fresh assembled-chain correctness](2026-10-12-preservation-first-assembled.md): independent pass. Reviewer dispatched as GPT-6 Astra, high. It read the manuscript before any prior findings; reconciliation is retained separately in its report.
- Reader PF-E1: GPT-6.1 Sol, medium, substituted after the unavailable Luna deployment; pass within the recorded prerequisites and tested scope. No claim about measured human comprehension follows.

The dispatch identities are recorded here because individual checker contexts did not always expose the precise variant. Independent mathematical, notation and comprehension evidence applies to the same frozen preservation-first-v1 sources. No open blocking finding remains. This is agent-checked work, not formal proof certification or human sign-off. Existing experiments, exhaustive novelty review and new external-source verification remain outside scope.
