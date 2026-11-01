# The augmented PDLC: What's real, what's coming, what to decide

> After 40 minutes, any member of the Comex can sketch the engine on a napkin (wheel, layers, Nexus, people) and say which part their organisation is missing.

The talk is built backwards from that sentence: the problem, the engine assembled one napkin stroke at a time, one Idea run through it so the seven concerns surface where they live, the parts that change next, and three decisions.

Tags: `· answers: <concern>` marks where a concern is answered. `· signals: <letters>` marks the part a Now → Next signal belongs to. `(draft)` marks lines resting on unconfirmed content.

## Act 1 — The problem (s01–s05, ~4 min)

**s01 — Title**
*The Augmented PDLC: A Systemic Design for AI-Native Software Factories.*
We are going to talk about the augmented PDLC: what is real today, what is coming, and what you can decide.

**s02 — The problem**
*The engine fades behind the card: A Whole-System Redesign.*
AI agents can now write, test and ship code. How should IT delivery change around them? People move back to engineering roles: they frame the intent, set the rules and make the calls. Agents take over the craft. A tool rollout cannot carry that shift. It takes a whole delivery system: a lifecycle, a shared context, a platform, new roles and new measures.
*Second beat: "Seven questions to address" appear, then dock into the breadcrumb block, where the deck lights them step by step.*

**s03 — Acceleration whiplash**
Deploying an assistant takes days. Getting value from it does not.
The Faros AI 2026 data shows teams producing more work upstream with AI, while bugs, incidents and review time grow downstream. Speed in one place has moved the pressure to the next.

**s04 — The value gap**
McKinsey's November 2025 study finds most companies report no significant value yet, while a small group captures most of it. DORA 2025 calls AI a mirror and a multiplier: it amplifies the organisation it lands in.

**s05 — The constraint moved**
*The parts of the engine appear on the table, apart.*
Coding got faster and delivery did not: the constraint now sits with context, specs, decisions and verification, mostly on your tech leads. Faster tools leave it there; the system around them moves it. We will build that system as one engine you can draw on a napkin.

## Act 2 — Assemble the engine (s06–s20, ~14 min)

**s06 — The wheel**
*The top surface drops into place: six sectors.*
We start with the path of the work. Six phases, clockwise: Discover, Design, Develop, Deploy, Deepen, Drop.

**s07 — The Idea changes shape**
*The Idea appears as a dot and travels the rim.*
One Idea travels the wheel and changes shape on the way: a spec in Design, code and a build in Develop, a running service in Deploy. In Deepen we observe it until it yields an opportunity, and in Drop it is retired.

**s08 — A gate on every passage**
*Six barriers rise on the sector boundaries.*
Each phase exits through its gate: G1 Ready to Spec, G2 Ready to Build, G3 Ready to Release, G4 Released and Observable, G5 Opportunity or Retire, G6 Retirement Scoped. The machine checks the evidence, a named human decides, the decision is traced. Stroke one: an Idea travels six phases and changes shape; a gate decides each passage.

**s09 — The Nexus column**
*A column rises through the open centre of the wheel.*
The second part fuels the rest: the Context Nexus. Four registers, Knowledge, Intent, Contracts and Operations, with context flowing through them in that order and back to Knowledge.

**s10 — Org, BU, Team**
*The column extends like a telescope: Org, then BU, then the Team core.*
The column is nested, and rules flow inward only. Each level extends its parent and never replaces it; an exception is declared and approved by the parent's owner.

**s11 — Intent belongs to the team**
Intent exists only at Team level, and that is where the Idea lives. The wheel writes back: tests into Contracts and Knowledge, runtime into Operations and Knowledge, discoveries into Intent. Stroke two: four registers carry what the organisation knows to every agent, and take back what the cycle learns.

**s12 — Five bands**
*Five bands slide in under the wheel.*
Thirteen layers, L0 to L12, in five bands, from the work down to the foundation: Discover, Build, Contextualise, Measure, Platform.

**s13 — Full rings and gear arcs**
*The Platform band splits into full rings, the Build band into gear arcs.*
Foundations are full rings, active in every phase: L3 AI Gateway, L7 Prompt Versioning & FinOps, L10 Infrastructure & Sovereignty. Tools are gear arcs under the phases they serve: L2 SDD Tooling under Design and Develop, L1 AI Coding Assistants under Design and Develop.

**s14 — Contextualise is the hub**
*The Contextualise band splits, and the column locks into L5.*
L5 Context Factory hosts the Nexus, so this is where the column couples to the rings. Beside it, L4 Agent & MCP Registry and L6 Multi-agent Orchestration decide which agents and tools draw on that context.

**s15 — The L11 spine**
*A rod drops through all five bands.*
L11 Identity & Non-Human Access is the spine: every agent is an identity of its own, scoped, traced and revocable apart from its user, and its badge is checked at L3, L4 and L10. Stroke three: thirteen capabilities power the wheel; foundations are full rings, tools are arcs under the phases they serve.

**s16 — Drivers at the rim**
*Four operators take their places on the rim.*
The engine still needs hands. Drivers work the cycle, each with a handle wired into one part; the Decision Guarantor holds a lever on every gate, all six wired to one named badge.

**s17 — Feed lines and a clutch**
The Specification Engineer feeds Intent from Design and turns the Idea into a spec, with no generation while a question is open. The Context Engineer keeps Knowledge and Contracts sourced, dated and reusable. The Orchestrator's clutch on the Build and Contextualise bands sets which agents run, in what order, and where reviews sit.

**s18 — Mechanics beside the wall**
*Four more operators stand beside the cylinder wall.*
Shared between teams, mechanics service the machinery. The Evaluation Engineer reads the L8 and L9 gauges, AgentOps keeps L4 and L6 running, AI FinOps reads the L7 fuel gauge, and Trace & Audit reads the L11 log.

**s19 — One person, three hats**
The context, orchestration and verdict hats tend to land on the tech lead: about 0.7 FTE on top of the job (Zenika estimate). Three levers: spread the context and spec hats, rotate the Orchestrator, keep the Guarantor stable.

**s20 — Delegation notches**
*A notch scale appears on every handle.*
Each handle has five positions: Human, AI-assisted, AI-executed, AI-autonomous, never delegated. A notch moves towards autonomy when evidence earns it and can move back; the Guarantor's lever stays locked. Stroke four. Humans hold the handles: specs, context, orchestration, and the verdict at each gate.

## Act 3 — Run it (s21–s29, ~10 min)

**s21 — The engine turns**
*The engine starts: the column fills, the rings turn, the wheel moves.*
The Nexus fuels the rings, the rings power the wheel, the wheel moves the Idea, and evidence flows back into the Nexus. Now we run one Idea.

**s22 — Discover and Design** · answers: Feeding the pipelines
The Idea enters Discover on the L0 and L12 arcs and becomes a Business Intent Spec in the team's Intent register before G1 (draft). In Design it becomes a Solution Design Spec, and the Contextualise hub serves every agent the same registers before G2.

**s23 — Develop: the harness** · answers: Building the harness
*The Build and Contextualise arcs engage under Develop.*
The Orchestrator engages the clutch and agents write code and tests against the spec. Four rings form the harness: L5 instructs, L3 forbids, L8 blocks, L9 proves, and one test per acceptance criterion carries the evidence to G3.

**s24 — Every agent has a badge** · answers: Agent identities
Each agent is its own identity on the L11 spine, separate from the developer who launched it. Every call is logged, and a misbehaving agent is revoked while its user keeps working.

**s25 — The fuel gauge** · answers: Tokenomics
L7 with L3 is the fuel gauge. Spend moves from seats to usage and agent loops consume far more, so tokens get cheaper while the bill grows, as cloud bills did. AI FinOps ties spend to delivery: route, cap, feed, read (draft).

**s26 — Deploy: release and activation** · answers: Securing the workflow
Runtime Specs carry the runbook, the feature flag, the rollback plan and the AI cost. Release and activation are two decisions, both on the Platform band and both behind G4, so nothing reaches users through a side door.

**s27 — Deepen: the dashboard** · answers: Measuring progress
L9 is the dashboard: production is judged against the success criterion set in Discover, and the Opportunity Spec decides at G5. Speed counts only if the next gate passes, so we freeze a baseline and expect a dip before the gain (draft).

**s28 — Drop and re-entry**
*A chord lights from Deepen back to Discover.*
What Deepen learns goes back into Intent, and an opportunity crosses the chord to become the next Idea. When the answer is retire, Drop scopes dependencies and impacts in a Retirement Spec before G6.

**s29 — Who governed this run** · answers: Governing agents and their knowledge
*The camera pulls back to show the six levers and the telescope together.*
At every passage a named human pulled the lever. Every agent drew on context the Org set once and the BU and Team extended: that is how governance holds across many teams.

## Act 4 — What's coming (s30–s33, ~6 min)

**s30 — The wheel and the gates** · signals: A · B · C
*The engine dims, then the wheel and its gates light up.*
On the wheel and its gates we watch signal A (to source), signal B (to source), signal C (to source).

**s31 — The operators** · signals: D · E · F
*The rim lights up: handles, notches, operators.*
At the rim, where people hold the handles, we watch signal D (to source), signal E (to source), signal F (to source).

**s32 — The rings and the spine** · signals: G · H · I · J
*The rings and the L11 spine light up.*
Under the surface we watch signal G (to source), signal H (to source), signal I (to source), signal J (to source).

**s33 — The column** · signals: K · L
*The Nexus column lights up from Org to Team.*
In the column, where one change reaches every agent at once, we watch signal K (to source), signal L (to source).

## Measure (built ahead of Act 5)

**measure — Measure the System** · answers: Measuring progress
*The Measure band splits out; one beat per family lights the parts that feed it.*
Four families of indicators: Delivery (the four DORA metrics, on L8 and L9), Quality (rework rate, gate pass rate, vulnerabilities introduced: L8 and the gates), Transformation (workflows run with AI, reusable assets in use, teams on board: L1 and L4), Value (capacity moved to high-value work: Deepen and G5). Freeze a baseline first; expect a dip before the gain.

## Act 5 — Decide (s34–s36, ~4 min)

**s34 — The napkin**
*The camera pulls back to the whole engine, the seven answers pinned.*
Wheel, column, rings, operators. Feeding at the hub, governing at gates and inheritance, the harness in four rings, security on the Platform band, identity on the spine, tokens on the gauge, progress on the dashboard. You can now draw it and point at the part you are missing.

**s35 — Three decisions**
This committee can decide three things: one sponsor across Product, Engineering and Platform, a frozen baseline before buying more tools, and the full rings in place before opening the taps. On Monday: protect your tech leads' time, name who holds the verdict, put AI spend under a FinOps owner.

**s36 — Links** (built: the deck's closing stop)
*The backdrop turns to the dark gradient and the engine to a white-line blueprint. No breadcrumb block.*
Thank you. Everything we showed is at aixsdlc.zenika.com (Zenika's AI×SDLC framework, stage by stage) and cnexus.fr (the Context Nexus).

## Napkin

1. **The wheel.** An Idea travels six phases and changes shape; a gate decides each passage.
2. **The Context Nexus.** Four registers carry what the organisation knows to every agent, and take back what the cycle learns.
3. **The layers.** Thirteen capabilities power the wheel; foundations are full rings, tools are arcs under the phases they serve.
4. **People.** Humans hold the handles: specs, context, orchestration, and the verdict at each gate.
