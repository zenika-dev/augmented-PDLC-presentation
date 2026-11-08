// A deck's lists (sections, questions, its scene's own) and the patches a language or a client edition lays
// over them. A client edition (editions/<name>/index.html, never committed) brings its own data in
// <script type="application/json" id="edition">, so client names and prose never enter the code.
// A list given as an array replaces ours; given as an object keyed by id it patches ours item by item.

// The page's #edition block, or null. Invalid JSON is reported and the deck runs on its own data
export function readEdition() {
  const el = typeof document !== "undefined" && document.getElementById("edition");
  if (!el) return null;
  try {
    return JSON.parse(el.textContent);
  } catch (error) {
    console.error("The edition block (#edition) is not valid JSON:", error.message);
    return null;
  }
}

// The page's language (<html lang>), "en" in Node
export function pageLang() {
  return (typeof document !== "undefined" && document.documentElement.lang) || "en";
}

// Replaces the list (array) or patches its items by key (object); anything else is left alone
export function patch(list, items, key = "id") {
  if (!items) return;
  if (Array.isArray(items)) list.splice(0, list.length, ...items);
  else if (typeof items === "object") list.forEach((item) => Object.assign(item, items[item[key]]));
}

// Applies an edition or language patch with the deck's own rules (apply(lists, patch)). A patch that does
// not fit is reported, not thrown: the deck runs on with what applied
export function applyPatch(apply, lists, e, source = "edition") {
  if (!e) return;
  try {
    apply(lists, e);
  } catch (error) {
    console.error(`The ${source} patch was not applied in full: ${error.message}`);
  }
}

// A deep copy of plain lists, for the build: each page patches its own copy
export function cloneLists(lists) {
  return JSON.parse(JSON.stringify(lists));
}
