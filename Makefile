.DEFAULT_GOAL := neurips

LATEX_IMAGE := mcopi-latex:2025
PUBLICATION_DIR = $(CURDIR)/publications/$@

.PHONY: neurips jmlr thesis latex-image

latex-image:
	docker build --platform linux/amd64 --tag $(LATEX_IMAGE) .

neurips: MAIN_TEX := neurips_2026.tex
jmlr: MAIN_TEX := jmlr.tex
thesis: MAIN_TEX := thesis.tex

neurips jmlr thesis: latex-image
	mkdir -p "$(PUBLICATION_DIR)/build"
	docker run --rm --platform linux/amd64 --network none \
		--user "$$(id -u):$$(id -g)" \
		--mount "type=bind,source=$(PUBLICATION_DIR),target=/work,readonly" \
		--mount "type=bind,source=$(PUBLICATION_DIR)/build,target=/work/build" \
		$(LATEX_IMAGE) -pdf -interaction=nonstopmode -halt-on-error \
		-file-line-error -outdir=build $(MAIN_TEX)
