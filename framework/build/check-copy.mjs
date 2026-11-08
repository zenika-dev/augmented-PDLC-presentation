// Copy and brand rules on every page's cards (the text between <div id="stops"> and the HUD), from the
// deck's config (deck.config.mjs copy):
//   - one red word per title: exactly one <em> in each card's h1 / h2
//   - no em dash used as a separator (" — ")
//   - titles in title case (English) or sentence case (French, with the narrow no-break space before : ; ? !)
//   - none of the banned variants (copy.banned: [{ pattern, why }])
//   - every figure (copy.figures: a pattern) on a stop that names its source (data-source)
//   - no red text on a dark theme: a red role token in a dark block of the page's stylesheets
//   - the names on the drawing (the scene's names list, as the page's language and edition patch it): no
//     banned variant, no dash separator
// Exit code 1 on any finding. Editions are checked too; a client's own wording may set its title style in its
// #edition block ("copy": { "titles": "sentence" | "title" | "off" }).
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const config = (await import(pathToFileURL(resolve("deck.config.mjs")).href)).default;
const rules = config.copy || {};
const scene = config.scene ? (await import(pathToFileURL(resolve(config.scene)).href)).default : null;

// Words a title keeps in lower case (English title case)
const SMALL = new Set(rules.smallWords || ["a", "an", "the", "and", "but", "or", "nor", "for", "so", "yet", "as", "at", "by", "in", "of", "off", "on", "per", "to", "up", "via", "vs", "with", "from", "into", "than", "over"]);

const decode = (s) =>
  s
    .replace(/&#8239;/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&#8209;/g, "‑")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
const text = (html) => decode(html.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, " ")).replace(/[ \t\n\r]+/g, " ").trim();

function pages() {
  const list = config.pages.map((p) => ({ src: p.src, lang: p.lang }));
  const dir = config.editions || "editions";
  if (existsSync(dir)) {
    for (const d of readdirSync(dir)) {
      const src = join(dir, d, "index.html");
      if (!existsSync(src)) continue;
      const lang = readFileSync(src, "utf8").match(/<html\b[^>]*\blang="([^"]+)"/)?.[1] || "en";
      list.push({ src, lang, edition: true });
    }
  }
  return list;
}

function titleCase(t) {
  const words = t.split(/\s+/).filter(Boolean);
  return words
    .map((w, i) => {
      const bare = w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
      if (!bare || !/^\p{Ll}/u.test(bare)) return null;
      // The first and last words always take a capital; small words stay low elsewhere
      if (i > 0 && i < words.length - 1 && SMALL.has(bare.toLowerCase())) return null;
      return bare;
    })
    .filter(Boolean);
}

function checkPage({ src, lang }) {
  const found = [];
  const html = readFileSync(src, "utf8");
  const block = html.match(/<script\b(?=[^>]*\bid="edition")[^>]*>([\s\S]*?)<\/script>/);
  let own = {};
  let edition = null;
  try {
    edition = block ? JSON.parse(block[1]) : null;
    own = edition?.copy || {};
  } catch {}
  const titles = own.titles || (lang === "en" ? "title" : "sentence");
  const stops = html.split('<div id="stops">')[1]?.split(/<div class="hud"/)[0];
  if (!stops) return [`${src}: no <div id="stops">`];
  const sections = stops.split(/(?=<section\b[^>]*\bclass="[^"]*\bstop\b)/).filter((s) => s.startsWith("<section"));
  sections.forEach((sec, i) => {
    const at = `${src}: step ${i + 1}`;
    const source = sec.match(/^<section\b[^>]*\bdata-source="([^"]*)"/)?.[1] || "";
    for (const m of sec.matchAll(/<(h1|h2)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
      const inner = m[2];
      const ems = (inner.match(/<em\b/g) || []).length;
      // Inline tags (the red word) join their neighbours without a space
      const title = text(inner.replace(/<\/?(em|strong|span|b|i)\b[^>]*>/g, ""));
      if (ems !== 1) found.push(`${at}: title "${title}" has ${ems} red words (<em>), not one`);
      if (titles === "title") {
        const low = titleCase(title);
        if (low.length) found.push(`${at}: title "${title}" is not in title case (${low.join(", ")})`);
      } else if (titles === "sentence" && /^\p{Ll}/u.test(title)) found.push(`${at}: title "${title}" starts in lower case`);
    }
    const prose = text(sec);
    if (/\s[—–]\s/.test(prose)) found.push(`${at}: a dash used as a separator ("${prose.match(/.{0,30}\s[—–]\s.{0,30}/)[0]}")`);
    if (lang === "fr") {
      for (const m of prose.matchAll(/(.{0,24}?)([^  \d])([:;?!])(?=\s|$)/g)) {
        found.push(`${at}: "${m[1]}${m[2]}${m[3]}": a narrow no-break space (&#8239;) goes before ${m[3]}`);
      }
    }
    (rules.banned || []).forEach(({ pattern, why }) => {
      const re = new RegExp(pattern, "g");
      for (const m of prose.matchAll(re)) found.push(`${at}: "${m[0]}" (${why})`);
    });
    if (rules.figures && !source) {
      const fig = prose.match(new RegExp(rules.figures));
      if (fig) found.push(`${at}: figure "${fig[0]}" on a stop with no data-source`);
    }
  });
  // The names on the drawing, as this page shows them
  const names = scene?.pageLists ? scene.pageLists(lang, edition)?.names || [] : [];
  names.forEach(({ id, text: name }) => {
    const at = `${src}: name ${id}`;
    if (/\s[—–]\s/.test(name)) found.push(`${at}: a dash used as a separator ("${name}")`);
    (rules.banned || []).forEach(({ pattern, why }) => {
      for (const m of name.matchAll(new RegExp(pattern, "g"))) found.push(`${at}: "${m[0]}" (${why})`);
    });
  });
  // Red on dark: a red role token in a dark theme block of the stylesheets the page links
  const sheets = [...html.matchAll(/<link\b[^>]*\bhref="([^"]+\.css)"/g)].map((m) => join(dirname(src), m[1])).filter(existsSync);
  const reds = rules.redValues || ["var(--red)", "var(--red-text)", "#ee2238", "#c8102e"];
  const roles = rules.textRoles || ["--emph", "--emph-small", "--label-emph", "--lead-kicker", "--kicker", "--question-now"];
  // The built-in dark themes and the deck's own (config.themes), whatever their blend
  const darkThemes = ["dark", "blueprint", "core", ...Object.keys(config.themes || {})];
  for (const file of sheets) {
    const css = readFileSync(file, "utf8");
    for (const block of css.matchAll(new RegExp(`([^{}]*\\[data-theme="(?:${darkThemes.join("|")})"\\][^{}]*)\\{([^{}]*)\\}`, "g"))) {
      for (const d of block[2].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
        if (roles.includes(d[1]) && reds.some((r) => d[2].trim().toLowerCase().startsWith(r))) found.push(`${file}: ${d[1]} is red on a dark theme (${block[1].trim()}): use the light red (--accent-on-dark)`);
      }
    }
  }
  return found;
}

const all = pages().flatMap(checkPage);
all.forEach((f) => console.log(`  ${f}`));
console.log(all.length ? `check:copy: ${all.length} finding(s)` : "check:copy ok");
process.exit(all.length ? 1 : 0);
