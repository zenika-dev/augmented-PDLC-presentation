// What the engine is made of. Mirrors docs/engine.md: change the model there first, then here.
import { FR } from "./data.fr.js";

export const PHASES = [
  { id: "discover", name: "Discover" },
  { id: "design", name: "Design" },
  { id: "develop", name: "Develop" },
  { id: "deploy", name: "Deploy" },
  { id: "deepen", name: "Deepen" },
  { id: "drop", name: "Drop", side: true },
];

// Drop is not a step of the loop: it is a side gear engaged from Deepen (G5 → retire)
export const LOOP = PHASES.filter((p) => !p.side);

// Exit gate of each loop phase, on the boundary after it; G6 sits on the Drop gear.
// checks: what the gate asserts before the Idea passes (paraphrased from Zenika's delivery model)
export const GATES = [
  { id: "G1", name: "Ready to Spec", checks: "A measurable goal, the data to track it, one accountable owner" },
  { id: "G2", name: "Ready to Build", checks: "Acceptance tests written, interfaces agreed, quality targets set" },
  { id: "G3", name: "Ready to Release", checks: "All checks pass, security issues closed, a named person signs off" },
  { id: "G4", name: "Released and Observable", checks: "Every change traced, business metrics live, someone on call" },
  { id: "G5", name: "Opportunity or Retire", checks: "Results against the promise, full cost known, a keep-or-retire call" },
  { id: "G6", name: "Retirement Scoped", checks: "Dependencies mapped, users informed, knowledge preserved" },
];

// Shapes of the Idea around the rim, angles in degrees clockwise from the top
// (map.svg angles remapped from six 60° sectors to five 72° ones; retirement lives on the Drop gear)
export const SHAPES = [
  { name: "idea", angle: 0 },
  { name: "shape", angle: 54.7 },
  { name: "spec", angle: 89.3 },
  { name: "code", angle: 121 },
  { name: "build", angle: 144 },
  { name: "review", angle: 167 },
  { name: "deploy", angle: 198.7 },
  { name: "keep", angle: 233.3 },
  { name: "observe", angle: 265 },
  { name: "analyse", angle: 288 },
  { name: "opportunity", angle: 311 },
  { name: "retirement", drop: true },
];

// Bands top to bottom: closest to the work first, foundation last. Each band is one family of engine parts
// (archetype); each layer is a named part. purpose: what the band (a "domain" on screen) does, from the delivery model's planes.
// on[] = which phases the layer powers (Discover … Drop); the matrix in docs/engine.md says why.
export const BANDS = [
  {
    id: "discover", name: "Discover", archetype: "Probes",
    purpose: "Finds what is worth building, and what already exists",
    layers: [
      { id: "L0", name: "Idea & Discovery Tooling", part: "Market probe", on: [1, 1, 0, 0, 1, 0] },
      { id: "L12", name: "App Portfolio & Capability Discovery", part: "Portfolio probe", on: [1, 1, 0, 0, 0, 1] },
    ],
  },
  {
    id: "build", name: "Build", archetype: "Gear train",
    purpose: "Turns the spec into working code",
    layers: [
      { id: "L2", name: "SDD Tooling", part: "Cam", on: [0, 1, 1, 0, 0, 0] },
      { id: "L1", name: "AI Coding Assistants", part: "Drive gear", on: [0, 1, 1, 0, 0, 0] },
    ],
  },
  {
    id: "contextualise", name: "Contextualise", archetype: "Manifold",
    purpose: "Gives every agent the same context and the tools it may call",
    layers: [
      { id: "L5", name: "Context Factory", part: "Intake manifold", on: [1, 1, 1, 1, 1, 1] },
      { id: "L4", name: "Agent & MCP Registry", part: "Valve block", on: [1, 1, 1, 1, 1, 0] },
      { id: "L6", name: "Multi-agent Orchestration", part: "Distributor", on: [0, 0, 1, 1, 1, 0] },
    ],
  },
  {
    id: "measure", name: "Measure", archetype: "Gauges",
    purpose: "Proves the output is good, and keeps proving it",
    layers: [
      { id: "L8", name: "CI/CD & Quality", part: "Test bench", on: [0, 0, 1, 1, 1, 0] },
      { id: "L9", name: "Observability & DORA", part: "Dials", on: [0, 0, 0, 1, 1, 1] },
    ],
  },
  {
    id: "platform", name: "Platform", archetype: "Chassis",
    purpose: "Routes, meters and secures every model call, on ground you control",
    layers: [
      { id: "L3", name: "AI Gateway", part: "Throttle", on: [1, 1, 1, 1, 1, 1] },
      { id: "L7", name: "Prompt Versioning & FinOps", part: "Fuel meter", on: [1, 1, 1, 1, 1, 1] },
      { id: "L10", name: "Infrastructure & Sovereignty", part: "Engine block", on: [1, 1, 1, 1, 1, 1] },
    ],
  },
];

// L11 is the spine: badge checks where it crosses these layers
export const SPINE = { id: "L11", name: "Identity & Non-Human Access", part: "Ignition key", checks: ["L3", "L4", "L10"] };

// Nexus quadrants, clockwise from the top-left
export const REGISTERS = [
  { id: "knowledge", name: "Knowledge", from: 270 },
  { id: "intent", name: "Intent", from: 0, teamOnly: true },
  { id: "contracts", name: "Contracts", from: 90 },
  { id: "operations", name: "Operations", from: 180 },
];

// Nested inheritance, outermost first
export const LEVELS = [
  { id: "org", name: "Org", color: "#8e1542" },
  { id: "bu", name: "BU", color: "#bf1d67" },
  { id: "team", name: "Team", color: "#ee2238" },
];

// Roles and the parts they own (docs/engine.md "The rim: operators"); the first four work in each team, the others for all teams. parts are engine tags:
// the role lens lights them in red; the role's name points at the first one.
export const ROLES = [
  { id: "spec", name: "Specification Engineer", parts: ["register:intent", "phase:design", "layer:L2"],
    purpose: "Turns the Idea into a spec; no code while a question stays open" },
  { id: "context", name: "Context Engineer", parts: ["layer:L5", "register:knowledge", "register:contracts"],
    purpose: "Keeps what agents know sourced, dated and reusable" },
  { id: "orchestrator", name: "Orchestrator", parts: ["layer:L6", "layer:L1"],
    purpose: "Splits the work between agents and decides where people review" },
  { id: "guarantor", name: "Decision Guarantor", parts: ["gates"],
    purpose: "Signs each gate in their own name, on the evidence; never delegated" },
  { id: "evaluation", name: "Evaluation Engineer", parts: ["layer:L8", "layer:L9"],
    purpose: "Checks that what agents produce stays good over time" },
  { id: "agentops", name: "AgentOps", parts: ["layer:L4", "layer:L6"],
    purpose: "Keeps agents and their tools registered, current and in service" },
  { id: "finops", name: "AI FinOps", parts: ["layer:L7", "layer:L3"],
    purpose: "Ties token spend to what it delivers, each budget with an owner" },
  { id: "audit", name: "Trace & Audit", parts: ["spine"],
    purpose: "Can tell who did what, person or agent, under which identity" },
];

// The seven Comex concerns, lit in the HUD on the steps that speak to them (data-answers on a stop or beat)
// question: how the problem stop asks it; name: the short label kept in the HUD
export const CONCERNS = [
  { id: "feed", name: "Feeding the pipelines", question: "How do we feed agents the right context?" },
  { id: "govern", name: "Governing agents", question: "How do we govern agents and what they know?" },
  { id: "harness", name: "Building the harness", question: "What harness keeps agents on track?" },
  { id: "secure", name: "Securing the workflow", question: "How do we secure the workflow end to end?" },
  { id: "identity", name: "Agent identities", question: "Who is each agent, and who answers for it?" },
  { id: "tokens", name: "Tokenomics", question: "What will the tokens cost, and who pays?" },
  { id: "measure", name: "Measuring progress", question: "How do we know we are getting better?" },
];

// The pillars the talk walks through, in order: the breadcrumb's sections (data-section on a stop)
export const SECTIONS = [
  { id: "problem", name: "The problem" },
  { id: "wheel", name: "The wheel" },
  { id: "nexus", name: "The Nexus" },
  { id: "layers", name: "The layers" },
  { id: "people", name: "People" },
  { id: "measure", name: "Measure" },
  { id: "napkin", name: "The napkin" },
];

// The page's language picks the prose: index.fr.html sets lang="fr". Names stay as above on both decks.
// No document when scripts/build.mjs imports this file in Node: English.
export const LANG = typeof document !== "undefined" && document.documentElement.lang === "fr" ? "fr" : "en";

// Names of the parts on the sets (sets.js), filled by an edition's leads
export const LEADS = {};

// The French deck is a patch on these lists, like a client edition (below): prose only, names unchanged
if (LANG === "fr") {
  const each = (o, f) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, f(v)]));
  applyEdition({
    gates: each(FR.gates, (checks) => ({ checks })),
    shapes: each(FR.shapes, (label) => ({ label })), // keyed by name: data-idea looks shapes up by it
    roles: each(FR.roles, (purpose) => ({ purpose })),
    concerns: FR.concerns,
    sections: each(FR.sections, (name) => ({ name })),
  });
}

// A client edition (editions/<name>/index.html, never committed) brings its own data in
// <script type="application/json" id="edition">, so client names and prose never enter src/ or the bundle.
// docs/editions.md lists its keys. A list given as an array replaces ours; given as an object keyed by id
// (shapes: by name) it patches ours item by item. gates, bands, layers (L11 included), phases, registers and
// roles patch by id; bandOrder restacks the bands, top first; leads names the parts on the sets.
export const EDITION = readEdition();
if (EDITION) applyEdition(EDITION);
export const MENTION = EDITION?.mention ?? (LANG === "fr" ? FR.mention : "© ZENIKA 2026 · All Rights Reserved");

function readEdition() {
  const el = typeof document !== "undefined" && document.getElementById("edition");
  if (!el) return null;
  try {
    return JSON.parse(el.textContent);
  } catch (error) {
    // The deck still runs, on our data, rather than not at all
    console.error("The edition block (#edition) is not valid JSON:", error.message);
    return null;
  }
}

function patch(list, items, key = "id") {
  if (!items) return;
  if (Array.isArray(items)) list.splice(0, list.length, ...items);
  else list.forEach((item) => Object.assign(item, items[item[key]]));
}

function applyEdition(e) {
  patch(SECTIONS, e.sections);
  patch(CONCERNS, e.concerns);
  patch(SHAPES, e.shapes, "name");
  patch(GATES, e.gates);
  patch(PHASES, e.phases);
  patch(REGISTERS, e.registers);
  patch(ROLES, e.roles);
  if (e.bandOrder) {
    const ids = BANDS.map((b) => b.id);
    if (e.bandOrder.length !== ids.length || !ids.every((id) => e.bandOrder.includes(id))) {
      throw new Error(`Edition bandOrder must list each band once: ${ids.join(", ")}`);
    }
    patch(BANDS, e.bandOrder.map((id) => BANDS.find((b) => b.id === id)));
  }
  BANDS.forEach((b) => {
    Object.assign(b, e.bands?.[b.id]);
    b.layers.forEach((l) => Object.assign(l, e.layers?.[l.id]));
  });
  // L11 is the spine, outside the bands
  Object.assign(SPINE, e.layers?.[SPINE.id]);
  Object.assign(LEADS, e.leads);
}
