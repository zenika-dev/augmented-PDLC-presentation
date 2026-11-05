// Run before every push (npm run check:private): fails when client material could leave the machine.
// - nothing under editions/ may be tracked;
// - no term listed in editions/*/private-terms.txt (one per line, # for comments; whole words, any case)
//   may appear in the tracked files or in the commits not yet on origin/main.
// The terms live in the ignored editions, so this script names no client itself.
import { execFileSync } from "node:child_process";
import { existsSync, lstatSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const git = (...args) => {
  try {
    return execFileSync("git", args, { encoding: "utf8", maxBuffer: 1 << 28 });
  } catch (e) {
    if (e.status === 1) return ""; // git grep: no match
    throw e;
  }
};

const terms = existsSync("editions")
  ? readdirSync("editions")
      .map((d) => join("editions", d, "private-terms.txt"))
      .filter(existsSync)
      .flatMap((f) => readFileSync(f, "utf8").split("\n"))
      .map((t) => t.trim())
      .filter((t) => t && !t.startsWith("#"))
  : [];

const problems = [];
const tracked = git("ls-files", "editions").trim();
if (tracked) problems.push(`tracked under editions/:\n${tracked}`);

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
    .filter((f) => f && existsSync(f) && lstatSync(f).isFile()) // links and submodules hold no text of ours
    .forEach((f) => {
      const text = readFileSync(f, "utf8");
      if (!text.includes("\0")) hits(text, (i) => `${f}:${i + 1}`);
    });
  const base = git("rev-parse", "--verify", "--quiet", "origin/main").trim();
  // Whole messages, not only subjects: a body can quote a client as easily as a patch
  if (base) hits(git("log", "-p", "--format=commit %h%n%B", `${base}..HEAD`), (i) => `unpushed commits, log line ${i + 1}`);
  else console.warn("check:private: no origin/main, unpushed commits not checked (git fetch first)");
}

// The committed bundle is the minified one: a watch build (npm run dev) carries an inline source map
if (existsSync("dist/deck.js") && readFileSync("dist/deck.js", "utf8").includes("sourceMappingURL=")) {
  problems.push("dist/deck.js is a dev build (source map inside): run npm run build");
}

if (problems.length) {
  console.error(`Private material found, do not push:\n${problems.map((p) => `  ${p}`).join("\n")}`);
  process.exit(1);
}
console.log(`check:private ok (${terms.length} terms)`);
