# Preservation-first assembled correctness review

## Assignment and provenance

- Review ID: `2026-10-12-preservation-first-assembled`.
- Role: fresh assembled-proof correctness checker, agent `/root/preservation_first_assembled`.
- Date: 2026-10-12. Model/effort: not exposed in the reviewer context.
- Review type: independent initial assembled-chain review.
- Verdict: **pass**, within the mathematical scope below.
- Reviewed version: frozen `publications/jmlr/reviews/2026-10-12-preservation-first-v1/active/`, identified by that snapshot's `MANIFEST.txt`, base commit `09d7e4cc45fb1a59153c2a40da2b7da59fedaff4`.
- Independence: read the current active manuscript, role instructions and required local review/notation guides before any earlier review. No specification, status file, writer notes, raw source, old manuscript, prior review or exposition record was inspected.
- Assignment: audit the full mathematical dependency chain supporting `thm: convergence mcopi uniform`, including the algorithm and standing assumptions, policy improvement, noise, boundedness, fixed-target convergence, stopped gap setting, preservation, seeding, the auxiliary law, stopped positive progress and the final global argument. This is not a new external-source, novelty or experimental audit.

The active sources inspected were `2-mcopi.tex`, `3-results.tex`, all three `results/*.tex` files, `z-appendix.tex` and `z-maths.tex`, together with the norm convention and convergence framing in `1-introduction.tex`, the abstract in `jmlr.tex`, and the assumptions discussion in `4-discussion.tex`. The SHA-256 digests of the substantive dependency sources were checked against the supplied manifest and matched:

| Source | SHA-256 |
| --- | --- |
| `2-mcopi.tex` | `f4ef99e187297a1a0678bf066db81ce6cd523441a31f3e6e31a8f57dbbb39414` |
| `results/1-mean-field.tex` | `091fdf6e952b0a0243922e3f4f10a050bfc23b137fa85aebb390709b54012113` |
| `results/2-probability-to-improve.tex` | `728bd7e2a8558adb5894a5cebd08b4a12a9023eb1a8b4f94cd2ce65a520eef13` |
| `results/3-convergence.tex` | `cb377fae1c6cc2a3f8758a1c418869d39ab3daba6958faa25a2e881d6921d895` |
| `z-appendix.tex` | `57a86ba2b3a6c916021e5f1d2634ec80cbf0eabe1e073d6b7701899f1a5091e2` |
| `z-maths.tex` | `b4fb529a4ff1a367dbd57500db80924d41310acaa1251bc7fffdc9cec6fcc995` |

No manuscript changes were made. The supplied compiled PDF was not used for a new visual/typesetting audit.

## Claim as understood

For a finite MDP with finite expected absolute rewards, either discounted or with every deterministic stationary policy proper, start from a finite deterministic estimate. Use initial-visit updates, greedy policies with inertia, and conditionally unbiased sampled returns with a deterministic uniform variance bound. The deterministic rates satisfy `0 < alpha_k <= 1`, divergent sum, square-summable squares, and the stated uniform bound on future rate increases. Initial actions are uniform within each chosen state, while the state distribution may depend on the history and selected policy, may be zero at some iterations, and need only give every pair infinite accumulated expected learning weight almost surely.

Under these assumptions, the action-value target changes finitely often almost surely; the estimates converge almost surely to optimal action values; all sufficiently late greedy policies are optimal; and uniqueness of the optimal action at every state makes the policy eventually constant. No positive uniform lower bound on state sampling, bound on waiting times, or independence of successive progress events is claimed or needed.

## Assessment and checks

### Foundation and dependency contracts

The two histories are consistently ordered as `F_k subset F'_k subset F_{k+1}`. The policy, sampling distribution and current estimates are known at `F'_k`, and the sampled return is the remaining episode randomness. The return moment assumption therefore yields the asserted combined-noise conditional mean and second-moment bound. The indicator update representation is used only in its initial-visit setting in the stochastic theorem.

The fixed-target calculation in `z-appendix.tex:65–86` is valid for the artificial averages driven by the actual sampled indicators and centered returns: the squared-error coefficient is at most `1 - alpha_k sigma_k(s,a)`, with a summable variance error. Infinite accumulated learning then forces the limiting squared error to zero. The countable intersection over deterministic restarts and the finite sets of policies and pairs licenses the later pathwise choice of a restart and target. The comparison recursions preserve order because `alpha_k u_k` lies in `[0,1]`; they give the stated recurrent-target coordinate bounds without using boundedness to prove boundedness.

A persistent target need not mean a persistent selected policy. The proof correctly chooses a recurrent policy whose target equals the constant target, passes its greedy inequalities to the estimate limit, and then applies self-greediness for optimality. This also avoids incorrectly inferring policy optimality merely from equality of action-value targets, which would be problematic, for example, at discount zero.

The strict policy-improvement implication has the appropriate direction: weak statewise policy improvement plus different action-value functions implies strict improvement in at least one state. Equal state-value functions would imply equal action-value functions by the one-step identity. In the mean-field calculation, the zero-update-probability case is separately covered by inertia; the positive case divides only by a positive coefficient bounded by one.

### Stopped gaps and preservation

In `def: gap variables`, the reference policy and its bad pairs are fixed by the starting history. Before `tau`, the target remains its action-value function even if selected policies change. Uniform action sampling then yields the gap recursion with the common per-action state probability.

The variance bound `2(c_v + 4K^2) sigma_k(s)` is justified by the disjoint initial-pair updates. Before exit, each target-estimate difference has magnitude at most `2K`; the variance of the signed update is bounded by its second moment. The norm is explicitly the sup norm in `1-introduction.tex:118`, so these coordinate bounds and the later fixed-`K` containment argument are consistent.

For `lem:barrier`, stopping retains the update at index `tau wedge zeta_r - 1`, so the crossing event really includes the endpoint. Before reaching `delta`, the drift is at least `3 delta alpha_k sigma_k(s)`. Clock stopping has overshoot at most `c_alpha alpha_{t'}`; hence the retained noise variance is bounded by `c_xi c_alpha alpha_{t'}(b + c_alpha alpha_{t'})`. The dyadic estimates sum to the stated first constant: the initial contribution is bounded by 4 times the common factor and the remaining contributions total at most 16 times that factor.

After reaching `delta`, the convex mean update cannot move a gap initially at least `delta` below `delta`. The last-index argument is pathwise and does not condition at that generally non-stopping index. A crossing forces a noise excursion of at least `delta/2`, giving the stated square-tail term. Conditional maximal estimates, finite-horizon limits, random restart times and history-measurable thresholds are justified in the appendix. Neither part requires state visits to occur within a bounded time.

### Seed and auxiliary probability law

Each requested update either raises the reference estimate or lowers a bad competitor. The stated inequalities give at least `c_s alpha_k` gap growth, cannot reduce another reference gap, and preserve the reference action by inertia. Processing/skipping the finite action lists therefore gives both the request count and the seed margin. Rate comparison is used in its valid direction: every contributing earlier rate is at least `alpha_{T_s}/c_alpha`. A state finishing at the stopped endpoint still retains the reference action.

The conditional one-sided return bound is valid, including zero return variance. Conditioning on the selected state incurs only the uniform-action factor, so the lower bound `p_0` is independent of how rarely the state is selected.

In `lem:measure`, the likelihood factor has conditional mean one given the history and selected state. The total number of requests is deterministically bounded, so the likelihood process is uniformly bounded, converges in mean, and defines a law absolutely continuous with respect to the original law. This verifies the transfer bound for every future event, not just finite seed events. The random-start construction preserves these identities on the individual finite start events.

The identity `E[L_infinity | F'_{k+1}] = L_{k+1}` is the key conditional-law check: later requests average out even if they depend on the current return. Since the current factor is one when a completed state is selected, its conditional action/return law is unchanged. State-selection probabilities are also unchanged. Thus a completed state's gap has precisely the recursion and conditional moment bounds needed by preservation while other states are still being seeded. There is no unsupported independence or conditioning on eventual seed success.

### Positive progress and global convergence

The choice of `N` first and `k_0` second is uniform over reference policies, stopping starts and deterministic restarts for a fixed `K`. The condition `N alpha_j <= 2c_alpha` holds at every `j >= k_0`, in particular at the random finite completion time. It consequently converts the seed margin into the required bound on the learning-rate/gap ratio.

Preservation is applied only on `T_s < tau wedge zeta_r`; that event is known at `T_s`. Averaging the conditional estimate and summing over finitely many bad pairs bounds any completed-gap loss by one half. Unfinished states, and states completing exactly at the endpoint, retain their reference actions. A finite transition before exit therefore satisfies the policy-improvement inequalities and is strict because its target differs. An exit after a failed finite transition is correctly not counted as success for that interval. The empty-bad-pair case is also covered.

The repeated-progress argument uses a uniform conditional bound at each finite continuing transition. Its induction permits branches to stop and never conditions at an infinite time. Strict improvement in the componentwise state-value order cannot recur for `|P|` consecutive transitions among finitely many deterministic policies. Therefore each block has conditional stopping probability at least `p^{|P|}`, and the geometric survival bound excludes infinitely many transitions before exit. Failed transitions may worsen the policy without invalidating this fresh-block argument.

Finally, the recurrent-target coordinate box lies inside the sup-norm ball of radius `max_pi ||q_pi||`. Convergence to that box implies eventual containment in every fixed larger `K`, which is stronger than pathwise boundedness alone. The countable intersection over deterministic restarts is taken before choosing the pathwise restart with no subsequent exit. Persistent-target convergence then yields the theorem, and finite positive optimal-action gaps exclude every suboptimal action from sufficiently late greedy selections.

## Findings and responses

No blocking or nonblocking correctness findings were identified in this independent review. There are no finding IDs to reconcile or resolve from this round. No author response or older finding was used to obtain the pass.

## Scope, limitations and version effects

This is an agent correctness assessment of the current assembled proof, not a formal certificate. Standard finite-MDP policy improvement/self-greediness and the supermartingale convergence theorem were checked for the required hypotheses as used here; their external source texts were not re-audited. No numerical experiment was needed or used to substantiate almost-sure claims. Examples, empirical statements, novelty comparisons, bibliographic accuracy and visual typesetting remain outside this assignment.

The pass applies to the exact frozen mathematical sources identified above. It was established independently and is not a carry-forward of a prior local pass. Changes to the standing assumptions, stopping conventions, conditional law construction, preservation estimate, seed procedure, progress event or global restart argument require review of the affected chain. Earlier findings can be supplied for a separate reconciliation if the writer needs one; none were necessary to assess this version.

## Separate historical reconciliation

Date: 2026-10-12. After preserving the independent report above, the writer authorized inspection of only `2026-10-12-preservation-first-correctness.md`, including its historical reconciliation (SHA-256 `c3b99963c2a6cdd09752ee1b49487357d97263d1783ae91245c447a2d543ffc3`), and `2026-09-28-source-checks.md` (SHA-256 `9b35acb5aaad913a93ab11a9b2bb7fb52054b1e4604bfc94d4baacf76e9c2bb3`). No additional historical report, exposition note, writer record or external source was opened. The earlier findings below are known through that authorized reconciliation; their current mathematical dispositions are verified against the current manuscript checks recorded above.

| Earlier issue | Current assembled verification and disposition |
| --- | --- |
| COR-R1-01: gap domain outside the stopped interval | Gap variables are defined for every `k >= t`; only the recursion and moment guarantees are restricted to the stopped interval. Hitting times consequently refer to defined quantities. Resolution remains applicable. |
| N-REST-01, N-REST-03, N-REST-04: random boundedness, distance convergence and norm | The comparison proof establishes convergence to the coordinate box, and the declared sup norm puts that box inside the deterministic target bound. This justifies eventual containment for every larger fixed `K`, without replacing random boundedness by a deterministic bound. Resolutions remain applicable. |
| N-REST-02, N-REST-05, N-REST-06, N-REST-07: restart, infinite endpoints and semantic qualifications | Deterministic restarted transitions and infinite endpoints are explicitly covered. The fixed-target countable intersection precedes pathwise restart selection; state values and pairwise return perturbations have distinct domains; return moments are required only at positive-probability sampled pairs. The recorded mathematical resolutions remain applicable, without constituting a separate notation review. |
| Earlier maximal-event, auxiliary-law, one-sided-bound and drift checks | The independent assembled checks above verify the clock overshoot, strict clock bands, endpoint increment, averaging of future likelihood factors, conditional one-sided bound including zero variance, and `3 delta` drift. The recorded clearances remain applicable. |
| COR-GP-01: proposed extra `c_alpha` at seed completion | The late-time bound `N alpha_j <= 2c_alpha` holds for every deterministic integer `j >= k_0`, hence also at every realized finite completion index. No rate comparison is needed to substitute that index. The ratio bound has the stated `c_alpha^2` factor; the earlier objection remains dismissed. |

The source record documents independent inspection of *Neuro-Dynamic Programming*, Section 2.2.1, Definition 2.1 and equations (2.7)–(2.9), for the finite proper-policy absorption tail, and Proposition 4.2 for the supermartingale argument. These contracts fit the current uses: bounded rewards plus the geometric tail give finite return second moments, with uniformity supplied by finitely many deterministic policies and initial pairs; the fixed-target squared-error process has the required conditional drift inequality and summable error even with adaptive, potentially vanishing sampling probabilities. Existing source clearance therefore remains applicable. The retained external-source digest is `976fb3d960a5cc004c8d8917abbd5a2bded80848c02bade2037fcf2380789335`; this reconciliation does not claim a new page-level source audit.

The episodic variance statement continues to rely on the proper-policy source, not on Tsitsiklis's discounted argument. Kushner–Yin and Borkar remain methodological citations; the manuscript supplies the actual probability and convergence estimates. The authorized source record does not establish a separate source audit of Howard's theorem, which remains the standard dependency assessed for applicability in the independent report.

**Reconciled verdict: pass.** No relevant resolved issue is reopened, no new finding is added, and the recorded dependency-source checks remain applicable to the current assembled assessment. This conclusion supplements rather than replaces the independent proof audit and its stated limitations.
