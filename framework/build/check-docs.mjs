// Keeps the docs in step with the code:
//   - the attribute references are generated from the code: the core's (framework/docs/contract.md) and the
//     scene's (docs/attributes.md, or config.docs.attributes); --write rewrites them, a check fails if stale
//   - every path a doc names in backticks (src/…, framework/…, css/…, docs/…) exists
//   - every npm script is in README.md, and every check or gate script in framework/docs/gates.md
// Usage: node framework/build/check-docs.mjs [--write]
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { CORE_ATTRIBUTES } from "./lint-stops.mjs";
import { HUD_MODULES } from "../core/hud.js";

const write = process.argv.includes("--write");
// The framework's own docs, wherever the deck sits
const FW_DOCS = relative(process.cwd(), join(dirname(fileURLToPath(import.meta.url)), "..", "docs")) || ".";
// At the root of a repository of decks there is no deck.config.mjs: only the framework's reference and the
// root's own docs are checked there, each deck's in its own folder
const isDeck = existsSync("deck.config.mjs");
const config = isDeck ? (await import(pathToFileURL(resolve("deck.config.mjs")).href)).default : {};
const scene = isDeck ? (await import(pathToFileURL(resolve(config.scene)).href)).default : null;
const found = [];

// ---------- generated references ----------

const START = "<!-- generated: attributes -->";
const END = "<!-- /generated -->";
const cell = (s) => String(s).replace(/\|/g, "\\|");
const table = (rules) =>
  ["| Attribute | Beat | Meaning |", "|---|---|---|", ...Object.entries(rules).map(([name, r]) => `| \`${name}\` | ${r.beat ? "yes" : ""} | ${cell(r.doc || "")} |`)].join("\n");

function core() {
  const hud = HUD_MODULES.map((m) => `\`${m}\``).join(", ");
  return `${table(CORE_ATTRIBUTES)}\n\nHUD modules (\`hud\` in deck.config.mjs, an edition's \`"hud"\`): ${hud}. Each shows unless set to \`false\`.`;
}

function own() {
  const L = scene.pageLists("en", null);
  const rules = scene.schema?.attributes ? scene.schema.attributes(L) : {};
  const kindChecks = scene.schema?.shotKinds ? scene.schema.shotKinds(L) : {};
  const kinds = Object.keys(kindChecks).map((k) => (kindChecks[k]("") ? k : `${k}:<id>`));
  const shots = [...Object.keys(scene.shots || {}), ...Object.keys(scene.sets?.shots || {})];
  const sets = (scene.sets?.defs || []).map((d) => d.name);
  return [
    table(rules),
    "",
    `Shots (\`data-shot\`): ${shots.map((s) => `\`${s}\``).join(", ")}${kinds.length ? `; kinds: ${kinds.map((k) => `\`${k}\``).join(", ")}` : ""}.`,
    sets.length ? `\nSets (\`data-set\`): ${sets.map((s) => `\`${s}\``).join(", ")}.` : "",
  ].join("\n");
}

function generated(file, body) {
  if (!existsSync(file)) return found.push(`${file}: missing (run npm run docs to write it)`);
  const md = readFileSync(file, "utf8");
  const i = md.indexOf(START);
  const j = md.indexOf(END, i);
  if (i < 0 || j < 0) return found.push(`${file}: no ${START} … ${END} block`);
  const next = `${md.slice(0, i + START.length)}\n${body}\n${md.slice(j)}`;
  if (next === md) return;
  if (write) {
    writeFileSync(file, next);
    console.log(`  wrote ${file}`);
  } else found.push(`${file}: the attribute reference is stale (run npm run docs)`);
}

generated(join(FW_DOCS, "contract.md"), core());
if (isDeck) generated(config.docs?.attributes || "docs/attributes.md", own());

// ---------- the version ----------

// A deck's version lives in its package.json (the build writes it into the HUD): a page that writes its own
// would go stale at the next delivery
for (const page of isDeck ? config.pages : []) {
  const own = readFileSync(page.src, "utf8").match(/<span\b[^>]*\bclass="hud-version"[^>]*>([^<]+)<\/span>/)?.[1].trim();
  if (own) found.push(`${page.src}: .hud-version says "${own}": leave it empty, the build writes package.json's version`);
}

// ---------- paths and scripts ----------

const ignore = config.docs?.ignore || [];
const docs = ["CLAUDE.md", "README.md", ...[...(isDeck ? ["docs"] : []), FW_DOCS].flatMap((d) => (existsSync(d) ? readdirSync(d).filter((f) => f.endsWith(".md")).map((f) => join(d, f)) : []))].filter((f) => !ignore.includes(f));
const ROOTS = /^(src|framework|css|docs|fonts|assets|brand|decks|dist)\//;
// Docs write paths from the repository's root (or the deck's folder)
let top = process.cwd();
try {
  top = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
} catch {}
const real = (path) => existsSync(path) || existsSync(join(top, path));
// The framework's docs, stage skills and agents describe any deck, so they name files a deck has or makes as it
// goes (docs/model.md, css/deck.css…): only their framework paths are checked. A deck's own docs are checked in full.
const FW = join(FW_DOCS, "..");
const method = [
  ...docs.filter((f) => f.startsWith(FW_DOCS + "/")),
  ...(existsSync(join(FW, "skills")) ? readdirSync(join(FW, "skills")).map((d) => join(FW, "skills", d, "SKILL.md")) : []),
  ...(existsSync(join(FW, "agents")) ? readdirSync(join(FW, "agents")).filter((f) => f.endsWith(".md")).map((f) => join(FW, "agents", f)) : []),
];
for (const file of [...new Set([...docs, ...method])].filter(existsSync)) {
  const md = readFileSync(file, "utf8");
  const roots = method.includes(file) ? /^framework\// : ROOTS;
  for (const m of md.matchAll(/`([^`\s]+)`/g)) {
    const path = m[1].replace(/:\d+(-\d+)?$/, "").replace(/[),.;]+$/, "");
    if (!roots.test(path) || /[<>*{}|]/.test(path)) continue;
    if (!real(path)) found.push(`${file}: names \`${path}\`, which does not exist`);
  }
}

const scripts = Object.keys(JSON.parse(readFileSync("package.json", "utf8")).scripts || {});
const readme = existsSync("README.md") ? readFileSync("README.md", "utf8") : "";
const GATES = join(FW_DOCS, "gates.md");
const gates = existsSync(GATES) ? readFileSync(GATES, "utf8") : "";
for (const s of scripts) {
  if (!readme.includes(`npm run ${s}`) && !(s === "build" && readme.includes("npm run build"))) found.push(`README.md: npm run ${s} is not documented`);
  if (/^(check|gate|qa)/.test(s) && !gates.includes(`npm run ${s}`)) found.push(`${GATES}: npm run ${s} is not documented`);
}

found.forEach((f) => console.log(`  ${f}`));
console.log(found.length ? `check:docs: ${found.length} finding(s)` : "check:docs ok");
process.exit(found.length ? 1 : 0);
