---
name: write-and-review-paper
description: Draft or revise mathematical proof increments through independent correctness and notation review, Socratic exposition testing, and a final assembled-proof review in this repository.
---

# Write and review a paper

Act as the [paper writer](../../agents/paper-writer.md). Read the [harness boundaries](../../README.md), the paper's active manuscript, agreed specification and current status. Use [agree-writing-spec](../agree-writing-spec/SKILL.md) if a material claim, assumption or dependency decision is unresolved. A narrow authorized correction within the agreed scope does not need a new specification.

## Prepare one increment

Choose the next dependency-ready unit. An existing draft still begins as unreviewed. Check actual dependency review records; do not infer approval from prose, citations to the same paper, or an old agent's confidence. Verify external theorem statements and applicable hypotheses. Unverified foundations may support explicitly conditional exploration, but block an unconditional correctness pass.

Write the simplest complete argument using [proof-writing](../../guidelines/proof-writing.md) and [notation](../../guidelines/notation.md). Keep derivation scratch work separate from manuscript text. Introduce necessary notation at its point of use, and record substantial notation decisions without copying the macro registry.

Freeze a review version before dispatch. Use a commit only if it identifies the exact included content. For uncommitted changes, record the base commit and SHA-256 digests of every included source/dependency; retain the reviewed excerpts or artifact in the versionable review record. Include relevant macro/package/bibliography inputs and the rendering version when applicable. A bare `HEAD` is not sufficient for a dirty manuscript. Do not edit the reviewed material while its reviews run; if it changes, the returned verdict belongs to the earlier version.

Give checkers the current compiled manuscript or checked, comment-free active excerpts with labels and source locations. Supply source formulas when necessary. Exclude abandoned arguments, private comments, answer keys and unrelated sections. Existing TeX tools or carefully verified excerpts suffice; do not build a custom isolation system. Naively deleting everything after `%` can corrupt escaped percentages, verbatim material or TeX whitespace. Verify that excerpts preserve the active mathematical content and include necessary context.

## Obtain independent reviews

Use separate [correctness](../../agents/correctness-checker.md) and [notation](../../agents/notation-checker.md) agents on the same version. They may run in parallel. Follow the fresh-context and explicit-access rules in the README; send a neutral assignment with the role, version, result IDs, scope, dependencies, relevant conventions and [report format](review-record.md). Do not send the writer's defense or the other review before their initial reports.

Retain a correctness checker across dependent increments where practical. It may keep its own review history and explicit exchanges. Unrelated dependency branches can have different checkers. If a reviewer must be replaced, first obtain its replacement's independent assessment of the current text, then disclose earlier relevant findings for reconciliation. Recover durable evidence from files, not an imagined agent memory.

The writer records reports, responds to each objection and may rebut with a derivation or counterexample. A revision or rebuttal is `answered`, not `resolved`. Only the responsible checker (or a replacement explicitly reviewing the issue) or the user can resolve/dismiss it. Retain the original objection, response and resolution evidence. User disposition is distinguishable from agent verification; unresolved mathematical errors cannot be turned into a correctness pass by changing a status label.

When both reviews have no blocking findings for the same version, run [test-exposition](../test-exposition/SKILL.md). An exposition probe does not replace correctness review. Route any suspected mathematical problem it uncovers back to correctness.

## Revise, invalidate and progress

After each change, identify its effect, update the version and record affected checks in `STATUS.md`:

- A changed claim, assumption, definition, mathematical step or semantic notation invalidates correctness approval of that unit and all transitively affected dependents. Recheck notation and exposition where affected.
- A purely expository edit requires a fresh comprehension test when it changes the explanation. A correctness checker must confirm that carrying mathematical approval forward is justified; the writer cannot self-certify equivalence.
- A purely typographic/macro-rendering correction requires the notation checker to verify its scope. If meaning or readability may change, repeat the corresponding checks. Record why any unaffected approval is carried forward.

Keep old reviews as historical evidence marked superseded or stale, not as approvals of the new version. Invalidate affected dependents conservatively if the graph is incomplete. Each finished unit needs current correctness, notation and exposition evidence and no unresolved blocking findings. Continue to the next agreed unit without asking for human approval after every lemma. Distinguish `agent-checked` from an optional, explicitly recorded human sign-off.

If a dispute stops producing new evidence after two response/review cycles, summarize the exact unresolved point and ask the user to decide the scope or seek another independent mathematical assessment if available and authorized. Keep the finding open; do not loop, silently weaken the statement, or grant a pass by majority vote. Continue independent work that does not assume the disputed conclusion.

## Review the assembled paper

After all units pass, use a fresh correctness checker to inspect the full dependency chain, hypotheses, definitions, limiting/conditioning arguments, and whether the final theorem is exactly what was proved. Provide the manuscript first, then reconcile previous findings. Run a global notation review and a fresh exposition test of the whole proof's mechanism and important details.

Consider compression and structural simplification before finalizing. No cut quota or word-count target overrides clarity or rigor. Any edits restart the affected checks. Apply JMLR's manuscript-level criteria from [the sources](../../guidelines/reviewing-principles.md), including significance, related work, limitations and practical relevance when within scope; these are distinct from proving a lemma.

For changed TeX or macros, use the existing build command in the [repository README](../../../README.md) and inspect affected equations/references in the output. Record unavailable build dependencies and failures rather than inventing successful validation. Finish with exact reviewed versions, open/nonblocking findings, scope limits and the next action. Agent review is not formal proof certification or human sign-off.
