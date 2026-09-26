---
title: Proof writing and exposition from Terence Tao
description: Locally extracted guidance for structuring, explaining and simplifying mathematical papers.
source_author: Terence Tao
source_checked: "2026-09-26"
adaptation: Practical summaries in our own words; project-specific applications are marked separately.
requires_web_access: false
sources:
  - id: approach
    title: On writing
    url: https://terrytao.wordpress.com/advice-on-writing-papers/
  - id: organisation
    title: Organise the paper
    url: https://terrytao.wordpress.com/advice-on-writing-papers/organise-the-paper/
  - id: motivation
    title: Motivate the paper
    url: https://terrytao.wordpress.com/advice-on-writing-papers/motivate-the-paper/
  - id: lemmas
    title: Create lemmas
    url: https://terrytao.wordpress.com/advice-on-writing-papers/create-lemmas/
  - id: detail
    title: Give appropriate amounts of detail
    url: https://terrytao.wordpress.com/advice-on-writing-papers/give-appropriate-amounts-of-detail/
  - id: language
    title: Take advantage of the English language
    url: https://terrytao.wordpress.com/advice-on-writing-papers/take-advantage-of-the-english-language/
  - id: prototype
    title: Write a rapid prototype first
    url: https://terrytao.wordpress.com/advice-on-writing-papers/write-a-rapid-prototype-first/
  - id: accuracy
    title: Describe the results accurately
    url: https://terrytao.wordpress.com/advice-on-writing-papers/describe-the-results-accurately/
  - id: compression
    title: Don't overoptimise
    url: https://terrytao.wordpress.com/advice-on-writing-papers/dont-overoptimise/
  - id: reading
    title: On compilation errors in mathematical reading, and how to resolve them
    url: https://terrytao.wordpress.com/advice-on-writing-papers/on-compilation-errors-in-mathematical-reading-and-how-to-resolve-them/
---

# Proof writing and exposition: Terence Tao

Terence Tao is the reference for the clarity, economy and structure of the exposition. The writer and exposition checker must read and apply this local guide, together with [notation](notation.md). The relevant principles are extracted below; the source URLs above are attribution, not required reading during routine work. Use [reviewing principles](reviewing-principles.md) for the separate venue-derived review criteria.

## Adapt the method to the reader

**Source: approach.** Choose writing practices for the subject, audience and purpose. A famous author's habits are not universal rules. Aim to communicate the argument, with enough explanation for the intended reader and enough precision to verify it.

**Project application.** Minimize the effort needed to understand a rigorous proof. Preserve the agreed undergraduate accessibility ambition and its concrete prerequisites. “Write like Tao” means applying the structural and explanatory practices below; it does not mean claiming comparable mathematical achievement or imitating his phrasing.

## Organize around the argument's milestones

**Source: organisation.** Present the logical structure rather than the chronology of discovery. Announce major results early enough that readers know what the technical work is for. Group connected facts; begin a new section when the argument changes direction. Keep a lemma close to its use when practical. Put peripheral observations in remarks or discussion, and consider an appendix for necessary but distracting technical work. A dependency diagram can reveal the right grouping.

**Project application.** The order of verification and the order of exposition can differ: check supporting lemmas first, while stating the main theorem and proof plan early in the paper. Moving a proof to an appendix does not remove its assumptions or its review requirements.

## Explain the purpose of each construction

**Source: motivation.** Let readers see the current objective, its connection to the main result and why the proposed step is plausible or surprising. At the start of a substantial section, state its intended contribution and, when helpful, the route to it. A simple special case can reveal an idea before the general technical version. Keep heuristic explanations visibly distinct from rigorous deductions.

**Project application.** Before introducing a gap, event, threshold or auxiliary process, explain what obstacle it addresses when that purpose is not evident. Show how the resulting estimate will be used. Add a toy case when it removes a real conceptual difficulty; do not force one into an already transparent proof.

## Make lemma statements useful to their callers

**Source: lemmas.** Package a useful intermediate conclusion as a lemma so readers can retain that conclusion and forget temporary calculations and symbols inside its proof. State hypotheses that are natural to verify and conclusions that later arguments can readily use. Recap relevant assumptions where necessary. If two technical lemmas only serve each other, combining them may hide an otherwise needless intermediate condition. Separate genuinely reusable conclusions from incidental proof machinery.

**Project application.** Keep reusable claims and their hypotheses explicit. Do not make later proofs rely on an unstated observation or a symbol local to another proof. Split or combine lemmas to reduce what the reader must remember, not to meet a prescribed lemma count.

## Allocate detail to the unfamiliar inference

**Source: detail.** Explain important, unfamiliar or innovative steps more fully than standard calculations. What is obvious after months of work may be unfamiliar to the audience. A standard proof need not be reproduced merely because the author recently learned it. For an obscure cited lemma, give its statement and precise reference; a central dependency may also deserve a sketch and an explanation of its significance.

**Project application.** Judge “routine” against the agreed prerequisite profile. Identify the difficult inference and explain what makes it valid. “By standard arguments” cannot stand in for the central obstacle. Each omitted calculation should leave a clearly bounded verification task rather than several interacting gaps. Keep complete verification details in the review record when the manuscript can legitimately be shorter.

## Use prose to reveal logical relationships

**Source: language.** Ordinary words can communicate purpose, emphasis and relationships that a string of formulas leaves implicit. Choose connectors accurately: consequence, equivalence, analogy and an additional fact are different relationships. Plain language can retain full mathematical precision. Keep a standard computation compact when extra prose would interrupt it; avoid ornate vocabulary that resembles unexplained technical terminology.

**Project application.** Say what an inequality establishes and why the next step follows. Integrate equations into grammatical sentences. Check whether “therefore”, “equivalently” and “similarly” accurately describe the relationship being asserted.

## Test the structure before polishing details

**Source: prototype.** Sketch the key definitions and results first, refine their statements, and then check the important connections before spending time on routine details. Defer minor decisions that may change as the structure develops. Capture a useful side idea briefly without abandoning the current line of work. A known, simple structure may need less preliminary planning.

**Project application.** A private outline may contain explicit unresolved questions. A manuscript submitted to a checker as complete must contain the actual claims, definitions and proof. An informal outline is not an approved dependency. This drafting technique complements the agreed incremental review order; it does not bypass it.

## Describe exactly what has been established

**Source: accuracy.** State the contribution and its limitations candidly. Explain a claimed advance through concrete comparisons rather than inflated adjectives. Distinguish proved results from unproved observations or open questions. Give sections descriptive titles that reveal their purpose.

**Project application.** Do not strengthen a conclusion in a summary, silently suppress an assumption, or use a reassuring explanation to hide a gap. A nonessential unproved remark must be labelled; a claim required by the main proof needs proof or an applicable citation.

## Compress without making the reader reconstruct the proof

**Source: compression.** Optimizing length, constants or generality can damage readability and usefulness. Do not remove motivation, examples or explanatory prose solely to shorten the paper. Generalizing a lemma can add distracting work; narrowing it too far can destroy a useful reusable result. Judge improvements by their benefit to this argument and its readers.

**Project application.** First consider better ordering, a better lemma boundary or simpler notation; then delete repetition and add only missing explanations. Do not impose a word-count target or compulsory cuts. Stop polishing when further changes have no concrete benefit. Recheck any edit that can affect the mathematical argument.

## Diagnose where a reader loses the thread

**Source: reading.** A reading stop can come from a typo, unfamiliar notation, an unexplained step or misunderstanding a sentence's purpose. Reading ahead to a conclusion or application can clarify it. Studying a simpler case can separate conceptual and technical difficulties. Reconstruct the logical connections instead of treating each line as an isolated statement.

**Project application.** The exposition checker records the location, attempted interpretation, and whether later manuscript text resolved the difficulty. Distinguish a missing prerequisite from a missing explanation. The Socratic protocol tests understanding; these reading strategies do not permit reading an author answer key or counting coached answers as independent comprehension.

## Local failure patterns and exemplars

The following are project diagnostics, not quotations or absolute prohibitions from Tao: redundant roadmaps, one-use jargon, unnecessary symbols, repeated theorem statements, habitual “note that” or “crucially”, routine algebra explained at length while a hard step is skipped, and calling an unsupported inference “immediate”. Retain wording when it serves a specific purpose.

No passages have yet been designated by the user as house exemplars. When one is selected, record its source and the property to reuse, such as a clear explanation of the mechanism. The concrete principles above apply now; they do not depend on obtaining an exemplar or browsing a website.
