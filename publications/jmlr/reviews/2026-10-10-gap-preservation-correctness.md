# Correctness review: gap-preservation-v1

**Verdict: pass within the assigned revision scope.** No blocking correctness issue was found in the changed explanatory claims, constant substitution, or their composition through the progress lemma and stochastic convergence theorem. This is an independent source review followed by a comparison with restoration-v4, not a rendering review or a new review of every claim in the paper.

## Assignment and provenance

Review ID: gap-preservation-v1-correctness-initial. Date: 2026-10-10. Reviewer: independent correctness checker `/root/gap_preservation_correctness`; exact model and reasoning-effort identifiers were not exposed to this checker. Review type: narrow revision review with an assembled dependency check.

I first read the new active manuscript's probability-of-improvement and convergence sections and their mathematical dependencies. Only after that inspection did I compare the affected files with `2026-09-28-restoration-v4/active/`. I read the correctness role, local reviewing-principles and notation guides, and the review-record format. I did not read SPEC, STATUS, raw files, prior reports, referee reports, writer notes/conversations, or earlier reader responses. No manuscript was edited.

New version root: `/Users/octaveoliviers/projects/mcopi/publications/jmlr/reviews/2026-10-10-gap-preservation-v1/`; manifest base commit: `cae73243ee232631cf77a3d2fb3d27d92f8db5c3`. All 19 manifest-listed file digests were recomputed and matched. Only the following three active files differ from restoration-v4:

| File relative to `active/` | New SHA-256 | Restoration-v4 SHA-256 |
| --- | --- | --- |
| `results/2-probability-to-improve.tex` | `09def91e45cac568f5f3960cebbebc57c9fa0a3ba2dbed8d10ca11e91698a28e` | `30a02cc903233116cd70c188b9851187b100da8ad70ce39cb03fee0491682dab` |
| `results/3-convergence.tex` | `681de8a495aac5123e2bde2a9cd4d056a783f96951076064b8ba0158eb24d59e` | `aa0332cecdaa359c39fd0978679d03f484e2ba5c75e030b13c413444c2d4b826` |
| `z-appendix.tex` | `65ca247b3e657dc99c31d500c26a7e34faab1d88b50760efe694b2fb23563381` | `c62ac2f1f5a52ebc59f6992b6bd1521a070db09c0394d6a050087505d7edf993` |

The substantive dependency sources inspected are unchanged, with these SHA-256 digests:

| Dependency source | SHA-256 |
| --- | --- |
| `active/1-introduction.tex`, norm convention and proof summary | `0f2c15322afc0773824fc5086eafd4657af43173b775ae9ca68c0d747dbdedb2` |
| `active/2-mcopi.tex`, definitions, assumptions, strict policy improvement, boundedness and constant-target statements | `f4ef99e187297a1a0678bf066db81ce6cd523441a31f3e6e31a8f57dbbb39414` |
| `active/3-results.tex`, assembly and result framing | `240d1f17949d1fe3fcaeca3e127413d934bc2f806c7a48b1e425b67f1887669a` |
| `active/results/1-mean-field.tex` | `091fdf6e952b0a0243922e3f4f10a050bfc23b137fa85aebb390709b54012113` |
| `active/z-maths.tex`, semantic macro checks | `b4fb529a4ff1a367dbd57500db80924d41310acaa1251bc7fffdc9cec6fcc995` |
| `active/jmlr.tex`, abstract and assembly | `ec4269faeb70c58fdcd4eb367cd2f6c4b702707a093510edb2159f0b837b8d35` |

## Claims and hypotheses checked

The gap-preservation lemma concerns a bad pair relative to the reference policy and a finite stopping time `t'` no earlier than the reference time and learning-rate comparison threshold. Its gap must be positive and its time no later than the first target change or bound exit. Under whichever law is used, the gap recursion and its zero conditional mean and variance bound must hold until that endpoint. The conclusion is a conditional upper bound on any finite nonpositive gap through the endpoint, with a first term proportional to `alpha(t') / min(d(t'), delta)` and a square-summable tail term. It does not assert that the gap reaches delta.

The progress lemma fixes a deterministic bound K and supplies deterministic k0 and p > 0, uniform over reference policies, deterministic restarts r, and admissible stopping times t. Success includes exit no later than the next target transition, an infinite interval without exit, or a finite strictly improving transition before exit. The main theorem asserts almost-sure finiteness of target changes and convergence to optimal action values; eventual policy constancy is claimed only under uniqueness of each state's optimal action.

The standing assumptions remain unchanged: finite discounted MDP or properness of every deterministic stationary policy, finite deterministic initialization, deterministic rates in (0,1] with Robbins-Monro sums and the eventual comparison condition, inertial greedy choices, initial-visit updates with uniform conditional return variance, uniform actions within each state, and almost-sure infinite accumulated learning at every pair. No positive lower bound on state-selection probabilities has entered the revised proof.

## Mathematical checks and outcomes

**Gap drift and seeding.** The two possible updates forming a bad gap are disjoint. Centering their signed update gives variance at most `2 (c_v + 4 K^2) sigma_k(s)`, using the sup norm explicitly defined in `1-introduction.tex:118`. The favorable-update alternatives create the claimed margin and retain the reference action under the inertial rule. The learning-rate comparison bounds each earlier seed increment below by the completion-time rate divided by c_alpha. A state completing at the endpoint is covered. The conditional one-sided return bound is valid, including c_v = 0.

**Small-gap crossing case.** In `results/2-probability-to-improve.tex:155-199`, write h = c_alpha alpha(t'). Later rate sizes are bounded by h, and stopped accumulated learning overshoots its threshold by at most h. Before either crossing or reaching delta, the drift is at least 3 delta times the accumulated learning increment. Thus a crossing forces the stated negative martingale excursion. If the starting gap is below h, the first bound is already at least one. Otherwise the initial interval contributes at most `4 c_xi (1 + 1/(3 delta)) h/d`, and summing the dyadic intervals contributes at most `16 c_xi (1 + 1/(3 delta)) h/d`. Their sum is covered by c_g. The argument requires neither a finite waiting-time bound nor eventual attainment of delta.

**Crossing after delta.** In lines 201-216, the mean update maps every gap at least delta to another value at least delta because the drift target is at least 4 delta and the averaging coefficient lies in [0,1]. The pathwise last-visit argument then forces a martingale excursion at least delta/2. This last-visit index need not be a stopping time, because the proof does not condition there. Restarting at the genuine stopping time rho, applying the maximal estimate, and averaging back yields the displayed tail bound. Both cases retain the update immediately preceding the transition/exit endpoint. The appendix's conditional finite-horizon argument supports these uses, including history-dependent thresholds and finite random restart times.

**Auxiliary law and scale substitution.** The finite number of requested factors produces a bounded nonnegative density martingale of mean one. Its terminal density is absolutely continuous with respect to the original law, is bounded by `p_0^(-|S x A| N)`, preserves the selected-state distribution, and leaves the action/return law at completed states unchanged. Future request factors average out conditionally. Consequently, after a state's completion the original gap conditional moments are valid under the auxiliary law even while another state remains unfinished.

For the substitution in `results/3-convergence.tex:32-44`, the eventual condition `N alpha(T_s) <= 2 c_alpha` implies `c_s N alpha(T_s)/c_alpha <= delta`, since c_s = delta/2. The seed lower bound therefore gives exactly `c_alpha alpha(T_s)/min(d(T_s),delta) <= 2 c_alpha^2/(delta N)`. A union bound after conditioning at each separate completion time yields at most 1/2 under the auxiliary law. This bound is uniform for fixed K, MDP, and learning-rate constants. Transferring back supplies the stated positive original-law probability. Neither independence nor simultaneous seed completion is used.

**Composition through convergence.** On the protected event, earlier-completed states have positive bad-action gaps and unfinished or endpoint-completed states retain the reference action. Strict policy improvement therefore applies whenever a finite transition precedes exit. The repeated-interval argument multiplies conditional lower bounds through the tower property and finite transition stopping times; it does not condition at infinite times. At most |P|-1 strict improvements can occur consecutively, giving the geometric continuation bound. The fixed-target appendix provides the bounded-limit-set and eventual-constant-target consequences used afterward. In the declared sup norm, that limit set lies within radius max_pi ||q_pi||, which justifies eventual containment for the chosen larger K. The countable intersection over deterministic restarts correctly precedes the pathwise choice of a restart. Finally, convergence excludes every action having positive optimality gap and establishes the stated policy conclusion.

## Findings and version effects

No definite error, unsupported implication, or semantic ambiguity was found in the assigned changed scope. There are no open correctness findings from this independent review.

The new language accurately describes the proof as seeding followed by one gap-preservation bound with two crossing cases. The large multiple of the learning rate refers to the protected margin at a state's seed completion; the proof does not require the entry margin to be fixed, nor a bound on completion time. The reference to uniformity is valid with K and the standing constants fixed.

The only formula changes replace c_l everywhere it was used by its former exact definition, 16 c_xi. The lemma assumptions and conclusions, the main theorem, the seed and auxiliary-law constructions, and the convergence proof are mathematically unchanged. The appendix changes only the name used to describe the same maximal estimate.

Accordingly, the mathematical content covered by any valid restoration-v4 clearance can carry forward across these edits. That statement is based on direct equivalence and dependency inspection, not on assuming earlier approval. At this initial stage no old review record has been supplied, so I have not certified its coverage or reconciled its individual findings. Any later reconciliation should be appended without replacing this independent assessment.

## Limits

The new PDF was unavailable during this review; rendering and notation presentation are assigned to another checker. I did not independently audit the original external sources behind standard policy-improvement and supermartingale results, novelty comparisons, empirical figures, or the entire discussion. No numerical experiment was needed: the constant estimates and conditional probability operations were checked directly. This pass is evidence of no blocker found within the stated source scope, not a formal proof certificate or blanket approval of all paper claims.

After the independent assessment was written, the writer reported a completed 28-page build and appended four build-artifact digests to the manifest. The PDF digest is `0a04d412c1467dfb91b32e1aae367814bf84bb923ecdab44f4943b791077cf97`. I have not inspected that PDF, and this update does not alter the source-based verdict or extend it to rendering. The 19 digest checks above refer to the source/build-input entries present at the time of the independent audit.

## Reconciliation after the independent review

Date: 2026-10-10. After recording the independent assessment above, I received permission to read only `publications/jmlr/reviews/2026-09-28-restoration-review.md` and `publications/jmlr/reviews/2026-09-28-source-checks.md`. I read both. No other prior report or writer record was consulted. This section preserves the initial report and adds a historical reconciliation; it does not retroactively describe the earlier records as part of the independent first inspection.

The restoration review records full dependency-chain mathematical passes through restoration-v4, with no remaining correctness findings. Its initial substantive correctness finding was COR-R1-01. The later correctness reviews also checked the semantically relevant notation repairs and the v3/v4 changes to the maximal estimate, conditional reweighting introduction, one-sided return bound, and drift explanation. These are the same current dependencies checked independently above.

| Earlier item | Current evidence and disposition |
| --- | --- |
| COR-R1-01, gap domain beyond the stopped interval | `results/2-probability-to-improve.tex:40-46` defines the table difference and noise for every k >= t, while lines 49-62 restrict the applicable recursion and moment bounds to the stopped interval. The hitting-time infima therefore refer to defined quantities. The v2 resolution remains verified in gap-preservation-v1. |
| N-REST-01 and N-REST-03, random boundedness and distance to the limit set | The unchanged `2-mcopi.tex:369-383` states distance convergence and an almost-sure finite supremum, not a deterministic bound on all runs. The fixed-target comparison proof in `z-appendix.tex:65-109` supports those conclusions. The convergence proof's fixed-K eventual containment uses the limit box and the stated sup norm. Their mathematical resolutions remain valid. |
| N-REST-02, restarted transition sequence and infinite endpoint | The unchanged definition at `2-mcopi.tex:391-400` permits a deterministic starting r and states the block as integer times t_n <= k < t_(n+1), including an infinite endpoint. The current convergence proof invokes precisely that version. Its deterministic-restart countable intersection is valid. The mathematical resolution remains valid. |
| N-REST-04, norm convention | The introductory sup norm and the unsubscripted uses remain unchanged. The coordinate bound and eventual containment steps checked above use exactly this norm. The mathematical resolution remains valid. |
| N-REST-05, N-REST-06, and N-REST-07 | The distinguishing domains of v_pi(s) and v_k(s,a), explicit updated-pair qualification, and locally declared deterministic restart r remain unchanged. I found no semantic ambiguity affecting the current argument. This preserves their recorded mathematical dispositions; an independent current notation verdict remains the notation checker's responsibility. |
| Restoration-v3 maximal-event and reweighting changes | The current proof stops using accumulated learning, has the same overshoot bound and strict clock bands, and averages future density factors out. I checked these points before seeing the record. Renaming the two crossing cases and the combined bound does not alter those verified steps. |
| Restoration-v4 one-sided bound and explicit drift explanation | Both are unchanged in the new source. My independent checks include the c_v = 0 case, weak one-sided events, conditional action factor, and 3 delta drift bound through the endpoint. Their clearance remains valid. |

The source-check record independently documents the proper-policy geometric-tail result and the exact supermartingale theorem used for fixed-target averages, including their scope for adaptive sampling. It also distinguishes the episodic return argument from Tsitsiklis's discounted variance statement. This supports carrying forward the existing dependency-source clearance because the cited assumptions, application, bibliography, and supporting proof are unchanged. I did not reopen the external documents. The present review's direct evidence is the current application of those stated dependency contracts plus the previously recorded source verification, not a new external-source audit.

The earlier methodology-source note also does not supply a hidden convergence theorem: the current manuscript proves the gap and convergence estimates directly. Its new language makes no additional mathematical claim about the cited external works. I have not expanded the prior novelty or source-comparison scope.

**Final correctness and carry-forward decision: pass.** Restoration-v4's recorded full-chain mathematical clearance carries forward to the exact frozen gap-preservation-v1 active sources identified above. This decision rests on byte equality of all other active inputs, exact substitution of the removed constant, independent verification of the revised explanatory claims and affected chain, and current verification that the earlier findings stay resolved. No correctness finding is reopened and no new one is added.

The inherited limits remain: no validation of empirical averages, exhaustive novelty review, or formal certification is implied. This decision also supplies no exposition or PDF-rendering approval. The report's initial source-based review and this subsequent reconciliation are distinct evidence stages.

## Reader-raised constant question

Date: 2026-10-10. Finding ID: COR-GP-01. Category: suspected missing justification, assessed as nonblocking and dismissed after direct source verification. Reviewed file: `active/results/3-convergence.tex`, SHA-256 rechecked as `681de8a495aac5123e2bde2a9cd4d056a783f96951076064b8ba0158eb24d59e`. I received the objection through the writer and did not contact the reader.

The reader's exact objection was: “at results/3-convergence.tex:23–36, it needs c_s N alpha_{T_s}/c_alpha <= delta, equivalently N alpha_{T_s} <= 2 c_alpha, but says the manuscript chooses only N alpha_t <= 2 c_alpha; using comparison to pass from t to T_s gives N alpha_{T_s} <= 2 c_alpha^2. It proposes N alpha_t <= 2 instead.”

**Disposition: the objection misses the explicit universal late-time quantifier; there is no constant gap.** Line 23 reads: “Then choose a deterministic k_0 >= k_alpha so that, for every t >= k_0,” followed by `N alpha_t <= 2 c_alpha` at line 26. Thus the chosen threshold gives that bound at every later integer index, not only at the particular restart. Since the rates are deterministic and converge to zero, such a deterministic threshold exists, as line 30 states.

On the finite-completion event used at line 32, the seed definition gives `T_s >= t`, and the progress lemma requires `t >= k_0` at line 6. The universal bound can therefore be evaluated directly at the realized index T_s, giving `N alpha(T_s) <= 2 c_alpha`. The randomness of T_s causes no issue: for every outcome with finite T_s, its integer value is one of the indices already covered by the deterministic bound. The learning-rate comparison condition is not used in this inference, so no additional c_alpha factor occurs.

Explicitly, with c_s = delta/2, let `m = c_s N alpha(T_s)/c_alpha`. The direct late-time bound gives m <= delta. The seed inequality at `results/2-probability-to-improve.tex:112` gives d(T_s) >= min(delta,m) = m. Hence min(d(T_s),delta) >= m, and the ratio in `results/3-convergence.tex:34` is at most `c_alpha alpha(T_s)/m = c_alpha^2/(c_s N) = 2 c_alpha^2/(delta N)`, exactly as printed.

The proposed stronger choice `N alpha_t <= 2` would also be possible sufficiently late, but is unnecessary. No manuscript correction is required for correctness, and the pass and carry-forward decision remain unchanged. This disposition does not decide whether the independent reader test warrants an exposition adjustment.
