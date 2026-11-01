# The engine — conceptual model

Source of truth for what the 3D scene shows. The narrative (`docs/outline.md`) and the code (`src/`) both derive from this file. Reference sketch: the user's hand drawing (wheel top view, exploded side view, Nexus telescope, Nexus top view).

## Outcome

> After 40 minutes, any member of the Comex can sketch the engine on a napkin (wheel, rings, Nexus, operators) and say which part their organisation is missing.

Every viewpoint earns its place by adding one stroke to that napkin.

## Four pillars, one cylinder

| Pillar | Place in the engine | One sentence the audience can repeat |
|---|---|---|
| The wheel | top surface | An Idea travels six phases and changes shape; a gate decides each passage. |
| The layers | rings under the surface | Thirteen capabilities power the wheel; foundations are full rings, tools are arcs under the phases they serve. |
| The Context Nexus | the column through the centre | Four registers carry what the organisation knows to every agent, and take back what the cycle learns. |
| People | operators at the rim | Humans hold the handles: specs, context, orchestration, and the verdict at each gate. |

Energy loop: the Nexus fuels the rings (context), the rings power the wheel (tools, agents), the wheel moves the Idea (artefacts), and the wheel feeds evidence back into the Nexus (test, run, discovery).

## 1. Top surface: the wheel

- A five-lobe flywheel, clockwise from the top: Discover · Design · Develop · Deploy · Deepen. This is the loop. Each lobe's tail tucks under the next; **the joint between two lobes is the gate** (a pinned joint on the Idea's track).
- **Drop is not a step of the loop.** It is a lobe hanging outside the rim, hooked to the Deepen → Discover joint by a latch. At G5 Deepen decides: opportunity sends the Idea back to Discover, retire engages the Drop gear.
- Gates on the sector boundaries, at the exit of each loop phase: G1 Ready to Spec · G2 Ready to Build · G3 Ready to Release · G4 Released and Observable · G5 Opportunity or Retire. G6 Retirement Scoped stands on the Drop gear.
- The Idea is a dot travelling clockwise. Around the rim, 12 rays show the shape it takes (from `map.svg`):

| Phase | Shapes |
|---|---|
| Discover | idea |
| Design | shape · spec |
| Develop | code · build · review |
| Deploy | deploy · keep |
| Deepen | observe · analyse · opportunity |
| Drop (side gear) | retirement |

- Re-entry: a chord from Deepen back to Discover. An opportunity becomes the next Idea.
- Rendering: clean line art (white parts, thin outlines); red only for the Idea and the Nexus.
- The centre of the annulus is open: the top of the Nexus column shows through.

## 2. Under the surface: 13 layers in 5 bands

Bands from top to bottom, ordered from closest to the work down to the foundation (the planes of Zenika's delivery architecture):

| Band | Layers |
|---|---|
| Discover | L0 Idea & Discovery Tooling · L12 App Portfolio & Capability Discovery |
| Build | L2 SDD Tooling · L1 AI Coding Assistants |
| Contextualise | L5 Context Factory · L4 Agent & MCP Registry · L6 Multi-agent Orchestration |
| Measure | L8 CI/CD & Quality · L9 Observability & DORA |
| Platform | L3 AI Gateway · L7 Prompt Versioning & FinOps · L10 Infrastructure & Sovereignty |

- **L11 Identity & Non-Human Access is the spine.** It is a vertical rod crossing the bands, and it is badge-checked where it crosses L3 (which agent may call which model), L4 (which tool) and L10 (which environment and data). Every agent is an identity of its own: distinct from its user, scoped, traced, revocable on its own.
- **Contextualise is the hub.** L5 hosts the Context Nexus, so this band is where the column couples to the rings.
- Full rings are layers active in every phase. Arcs of gears are layers that sit only under the sectors they power.
- Progressive disclosure: show 5 bands first, and split a band into its rings only when we zoom in on it.

### Layer × phase

| Layer | Discover | Design | Develop | Deploy | Deepen | Drop |
|---|---|---|---|---|---|---|
| L0 Idea & Discovery | ● | ● | | | ● | |
| L12 Portfolio | ● | ● | | | | ● |
| L2 SDD | | ● | ● | | | |
| L1 Coding assistants | | ● | ● | | | |
| L6 Orchestration | | | ● | ● | ● | |
| L4 Agent & MCP Registry | ● | ● | ● | ● | ● | |
| L8 CI/CD & Quality | | | ● | ● | ● | |
| L9 Observability & DORA | | | | ● | ● | ● |
| L3 · L5 · L7 · L10 · L11 | ● | ● | ● | ● | ● | ● |

- L4 serves Discover through persona agents: simulated users and buyers the team questions before G1. No orchestration (L6) there.
- L1 helps in Design (spikes, prototypes) and Develop; infrastructure as code is written in Develop, so L1 stays out of Deploy.
- L6 and L8 run in Deepen too: analysis agents, and the decommissioning change that Deepen ships before Drop.
- Drop needs only L12 (what depends on the product) and L9 (who still uses it), on top of the layers active everywhere.

## 3. The core: the Context Nexus

- A column through the centre of every band, rising to the open centre of the wheel.
- **Four registers** as quadrants, clockwise from the top-left: Knowledge → Intent → Contracts → Operations → Knowledge.
- **Inheritance is nested, not stacked.** The column is a telescope: the Org tube contains the BU tube, which contains the Team core. Seen from the top, each quadrant shows concentric arcs: Org outside, Team at the centre.
  - Inheritance flows inward only. Each level extends its parent and never replaces it; exceptions are declared and approved by the parent's owner.
  - The number of intermediate levels can vary (BU, Tribe, Programme, Value Stream). Show one.
  - **Intent exists only at Team level.** The Intent quadrant has only its centre arc. The Idea lives there.
- Feedback into the registers: Develop (test → Contracts · Knowledge), Deploy (run → Operations · Knowledge), Deepen (discovery → Intent).

## 4. The rim: operators

> Rendering (decided): no handles and no figures. Roles show as a role lens on step 13, one beat per role: the parts a role owns turn red, with their names, and a leader line carries the role's purpose. The handle metaphor below explains what each role controls.

Each operator holds a handle wired to one part of the engine. Two kinds of operators, placed at two heights:

- **Drivers: the team hats, on the rim of the top surface.** They work the cycle. Each one holds a physical handle wired into the engine:
  - **Decision Guarantor: a lever on each gate.** A gate is a barrier on a sector boundary. The Idea stops there until the lever is pulled. All six levers are wired to one named badge.
  - **Specification Engineer: a feed line into the Intent quadrant.** It starts at the Design sector and runs across the wheel into the core. It is what turns the Idea into a spec.
  - **Context Engineer: feed lines into the Knowledge and Contracts quadrants.** These keep the fuel clean: sourced, dated, reusable.
  - **Orchestrator: a clutch on the Build and Contextualise bands.** It engages the gear arcs: which agents run, in what order, where people review. The budget belongs to AI FinOps.
- **Mechanics: the shared roles, standing beside the cylinder wall.** They service the machinery rather than the cycle. Each one reads or tunes one instrument:
  - **Evaluation Engineer:** the L8 and L9 gauges (is the output still good over time).
  - **AgentOps:** maintains the L4 and L6 rings (agents and tools in service).
  - **AI FinOps:** reads the L7 fuel gauge (spend, quotas, owners).
  - **Trace & Audit:** reads the L11 spine log (who did what, under which identity).
- **Delegation is a notch on every handle.** Each handle has five positions: Human · AI-assisted · AI-executed · AI-autonomous · never delegated (locked). The lever position *is* the delegation level of that action.
  - The Guarantor's levers have a locked notch: the verdict is never delegated.
  - Moving a notch towards autonomy is earned, and it can be moved back.

| Operator (hat) | Handle on | Typical holder (Zenika estimate) |
|---|---|---|
| Specification Engineer | Intent register, Design phase: no generation while a question is open | PO, BA, architect · ~0.35 FTE |
| Context Engineer | Knowledge and Contracts registers: sourced, dated, reusable context | senior BA, tech lead · ~0.25 FTE |
| Orchestrator | Build and Contextualise rings: splits the work between agents, decides where people review | tech lead, staff engineer · ~0.3 FTE, rotating |
| Decision Guarantor | the gates: signs what goes to production, in their own name | tech lead, domain expert · ~0.15 FTE, named, never rotating |

- Shared between teams: Evaluation Engineer (~0.25 FTE per team), AgentOps, AI FinOps, Trace & Audit.
- Delegation per action: Human · AI-assisted · AI-executed · AI-autonomous, plus never delegated. A gate stays shut until a human turns its handle.
- Tech-lead overload: the Context, Orchestrator and Guarantor hats land on one person, about 0.7 FTE on top of their job (Zenika estimate). Three levers: spread the context and spec hats, rotate the Orchestrator, keep the Guarantor stable.

## The 7 concerns: where they live in the engine

| Concern | Part of the engine |
|---|---|
| Feeding the pipelines | Nexus registers → Contextualise hub |
| Governing agents and their knowledge | gates + Nexus inheritance (Org extends down, never replaced) |
| Building the harness | the rings: instruct (L5) · forbid (L3) · block (L8) · prove (L9) |
| Securing the workflow | Platform band + gates |
| Agent identities | the L11 spine |
| Tokenomics | L7 + L3: the fuel gauge |
| Measuring progress | L9: the dashboard |

## Layers as engine parts (2026-10-31)

Each band is a family of parts; each layer is a named part. Working elements (arms, cam bumps, pipes, valves, terminals, dials) sit over the phases the layer powers.

| Band | Family | Parts |
|---|---|---|
| Discover | Probes (find) | L0 Market probe · L12 Portfolio probe |
| Build | Gear train (make) | L2 Cam (the spec sets the motion) · L1 Drive gear |
| Contextualise | Manifold (feed) | L5 Intake manifold · L4 Valve block · L6 Distributor (fires agents in order) |
| Measure | Gauges (prove) | L8 Test bench · L9 Dials |
| Platform | Chassis (hold & secure) | L3 Throttle (every model call) · L7 Fuel meter (tokens are the fuel) · L10 Engine block · L11 Ignition key |

The Nexus tubes share the flywheel language: each tube's cross-section is a four-lobe flywheel. Red means energy: the Team core and the Idea are always red; a part turns red while context flows through it (role lens); Org and BU stay soft red.


## Labels and energy in the deck (2026-10-31)

- **Part names on leader lines** (`src/leaders.js`): a dot on the part, a thin diagonal, the name on a horizontal tail, like the parts list of an exploded view. Names go outward from the engine's axis and dodge each other, the card, the HUD and the phase names. Phase names stay printed on their lobes; band headings stay plain.
- **Energy pulse** (`data-pulse="<tags>"`): a thin red wave runs out from the core every 3.2 s through the parts carrying those tags. Used on the title (Nexus, wheel) and on the manifold and role-lens stops (L5, wheel: seen from the side, a wave through the Nexus tubes flashes the whole column). Off with reduced motion.

## Deck mechanics added in the stop-by-stop review (2026-10-31)

- **The Idea runs** (`data-idea="run"`): on the title, the wheel stops and the recap, the Idea travels its track at 24°/s, half sunk in the wheel. Each gate it crosses (G1–G5) flashes red for 1.2 s; G6 sits on Drop, off the track.
- **Beats** (`<div class="beat">` in a stop): substeps that change focus, labels, role lens and pulse without moving the camera. The Nexus registers (one per beat, Knowledge → Intent → Contracts → Operations) and the role lens (one role per beat) use them. Hash `#s09.2` = second beat.
- **Soft focus** (`data-context`): parts of the same assembly fade only a bit, so the focused lobe stands out inside the Nexus.
- **Pulse slice** (`data-pulse-band`, `data-pulse-lag`): on the manifold stop the wave lights only the Contextualise height of the Nexus column, then L5, L4 and L6 in turn: context leaving the core.
- **Leader layout**: names sit on a whitish translucent backdrop. `data-lead-side` forces the side, `data-lead-column` stacks names in one parts-list column. Gate leaders carry what the gate checks; role leaders carry the role's purpose (both paraphrased from Zenika's delivery model).
- **Labels show layer names only** (`L5 Context Factory`); the part names (manifold, cam…) stay in this file as the visual vocabulary.
- **The questions dock** (s02): the problem card lists the seven concerns as questions (`CONCERNS[].question`), revealed on its second beat (`data-from`). Leaving the stop, they fly into the HUD checklist and stay there under their short names. Before that, `data-hud="crumb"` hides the checklist.
- **HUD**: Section › part breadcrumb over the seven pillars (problem, wheel, Nexus, layers, people, measure, napkin; `data-section`), one equal bar segment per pillar filling stop by stop and beat by beat, and the seven concerns as a checklist: red where the current step or beat speaks to them (`data-answers`), soft where met earlier. The block sits on a light blurred veil; the label layer lives outside the stage, above the HUD, so leader names cross it.
- **URL**: `#<n>` is the counter's number, `#<n>.<b>` beat b (from 2). Stop ids are slugs (`registers`, `measure`…), used only in the markup.
- **Grouped parts list** (step 10): names stack in one left column grouped by band (`userData.band`), the band name as a kicker inside the first name's box.

## Wording pass (2026-10-31)

- **Domains on screen:** the cards call a band a *domain* (Discover, Build, Contextualise, Measure, Platform); "band" stays the code's word. Band headings show the domain name only; what each domain does lives on the step 9 card (and in `BANDS[].purpose`). The parts metaphor (probes, gear train…) stays in this file as visual vocabulary, never on screen.
- **Self-explanatory cards:** every card carries a description (`.card-desc`) or a list (`dl.families`) written for a reader who gets the deck by mail. Titles in title case, one red word.
- **Beat shots:** a beat may carry its own `data-shot`; the camera glides there on its own timer without replaying the stop's move (Measure: `band-high:measure` on Quality and Value, so the gates and Deepen stay in frame).
- **Dropped leader names** (`data-lead-drop <0–1>`): free names first try an elbow at that screen height, reaching further out (spine stop: the L11 name below the engine).
- **Pinned leader names** (`data-lead-at "G4=0.44/0.4, …"`, `data-lead-at-phone` on phones): that name's elbow sits at those fractions of the screen width and height; the other names lay out around it (gates stop: G5 above G1, G4 above the card).
- **Footer:** `© ZENIKA 2026 · All Rights Reserved` on every step, after the stop's source when it has one.
- **Closing stop (16):** `data-theme="blueprint"`: the backdrop cross-fades to `--grad-dark` (brand dark towards a raspberry-tinted black) and the line-art palette blends to white lines on dark parts (`lineart.setTheme`); red stays energy. No breadcrumb block; the two links are clickable.

## Mobile and mailing (2026-10-31)

- One file to mail: `npm run build` writes `dist/the-augmented-pdlc.html` with styles, script, fonts and logo inlined, and the problem card's seven questions written in.
- Screens narrower than 16:9 (16:10 laptops) keep the 16:9 width of view: the camera widens its vertical angle, as the cards scale on the width there.
- Phones in landscape: the deck scales as one picture (no font floors, no card minimum width, leader elbows scaled down), the top-left block keeps the breadcrumb and the bar but drops the questions, and the HUD and cards keep clear of the notch. A long parts list closes its group gaps before it lifts into the HUD.
- Touch: swipe left or right, or tap the right half (next) or the left half (previous); taps on links and pinches pass through.
- The first touch asks for fullscreen and a landscape lock (Android, iPad). iPhone Safari has no element fullscreen: the page bleeds under the bars (`viewport-fit=cover`, `dvh`) but cannot hide them.
- Portrait phones see a "Turn Your Phone Sideways" overlay.
- Reading version: a head script sets `html.js`; when scripts are off (Quick Look, Android's HTML viewer), `html.no-js` lays the 16 cards out as a scrolling page with a banner pointing to a browser.

