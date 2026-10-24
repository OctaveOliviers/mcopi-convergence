# Preservation-first revision: correctness review

**Verdict: pass within the assigned revision scope.** The reordered proof establishes the same gap-preservation estimate, seed margin, conditional progress bound and stochastic convergence conclusion as the prior active manuscript. No blocking or nonblocking correctness finding was identified. This is an independent revision audit, not a new source, novelty, experiment or whole-paper submission review.

## Assignment and provenance

- Review ID: `2026-10-12-preservation-first-correctness`.
- Role: independent correctness checker, `/root/preservation_first_correctness`.
- Date: 2026-10-12. Runtime model and reasoning effort were not exposed to this checker in the assignment.
- Reviewed result labels: `lem:barrier`, `lem:seeds`, `lem:measure`, `thm: fixed prob that bad actions dont become greedy`, and `thm: convergence mcopi uniform`, including the definitions and dependency proofs needed for their composition.
- Primary scope: `results/2-probability-to-improve.tex`, `results/3-convergence.tex`, and the relevant `z-appendix.tex` material in the frozen active manuscript. Dependency inspection included the norm convention, standing assumptions, filtrations, return moments, update identities, sampling convention, inertia, strict Policy Improvement Theorem, fixed-target averaging, bounded limit sets, terminal constant-target blocks, and the mean-field argument.
- Read the local correctness role, reviewing principles, notation guide and review-record format. The current manuscript was assessed before comparing the prior active manuscript. No SPEC, STATUS, writer notes, conversations, previous reviews, raw manuscript sources or exposition assessments were read. No manuscript was edited.

## Exact reviewed versions

Current version: `preservation-first-v1`, base commit `09d7e4cc45fb1a59153c2a40da2b7da59fedaff4`, retained at `publications/jmlr/reviews/2026-10-12-preservation-first-v1/active/`. Every one of the 17 active entries was checked against `../MANIFEST.txt`; all SHA-256 digests matched. Raw and build entries in that manifest were outside this review.

The three changed active inputs have these SHA-256 digests:

| Input | Current SHA-256 |
| --- | --- |
| `results/2-probability-to-improve.tex` | `728bd7e2a8558adb5894a5cebd08b4a12a9023eb1a8b4f94cd2ce65a520eef13` |
| `results/3-convergence.tex` | `cb377fae1c6cc2a3f8758a1c418869d39ab3daba6958faa25a2e881d6921d895` |
| `z-appendix.tex` | `57a86ba2b3a6c916021e5f1d2634ec80cbf0eabe1e073d6b7701899f1a5091e2` |

The authoritative current dependency digests remain in the verified manifest. In particular, `2-mcopi.tex` is `f4ef99e187297a1a0678bf066db81ce6cd523441a31f3e6e31a8f57dbbb39414`; `results/1-mean-field.tex` is `091fdf6e952b0a0243922e3f4f10a050bfc23b137fa85aebb390709b54012113`; and the rendering macros in `z-maths.tex` are `b4fb529a4ff1a367dbd57500db80924d41310acaa1251bc7fffdc9cec6fcc995`. The entry point and supporting macro/package files were included in the fingerprint comparison; that comparison is not a build or visual check.

Comparison version: only `publications/jmlr/reviews/2026-10-10-gap-preservation-v1/active/` was used. Its corresponding changed-input digests are:

| Input | Prior SHA-256 |
| --- | --- |
| `results/2-probability-to-improve.tex` | `09def91e45cac568f5f3960cebbebc57c9fa0a3ba2dbed8d10ca11e91698a28e` |
| `results/3-convergence.tex` | `681de8a495aac5123e2bde2a9cd4d056a783f96951076064b8ba0158eb24d59e` |
| `z-appendix.tex` | `65ca247b3e657dc99c31d500c26a7e34faab1d88b50760efe694b2fb23563381` |

All other 14 active files are byte-identical between these frozen versions. Figures, empirical claims, literature comparisons and bibliography entries were not substantively reverified.

## Claims and checks

### Gap preservation

`results/2-probability-to-improve.tex:82–159` concerns one specified bad-action gap for a fixed reference policy. The start is a finite stopping time `t'`, after the learning-rate comparison condition begins and no later than the target-change/exit endpoint. The initial gap is strictly positive. The claim is conditional on the history at `t'`, and explicitly requires the recursion and conditional moment assumptions under the law actually used. It is an upper bound on a finite-time crossing of zero through the endpoint, not an unconditional assertion that every positive gap survives.

The definition of bad actions and the finite positive minimum give `d_pi >= 4 delta`. The gap-noise variance is bounded by `2(c_v + 4 K^2) sigma_k(s)`: the two possible pair updates are disjoint, their conditional means are the required targets, and the estimates and targets each have magnitude at most `K` before exit. Thus subtracting their predictable mean gives the stated centered gap noise without an independence assumption.

Before reaching `delta`, the positive drift is at least `3 delta alpha_k sigma_k(s)`. The conditional variance of the noise stopped at accumulated learning `b` is at most `c_xi c_alpha alpha_t' (b + c_alpha alpha_t')`, including the last update's overshoot. The dyadic ranges cover every finite crossing clock value. Their displayed bounds sum to the coefficient `20 c_xi (1 + 1/(3 delta))`, and the separate case `d_t' < c_alpha alpha_t'` is covered by `c_g >= 1`. No lower sampling bound or bound on elapsed iterations is used.

After first reaching `delta`, the predictable one-step value stays at least `delta` whenever the current gap is at least `delta`, because the update is a convex combination with a target at least `4 delta`. The last such index before a crossing is used only pathwise. The resulting crossing forces a martingale excursion of at least `delta/2`, and the square-summable tail yields the displayed `16 c_xi / delta^2` bound. Conditional maximal inequalities are justified by the supplied appendix argument. Both parts retain the increment immediately preceding the stopping endpoint. A start at the endpoint itself has no possible crossing because its gap is positive.

The revised interpretation at line 94 is correct: a fixed positive starting margin makes both terms small at late starts; for a vanishing margin, the first term is controlled by the learning-rate-to-margin ratio. A sufficiently large fixed multiple of the learning rate controls that term, while a sufficiently late start controls the tail. The text does not claim that waiting alone protects an arbitrarily small gap, nor that this single-pair estimate already protects all pairs.

### Seed and auxiliary probability law

`results/2-probability-to-improve.tex:161–204` uses the original two favorable-update cases. The reference-action update raises its estimate by at least `3 delta alpha_k / 2`; otherwise the competing action is overestimated by more than `delta`, so its favorable update lowers it by more than `delta alpha_k / 2`. Other reference gaps cannot decrease. Inertia retains the reference action at every unfinished state, including through waits and through a final successful update at the endpoint.

Conditional one-sided Chebyshev, applied after fixing the sampled pair, supplies the stated positive probability. Uniform action sampling conditional on the state supplies the factor `1 / max_s |A(s)|`. Zero state-selection probabilities cause no division problem because requests are conditioned only on positive-probability state selections. The request count is at most `|S x A| N`. Earlier requested rates are at least `alpha_Ts / c_alpha`, so the completion margin follows even when completion times differ or waiting times are unbounded. The `c_v = 0` case is covered by the same bound.

`z-appendix.tex:134–200` supplies a bounded nonnegative likelihood martingale. Every requested factor has conditional mean one after fixing the state; at most `|S x A| N` factors differ from one. The deterministic bound gives convergence in mean and `E[L_infinity | F'_k] = L_k`, rather than merely pointwise convergence of weights. The auxiliary law is absolutely continuous with respect to the original law and agrees with it on the restart history. The construction on the finite-time events of a random restart preserves these facts.

The weighted conditional-law calculation is sufficient to remove any bias from future requests, even if they depend on the current return. State-selection probabilities remain unchanged. At completed states the current factor is one, so the conditional action and return law is unchanged as well. Consequently the local gap moments used by preservation remain valid under the auxiliary law after that state's completion, even while requests continue elsewhere. The density bound gives the conditional transfer factor `p_0^(|S x A| N)` for every future event; no multiplication of merely marginal success probabilities is used.

### Progress and stochastic convergence

`results/3-convergence.tex:18–68` chooses `N` first and then `k_0`, both deterministic and uniform over reference policies and restarts for fixed `K`. Since `N alpha_Ts <= 2 c_alpha`, the seed margin gives exactly the stated ratio bound `2 c_alpha^2 / (delta N)`. The two union-bound contributions are each at most `1/4`, yielding failure probability at most `1/2` after conditioning at each finite completion and averaging back to the start. No simultaneous completion or independence is needed.

On the complementary event, earlier completed states retain strictly positive bad-action gaps through a finite endpoint. Unfinished states and states finishing exactly at the endpoint retain their reference action. Thus a target transition before exit satisfies the Policy Improvement Theorem at every state; unequal targets imply strict improvement by the supplied strict theorem. Exit at or before the target transition and an infinite constant-target interval are the other success alternatives. An exit after a failed transition is not counted for that preceding interval. An empty bad-action set, either globally or for the reference policy, is correctly handled.

`results/3-convergence.tex:70–87` composes these conditional opportunities. On a continuing branch, only finite transition times are used for renewed conditioning. A stopped branch already meets the block objective. Since `|P|` consecutive strict improvements are impossible, each continuing block of `|P|` intervals stops with probability at least `p^|P|`; the geometric survival bound does not require independence and allows intervening worsening transitions in previous failed blocks.

The exit removal uses more than bare pathwise boundedness: the bounded-limit-set lemma places the eventual estimates within any `K > max_pi ||q_pi||`, because the norm is the supremum norm (`1-introduction.tex:118`). Its supplied coordinate comparison proof establishes that stronger property. Intersecting over deterministic integer restarts then permits choosing a contained restart pathwise, without treating future containment as a stopping-time event. Fixed-target averaging and the subsequence greedy argument establish optimality of the final target. Finiteness excludes all strictly suboptimal actions from sufficiently late greedy selections; unique optimal actions give an eventually constant selected policy.

The fixed-target and bounded-limit-set dependency proofs were inspected, including the conditional squared-error estimate, infinite accumulated learning, and the countable intersection needed before choosing future-dependent restarts or comparison targets. The strict Policy Improvement Theorem and the mean-field chain were also checked. The standard finite-MDP policy-improvement and optimality facts, and the stated supermartingale convergence theorem, were used as mathematical dependencies; their cited publications were not re-audited.

## Findings and dependency effects

There are no findings to assign stable finding IDs. No author rebuttal or independently unresolved objection was supplied to this review, and no prior finding is being closed by inference.

The comparison establishes mathematical equivalence in the assigned scope. The gap-preservation proof, seed proof and complete seed-construction block are exact text matches after relocation. The auxiliary-law lemma statement has moved to the appendix; its proof body is exact text, with only the surrounding proof environment changed. The transfer display is now stated in the main progress proof and repeated in the appendix lemma with the same inequality and domain. The entire global-convergence section is byte-identical. The definitions of `c_s` and `c_g` are separated in placement but retain the same values, and every use has the needed definition available.

Accordingly, this revision creates no mathematical invalidation of the unchanged foundations, mean-field results, or downstream stochastic conclusion. Mathematical approval for those unchanged dependencies may carry forward on the evidence above; the affected preservation/seed/measure/progress composition also receives the fresh scoped pass recorded here. This does not itself carry forward a named earlier review, because no prior review was read, and it does not confer an exposition, notation, rendered-build, source-verification or human-sign-off verdict.

Verification used direct mathematical inspection, source diffs, exact-block equality checks and SHA-256 verification. No simulation was used or needed for these claims. No material uncertainty remains within the assigned proof-reordering scope; a pass records that no blocker was found, not a formal proof certificate.

## Historical reconciliation after the independent review

Date: 2026-10-12. The writer authorized this additional stage after the initial report was recorded. I then read only `2026-10-10-gap-preservation-correctness.md` (SHA-256 `5089d58d917a6c36fa6be0a7dbbefea0aa2b2401ab8b952af6bf77009884e228`) and `2026-09-28-source-checks.md` (SHA-256 `9b35acb5aaad913a93ab11a9b2bb7fb52054b1e4604bfc94d4baacf76e9c2bb3`). No exposition record, writer note or additional historical review was opened. This append-only reconciliation leaves the independent initial assessment above intact.

The earlier correctness record identifies the same three prior active-file digests independently compared above. It records a scoped pass for gap-preservation-v1, reconciliation of restoration-v4's full-chain mathematical clearance, and dismissal of the subsequent constant objection COR-GP-01. The earlier restoration report itself was not read here; its historical findings are identified through that authorized reconciliation. I assessed their current mathematical resolution against the current definitions and proofs, rather than relying only on their recorded status.

| Historical finding or check | Current verification and disposition |
| --- | --- |
| COR-R1-01, gap domain beyond the stopped interval | Current `results/2-probability-to-improve.tex:40–46` defines the gap and gap noise for every `k >= t`. Lines 49–63 restrict the recursion and moment guarantees to the stopped interval. Consequently the hitting-time definitions use defined quantities, including outside the interval where those guarantees are used. The recorded resolution remains verified. |
| N-REST-01 and N-REST-03, random boundedness and distance to the limit set | Unchanged `2-mcopi.tex:369–383` states distance convergence and an almost-sure finite supremum. The comparison proof at `z-appendix.tex:65–109` still supports both. The fixed deterministic `K` used in the convergence proof is justified by the limit box and the sup norm, not by interpreting random boundedness as a deterministic bound. Their mathematical resolutions remain verified. |
| N-REST-02, restarted transitions and infinite endpoint | Unchanged `2-mcopi.tex:390–400` explicitly permits deterministic restart `r`, includes the integer interval convention, and handles an infinite endpoint. Current `results/3-convergence.tex:73–84` uses those exact contracts, with the countable intersection before a pathwise restart choice. The recorded resolution remains verified. |
| N-REST-04, norm convention | Unchanged `1-introduction.tex:118` defines the supremum norm. Both coordinate noise bounds and eventual containment use that norm. The mathematical resolution remains verified. |
| N-REST-05, N-REST-06 and N-REST-07 | The separate domains of state values `v_pi(s)` and sampled perturbations `v_k(s,a)`, the qualification that return moments are imposed only for positive-probability sampled pairs, and the locally declared deterministic restart remain in unchanged `2-mcopi.tex` and the fixed-target appendix. No semantic conflict affects the inspected argument. Their recorded mathematical dispositions carry forward; this is not a replacement notation review. |
| Restoration-v3 maximal-event and auxiliary-law checks | The preservation proof still uses the same strict accumulated-learning bands, overshoot allowance and conditional maximal estimate. The auxiliary proof still averages future density factors out before assessing the current update law. These bodies are exact text matches after relocation and were checked independently above. Their recorded clearance remains applicable. |
| Restoration-v4 one-sided bound and drift explanation | The one-sided bound, its conditional application, and the `3 delta` drift estimate are unchanged. The direct checks above cover zero return variance and the inclusive target-change/exit endpoint. Their recorded clearance remains applicable. |
| COR-GP-01, questioned extra factor of `c_alpha` at completion | Current `results/3-convergence.tex:23–30` chooses `k_0` so the two bounds hold **for every** integer `t >= k_0`. Since every finite `T_s` used at line 43 satisfies `T_s >= t >= k_0`, this gives `N alpha_Ts <= 2 c_alpha` directly at its realized index. No learning-rate comparison is needed for this substitution, so no additional factor appears. With `c_s = delta/2`, the denominator bound and the ratio at lines 45–47 are valid. The earlier nonblocking objection remains dismissed; no manuscript correction is required for correctness. |

The source-check record documents independent inspection of Bertsekas and Tsitsiklis, *Neuro-Dynamic Programming* (1996), Section 2.2.1, Definition 2.1 and equations (2.7)–(2.9), and Proposition 4.2. The retained inspected external-source digest is `976fb3d960a5cc004c8d8917abbd5a2bded80848c02bade2037fcf2380789335`. Its proper-policy tail result supports the manuscript's finite-moment synthesis under bounded rewards and finite policy/pair sets. Proposition 4.2 supports the fixed-target squared-error argument under adaptive, possibly vanishing sampling probabilities. The manuscript's hypotheses, citations and applications of these contracts are unchanged, so their existing source clearance carries forward. No external document was reopened and no new page-level source audit is claimed.

That evidence does not attribute the episodic variance claim to Tsitsiklis's discounted argument: the historical source check expressly distinguishes them, and the current preliminaries continue to cite the proper-policy result for the episodic case. The record also preserves the limited methodological uses of Kushner–Yin and Borkar. The current proof supplies its own convergence estimates; those citations do not act as an unverified substitute theorem. The source record does not document a separate page-level audit of Howard's Policy Improvement Theorem, which remains a standard dependency whose applicability and strict enhancement were checked directly in the manuscript. No additional novelty or empirical conclusion is inferred from these records.

**Reconciled correctness and carry-forward decision: pass.** The recorded gap-preservation-v1 mathematical clearance, including its reconciled restoration-v4 dependency clearance and dismissal of COR-GP-01, carries forward to the exact preservation-first-v1 active sources fingerprinted above. The grounds are the independent current audit, exact relocation/equivalence checks, byte-identical remaining dependencies, and current verification of the relevant historical resolutions. No old correctness finding is reopened and no new finding is added. Source, exposition, notation, rendering and human-sign-off limitations remain as stated; the external dependencies just identified rely on their existing recorded source checks.
