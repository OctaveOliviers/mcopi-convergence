# PhD research and publications

The publications are in `publications/thesis/`, `publications/neurips/`, and
`publications/jmlr/`.

## Compile a publication

Requirements: a running Docker engine and Make. LaTeX is installed inside the
container, so no host LaTeX installation is needed.

On this Mac, Docker runs through Colima. Start it when necessary:

```sh
colima start
```

From the repository root, run the command for the publication you want:

```sh
make neurips
make jmlr
make thesis
```

| Command | Output PDF |
| --- | --- |
| `make neurips` | `publications/neurips/build/neurips_2026.pdf` |
| `make jmlr` | `publications/jmlr/build/jmlr.pdf` |
| `make thesis` | `publications/thesis/build/thesis.pdf` |

Each `build/` directory contains compilation logs and other generated files,
and is ignored by Git. `latexmk` runs pdfLaTeX and BibTeX as needed to resolve
references. The thesis's `.latexmkrc` also creates chapter output folders and
runs MakeIndex to generate the notation list. The existing PDF outside the
thesis's `build/` directory is not overwritten.

The first build downloads about 2.6 GB of compressed image layers and requires
additional disk space for the extracted environment. Later builds reuse the
image and existing compilation intermediates. Editing the paper does not
require downloading or reinstalling LaTeX.
Fresh thesis builds can take several minutes because the plots are redrawn
during multiple LaTeX passes.

## Shared compilation environment

`Dockerfile` pins the `texlive/texlive:TL2025-historic` image by its SHA-256
digest. This provides TeX Live 2025, matching the compiler and TeX Live year
declared in both papers' `00README.json` files. It does not guarantee an identical
package snapshot to either paper's original editing environment.

The image is available for Intel/AMD Linux (`linux/amd64`). The build explicitly
selects that platform. Apple Silicon Macs need x86 emulation; the existing
Colima installation supports it. Docker Desktop also supports this platform.
Emulated compilation may be slower than compilation on an Intel/AMD machine.

Collaborators can use Docker Desktop, Docker with Colima, or Docker Engine on
Linux, together with Make. On Windows, run the commands from WSL2 with Docker
integration enabled.

The image contains tools only. The publication source is mounted read-only at
runtime, with a writable `build/` subdirectory. Compilation runs without network
access and uses the invoking user's UID/GID so output files remain user-owned.

All three publications share this image. Both papers retain their existing
`preprint` settings, and the thesis retains its `print` setting. The thesis
template loads `color` before the custom packages and lets `graphicx` detect
the PDF driver, avoiding package-option conflicts.

To rebuild all LaTeX intermediates, remove that publication's generated `build/`
directory and rerun its
build command. To stop Colima when finished, run
`colima stop` (this stops any other containers using that Colima environment).
