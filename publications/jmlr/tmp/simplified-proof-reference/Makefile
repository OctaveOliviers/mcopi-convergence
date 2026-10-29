.DEFAULT_GOAL := reference
LATEX_IMAGE ?= mcopi-latex:2025

.PHONY: reference
reference:
	mkdir -p build
	docker run --rm --platform linux/amd64 --network none \
		--user "$$(id -u):$$(id -g)" --env HOME=/tmp \
		--mount "type=bind,source=$(CURDIR),target=/work,readonly" \
		--mount "type=bind,source=$(CURDIR)/build,target=/work/build" \
		$(LATEX_IMAGE) -pdf -interaction=nonstopmode -halt-on-error \
		-file-line-error -outdir=build reference.tex
	cp build/reference.pdf reference.pdf
