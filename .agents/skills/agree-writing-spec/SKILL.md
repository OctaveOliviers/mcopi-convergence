---
name: agree-writing-spec
description: Agree the claims, assumptions, reader prerequisites and dependency-ordered increments for a mathematical paper or proof in this repository before drafting or substantially restructuring it.
---

# Agree the writing specification

Act as the [paper writer](../../agents/paper-writer.md). Read the target's active manuscript and any existing status/specification first. For JMLR, start from the [manuscript](../../../publications/jmlr/jmlr.tex), with `publications/jmlr/SPEC.md` and `publications/jmlr/STATUS.md` when present. Discover the active sections and dependencies through the manuscript's includes. Do not import proof assumptions from another publication without checking them.

## Recover what already exists

Extract the current theorem/lemma statements and candidate dependencies from active definitions, citations and references. Labels are navigation aids, not proof that the dependency graph is complete. Distinguish use of a result's conclusion from a reference to its setting. Trace unlabelled dependencies and proofs located after other results. Mark missing proofs and unverified foundations honestly.

Start from the existing draft rather than reconstructing it from memory. Preserve established notation unless there is a specific reason to change it. Read [proof-writing](../../guidelines/proof-writing.md), [notation](../../guidelines/notation.md), [reader-background](../../guidelines/reader-background.md) and [source principles](../../guidelines/reviewing-principles.md).

## Resolve material decisions

Use the [specification format](writing-spec.md). Establish:

- Exact target claims, assumptions, algorithm variants, strength of conclusions and exclusions.
- Reader prerequisites and what the paper must teach; keep the agreed undergraduate accessibility ambition.
- Coherent reusable increments, dependency contracts and a review order. A unit can be a lemma or a tightly coupled group; arbitrary section boundaries do not determine independence.
- What constitutes correctness, understandable exposition and acceptable notation for each unit.

Stress-test the plan with focused questions about unresolved choices or conflicting requirements. Do not reopen settled decisions or ask the user to retype information available in the draft. Present a concrete proposed specification and dependency order for agreement. A setup request is not agreement to new mathematical claims.

Persist the proposal in the target's `SPEC.md`, with its agreement status, and link it from `STATUS.md`. Create these records as needed for this actual writing task; absent review evidence means unreviewed. Never invent approval. If the user already approved the same scope and order, record the evidence and proceed without another gate. Otherwise finish independent preparation while awaiting the material answer; do not begin dependent substantive rewriting.

## Output

A clear specification, dependency map, first increment and explicit agreement state. Separate author-side proof ideas and expected exposition answers from the neutral claims/prerequisites that checkers will receive. Hand agreed work to [write-and-review-paper](../write-and-review-paper/SKILL.md).
