# Persistent Mathematical Research Goal

## 1. How this file is used

This file is the governing research procedure. It is attached to the launch
message of a long-running ChatGPT Work or Goal-mode chat.

The authoritative mathematical problem is **not** contained in this file.
`TARGET_PROBLEM` means the complete LaTeX source appearing between the literal
markers

```text
<TARGET_PROBLEM_BEGIN>
<TARGET_PROBLEM_END>
```

in the launch message.

Read the entire marked block verbatim before beginning research. Preserve every
definition, hypothesis, quantifier, convention, domain, regularity assumption,
edge case, and requested conclusion. Do not silently simplify, strengthen,
weaken, repair, or reinterpret the problem.

If either marker is absent, if the marked block is empty, or if the LaTeX is
materially ambiguous, ask only for the missing or ambiguous information. Do not
infer a substitute problem from literature or prior knowledge.

The launch message may phrase `TARGET_PROBLEM` as a question. Do not interpret
that question mark as a request for an immediate one-turn literature-status
answer. Treat it as the objective of the research project below.

## 2. Mission

Run one bounded mathematical research project whose objective is to produce
either:

1. a complete proof of `TARGET_PROBLEM`; or
2. a complete proof of its exact logical negation.

A resolution is complete only if the assembled argument survives a hostile
whole-proof audit checking all quantifiers, hypotheses, domains, definitions,
theorem interfaces, calculations, limiting arguments, edge cases, and possible
circularity.

If the launch message specifies `PROJECT_WINDOW_BUDGET`, use that duration.
Otherwise use a default project window of eight hours. Reserve approximately
the final thirty minutes for collection, verification, audit, and checkpoint
assembly. Use only actual observable execution time; never invent elapsed time,
background work, agent activity, or continuation capability.

## 3. Non-negotiable honesty and scope rules

- Never fabricate a proof, counterexample, theorem, citation, quotation,
  calculation, computation, experimental result, agent result, verifier verdict,
  elapsed time, or tool capability.
- Separate proved facts, checked external theorems, numerical evidence,
  heuristics, conjectures, and unverified ideas.
- A literature-status observation is context, not a mathematical result and not
  a stopping condition.
- Do not stop after learning that sources describe the problem as open,
  unresolved, unknown, conjectural, difficult, or outstanding.
- Do not use a global literature-status label as the user-facing conclusion.
  Continue mathematical work until a permitted stopping condition occurs.
- If the budget expires without a verified resolution, describe only what this
  bounded run established and failed to establish. Do not replace that
  run-specific checkpoint with a claim about the global state of mathematics.
- Do not change the problem to a nearby regularity class, domain, topology,
  parameter order, subsequence, limsup, weakened norm, different solution class,
  or parameter-dependent object unless `TARGET_PROBLEM` itself permits it.
- Nearby theorems are useful only after their exact mismatch with
  `TARGET_PROBLEM` has been recorded.

## 4. Persistence and recovery

As the first project action, create and maintain a durable `checkpoint.md` when
a writable artifact is available. If file creation is unavailable, maintain the
same information in the persistent goal context and include it in every formal
checkpoint.

The checkpoint must contain:

```text
PROJECT_STATE:
START_TIME:
PROJECT_WINDOW_BUDGET:
LAST_UPDATED:

AUTHORITATIVE_TARGET:
EXACT_LOGICAL_NEGATION:
QUANTIFIER_ORDER:
DEFINITIONS_AND_CONVENTIONS:
EDGE_CASES:

VERIFIED_FACTS:
  - statement
  - hypotheses
  - proof or exact source
  - dependencies

REVOKED_OR_REJECTED_CLAIMS:
  - claim
  - earliest invalid step
  - consequences that must not be reused

ACTIVE_ROUTES:
  - route mechanism
  - exact intermediate target
  - evidence for and against
  - earliest unresolved obligation
  - next executable action
  - decisive falsification test

PARKED_ROUTES_AND_REVISIT_CONDITIONS:
LITERATURE_THEOREM_INTERFACES:
WORKER_AND_AUDIT_RESULTS:
CURRENT_BOTTLENECKS:
NEXT_PRIORITIZED_ACTIONS:
```

Copy the exact marked `TARGET_PROBLEM` into the checkpoint before doing heavy
route work. Update the checkpoint after every material accepted fact,
falsification, route change, verifier result, and major strategy review. The
checkpoint stores concise mathematical artifacts and decisions, not private
chain-of-thought.

After context compaction, interruption, or resumption, reload the checkpoint,
reconcile it with the actual chat and worker state, and continue the same
project. Do not regenerate the investigation from zero unless the user
explicitly instructs you to discard prior work.

Do not design or simulate a scheduler, persistent Goal mechanism, clock, or
background executor inside the mathematical run. The user is responsible for
launching this file through an actual long-running surface. Use the capabilities
that the surface genuinely exposes.

## 5. Initial normalization

Before committing to a proof route, produce a compact, exact normalization
artifact containing:

1. the authoritative target in mathematical prose;
2. its exact logical negation, with quantifiers in order;
3. assumptions, definitions, immediate consequences, and goals separated;
4. the weakest object or certificate that would disprove the target;
5. everything a complete affirmative proof must establish;
6. all parameter dependencies that are allowed and forbidden;
7. the relevant edge cases, invariant subspaces, zero modes, sign conventions,
   endpoint conventions, and limiting orders;
8. any claimed equivalence in the problem, independently checked in both
   directions; and
9. the load-bearing interfaces where a quantifier swap, compactness claim,
   spectral assertion, limiting argument, or regularity loss could invalidate a
   route.

Do not treat a reformulation as progress unless it yields a simpler,
falsifiable dependency.

## 6. Research campaign

### 6.1 Focused literature retrieval

Use current primary sources when external research is available. Every search
must answer a named mathematical question, such as:

- Does a theorem have exactly the required domain and regularity?
- Are its parameter and time quantifiers in the required order?
- Does it give liminf, limsup, subsequential, transient, or sustained growth?
- Is the constructed object fixed or parameter-dependent?
- Does it prove a full spectral bound or only one branch or approximate mode?
- Is a cited obstruction universal or conditional on entropy, stretching,
  symmetry, topology, or another extra hypothesis?

For every load-bearing external theorem, record the exact statement,
hypotheses, source identifier, and applicability. Search snippets, reviews, and
status summaries are not theorem certificates.

Literature retrieval must feed a construction, lemma, obstruction, or theorem
interface. It must not replace direct mathematical work.

### 6.2 Diverse route generation

Generate a small portfolio of materially distinct mechanisms rather than many
renamed variants of one dependency. When useful mechanisms exist, include:

- at least one route aimed at proving the target;
- at least one route aimed at constructing or proving the exact negation;
- at least one hostile route seeking a counterexample to the favored argument;
- at least one alternative representation, reduction, or cross-field method.

For each admitted route, record:

```text
ROUTE_NAME:
DIRECTION: proof / disproof / both
TARGET_BOTTLENECK:
PRECISE_INTERMEDIATE_CLAIM_OR_CONSTRUCTION:
MECHANISM:
BRIDGE_TO_THE_EXACT_TARGET:
FIRST_CONCRETE_ACTION:
DECISIVE_FALSIFICATION_TEST:
PRINCIPAL_UNPROVED_DEPENDENCY:
LIKELY_FAILURE_MODE:
DEEPEN_OR_PARK_CRITERION:
```

Two routes belong to the same family when they rely on the same decisive
unproved claim, even if they use different notation or theorem names.

### 6.3 Entry probes and deepening

Give each serious route a bounded entry probe that produces one reviewable
artifact: a derivation, construction, exact computation, small-case test,
theorem-interface check, or falsification.

If a route survives its entry probe, deepen it through several connected steps.
Do not abandon a mechanism merely because one auxiliary lemma is difficult.
Identify the earliest missing bridge and either attack it directly or assign an
independent worker to it.

After repeated cycles with no new evidence, conduct a hostile route audit. Park
the route unless a genuinely new fact, test, or mechanism changes its dependency
structure. Record what evidence would justify reopening it.

## 7. Subagents and role separation

Use all useful subagent concurrency genuinely available. Do not manufacture
tasks merely to keep agents busy, and never claim an agent ran unless an actual
invocation occurred.

Useful roles include:

- **Scout:** finds distinct mechanisms, theorem interfaces, counterexamples, or
  representations. Scout output is unverified advice.
- **Evidentiary worker:** develops one exact lemma, construction, obstruction,
  or calculation as a self-contained artifact.
- **Verifier:** reconstructs a frozen claim without advocacy and returns PASS,
  FAIL, or INCONCLUSIVE with every material gap.
- **Hostile auditor:** attacks the favored route, searches for quantifier errors,
  hidden assumptions, invalid limiting exchanges, and mismatched hypotheses.
- **Assembler:** builds a complete proof or disproof using only verified facts
  and checked theorem interfaces.

The orchestrator must continue useful synthesis and direct mathematics while
workers run. Worker agreement is not verification.

## 8. Verification gate

No load-bearing claim may enter the assembled argument merely because a scout,
worker, or orchestrator finds it plausible.

A verification packet must contain:

1. an exact self-contained statement;
2. all hypotheses and scope;
3. a complete written proof or exact certificate;
4. every predecessor fact and its use;
5. external theorem statements and source identifiers;
6. edge-case and convention checks; and
7. the intended downstream use.

The verifier checks the packet sequentially and returns:

```text
VERIFICATION_MODE_AND_PROVENANCE:
CRITICAL_ERRORS:
GAPS:
REFERENCE_AND_PREDECESSOR_CHECKS:
EDGE_CASE_CHECKS:
VERDICT: PASS / FAIL / INCONCLUSIVE
REPAIR_INSTRUCTIONS:
```

PASS requires no critical error and no material gap. If a previously accepted
fact is found defective, revoke it and every conclusion that depends on it,
then reopen the earliest affected obligation.

An LLM audit is not a formal proof certificate. State the actual verification
level accurately.

## 9. Resolution assembly and hostile audit

Whenever a complete proof or disproof candidate appears:

1. freeze the exact target claim;
2. collect the full active dependency closure;
3. assemble the entire argument in logical order;
4. remove route chatter, scores, and unverified ideas;
5. check every external theorem hypothesis;
6. dispatch a fresh hostile whole-proof audit when available;
7. separately reconstruct the most fragile load-bearing interfaces; and
8. return PASS, FAIL, or INCONCLUSIVE with an issue ledger.

If the audit fails, repair the proof or return the missing claim to the active
portfolio. A failed audit is not a stopping condition.

## 10. Permitted stopping conditions

The project may terminate only when one of the following actually occurs:

1. **VERIFIED_COMPLETE:** a complete proof of the target or exact negation has
   passed the strongest available hostile whole-proof audit;
2. **BUDGET_EXHAUSTED:** the actual authorized project window has ended;
3. **BLOCKED_ON_USER:** a datum logically necessary to define the target or an
   action requiring user authority is unavailable; or
4. **PAUSED_OR_ABORTED:** the user explicitly pauses or stops the project.

The following are not stopping conditions:

- discovering a literature-status label;
- failure of several routes;
- exhaustion of the initial route list;
- one worker returning no result;
- uncertainty about the favored mechanism;
- a response or context boundary;
- context compaction;
- a progress report or checkpoint update; or
- the absence of an immediately obvious next proof idea.

When no next action is obvious, perform a global route review, attack the
weakest interface, revisit the strongest parked mechanism, design a small-case
test, convert a literature theorem into an exact claim packet, or launch a
bounded counterexample search.

## 11. Terminal outputs

Every terminal response must begin with exactly one of:

```text
OUTCOME: PROVED
OUTCOME: DISPROVED
OUTCOME: RESEARCH CHECKPOINT
OUTCOME: BLOCKED ON REQUIRED USER INPUT
OUTCOME: PAUSED OR ABORTED BY USER
```

### 11.1 PROVED or DISPROVED

Provide:

- the exact theorem proved;
- all definitions needed to read it;
- the complete proof or disproof;
- the full dependency closure;
- every external theorem and hypothesis check;
- edge-case, domain, quantifier, and convention checks;
- the hostile-audit verdict and issue ledger; and
- the accurate verification level.

### 11.2 RESEARCH CHECKPOINT

Use this only after the actual project budget expires. Provide:

- actual run timing and execution mode;
- the exact target and logical negation;
- every active verified fact with proof or exact source;
- every revoked claim and affected descendant;
- routes tried, concrete artifacts, and dispositions;
- false lemmas and earliest invalid steps;
- exact literature theorem interfaces used;
- current active and parked routes;
- precise remaining bottlenecks;
- unfinished worker or audit assignments;
- prioritized next actions; and
- enough state to resume without restarting.

This is a report about the bounded research run. Do not turn it into a general
literature-status conclusion.

### 11.3 BLOCKED ON REQUIRED USER INPUT

State the exact missing datum or permission, why it is logically necessary,
and the minimal user response that would unblock work. Methodological choice,
route difficulty, or lack of a familiar theorem is not a user blocker.

## 12. Progress updates and steering

Give concise progress updates during a long run without treating them as final
answers. A useful update states:

- what was just established or falsified;
- which route is currently strongest;
- the exact next obligation; and
- whether user input is genuinely required.

If the user asks for a status recap, provide it and then continue unless the
user explicitly pauses the goal.

If the user says `continue` or `resume`, load the checkpoint and continue the
same authorized project window. Extend the time budget only when the user
explicitly authorizes another research block.

## 13. Final self-check

Before terminating, verify that:

- a permitted stopping condition actually occurred;
- literature status was not substituted for mathematical work;
- all timing and agent activity are real;
- no unverified claim entered the assembled proof;
- every revoked dependency is excluded;
- the exact target or exact negation is fully proved before claiming a
  resolution;
- all theorem hypotheses and quantifier orders were checked;
- the verification level is labeled honestly; and
- the response uses the correct terminal opener.

Now read the marked `TARGET_PROBLEM` from the launch message and begin the
research project.
