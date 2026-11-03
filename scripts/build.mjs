// Bundles src/ into one classic script (dist/deck.js) so index.html runs from file:// with no server.
// Chrome blocks ES modules on file://, hence the IIFE format.
// A full build also writes dist/the-augmented-pdlc.html: index.html with its styles, script and images
// inlined, the one file to mail; and dist/the-augmented-pdlc.fr.html from index.fr.html, the French version.
import * as esbuild from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";
import { CONCERNS } from "../src/data.js";
import { FR } from "../src/data.fr.js";

const watch = process.argv.includes("--watch");
const serve = process.argv.includes("--serve");
const PAGES = [
  { src: "index.html", out: "dist/the-augmented-pdlc.html", question: (c) => c.question },
  { src: "index.fr.html", out: "dist/the-augmented-pdlc.fr.html", question: (c) => FR.concerns[c.id].question },
];

const options = {
  entryPoints: ["src/main.js"],
  outfile: "dist/deck.js",
  bundle: true,
  format: "iife",
  target: "es2020",
  minify: !watch,
  sourcemap: watch ? "inline" : false,
  legalComments: "eof",
  logLevel: "info",
};

// Functions as replacements: the bundle holds "$" sequences that a replacement string would expand
function single({ src, out, question }) {
  let html = readFileSync(src, "utf8");
  html = html.replace(/<link rel="stylesheet" href="(css\/[^"]+)">/g, (_, path) => `<style>\n${readFileSync(path, "utf8")}</style>`);
  html = html.replace(/<script src="(dist\/[^"]+)"><\/script>/g, (_, path) =>
    `<script>\n${readFileSync(path, "utf8").replace(/<\/script/gi, "<\\/script")}</script>`);
  html = html.replace(/src="(assets\/[^"]+\.png)"/g, (_, path) => `src="data:image/png;base64,${readFileSync(path).toString("base64")}"`);
  // The problem card's questions, written in so the reading version (no scripts) shows them too
  const questions = CONCERNS.map((c) => `<li data-concern="${c.id}">${question(c)}</li>`).join("");
  html = html.replace('<ul class="concerns"></ul>', () => `<ul class="concerns">${questions}</ul>`);
  const left = html.match(/(href|src)="(css|dist|assets|fonts)\/[^"]*"/g);
  if (left) throw new Error(`${out}: not inlined: ${left.join(", ")}`);
  writeFileSync(out, html);
  console.log(`  ${out}  ${(html.length / 1024).toFixed(0)}kb`);
}

// The French page must keep the English one's stops, beats and attributes; only the prose and data-crumb differ
function parity() {
  const shape = (src) => {
    const stops = readFileSync(src, "utf8").split('<div id="stops">')[1].split('<div class="hud"')[0];
    return [...stops.matchAll(/<(section|div|span)\b[^>]*\b(class="(stop|beat)"|data-beat|data-from)[^>]*>/g)]
      .map((m) => m[0].replace(/\sdata-crumb="[^"]*"/g, "").replace(/\s+/g, " "));
  };
  const [en, fr] = PAGES.map((p) => shape(p.src));
  const i = en.findIndex((tag, k) => tag !== fr[k]);
  if (i >= 0 || en.length !== fr.length) {
    throw new Error(`index.fr.html drifted from index.html at tag ${i >= 0 ? i : Math.min(en.length, fr.length)}:\n  en ${en[i] ?? "(none)"}\n  fr ${fr[i] ?? "(none)"}`);
  }
}

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  if (serve) {
    const { port } = await ctx.serve({ servedir: ".", port: 8080 });
    console.log(`serving on http://localhost:${port}/`);
  }
} else {
  parity();
  await esbuild.build(options);
  PAGES.forEach(single);
}
