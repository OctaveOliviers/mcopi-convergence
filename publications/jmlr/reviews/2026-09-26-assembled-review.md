# Assembled JMLR review

## Version and assignment

Version A1: [assembled-v1](2026-09-26-assembled-v1/MANIFEST.txt), base `63d4d97e6d2ffba4d605f7e4419ca79ce031c6ea`, on `feature/simplify-jmlr-proof`. Active source line numbers are preserved in checked excerpts; only full-line inactive comments are removed. Sixteen manuscript/source dependencies, root build inputs, PDF, final log, recorder file and generated bibliography are retained. The PDF is 23 pages.

A1-C: fresh `/root/assembled_correctness`, GPT-6 Astra, high. Independent full dependency-chain audit and consistency of surrounding claims. No prior writer or checker history provided. Assigned the complete compiled paper, active excerpts, dependencies and role/guidelines only. Existing experiments are not rerun.

A1-N: continuing `/root/replacement_notation_a`, GPT-6 Astra, high. Global semantic and printed notation review of the same assembled version, including inherited context. Prior independent excerpt notation history is retained; writer notes and peer reports remain excluded.

Initial A1-C passed the complete proof chain with two nonblocking framing findings. Initial A1-N required two semantic-definition corrections; four further notation/terminology findings were nonblocking. Their dispositions are recorded below. A1 is historical once A2 is frozen.

## Build and visual inspection

`make jmlr` succeeded using the pinned local `mcopi-latex:2025` container, pdfTeX 3.141592653-2.6-1.40.28 (TeX Live 2025), latexmk 4.87. The final log contains no undefined references/citations, multiply defined labels, overfull boxes or underfull boxes. The existing caption-package warning about the document class remains.

All 23 pages were rendered with Poppler at 100 dpi and visually inspected in six four-page sheets. Equations, theorem/lemma endings, section transitions, figures, bibliography and page numbering render without clipping, overlaps or missing glyphs. Affected proof pages 3–18 were inspected, including the theorem (p11), barrier (pp11–13), seed/likelihood construction (pp14–16), stopped estimate (p17) and final convergence argument (p18).

Before freezing A1, a duplicated typography setup was removed and trailing whitespace corrected. The established mathematical macros and experiment figures are unchanged. Any subsequent source edits require a new version and affected reviews/build checks.

## A1-C initial report

The fresh checker found no blocking error in the complete Sections 2–3 chain. It verified uniform termination under arbitrary control laws, policy improvement and Bellman verification, conditional versus actual learning, stability without assuming boundedness, persistent-target identification, deterministic improvement, both phases of the state-clock barrier, random restarts and endpoint protection, favorable-update magnitudes/probabilities, separately completed states, the bounded likelihood and preserved completed-state laws, uniform stopped progress, and the finite-level block argument with deterministic restarts.

Degenerate cases checked: zero discount, singleton action sets, globally or locally empty bad-action sets, equal rank values for different targets, and nonoptimal policies sharing optimal action-value targets. No flaw was found. No experiments were rerun. External literature exclusivity and approximation/TD extensions were not certified; no external convergence theorem is needed by the proof.

- **A1-C-F1**, nonblocking framing, `jmlr.tex:154`, `1-introduction.tex:52–54`: “only known condition” for unknown models conflicts with the cited small-discount guarantee. Unknown transitions do not exclude a known small discount factor. Criterion: qualify the comparison or explain the scope. **Author response:** abstract now refers to classical general-MDP guarantees; introduction distinguishes the classical results without a small-discount restriction. **Answered**, awaiting A2-C verification.
- **A1-C-F2**, nonblocking prospective-extension framing, `4-discussion.tex:18,177–180`: “describe how to generalise” exceeds the actual discussion, and representational richness alone does not prove a finite approximation perturbation. Criterion: mark these as prospective and require additional error/coordinate-update analysis. **Author response:** describes possible extensions, explicitly requires quantitative accumulated-error control and a compatible favorable-update argument; no approximation guarantee is asserted. **Answered**, awaiting A2-C verification.

## A1-N initial report

The global checker verified the active manuscript, macro/package inputs, extraction and rendered MDP definitions, all 12 proof endings and Figure 1. All 17 relevant manifest hashes were verified. The proof retains consistent target/policy distinctions, histories, reference gaps, stopping endpoints, constant dependencies and existing principal notation. No duplicate labels or unresolved source references were found. All 12 ending squares are single, aligned and unclipped. Prior excerpt exposure was retained; writer and peer notes were excluded.

- **A1-N-01**, blocking semantic definition, `2-mcopi.tex:9–11,106`: q_pi was declared on S × A despite only state-dependent A(s) and admissible pairs I being defined. Criterion: use I. **Author response:** domain is now I. **Answered**, awaiting A2-N and A2-C.
- **A1-N-02**, blocking semantic scope, `2-mcopi.tex:47–53,95–119`: values were defined “for any policy” after randomized policies were introduced, but v_pi(s)=q_pi(s,pi(s)) only makes sense for deterministic policies. Criterion: restrict to deterministic stationary policies or give the randomized identity. **Author response:** value definitions now explicitly concern pi in P, retaining the separate optimality comparison with general control laws. **Answered**, awaiting A2-N and A2-C.
- **A1-N-03**, nonblocking terminology, `2-mcopi.tex:228`, `4-discussion.tex:31–44`: marginal first-visit probabilities need not form a normalized distribution; every-visit counts can exceed one. **Author response:** the discussion defines first-visit marginal probabilities, describes every-visit expected counts and calls them update rates. Initial-visit mu=sigma remains a genuine probability distribution. **Answered**, awaiting A2-N/C.
- **A1-N-04**, nonblocking terminology, `3-results.tex:7–11`: strict exploring starts lacked an active definition. **Author response:** adds a common positive lower bound on every sigma_k(s,a), matching the original definition at base `63d4d97...`, `2-mcopi.tex:436–444`. This describes the retained experimental claim, not the new theorem assumption. **Answered**, awaiting A2-N/C.
- **A1-N-05**, nonblocking terminology, `1-introduction.tex:106–108`, `4-discussion.tex:177–180`: difference inclusion was promised but never defined; “finite perturbation” was ambiguous. **Author response:** introduction says stochastic recursion; approximation text now states specific missing analysis without claiming a perturbation bound. **Answered**, awaiting A2-N/C.
- **A1-N-06**, optional notation, `4-discussion.tex:164`: T_pi^n had no domain-specific operator definition or composition convention. **Author response:** supplies the action-value Bellman formula and explains repeated composition. **Answered**, awaiting A2-N/C.

## A2 edits and review effects

The above corrections also remove the author-process phrase “retain the manuscript's notation” in favor of “define”. Original whitespace on unchanged introduction lines is restored to keep the diff focused. The actual P1–P4 proof steps, theorem assumptions/conclusions and mathematical macros are unchanged. Semantic clarifications and framing changes nevertheless require explicit correctness carry-forward and global notation verification; the writer does not self-certify that equivalence. Fresh assembled exposition will test A2 after clearance.

## A2-C verification and reconciliation

**Pass**, `/root/assembled_correctness`, 2026-09-26. Requested model GPT-6 Astra/high; the child report did not separately expose model/effort. Exact version [assembled-v2](2026-09-26-assembled-v2/MANIFEST.txt), PDF SHA-256 `cd930c68655dce4ff6c2615ceb751e13d64e4091b2ab7d07a8cde0089fb92a62`. Every active-file difference and the rendered changed passages were inspected. All three result proof files, foundational proof arguments, macro/package inputs, bibliography and figures are unchanged.

The checker independently **resolved A1-C-F1 and A1-C-F2**: the comparison now separates small-discount results from classical general-MDP results, and the approximation/TD discussion identifies unproved requirements instead of promising an extension. It also independently verified **A1-N-01 and A1-N-02** from the correctness perspective: q_pi on I matches admissible pairs, and value definitions restricted to deterministic stationary policies make the identity valid while preserving verification against arbitrary control laws.

The rate definitions, strict-start lower-bound explanation, recursion terminology, Bellman operator and repeated-composition definition were all checked and found sound. No stronger theorem assumption or broader theorem scope was introduced. No new findings arose.

After the independent initial report, the checker received a neutral list of prior proof objections and confirmed each was covered by its assembled audit: positive-probability conditional support; per-pair deterministic coefficients; adapted barrier weights and zero-weight drift; explicit policy-action retention; positive bad-gap scope; trajectory and terminal conventions; finite-horizon conditional maximal inequality with localization/random restarts; and weighted conditional laws that average out future likelihood factors. No historical objection needs reopening. **All main-chain mathematical approval explicitly carries forward to A2.**

Scope limits remain: retained experiments were not independently rerun, external literature was not comprehensively audited, and no TD/function-approximation convergence is established. No human mathematical sign-off is recorded.

## A2 build and visual verification

`make jmlr` succeeded again, 23 pages. The final log has only the inherited caption-package class warning; no unresolved references/citations, multiply-defined labels, overfull or underfull boxes. All 23 final pages were freshly rendered and visually inspected after the review corrections. The definition edits, equations, proof endings, shifted page breaks, discussion formula, figures and bibliography remain legible and unclipped.

## A2-N final global notation verification

**Pass**, `/root/replacement_notation_a`, 2026-09-26. Requested model GPT-6 Astra/high; the child did not separately expose model/effort. The checker verified all 17 active-input/PDF manifest hashes, every A1-to-A2 active-source change, and rendered corrected definitions, discussion, figure and all 12 proof endings. No writer notes or peer reports were read.

All six findings **independently resolved**: A1-N-01 at `2-mcopi.tex:106` (admissible-pair domain); A1-N-02 at `2-mcopi.tex:95` (deterministic stationary scope); A1-N-03 at `4-discussion.tex:31–37` (marginal rates/counts); A1-N-04 at `3-results.tex:8` (strict-start definition); A1-N-05 at `1-introduction.tex:107` and `4-discussion.tex:181` (recursion/prospective approximation); A1-N-06 at `4-discussion.tex:164–168` (Bellman operator and composition). No new conflicts, duplicate labels or unresolved references were found. Unchanged proof files/macros/packages/figures explicitly carry their previous notation approval. All proof endings remain single, aligned and unclipped. **No open notation finding remains.**

A2 is cleared for the fresh assembled exposition test, recorded separately. All initial A1 objections and reports above remain historical evidence; no human sign-off is inferred.

## A3 explanation repair, correctness and notation

The A2 fresh reader accurately reconstructed the proof but identified reliance on an unstated conditional-expectation characterization. [Diagnostic and dialogue](2026-09-26-assembled-reader-a2.md). A3 supplies that test-event identity in `2-mcopi.tex:212–216`, identifies the next history, and verifies the weighted conditional formula in `results/2-probability-to-improve.tex:257–270`. No theorem hypothesis, estimate, algorithm or stopping convention changes.

Exact version: [assembled-v3](2026-09-26-assembled-v3/MANIFEST.txt), PDF SHA-256 `876b30acd4dd0b46f84a1c1e33171234a5556e61b0cfcb7616c2a3432338b707`.

**A3-C: pass**, `/root/assembled_correctness`, 2026-09-26. Every difference and the rendered changed passages checked. The test-event characterization is valid, the next-history measurability justifies averaging the terminal likelihood, and the proposed conditional expectation H is bounded: for |Y|<=M, |E[L_infinity Y|G]|<=M L_k. Nonnegative L_infinity vanishes almost surely on {L_k=0}, so setting H=0 there is legitimate. The displayed identity against each known event identifies the weighted conditional expectation. All main-chain correctness carries forward; A1/A2 findings remain resolved. No new finding. No reader transcript or writer notes accessed.

**A3-N: pass**, `/root/replacement_notation_a`, 2026-09-26. All 17 active-input/PDF hashes and both changed passages verified, with affected rendering on pp6 and 16–18. New local Y, G, H and event A have explicit roles; original and auxiliary expectations and zero-likelihood scopes remain distinct. Every other active input is byte-identical to A2, so global approval explicitly carries forward. All six A1 notation findings remain resolved; no new finding, duplicate label, unresolved reference, clipping or overlap.

Both reviewers were requested as GPT-6 Astra/high; their reports do not separately expose runtime identity/effort. No human sign-off is inferred. A3 now has full correctness and notation clearance and is assigned to a new independent reader.

## A3 build and visual inspection

`make jmlr` succeeded with 24 pages. The final log has no undefined references/citations, duplicate labels, overfull boxes or underfull boxes; only the inherited caption-package class warning remains. All 24 final pages were freshly rendered and inspected, including the new conditional-average definition on p6 and weighted-law verification on p16, the theorem and complete proof, all proof endings, figures and references. No clipping, overlap or missing glyphs were found. Later page breaks shifted with the explanatory addition; no proof content was removed to meet a page target.

## A4 prerequisite repair and current approvals

The A3 reader reconstructed the conditional-law and finite-rank arguments but identified an unstated conditional bounded-convergence fact. [A3 diagnostic](2026-09-26-assembled-reader-a3.md). A4 defines adaptedness and the likelihood martingale identity, gives a bounded expectation-limit estimate, and derives terminal conditional mean one by testing events in the starting history. No mathematical target, assumption, estimate or stopping convention changed.

Exact [assembled-v4 manifest](2026-09-26-assembled-v4/MANIFEST.txt). PDF SHA-256 `83dc3c8507e70c05d5ab3e6086e3f58c61108b8dc255a02a997863a01ac76e16`.

**A4-C: pass**, `/root/assembled_correctness`, 2026-09-26. All active-file differences and the changed PDF passages checked. Adaptedness matches history measurability. Conditional mean-one factors imply the likelihood martingale identity and integrability follows from its bound. The epsilon estimate gives limsup E|X_n-X|<=epsilon, then zero, since almost-sure convergence gives vanishing threshold probabilities. Applying the bound to 1_A L_n yields E[1_A L_infinity]=P(A), hence the terminal conditional mean. At later histories the same argument gives E[L_infinity|F'_k]=L_k. This preserves all subsequent law/transfer identities and the random-start argument. **Complete main-chain correctness explicitly carries forward.** No new finding; historical findings remain resolved.

**A4-N: pass**, `/root/replacement_notation_a`, 2026-09-26. Both changed passages, surrounding definitions, compiled text and pp6,16–19 inspected; all 17 active-input/PDF hashes checked. Temporary bounded-limit variables remain local, conditioning histories and fixed/random starts remain distinct, and all added formulas render cleanly. Every other active input is byte-identical to A3, justifying global carry-forward. No new findings; all six A1 notation findings remain resolved.

Both reviewers were requested as GPT-6 Astra/high. No notes/reader transcripts/peer reports were accessed, and neither edited sources. A4 is cleared for the fresh exposition test. Existing empirical and external-literature review limits remain.

`make jmlr` succeeded for A4, 24 pages, only the inherited caption-package class warning. All pages were freshly rendered. Pixel hashes identify changes only on pp6 and 16–22; those pages were visually inspected again, and every other page matches the already inspected A3 rendering exactly. No clipping, overlaps, missing glyphs or bad proof-ending marks were found. No undefined references/citations, duplicate labels or overfull/underfull boxes.

## Final assembled clearance and integrity checks

**A4-E: pass**, clean reader `/root/assembled_reader_final`, requested GPT-5.6 Sol/medium with no inherited context. The actual [initial account and four unassisted follow-ups](2026-09-26-assembled-reader-a4-final.md) reconstruct the complete mechanism and justify its delicate inferences. The [session record](2026-09-26-assembled-exposition.md) preserves earlier prerequisite repairs and the invalidated first A4 reading after accidental inactive-comment access. That diagnostic is not counted as clearance. No manuscript changed during the clean final test.

Final integrity verification, 2026-09-26: all 38 hashes in the A4 manifest match; all 16 current manuscript/dependency inputs match `raw/`; the final PDF, build inputs and retained integration candidate match the snapshot byte for byte. `git diff --check` passes. Tracked modifications remain confined to the agreed JMLR proof and root temporary-workspace documentation; figures, bibliography, macros, experiments and other publications are unchanged. All three assembled gates now pass on exactly the same content, with no open blocking findings. Optional wording suggestions and empirical/literature scope limits remain recorded.

A preliminary final check assumed that `origin/main` still equalled the recorded base and failed that assumption. Inspection confirmed `HEAD=63d4d97e6d2ffba4d605f7e4419ca79ce031c6ea`, while `origin/main=79f123d50bf95d21c858fbcaf29aa68c8bc6d599` adds only writing-harness/AGENTS documentation relative to that base. No manuscript or build input differs. The corrected integrity check verifies the actual recorded base and exact source hashes rather than asserting an unchanged remote tip. No new commit, push or rebase was performed during finalization.

## Pull-request preparation

At the user's subsequent request, the work was committed and rebased onto fetched `origin/main` at `d9a1efc31b838533c20e0e4f6d7058c0d1ca77c1`. The only conflict was in the root README; both the JMLR temporary-workspace note and upstream publication-preview instructions were retained. No manuscript or build input changed. Byte comparisons against assembled-v4 confirm that all 16 active inputs, Makefile, Dockerfile and compiled PDF retain their reviewed contents. All 204 entries across the nine historical snapshot manifests are present in the commit and have matching hashes, including explicitly retained build logs and recorder files.

The broad staged whitespace check reports inherited whitespace in faithful snapshots and copied templates. Those bytes are retained deliberately; modifying them would falsify their reviewed hashes. The scoped check of active manuscript changes, README and current SPEC/STATUS passes. Existing local harness copies and disposable page renders are excluded from the proof commit. The manuscript review approvals remain attached to the unchanged assembled-v4 content; this packaging step introduces no mathematical revision.
