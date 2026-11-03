// Bundles src/ into one classic script (dist/deck.js) so index.html runs from file:// with no server.
// Chrome blocks ES modules on file://, hence the IIFE format.
// A full build also writes dist/the-augmented-pdlc.html: index.html with its styles, script and images
// inlined, the one file to mail; and dist/the-augmented-pdlc.fr.html from index.fr.html, the French version.
// Client editions (editions/<name>/index.html, gitignored) build into editions/<name>/dist/ the same way.
import * as esbuild from "esbuild";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { CONCERNS } from "../src/data.js";
import { FR } from "../src/data.fr.js";

const watch = process.argv.includes("--watch");
const serve = process.argv.includes("--serve");
const PAGES = [
  { src: "index.html", out: "dist/the-augmented-pdlc.html", question: (c) => c.question },
  { src: "index.fr.html", out: "dist/the-augmented-pdlc.fr.html", question: (c) => FR.concerns[c.id].question },
];

// Each edition names its single file in <meta name="single-file">; its questions come from its own data
function editions() {
  if (!existsSync("editions")) return [];
  return readdirSync("editions", { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join("editions", d.name, "index.html")))
    .map((d) => {
      const src = join("editions", d.name, "index.html");
      const file = readFileSync(src, "utf8").match(/<meta name="single-file" content="([^"]+)">/)?.[1] ?? `${d.name}.html`;
      return { src, out: join("editions", d.name, "dist", file), question: (c) => c.question };
    });
}

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

// Functions as replacements: the bundle holds "$" sequences that a replacement string would expand.
// Paths resolve from the page's own folder, so an edition can link ../../css/ and its own theme.
const MIME = { png: "image/png", svg: "image/svg+xml" };
function single({ src, out, question }) {
  const at = (path) => join(dirname(src), path);
  let html = readFileSync(src, "utf8");
  // Images first: the bundle inlined below must not be scanned for src="…"
  html = html.replace(/src="([^":]+\.(png|svg))"/g, (_, path, ext) => `src="data:${MIME[ext]};base64,${readFileSync(at(path)).toString("base64")}"`);
  html = html.replace(/<link rel="stylesheet" href="([^"]+\.css)">/g, (_, path) => `<style>\n${readFileSync(at(path), "utf8")}</style>`);
  html = html.replace(/<script src="([^"]+\.js)"><\/script>/g, (_, path) =>
    `<script>\n${readFileSync(at(path), "utf8").replace(/<\/script/gi, "<\\/script")}</script>`);
  // The problem card's questions, written in so the reading version (no scripts) shows them too
  const edition = html.match(/<script type="application\/json" id="edition">([\s\S]*?)<\/script>/);
  const concerns = (edition && JSON.parse(edition[1]).concerns) || CONCERNS;
  const questions = concerns.map((c) => `<li data-concern="${c.id}">${question(c)}</li>`).join("");
  html = html.replace('<ul class="concerns"></ul>', () => `<ul class="concerns">${questions}</ul>`);
  const left = html.match(/(href|src)="(?!data:|https?:|mailto:|#)[^"]+\.(css|js|png|svg|woff2?)"/g);
  if (left) throw new Error(`${out}: not inlined: ${left.join(", ")}`);
  mkdirSync(dirname(out), { recursive: true });
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
  [...PAGES, ...editions()].forEach(single);
}
