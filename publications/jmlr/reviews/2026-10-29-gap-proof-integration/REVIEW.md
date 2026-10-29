# Integration of the clearer gap-preservation proof

The user approved the first-case explanation in chat and explicitly requested its integration, with comparable legibility in the second case. This revision integrates that explanation using permanent equation references, expands the second case around its required noise fluctuation and maximal estimate, and removes the duplicate Appendix A.7. It introduces no new process or constant. The lemma's probability bound, theorem, assumptions and subsequent seed/convergence arguments are unchanged.

## Exact version and boundaries

The retained v1 sources and dependencies are identified by [MANIFEST.sha256](v1/MANIFEST.sha256), based on commit d7bb9f821f1c16cdfd03f80ba7c15a7a68eb05e1. Raw and comment-free active sources are both retained; active excerpts preserve line numbers and empty TeX comments. The originally omitted figure include is retained separately with [its manifest](figure-dependency/MANIFEST.sha256). [BEFORE.sha256](BEFORE.sha256) and before/ record the initial changed-file state. Both output versions are retained under v1 and identified by [ARTIFACTS.sha256](v1/ARTIFACTS.sha256).

The mathematical source change is confined to the proof of lem:barrier, its explanatory endpoint-reference sentence, and removal of the appendix subsection now replaced by the local justification. The manuscript's introduction, setting, definitions, other proofs, discussion, figures and macros are unchanged. Existing unrelated workspace edits were preserved.

## Independent review

- [Local correctness](correctness-v1.md): pass for both cases, random positive starting gaps, conditional moments and Doob, stopping endpoints and infinite horizons.
- [Fresh assembled-chain correctness](assembled-v1.md), followed by [historical-finding reconciliation](assembled-v1-reconciliation.md): pass. The revised lemma composes with seeding, auxiliary-law preservation of completed-state moments, stopped progress, finite/infinite transition handling and containment removal.
- [Notation](notation-v1.md) and [supplement](notation-v1-supplement.md): pass, including visual checks of both PDFs. N-GPI-V1-01 was a missing include in the review snapshot, resolved by supplying the existing figure source; the initial finding is retained.
- [Exposition assessment](exposition-v1.md), with [unassisted account](reader-initial-v1.md) and [follow-up answers](reader-followups-v1.md): pass for both cases and the tested assembled mechanism, without hints or further revisions.

Fresh-context routing: GPT-6 Astra/high for local mathematics and a separate assembled audit; GPT-6.1 Sol/medium for notation/rendering and a separate fresh-reader test. Reviewers received only their role, neutral scope and permitted manuscript dependencies. Writer notes, private expected answers, previous reader accounts and other reports were excluded; historical objections were supplied to the assembled checker only after its initial report was saved. The writer's pre-answer assessment is retained separately. No review verdict is a formal proof certification or a human-readability score.

No blocking mathematical or notation finding remains. The earlier WPC-01 threshold issue is not reintroduced: the maximal thresholds are deterministic, and the random denominators are handled with localization. The earlier nonblocking WA2-C1 experiment-wording finding remains outside scope and is not resolved or newly certified here. Optional reader suggestions about an explicit first-use martingale definition and the elementary integration prerequisite did not cause a reading stop; the approved explanation is retained without added remedial material.

## Validation and delivery

[Validation record](VALIDATION.md): both standard repository builds pass, producing 32-page clean and review PDFs. Proof pages 14–19 and the appendix ending were inspected. All 170 extracted numbered-equation occurrences agree between copies, review bars stabilize, and the review build leaves the clean PDF unchanged. Existing caption/microtype diagnostics and one sub-point overfull line outside the revised proof remain; there are no unresolved references or layout defects in the revised proof. Source comparisons and git diff --check for the active manuscript/specification/status changes pass; exact archived inputs retain their original whitespace.

The existing open PR #4 retains the jmlr label and the same branch. Only this revision's sources, specification/status update and review evidence are intended for the update; pre-existing unrelated working-tree changes and earlier uncommitted review notes are excluded. No further manuscript revision or author approval is required for this authorized integration.
