# gap-preservation-v1 — independent notation and terminology review

## Assignment and provenance

- Review ID: gap-preservation-v1-notation.
- Date: 2026-10-10.
- Role/reviewer: independent notation checker, `/root/gap_preservation_notation`; exact model and effort are not available in exposed metadata.
- Review type: narrow revision reviewed in assembled manuscript context.
- Assigned result IDs: `lem:barrier`, `thm: fixed prob that bad actions dont become greedy`, and their use in `thm: convergence mcopi uniform`.
- Scope: all text in frozen `active/results/2-probability-to-improve.tex` and `active/results/3-convergence.tex`; final martingale-bound paragraph of `active/z-appendix.tex`; definitions and proofs needed to check their notation and terminology; comparison to restoration-v4 after independent reading of new text.
- Independence: no SPEC, STATUS, raw inputs, writer conversation, prior reader tests, or other review reports were read. New text was read before the prior-version comparison. No manuscript files were edited and no writer workflow was launched.
- Required local sources read: `.agents/agents/notation-checker.md`, `.agents/guidelines/notation.md`, `.agents/guidelines/reviewing-principles.md`, `.agents/skills/write-and-review-paper/review-record.md`.

## Exact version

Frozen snapshot: `publications/jmlr/reviews/2026-10-10-gap-preservation-v1/active/`.
Base commit declared by manifest: `cae73243ee232631cf77a3d2fb3d27d92f8db5c3`.
Manifest SHA-256: `b8081d179d69cf84859c8f7ac6668dd3a49fa770a9582afa63ab7f5a0d200cee`.
All 19 available active-file entries in the manifest matched their SHA-256 digests. The manifest's Makefile and Dockerfile entries are outside the active manuscript; their corresponding files were not present at the snapshot root and were not part of this notation review.

Changed included files:

| File | SHA-256 |
| --- | --- |
| `active/results/2-probability-to-improve.tex` | `09def91e45cac568f5f3960cebbebc57c9fa0a3ba2dbed8d10ca11e91698a28e` |
| `active/results/3-convergence.tex` | `681de8a495aac5123e2bde2a9cd4d056a783f96951076064b8ba0158eb24d59e` |
| `active/z-appendix.tex` | `65ca247b3e657dc99c31d500c26a7e34faab1d88b50760efe694b2fb23563381` |

Context and dependencies read:

| File | SHA-256 |
| --- | --- |
| `active/1-introduction.tex` | `0f2c15322afc0773824fc5086eafd4657af43173b775ae9ca68c0d747dbdedb2` |
| `active/2-mcopi.tex` | `f4ef99e187297a1a0678bf066db81ce6cd523441a31f3e6e31a8f57dbbb39414` |
| `active/3-results.tex` | `240d1f17949d1fe3fcaeca3e127413d934bc2f806c7a48b1e425b67f1887669a` |
| `active/results/1-mean-field.tex` | `091fdf6e952b0a0243922e3f4f10a050bfc23b137fa85aebb390709b54012113` |
| `active/4-discussion.tex` | `4faf53842e138f140eac6513feedb1c9b07ea136708e2e05d056c914f8408d1e` |
| `active/jmlr.tex` | `ec4269faeb70c58fdcd4eb367cd2f6c4b702707a093510edb2159f0b837b8d35` |
| `active/z-maths.tex` | `b4fb529a4ff1a367dbd57500db80924d41310acaa1251bc7fffdc9cec6fcc995` |
| `active/z-packages.tex` | `4e25719e8af691c50e9b2602c96c8e4c6e8a0725722eb65978e8d8b1d3982b6f` |

The semantic definitions checked include finite state-dependent action sets and their abbreviated state-action domain; policy orders; greedy selections and inertia; deterministic learning rates and `c_alpha`; return noise `v_k`, combined noise `w_k`, and `c_v`; histories `F_k` and `F'_k`; the per-action meaning of `sigma_k(s)`; transitions at changes of action-value target; boundedness and fixed-target convergence; and auxiliary-law construction and transfer in the appendix. External cited proofs were not independently re-audited for correctness. Figure content and bibliography metadata were not substantively reviewed; all active TeX files were included in the label/reference and removed-term scans.

Prior comparison versions:

| restoration-v4 file | SHA-256 |
| --- | --- |
| `active/results/2-probability-to-improve.tex` | `30a02cc903233116cd70c188b9851187b100da8ad70ce39cb03fee0491682dab` |
| `active/results/3-convergence.tex` | `aa0332cecdaa359c39fd0978679d03f484e2ba5c75e030b13c413444c2d4b826` |
| `active/z-appendix.tex` | `c62ac2f1f5a52ebc59f6992b6bd1521a070db09c0394d6a050087505d7edf993` |

## Assessment

**Semantic notation and terminology verdict: pass. Rendering verdict: blocked-missing-input, pending supplied frozen PDF/rendered changed pages.** This is not an unconditional assembled-paper rendering pass or a correctness verdict.

The revision presents two construction steps: favorable seeding, followed by an estimate protecting each completed state's positive gaps. The split at first reaching `delta` is now expressly a case distinction within the preservation proof; the statement does not require a gap to reach `delta`. The convergence section then applies this single estimate, chooses `N` before the late start, transfers from the auxiliary law, and repeats policy-level progress opportunities. This meaning is consistent across the revised section, proof headings, convergence paragraph and appendix.

Checked outcomes:

1. **Minimal notation.** The new explanatory structure introduces no new symbols. Removing `c_l` eliminates an alias for the direct expression `16 c_xi`. Existing `c_s` retains its seed meaning; `c_g` now naturally denotes the gap-preservation coefficient. Internal labels such as `lem:barrier` remain stable identifiers and create no printed conceptual requirement.
2. **Constant substitution.** The restoration-v4 definition was exactly `c_l = 16 c_xi`. The substitution is exact in the preservation bound (2-probability-to-improve lines 148), the late-time choice (3-convergence line 28), and the summed crossing estimate (3-convergence line 42). There are no remaining active `c_l` occurrences. The dependencies and uniformity statements of the remaining constants are unchanged.
3. **Definition and scope.** `K`, `r`, `zeta_r`, `t`, reference `pi`, `tau`, the two gaps and gap noise precede their use. `N`, `p_0`, `T_s` and the auxiliary law are introduced where used. The preservation proof defines its local stopping indices, noise sums, state learning accumulation and dyadic index before use; they do not escape the proof. Random start quantities and history-determined thresholds remain expressly tied to `F'` histories.
4. **Time and endpoint meaning.** `tau` is a target change, not every policy change. The unchanged text explicitly allows selected-policy changes with equal target before `tau`. The preservation event protects the endpoint itself, with retained increments ending at the endpoint. `T_s` remains a state-specific stopping time; unfinished, previously completed and endpoint-completed states are distinguished in the application. `rho` is a restart stopping time; the last-visit `ell` is explicitly only a pathwise index. The deterministic restarts and later pathwise choice after countable intersection remain distinct.
5. **Probability laws.** The auxiliary law is introduced explicitly and only biases requested updates at unfinished states. The preservation lemma states its moment assumptions under the law being used; the application identifies that law and why completed-state laws are unchanged. Transfer back to the original law is explicit. Neither eventual containment nor an infinite future time is used as conditioning information in the revised notation.
6. **Terminology and active references.** An active-TeX scan found no missing referenced labels and no duplicate labels. It found no occurrences of the old phrases `three stages`, `growth stage`, `lock-in stage`, `growth and lock-in`, `Growth and lock-in`, or `Combining the three stages`. Remaining `seed stage` wording is consistent with the retained seeding step; general references to the lock-in strategy in the introduction/abstract/discussion describe the established broader method and do not assert a third construction stage.

## Findings and responses

No semantic blockers, convention/readability gate failures, or required notation changes were found. No optional symbol changes are proposed.

## Version and dependency effects

The reviewed revision changes the named organization of the local probability argument and substitutes an existing constant definition into its three uses. It does not change the gap definitions, stopping times, event bounds, law-transfer factor, endpoint conventions, or theorem assumptions/conclusion. This review independently approves the revised semantic notation within the stated scope; it does not carry forward unseen reviews or certify the mathematical proof. Rendering still needs direct inspection of the exact built artifact.

## Rendering follow-up

Pending receipt of frozen PDF and changed-page renders. Record artifact hashes, inspected pages and the rendered-symbol/reference/layout result here before upgrading the rendering verdict.

### Rendering follow-up completed, 2026-10-10

**Final scoped notation/terminology verdict: pass, including rendered changed pages.** No findings were added. This supersedes only the rendering-pending limitation above and does not extend the review into an independent correctness certificate or a global redesign review.

The build appended four output hashes to the manifest; its resulting SHA-256 is `8afcd7a0a5abad413595313ce7c8c0b25a580af20439ed3c32bc86664873ba74`. The previously reviewed active source hashes are unchanged. All available file entries were rechecked with no digest mismatch.

Frozen PDF: `publications/jmlr/reviews/2026-10-10-gap-preservation-v1/jmlr.pdf`, SHA-256 `0a04d412c1467dfb91b32e1aae367814bf84bb923ecdab44f4943b791077cf97`.

I directly inspected supplied final PNGs for every changed page (12–22 and 27), plus page 26 to view the complete final appendix paragraph crossing onto page 27. No clipped or overlapping mathematical expressions, unreadable glyphs, ambiguous grouping, unresolved references, section-heading conflicts, or new layout defects were found. The substitutions render as `16 c_xi` in equations (31), (36), and (37). Gap-preservation headings and both crossing-case headings are readable, and original/auxiliary probability symbols, conditioning histories, time indices and endpoint relations remain visually distinguishable. Definition 12 and the appendix paragraph continue across pages coherently. General-method lock-in wording in the unchanged discussion remains consistent with the revised local construction.

Reviewed render hashes, under `/tmp/mcopi-gap-preservation-20261010/new/`:

| Page | PNG SHA-256 |
| --- | --- |
| 12 | `e6ceded66408d7dae65a70e34dafb8f27aebda2798d36e9c6a390f6924802290` |
| 13 | `187c9de091b360a802b1eae5869033a6f5e68b2f4576632a252feab344ec5391` |
| 14 | `df6350cb5ae64590497b25a2dbba4a67fea67bf86576541781707bcfdf493c3f` |
| 15 | `2993e402954b7d4572b22e9147cdab6825779d844e66dc097fed21bfa5a361b1` |
| 16 | `16d9a0ddc186539224add1ef1700668029129de6e33ad4a492e34f82e8e2fb9c` |
| 17 | `69544e916f2c33b0c0c3a6c6dd7708a4d89883d463a5b035661b3bc7e353e5a2` |
| 18 | `f901d05a113c5efc058e5826d08f65800b30dd0cc653f4cfc66402d66b3fd9a2` |
| 19 | `3108520eca3da5062afc513cff7fb288b8f0e14ff9d718428df8c648f4e18dc4` |
| 20 | `9ad8599d05ba9bd68c9280d1087c1eec3d3f763f3a8b1b6d37a1263756262a86` |
| 21 | `c70c386b734ee52340353fad646b96d571adf85f687d978b9084d8295e64dfb8` |
| 22 | `0e216d37157b6bc2e289a9ecf7c87d4232aedde797dd8f9f38e86451a1e9cb1f` |
| 26 | `091c666d7f99b4c9c2c01fd440711cf938edfff8995dd017f43d40dc30d0cc48` |
| 27 | `b98ce5d0003102a69a35819064e2e5bd36a1febed5b1445ad716ec8af819a767` |

Read-only PDF inspection used the available PDF skill guidance. The source-reference scan was independently checked above. Build warning status and the claim that all other pages are pixel-identical to the baseline were supplied by the writer; I did not independently rerun the full baseline comparison.
