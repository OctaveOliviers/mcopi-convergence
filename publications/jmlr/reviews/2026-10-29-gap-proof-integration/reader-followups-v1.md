# Independent follow-up answers: integrated gap proof, v1

These answers follow the saved unassisted initial account for the same v1 manuscript and allowed dependencies. No reports, author notes, hints, corrections, or expected answers were supplied or read. I used my understanding of the manuscript; no additional external sources or agents were used.

## Question 1

> (1) Suppose d_{t'} is already at least delta, and the very next update makes the gap nonpositive. Identify the last-visit index used in the proof and explain whether its second-case estimates still apply.

The first nonpositive gap is then at `n=t'+1`, and the last preceding time with a gap at least `delta` is `ell=t'`. The second case includes this situation: reaching or exceeding `delta` can already hold at the restart.

The update from `ell` to `ell+1=n` has noise-free part

`(1-alpha_ell sigma_ell(s)) d_ell + alpha_ell sigma_ell(s) d_pi(s,a)`.

It is at least `delta`, because the two quantities being combined are at least `delta` and `4 delta`, respectively, and the coefficient is between zero and one. Thus

`0 >= d_n >= delta + (M_n-M_ell)`.

There are no subsequent updates to sum: the index range `ell<k<n` is empty. The proof's resulting inequality still holds, as does its conclusion that the noise must fall by at least `delta`.

In this example `M_ell=M_{t'}=0`, so in fact `M_n<=-delta`, stronger than the magnitude `delta/2` needed for the maximal-event bound. The increment ending at `n` is retained: the stopped sum uses `k<eta`, and here the contributing iteration is `k=t'=n-1<eta=n`, including when `n` is also the target-change or exit endpoint. Therefore the second-case probability estimate applies without a separate exception for a one-update crossing.

## Question 2

> (2) Could the proof instead treat that last-visit index as a new restart for the conditional maximal inequality? Explain what information that index depends on and how the manuscript actually uses it.

Not in the general second-case argument. The index `ell` is defined as the last time the gap was at least `delta` before its first subsequent nonpositive gap at `n`. To know that a particular high-gap time is the last one, one needs to know the future portion of the path up to that first closure, including that no later high-gap time occurs. This does not make `ell` a stopping time recognizable from the history at `ell`. A conditional maximal inequality valid at an ordinary stopping-time restart therefore cannot simply be applied with `ell` as its restart. Such conditioning could select paths according to their later noise and destroy the zero-mean property needed for the argument.

For the special path in Question 1, `ell` happens to equal `t'`, but that equality on a future-selected event does not justify using general last-visit indices as restart times. The original valid restart `t'` is already available.

The manuscript uses `ell` only to obtain a pathwise lower bound on how much the noise changes: `M_n-M_ell<=-delta`. It then bounds this difference by `|M_n|+|M_ell|`, hence by twice the maximum of `|M_m|` over the entire interval beginning at `t'`. That converts the future-dependent last-visit calculation into an event concerning a noise process already started and stopped from the admissible restart. The maximal probability estimate is conditioned on `F'_{t'}`, never on `F'_ell`. This is why the factor two is useful even though it makes the bound less sharp.

## Question 3

> (3) The first-case bound retains d_{t'} in its denominator. Explain separately what the epsilon cutoff establishes, what seeding establishes, and how a fixed positive probability of progress ultimately excludes endless target changes without assuming independence.

**The epsilon cutoff establishes applicability, not a useful uniform margin.** A positive random starting gap can be so small that the rescaled noise does not have a globally finite second moment. On histories where `d_{t'}>=epsilon`, its predictable denominators are at least `epsilon`, and its squared increments have a deterministic summable bound proportional to `alpha_k^2/epsilon^2`. This permits the square-integrable maximal-inequality argument. Restricting to known restart events, treating integer restart slices, and then using countably many positive epsilons extends the conditional inequality to every positive starting gap outside a null event. The cutoff is removed. It neither changes the actual gap nor eliminates `1/d_{t'}` from the final estimate. Waiting alone therefore need not yield a small failure probability when entry gaps shrink.

**Seeding establishes the margin that makes the bound useful.** Each state receives a finite budget of favorable updates, which raise the reference estimate or lower a bad competitor estimate. These preserve the reference action while that state is unfinished. At its completion `T_s`, each bad gap either has reached `delta` or has received `N` increases of more than `delta alpha_k`. The learning-rate comparison gives a lower bound on those past rates in terms of the largest remaining rate at `T_s`. Consequently

`d_{T_s} >= min(delta, N delta bar alpha_{T_s}/c_alpha)`.

Choose `N` large and the start late enough that `N bar alpha <= c_alpha`. Then `bar alpha_{T_s}/d_{T_s} <= c_alpha/(N delta)`, so the first failure term is small uniformly, even for shrinking gaps. A late start also makes the second, squared-rate-tail term small. This conclusion concerns actual margins on successful requested updates; it is distinct from the temporary analytic cutoff.

To combine favorable requests with preservation, the proof uses an auxiliary law forcing requests to succeed while preserving the subsequent law at completed states. A union bound under that law makes the chance of losing any completed bad gap at most one half. Unfinished states and states completed exactly at the endpoint remain safe by inertia. A finite target transition before exit is therefore a strict improvement on the successful complementary event; an exit or an infinite unchanged-target interval is a stopping alternative. Transferring from the auxiliary law gives a uniform positive conditional lower bound `p` for improvement or stopping under the original law.

**Repeated conditional opportunities exclude endless changes without independence.** At each finite continuing transition time, the same lower bound applies given its available history. Induction with the tower property gives probability at least `p^m` for stopping within the next `m` intervals or achieving `m` consecutive strict improvements. There are finitely many policies, so a chain of `|P|` consecutive strict improvements is impossible. Each block of `|P|` intervals thus has conditional stopping probability at least `p^{|P|}` whenever it starts on a continuing branch. The chance of surviving `j` such blocks is at most `(1-p^{|P|})^j`, which tends to zero.

Failed transitions can worsen the policy; the next block still supplies a fresh conditional bound from its current history. No product of independent event probabilities is asserted. The products come from lower or upper conditional bounds and repeated expectation. The proof never restarts the conditioning at an infinite time. Finally, probability-one conclusions for all deterministic restarts are intersected, and eventual boundedness supplies a late restart on each path with no subsequent exit. On those paths stopping must mean a constant target, so target changes are finite. The fixed-target averaging argument then gives convergence to optimal values.

## Assistance and remaining uncertainty

No answers required a hint or correction. I can justify the three requested mechanisms from the supplied manuscript. I am using the stated martingale maximal and fixed-target convergence tools, rather than independently proving those general theorems. These follow-ups do not address the separate minor elementary-calculus prerequisite observation in my initial account.
