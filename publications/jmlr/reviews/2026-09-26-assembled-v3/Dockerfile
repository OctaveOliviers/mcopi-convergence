# TeX Live 2025 historic snapshot, pinned to an immutable image digest.
# This image is published for linux/amd64; the Makefile selects that platform.
FROM texlive/texlive:TL2025-historic@sha256:f25ee2dcd00f58198f918064f4a1c8562410b33e84155bd55b02b419d73d9391

ENV HOME=/tmp
WORKDIR /work
ENTRYPOINT ["latexmk"]
