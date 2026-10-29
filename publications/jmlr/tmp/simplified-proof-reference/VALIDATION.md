# Transcription validation

Validated on 2026-09-26. **Pass for transcription fidelity.** This is not a
mathematical correctness verdict.

## Scope and provenance

Source: `/Users/octaveoliviers/Downloads/mces_td_sampled_retry_updated.pdf`,
SHA-256 `b3e27a4ae8c78d3fa4ac6797abbca2ffacc420c96e9142f0223922b76e6cf500`.
The reconstruction contains the title, abstract and Sections 1–3: pages 1–13
plus the two closing proof lines on page 14. It ends before Section 4.

The original has no embedded TeX. These editable sources reconstruct the printed
content; they do not claim to recover the author's exact macros.

## Checks and results

- The documented `make` command compiled the actual TeX to a 14-page letter-size
  PDF. The final log has no warnings, undefined references, missing characters,
  or overfull/underfull boxes. The delivered PDF equals `build/reference.pdf`.
- Poppler raw-text extraction matches the source exactly after removing whitespace
  and joining the line-break hyphenation in “Equivalently”: **27,740 characters on
  each side**. No mathematical numeral or symbol was deleted or substituted by
  this normalization. Source material after Section 3 and the reconstruction's
  final page-number footer were excluded symmetrically from the scope comparison.
- All 27 numbered equations, 11 numbered statements and unnumbered displays were
  checked against the original, including indices, inequalities, conditioning,
  stopping endpoints, and calligraphic/blackboard-bold notation.
- The writer compared rendered pages 1–14 against the original and rechecked the
  affected pages after corrections. Every in-scope page ending matches. The final
  render has no clipping, collisions or misplaced proof squares.
- An independent checker reviewed the full transcription and verified the final
  corrections. Its whole-scope font-category comparison found no differing
  characters. The [review record](../../reviews/2026-09-26-reference-fidelity.md)
  retains the initial findings and their independently verified resolution.

The three independent findings were the original italics on “learning weight”
and “after”, and the upright subscript in the four occurrences of
\(k_{\mathrm m}\). All were corrected and rechecked. The writer also restored
theorem/proof styling, paragraph indentation, display alignment and spacing.

## Exact final version

Repository base: `63d4d97e6d2ffba4d605f7e4419ca79ce031c6ea`.
Branch: `feature/simplify-jmlr-proof`. Sources are uncommitted.

| File | SHA-256 |
| --- | --- |
| `reference.tex` | `967fce047e846f898a169f4d463da86482a19a21211c39779220bcd2ceb846ff` |
| `01-introduction.tex` | `51d55839b8fe1ea5483e4498b32441d9a431bd842950d84f164273cf0675724f` |
| `02-preliminaries.tex` | `81d0b1c7d808d7c78732a0d942108aea8435a67185f6522e0ef1e564f4e8bd85` |
| `03-results.tex` | `682ef257decb6b03a994d10dc05e8fbe7965064fbc9c39a015aeabc11e2861a4` |
| `jmlr2e.sty` | `a430a875d561235951800e4e21d2631e18ddf0b369646ec276f43ea5080f27c3` |
| `reference.pdf` | `4a3e2ae1ebce5b96dfb9148f3e575a2e2ee0ae1c98b22a20ca986280a66cdb9c` |

The initial reviewed source is retained in
[initial-source.tar.gz](../../reviews/2026-09-26-reference-fidelity/initial-source.tar.gz).
Its hashes are in the review record, so the initial findings remain reproducible.

Build: `mcopi-latex:2025`, image ID
`sha256:9bb9d627220979e4774efd4c43853c188fad4e59ae844fa850d36f0b1f139f57`,
pdfTeX 1.40.28 (TeX Live 2025), latexmk 4.87, network disabled.
One intermediate container run crashed before reading the TeX; the retry and
final documented build succeeded. PDF timestamps can change the binary hash on
recompilation without changing its rendered content.

## Limits

Small whitespace and line-layout differences remain; pixel identity is not
claimed. The content, notation, numbering and page boundaries were checked.
Printed citations and references to excluded sections remain literal references,
without a reconstructed bibliography. The original assumptions and possible
mathematical issues are preserved. Proof correctness, the proposed weaker
step-size condition, and integration into the main manuscript are separate work.
