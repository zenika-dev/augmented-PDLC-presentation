// The hosting folder's front page: <root>/dist/index.html, one entry per deck of a repository of decks (its
// package.json's workspaces), each with a link per page. Run at the root after the decks' builds:
//   node framework/build/site.mjs [--title "Our decks"] [--fonts brand/x/fonts.css] [--logo brand/x/logo.png]
// The page is one self-contained file like the decks' (fonts and logo inlined, no request leaves it), so the
// folder can be served as is, copied to any host or dropped into a document library.
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const arg = (name, fallback) => (args.includes(`--${name}`) ? args[args.indexOf(`--${name}`) + 1] : fallback);
const root = resolve(".");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const out = join(root, "dist", "index.html");
const title = arg("title", pkg.description || "Decks");
const fonts = arg("fonts") ? readFileSync(arg("fonts"), "utf8") : "";
const logo = arg("logo");
const MIME = { ".png": "image/png", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".webp": "image/webp" };
const escape = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const LANGS = { en: "English", fr: "Français", de: "Deutsch", es: "Español", it: "Italiano" };

// Workspaces as globs of one level (decks/*) or plain folders
const folders = (pkg.workspaces || []).flatMap((w) => {
  if (!w.endsWith("/*")) return [w];
  const dir = w.slice(0, -2);
  return existsSync(join(root, dir)) ? readdirSync(join(root, dir), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => join(dir, d.name)).sort() : [];
});

// A deck is a folder with a package.json and a deck.config.mjs whose pages land in the root's dist/
const decks = [];
for (const folder of folders) {
  const dir = join(root, folder);
  if (!existsSync(join(dir, "package.json")) || !existsSync(join(dir, "deck.config.mjs"))) continue;
  const meta = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
  const config = (await import(pathToFileURL(join(dir, "deck.config.mjs")).href)).default;
  const pages = config.pages
    .map((p) => ({ ...p, file: resolve(dir, p.out) }))
    .filter((p) => p.file.startsWith(join(root, "dist")) && existsSync(p.file));
  if (!pages.length) continue;
  // The deck's name: its first page's <title>
  const name = readFileSync(join(dir, pages[0].src), "utf8").match(/<title>([^<]*)<\/title>/)?.[1] || meta.name;
  decks.push({ name, description: meta.description || "", version: meta.version, pages });
}

const image = logo ? `<img src="data:${MIME[extname(logo)]};base64,${readFileSync(logo).toString("base64")}" alt="">` : "";
const items = decks
  .map((d) => {
    const links = d.pages
      .map((p) => `<a href="${escape(relative(join(root, "dist"), p.file).split("\\").join("/"))}" hreflang="${p.lang}">${LANGS[p.lang] || p.lang}</a>`)
      .join("");
    const version = d.version ? `<span class="version">v${escape(d.version.split(".").filter((n, i) => i < 2 || n !== "0").join("."))}</span>` : "";
    return `<li><h2>${escape(d.name)} ${version}</h2><p>${escape(d.description)}</p><nav>${links}</nav></li>`;
  })
  .join("\n      ");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)}</title>
  <style>
${fonts}
    :root { color-scheme: light dark; --bg: #f6f4f8; --card: #ffffff; --ink: #1e1e1e; --muted: #5e615f; --link: #c8102e; --rule: #d9d9d9; }
    @media (prefers-color-scheme: dark) { :root { --bg: #1d1a24; --card: #2a2533; --ink: #f2eff5; --muted: #b9b4c0; --link: #ff8a96; --rule: #3d3647; } }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.5 "Nunito", Arial, sans-serif; }
    main { max-width: 760px; margin: 0 auto; padding: 48px 16px; }
    header { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
    header img { width: 40px; height: 40px; }
    h1 { margin: 0; font-size: 28px; font-weight: 800; }
    ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 16px; }
    li { background: var(--card); border: 1px solid var(--rule); border-radius: 12px; padding: 20px 24px; }
    h2 { margin: 0 0 6px; font-size: 20px; font-weight: 800; }
    .version { font-size: 13px; font-weight: 600; color: var(--muted); letter-spacing: 1px; }
    p { margin: 0 0 12px; color: var(--muted); }
    nav { display: flex; gap: 16px; flex-wrap: wrap; }
    a { color: var(--link); font-weight: 700; text-underline-offset: 3px; }
    a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
  </style>
</head>
<body>
  <main>
    <header>${image}<h1>${escape(title)}</h1></header>
    <ul>
      ${items}
    </ul>
  </main>
</body>
</html>
`;
writeFileSync(out, html);
console.log(`  ${relative(root, out)}  ${decks.length} deck(s)`);
