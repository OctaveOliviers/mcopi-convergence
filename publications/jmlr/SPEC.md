# JMLR proof: working decisions

Updated 2026-09-26. The user's instructions settle the scope and algorithm choices below. The requested replacement is integrated and has assembled correctness, notation and clean fresh-reader clearance; see STATUS.md for the exact version and evidence. No scope decision or review gate remains pending. Any future strengthening of assumptions or weakening of conclusions must be surfaced before changing this agreed target.

## Agreed direction

Simplify the main proof while preserving the introduction, algorithm explanation and established notation, with targeted corrections. Keep initial-visit updates and full inertia: retain the previous action whenever it remains greedy. Cover fixed priorities briefly in the discussion if their local retention argument is verified. First-/every-visit extensions are deferred.

Preserve the combined stability–ODE discussion and reinforce it briefly in the introduction. Explain the connection to Kushner and Yin (2003), §5.4, and entries whose margins may vanish. Verify the exact attribution. Describe step regularity as sufficient for this proof, not necessary for algorithm convergence without a necessity result.

## Agreed target theorem

Retain finite state sets and finite nonempty action sets, with \(\gamma<1\), or \(\gamma=1\) and every deterministic stationary policy proper. Start from a finite deterministic table. Use initial-visit Monte Carlo updates and full inertia. The sampling law may depend on history and the selected policy, but almost surely

\[
\sigma_k(s,a)=\sigma_k(s)\ge0,\qquad
\sum_s|\mathcal A(s)|\sigma_k(s)=1,\qquad
\sum_{k\ge0}\alpha_k\sigma_k(s)=\infty\quad\text{for every }s.
\]

Returns are conditionally unbiased with a deterministic uniform conditional variance bound, given the post-selection history and sampled initial pair, on positive-probability pair events. Steps are deterministic, \(0<\alpha_k\le1\), square summable, and satisfy the screenshot condition:

\[
\exists C<\infty,\ k_0<\infty:\quad
\alpha_j\le C\alpha_k\qquad(j\ge k\ge k_0).
\]

Both constants are deterministic. This permits infinitely many increases, e.g. \(\alpha_k=(2+(-1)^k)/(k+3)\). Remove the positive sampling floor and former learning-rate comparability assumption; impose no finite waiting-time bound.

Intended conclusions on one probability-one event: \(q_k\to q_{\pi_*}\), finitely many changes of \(q_{\pi_k}\), and optimality of every sufficiently late selected policy. Claim eventual policy-label constancy only with unique optimal actions. Also establish mean-field convergence under the corresponding cumulative-learning condition. Fixed priorities require a separate local retention check; fresh random ties are outside this target.

## Proof increments and review order

| Unit | Required inputs and output | Reference / manuscript destination |
| --- | --- | --- |
| P1: foundations and mean field | MDP/update assumptions yield policy improvement, actual cumulative learning, stability, persistent-target convergence and deterministic convergence. | Lemmas 1–2, 5–7 and §3.1 / `2-mcopi.tex`, `results/1-mean-field.tex`, appendix. |
| P2: gap barrier | Stopped drift/variance bounds and weaker steps yield a conditional crossing bound uniform in restart time, including the endpoint. No divergent state clock needed locally. | `lem:barrier` / probability subsection. |
| P3: safe updates and conditioning | P1, full inertia and weaker steps yield safe unfinished states, completion margins and preserved completed-state return laws under the auxiliary measure. | `lem:seeds`, `lem:measure` / probability subsection. |
| P4: progress and convergence | P1–P3 yield uniform stopped progress; deterministic restarts and finite target ordering establish convergence. | `lem:progress`, `thm:convergence` / probability and convergence subsections. |
| P5: integration | Validated P1–P4 and checked citations support consistent theorem, introduction, methodology and discussion. | Active manuscript and assembled review. |

Start with P1, then P2/P3 independently, then P4, then P5. Develop revisions in `tmp/`, separately from the faithful reference. Integrate validated units. Require independent correctness, notation and fresh-reader checks of the same version, resolved blocking findings, and a successful build/render check. Retain existing result labels where their meaning survives.

Keep undergraduate accessibility: basic algebra, limits and probability; teach needed conditional-expectation, stopping-time and martingale facts. Preserve \(P(q)\), \(Q(\pi)\), \(q_{\pi_*}\), \(d_k(s,a)\), and the sampling/update distinction. Clarify existing pre-/post-selection histories without silently adopting the reference's convention. Main-text/appendix placement is editorial. No other publications, experiments or counterexample section are in scope.

## Records

Branch: `feature/simplify-jmlr-proof`, rebased onto `origin/main` at `63d4d97e6d2ffba4d605f7e4419ca79ce031c6ea`. The [reference workspace](tmp/simplified-proof-reference/README.md) preserves Sections 1–3, including two closing lines on page 14; its original assumptions remain unchanged. Transcription fidelity passed; mathematical correctness remains unreviewed. Sources, hashes, author-side technical findings and review evidence are recorded in [STATUS.md](STATUS.md) and its linked records.
