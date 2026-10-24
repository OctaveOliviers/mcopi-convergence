# Appendix navigation update, 2026-10-24

The user requested precise appendix references while keeping the proof unchanged. The four source files in MANIFEST.sha256 are the exact reviewed inputs. The active tree omits manuscript comments; the raw tree matches the live source byte for byte. The before tree records the preceding active text at base HEAD 067ac4022a5f9605bd66d906e72831b21acfef5a.

## Change and review

Numbered the existing appendix headings A.1–A.7 and replaced six vague references with their exact subsection targets. No mathematical statements, assumptions, formulas, proof arguments or ordering changed. The fresh notation/navigation checker passed the full change and verified every destination; see notation-check.md. Parent deployment metadata: GPT-6.1 Sol, medium, no writer conversation history. This scoped check carries forward prior mathematical and exposition assessments only for the unchanged content; it is not a new mathematical audit.

## Build and visual verification

Both `make jmlr` and `make jmlr REVIEW=1` completed successfully with 28 pages. Their final TeX passes are retained in build-final.log and review-build-final.log. Final passes contain no undefined references or citations; review bars stabilized. The inherited caption warning remains, and the review build retains its microtype warning and 0.18776pt overfull box outside this edit.

The clean and review PDFs show A.7 on pages 26–27. The review proof on page 15 now links twice to A.7, seeding on page 16 links to A.5, and composition on page 18 links to A.6. Extracted text contains no unresolved `??` markers. Rendered review pages 15, 26 and 27 and clean pages 26 and 27 were visually inspected: headings, references, equations and margin bars are legible. ARTIFACTS.sha256 identifies both generated PDFs, retained final-pass logs and checker report. Generated PDFs remain in the usual build directory.

## Disposition

No open finding for this navigation-only change. The mathematical proof is unchanged; the requested explanation continues as a step-by-step dialogue.
