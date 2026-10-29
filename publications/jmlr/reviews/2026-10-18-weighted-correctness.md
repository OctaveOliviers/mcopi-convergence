# Independent correctness review: weighted-preservation-v1

## Assignment and provenance

- Review ID: `2026-10-18-weighted-preservation-v1-correctness`.
- Role: independent correctness checker; initial review of this frozen version, including the assembled dependency chain needed for the assigned results.
- Reviewer: `/root/weighted_correctness`. The precise model identifier and reasoning-effort setting were not exposed in the checker context.
- Date: 2026-10-18.
- Assigned result IDs: `lem:barrier`, `lem:seeds`, `thm: fixed prob that bad actions dont become greedy`, and their use in `thm: convergence mcopi uniform`; conditional-law, maximal-inequality, boundedness, and fixed-target dependencies; the return-moment, learning-rate, sampling, and related discussion prose.
- Independence: the checker received the assignment and repository instructions, without the writer's conversation history or expected answers. It read no raw manuscript files, other review reports, STATUS, SPEC, original reviewer proposal, or private drafting notes. No manuscript was edited.
- Instructions read: `.agents/agents/correctness-checker.md`, `.agents/guidelines/reviewing-principles.md`, `.agents/guidelines/notation.md`, and `.agents/skills/write-and-review-paper/review-record.md`.

Frozen root: `publications/jmlr/reviews/2026-10-18-weighted-preservation-v1/`. Base commit recorded by its manifest: `4482943da344c64e972b302999a6651253b5491c`.

`MANIFEST.txt` SHA-256: `6a6b318cb21f535b370c167ecf99f8a5ec91afc6a5d4c4abcccef699ddb4ada7`. All 17 listed `active/` file digests were independently recomputed and matched. This identifies the reviewed source and dependencies without relying on the base commit alone.

The review started at `active/jmlr.tex` and read the active introduction, preliminaries, results, all three results files, discussion, appendix, and mathematical macros. The package file was searched where needed and relevant bibliography keys were checked. The main mathematical source fingerprints are:

| File under `active/` | SHA-256 |
| --- | --- |
| `2-mcopi.tex` | `9ce6bc18bda6178689c654ca7df850c2d5bb3c8b86a875a7062d6062c4b91380` |
| `results/1-mean-field.tex` | `091fdf6e952b0a0243922e3f4f10a050bfc23b137fa85aebb390709b54012113` |
| `results/2-probability-to-improve.tex` | `53f3d77fe91f1bbfbef8a8de89b0ab6027ba134dda6c07e53b058da12af073ed` |
| `results/3-convergence.tex` | `725fa6db5e012525217e9d7893db9018f36f654e53f16bfe75fca5d3713e1663` |
| `z-appendix.tex` | `4822f304e7b783e08800d0d7c89750629276322b033b58f9aadba54be4b9a9df` |
| `4-discussion.tex` | `a90fa6de3a4ea48c8654800d23938df506c63f6b761c74c1285fbfbd8b5f929b` |

All locations below refer to this frozen `active/` tree, not the current working manuscript.

## Assessment

**Verdict: pass within the assigned correctness scope, with one nonblocking appendix correction (WPC-01).** No blocking error was found in the weighted preservation estimate, seed construction, auxiliary-law argument, or their composition into almost-sure convergence. This is an independent mathematical audit, not a formal proof certificate or an assessment of novelty, empirical results, or presentation readiness.

### Claim and hypotheses as understood

For a finite discounted MDP, or a finite undiscounted MDP in which every deterministic stationary policy is proper, consider initial-visit MC-O-PI with finite deterministic initialization. The global deterministic rates are in `(0,1]`, have divergent sum and square-summable squares, and satisfy the stated eventual bound on all future increases. Selected policies are greedy with the stated inertia. Conditional on the selected history and initial pair, return noise has zero mean and uniformly bounded second moment. Conditional action sampling is uniform within each state; adaptive state sampling is allowed, including zero probabilities, provided every pair has infinite accumulated learning almost surely.

The theorem claims that action-value targets change only finitely often almost surely, estimates converge almost surely to the optimal action values, and all sufficiently late selected policies are optimal. Eventual constancy of the selected policy is asserted when every state has a unique optimal action. The proof does not claim a convergence rate, a practical lower bound on its probability constant, bounded waiting times, or necessity of learning-rate regularity.

## Checks and reasoning

### Return moments, sampling, and basic dependencies

- `2-mcopi.tex:239–246, 325–334`: the conditional return assumption is imposed only for positive-probability sampled pairs and is sufficient for the proofs. Bounded rewards are offered as a sufficient condition, not inferred from finite first moments. In the proper finite-state case, each policy's geometric termination tail supplies a finite second return moment, and finiteness of policies and starting pairs makes the bound uniform. The arbitrary initial action is followed by a proper stationary policy, so it does not invalidate the finite-moment conclusion.
- `2-mcopi.tex:187–192`: the oscillating learning-rate example satisfies the stated comparison condition with factor 3, is at most 1 from initialization, is square summable, and has divergent sum. The proof uses an upper bound on future increases; it never requires a lower comparison bound on future rates.
- `2-mcopi.tex:250–271`: accumulated expected learning is the correct hypothesis for the conditional averaging calculation. Infinite visitation alone is correctly distinguished from infinite learning weight. The per-action meaning of `sigma_k(s)` and the normalization by action-set sizes are consistent throughout. The example with probabilities at most `1/(k+2)^2` has a no-selection probability at least the telescoping product `prod_{k>=0}(1-1/(k+2)^2)=1/2`; conditional upper bounds give the same conclusion for adaptive sampling.
- `z-appendix.tex:65–109`: the fixed-target comparison processes can use the actual noise and update indicators even while the actual target varies. Their errors have conditional drift bounded by `-alpha_k sigma_k e_k^2 + c_v alpha_k^2`; finite-time second moments follow from the initialization and return assumption. The nonnegative almost-supermartingale theorem therefore applies. The divergent weight sum forces the limiting squared error to zero. Taking a countable intersection over deterministic restarts and finitely many targets/pairs justifies the later pathwise selections of a restart and comparison target.
- `1-introduction.tex:112–119` specifies the supremum norm. This matters: the coordinatewise comparison bounds imply eventual containment in every fixed `K > max_pi ||q_pi||`, which is stronger than pathwise boundedness alone and is exactly what the final restart argument uses.
- `2-mcopi.tex:118–142, 403–414`: the strict policy-improvement implication is valid. If a constant-target block lasts forever, a policy occurring infinitely often is greedy for that target in the limit and has that same target as its own action-value function; hence it is optimal. No conditioning on the event of future constant targets is used to create a noise assumption.

### Gap recursion and preservation

- `results/2-probability-to-improve.tex:28–63`: before the next target change, the target is `q_pi` even if the selected policy itself changes. Equal per-action sampling probabilities therefore give the displayed scalar gap drift. For a bad pair, the reference and competing actions are distinct. Write the sampled gap change before multiplication by the learning rate as `Y = I_ref(e_ref+v_ref) - I_a(e_a+v_a)`. The disjoint update events give `Var(Y | F'_k) <= sigma_k(s)(e_ref^2 + e_a^2 + 2 c_v) <= 2 sigma_k(s)(c_v + 4 K^2)`. This verifies both the constant and the essential state-probability factor in the displayed variance bound.
- `results/2-probability-to-improve.tex:81–147`: the retained increments use `k < eta`, a decision measurable before the episode. This includes the increment whose endpoint is the first gap closure, target transition, or exit, as required. No moment bound after the endpoint is assumed.
- In the first case, all pre-crossing gaps are in `(0,delta)` and the target gap is at least `4 delta`; hence the deterministic drift is at least `3 delta` times the accumulated learning. Dividing increment `k` by `b_{k+1}` is legitimate because the next clock increment uses the already selected sampling distribution. The summation-by-parts identity has the correct indices and gives the factor 2. The variance sum is bounded by the right-endpoint integral of the decreasing function `1/(d_{t'}+3 delta x)^2`, whose integral over `[0,infinity)` is `1/(3 delta d_{t'})`. This yields exactly `4 c_xi bar_alpha_{t'} /(3 delta d_{t'})`.
- In the second case, the noise-free update from the last gap at least `delta` remains at least `delta`, because its coefficient is in `[0,1]`. All subsequent pre-crossing mean increments are nonnegative. The pathwise inequality forces a martingale excursion of at least `delta/2`, yielding exactly `4 c_xi sum_{k>=t'} alpha_k^2 / delta^2`. The last-visit index is not used as a conditioning time.
- Localization on positive lower bounds for the random initial gap makes the rescaled martingale square integrable; countable finite-time slices handle random starts. The stopped unscaled martingale has a deterministic summable variance bound. Neither accumulated-clock divergence nor bounded waits are needed in this lemma. If the start is already the endpoint with a positive gap, the crossing event is empty.

### Seeding and its safety

- `results/2-probability-to-improve.tex:153–169`: while the reference action remains selected and a gap is below `delta`, the two relevant estimation errors sum to more than `3 delta`, so one exceeds `3 delta/2`. The requested one-sided return then raises the reference estimate or lowers the competing estimate by more than `delta alpha_k`. Every other gap against the reference action stays unchanged or increases. The reference action stays greedy, and inertia retains it.
- The conditional one-sided second-moment calculation in `z-appendix.tex:125–132` yields the asserted probability, including when `c_v=0`. Combining it with uniform action sampling gives `p_0` conditional on selection of the unfinished state. No positive state-selection lower bound is inserted.
- `results/2-probability-to-improve.tex:173–194`: requests are bounded in number by the number of state-action pairs times `N`, even when their times are unbounded. Previously processed gaps cannot decrease under later favorable updates at that state. For every seed update before completion, the future-rate comparison gives `bar_alpha_{T_s} <= c_alpha alpha_k`; summing `N` favorable increases proves the stated margin. Initially skipped gaps have margin at least `delta`. Completion at an endpoint is safe because the last favorable update still retains the reference action.

### Auxiliary probability law and composition

- `z-appendix.tex:134–200`: the likelihood factor at a request has conditional mean one given the current history and selected state. Averaging over state selection gives the martingale identity. Failed paths receive weight zero and stop requesting; every path has only finitely many possible request factors. Thus the likelihood is bounded by `p_0^{-D N}` and becomes constant pathwise, where `D` is the number of pairs. The bounded convergence argument gives its mean-one terminal density and its conditional identities at later histories.
- The weighted conditional-law formula correctly averages all later request factors out, even if later request timing depends on the current return. It therefore preserves state-selection probabilities and preserves the current action/return law given selection of a completed state. The fraction is needed only where the current likelihood is positive, which is an event of full auxiliary probability. The auxiliary law is absolutely continuous with respect to the original law, and the density bound gives the claimed conditional transfer inequality. The stated random-start construction preserves these conclusions on finite-time slices.
- `results/3-convergence.tex:15–51`: choosing `N` first and the deterministic late start second produces the required constants. At any completed state before the endpoint, the original conditional update law, drift, and variance bounds hold under the auxiliary law. The seed margin gives `bar_alpha_{T_s}/d_{T_s} <= c_alpha/(N delta)`. Applying preservation conditionally at each completion and then taking conditional expectations from the original start is valid. The completion-before-endpoint event is known at the completion time. The union bound over at most `D` gaps is at most `1/2`; neither independence nor simultaneous completion is used.
- `results/3-convergence.tex:53–63`: on the no-completed-gap-loss event, earlier-completed states cannot select a bad action. Unfinished states and states completed exactly at the endpoint retain the reference action. The policy-improvement inequalities therefore hold at every finite transition before exit, and differing targets give strict improvement. Infinite waiting is harmless because either a finite endpoint is handled with unfinished states safe, or no endpoint occurs and the target remains constant. The event transfer yields exactly `p = (1/2) p_0^{D N}`. Exit following an already unsuccessful transition is correctly excluded as success for that interval.

### Global convergence and discussion

- `results/3-convergence.tex:69–82`: the conditional lower bound for stopping or improvement can be iterated at each finite continuing transition. Stopped branches require no further conditioning, particularly not at an infinite time. The tower-property induction gives the lower bound `p^m`. Strict policy improvement is a transitive strict order on state values, so `|P|` consecutive improvements are impossible. The geometric survival bound over blocks follows despite arbitrary unsuccessful transitions between attempts.
- The probability-one conclusions are first intersected over deterministic restart integers. Eventual containment in the fixed supremum-norm bound then allows a pathwise choice with no subsequent exit. This removes localization without treating eventual containment as a stopping time or altering the conditional noise law. The constant-target lemma completes value convergence, and positive optimal action gaps exclude all nonoptimal actions from sufficiently late greedy policies. The unique-action conclusion follows.
- `4-discussion.tex:163–181, 248–254, 269–287`: the revised prose correctly limits temporal-difference and function-approximation extensions to future work. The account of infinite learning, possible zero sampling probabilities, unbounded waits, and learning-rate comparison matches the proof. The fixed-priority tie variant has the claimed local retention property when used consistently from initialization; the other parts of this proof do not require a stronger tie rule. The text appropriately does not claim fresh random ties are covered or regularity is necessary.

## Findings and responses

### WPC-01 — Make the initial maximal-inequality calculation use a deterministic threshold

- Category: correctness / local mathematical wording and notation.
- Severity: **nonblocking**. The displayed unconditional calculation is not literally valid for a random threshold, but both actual gap-preservation applications have deterministic thresholds (`1/2` and `delta/2`), and the paragraph separately explains the conditional extension.
- Location: frozen `active/z-appendix.tex:204–212`, particularly the description of `z` at line 204 and the second inequality at line 209.
- Issue: `z` is introduced as positive and known at the restart, which permits a nonconstant restart-measurable random variable. The unconditional display then writes `E[1_{theta=j} M_j^2] >= z^2 P(theta=j)`. For nonconstant `z`, the immediate conclusion is instead `E[1_{theta=j} M_j^2] >= E[z^2 1_{theta=j}]`; alternatively, with conditioning on the restart, `z^2` can be taken outside that conditional expectation.
- Resolution criterion: start the displayed unconditional derivation with a deterministic `z>0`, then retain the paragraph's conditional extension; or put conditioning on the restart history in the displayed derivation throughout. This changes no constant or substantive result.
- Status: **open**.
- Author response / revision: none assessed in this review.
- Resolving reviewer / evidence / disposition date: not yet applicable.

No blocking findings or missing mathematical inputs were identified. The potential dependence of future seed requests on completed-state returns was examined directly rather than assumed away; the terminal likelihood and conditional-law argument resolves it.

## Limits and version effects

The audit did not verify novelty or historical comparisons, reproduce the numerical experiment, inspect rendered figures, or certify build output. Standard finite-MDP policy-improvement/optimality facts and the stated almost-supermartingale convergence theorem were accepted as classical dependencies, with their relevant hypotheses checked; external books and articles were not independently opened. No numerical simulation was used as evidence for almost-sure convergence. The active-file digest check was the only computational verification needed.

This pass belongs only to the identified frozen version and assigned scope. A change to the conditional return assumptions, within-state sampling law, retention rule, future-rate comparison, stopping endpoints, likelihood construction, or restart composition requires reassessment of the affected results and their downstream uses. The writer should record this review and its nonblocking open correction in the paper's durable status/review files; this checker has not changed those files or conferred human approval.

---

## Follow-up: weighted-preservation-v2 and source-record reconciliation

- Follow-up review ID: `2026-10-18-weighted-preservation-v2-correctness`.
- Date: 2026-10-18.
- Reviewer: `/root/weighted_correctness`, the same independent checker as above.
- Dispatch provenance supplied by the writer for this review: **GPT-6 Astra, high**. This supplements the initial record's statement that those settings were not visible within the original checker context; it does not replace that historical statement.
- Scope: verify the precise repair of WPC-01, inspect changes affecting the prior verdict, and reconcile the specifically supplied `publications/jmlr/reviews/2026-09-28-source-checks.md` with the unchanged classical dependencies. Reading that source-verification record was expressly authorized in the follow-up assignment. No other peer reviews, STATUS, SPEC, raw source, or private notes were read.

### Version verification

Frozen root: `publications/jmlr/reviews/2026-10-18-weighted-preservation-v2/`.

The v2 `MANIFEST.txt` SHA-256 is `be7a13f66a63ff715528105d9b70a6a702d942872338755fbbdd9b2749916972`. All 17 `active/` digests were independently recomputed and matched. Every active file was compared byte-for-byte against v1. The sole change is the maximal-inequality opening at `active/z-appendix.tex:204`:

> To bound its largest deviation, first fix a finite horizon N and a deterministic threshold z>0. Let theta be the first index at which |M_theta| >= z, where M starts from zero.

The resulting appendix SHA-256 is `faa58abb716cae4de205478b7c214af7db15ad7a1cb3ca3e993bcd2ce68066c4`. The subsequent display and conditional/random-threshold extension are unchanged. All theorem statements, assumptions, gap calculations, seed and auxiliary-law arguments, stopping definitions, and downstream convergence steps are unchanged.

### WPC-01 disposition

**Resolved in v2.** With `z` deterministic in the initial unconditional calculation, `E[1_{theta=j} M_j^2] >= z^2 P(theta=j)` is valid. The unchanged subsequent explanation obtains conditional estimates by testing against restart-measurable events and treats restart-measurable thresholds conditionally. The correction also preserves the two actual deterministic-threshold applications in the barrier proof. No stronger hypothesis, altered probability constant, or new dependency is introduced.

- Author response: use a deterministic threshold for the unconditional derivation, retaining the conditional extension.
- Changed location: v2 `active/z-appendix.tex:204`.
- Resolving reviewer: `/root/weighted_correctness`.
- Verification evidence: complete active-tree digest and byte comparison, followed by direct reassessment of the corrected sentence, unchanged displayed inequality, and conditional extension.
- Disposition date: 2026-10-18.

### Classical-source reconciliation

The supplied source-verification record reports an independent inspection on 2026-09-28 by `/root/standard_references` (GPT-5.6 Sol, medium) of Bertsekas and Tsitsiklis, *Neuro-Dynamic Programming* (1996), using the MIT author PDF. It identifies the inspected source by SHA-256 `976fb3d960a5cc004c8d8917abbd5a2bded80848c02bade2037fcf2380789335` and gives exact section/proposition and printed-page locations. This follow-up relied on that recorded inspection; it did not download or independently reread the PDF.

That record is sufficient for the external facts used by the assigned proof:

1. **Proper-policy termination and return moments:** the record's Section 2.2.1, Definition 2.1 and equations (2.7)–(2.9), printed pages 18–19, supply the geometric absorption-time tail used in `2-mcopi.tex:112–114, 239–246`. The manuscript's finite-second-moment conclusion with bounded rewards is a valid deduction from this tail, and the finite policy/initial-pair sets supply uniformity. The record explicitly distinguishes this deduction from a verbatim book theorem. There is no reliance on Tsitsiklis (2002) for the episodic assertion.
2. **Fixed-target averaging:** the record identifies Proposition 4.2, printed pages 148–149 (PDF pages 163–164), as the nonnegative almost-supermartingale result used in `z-appendix.tex:65–86`. The current proof has the required nonnegative adapted squared errors, finite-time integrability, nonnegative drift penalty, and summable deterministic positive errors. The checked inequality is unchanged in v2. Infinite accumulated learning is used after the convergence theorem to force the limit to zero; no positive sampling floor or prior iterate boundedness is smuggled into the source application. The record also explains why Proposition 4.1/Example 4.3 are not substituted for Proposition 4.2.
3. **Methodological citations:** Kushner–Yin Section 5.4 and Borkar Section 3 motivate the strategy and fixed-interior comparison. The current main proof establishes its own maximal, likelihood, and repeated-opportunity estimates. It does not invoke an unchecked external lock-in or convergence result to close a mathematical gap. The record's reference to an earlier methodology-source check therefore does not leave a missing theorem dependency in this correctness scope.

The remaining finite-MDP policy-improvement and optimality facts were already treated as classical dependencies in the initial review, with their hypotheses checked. Their use is unchanged. In particular, policy improvement follows from the nonnegative discounted/proper-policy resolvent applied to the one-step improvement residual, and strictness here follows from the manuscript's explicit equal-state-values-imply-equal-action-values argument. The source record creates no conflict with these uses. No further exact-source request is needed for this review.

### Follow-up assessment and carry-forward

**Verdict: pass for weighted-preservation-v2 within the original assigned correctness scope.** WPC-01 is resolved, and this review has no remaining correctness findings. The v1 mathematical approval carries to v2 because the only active-source change repairs a local threshold description without changing the claims, constants, assumptions, or substantive arguments. This carry-forward is based on the same checker's actual source comparison and reassessment, not solely the writer's description of the revision.

The initial scope limitations remain: no novelty assessment, empirical reproduction, figure/render review, or formal proof certification is implied. The classical-source status is now reconciled with the supplied prior independent inspection, with the distinction between prior source inspection and this checker's own hypothesis audit recorded above. The initial report and finding remain preserved as historical evidence.
