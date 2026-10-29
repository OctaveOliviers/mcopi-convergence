# Assembled v1: historical-finding reconciliation

**Review ID:** `gap-integration-assembled-v1-reconciliation`  
**Reviewer:** `/root/integrated_gap_assembled`, correctness checker; assigned GPT-6 Astra / high  
**Date:** 2026-10-29  
**Preceding independent report:** [assembled-v1.md](assembled-v1.md)

This follow-up was performed after the independent initial report was saved. The writer supplied summaries of WPC-01, WA2-C1, and N-GPI-V1-01; no other historical reviews or writer notes were read. I rechecked the current maximal-inequality applications and recomputed all 13 v1 active-source hashes plus the figure-source hash. All still match the manifests recorded in the initial report. No manuscript changes were made.

## WPC-01: potentially random maximal-inequality threshold

**Current-version disposition: the objection is not reintroduced; the integrated applications have valid threshold and conditioning hypotheses.**

The earlier objection concerned an unconditional estimate with a potentially random threshold `z`; its former fix made `z` deterministic. The removed appendix is not a dependency of the current proof, and this review does not retroactively certify that old text.

In `active/results/2-probability-to-improve.tex:200–247`, the threshold in Doob's inequality is the deterministic number `1/2`. The random starting gap enters the predictable rescaling denominators, not the maximal-inequality threshold. The proof establishes square integrability with restart-measurable cutoffs `{d_{t'} >= epsilon}`, derives the conditional inequality by testing against restart-measurable events, handles a random finite restart on each `{t'=j}`, and removes the cutoff through a countable cover. The random reciprocal of the starting gap in the final bound is measurable at the conditioning history; it is not incorrectly taken outside an unconditional expectation.

In lines 315–325, the second threshold is `delta/2`, also deterministic: `delta` is defined at lines 67–72 from the finite fixed MDP and its policy values. The second case conditions at `F'_{t'}` and uses the last-visit index only in pathwise inequalities. The original law and the auxiliary law satisfy the required stopped conditional-moment premises at their respective applications, as checked in the independent report. Thus WPC-01 creates no remaining correctness issue for v1.

## WA2-C1: experiment wording

**Disposition: unchanged, nonblocking, and outside this review's assigned mathematical scope. Not resolved by this review.**

The supplied historical finding distinguishes sampled initial-visit paths from straight mean-field geometry and limits an early-stopping observation to the reported experiment. The writer reports that the relevant discussion and experiment sources are unchanged by this integration. I did not re-review those empirical claims. The finding should retain its historical status; the convergence-chain pass is not evidence that its wording has been corrected or independently approved.

## N-GPI-V1-01: missing snapshot include

**Effect on this correctness review: no missing dependency remains and no mathematical re-review is triggered by a source change.**

The supplied resolution identifies `figure-dependency/active.tex` as the omitted snapshot dependency defining the referenced illustration. That file was supplied and inspected during the independent initial review, and its hash was verified then and again here (`61e765ffdc56f3b64cfe59164908c82bc1ff4ab1e1ba86460a43f3c6af751ce4`). The supplied dependency resolves the availability issue without changing the v1 mathematical sources. This does not constitute an empirical validation of the illustration.

## Verdict after reconciliation

**`pass`, unchanged, for the assembled convergence argument within the scope of the initial report.** WPC-01 does not survive in the integrated applications. N-GPI-V1-01 has no outstanding dependency effect on this review. WA2-C1 remains outside scope and is not closed by either correctness report. The independent initial report is preserved without alteration.
