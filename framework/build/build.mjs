// Bundles the deck's entry (deck.config.mjs entry) into one classic script so the pages run from file:// with
// no server: Chrome blocks ES modules on file://, hence the IIFE format.
// A full build also writes each page's single file (config pages[].out): the page with its styles, script and
// images inlined, the one file to mail. Client editions (editions/<name>/index.html, gitignored) build into
// editions/<name>/dist/ the same way, their file named by <meta name="single-file">.
//   --watch --serve   rebuild on change and serve the folder on :8080 (a dev bundle, with a source map)
import * as esbuild from "esbuild";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { lintStops } from "./lint-stops.mjs";

const watch = process.argv.includes("--watch");
const serve = process.argv.includes("--serve");
const config = (await import(pathToFileURL(resolve("deck.config.mjs")).href)).default;
const scene = (await import(pathToFileURL(resolve(config.scene)).href)).default;

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

// Each edition names its single file in <meta name="single-file">; its lists come from its own block
function editions() {
  const dir = config.editions || "editions";
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, "index.html")))
    .map((d) => {
      const src = join(dir, d.name, "index.html");
      const html = readFileSync(src, "utf8");
      const file = html.match(/<meta\b(?=[^>]*\bname="single-file")[^>]*\bcontent="([^"]+)"/)?.[1] ?? `${d.name}.html`;
      const lang = html.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1] || "en";
      return { name: d.name, src, out: join(dir, d.name, "dist", file), lang, edition: true };
    });
}

// The deck's version is its package.json's: the HUD shows v<major>.<minor>, and the patch when it is not 0
// (0.2.0 → v0.2, 0.2.1 → v0.2.1). The bundle carries it (DECK_VERSION) and each single file has it written in, so
// the reading version shows it too. A page that writes its own (an edition) keeps it.
const pkg = existsSync("package.json") ? JSON.parse(readFileSync("package.json", "utf8")) : {};
export const VERSION = pkg.version ? `v${pkg.version.split(".").filter((n, i) => i < 2 || n !== "0").join(".")}` : "";

const options = {
  define: { DECK_VERSION: JSON.stringify(VERSION) },
  entryPoints: [config.entry],
  outfile: config.bundle,
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
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// The HUD modules a page shows: the config's, then its edition's
const hudOf = (edition) => ({ ...config.hud, ...edition?.hud });

function single({ src, out, lang, edition: isEdition }) {
  const from = (path) => join(dirname(src), path);
  let html = readFileSync(src, "utf8");
  const edition = readEdition(src, html, isEdition);
  const L = scene.pageLists(lang, edition);
  const hud = hudOf(edition);
  const { errors, warnings } = lintStops(src, html, scene, L, { questions: hud.questions !== false, themes: ["light", "dark", "blueprint", ...Object.keys(config.themes || {})] });
  warnings.forEach((w) => console.warn(`  warning ${w}`));
  if (errors.length) throw new Error(`stop attributes that name nothing:\n  ${errors.join("\n  ")}`);
  // Images first: the bundle inlined below must not be scanned for src="…"
  html = html.replace(/src="([^":]+\.(png|svg|jpe?g|webp|gif))"/g, (_, path, ext) => `src="data:${MIME[ext]};base64,${readFileSync(from(path)).toString("base64")}"`);
  // Stylesheets, whatever the order of the link's attributes
  html = html.replace(/<link\b[^>]*>/g, (tag) => {
    if (attr(tag, "rel") !== "stylesheet") return tag;
    const href = attr(tag, "href");
    return href && !/^(https?:|data:)/.test(href) ? `<style>\n${readFileSync(from(href), "utf8")}</style>` : tag;
  });
  html = html.replace(/<script src="([^"]+\.js)"><\/script>/g, (_, path) => `<script>\n${readFileSync(from(path), "utf8").replace(/<\/script/gi, "<\\/script")}</script>`);
  // A card that asks the questions in full gets them written in, so the reading version (no scripts) shows them
  // too; with the HUD's questions off, the list leaves the page
  html = html.replace(/<ul\b([^>]*)\bdata-list="questions"([^>]*)><\/ul>/g, (_, a, b) =>
    hud.questions === false ? "" : `<ul${a}data-list="questions"${b}>${L.questions.map((q) => `<li data-question="${q.id}">${escape(q.question)}</li>`).join("")}</ul>`,
  );
  // Anything still pointing at a local file would break in the mailed copy
  const left = [
    ...(html.match(/(href|src|poster)="(?!data:|https?:|mailto:|#)[^"]+\.(css|js|png|svg|jpe?g|webp|gif|woff2?)"/g) || []),
    ...(html.match(/srcset="[^"]*"/g) || []),
    ...(html.match(/url\((?!\s*["']?(data:|https?:|#))[^)]*\)/g) || []),
  ];
  if (left.length) throw new Error(`${out}: not inlined: ${left.join(", ")}`);
  html = html.replace(/(<span\b[^>]*\bclass="hud-version"[^>]*>)(<\/span>)/, (_, open, close) => open + VERSION + close);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`  ${out}  ${(html.length / 1024).toFixed(0)}kb`);
}

// A translated page must keep its original's stops, beats and attributes; only the prose and the attributes
// config.parityIgnore lists (data-crumb by default) differ. Any element that is a stop or a beat, or carries data-beat
// or data-from, counts, whatever its tag (a table cell, an image); its prose attributes (alt, title, aria-label) may differ
function parity(page) {
  const ignore = [...(config.parityIgnore || ["data-crumb"]), "alt", "title", "aria-label"];
  const shape = (src) => {
    const stops = readFileSync(src, "utf8").split('<div id="stops">')[1]?.split('<div class="hud"')[0];
    if (!stops) throw new Error(`${src}: no <div id="stops">`);
    return [...stops.matchAll(/<([a-z][a-z0-9]*)\b[^>]*\b(class="[^"]*\b(stop|beat)\b[^"]*"|data-beat|data-from)[^>]*>/g)].map((m) =>
      ignore.reduce((t, a) => t.replace(new RegExp(`\\s${a}="[^"]*"`, "g"), ""), m[0]).replace(/\s+/g, " "),
    );
  };
  const [a, b] = [shape(page.parity), shape(page.src)];
  let i = a.findIndex((tag, k) => tag !== b[k]);
  if (i < 0 && a.length !== b.length) i = Math.min(a.length, b.length);
  if (i >= 0) throw new Error(`${page.src} drifted from ${page.parity} at tag ${i}:\n  ${page.parity} ${a[i] ?? "(none)"}\n  ${page.src} ${b[i] ?? "(none)"}`);
}

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  if (serve) {
    // A deck in a repository of decks links ../../framework/: serve from the repository's root (the folder whose
    // package.json lists workspaces), so those links resolve
    let top = resolve(".");
    for (let d = top; dirname(d) !== d; d = dirname(d)) {
      const pkg = join(d, "package.json");
      if (existsSync(pkg) && JSON.parse(readFileSync(pkg, "utf8")).workspaces) {
        top = d;
        break;
      }
    }
    const { port } = await ctx.serve({ servedir: top, port: 8080 });
    const at = relative(top, resolve(".")).split(sep).join("/");
    config.pages.forEach((p) => console.log(`serving http://localhost:${port}/${at ? `${at}/` : ""}${p.src}`));
  }
} else {
  config.pages.filter((p) => p.parity).forEach(parity);
  await esbuild.build(options);
  config.pages.forEach(single);
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
