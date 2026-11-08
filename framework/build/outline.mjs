// Reads the outline (framework/docs/inputs.md) into the stop map every later stage starts from, and checks it:
// the outcome sentence, one title per stop, known question ids, a source for every figure.
//   node framework/build/outline.mjs [inputs/outline.md]   prints the map and its findings
//   … --json [file]                                         also writes it (default .deck/outline.json)
// Exits 1 on an error; warnings (a stop with nothing on screen, open questions) only print.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const slug = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const list = (s) => s.split(/[,\s]+/).filter(Boolean);
const FIGURES = "\\d+(?:[.,]\\d+)?\\s?(?:%|×)";
const HEAD_KEYS = /(Audience|Length|Languages|Sources|Questions(?:\s*\(optional\))?):/g;

// Pulls the trailing tags off a line: "· answers: a, b · source: DORA 2025 · signals: x (draft)"
function tags(line) {
  const out = { text: line, draft: false };
  if (/\(draft\)\s*$/.test(out.text)) {
    out.draft = true;
    out.text = out.text.replace(/\s*\(draft\)\s*$/, "");
  }
  const parts = out.text.split(/\s+·\s+(?=(?:answers|source|signals):)/);
  out.text = parts.shift().trim();
  for (const p of parts) {
    const [, key, value] = p.match(/^(answers|source|signals):\s*(.*)$/);
    out[key] = key === "source" ? value.trim() : list(value);
  }
  return out;
}

export function parseOutline(md, { figures = FIGURES } = {}) {
  const map = { title: "", subtitle: "", outcome: "", audience: "", length: "", languages: ["en"], sources: [], questions: [], acts: [], open: [] };
  const errors = [];
  const warnings = [];
  let act = null;
  let stop = null;
  let inHead = true;
  let inQuestions = false;
  const lines = md.split(/\r?\n/);

  const addSays = (text) => {
    if (!text) return;
    stop.says = stop.says ? `${stop.says} ${text}` : text;
  };
  const tagged = (t) => {
    if (t.draft) stop.draft = true;
    if (t.answers) stop.answers = [...new Set([...stop.answers, ...t.answers])];
    if (t.signals) stop.signals = [...new Set([...stop.signals, ...t.signals])];
    if (t.source) stop.sources.push(t.source);
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();
    const at = `line ${i + 1}`;
    for (const q of line.matchAll(/⟦\?\s*([^⟧]*)⟧/g)) map.open.push({ stop: stop?.id ?? null, question: q[1].trim(), at });
    const bare = line.replace(/⟦\?[^⟧]*⟧/g, "").trim();
    if (!bare) return;

    let m;
    if ((m = bare.match(/^#\s+(.*)$/))) {
      const [title, ...sub] = m[1].split(/:\s+/);
      map.title = title.trim();
      map.subtitle = sub.join(": ").trim();
      return;
    }
    if ((m = bare.match(/^##\s+(?:Act\s+\w+\s*[:·.-]\s*)?(.*)$/i))) {
      inHead = inQuestions = false;
      act = { id: slug(m[1]), name: m[1].trim(), stops: [] };
      map.acts.push(act);
      stop = null;
      return;
    }
    if ((m = bare.match(/^\*\*\s*(s\d+)\s*:\s*(.*?)\s*\*\*(?:\s*\(([^)]*)\))?\s*(.*)$/i))) {
      inHead = inQuestions = false;
      if (!act) {
        act = { id: "main", name: map.title || "Main", stops: [] };
        map.acts.push(act);
      }
      stop = { id: m[1].toLowerCase(), title: m[2], act: act.id, sees: "", says: "", beats: [], answers: [], sources: [], signals: [], draft: false, at };
      if (m[3] && /draft/i.test(m[3])) stop.draft = true;
      act.stops.push(stop);
      if (m[4]) {
        const t = tags(m[4]);
        addSays(t.text);
        tagged(t);
      }
      return;
    }

    if (inHead) {
      if ((m = bare.match(/^>\s*(.*)$/))) {
        if (!map.outcome) map.outcome = m[1].trim();
        return;
      }
      if (inQuestions && (m = bare.match(/^[-*]\s+([\w-]+)\s*:\s*([^|]+?)\s*(?:\|\s*(.*))?$/))) {
        map.questions.push({ id: m[1], name: m[2].trim(), question: (m[3] || m[2]).trim() });
        return;
      }
      const keys = [...bare.matchAll(HEAD_KEYS)];
      if (keys.length) {
        keys.forEach((k, j) => {
          const value = bare.slice(k.index + k[0].length, keys[j + 1]?.index ?? bare.length).trim().replace(/\.$/, "");
          const key = k[1].split(/\s/)[0].toLowerCase();
          if (key === "audience") map.audience = value;
          if (key === "length") map.length = value;
          if (key === "languages") map.languages = [...value.matchAll(/\b([a-z]{2})\b/g)].map((x) => x[1]);
          if (key === "sources") map.sources = value.split(/\s*[;,]\s*/).filter(Boolean);
          if (key === "questions") inQuestions = true;
        });
        return;
      }
      return;
    }
    if (!stop) {
      warnings.push(`${at}: text outside a stop is ignored: "${bare.slice(0, 50)}"`);
      return;
    }

    // Voiceover conventions: "▸ clic · #6.2 …" marks a beat, "> On screen: …" what the room sees
    if ((m = bare.match(/^▸\s*(?:clic|click)?\s*(?:·\s*#[\d.]+)?\s*(.*)$/i))) {
      stop.beats.push({ n: stop.beats.length + 2, text: m[1].trim() });
      return;
    }
    if ((m = bare.match(/^>\s*(?:On screen:)?\s*(.*)$/i))) {
      stop.sees = [stop.sees, m[1].trim()].filter(Boolean).join(" ");
      return;
    }
    // Tags may follow the italics: "*Beat 2: …* · answers: x"
    const t = tags(bare);
    tagged(t);
    if ((m = t.text.match(/^[*_](.*)[*_]$/)) && !/^\*\*/.test(t.text)) {
      const seen = tags(m[1].trim());
      tagged(seen);
      const beat = seen.text.match(/^Beat\s+(\d+)\s*:\s*(.*)$/i);
      if (beat) stop.beats.push({ n: Number(beat[1]), text: beat[2].replace(/\.$/, "") });
      else stop.sees = [stop.sees, seen.text].filter(Boolean).join(" ");
      return;
    }
    addSays(t.text);
  });

  // Checks
  if (!map.title) errors.push("no deck title (# Title: subtitle)");
  if (!map.outcome) errors.push("no outcome sentence (> After <n> minutes, <who> can <what>.)");
  const stops = map.acts.flatMap((a) => a.stops);
  if (!stops.length) errors.push("no stop (**s01: Title**)");
  const seen = new Set();
  const qids = new Set(map.questions.map((q) => q.id));
  const figure = new RegExp(figures);
  for (const s of stops) {
    if (seen.has(s.id)) errors.push(`${s.at}: ${s.id} is used twice`);
    seen.add(s.id);
    if (!s.title) errors.push(`${s.at}: ${s.id} has no title`);
    if (!s.sees) warnings.push(`${s.id}: nothing says what the room sees (an italic line)`);
    if (!s.says) warnings.push(`${s.id}: nothing for the speaker to say`);
    for (const a of s.answers) if (!qids.has(a)) errors.push(`${s.id}: answers "${a}", not a question id (${[...qids].join(", ") || "none declared"})`);
    if (figure.test(`${s.title} ${s.says}`) && !s.sources.length) errors.push(`${s.id}: a figure with no source (· source: …)`);
    if (map.sources.length)
      for (const src of s.sources)
        if (!map.sources.some((ok) => src.toLowerCase().includes(ok.toLowerCase().split(/\s+/)[0])))
          errors.push(`${s.id}: source "${src}" is not on the Sources line (${map.sources.join("; ")})`);
    const ns = s.beats.map((b) => b.n);
    ns.forEach((n, j) => n !== j + 2 && warnings.push(`${s.id}: beats should run 2, 3, …; found ${ns.join(", ")}`));
    if (s.draft) warnings.push(`${s.id}: draft (rests on content not confirmed yet)`);
  }
  for (const a of map.acts) if (!a.stops.length) warnings.push(`act "${a.name}" has no stop`);
  for (const o of map.open) warnings.push(`open question${o.stop ? ` (${o.stop})` : ""}: ${o.question}`);
  return { map, errors, warnings };
}

async function main() {
  const args = process.argv.slice(2);
  const j = args.indexOf("--json");
  const json = j >= 0 ? (args[j + 1] && !args[j + 1].startsWith("-") ? args.splice(j, 2)[1] : (args.splice(j, 1), ".deck/outline.json")) : null;
  const src = resolve(args[0] || "inputs/outline.md");
  if (!existsSync(src)) {
    console.error(`outline: ${src} not found (framework/docs/inputs.md says what to put there)`);
    process.exit(1);
  }
  let figures = FIGURES;
  const config = resolve("deck.config.mjs");
  if (existsSync(config)) figures = (await import(pathToFileURL(config).href)).default.copy?.figures || FIGURES;
  const { map, errors, warnings } = parseOutline(readFileSync(src, "utf8"), { figures });

  console.log(`${map.title}${map.subtitle ? `: ${map.subtitle}` : ""}`);
  console.log(`> ${map.outcome || "(no outcome sentence)"}`);
  for (const a of map.acts) {
    console.log(`\n${a.name} (${a.id})`);
    for (const s of a.stops) {
      const extra = [s.beats.length && `${s.beats.length} beat${s.beats.length > 1 ? "s" : ""}`, s.answers.length && `answers ${s.answers.join(",")}`, s.sources.length && `source ${s.sources.join("; ")}`, s.draft && "draft"].filter(Boolean);
      console.log(`  ${s.id}  ${s.title}${extra.length ? `  [${extra.join(" · ")}]` : ""}`);
    }
  }
  if (json) {
    mkdirSync(dirname(resolve(json)), { recursive: true });
    writeFileSync(resolve(json), JSON.stringify(map, null, 2) + "\n");
    console.log(`\nwrote ${json}`);
  }
  warnings.forEach((w) => console.warn(`warning ${w}`));
  errors.forEach((e) => console.error(`error ${e}`));
  console.log(`\noutline: ${map.acts.flatMap((a) => a.stops).length} stops, ${errors.length} errors, ${warnings.length} warnings`);
  if (errors.length) process.exit(1);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
