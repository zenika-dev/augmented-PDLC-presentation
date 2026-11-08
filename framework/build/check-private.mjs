// Run before every push (npm run check:private): fails when client material could leave the machine.
// - nothing under editions/ may be tracked;
// - no term listed in editions/*/private-terms.txt (one per line, # for comments; whole words, any case)
//   may appear in the tracked files or in the commits not yet on origin/main.
// The terms live in the ignored editions, so this script names no client itself.
// It checks the whole repository whichever folder it runs in: a deck's, or the root of a repository of decks.
import { execFileSync } from "node:child_process";
import { existsSync, lstatSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const TOP = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
const config = existsSync("deck.config.mjs") ? (await import(pathToFileURL(resolve("deck.config.mjs")).href)).default : {};
// The repository's editions/ always, and the deck's own folder of editions when it names another
const EDITION_DIRS = [...new Set([join(TOP, "editions"), ...(config.editions ? [resolve(config.editions)] : [])])];

const git = (...args) => {
  try {
    return execFileSync("git", ["-C", TOP, ...args], { encoding: "utf8", maxBuffer: 1 << 28 });
  } catch (e) {
    if (e.status === 1) return ""; // git grep: no match
    throw e;
  }
};

const terms = [
  ...new Set(
    EDITION_DIRS.filter(existsSync)
      .flatMap((dir) => readdirSync(dir).map((d) => join(dir, d, "private-terms.txt")))
      .filter(existsSync)
      .flatMap((f) => readFileSync(f, "utf8").split("\n"))
      .map((t) => t.trim())
      .filter((t) => t && !t.startsWith("#")),
  ),
];

const problems = [];
EDITION_DIRS.forEach((dir) => {
  const tracked = git("ls-files", dir).trim();
  if (tracked) problems.push(`tracked under ${dir}:\n${tracked}`);
});

if (terms.length) {
  const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?=$|[^\\p{L}\\p{N}])`, "iu");
  const hits = (text, where) =>
    text.split("\n").forEach((line, i) => {
      // Inlined fonts and images are base64: skip them
      const plain = line.replace(/base64,[A-Za-z0-9+/=]+/g, "");
      const m = plain.match(pattern);
      if (m) problems.push(`${where(i)}: "${m[2]}"`);
    });
  git("ls-files", "-z")
    .split("\0")
    .filter((f) => f && existsSync(join(TOP, f)) && lstatSync(join(TOP, f)).isFile()) // links and submodules hold no text of ours
    .forEach((f) => {
      const text = readFileSync(join(TOP, f), "utf8");
      if (!text.includes("\0")) hits(text, (i) => `${f}:${i + 1}`);
    });
  const base = git("rev-parse", "--verify", "--quiet", "origin/main").trim();
  // Whole messages, not only subjects: a body can quote a client as easily as a patch
  if (base) hits(git("log", "-p", "--format=commit %h%n%B", `${base}..HEAD`), (i) => `unpushed commits, log line ${i + 1}`);
  else console.warn("check:private: no origin/main, unpushed commits not checked (git fetch first)");
}

// The committed bundles are minified ones: a watch build (npm run dev) carries an inline source map
git("ls-files", "-z")
  .split("\0")
  .filter((f) => /(^|\/)dist\/deck\.js$/.test(f) && existsSync(join(TOP, f)))
  .filter((f) => readFileSync(join(TOP, f), "utf8").includes("sourceMappingURL="))
  .forEach((f) => problems.push(`${f} is a dev build (source map inside): run npm run build`));

if (problems.length) {
  console.error(`Private material found, do not push:\n${problems.map((p) => `  ${p}`).join("\n")}`);
  process.exit(1);
}
console.log(`check:private ok (${terms.length} terms)`);
