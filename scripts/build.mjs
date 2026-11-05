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
import { lintStops } from "./lint-stops.mjs";

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
      const file = readFileSync(src, "utf8").match(/<meta\b(?=[^>]*\bname="single-file")[^>]*\bcontent="([^"]+)"/)?.[1] ?? `${d.name}.html`;
      return { src, out: join("editions", d.name, "dist", file), question: (c) => c.question, edition: true };
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
const MIME = { png: "image/png", svg: "image/svg+xml", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif" };

// The page's #edition block, whatever the order of its attributes; a page under editions/ must have one
function readEdition(src, html, required) {
  const block = html.match(/<script\b(?=[^>]*\bid="edition")[^>]*>([\s\S]*?)<\/script>/);
  if (!block) {
    if (required) throw new Error(`${src}: no <script type="application/json" id="edition"> block`);
    return null;
  }
  try {
    return JSON.parse(block[1]);
  } catch (e) {
    throw new Error(`${src}: the #edition block is not valid JSON: ${e.message}`);
  }
}

function single({ src, out, question, edition: isEdition }) {
  const at = (path) => join(dirname(src), path);
  let html = readFileSync(src, "utf8");
  // Images first: the bundle inlined below must not be scanned for src="…"
  const edition = readEdition(src, html, isEdition);
  const lint = lintStops(src, html, edition);
  if (lint.length) throw new Error(`stop attributes that name nothing:\n  ${lint.join("\n  ")}`);
  html = html.replace(/src="([^":]+\.(png|svg|jpe?g|webp|gif))"/g, (_, path, ext) => `src="data:${MIME[ext]};base64,${readFileSync(at(path)).toString("base64")}"`);
  html = html.replace(/<link rel="stylesheet" href="([^"]+\.css)">/g, (_, path) => `<style>\n${readFileSync(at(path), "utf8")}</style>`);
  html = html.replace(/<script src="([^"]+\.js)"><\/script>/g, (_, path) =>
    `<script>\n${readFileSync(at(path), "utf8").replace(/<\/script/gi, "<\\/script")}</script>`);
  // The problem card's questions, written in so the reading version (no scripts) shows them too
  const concerns = edition?.concerns || CONCERNS;
  const questions = concerns.map((c) => `<li data-concern="${c.id}">${question(c)}</li>`).join("");
  html = html.replace('<ul class="concerns"></ul>', () => `<ul class="concerns">${questions}</ul>`);
  // Anything still pointing at a local file would break in the mailed copy
  const left = [
    ...(html.match(/(href|src|poster)="(?!data:|https?:|mailto:|#)[^"]+\.(css|js|png|svg|jpe?g|webp|gif|woff2?)"/g) || []),
    ...(html.match(/srcset="[^"]*"/g) || []),
    ...(html.match(/url\((?!\s*["']?(data:|https?:|#))[^)]*\)/g) || []),
  ];
  if (left.length) throw new Error(`${out}: not inlined: ${left.join(", ")}`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`  ${out}  ${(html.length / 1024).toFixed(0)}kb`);
}

// The French page must keep the English one's stops, beats and attributes; only the prose and data-crumb differ
function parity() {
  const shape = (src) => {
    const stops = readFileSync(src, "utf8").split('<div id="stops">')[1]?.split('<div class="hud"')[0];
    if (!stops) throw new Error(`${src}: no <div id="stops">`);
    return [...stops.matchAll(/<(section|div|span)\b[^>]*\b(class="[^"]*\b(stop|beat)\b[^"]*"|data-beat|data-from)[^>]*>/g)]
      .map((m) => m[0].replace(/\sdata-crumb="[^"]*"/g, "").replace(/\s+/g, " "));
  };
  const [en, fr] = PAGES.map((p) => shape(p.src));
  let i = en.findIndex((tag, k) => tag !== fr[k]);
  if (i < 0 && en.length !== fr.length) i = Math.min(en.length, fr.length);
  if (i >= 0) {
    throw new Error(`index.fr.html drifted from index.html at tag ${i}:\n  en ${en[i] ?? "(none)"}\n  fr ${fr[i] ?? "(none)"}`);
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
  // A broken edition reports its error without blocking the public files
  let failed = 0;
  editions().forEach((page) => {
    try {
      single(page);
    } catch (e) {
      failed++;
      console.error(`  ${page.src}: ${e.message}`);
    }
  });
  if (failed) process.exitCode = 1;
}
