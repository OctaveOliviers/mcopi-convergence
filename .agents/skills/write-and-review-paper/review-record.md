# Review record format

Use one versionable record per review round under the paper's `reviews/` directory, linked from `STATUS.md`. Create records when reviews actually happen. A record may contain successive responses, but preserve original findings and append their dispositions. This file defines the schema, not a sample approval.

## Assignment and provenance

Record the review ID, role, result IDs, assigned scope, date, reviewer identity and actual model/effort when available. Record whether this is an initial, follow-up or assembled-paper review, and any prior exposure or unavailable capability that limits independence.

Identify the exact manuscript and dependency version: a clean commit, or base commit plus included-file content digests and retained reviewed excerpts/artifact for uncommitted work. List included definitions, dependency statements/proofs, macros, relevant references, and any omitted material. Include source labels/locations. Do not put private author rationale or expected exposition answers in the assignment.

## Assessment

Use `pass`, `changes-needed`, or `blocked-missing-input`, with the scope and limitations of that verdict. Record what was checked, the claim as understood, relevant hypothesis/dependency checks, numerical/symbolic evidence if any, and genuinely unverified steps. A partial or conditional assessment is not an unconditional pass.

## Findings and responses

Give every finding a stable ID that is not reused. For each finding record:

- Role/category and severity: `blocking` or `nonblocking`, with a reason.
- Exact version and location; the problematic statement or reading difficulty.
- Evidence, mathematical/readability consequence, and a concrete resolution criterion.
- Status: `open`, `answered`, `resolved`, or `dismissed`.
- Author response, changed locations and revision ID, or reasoned rebuttal.
- Resolving reviewer/user, verification evidence and disposition date. A replacement reviewer must actually assess the finding before resolving it.

Keep suspected problems separate from definite errors and optional suggestions. A writer response alone never closes an objection. A user decision to proceed despite unresolved evidence is recorded as such and does not manufacture a correctness pass. Findings that no longer apply after a scope change still need an explicit disposition and dependency check.

## Version and dependency effects

Record changed claims/assumptions/definitions/notation, affected result IDs and transitively invalidated reviews. Keep old verdicts as historical evidence. When an approval is carried forward, identify the reviewing agent and the evidence that the relevant content/meaning is unchanged.

## Durable status update

The writer updates `STATUS.md` with the current review IDs, versions and per-role states, open findings and next action. Report `agent-checked` only when all required gates apply to the current version; human sign-off is a separate field recording an actual user decision. Never infer either status from a build passing.
