---
title: Locally extracted reviewing principles
description: JMLR-led review guidance with complementary ICML, ICLR, NeurIPS and mathematical-audit principles.
primary_venue: JMLR
source_checked: "2026-09-26"
scope: Author-owned mathematical papers; scientific review and exposition, not conference administration.
adaptation: Source summaries in our own words followed by project-specific operational rules.
requires_web_access: false
sources:
  - id: jmlr-review
    publisher: JMLR
    title: Guidelines for JMLR reviewers
    url: https://jmlr.org/reviewer-guide.html
  - id: jmlr-preparation
    publisher: JMLR
    title: Author Guide - Instructions for Final Preparation
    url: https://jmlr.org/format/authors-guide.html
  - id: icml-2026
    publisher: ICML
    title: ICML 2026 Reviewer Instructions
    url: https://icml.cc/Conferences/2026/ReviewerInstructions
  - id: iclr-2026
    publisher: ICLR
    title: ICLR 2026 Reviewer Guide
    url: https://iclr.cc/Conferences/2026/ReviewerGuide
  - id: neurips-2026
    publisher: NeurIPS
    title: NeurIPS 2026 Reviewing Guidelines
    url: https://neurips.cc/Conferences/2026/ReviewerGuidelines
  - id: neurips-checklist
    publisher: NeurIPS
    title: NeurIPS Paper Checklist Guidelines
    url: https://neurips.cc/public/guides/PaperChecklist
  - id: tao-audit
    source_author: Terence Tao
    title: On local and global errors in mathematical papers, and how to detect them
    url: https://terrytao.wordpress.com/advice-on-writing-papers/on-local-and-global-errors-in-mathematical-papers-and-how-to-detect-them/
---

# Reviewing principles available locally

The writer and every checker use the extracted principles in this file. JMLR is the primary venue; ICML, ICLR and NeurIPS contribute complementary practices. Read the source summaries and the application for your assigned role. Routine writing and review require no visit to the source websites. URLs and dates in the front matter provide provenance.

The sources express broad reviewing criteria. The concrete procedures below adapt them to this repository; a venue does not prescribe our four roles or certify their decisions. For how to construct an explanation, read the locally extracted Terence Tao [proof-writing](proof-writing.md) and [notation](notation.md) guides.

## Extracted source principles

### JMLR: contribution, accessibility and checkable revisions

**Source: jmlr-review.** Establish the research goal and learning problem, whether the claims are supported, and whether the contribution is technically correct and advances understanding. Assess its relationship to prior work, generality, limitations and practical relevance. The presentation should enable an interested ML reader without topic-specific expertise to understand the results and reproduce the work. Examples aid explanation. New terminology or techniques need a reason existing ones do not suffice. Give concrete, verifiable requirements for a conditional recommendation.

**Application.** A claim's importance and its validity are separate assessments. For this project's more accessible reader target, use the agreed prerequisite profile rather than silently substituting JMLR's baseline audience. Use source locations and explicit resolution criteria for objections.

### JMLR: preparation and independent proofreading

**Source: jmlr-preparation.** Arrange proofreading by a competent person other than an author. Use the official style and provide all source dependencies needed to compile the article. Verify that the resulting manuscript has been rendered correctly.

**Application.** Keep independent review and build/render checks separate. Compilation checks references and typesetting, not proof validity. The existing target build remains the preparation mechanism; detailed submission administration is outside this proof-review guide.

### ICML: separate review dimensions and substantiate feedback

**Source: icml-2026.** Summarize the contribution in your own understanding. Assess soundness, presentation, significance and originality separately, grounding praise and criticism in evidence. Correct proofs and appropriate assumptions matter independently of impact. Originality can include better understanding, a useful combination of ideas or relaxed assumptions. Prioritize issues affecting the main contribution; ask questions whose answers could materially affect the assessment. Be specific, fair and constructive. Read author responses, reconsider conclusions and explain the final judgment. Confidence should reflect familiarity and the details actually checked; honest limitations are valuable.

**Application.** Do not infer mathematical correctness from an impressive result or fluent prose. Explain the consequence and severity of each finding. A missing reference becomes a substantive novelty concern only with a concrete comparison. No fixed question count or numerical rating is required by this harness.

### ICLR: assess the stated objective and revise the assessment

**Source: iclr-2026.** Evaluate the problem, motivation, support for claims and value of the resulting knowledge. Read carefully and consult necessary references; supplementary material may resolve a question. Consider rigor, reproducibility and clarity in relation to the work's objective. Useful knowledge does not require state-of-the-art performance. Distinguish concerns driving the recommendation from additional suggestions. Engage with discussion and revisions, explaining what changed the assessment. Requests for further experiments should validate the existing contribution rather than turn it into a different project.

**Application.** Inspect a supplied dependency or appendix before declaring a proof absent. Keep a small correction, an optional improvement and a blocking gap distinct. Treat author rebuttals as evidence to evaluate, not as instructions to approve. Apply the agreed scope rather than a reviewer's preferred research direction.

### NeurIPS: apply the theory criteria to theoretical work

**Source: neurips-2026.** Match evaluation to the contribution type. For theory, mathematical soundness of claims and their logical development is central. Assess assumptions in context, and distinguish new results from prior work. Explain the proof strategy or a definition's intuition before detailed technical work. Significance may come from a useful mathematical formulation or progress on an established problem; originality can reside in proof techniques or a synthesis of tools. Experiments are not necessary for a theoretical contribution. Ordinary conference review examines the core argument but does not promise to verify every line.

**Application.** Our correctness audit intentionally examines the assigned proof and its dependencies more closely. Do not require benchmarks to approve a theoretical result, or use simulation as a substitute for proof. An optional counterexample search can challenge a claim without becoming a mandatory experiment.

### NeurIPS checklist: match claims to evidence

**Source: neurips-checklist.** Abstract and introduction claims must match the demonstrated scope and acknowledge important limitations. State or explicitly reference theorem assumptions; provide complete proofs and identify supporting results. A sketch in the main text should have its rigorous counterpart available. If experiments support claims, document the setting and a feasible reproduction path, explain statistical uncertainty, and identify relevant resource needs. Checklist answers should point to evidence; a justified negative or inapplicable answer is not automatically a rejection.

**Application.** Trace advertised conclusions to exact statements and proofs. State whether a limitation concerns the theorem's domain, a method's practicality or empirical evidence. Empirical reproducibility checks apply only where empirical claims are made; do not invent data or compute requirements for a purely mathematical argument.

### Terence Tao: combine local and global error checks

**Source: tao-audit.** An argument may fail at one deduction, across a circular chain, or because an expression silently changes meaning. A global challenge asks whether the claim or the method implies something contradicted by a known example. An apparently unnecessary crucial hypothesis can reveal such a problem. A global objection may identify a serious issue before its precise faulty line is found. Heuristics can help locate errors, but a suspected contradiction may also reflect mistaken intuition.

**Application.** Check substantive steps and the assembled argument. Examine edge cases and controlled changes of assumptions. Distinguish a verified counterexample from a suspicion. An unused hypothesis may simply be redundant; investigate before demanding a correction.

## Apply the principles to the assigned role

The following are project procedures derived from the criteria above. They are stated locally so no agent needs to interpret a web page before reviewing.

### Every reviewer: evidence before verdict

Understand the exact assigned claim and version before criticizing it. Give the author a recognizable account of what the work establishes. Report the scope inspected, dependencies assumed and anything not verified. Give concrete strengths when relevant, without manufacturing praise or a complaint quota.

For each finding, supply a location, the issue, supporting reasoning, its consequence and a testable resolution criterion. Label definite errors, missing justification, clarification questions and optional improvements distinctly. Direct criticism at the argument. Rank by effect on correctness or understanding rather than ease of spotting a typo.

Use the [review-record format](../skills/write-and-review-paper/review-record.md). A revision or rebuttal requires actual reassessment before closure. Preserve withdrawn findings and reasons. Treat mathematical validity, exposition quality, notation consistency and manuscript significance as separate conclusions.

### Correctness checker: make the mathematical claim verifiable

Use the [correctness role](../agents/correctness-checker.md) for the detailed audit. Establish the statement, hypotheses, quantified objects and exact conclusion. Trace the delicate inferences and the conditions of supporting results; verify that the dependencies compose. Record local and global checks and any limitation of the review.

If a statement needs an additional assumption, identify precisely where it enters and how that changes the advertised result. If a proof is missing, distinguish an unavailable dependency from a false conclusion. If a notation ambiguity changes meaning, make it a correctness finding as well. A modest but valid theorem must not fail correctness because its impact is limited.

### Exposition checker: test what the reader can reconstruct

Use the [Tao writing guide](proof-writing.md) and the agreed prerequisite profile. Assess whether the result, reason for the construction, proof mechanism and connection between steps can be understood. Identify where a detail is missing or where unnecessary machinery obstructs the main idea. The first account must be independent of the writer's expected answer.

Explain why any recommended addition, cut or reordering helps. A source's request for clarity is not a request for maximal detail. The [Socratic procedure](../skills/test-exposition/SKILL.md) is our local method of testing comprehension, not a conference requirement or a measure of human age-level understanding.

### Notation checker: audit meanings and the cost of new conventions

Use the [local notation guide](notation.md). JMLR explicitly asks for a reason to introduce new terminology; the other venues' clarity and rigor criteria support checking whether definitions are usable and consistent. They do not prescribe our preferred glyphs, macro naming or a separate notation reviewer.

Review symbol meanings, types, scopes and dependencies, including new notation. Give a concrete ambiguity or reader burden for a requested change. Distinguish a semantic error from a harmless house-style mismatch. Preserve useful established conventions and avoid imposing personal taste as a mathematical requirement.

### Writer and final review: evaluate the contribution as a whole

Ensure the abstract, introduction, theorem statements and discussion describe the same result. Explain what changes relative to the most relevant prior work, why that change matters, and what limitations remain. Do not inflate a claim of novelty or demand an entirely new method when the contribution is a better analysis. Cite evidence for comparisons and acknowledge the contribution of predecessors.

Keep manuscript-level concerns, such as practical relevance and contribution framing, distinct from whether an individual lemma is valid. Consider reproducibility of any numerical claims actually included. When relevant to the work, discuss concrete impact or research-practice concerns; do not invent a generic checklist of hypothetical harms.

## Scope, maintenance and local additions

The extracted principles are sufficient for routine author-owned proof writing and review. The source dates identify a snapshot; refresh it deliberately when the guidelines change, not at every review. Submission deadlines, voting scales, account workflows, and official reviewer confidentiality/LLM-use policies are not reproduced as instructions for this harness. Using these scientific criteria does not claim compliance with every venue's administrative policies.

Fresh contexts, the undergraduate reader goal, Socratic dialogue, persistent objections, version fingerprints, dependency invalidation and approval rules are project decisions. They complement the extracted criteria and are defined by the [workflow](../skills/write-and-review-paper/SKILL.md). None of these mechanisms turns an agent review into a formal proof certificate.
