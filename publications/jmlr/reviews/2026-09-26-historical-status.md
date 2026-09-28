# Historical setup and increment status

Archived 2026-09-26 when the assembled manuscript obtained correctness and notation clearance. Statements below about unreviewed work, unchanged manuscripts or pending checks describe their historical stage; they are not the current status. Use [STATUS.md](../STATUS.md) for current findings and gates.

# JMLR proof review status

Harness initialized on 2026-09-26. The user has selected full inertia for the main proof presentation and requested coverage of fixed priorities where the same argument applies, and subsequently deferred extensions beyond initial-visit updates. The replacement proof is integrated on the working branch; assembled-manuscript review is in progress.

Inventory baseline: `98ca48f5f2d4e38d0062d95f66b008385072bc58`. This identifies the draft inspected for inventory, not a reviewed or certified proof version. All correctness, notation and exposition gates are **unreviewed**. Human sign-off: **not requested or recorded**.

## Specification and next action

The [working decisions](SPEC.md) were shortened at the user's request on 2026-09-26. Full inertia is the preferred presentation. Fixed priorities are to be covered using the local retention argument if verified. The user subsequently chose to keep initial-visit updates and defer broader update schemes. The screenshot has now been received: the requested weakened condition is that a fixed finite factor bounds every future step size relative to the current step size, eventually. Its exact formula is in the working decisions; its use throughout the proof still requires validation.

The checkout was rebased onto fetched `origin/main` and branch `feature/simplify-jmlr-proof` created at `63d4d97e6d2ffba4d605f7e4419ca79ce031c6ea`. The incoming commit changed only the README, so the manuscript inventory baseline below is unchanged. Existing untracked harness files were preserved. No manuscript source was edited.

The reference's first thirteen pages plus the two concluding Section 3 lines on page 14 have been reconstructed as LaTeX in [tmp/simplified-proof-reference/](tmp/simplified-proof-reference/README.md). The compiled reconstruction preserves the original assumptions. See its [validation record](tmp/simplified-proof-reference/VALIDATION.md) for the checked versions and transcription review; this work does not establish mathematical correctness. See [SPEC.md](SPEC.md) for working decisions; the [original draft reading notes](#original-draft-reading-notes) retain the original inventory concerns.

The requested target is JMLR, with a continuing correctness checker for dependent increments and a fresh exposition checker for each revised comprehension test. The inventory below describes the existing proof; it does not prescribe the replacement proof or certify its claims.

Specification audit after transcription, 2026-09-26: no further user preference was identified as necessary to start validation. [SPEC.md](SPEC.md) now states the requested theorem precisely and records the writer's dependency contracts P1–P5. Algorithm/scope choices are user-directed; mathematical sufficiency remains unverified. First increment: P1, foundations and mean field. No main-manuscript source changed during this audit.

Author-side checks to carry into the first increments:

- `2-mcopi.tex:110` identifies state-value and action-value ordering as equivalent. The converse is false in general: with one decision state, actions rewarding 0 and 1 and then terminating, both policies have the same action-value table `(0,1)` but different state values. Preserve the valid direction and the policy-improvement theorem; do not use the false converse. This is a writer finding awaiting independent review, not a reviewed manuscript correction.
- Preserve the existing pre-policy history `F_k` and explicitly define the post-policy/post-sampling-law history (the appendix already uses `F_k'`). Conditional moments and stopping times must match the information actually available. Initial-visit scope makes the actual update distribution equal the start distribution.
- Check the weaker step condition in both the seed-margin comparison with earlier updates and the barrier's future-variance/overshoot bounds. A check of only the displayed variance inequality is insufficient.
- P4 must use deterministic restarts and exit-stopped estimates; do not condition on a random eventual-containment time as though it were a stopping time. Distinguish finite target changes from eventual constancy of a policy label.
- P5 must update obsolete strict-start/comparability claims and future-work statements in the introduction/discussion. Preserve the combined stability–ODE account while checking the exact Kushner–Yin attribution; call the step condition sufficient for this proof, not proved necessary for the algorithm.

## Replacement proof progress

2026-09-26: the user confirmed replacement of the main proof under the agreed weaker assumptions and invoked the writing/review workflow. P1–P4 have independent correctness, notation and fresh exposition clearance at [full proof v2](reviews/2026-09-26-p4-v2/MANIFEST.txt). Evidence: [P1](reviews/2026-09-26-p1-review.md), [P2](reviews/2026-09-26-p2-review.md), [P3](reviews/2026-09-26-p3-review.md), [P4](reviews/2026-09-26-p4-review.md), and [fresh full-proof exposition](reviews/2026-09-26-full-proof-exposition.md). Earlier exposition diagnostics and all resolved notation findings are retained.

The proof has now been integrated into the active JMLR sources. Existing introduction, MDP/value definitions, algorithm motivation and discussion are retained with targeted corrections to their theorem claims. New material preserves P(q), Q(pi), q_{pi_*}, d_k(s,a) and the pre/post-selection histories. The old appendix proofs are superseded by complete proofs near their statements. Fixed-priority retention is justified locally and summarized in discussion. No experiments or other publications changed. No commit or push.

Remaining: build/render the active paper, fresh assembled correctness review, global notation review and fresh assembled exposition. The older inventory below is historical, not the current result graph. No human mathematical sign-off is recorded.

## Methodology paragraph requested

Preserve the existing explanation in `results/2-probability-to-improve.tex`, immediately before the probability-of-improvement argument, and the existing abstract mention. The user also requests a brief reinforcement near the introduction. The requested point is the connection to Kushner and Yin (2003), Section 5.4, and the extension of recurrence/lock-in reasoning to entries with vanishing margins. Explain why step-size regularity lets favorable updates create protectable gaps despite those small entry margins. Preserve the distinction between harmful exits and policy-improving exits; do not assert permanent confinement to every recurrent policy region or monotone shrinkage of entry distances.

Source check on 2026-09-26: the local Borkar (2002) PDF states Theorem 2.1 on recurrence to a bounded open set whose closure lies inside the domain of attraction (printed p14), and Section 3 imposes a fixed positive initial distance from the boundary of its chosen set (printed p16). PDF SHA-256: `4182bdd15906bbad4dde15cf9971ab14455cb0653d4d460d0c2009cb1dfa76ee`. This paragraph's exact Kushner-Yin attribution still requires the Section 5.4 text: the publisher page confirmed the book and Chapter 5, but offered subscription access only. Do not equate the book's general theorem with an assumption of recurrence to the strict interior of an MC-O-PI policy region without checking the application. No new paragraph or learning-rate assumption has been inserted into the manuscript yet.

## Existing result inventory

The labels below come from active lemma/proposition statements. Candidate prerequisites also use nearby exposition; they need verification against full proofs. Shared definitions, standing assumptions and external cited results remain prerequisites even when omitted from a row. A reference to a proposition's setting is not automatically a dependency on its conclusion.

| ID | Manuscript label | Source | Candidate prerequisites to verify | Review state |
| --- | --- | --- | --- | --- |
| J01 | `thm: strict PIT` | [Foundations](2-mcopi.tex) | Policy/value definitions; cited policy-improvement results | Unreviewed |
| J02 | `thm: properties of noise` | [Foundations](2-mcopi.tex) | Sampling/update definitions; noise assumptions and cited bounds | Unreviewed |
| J03 | `thm: bounded limit sets` | [Foundations](2-mcopi.tex) | Standing assumptions; applicable stochastic-approximation results | Unreviewed |
| J04 | `thm: suboptimal blocks finite` | [Foundations](2-mcopi.tex) | Transition-time definition; policy evaluation and optimality facts | Unreviewed |
| J05 | `thm: improving policies` | [Mean field](results/1-mean-field.tex) | J01; uniformity, transition times and mean-field update | Unreviewed |
| J06 | `thm: convergence deterministic mcopi` | [Mean field](results/1-mean-field.tex) | J05; policy finiteness and evaluation/convergence arguments | Unreviewed |
| J07 | `thm: properties noise gap` | [Probability](results/2-probability-to-improve.tex) | J02, J03; gap definition | Unreviewed |
| J08 | `thm: event to reach a_k margin` | [Probability](results/2-probability-to-improve.tex) | Standing/setting assumptions; gap and good-prefix definitions; noise bounds | Unreviewed |
| J09 | `thm: growth window` | [Probability](results/2-probability-to-improve.tex) | Learning-rate assumptions; choices of constants | Unreviewed |
| J10 | `thm: from a_k margin to delta` | [Probability](results/2-probability-to-improve.tex) | J07, J09; gap evolution | Unreviewed |
| J11 | `thm: event noise remains small` | [Probability](results/2-probability-to-improve.tex) | J07; gap evolution and noise-tail bounds | Unreviewed |
| J12 | `thm: event that yields positive gaps` | [Probability](results/2-probability-to-improve.tex) | J08, J09, J10, J11; tie and joint-event definitions | Unreviewed |
| J13 | `thm: fixed prob that bad actions dont become greedy` | [Probability](results/2-probability-to-improve.tex) | J07–J12; conditional joint-probability argument after the lemmas | Unreviewed |
| J14 | `thm: convergence mcopi uniform` | [Convergence](results/3-convergence.tex) | J01, J04, J13; policy finiteness and conditional recurrence argument | Unreviewed |

## Original draft reading notes

These observations belong to the original manuscript inventory at `98ca48f5f2d4e38d0062d95f66b008385072bc58`. They are questions to investigate, not findings, approved assumptions or constraints on the replacement proof. Use the current working decisions above to determine scope. Keep these author-side notes out of fresh checker assignments; share necessary mathematical context explicitly.

- Distinguish initial-visit, first-visit and every-visit variants and their actual assumptions. The original final convergence proposition states initial-visit MC-O-PI; do not silently broaden it.
- “Uniform updates” in `3-results.tex` means equal rates across actions within each state, while allowing different rates between states. Identify precisely where this assumption is used and what breaks for unequal action rates within a state. Do not reject state-dependent rates merely for being nonuniform across states.
- Check strict versus weak policy improvement, ties and the definition of transition times. Check what finiteness of the policy set actually implies.
- Track filtrations, conditioning on policies, random/stopping times and the order of choosing constants and thresholds. Check whether probability bounds hold conditionally and uniformly where the next argument needs them.
- Distinguish use of the setting of `thm: fixed prob that bad actions dont become greedy` from use of its conclusion. Several supporting lemmas refer forward to its setting; a textual reference is not automatically a cyclic proof dependency.
- Locate the proof of that proposition after the supporting lemmas; its statement and proof are separated. Audit all foundational results and cited hypotheses before allowing dependent units to pass.

## Review records and objections

The separate reference transcription passed [independent fidelity review](reviews/2026-09-26-reference-fidelity.md) on 2026-09-26. All 27 numbered equations and 11 numbered statements were checked; three typography findings were corrected and independently resolved. The [validation record](tmp/simplified-proof-reference/VALIDATION.md) identifies the final source/PDF hashes and successful build and page comparisons. This clears transcription fidelity only, not any mathematical correctness or exposition gate for the main manuscript.

One bounded independent correctness review has been completed: [update-scope-check-2026-09-26](reviews/2026-09-26-update-scope.md), by `/root/update_scope_check` (GPT-6 Astra, high effort). It supports the shared architecture for fixed priorities and full inertia, and extension of the drift/stability/barrier components to balanced binary update indicators under explicit selected-update moment assumptions. It does not validate the full theorem.

**Deferred extension findings:** U3, first-visit collateral updates can defeat the current safe-seed construction even with balanced actual rates; U4, conditioning an episode can alter completed-state return laws. The user deferred this broader theorem; these unresolved findings do not block the chosen initial-visit scope. The report records a genuine first-visit local obstruction, not a convergence counterexample. All manuscript-wide correctness, notation and exposition gates remain unreviewed.

When work begins, index each unit's current version and correctness, notation and exposition review IDs here; use [review-record](../../.agents/skills/write-and-review-paper/review-record.md) and [exposition-session](../../.agents/skills/test-exposition/exposition-session.md) for the evidence. Record an assigned reviewer when one actually exists. Index all open blocking findings and their next action; preserve resolved/dismissed findings in the linked records.

Keep `STATUS.md`, the specification and review evidence versionable. Do not put the only copy of an objection in ignored scratch output. On dependency changes, mark affected approvals stale and retain the old versions and dispositions. Distinguish current `agent-checked` status from any explicit human sign-off.

## Notation decisions

No new notation choices have been approved during setup. Existing definitions in the manuscript and macros in [z-maths.tex](z-maths.tex) remain the sources of truth. Add significant decisions here with defining locations, scope and affected units; do not duplicate macro expansions into a second registry.

## Context boundaries

This status file is for the writer and user. It can contain dependency interpretations, review findings and later author decisions, so never pass it wholesale to a fresh checker. Supply neutral assignments and needed mathematical material explicitly. Expected exposition answers belong only in the author section of a session record and must never be included in the reader's material.
