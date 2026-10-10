# Gap-preservation exposition revision

User authorization, 2026-10-10: proceed with the agreed simplification, keep the exposition clear, and introduce no unnecessary notation. The theorem, initial-visit rule, inertia, within-state uniformity, cumulative learning and bounded future step increases remain unchanged.

## Scope and version

Base commit: `cae73243ee232631cf77a3d2fb3d27d92f8db5c3`. Frozen active sources and build inputs: [gap-preservation-v1](2026-10-10-gap-preservation-v1/MANIFEST.txt). All unchanged raw inputs were verified against restoration-v4 before copying its active excerpts. Main session is the sole writer.

Only `results/2-probability-to-improve.tex`, `results/3-convergence.tex` and one terminology sentence in `z-appendix.tex` change. The proof roadmap has two steps. The gap-preservation estimate is interpreted at the seed margin before its proof, and its two internal cases are described as possible crossings before/after the fixed threshold rather than separate construction stages. The progress introduction names the auxiliary law where the one-half bound holds. The alias c_l is removed in favor of its exact value 16 c_xi; no new mathematical symbol is introduced. Necessary stopping and conditioning arguments remain intact.

The existing untracked referee report, research files and harness edits are outside this revision and will not be staged. Their broader suggestions are not silently incorporated into this proof-focused task.

## Independent assignments

- `gap-preservation-v1-correctness`: fresh `/root/gap_preservation_correctness`, requested GPT-6 Astra/high. New active manuscript first, then comparison with restoration-v4 active files; inspect all changed claims and composition through convergence. Prior review reports excluded during independent inspection.
- `gap-preservation-v1-notation`: fresh `/root/gap_preservation_notation`, requested GPT-6.1 Sol/high. Semantic notation and terminology in the changed sections and their global uses, then rendered output. Prior reports excluded.
- Fresh exposition test follows both clearances. Its private assessment below was prepared before any reader response.

Requested model/effort settings are not independent attestations of runtime identity. Reports and final dispositions will be appended after receipt.

## Private exposition assessment

Do not give this file to an exposition checker. The reader receives only frozen active manuscript material, the rendered PDF and local role/background guides, excluding SPEC, STATUS, all prior reports and this assessment.

The explanation should convey that seeding and gap preservation are two logical components, applied separately at state completion times. A sufficiently large fixed multiple of the completion-time step size suffices for the protection estimate: substituting the seed bound produces a constant times 1/N plus a square-summable tail. The estimate controls crossings up to and including the next target change or stopped exit. It does not require each gap to reach delta, nor guarantee permanent retention of a policy label after one seed. Before/after-delta calculations partition possible failures inside that one estimate.

Important dependencies: no lower sampling floor; drift and variance share the per-action state weight; unfinished states retain their reference actions under favorable updates and inertia; the auxiliary law preserves completed-state return laws; the one-half protection probability is under that law, then transferred to a positive original probability. The final finite-policy block argument tolerates unsuccessful worsening transitions and uses countably many deterministic restarts.

Neutral follow-ups will test what the entry-size estimate permits, what happens if a gap never reaches delta, and which law supports the protection probability. No expected answer, hint or previous reader response will be supplied. This is a targeted test of the revised proof and its connection to convergence, not a new test of every unchanged introductory assertion.

## First reader diagnostic and unchanged retest

The requested GPT-6 Sol/medium reader failed before reading with an unavailable deployment (HTTP 404). A fresh fallback, `/root/gap_preservation_reader_fallback`, requested GPT-5.6 Sol/medium, read the frozen manuscript without writer context. Its [initial response](2026-10-10-gap-preservation-reader-initial.md) and [four unassisted answers](2026-10-10-gap-preservation-reader-followup.md) are retained verbatim. Model/effort were not independently exposed to the checker.

The reader reconstructed the proof and correctly explained protection from a large fixed multiple of the learning rate, a gap never reaching delta, the stopped endpoint, and the auxiliary/original-law distinction. It nevertheless read the universal late-rate choice in `results/3-convergence.tex:23` as a bound only at one restart, and repeated that objection on an unassisted re-derivation. The correctness checker independently dismissed COR-GP-01: the condition explicitly holds for every time beyond k_0, so applies directly at each finite T_s; no additional comparison factor occurs. The original objection and independent resolution are in the [correctness report](2026-10-10-gap-preservation-correctness.md).

The writer then supplied the exact universal sentence and explained its application. This is recorded as assistance. The first session is diagnostic, not an unassisted exposition pass. No manuscript change is justified by overlooking an explicit quantifier. The unchanged retest has a specific reason: this demonstrable reader error, not an attempt to select a favorable verdict. Both sessions must remain in the record.

A new fresh reader, requested GPT-6.1 Sol/medium, will receive the same active manuscript, prerequisite profile and neutral first assignment, with no earlier answers, objections or corrections. The private assessment above is unchanged and predates that reader's response.

The first reader [withdrew the objection after assistance](2026-10-10-gap-preservation-reader-assisted.md), explicitly acknowledging the missed universal quantifier. No source edit followed. Its reader disposition was inconclusive as an independent gate, with successful assisted diagnosis.

## Correctness, notation and build dispositions

- **Correctness: pass.** The [independent report and later reconciliation](2026-10-10-gap-preservation-correctness.md) verify the changed explanation, exact constant substitution and the chain through convergence. The reviewer explicitly carries forward restoration-v4's mathematical clearance after inspecting the original findings and unchanged dependencies. COR-GP-01 is dismissed as a missed universal quantifier, with no manuscript change.
- **Notation and rendering: pass.** The [independent report](2026-10-10-gap-preservation-notation.md) verifies the constant substitution, current terminology, complete reference scan and every changed PDF page (12–22 and 27), plus page 26 for the whole appendix paragraph. No new symbol or finding was introduced.
- **Build: pass.** `make jmlr` completed using pinned TeX Live 2025. The final log has no undefined references, duplicate labels, overfull or underfull boxes; only the inherited caption-package warning remains. Earlier rerun notices were cleared by the final pass.
- **PDF:** 28 pages; SHA-256 `0a04d412c1467dfb91b32e1aae367814bf84bb923ecdab44f4943b791077cf97`. Pages 1–11, 23–26 and 28 are pixel-identical to restoration-v4 at 100 DPI; all other pages were directly inspected. The writer additionally inspected pages 13, 15, 17 and 27.
- **Integrity:** all 427 historical/current manifest entries verify. All unchanged current raw inputs match restoration-v4's raw snapshot, and their active excerpts match its active snapshot; each changed source matches gap-preservation-v1 directly. Current build inputs and PDF also match. The manifest's rendering-pending header records the freeze-time state; this later record and the independent rendered-page report supply the completed verification without changing the frozen manifest (SHA-256 `8afcd7a0a5abad413595313ce7c8c0b25a580af20439ed3c32bc86664873ba74`).

No numerical experiments, broad novelty review or other-publication work was performed. The unchanged mathematical dependency sources retain their prior audit, explicitly reconciled by the current correctness checker. These are scoped agent checks, not formal proof certification or human sign-off.

## Final fresh-reader test: GP-E2

Reader: fresh `/root/gap_preservation_reader_final`, requested GPT-6.1 Sol/medium. The reader did not independently see its runtime model/effort identifier. It received only the frozen active manuscript, PDF, manifest, blank session format and local role/background/writing guides. It reports no access to excluded material. Correctness and notation clearance preceded the test. The mathematical sources and PDF stayed frozen throughout both reader sessions.

The [independent initial account](2026-10-10-gap-preservation-reader-final-initial.md) and [four unassisted follow-up answers](2026-10-10-gap-preservation-reader-final-followup.md) are copied verbatim from the reader's files. No hint, correction, prior objection or expected answer was supplied to this reader.

The initial account reconstructed the entire dependency chain: fixed-target comparison and the bounded limit set; mean-field improvement; the bad-action gaps; state-specific seeding; preservation of completed-state laws under the finite reweighting; the two crossing cases within one preservation estimate; and the stopped finite-policy block argument. Temporary reading stops were resolved by the supplied definitions or appendix. There was no unresolved inference.

The follow-ups independently verified:

1. The rate choice applies at each finite random completion time because it holds for every deterministic index beyond k_0. Together with the seed margin, it gives the stated 2 c_g c_alpha^2/(delta N) term without an extra comparison factor.
2. For a gap C alpha_T, the first failure term is c_g c_alpha/C while the square-summable tail tends to zero. A sufficiently large fixed multiple is necessary for this estimate to be useful; lateness alone does not make that first term vanish.
3. Never reaching delta does not invalidate protection. The below-threshold estimate covers such crossings, and finite pre-exit transitions require positive completed gaps through the endpoint plus retention of reference actions at unfinished or endpoint-completed states.
4. The one-half bound is on failure under the auxiliary law. Transfer gives the original-law lower bound p = (1/2) p_0^(|S x A| N) for the union of stopped success alternatives, not strict improvement alone.

**Writer disposition: pass for the revised proof and its inspected dependencies.** This is supported by the saved unassisted reasoning and answers, not just the reader's self-rating. The earlier failed diagnostic remains part of the evidence; the explicit quantifier was correctly understood in this fresh test. No further mathematical or explanatory source edit follows the test.

The reader found no unnecessary central symbol and requested no restructuring. It mentioned two optional changes in unchanged text: spelling out why the limit box lies inside K and replacing a repeated mean-field argument by a lemma reference. Both dependencies were already reconstructed correctly. The writer declines these optional edits under the user's instruction to preserve sound surrounding exposition; they are not unresolved blockers.

## Final state

Correctness, notation/rendering and fresh unassisted exposition gates all pass on gap-preservation-v1. The current source and PDF integrity checks pass. All prior mathematical findings remain resolved or dismissed; COR-GP-01 is dismissed with independent evidence and an assisted reader withdrawal. This completes the authorized focused revision. The existing PR will receive this version, its exact snapshot and these review records; unrelated working-tree material remains excluded.

The staged whitespace check passes for the live manuscript edits and new review prose. A check including the newly added frozen tree reports only inherited whitespace in byte-identical dependencies and generated-log whitespace. Those exact records are intentionally preserved; they are not rewritten to make a snapshot diff whitespace-clean.
