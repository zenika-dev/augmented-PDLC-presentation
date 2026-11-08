// Scaffolds a new deck from the starter (imports and links rewritten), with a CLAUDE.md that points at the process
// and an empty inputs/ folder. Two modes, by where <dir> is:
//   - inside a repository of decks (its package.json lists workspaces, e.g. decks/my-deck): a package of that
//     repository, linking its framework/ (../../framework) and writing its single files to the root's dist/;
//   - anywhere else: a repository of its own, with a copy of the framework, the stage skills and agents for
//     Claude Code, git and npm.
//   node framework/build/new-deck.mjs <dir> [--title "Deck title"] [--no-git] [--no-install]
// The new deck builds and passes its gate as it is; the starter's three stops stay until stage 3 replaces them
// (npm run stops:draft -- --force). Nothing is pushed anywhere.
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, symlinkSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : def;
};
const dir = args.find((a, i) => !a.startsWith("--") && args[i - 1] !== "--title");
if (!dir) {
  console.error('new-deck: node framework/build/new-deck.mjs <dir> [--title "Deck title"] [--no-git] [--no-install]');
  process.exit(1);
}
const out = resolve(dir);
if (existsSync(out) && readdirSync(out).length) {
  console.error(`new-deck: ${out} exists and is not empty`);
  process.exit(1);
}
const FW = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const STARTER = join(FW, "starter");
const HOME = resolve(FW, ".."); // the repository the framework lives in
const title = opt("title", basename(out).replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()));
const slug = basename(out).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "deck";
const step = (s) => console.log(`new-deck: ${s}`);
// A package of this repository when <dir> sits inside it and the repository is one of decks
const inRepo = !relative(HOME, out).startsWith("..") && !!JSON.parse(readFileSync(join(HOME, "package.json"), "utf8")).workspaces;
// The framework seen from the deck's folder, and from its src/
const fwRel = inRepo ? relative(out, FW).split("\\").join("/") : "framework";
// The brand's fonts (brand/<name>/fonts.css), if the repository has one
const brandFonts = existsSync(join(HOME, "brand")) ? readdirSync(join(HOME, "brand")).map((b) => join(HOME, "brand", b, "fonts.css")).find(existsSync) : null;

// 1. The framework (a repository of its own), without anything the starter builds or writes
const SKIP = new Set(["node_modules", "dist", "qa", ".deck"]);
if (!inRepo) {
  cpSync(FW, join(out, "framework"), {
    recursive: true,
    filter: (src) => {
      const rel = relative(FW, src).split("/");
      return !(rel[0] === "starter" && SKIP.has(rel[1])) && !rel.includes("node_modules");
    },
  });
  step("framework/ copied");
}

// 2. The starter deck at the root, its paths pointing into framework/
const write = (path, text) => {
  mkdirSync(dirname(join(out, path)), { recursive: true });
  writeFileSync(join(out, path), text);
};
const read = (path) => readFileSync(join(STARTER, path), "utf8");
for (const f of readdirSync(join(STARTER, "src")))
  write(
    `src/${f}`,
    read(`src/${f}`)
      .replace(/(["'])\.\.\/\.\.\//g, `$1../${fwRel}/`)
      .replace(/^\/\/ The starter deck: the framework's core on a toy scene$/m, `// ${title}: the framework's core on the deck's scene (src/scene.js)`),
  );
// The starter's own words would outlive it: the deck's headings from the start
write(
  "docs/attributes.md",
  read("docs/attributes.md")
    .replace(/^# The starter scene's attributes$/m, `# ${title}: the scene's attributes`)
    .replace(/^What the toy scene adds to stops and beats, on top of the core's \(`\.\.\/docs\/contract\.md`\)\./m, "What the scene adds to stops and beats, on top of the core's (`framework/docs/contract.md`)."),
);
const config = read("deck.config.mjs")
  .replace(/^\/\/ The starter deck's config:.*$/m, `// ${title}: pages, HUD modules, sets, copy rules, QA viewports (framework/docs/contract.md, The config)`)
  .replace(/name: "starter", src: "index.html", out: "dist\/starter\.html"/, `name: "${slug}", src: "index.html", out: "${inRepo ? `${relative(out, HOME).split("\\").join("/")}/` : ""}dist/${slug}.html"`);
write("deck.config.mjs", config);
// In a repository of decks the page links the brand's fonts where they are; a repository of its own copies them
const fontsHref = inRepo && brandFonts ? relative(out, brandFonts).split("\\").join("/") : "css/fonts.css";
const html = read("index.html")
  .replace(/href="\.\.\/css\//g, `href="${fwRel}/css/`)
  .replace(new RegExp(`(\\s*)<link rel="stylesheet" href="${fwRel.replace(/[./]/g, "\\$&")}\\/css\\/tokens\\.css">`), `$1<link rel="stylesheet" href="${fontsHref}">$&`)
  .replace(new RegExp(`(<link rel="stylesheet" href="${fwRel.replace(/[./]/g, "\\$&")}\\/css\\/components\\.css">)`), '$1\n  <link rel="stylesheet" href="css/deck.css">')
  .replace(/<meta name="single-file" content="[^"]*">/, `<meta name="single-file" content="${slug}.html">`)
  .replace(/<title>[^<]*<\/title>/, `<title>${title.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</title>`)
  .replace(/docs\/attributes\.md this scene's \(data-lift\)\./, "docs/attributes.md this scene's.");
write("index.html", html);
if (fontsHref === "css/fonts.css") {
  if (brandFonts) cpSync(brandFonts, join(out, "css/fonts.css"));
  else write("css/fonts.css", "/* The deck's fonts: @font-face rules with the files inlined, so the mailed file needs no network */\n");
}
write(
  "css/deck.css",
  `/* ${title}: the deck's own components and theme, on top of framework/css/ (framework/docs/contract.md, The theme).
   Line-art colours on :root (--art-*, --art-dark-*). Role tokens in the deck layer: the light theme on
   body:not([data-theme="dark"]) (so the reading version and print get it too), the dark one on
   body[data-theme="dark"]. */
@layer deck {
}

@layer components {
}
`,
);
step("starter deck at the root, paths rewritten");

// 3. package.json: the starter's scripts from the root, the framework's dependencies
const pkg = JSON.parse(read("package.json"));
const home = JSON.parse(readFileSync(join(HOME, "package.json"), "utf8"));
// In a repository of decks the root holds the dependencies and the new-deck script
const scripts = Object.fromEntries(Object.entries(pkg.scripts).filter(([k]) => !(inRepo && k === "new-deck")).map(([k, v]) => [k, v.replace(/node \.\.\//, `node ${fwRel}/`)]));
write("package.json", JSON.stringify({ name: slug, private: true, version: "0.1.0", description: title, type: "module", scripts, ...(inRepo ? {} : { devDependencies: home.devDependencies }) }, null, 2) + "\n");

// 4. Claude Code: the stage skills and agents (linked into framework/; a repository of decks has them at its
// root already), the three.js skills, CLAUDE.md
if (!inRepo) {
  mkdirSync(join(out, ".claude/skills"), { recursive: true });
  mkdirSync(join(out, ".claude/agents"), { recursive: true });
  for (const s of readdirSync(join(FW, "skills"))) symlinkSync(`../../framework/skills/${s}`, join(out, ".claude/skills", s));
  for (const a of readdirSync(join(FW, "agents"))) symlinkSync(`../../framework/agents/${a}`, join(out, ".claude/agents", a));
  // On a fresh clone, Claude learns that /welcome exists (framework/hooks/welcome.sh)
  write(".claude/settings.json", readFileSync(join(HOME, ".claude/settings.json"), "utf8"));
  const three = join(HOME, ".agents/skills");
  if (existsSync(three))
    for (const s of readdirSync(three).filter((s) => s.startsWith("threejs-"))) cpSync(join(three, s), join(out, ".claude/skills", s), { recursive: true, dereference: true });
}
// In a repository of decks the fonts are the brand's, named from the repository's root as its docs do
const fill = (t) =>
  t.replaceAll("{{title}}", title).replace("`css/fonts.css` (Nunito, inlined by the build)", fontsHref === "css/fonts.css" ? "$&" : `\`${relative(HOME, brandFonts).split("\\").join("/")}\` (the brand's fonts, inlined by the build)`);
write("CLAUDE.md", fill(readFileSync(join(FW, "templates/CLAUDE.md"), "utf8")));
write("docs/progress.md", readFileSync(join(FW, "templates/progress.md"), "utf8"));
write("docs/model.md", fill(readFileSync(join(FW, "templates/model.md"), "utf8")));
write("README.md", fill(readFileSync(join(FW, "templates/README.md"), "utf8")));
if (!inRepo) write(".gitignore", readFileSync(join(FW, "templates/gitignore"), "utf8"));
write("inputs/illustrations/.gitkeep", "");
write(
  "inputs/README.md",
  "# Inputs\n\nPut the deck's outline here as `outline.md` and its illustrations in `illustrations/` (`subject-<part>.png`, `style-<name>.png`). The format is in `framework/docs/inputs.md`; `framework/starter/inputs/` is a small example. Then run `/deck` in Claude Code.\n",
);
step("Claude Code skills, agents and CLAUDE.md");

// 5. Installed and built; a repository of its own gets git
const run = (cmd, a, cwd = out) => execFileSync(cmd, a, { cwd, stdio: ["ignore", "pipe", "inherit"] });
if (!flag("no-install")) {
  step("npm install…");
  run("npm", ["install", "--no-audit", "--no-fund"], inRepo ? HOME : out);
  run("npm", ["run", "build"]);
  step("built");
}
if (!inRepo && !flag("no-git")) {
  run("git", ["init", "-q"]);
  run("git", ["add", "-A"]);
  run("git", ["commit", "-q", "-m", `New deck: ${title}\n\nScaffolded from the deck framework (framework/build/new-deck.mjs).`]);
  step("git repository with one commit");
}
console.log(`\n${title} is ready in ${out}\n  1. put the outline and illustrations in inputs/ (framework/docs/inputs.md)\n  2. ${inRepo ? "in Claude Code at the repository's root, run /deck for this deck" : "start Claude Code there and run /deck"}`);
