#!/usr/bin/env bash
# Generate a marked copy; never edit manuscript inputs or the clean PDF.
set -euo pipefail

cd "$(dirname "$0")/.."
image=$1
base=$(git rev-parse --verify --end-of-options "${2}^{commit}")
paper="$PWD/publications/jmlr"
mkdir -p "$paper/build"
scratch=$(mktemp -d "$paper/build/review-XXXXXX")
trap 'rm -rf "$scratch"' EXIT

git archive "$base" publications/jmlr > "$scratch/base.tar"
tar -xf "$scratch/base.tar" -C "$scratch"
cp scripts/jmlr-review-preamble.tex "$scratch/preamble.tex"
printf 'Review comparison: %s -> current working manuscript\n' "$base"

docker run --rm --platform linux/amd64 --network none \
  --user "$(id -u):$(id -g)" \
  --mount "type=bind,source=$paper,target=/work,readonly" \
  --mount "type=bind,source=$paper/build,target=/work/build" \
  --entrypoint sh "$image" -eu -c '
    scratch=$1
    latexdiff --encoding=utf8 --flatten --no-del --math-markup=whole \
      --graphics-markup=none --append-safecmd=autoref \
      --preamble="$scratch/preamble.tex" \
      "$scratch/publications/jmlr/jmlr.tex" jmlr.tex \
      > "$scratch/jmlr-review.tex"
    latexmk -pdf -interaction=nonstopmode -halt-on-error -file-line-error \
      -outdir="$scratch" -jobname=jmlr-review "$scratch/jmlr-review.tex"
    # latexmk can stop before changebar positions have settled.
    for pass in 1 2 3; do
      grep -q "Changebar info has changed" "$scratch/jmlr-review.log" || break
      pdflatex -interaction=nonstopmode -halt-on-error -file-line-error \
        -output-directory="$scratch" -jobname=jmlr-review "$scratch/jmlr-review.tex"
    done
    if grep -q "Changebar info has changed" "$scratch/jmlr-review.log"; then
      echo "Review margin bars did not stabilize." >&2
      exit 1
    fi
  ' sh "build/$(basename "$scratch")"

# Publish only a successful build. Keep its log/source for inspection.
for extension in pdf tex log; do
  cp "$scratch/jmlr-review.$extension" "$paper/build/jmlr-review.$extension"
done
printf 'Baseline: %s\nCurrent: working manuscript (including uncommitted edits)\n' \
  "$base" > "$paper/build/jmlr-review-base.txt"
printf 'Review PDF: %s/build/jmlr-review.pdf\n' "$paper"
