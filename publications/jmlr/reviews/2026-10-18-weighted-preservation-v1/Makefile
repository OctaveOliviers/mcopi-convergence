.DEFAULT_GOAL := neurips

LATEX_IMAGE := mcopi-latex:2025
PUBLICATION_DIR = $(CURDIR)/publications/$@
REVIEW_BASE ?= d9a1efc31b838533c20e0e4f6d7058c0d1ca77c1
CLEAN_PUBLICATIONS := neurips jmlr thesis

ifeq ($(REVIEW),1)
CLEAN_PUBLICATIONS := neurips thesis
jmlr: latex-image
	bash scripts/jmlr-review.sh "$(LATEX_IMAGE)" "$(REVIEW_BASE)"
endif

.PHONY: neurips jmlr thesis latex-image

latex-image:
	docker build --platform linux/amd64 --tag $(LATEX_IMAGE) .

neurips: MAIN_TEX := neurips_2026.tex
jmlr: MAIN_TEX := jmlr.tex
thesis: MAIN_TEX := thesis.tex

$(CLEAN_PUBLICATIONS): latex-image
	mkdir -p "$(PUBLICATION_DIR)/build"
	docker run --rm --platform linux/amd64 --network none \
		--user "$$(id -u):$$(id -g)" \
		--mount "type=bind,source=$(PUBLICATION_DIR),target=/work,readonly" \
		--mount "type=bind,source=$(PUBLICATION_DIR)/build,target=/work/build" \
		$(LATEX_IMAGE) -pdf -interaction=nonstopmode -halt-on-error \
		-file-line-error -outdir=build -jobname=$@ $(MAIN_TEX)
