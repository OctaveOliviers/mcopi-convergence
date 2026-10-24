# Update-scope feasibility review

## Assignment and provenance

- Review ID: `update-scope-check-2026-09-26`.
- Role: independent correctness checker; initial bounded feasibility audit, not an assembled-proof review.
- Reviewer: `/root/update_scope_check`, GPT-6 Astra, high reasoning effort, started with no conversation history.
- Scope: PDF Sections 1-3 and active JMLR definitions of visit rules, update probabilities and relevant probability-proof arguments. No manuscript edits.
- Guides: correctness-checker, reviewing-principles, notation, review-record.
- Excluded context: SPEC, STATUS, writer notes and other reviews. The reviewer reported that extraction included extra text from page 14, but no finding relies on Section 4 or its unreviewed examples. This is scope over-read, not exposure to excluded writer material.
- Base commit: `63d4d97e6d2ffba4d605f7e4419ca79ce031c6ea`.
- PDF: `/Users/octaveoliviers/Downloads/mces_td_sampled_retry_updated.pdf`, SHA-256 `b3e27a4ae8c78d3fa4ac6797abbca2ffacc420c96e9142f0223922b76e6cf500`.
- `2-mcopi.tex`: SHA-256 `e46e894fb9404b23506a593ccb9998d629daf5e4b971bffa89b2ab8f055271f9`.
- `results/2-probability-to-improve.tex`: SHA-256 `3ba0e0fa0da508ae640e579a05d7d8dbe7e426c65352c177f8ef0419a608d850`.
- The two repository sources remain unchanged and recoverable from the base commit; the supplied PDF remains unchanged at the recorded path.

## Assessment

**Changes-needed for claiming the proposed extension.** Both tie rules are explicitly covered by the reference architecture. Equal conditional actual update probabilities suffice for several analytic components, but do not establish its seeding and change-of-measure components. The reviewer derived an actual first-visit example defeating the existing safe-seed construction. This is not a counterexample to convergence; convergence under the proposed generalized assumptions remains unresolved by this audit.

This record preserves the reviewer's findings and distinguishes the writer's subsequent arithmetic check. No complete theorem, notation review or exposition test has passed.

## Findings

### U1: Both tie rules are covered, with separate retention proofs

Correctness verification; nonblocking; **answered by reviewer**, 2026-09-26.

Locations: PDF Section 2.2, equations (3)-(4), p4; Section 3.1, p6; Lemma 9, p11; Lemma 10, pp11-12; Lemma 11 endpoint argument, p13.

The architecture permits fixed priority orders, including initialization, or full inertia retaining the previous action whenever it remains greedy. Verification differs at retention. In the mean field, both rules retain the action at an unchanged state. During seeding, inertia retains the reference action because it remains greedy. For fixed priorities, the reference action initially has highest priority among maximizers; leaving the table unchanged, raising that action, or lowering a competitor cannot introduce a higher-priority maximizer.

Fixed priorities are not inertial under arbitrary updates. After this local verification the architecture is shared: absolute continuity preserves the chosen rule, barriers protect completed states, and the finite-target argument counts target changes. Full inertia needs no independence between statewise tie choices. This review does not certify fresh random tie-breaking under the relaxed sampling assumptions.

### U2: Equal actual rates extend drift, stability and the barrier

Supporting result; nonblocking; **answered within stated hypotheses by reviewer**, 2026-09-26.

Locations: PDF Lemmas 5-8, pp6-9; equations (20)-(21), p10. JMLR `2-mcopi.tex`, lines 373-416 and 450-454.

Let the conditioning history include the frozen policy and sampling choices. For binary update indicators, assume `E[u_{k+1}(s,a) | F_k] = mu_k(s)` for all actions at each state, with selected-update moments `E[v_{k+1}(s,a) | F_k, u_{k+1}(s,a)=1] = 0` and conditional second moment at most `c_v`. These statements are required only on positive-probability update events.

The mean-field coefficient remains common across actions. Lemma 5 already permits jointly sampled indicators. Coordinatewise filtering and stability in Lemmas 6-7 extend with `sum_k alpha_k mu_k(s) = infinity`. On a constant-target interval the gap drift remains `E[Delta D_k | F_k] = alpha_k mu_k(s)(d-D_k)`.

Before exit from `||q_k||_infinity <= K`, let `C = c_v + (B+K)^2`. The bound `(X-Y)^2 <= 2X^2+2Y^2` gives `E[(Delta D_k)^2 | F_k] <= 4C alpha_k^2 mu_k(s)` without disjoint update events. The reference has `2C`; the barrier extends with the larger constant. No cross-coordinate independence is required here.

For ordinary first visits under a frozen policy, first hitting times and the Markov property give the unbiased suffix return conditional on visiting the pair. They do not generally give unbiasedness conditional on the entire episode mask or on another return's favorable event.

### U3: Genuine first-visit trajectories can defeat the safe seed

Definite obstruction to transferring this proof; **blocking for an unchanged proof**, not evidence of nonconvergence; **open**.

Locations: PDF favorable local update, p10; Lemmas 9-10, pp10-12; JMLR probability proof's concluding initial-visit discussion around lines 1541-1544.

Take two discounted states, `0 < gamma < 1`. At either state, action `g` gives zero reward and terminates, while `b` gives reward minus one and moves deterministically to the other state. Freeze the reference policy `(g,g)`, initialize all estimates to `c > 0`, and select `g` at both initial ties. Start at `(1,b)` or `(2,b)`, each with probability one half.

The episodes update respectively `{(1,b),(2,g)}` or `{(2,b),(1,g)}`. Thus every actual first-visit probability is one half. Returns are deterministic: minus one for the initial bad action and zero for the subsequent good action. The initial bad estimate decreases. At the other state, the good estimate decreases from `c` to `(1-alpha)c`, while its bad estimate remains `c`. That state's bad action becomes uniquely greedy. Every possible first episode loses a reference action and strictly worsens the target. No first episode preserves all unfinished reference states.

This is a standard frozen-policy first-visit construction, not an arbitrary update-mask example. Balanced rates can also be maintained adaptively:

| Selected policy | Initial-pair sampling law | Actual rate of every pair |
| --- | --- | --- |
| `(g,g)` | `(1,b)` and `(2,b)`, each one half | One half |
| `(g,b)` | `(1,b)` and `(2,g)`, each one half | One half |
| `(b,g)` | `(1,g)` and `(2,b)`, each one half | One half |
| `(b,b)` | Each good start one third; total probability one third over bad starts | One third |

Under `(b,b)`, bad starts continue indefinitely. Discounted returns and first visits are mathematically defined, as allowed by the reference's discounted setting. The local obstruction itself uses only two-step terminating episodes. No claim is made that this adaptive scheme fails to converge.

Resolution criterion: replace the protected-seed argument with a valid progress mechanism for such coupled episodes, possibly allowing temporary worsening transitions. Equal marginal rates alone do not recover the old retention lemma.

### U4: Selective conditioning needs an episode-level replacement

Unsupported extension; **blocking; open**.

Locations: PDF Lemma 10, pp11-12, and its use in Lemma 11, p12.

The reference conditions a requested initial-pair update while leaving completed states' conditional update laws unchanged. A first-visit episode can update unfinished and completed states together. Conditioning success can bias completed-state returns and invalidate their barrier hypotheses under the auxiliary measure.

Equal marginal probabilities do not preserve these conditional laws. A repair must supply an episode-level construction preserving the needed drift/variance estimates, or a different progress argument. The scalar barrier and a union bound do not supply this missing result.

### U5: Uniform initial sampling and uniform actual rates differ

Scope clarification; blocking if conflated; **answered by reviewer**, 2026-09-26.

Locations: PDF abstract/introduction, pp1-2; JMLR definition of `mu`, lines 450-454.

Under a frozen deterministic policy, a non-policy action can occur only at the initial pair. Thus `mu_k(s,a) = sigma_k(s,a)` when `a != pi_k(s)`, while the policy action also receives downstream visits. The PDF's advertised counterexample with uniform initial actions therefore does not establish failure with uniform actual first-visit rates. Its construction and proof were outside this audit. No asymptotic counterexample to the actual-rate extension was obtained.

### U6: Every-visit multiplicity and bias require separate treatment

Clarification; nonblocking for the initial-visit theorem; **answered by reviewer**, 2026-09-26.

Location: JMLR `2-mcopi.tex`, lines 375-405.

Every-visit updates generally do not fit the same binary-indicator recursion. Sequential updates have effective coefficient `1-(1-alpha_k)^{N_k}`, with weights depending on count and order. A within-episode return average divides by a random count and need not be unbiased conditional on visiting. An additive sum of visit residuals can have a count-weighted unbiased mean, but its drift uses the expected count rather than the probability of any visit; corresponding stability and variance assumptions are needed.

For a finite-episode example of random-average bias, one state pays reward one per visit and terminates independently with probability `1-p`, where `0 < p < 1`. At discount one, the visit count `N` is geometric and the value is `1/(1-p)`. The within-episode average of all suffix returns is `(N+1)/2`, whose expectation differs from that value. This does not assert that every implementation of every-visit Monte Carlo is biased or inconsistent; the update rule and weighting matter.

## Writer response and additional checks

The writer accepts U1-U2 and U5-U6 as the bounded review's conclusions, and keeps U3-U4 open. No broader convergence claim is made. The user selected inertia for the main presentation and requested fixed-priority coverage where justified; the review supports that local scope decision.

After receiving the report, the writer checked U3 using exact rational arithmetic and deterministic trajectory enumeration for all four policies. All four rows of the balanced-rate table were confirmed. With `gamma = 1/2`, `c = 1`, `alpha = 1/4`, and start `(1,b)`, the updated table in order `(1,g),(1,b),(2,g),(2,b)` is `(1,1/2,3/4,1)`. The new policy is `(g,b)`, and the sum of its target coordinates falls from `-2` to `-5/2`. This verifies the local calculation, not nonconvergence or a resolution of U3-U4.

A separate preliminary writer concern from the original assessment remains unreviewed: JMLR `2-mcopi.tex` line 110 equates state-value and action-value ordering in both directions. At discount zero, all policies have identical action-value functions while their state values can differ. Do not reuse the reverse implication without correction or justification. This is not an independently resolved finding.

## Version and dependency effects

No manuscript source changed. The original theorem remains unreviewed. The findings constrain a prospective extension only. A revised multi-update progress argument must be independently reviewed, then composed with the established dependencies; this bounded assessment does not replace complete correctness, notation or exposition review.
