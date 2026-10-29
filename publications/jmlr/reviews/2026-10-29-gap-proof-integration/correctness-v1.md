# Independent correctness review: gap-preservation proof integration, v1

## Assignment and provenance

- Review ID: `gap-proof-integration-correctness-v1`.
- Role: independent correctness checker; initial review of this supplied increment, not a fresh assembled-paper review.
- Result: `lem:barrier` (Gap preservation), including both cases and the locally integrated martingale arguments.
- Date: 2026-10-29.
- Reviewer: `/root/integrated_gap_correctness`; routing supplied in the assignment: GPT-6 Astra, high effort.
- Independence: started without the writer's conversation, drafting rationale, prior review findings, or expected exposition answers. Read the correctness-checker instructions, their required reviewing/notation guides, and the review-record schema. Did not read STATUS, SPEC, author notes, other review records, or the `raw`/`before` manuscript versions; did not edit the manuscript or delegate.

The reviewed artifact is `v1/active/` in this review directory, with base commit `d7bb9f821f1c16cdfd03f80ba7c15a7a68eb05e1` as recorded in `v1/VERSION.md`. All 13 active-file SHA-256 digests were independently recomputed and matched `v1/MANIFEST.sha256`.

Version metadata digests:

- `v1/VERSION.md`: `2bd920f3cef79a3924c42cce2b4d26d10aca39da1d140744a45bc3bb89828358`.
- `v1/MANIFEST.sha256`: `9f877a22736e1d9e13d8fc1ec2f2dedcdad4ddd642ebc0abb34a0f2a54276fbe`.
- Main reviewed source, `active/results/2-probability-to-improve.tex`: `167457040d1ea196991348c0b66f94e3a041b11434e639d7d36da2bd9cb8a875`.
- Principal incoming source, `active/2-mcopi.tex`: `2420fd6fdc434b65be3e57fda7b82aa9404ef124d7dd808df88427653cb1790a`.

The retained active source preserves source line numbers. The principal scope is `active/results/2-probability-to-improve.tex`, lines 20–330: the gap definition, recursion and conditional moments, definition of delta, lemma statement, and complete proof. Incoming context inspected in `active/2-mcopi.tex` includes the update/noise definitions, histories, learning-rate conditions, per-action probabilities and standing assumptions. Relevant macros and inclusion context in `active/z-maths.tex`, `active/jmlr.tex` and `active/3-results.tex` were inspected. The start of `active/results/3-convergence.tex` was read only to identify the immediate use and its dependency contract; the auxiliary-law proof and subsequent convergence chain are not approved by this review. A targeted search of the active appendix did not constitute a review of its results. The manifest identifies the exact supplied reference and macro versions; no external reference was needed to check the local argument.

## Assessment

**Verdict: pass, within the assigned local scope.** The proof establishes the displayed bound in `eq:barrier` under the lemma's stated gap-recursion and conditional-moment hypotheses and the predictable probability conventions inherited from the definitions. No blocking error, additional mathematical assumption, or unresolved local step was found. This is not approval of the full convergence theorem, of the auxiliary probability law, or of historical equivalence to an earlier manuscript version.

### Claim as checked

Fix a gap against a reference action selected at a stopping time, with positive target gap at least `4 delta`. Let `T = tau wedge zeta_r`, and let `t'` be a finite stopping time with `t' <= T` and positive starting gap `d_(t')`. Learning rates are deterministic, in `(0,1]`, and square summable. The probabilities `sigma_k(s)` are known at history `F'_k`, lie in `[0,1]`, and the gap recursion and conditional noise mean/second-moment bounds hold on the active interval `t' <= k < T` under the probability law being used.

Conditionally on `F'_(t')`, the probability of any finite time `n` in the closed interval `[t',T]` with `d_n <= 0` is bounded by

`(4 c_xi / (3 delta)) (bar_alpha_(t') / d_(t')) + (4 c_xi / delta^2) sum_(k >= t') alpha_k^2`.

The inequality is almost sure as a conditional-probability statement on the admissible starting histories. There is no assertion about hitting a value at time infinity, no requirement that the right-hand side be at most one, and no claim of a bound uniform over all positive starting gaps independently of their sizes.

### Dependency and measurability checks

1. **Incoming constants and recursion.** The finite nonempty collection defining delta consists of strictly positive target gaps, so delta is positive and each relevant target gap is at least `4 delta` (lines 67–72). Equal per-action probabilities at a state give the displayed scalar gap recursion while the target is unchanged (lines 49–62). The combined-noise definition is consistent with this recursion. For the ordinary update law, the difference of the two possible gap updates has disjoint update indicators. Its conditional variance is at most its conditional uncentered second moment, giving the stated factor `2(c_v + 4K^2)` under the pre-exit estimate bound. The lemma explicitly takes the recursion and these conditional moments as hypotheses under whichever law is used; validity of an auxiliary law is a separate dependency.

2. **Predictability and stopping.** The history convention `F_k subset F'_k subset F_(k+1)` makes the next gap value observable by the next primed history. Target-change, exit and first-nonpositive times are stopping times in this filtration. On the active interval, the fixed reference policy and pair are known from the starting history. Hence `1_{k<eta}` is known at `F'_k`. The stopped increment has mean zero and conditional second moment at most `c_xi alpha_k^2 sigma_k(s)` (lines 113–139). No conditioning on future containment or future success is used.

3. **Inclusive endpoint.** On an event whose first nonpositive gap is at `n <= T`, the stopping time eta equals n. Every increment with index `t' <= k < n` is retained, in particular the update with index `n-1` ending at the endpoint when `n=T`. Nothing requires a moment bound for the update beginning at T. This matches the lemma's closed endpoint exactly.

### First case: closure before reaching delta

For the first nonpositive time n in this case, every earlier active gap is in `(0,delta)`. Thus each drift increment is at least `3 delta alpha_k sigma_k(s)`, and summation gives `M_n <= -(d_(t') + 3 delta A_n)` (lines 141–146). This lower drift estimate only needs to hold on the event being bounded; the stopped martingale itself need not stop when the gap reaches delta.

With `b_n = d_(t') + 3 delta A_n`, the denominator `b_(k+1)` is strictly positive and already known at `F'_k`. The summation-by-parts identity at lines 158–168 has the correct indices and endpoints. Since the internal differences of b are nonnegative and telescope to at most b_n, it gives `|M_n| <= 2 b_n max_(t'<=m<=n)|Z_m|`. Consequently the downward crossing forces a finite crossing of magnitude `1/2` by Z. The factors of two and four used subsequently are valid.

The rescaled process need not be globally square integrable when its positive starting gap is arbitrarily small. The proof addresses this, rather than assuming integrability: on the starting-history event `d_(t') >= epsilon`, the squared rescaled increments are bounded conditionally by `c_xi alpha_k^2 / epsilon^2` (lines 202–217). Their sum has finite expectation. Multiplication by this event gives a square-integrable martingale. Applying the ordinary maximal inequality after additionally multiplying by any starting-history event establishes the conditional version. Conditional orthogonality of distinct increments justifies replacement of the terminal second moment by the sum of squared increments.

On each cutoff event, the displayed conditional quantities involving Z equal those of the localized martingale. The nonnegative conditional expectations remain meaningful even if their unconditional expectations without the cutoff are infinite. The countable cutoffs `epsilon=1/j` cover all positive starting gaps, so the localization is removed without asserting a uniform inverse-gap bound (lines 219–234). For a random finite start, decomposition over `{t'=j}` is legitimate because that event is known at time j; the argument does not require a deterministic upper bound on t'.

The passage from finite horizons to existence of a finite crossing uses increasing events and nonnegative sums, so conditional monotone convergence applies (lines 236–247). The tower property applies to the nonnegative squared increments, and the starting gap and `bar_alpha_(t')` are measurable at the starting history. Finally, the right-endpoint rectangle comparison has the correct direction because `(d_(t') + 3 delta x)^(-2)` decreases. The pathwise integral over consecutive clock intervals is at most its integral over `[0,infinity)`, equal to `1/(3 delta d_(t'))`. This verifies the first term with its stated constant (lines 250–285), including when the accumulated clock has a finite limit.

### Second case: closure after reaching delta

Choose the last preceding index ell with gap at least delta. This index exists and is finite on the event in question; it is used pathwise and is never treated as a stopping time. The noise-free update at ell is a convex combination of `d_ell >= delta` and the target gap at least `4 delta`, because `0 <= alpha_ell sigma_ell(s) <= 1`. It is therefore at least delta regardless of how far d_ell overshoots delta. All subsequent pre-closure gaps are in `(0,delta)`, so their drifts are nonnegative. Summing yields `M_n - M_ell <= -delta`, which implies a finite crossing of magnitude `delta/2` by M (lines 289–315).

The unscaled stopped martingale has square-summable increments with conditional second moments at most `c_xi alpha_k^2`, so it needs no inverse-gap localization. The same conditional maximal inequality and increasing-horizon argument give exactly the second term of the claimed bound (lines 317–328). The two cases partition the event according to whether any pre-closure gap reached or exceeded delta; adding their bounds is valid.

### Boundary cases and absence of stronger assumptions

- Starting at the endpoint with a positive gap gives an empty closure event and zero stopped increments.
- A starting gap exactly delta, or greater than delta, is covered by the second case whenever a later closure occurs. A later value exactly zero counts as closure; a value exactly delta counts as reaching the upper level.
- A one-step closure, simultaneous exit and target change, and closure at either stopping endpoint retain the necessary final increment.
- Infinite endpoints cause no difficulty: only finite crossing times are counted, and the finite-horizon limits are justified. No almost-sure finiteness of the endpoint is used.
- Zero probabilities and arbitrarily long waits are allowed. Zero clock increments contribute zero to both the variance estimate and integral comparison. Divergence of the clock, a positive sampling-probability lower bound, eventual monotonicity of learning rates, and the learning-rate comparison condition are not used in this lemma.
- Square summability and deterministic rates suffice for the integrability and tail estimates employed here. The proof does not assume independence between increments, states, stopping times, or starting gaps. The optional randomness of the reference policy is known at the start and does not change the uniform constants.

No numerical or simulation checks were used: all checks above are algebraic, pathwise, or conditional-expectation arguments. Simulation would not establish the conditional infinite-horizon assertion.

## Findings and responses

No findings were opened. There is no author-response disposition or self-verified revision in this record.

## Version and dependency effects

This pass applies to the exact retained v1 source and the stated incoming contracts. The proof establishes the v1 lemma conclusion without additional hypotheses. No earlier manuscript version was supplied as an allowed input, so this review does not independently certify that the statement or other files were historically unchanged. It does not carry forward or resolve any previous review.

The immediate downstream use in the positive-probability-of-improvement lemma may rely on this local bound once its own auxiliary-law hypotheses are established. That law, seeding, boundedness removal, and the assembled convergence argument remain outside this verdict. Changes to the gap recursion/moments, predictable sampling conventions, restart/endpoint conventions, target-gap lower bound, or learning-rate hypotheses would require reassessment of the affected steps. The writer remains responsible for the durable STATUS entry and for determining the remaining review gates.
