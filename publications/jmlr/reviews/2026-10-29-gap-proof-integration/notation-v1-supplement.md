# Gap-proof integration — notation v1 supplement

## Assignment and provenance

- Review ID: gap-proof-integration-notation-v1-supplement.
- Role: independent notation/reference reviewer; follow-up source-dependency reassessment and clean-PDF inspection.
- Date: 2026-10-29.
- Reviewer: `/root/integrated_gap_notation`; same assigned routing and independence limitations as `notation-v1.md`.
- Prior exposure: this checker wrote the initial source report. No other reviewers' findings or writer history were supplied.
- Original version: v1, base commit `d7bb9f821f1c16cdfd03f80ba7c15a7a68eb05e1`; all 13 original active hashes reverified unchanged.
- Newly included dependency: `figure-dependency/active.tex`, SHA-256 `61e765ffdc56f3b64cfe59164908c82bc1ff4ab1e1ba86460a43f3c6af751ce4`, verified against `figure-dependency/MANIFEST.sha256`. The raw counterpart was not read.
- Clean artifact: `v1/jmlr.pdf`, SHA-256 `f56f176d3187386e4ab7f07818dd066245a0c143f78f36a7c336c79bfbac54f5`.
- Build evidence: `v1/jmlr.log`, SHA-256 `ad48bbf15b9d900430588a3e1ec4aa37c989549665d2c0089dd38658cbd3adc3`.
- PDF inspection: read-only PDF skill workflow. Text extraction located the proof; full clean pages 14–19 were visually inspected using supplied 1500-pixel page renders `/tmp/jmlr-integration-clean-14.png` through `-19.png`.
- Scope: closure of N-GPI-V1-01 and rendered notation/equation layout for Lemma 13 (`lem:barrier`), equations (27)–(45), and the immediate seed-section transition. Not an independent correctness certification or full-paper visual review. The annotated review PDF has not been supplied or inspected.

## Assessment

**Verdict: pass for v1 gap-proof source notation, local integration, and inspected clean-PDF layout.** No open notation finding remains from this review round.

The lemma and all proof displays are legible. Primed stopping-time filtration subscripts, learning-rate bars, gap subscripts, indicators, threshold denominators, summation ranges, conditioning separators, and last-visit index ell render without symbol substitution, overlap or clipping. Equations (27)–(45) are numbered and aligned consistently; the two case headings are visible, and the proof conclusion/QED precedes the seed heading correctly. Page breaks split prose but do not split an equation or change its grouping. Source reference numbers used in the displayed proof match the clean rendered equations.

The supplied log has no undefined-reference, multiply-defined-reference, overfull-box or underfull-box warning. Its caption-package class warning does not demonstrate a defect in the inspected proof layout.

## Finding disposition

### N-GPI-V1-01 — Resolved: review snapshot omitted an existing included figure source

- Original finding preserved in `notation-v1.md`; this supplement does not overwrite its initial evidence or verdict.
- Supplemental evidence: original active `4-discussion.tex:75` already contains `input{figures/single-state-simulation}`. Newly supplied comment-free dependency `figure-dependency/active.tex:27` defines `fig: experiment smallest MDP for iv vs fv` inside its first subfigure.
- Reassessment: the label was absent from the original supplied review snapshot, not from the manuscript's existing include chain. The original classification as a manuscript source-reference defect is withdrawn. This is a snapshot omission, resolved by supplying and inspecting the omitted dependency; no manuscript revision was needed.
- Verification: dependency content hash verified; original 13 active files unchanged; repeating the source inventory with the dependency yields 90 unique labels, 156 reference commands, no duplicate labels, and no unresolved source reference except package-generated `LastPage`. The clean build log contains no undefined-reference warning.
- Status: resolved.
- Author response: supplied the existing omitted dependency and identified its include location; no manuscript change.
- Resolving reviewer: `/root/integrated_gap_notation`, 2026-10-29, based on direct source and hash inspection.

## Version and dependency effects

The initial source pass carries forward because the original reviewed bytes are unchanged, as verified by this reviewer. Its temporary whole-source-reference limitation is discharged by inspection of the omitted dependency. The visual pass applies only to the hashed clean PDF and pages stated above. Any subsequent source/artifact changes or newly supplied review PDF require the relevant scoped follow-up; neither report is a whole-manuscript correctness approval.

## Annotated review-PDF follow-up — 2026-10-29

- Follow-up ID: gap-proof-integration-notation-v1-review-render.
- Reviewer: same independent notation checker; this is an additional rendering assessment, not a source revision.
- Artifact: `v1/jmlr-review.pdf`, SHA-256 `925963cb39eba59a00522904d4ed49ae123e1268494a2794ac8087c9e91a9afe`.
- Log: `v1/jmlr-review.log`, SHA-256 `114aef1aa8af7bd386a2269861c83090c5b93e32ecd398df3c8ed1d292474804`.
- Evidence: `ARTIFACTS.sha256` entries verified by file-byte hashes. Only the supplied review PDF, its log and manifest were used substantively; review source/base contents were not read.
- Inspected scope: all six full 1500-pixel review-PDF page renders, pages 14–19, `/tmp/jmlr-integration-review-14.png` through `-19.png`; Lemma 13, equations (27)–(45), proof ending and immediate seed transition. The second case begins near the bottom of review page 18 and concludes on page 19.

**Rendering verdict: pass in the inspected scope.** The blue margin bars remain outside the text and equation area, continue across pages without intersecting symbols, and end before the next marked block without obscuring the proof-ending square. The learning-rate bars, prime marks, equation labels/numbers, stopping-time subscripts, conditional separators, fractions and sums remain legible. Every affected equation fits the text width and remains intact across page breaks. No unstable-bar, unresolved-reference or duplicate-reference diagnostic appears in the supplied log.

The review log also contains a caption-package class warning, a microtype footnote-patch warning, and one 0.18776pt overfull paragraph at generated lines 1268–1272. No overflow or visual defect is present in the gap-proof pages inspected here; the earlier sampling-paragraph diagnostic lies outside this rendering scope and is not a notation blocker for the changed proof. The earlier clean-PDF statement that the annotated PDF was not yet inspected is historical and is superseded by this follow-up. No new finding was opened, and N-GPI-V1-01 remains resolved.
