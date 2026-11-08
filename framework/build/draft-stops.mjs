// Drafts the page's stops and the HUD lists from the outline (process.md stage 3): one <section class="stop"> per
// outline stop with its section, crumb, questions and source, one beat per outline beat, a card holding the
// outline's text, and what the room sees as a comment for the stop author. Shots, focus, labels and the red word
// are left to the author: the build's lint and check:copy say what is still missing.
//   node framework/build/draft-stops.mjs [inputs/outline.md] [--force]
// Writes index.html (its <title>, from the outline's, and between <div id="stops"> and the HUD) and src/lists.js; refuses to replace stops or lists
// that are already there unless --force.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { parseOutline } from "./outline.mjs";

const args = process.argv.slice(2);
const force = args.includes("--force");
const src = resolve(args.find((a) => !a.startsWith("-")) || "inputs/outline.md");
const config = (await import(resolve("deck.config.mjs"))).default;
const page = resolve(config.pages[0].src);
const listsFile = resolve("src/lists.js");

const { map, errors } = parseOutline(readFileSync(src, "utf8"), { figures: config.copy?.figures });
if (errors.length) {
  errors.forEach((e) => console.error(`error ${e}`));
  console.error("draft-stops: fix the outline first (npm run outline)");
  process.exit(1);
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const comment = (s) => s.replace(/--/g, "–");
let n = 0;
const sections = map.acts
  .flatMap((act) =>
    act.stops.map((s) => {
      n++;
      const attrs = [`id="${s.id}"`, `class="stop"`, `data-section="${act.id}"`, `data-crumb="${esc(s.title)}"`];
      if (s.answers.length) attrs.push(`data-answers="${s.answers.join(",")}"`);
      if (s.sources.length) attrs.push(`data-source="${esc(s.sources.join(" · "))}"`);
      attrs.push(`data-anchor="screen"`, `data-side="left"`);
      const lines = [`  <section ${attrs.join(" ")}>`];
      if (s.sees) lines.push(`    <!-- sees: ${comment(s.sees)} -->`);
      if (s.draft) lines.push(`    <!-- draft: rests on content not confirmed yet -->`);
      if (s.beats.length) {
        lines.push(`    <div class="beat"></div>`);
        for (const b of s.beats) lines.push(`    <div class="beat"><!-- beat ${b.n}: ${comment(b.text)} --></div>`);
      }
      lines.push(
        `    <div class="card">`,
        `      <p class="card-num">${String(n).padStart(2, "0")}</p>`,
        `      <h2>${esc(s.title)}</h2>`,
        `      <p class="card-desc">${esc(s.says)}</p>`,
        `    </div>`,
        `  </section>`,
      );
      return lines.join("\n");
    }),
  )
  .join("\n\n");

const html = readFileSync(page, "utf8");
const open = html.indexOf('<div id="stops">');
const close = html.indexOf('<div class="hud">', open);
if (open < 0 || close < 0) {
  console.error(`draft-stops: ${config.pages[0].src} has no <div id="stops"> followed by <div class="hud">`);
  process.exit(1);
}
const inner = html.slice(open, close);
if (/<section [^>]*class="stop"/.test(inner) && !force) {
  console.error(`draft-stops: ${config.pages[0].src} already has stops; --force replaces them`);
  process.exit(1);
}
const head = html.slice(0, open).replace(/<title>[^<]*<\/title>/, `<title>${esc(map.title)}</title>`);
writeFileSync(page, `${head}<div id="stops">\n\n${sections}\n\n</div>\n\n${html.slice(close)}`);
console.log(`draft-stops: ${n} stops in ${config.pages[0].src}`);

if (existsSync(listsFile) && !force) console.log("draft-stops: src/lists.js kept (--force rewrites it)");
else {
  const mention = existsSync(listsFile) ? readFileSync(listsFile, "utf8").match(/export const MENTION = (".*");/)?.[1] : null;
  const js = (a) => `[\n${a.map((o) => `  { ${Object.entries(o).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(", ")} },`).join("\n")}\n]`;
  writeFileSync(
    listsFile,
    `// The lists the HUD shows: the acts (breadcrumb and bar) and the questions the steps answer.
// Drafted from the outline by framework/build/draft-stops.mjs; edit freely after that.
export const SECTIONS = ${js(map.acts.map((a) => ({ id: a.id, name: a.name })))};
export const QUESTIONS = ${js(map.questions)};
export const MENTION = ${mention || JSON.stringify("© ZENIKA 2026 · All Rights Reserved")};
`,
  );
  console.log(`draft-stops: ${map.acts.length} sections, ${map.questions.length} questions in src/lists.js`);
}
if (!map.questions.length && config.hud?.questions !== false) console.log("draft-stops: the outline declares no questions; set hud.questions to false in deck.config.mjs");
