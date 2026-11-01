// Bundles src/ into one classic script (dist/deck.js) so index.html runs from file:// with no server.
// Chrome blocks ES modules on file://, hence the IIFE format.
// A full build also writes dist/the-augmented-pdlc.html: index.html with its styles, script and images
// inlined, the one file to mail.
import * as esbuild from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";
import { CONCERNS } from "../src/data.js";

const watch = process.argv.includes("--watch");
const serve = process.argv.includes("--serve");
const SINGLE = "dist/the-augmented-pdlc.html";

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
function single() {
  let html = readFileSync("index.html", "utf8");
  html = html.replace(/<link rel="stylesheet" href="(css\/[^"]+)">/g, (_, path) => `<style>\n${readFileSync(path, "utf8")}</style>`);
  html = html.replace(/<script src="(dist\/[^"]+)"><\/script>/g, (_, path) =>
    `<script>\n${readFileSync(path, "utf8").replace(/<\/script/gi, "<\\/script")}</script>`);
  html = html.replace(/src="(assets\/[^"]+\.png)"/g, (_, path) => `src="data:image/png;base64,${readFileSync(path).toString("base64")}"`);
  // The problem card's questions, written in so the reading version (no scripts) shows them too
  const questions = CONCERNS.map((c) => `<li data-concern="${c.id}">${c.question}</li>`).join("");
  html = html.replace('<ul class="concerns"></ul>', () => `<ul class="concerns">${questions}</ul>`);
  const left = html.match(/(href|src)="(css|dist|assets|fonts)\/[^"]*"/g);
  if (left) throw new Error(`${SINGLE}: not inlined: ${left.join(", ")}`);
  writeFileSync(SINGLE, html);
  console.log(`  ${SINGLE}  ${(html.length / 1024).toFixed(0)}kb`);
}

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  if (serve) {
    const { port } = await ctx.serve({ servedir: ".", port: 8080 });
    console.log(`serving on http://localhost:${port}/`);
  }
} else {
  await esbuild.build(options);
  single();
}
