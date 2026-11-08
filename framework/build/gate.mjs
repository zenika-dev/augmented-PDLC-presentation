// The quality gate: every check in order, stopping at the first that fails.
//   1 build          parity between translations, the stop lint, inlining (framework/build/build.mjs)
//   2 check:copy     one red word per title, title case, no dash separators, banned variants, sourced figures
//   3 check:private  nothing from a client edition in the tracked tree or the unpushed commits
//   4 check:docs     generated references current, paths in the docs real, scripts documented
//   5 qa audit       every stop and beat at every viewport: overlaps, off-screen, small text, font, console,
//                    names that match no part, requests leaving the file
//   6 qa scene       the three.js structure and cost: tags, line-art materials, draw calls and triangles per stop,
//                    frame times through the moves, leaked geometries (framework/docs/gates.md)
//   7 qa host        each single file in a sandboxed srcdoc frame under a strict policy (SharePoint, Teams)
//   8 qa a11y        contrast against the pixels behind each text, axe-core's WCAG rules, the reading version
//                    and print, a phone held upright, in every theme
//   9 qa diff        only with --base <dir>: a refactor's pixels against a baseline
// Usage: npm run gate [-- --base qa/baseline] [-- --skip qa]
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The scripts sit beside this one, whichever deck folder the gate runs in
const fw = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
const base = args.includes("--base") ? args[args.indexOf("--base") + 1] : null;
const skip = args.includes("--skip") ? args[args.indexOf("--skip") + 1].split(",") : [];

const steps = [
  ["build", [join(fw, "build/build.mjs")]],
  ["check:copy", [join(fw, "build/check-copy.mjs")]],
  ["check:private", [join(fw, "build/check-private.mjs")]],
  ["check:docs", [join(fw, "build/check-docs.mjs")]],
  ["qa", [join(fw, "qa/qa.mjs"), "audit"]],
  ["scene", [join(fw, "qa/qa.mjs"), "scene"]],
  ["host", [join(fw, "qa/qa.mjs"), "host"]],
  ["a11y", [join(fw, "qa/qa.mjs"), "a11y"]],
  ...(base ? [["diff", [join(fw, "qa/qa.mjs"), "diff", "--base", base]]] : []),
];

for (const [name, argv] of steps) {
  if (skip.includes(name)) {
    console.log(`\n▸ ${name}: skipped`);
    continue;
  }
  console.log(`\n▸ ${name}`);
  const r = spawnSync(process.execPath, argv, { stdio: "inherit" });
  if (r.status !== 0) {
    console.log(`\ngate: failed at ${name}`);
    process.exit(1);
  }
}
console.log("\ngate: passed");
