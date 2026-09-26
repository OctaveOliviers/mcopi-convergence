---
title: Notation and terminology from Terence Tao
description: Locally extracted notation-design principles and the repository's semantic checks.
source_author: Terence Tao
source_checked: "2026-09-26"
adaptation: Practical summary in our own words, followed by explicitly local implementation rules.
requires_web_access: false
sources:
  - id: notation
    title: Use good notation
    url: https://terrytao.wordpress.com/advice-on-writing-papers/use-good-notation/
---

# Notation and terminology: Terence Tao

The writer and notation checker must apply this local guide when using existing notation or proposing new symbols and terms. No source-site visit is needed. The source metadata records where the extracted principles come from; [reviewing principles](reviewing-principles.md) supplies complementary venue criteria.

## Extracted notation-design principles

**Source: notation.** Make important features conspicuous and secondary parameters unobtrusive. Define shared notation where readers can find it; introduce temporary notation near its use and keep it inside its stated scope. Align with established usage, translating cited results when conventions differ.

Introduce notation when it clarifies an important object or removes a genuine burden. Repeated use can justify a symbol, but a crucial one-use object may also deserve one; coincidental repetition need not imply a shared concept. Avoid distracting cleverness and elaborate names for peripheral constructions.

Use macros where they make a future notation change consistent. Eliminate ambiguity in grouping, fractions and meanings; explain deliberate abuses of notation. Keep local presentation consistent, and occasionally pair a symbol with its meaning so readers can retain the convention without searching backwards.

## Local rules for deciding on a new symbol or term

Before introducing it, establish the job it performs, whether an existing convention suffices, its exact meaning, and the scope in which it will be used. Compare the reader's memory burden with the complexity of the expression being replaced. Frequency is evidence, not a threshold.

Prefer memorable symbols and ordinary established terms. Keep related quantities recognizably related without suggesting false relationships. Apply the same test to event names, abbreviations and technical phrases. Explain the need for new terminology when current terminology is inadequate, as also required by the JMLR-derived criteria.

## Local semantic checks

Define a quantity before use, with its type/domain and scope. A symbol inside a proof stays local unless explicitly promoted into a shared definition or result. A purely rendering macro is not a semantic definition for the reader.

State which parameters a constant may depend on, and which indices, policies or outcomes it must be uniform over. Declare any convention allowing constants to change between lines. Suppress parameters only after their permitted dependencies are clear.

Distinguish deterministic objects, random variables, realizations, events and sigma-algebras. Give material index ranges, stopping-time/endpoint conventions, norms, and componentwise versus other orders. Keep conditioning information precise; changing it can change the claim.

Check for interacting meanings of an overloaded symbol. Inspect printed symbols as well as macro names, including quantities written directly in equations. Preserve distinctions between a set and its elements, a function and its evaluation, and a scalar and a vector.

Avoid confusable glyphs, crowded indices, unnecessary decorations and ambiguous operator scope. A shorter formula can be harder to read. Use grouping and standard operators to make the intended reading evident.

## Local maintenance and review rules

The active manuscript is the semantic authority; its existing macro file defines rendering. When changing a macro, update its purpose/scope comment if needed and the defining prose where readers need the meaning. Do not maintain a second Markdown copy of all macro expansions.

Record significant convention decisions with defining locations, scope and affected results in the paper's status file. This is an index of decisions, not another source of definitions. Local inline notation needs review even without a macro.

Semantic ambiguity and inconsistent dependencies block correctness as well as notation. A harmless convention deviation can be mathematically correct while still requiring a notation fix. The checker states which issue exists and its inspected scope. Review notation during each increment and across the assembled paper.
