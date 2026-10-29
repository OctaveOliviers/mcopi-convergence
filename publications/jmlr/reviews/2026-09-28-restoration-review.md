# Independent restoration review

## Assignment and versions

Fresh independent reviewers received [restoration-v1](2026-09-28-restoration-v1/MANIFEST.txt), base `2fd2e18e4d0815dab88c4fe89e91deccaacb0073`: active manuscript, macros, bibliography, PDF, and directly inspected reference sources. Neither read raw drafts, SPEC, STATUS, writer notes, previous reviews or conversations. Main session remained sole writer.

- `restoration-v1-correctness`: `/root/restored_correctness`, requested GPT-6 Astra/high; independent full dependency-chain and advertised-scope review.
- `restoration-v1-notation-initial`: `/root/restored_notation`, requested GPT-5.6 Sol/high; reviewer self-reported GPT-6 with effort unavailable. Treat that identity discrepancy as a tool-report limitation. The initial acknowledgment-only response was not counted as a review; the continued assignment produced the actual independent review.

The checkers verified the frozen input hashes. All changed units and their dependent results were inspected; earlier A4 passes were not treated as approvals of this revision.

## Correctness report: pass, one nonblocking finding

The reviewer understood the theorem as initial-visit convergence for finite discounted or proper episodic MDPs, under conditional return moments, deterministic Robbins–Monro rates with bounded future increases, action-wise uniform starts, cumulative learning at every pair and inertia. Targets change finitely often; late selected policies are optimal; unique optimal actions imply label stabilization. The fixed-priority discussion is also supported.

Checks actually performed:

1. The strict policy-improvement argument uses equality of state values implying equality of action values, without its false converse. NDP §2.2.1 and Proposition 4.2 directly support the cited dependencies.
2. The fixed-target squared-error inequality uses predictable cumulative learning. Countable intersection over deterministic restarts, policies and pairs permits later pathwise choices of the recurrent-policy envelope; no conditioning on the future is introduced.
3. Mean-field algebra has the correct sign and divides only by positive update weights. Inertia handles zero weights. Finite strict improvements yield eventual constant targets, and divergent weights make the product tend to zero. A recurring greedy policy proves optimality.
4. Stopped gap variance is bounded by `2 sigma_k(s)(c_v+4K²)` using disjoint initial-pair updates. Both favorable-update cases increase the intended gap, preserve the other reference gaps and retain the reference action.
5. The bounded likelihood martingale is valid despite unbounded waiting times; future factors average out, completed-state laws are preserved, and the transfer bound has the correct direction and exponent.
6. Growth uses predictable stopping and the correct accumulated-learning overshoot bound. The dyadic coefficients sum as `4+16=20`. Lock-in uses the last visit only pathwise, with coefficient `16 c_xi/delta²`. Both retain the endpoint increment.
7. Choosing N before the late-start threshold gives uniform constants. Completed-state bounds are conditioned at their own stopping times and averaged back; no independence or simultaneous completion is required. The finite-policy block argument permits unsuccessful decreases, uses conditional lower bounds, and never conditions at an infinite transition time.
8. Consistent fixed priorities preserve local retention during the favorable updates and at unchanged states. The advertised mathematical scope matches the theorem.

Limitations: no experiment was rerun, the empirical averages were not validated, novelty was not exhaustively checked, and PDF appearance is a separate writer check. The review is not formal certification.

### COR-R1-01 — nonblocking domain clarification

Original locations: probability proof lines 40–45, 157, 192–193. Gaps are defined only through the stopped endpoint, while later hitting-time infima range beyond it. The stopped events are unaffected by arbitrary extensions, so the checker did not regard this as a mathematical blocker. Resolution: define the table difference for every k ≥ t and retain stopped ranges for the recursion/moments. The checker assessed this proposed repair as valid, but exact revised-source verification was pending.

Author response: implemented in restoration-v2. Status: **answered**, awaiting exact-version verification.

## Notation report: changes needed

Full active manuscript, macros, figure notation, bibliography and all 27 PDF pages were inspected. State-dependent action domains, per-pair sigma_k(s), inertia, constants and endpoint inclusion were otherwise coherent. Findings below retain their initial severity; an author response alone does not close them.

### N-REST-01 — blocking semantic type

Original location: `2-mcopi.tex:628–645`. “Almost surely finite constant c_Q” could be misread as a deterministic uniform bound, while the proof establishes pathwise boundedness with potentially unbounded returns. Required clarification: random variable or exact almost-sure supremum statement.

Author response: removed the otherwise unused c_Q and wrote `sup_{k≥0} ||q_k|| < infinity` almost surely. Status: **answered**.

### N-REST-02 — blocking transition-time scope

Original locations: `2-mcopi.tex:712–723`; convergence proof lines 62–65. Definition fixes t_0=0, but final proof restarts t_0=r. Its finite-block notation also contains infinity−1. Required clarification: parameterize the original definition by the start or define a new restarted sequence, and state finite-index blocks explicitly.

Author response: Definition now permits deterministic r≥0, defaults to zero, and states blocks as integer times t_n≤k<t_{n+1}, with the infinite-endpoint case explained. Final proof explicitly invokes that definition with starting iteration r. Status: **answered**.

### N-REST-03 — nonblocking set-convergence meaning

Original location: `2-mcopi.tex:628–640`. “Converges to the set” leaves distance convergence versus eventual membership implicit.

Author response: stated that distance to the displayed set tends to zero, without introducing a new symbol. Status: **answered**.

### N-REST-04 — nonblocking norm convention

Original locations: introduction 112–119 and sup-norm uses throughout proof/appendix. The introduction defines the unsubscripted supremum norm, while later passages also use an infinity subscript.

Author response: kept the original unsubscripted supremum norm everywhere in the active mathematics. Status: **answered**.

### N-REST-05 — nonblocking v notation overload

Original locations: setup 90–114 and 292–371, seed proof and appendix. State values v_pi and return noise v_k have different domains and subscripts. Reviewer proposed renaming noise or explicitly declaring/justifying the overload.

Author response: request dismissal. Both symbols are inherited from the original paper, which the user explicitly asks to preserve. The first uses identify state values v_pi(s) and the perturbation v_k(s,a); policy versus time subscripts and one versus two arguments distinguish them. Renaming would change established notation throughout otherwise sound sections. No occurrence uses an unqualified v ambiguously. Status: **answered**, pending reviewer disposition.

### N-REST-06 — nonblocking introductory update scope

Original location: setup 289–301. The preliminary update equation did not explicitly distinguish updated pairs from other pairs; the complete indicator equation appeared later.

Author response: specified the chosen pairs appearing in the episode and stated that all other estimates remain unchanged. Retained the original stepwise introduction. Status: **answered**.

### N-REST-07 — nonblocking reward/restart letter reuse

Original locations: setup reward r_t and deterministic restart r in proof/appendix. Reviewer proposed a distinct restart index such as k_r.

Author response: request dismissal. The standalone r is introduced locally and explicitly as a deterministic iteration; the reward sequence r_t occurs only in the earlier MDP description and value definition. No expression has two meanings. Replacing r with a new decorated index would complicate already nested stopped-gap notation without resolving a concrete inference ambiguity. Status: **answered**, pending reviewer disposition.

## Additional writer checks and next version

One overfull inline tuple in the growth proof was split into displayed choices. Restored but newly reintroduced abandoned source comments were removed, and touched-file trailing whitespace was cleaned; neither change alters active mathematical content. The source gap-domain extension, generalized transition definition, explicit pathwise/set bounds, norm unification and introductory update qualification require reviewer verification on restoration-v2. No substantive theorem, assumption, constant or convergence step was changed.

## Verified v2 dispositions

`restoration-v2-correctness`: **pass**. The independent checker compared every active file with v1, inspected every substantive change and verified all active/PDF manifest entries. COR-R1-01 is resolved. The explicit a.s. supremum and distance-to-box statements match the comparison proof; fixed-K eventual containment uses convergence to the box, not merely pathwise boundedness. The generalized deterministic restart remains covered by the appendix's countable intersection. Norm/update/display changes preserve meaning, and full mathematical clearance carries forward. No new findings.

`restoration-v2-notation-followup`: **pass**. The independent checker verified the frozen active sources and PDF, reassessed each issue and found no new findings:

| Finding | Independent disposition |
| --- | --- |
| N-REST-01 | Resolved: exact pathwise supremum, unused c_Q removed. |
| N-REST-02 | Resolved: parameterized transition start, finite/infinite blocks and later uses agree. |
| N-REST-03 | Resolved: distance-to-set meaning is explicit. |
| N-REST-04 | Resolved: the original unsubscripted supremum norm is consistent throughout. |
| N-REST-05 | Dismissed after reassessment: inherited v_pi(s) and v_k(s,a) have explicit distinct domains/roles; no ambiguous unqualified v. Renaming would create more burden. |
| N-REST-06 | Resolved: chosen pairs and unchanged remaining estimates are explicit. |
| N-REST-07 | Dismissed after reassessment: earlier indexed rewards and later explicitly introduced deterministic restart have no overlapping formula meanings; decorating the restart adds avoidable notation. |

The notation checker additionally verified the expanded gap domain, stopped recurrence/moments, endpoint inclusion and the rendered growth tuples. V2 PDF SHA-256: `d86eab4668cf34755885d9c47028d8de9deca84e4e4ec446fc43482b0b6aaa7a`. All eight initial findings are now independently resolved or dismissed. Exposition review is a separate gate.

## Final substantive version: restoration-v3

The intermediate `restoration-final` contains only whitespace preservation relative to v2. Its mathematical tokens and extracted PDF text match v2; the notation checker independently found all 27 page renders identical. It is historical, superseded by [restoration-v3](2026-09-28-restoration-v3/MANIFEST.txt).

`restoration-v3-correctness`: **pass**. The independent checker verified every active input and PDF hash, compared all active files with v2, and checked the changed stopping argument. Stopping the noise sum when accumulated learning first reaches b has overshoot at most c_alpha alpha_t'. Its variance sum has the same deterministic conditional bound. The new event A_s(t',n)<b is contained in the previously bounded stopped-supremum event, and each clock band has precisely that strict upper bound. Thus the original constants and every downstream growth, lock-in, transfer and convergence estimate remain valid. The likelihood introduction describes one-update conditional reweighting accurately, without replacing it by global future conditioning. No new findings; COR-R1-01 remains resolved.

`restoration-v3-notation`: **pass**. The independent checker verified the declared b/z/time domains, retained-increment sum, direct maximal event and each clock-band substitution, with no remaining T(b) use. The reweighting introduction adds no symbol. Changed pages 15–16 and 25 render legibly and without collisions. All earlier finding dispositions carry forward.

PDF SHA-256: `0ef5abebce03a47c2a8cc9a0e9442290fb3823d6b117c16f56eece82b8eb3823`. There are no open mathematical or notation findings for v3. The final fresh exposition test is recorded separately.

## Restoration-v4 verification

`restoration-v4-correctness`: **pass**. The independent checker compared every active input with v3 and verified all active/PDF manifest entries. The one-sided calculation is valid, including c_v=0 (no denominator divides by c_v); complements produce the required weak inequalities. Conditional sampled-return application and the conditional uniform-action factor yield the same p_0 without independence. The explicit 3 delta drift explanation follows from the existing gap bounds, including endpoint crossings. No constant, hypothesis or downstream conclusion changed.

`restoration-v4-notation`: **pass**. Per-action sampling terminology is consistent with the definition of sigma_k(s). The local auxiliary X in the one-sided calculation has explicit type/mean/variance and does not escape that paragraph. The drift explanation and affected PDF pages 14–16 and 25 are correctly scoped and render cleanly. No new findings.

Current PDF SHA-256: `446c114389c3751d6a33405eaa62293681a150037e39b8431b7a28bccd7b976e`. Full-chain mathematical and notation clearance applies to [restoration-v4](2026-09-28-restoration-v4/MANIFEST.txt); all earlier versions are retained only as historical evidence.
