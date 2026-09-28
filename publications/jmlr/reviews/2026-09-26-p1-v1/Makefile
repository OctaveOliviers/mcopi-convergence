LATEX_IMAGE ?= mcopi-latex:2025
.PHONY: draft
draft:
	mkdir -p build
	docker run --rm --platform linux/amd64 --network none --user "$$(id -u):$$(id -g)" --mount "type=bind,source=$(CURDIR),target=/work,readonly" --mount "type=bind,source=$(CURDIR)/build,target=/work/build" $(LATEX_IMAGE) -pdf -interaction=nonstopmode -halt-on-error -file-line-error -outdir=build draft.tex
