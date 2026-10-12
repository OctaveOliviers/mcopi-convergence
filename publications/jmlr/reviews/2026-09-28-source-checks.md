# Sources supporting the restored preliminaries

Verified 2026-09-28 by `/root/standard_references` (GPT-5.6 Sol, medium), independently of drafting. Source: Bertsekas and Tsitsiklis, *Neuro-Dynamic Programming* (1996), [MIT author PDF](https://web.mit.edu/dimitrib/www/NDP.pdf), existing bibliography key `Bertsekas1996Neuro-DynamicProgramming`.

- §2.2.1, Definition 2.1 and equations (2.7)–(2.9), printed pp. 18–19: a proper policy in a finite MDP has geometrically decaying absorption-time tails. Finite second moments follow from that tail bound. Finiteness of the deterministic policy set and the initial-pair set supplies uniformity. Bounded one-step rewards therefore suffice for the paper's conditional return-variance assumption. The book does not state this last synthesis verbatim.
- Proposition 4.2, printed pp. 148–149 (PDF pp. 163–164): for nonnegative adapted processes satisfying a conditional supermartingale inequality with a summable positive error, the primary process converges and the negative drift terms have finite sum. The manuscript applies this to the squared error of a fixed-target average. No prior boundedness of the actual iterates or positive sampling floor is used.
- Proposition 4.1/Example 4.3 were also inspected, but the manuscript uses Proposition 4.2 to avoid a mismatch with the adaptive, potentially vanishing sampling probabilities.
- Tsitsiklis (2002), p. 62, supports discounted return variance; p. 71 leaves the undiscounted extension open. It is not used to justify the episodic variance statement.

The local inspected NDP source has SHA-256: `976fb3d960a5cc004c8d8917abbd5a2bded80848c02bade2037fcf2380789335`.

The earlier methodology-source record remains applicable: Kushner–Yin §5.4 is cited for the combined strategy, and Borkar §3 for the inspected fixed-interior lock-in setup. No unchecked external convergence theorem replaces the proof.
