# JMLR proof review status

Updated 2026-09-26. The replacement main proof is committed on `feature/simplify-jmlr-proof` for the user-requested pull request with the `jmlr` label. The branch is rebased onto fetched `origin/main` at `d9a1efc31b838533c20e0e4f6d7058c0d1ca77c1`. The user confirmed the mathematical scope and invoked the writing/review workflow; no further scope approval is pending.

## Current version and gates

Completed version: [assembled-v4 manifest](reviews/2026-09-26-assembled-v4/MANIFEST.txt), with correctness, notation and a clean fresh-reader test passed. Active manuscript: [jmlr.tex](jmlr.tex). Compiled output: [build/jmlr.pdf](build/jmlr.pdf), 24 pages. PDF SHA-256: `83dc3c8507e70c05d5ab3e6086e3f58c61108b8dc255a02a997863a01ac76e16`.

| Scope | Correctness | Notation | Exposition |
| --- | --- | --- | --- |
| P1–P4: complete proof increments | P4-v2-C-carryforward: pass | P4-v2-N-A: pass | Full-proof-v2 fresh test: pass |
| P5: assembled paper and complete dependency chain | A4-C: pass, following fresh A1-C audit | A4-N: pass | A4-E: clean fresh test and unassisted dialogue passed |

[Assembled review and resolutions](reviews/2026-09-26-assembled-review.md). [Fresh assembled exposition session](reviews/2026-09-26-assembled-exposition.md). All eight assembled correctness/notation findings are independently resolved. A4 supplies the probability-prerequisite bridges identified by A2/A3-E. The final reader reconstructed the whole argument and justified the difficult conditioning, fixed-priority and finite-level steps without assistance. The earlier A4 access incident and clean restart are recorded separately. No blocking mathematical, notation or exposition finding remains. No human mathematical sign-off has been requested or recorded.

`make jmlr` succeeded for A4 with the pinned TeX Live 2025 container. All 24 pages were rendered; changed pages 6 and 16–22 were visually inspected again, and all other page images exactly match the inspected A3 render. No undefined references/citations, duplicate labels, overfull/underfull boxes, clipping or missing glyphs were found. The inherited caption-package class warning remains. Final checks verified all 38 snapshot hashes, all 16 current manuscript inputs, the PDF, build inputs and retained candidate against assembled-v4; `git diff --check` passes. No experiment was rerun or figure changed.

The reviews retain their original base `63d4d97` as provenance. During pull-request preparation, the branch was rebased onto `d9a1efc`, which adds writing-harness documentation and the publication-preview workflow. Only the README needed conflict resolution, retaining both the temporary-workspace guidance and the preview instructions. All 16 manuscript inputs, both build inputs and the compiled PDF still match assembled-v4 byte for byte. All 204 entries across the historical snapshot manifests are committed and verified, including the retained build logs and recorder files. Whitespace in faithful snapshots and copied templates is preserved to maintain their hashes; whitespace checks pass for the active manuscript changes. The requested proof replacement and review are complete.

## Agreed result and scope

[Working decisions](SPEC.md): initial-visit tabular MC-O-PI, uniform initial actions within each state, full inertia, infinite cumulative learning at each state, square-summable deterministic steps and the weakened bounded-future-increase condition. There is no positive sampling floor, waiting-time bound or former learning-rate comparability assumption. Fixed priorities have a separate local retention argument and discussion paragraph. First-/every-visit convergence extensions remain deferred.

The theorem gives almost-sure convergence of estimates to the optimal action values, finitely many action-value target changes, and optimality of every sufficiently late selected policy. Policy-label constancy is asserted under unique optimal actions. The step condition is sufficient for this argument; its necessity for convergence is not claimed.

The established algorithm motivation and introduction were retained with targeted consistency corrections. The proof now supplies its foundations directly. The false converse from action-value ordering to state-value ordering is removed. Pre-/post-selection histories, target changes versus policy-label changes, and deterministic restarts are explicit. The original appendix proofs are superseded by complete proofs near their statements. Other publications are outside this work.

The requested combined stability–ODE connection is preserved near the theorem and reinforced in the introduction. [Source record](reviews/2026-09-26-methodology-source.md): Kushner–Yin §5.4 is cited for the strategy; the precise fixed positive interior distance is attributed to the inspected Borkar §3 setup. The full Kushner–Yin chapter was unavailable. No external convergence theorem is needed by the new proof. TD/function-approximation claims are prospective only.

## Evidence and retained material

The faithful [reference transcription](tmp/simplified-proof-reference/README.md) remains unchanged in mathematical content. It covers Sections 1–3, including the last two lines on page 14, and passed [fidelity validation](reviews/2026-09-26-reference-fidelity.md). It preserves the supplied PDF's assumptions and is separate from the [replacement development files](tmp/proof-replacement/README.md).

Increment evidence: [P1](reviews/2026-09-26-p1-review.md), [P2](reviews/2026-09-26-p2-review.md), [P3](reviews/2026-09-26-p3-review.md), [P4](reviews/2026-09-26-p4-review.md), and [full-proof exposition](reviews/2026-09-26-full-proof-exposition.md). Earlier failed exposition diagnostics are retained with their corrections. Exact reviewed source/PDF snapshots and manifests are versionable under `reviews/`.

[Historical setup/inventory status](reviews/2026-09-26-historical-status.md) preserves the original result graph and author-side concerns. [Update-scope audit](reviews/2026-09-26-update-scope.md) records unresolved first-visit extension obstructions U3/U4; the user deferred that broader theorem, so they do not block the initial-visit result.

## Notation and review boundaries

Principal definitions remain in the manuscript and rendering macros in [z-maths.tex](z-maths.tex). Significant choices: admissible-pair domain I and deterministic policy scope (`2-mcopi.tex`); preserved P(q), Q(pi), q_pi*, and pre-/post-selection histories; reference-fixed d_k, per-pair state weights, and stopped endpoints (`results/2-probability-to-improve.tex`); target rank W rather than policy-label rank (`results/3-convergence.tex`). No competing macro registry is maintained.

This file and SPEC.md are writer/user records. Fresh checkers receive the compiled paper and checked active excerpts, never these notes, prior exposition answers or private assessments. Changes to reviewed content must invalidate and recheck affected gates; agent checking is not formal certification or human sign-off.

## Retained scope limitations

The unchanged experimental motivation and comparative simulation numbers were not independently reproduced in this proof task. Reader observations about their documentation are preserved in [A3-E](reviews/2026-09-26-assembled-reader-a3.md). They are not proof dependencies. The practical initial-visit discussion does not establish impossibility of balanced first visits in special models; broader visit variants remain deferred by user instruction.
