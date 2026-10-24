# Candidate proof: faithful reference

This is reconstructed LaTeX for the title, abstract and Sections 1–3 of
`mces_td_sampled_retry_updated.pdf`, supplied by the user on 2026-09-26. It includes
pages 1–13 and the two closing lines of Section 3 on page 14. Section 4 and the
remainder of the original are excluded.

Open [reference.tex](reference.tex) to edit the source or
[reference.pdf](reference.pdf) to read the compiled reconstruction. The three
section files follow the original structure. The accompanying `jmlr2e.sty` is an
unchanged copy of the repository's JMLR style, making this folder self-contained.

The original PDF contains no embedded TeX source, so the author's exact macros
cannot be recovered uniquely. The aim is faithful text and mathematical notation,
with matching numbering and page boundaries. See [VALIDATION.md](VALIDATION.md)
for the checked versions, comparison results and remaining limitations.

The reference preserves the original assumptions and wording, including eventual
nonincrease of the step sizes and both tie rules. References to Proposition 12,
Sections 4–5, the appendices and author-year citations are kept as printed; their
targets lie outside this excerpt. No bibliography has been invented.

## Build

With Docker running and the repository's `mcopi-latex:2025` image available, run
from the repository root:

```sh
make -C publications/jmlr/tmp/simplified-proof-reference
```

If the image is missing, first run `make latex-image` at the repository root.
Compilation uses the existing TeX Live container without network access. The
command writes intermediates to the ignored `build/` directory and copies the
compiled PDF to `reference.pdf` here. With a local TeX installation instead, run
`latexmk -pdf -outdir=build reference.tex` from this folder.

## Later proof work

Keep this transcription as the comparison baseline. Develop changes in a separate
folder. The user has chosen initial-visit updates and full inertia for the main
presentation. The requested weaker condition on future step-size increases is
recorded in [the working decisions](../../SPEC.md); it has deliberately not been
substituted into this source.

This reconstruction validates transcription fidelity, not the proof's
mathematical correctness. At the transcription stage, the active JMLR manuscript was unchanged; subsequent proof integration is tracked in [the review status](../../STATUS.md).
