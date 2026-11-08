// The words the core itself puts on screen or in front of a screen reader, by page language (<html lang>).
// A deck in another language adds its own entry; English is the fallback.
const STRINGS = {
  en: {
    previous: "Previous step",
    next: "Next step",
    step: (n, count, title) => `Step ${n} of ${count}${title ? `: ${title}` : ""}`,
  },
  fr: {
    previous: "Étape précédente",
    next: "Étape suivante",
    // A narrow no-break space before the colon, as French sets it
    step: (n, count, title) => `Étape ${n} sur ${count}${title ? ` : ${title}` : ""}`,
  },
};

export function uiStrings(lang = "en") {
  return STRINGS[lang] || STRINGS[lang.split("-")[0]] || STRINGS.en;
}
