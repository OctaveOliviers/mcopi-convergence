# Appendix cross-reference notation/navigation review

- Review ID: 2026-10-24-appendix-links-notation-navigation.
- Role: independent notation checker, scoped follow-up review.
- Reviewer: /root/appendix_links_check, GPT-6 family (exact model and reasoning effort not exposed).
- Date: 2026-10-24.
- Verdict: **pass within the assigned scope**. No findings.

## Exact scope and provenance

Reviewed the complete recursive diff and all four active files against their before counterparts in `publications/jmlr/reviews/2026-10-24-appendix-links/`: `2-mcopi.tex`, `results/2-probability-to-improve.tex`, `results/3-convergence.tex`, and `z-appendix.tex`. Every active/before SHA-256 matches MANIFEST.sha256 (base 067ac4022a5f9605bd66d906e72831b21acfef5a). Read the notation-checker role, required local notation/review principles, and review-record format. Inspected the full active appendix and surrounding referring statements. Read the appendix-numbering definitions in jmlr2e.sty and relevant built auxiliary/log entries; extracted PDF pages 23–27 to verify printed heading numbers. Main-document placement of `\appendix` immediately before `\input{z-appendix}` was supplied in the assignment.

Fresh checker context: no writer history, STATUS, SPEC, other reviews, raw tree, or writer notes read. No manuscript edits. This is a navigation and change-impact review, not a new correctness audit or reader explain-back.

## Target verification

| Reference location (active file and line) | Exact target | Supporting material verified |
|---|---|---|
| 2-mcopi.tex:350 | A.1–A.3, app: noise properties through app: bounded estimates | A.1 proves zero conditional mean and controlled second moment of combined noise; A.2 supplies fixed-target averaging; A.3 applies lower/upper comparison averages to bound estimates. The inclusive range contains precisely the announced supporting proofs. |
| 2-mcopi.tex:412 | A.2, app: fixed target averages | Fixed deterministic restarts and policy targets converge simultaneously outside one null event; the final paragraph explicitly permits pathwise restart/target choices. This is the claimed constant-target averaging support. |
| results/2-probability-to-improve.tex:121 | A.7, app: martingale bound | Final paragraph explicitly handles random restart times on individual finite-time events. |
| results/2-probability-to-improve.tex:129 | A.7, app: martingale bound | Contains the finite-horizon maximal inequality, conditional indicator argument, predictable stopping, infinite horizon, and history-determined thresholds/variance bounds. |
| results/2-probability-to-improve.tex:166 | A.5, app: one sided return bound | Contains both one-sided return probabilities with the stated delta-squared denominator and explicitly extends the calculation conditionally. |
| results/3-convergence.tex:30 | A.6, app: seed law | Contains the cited lemma (lem:measure), construction of the auxiliary law, preservation of state selection and completed-state laws, and the stated event probability transfer bound. |

All seven subsection targets are unique and attached immediately after their numbered subsection headings: A.1 noise properties, A.2 fixed-target averages, A.3 bounded estimates, A.4 mean-field convergence, A.5 one-sided return bound, A.6 seed law, A.7 martingale bound. `sec: Appendix` now correctly resolves to A. Auxiliary entries supply actual subsection destinations, rather than stale paragraph labels. Printed headings in the clean PDF agree with A and A.1–A.7. No undefined-reference, multiply-defined-label, or duplicate-destination warning appears in the inspected build log.

## Change and dependency effects

The complete diff consists solely of replacing the unnumbered appendix section/paragraph headings with one numbered appendix section and seven numbered subsections, adding five destination labels, and replacing six vague appendix mentions with precise references (one reference is the A.1–A.3 range). Two existing labels are retained and now attach to actual subsection counters. Every inline/display mathematical segment in each supplied file is byte-for-byte identical in an independent extraction comparison, and manual inspection of every diff hunk confirms that all other mathematical prose, formulas, hypotheses, definitions, and proof arguments are unchanged. The words removed alongside reference edits are navigation wording (e.g. “recalled”), with no change to an asserted estimate or argument.

Consequently, this change does not itself invalidate prior mathematical or exposition assessments of the unchanged material. This carry-forward conclusion concerns change impact only: no previous review content/verdict was read or independently re-certified. Actual numbering/render navigation was checked separately. Unseen manuscript files and broad exposition quality are outside this pass.
