# Weighted preservation revision: review record

Date: 2026-10-18. Writer: main session. Base commit: `4482943da344c64e972b302999a6651253b5491c`. Exact frozen active excerpts, raw manuscript and dependencies are in [weighted-preservation-v1/MANIFEST.txt](2026-10-18-weighted-preservation-v1/MANIFEST.txt).

## Authorized scope and version effects

The user authorized the weighted-noise preservation argument, symmetric seed steps, and the direct comparison with the largest remaining step size using weak monotonicity once. The proof must retain localization for random positive gaps, the current auxiliary probability law and finite/infinite transition handling. Conditional return moments remain the actual assumption; fresh episodes are a sufficient implementation, not an independence assumption. No bounded-reward assumption or exploration-free extension is adopted.

Affected units: P2, P3 seed and its one-sided return bound, P4 composition, and matching P5 wording. Previous mathematical/notation/exposition reviews are superseded for these units and conservatively for their dependents. P1 formulas, main theorem and assumptions, auxiliary-law construction and global-convergence proof body are unchanged, subject to independent dependency verification.

Notation: remove c_g and c_s. Introduce bar alpha_k as the supremum of remaining deterministic steps at the preservation lemma; use it in the seed margin and composition. A_n, b_n and Z_n are local to the preservation proof; d_k there abbreviates the fixed pair's gap.

## Assignments and independence

Fresh correctness: `/root/weighted_correctness`, GPT-6 Astra high. Fresh notation: `/root/weighted_notation`, GPT-6.1 Sol high. Both received only their roles, local guides, frozen active manuscript/dependencies and neutral assignments. Raw comments, SPEC, STATUS, original reviewer proposal, other reports and writer expectations were excluded. They may compare prior checked sources only after recording independent initial reports.

The read-only preliminary consistency scan (GPT-6.1 Sol medium) identified matching changes outside the main proof. Its claim of a missing `asp: unbiased over policies` reference was incorrect because its inspected scope omitted `3-results.tex`, where that label is defined. No manuscript change followed from that claim.

## Author assessment for subsequent exposition test (private)

Prepared before any reader answers. The mechanism is: positive target gaps under uniform action update probabilities; a stopped noise sum; normalized increments against the growing drift threshold while the gap remains small; a direct maximal-noise argument after reaching delta; symmetric favorable steps create sufficient gaps and retain the reference action in unfinished states; a bounded-density auxiliary law guarantees successful requests while preserving completed-state update distributions; compare seed steps directly to all future steps; choose N first and a late deterministic start second; union bound yields positive progress; finite policy order and continuing/stopped separation give finite target changes; countable deterministic restarts remove boundedness localization; persistent-target result gives optimality.

Essential details: b_(k+1) is known at k, random small d requires localization, maximal estimates retain endpoint increments, last-visit index is never a conditioning time, seed guarantees concern bounds rather than exact probabilities, future density factors average to one, no waiting-time bound is used, and weak monotonicity enters once in the seed margin. Proposed neutral probes: explain the integral comparison when accumulated learning is finite; assess waiting with gaps on the order of future step sizes; assess an extremely long wait before a state completes; trace a finite target change coinciding with exit versus a never-changing target. Actual questions should respond to the reader's account and include no expected answers.

## Review reports, dispositions and validation

Initial correctness and notation reports are retained in [correctness](2026-10-18-weighted-correctness.md) and [notation](2026-10-18-weighted-notation.md). Both initial source audits passed. Correctness identified WPC-01, a nonblocking incorrect random-threshold declaration in the appendix's unconditional maximal-inequality calculation. Notation subsequently independently reproduced the issue as WPN-01, preserving its original report rather than claiming it had caught it initially.

The writer changed only that opening to a deterministic threshold in [v2](2026-10-18-weighted-preservation-v2/MANIFEST.txt). The later conditional extension is unchanged. Both responsible checkers verified the sole active-source change and resolved the finding, carrying clearance to v2. The notation checker also verified the new rendered paragraph. All final active-file digests were checked. Correctness reconciled the existing [source verification](2026-09-28-source-checks.md) with the unchanged classical dependencies, finding no missing input.

Fresh final assembled review: `/root/weighted_assembled`, GPT-6 Astra high. Fresh exposition: `/root/weighted_reader_available`, GPT-6.1 Sol medium. An attempted GPT-6 Sol reader (`/root/weighted_reader`) failed before reading with deployment HTTP 404; the available reader was substituted, without reusing any reader context. Neither fresh reviewer received prior reports or author expectations. Both final reviews passed on unchanged v2. The assembled reviewer independently checked the full theorem chain before receiving and reconciling the existing external-source record; no additional mathematical source was needed. The source-history and numerical-experiment scope limits remain explicit.

### Exposition evidence and disposition

[Reader account and three follow-ups](2026-10-18-weighted-reader.md) retain the unassisted initial response and all subsequent answers. The writer supplied no hints, corrections or extra material. The reader reconstructed the state-weighted drift/variance argument, predictable rescaling, endpoint protection, asynchronous seed, selective density reweighting and finite-block proof. Follow-ups correctly distinguished a fixed ratio bound from actual crossing probabilities, proved the integral comparison for a finite limiting state clock, and derived preservation of completed-state return laws despite dependence of future requests on current returns. Writer verdict: pass for the main proof and its essential appendix dependencies, without a human-readability score.

WE-01: optional reminder that the bounded-limit-set result, not mere pathwise boundedness, gives eventual containment in fixed K. The reader found and correctly used the cited stronger result unaided, and the assembled reviewer independently verified that dependency. No missing assumption or unresolved inference remains. The existing citation is retained; no unrelated rewrite was made.

WA2-C1: open, nonblocking, pre-existing discussion issue. The assembled reviewer noted that the experiment discussion describes initial-visit trajectories as straight and discusses early stopping too broadly. The straight segments are a mean-field property in the illustrated example. This prose does not enter the theorem and is unchanged in this focused mathematical revision. The finding is retained in the assembled report for a separate discussion pass; it is not marked resolved or silently incorporated into the proof's clearance.

### Builds and rendered validation

Both `make jmlr` and `make jmlr REVIEW=1` succeeded for v2 with the repository's pinned TeX Live 2025 container. The documented Colima runtime initially was stopped; it was started and the builds rerun. Both PDFs have 28 pages. The clean PDF has only the inherited caption-class warning. The review PDF retains inherited caption/microtype warnings and a 0.18776 pt overfull line on page6; no undefined references, missing symbols or unstable changebars were found.

Writer visually inspected clean pages5–7,13–18,21,25 and review pages6,14–18,26–27; the inherited fractional-point box diagnostic has no visible clipping. The notation reviewer additionally inspected clean pages13–19,21,25–27 and the v2 appendix correction. Final review pages14–18 are byte-identical PNG renders to the inspected v1 pages; only the appendix threshold changed between versions. The final review build preserves the clean PDF SHA-256 `d979d40c0cbe6e6bd62b846d1b6cb6b235e231f9cd7b22ba0bc26fb15d00f0af`. All 110 extracted numbered equation references agree between clean and review outputs. Exact artifact hashes are in each snapshot's `ARTIFACTS.sha256`; source manifests are unchanged from the reviewed versions.

Agent-checked scope: the mathematical simplification and resulting main theorem dependency chain, notation and unassisted exposition mechanism. This is not formal proof certification, human sign-off, experiment replication or a new historical literature audit. No unrelated source, experiment, user review proposal, or other publication was edited.
