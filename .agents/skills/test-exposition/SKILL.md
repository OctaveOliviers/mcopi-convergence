---
name: test-exposition
description: Test a correctness-reviewed mathematical explanation through a fresh reader's independent explain-back and Socratic follow-up questions, then retest revisions without leaking expected answers.
---

# Test exposition

Read the [exposition checker role](../../agents/exposition-checker.md), [reader background](../../guidelines/reader-background.md), [proof-writing principles](../../guidelines/proof-writing.md), and [session format](exposition-session.md). This skill coordinates the writer and a separate reader; it does not assign a fifth role.

## Establish the test

Require current correctness and notation clearance for the supplied version, as defined by [write-and-review-paper](../write-and-review-paper/SKILL.md). A preliminary reading diagnostic may be useful before clearance, but label it preliminary and do not count it as the exposition gate.

The writer prepares a private assessment note before seeing reader answers: core mechanisms, essential uses of assumptions, the nontrivial inferences, and simple transfer questions. Ground these expectations in the checked manuscript. Store them on the author side of the session record. Accept any mathematically equivalent explanation; this is not a test of matching a canonical sentence. Refer mathematical uncertainty or disagreement to the correctness checker.

Start a fresh exposition checker with no inherited conversation history. Provide only its role, relevant writing/notation standards, agreed prerequisite profile, the current active manuscript and necessary mathematical dependencies, and neutral instructions for the first response. Exclude `STATUS.md`, author specification notes, manuscript-specific review notes, private assessment notes and all previous exposition reports. Record the actual model and effort when exposed by the runtime. Prefer an available weaker model for this diagnostic; never pretend that a strong model has become an undergraduate simply because it was told to act like one.

## Independent response, then dialogue

First ask for an explanation of the result in the reader's own words: what is claimed, how the proof works, why the main steps are needed, where assumptions matter, and which details the reader cannot justify. Require locations for reading difficulties and the reader's attempted interpretation. Do not disclose the expected mechanism or ask leading content-specific questions before this response is saved.

Then the writer asks short, non-leading follow-ups, adapting to the response. Probe mechanism, a difficult inference, an assumption's role, or a simple changed case where informative. For example: “What permits that inequality?” or “Would the step survive if that assumption were removed?” Prefer a question requiring reasoning over one that repeats a phrase from the text. The reader can ask its own questions and must distinguish what it read from what it inferred.

Save answers before supplying hints. Mark every hint, correction or explanation as assistance. A correct answer reached after tutoring is diagnostic evidence, not an independent pass. Additional questions cannot remove the need for a fresh reader if tutoring or a previous test has supplied the answer.

## Diagnose and improve the text

Classify each difficulty: missing prerequisite, missing/ambiguous explanation, notation/terminology burden, reader error, or suspected mathematical gap. Do not automatically treat weak-model confusion as an author error. Check the declared prerequisites before adding elementary exposition or changing the audience.

Choose the smallest effective repair: reorder steps, improve a lemma boundary, name a useful intermediate quantity, remove redundant symbols or text, add a simple case, or explain the specific missing inference. Do not paste the tutoring transcript into the paper. Return mathematical and semantic notation changes to their checkers and update dependent approvals.

After any material explanatory revision, test with a fresh reader that has seen neither the old manuscript nor the old session. If assistance was needed but no revision is warranted, a fresh unassisted test is still required for a pass. Preserve diagnostic failures and their dispositions; do not rerun unchanged tests until a favorable answer appears. An unchanged retest needs a recorded reason, such as a demonstrable reader error, and must consider all results.

## Verdict

Pass only when an unassisted reader accurately explains the core mechanism and essential dependencies, can justify the probed nontrivial steps, and applies the idea correctly to an informative simple variant when appropriate. A polished summary alone is insufficient. There is no required number of questions, cuts or complaints. Record failures and untested aspects honestly, and send mathematical disputes to correctness rather than enforcing the writer's preferred explanation.

The writer records the assessment with the evidence in the session and status files. Success is evidence about this model reading this version with these prerequisites, not a measured probability that a human student will understand it.
