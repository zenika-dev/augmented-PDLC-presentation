// The programme rollout's lists: a patch per language on the keynote's (../../augmented-pdlc/src/lists.js), with
// the keys of an edition's block (../../augmented-pdlc/docs/editions.md): the sections, DORA 2025's seven AI capabilities as
// concerns, the shapes, the contract dial's zones, and the names on the sets (leads: key → [name, note]).
// Applied before the engine is built (src/scene.js imports this module first).
import { deckPatch } from "../../augmented-pdlc/src/lists.js";

export const EN = {
  sections: [
    {
      id: "programme",
      name: "The programme"
    },
    {
      id: "measure",
      name: "Measure"
    },
    {
      id: "pdlc",
      name: "PDLC"
    },
    {
      id: "platform",
      name: "Platform"
    },
    {
      id: "people",
      name: "People"
    },
    {
      id: "next",
      name: "Next steps"
    }
  ],
  concerns: [
    {
      id: "stance",
      name: "A clear AI stance",
      question: "Everyone knows which tools are allowed, for what, and why"
    },
    {
      id: "data",
      name: "Healthy data",
      question: "Internal data is accurate, complete and kept up to date"
    },
    {
      id: "reach",
      name: "Data AI can reach",
      question: "The tools read the team's own code, docs and decisions"
    },
    {
      id: "versions",
      name: "Strong version control",
      question: "Every change is versioned, reviewed and easy to roll back"
    },
    {
      id: "batches",
      name: "Small batches",
      question: "Small changes ship often and fail small"
    },
    {
      id: "users",
      name: "The user at the centre",
      question: "Teams aim AI at what users need, not at output"
    },
    {
      id: "platform",
      name: "A quality platform",
      question: "One shared internal platform carries the gains from team to team"
    }
  ],
  shapes: [
    {
      name: "business-intent",
      label: "Business Intent Spec",
      angle: 36
    },
    {
      name: "solution-design",
      label: "Solution Design Spec",
      angle: 108
    },
    {
      name: "code-test",
      label: "Code + Test Specs",
      angle: 180
    },
    {
      name: "runtime",
      label: "Runtime Specs",
      angle: 252
    },
    {
      name: "opportunity",
      label: "Opportunity Spec",
      angle: 324
    },
    {
      name: "retirement",
      label: "Retirement Spec",
      drop: true
    }
  ],
  zones: [
    {
      id: "zone:human",
      from: 0,
      to: 25
    },
    {
      id: "zone:assisted",
      from: 26,
      to: 50
    },
    {
      id: "zone:executed",
      from: 51,
      to: 79,
      soft: true
    },
    {
      id: "zone:autonomous",
      from: 80,
      to: 100
    }
  ],
  leads: {
    "stage:1": [
      "Phase 1 · Assessment",
      "about two months"
    ],
    "stage:2": [
      "Phase 2 · Pilot",
      "about two quarters"
    ],
    "stage:3": [
      "Phase 3 · Scale",
      "the year after"
    ],
    "energy-line": [
      "The Spec",
      "runs from the engine to the nose"
    ],
    moon: [
      "The target",
      "an AI-native PDLC for every team"
    ],
    "pillar:pdlc": [
      "PDLC",
      "the engine"
    ],
    "pillar:platform": [
      "Platform",
      "the layers under the wheel"
    ],
    "pillar:measure": [
      "Measure",
      "the cockpit"
    ],
    "pillar:people": [
      "People",
      "the crew's hatch"
    ],
    "part:line": [
      "1.1 · The Spec",
      "the energy line"
    ],
    "part:bay": [
      "1.2 · The engine"
    ],
    "part:hatch": [
      "2.1 · The crew's hatch"
    ],
    "part:cabin": [
      "2.2 · The cabin"
    ],
    "part:bays": [
      "3.1 · The engine bays"
    ],
    "part:conduit": [
      "3.2 · The tool bays"
    ],
    "part:cockpit": [
      "4.1 · The cockpit"
    ],
    "part:dials": [
      "4.2 · The dials"
    ],
    "inst:throughput": [
      "Throughput"
    ],
    "inst:stability": [
      "Stability"
    ],
    "inst:cost": [
      "Quality"
    ],
    "inst:productivity": [
      "Value"
    ],
    "inst:experience": [
      "Transformation"
    ],
    seats: [
      "Pilot seats"
    ],
    columns: [
      "Control columns"
    ],
    specialisation: [
      "Specialisation by profile"
    ],
    "deep-dives": [
      "Deep-dive sessions"
    ],
    hackathon: [
      "A hackathon to practise"
    ],
    "self-paced": [
      "Self-paced learning"
    ],
    "screen:site": [
      "The programme site"
    ],
    "screen:list": [
      "Seven capabilities"
    ],
    "screen:dials": [
      "The dials"
    ],
    "screen:flight": [
      "The flight"
    ],
    capabilities: [
      "Capabilities",
      "what people do on the Spec"
    ],
    "cart:tools": [
      "Tooling",
      "an AI coding assistant, in the IDE and the code forge"
    ],
    "cart:label": [
      "Description",
      "turn a Design Spec into working code"
    ],
    "cart:plug": [
      "Platform",
      "the AI gateway for models · the Context Nexus for context"
    ],
    "cart:clamp": [
      "Guardrails",
      "human review, a merge request and the full CI"
    ],
    "cart:dial": [
      "Autonomy scoring",
      "the criteria the contract reads"
    ],
    "bay:manual": [
      "Picked by hand",
      "in the in-house chat assistant or another tool"
    ],
    "bay:selector": [
      "Best model",
      "proposed from the context"
    ],
    "bay:indicator": [
      "Performance indicator"
    ],
    "bay:context": [
      "Fed back into the context"
    ],
    "bay:bench": [
      "Quarterly benchmark",
      "every model against your own evaluation set"
    ],
    "ring:score": [
      "The score",
      "the task"
    ],
    "ring:rule": [
      "Blocking rule",
      "the capability"
    ],
    "ring:ceiling": [
      "Foundation ceiling",
      "the platform"
    ],
    "zone:human": [
      "Human · ≤ 25"
    ],
    "zone:assisted": [
      "AI-assisted · 26–50"
    ],
    "zone:executed": [
      "AI-executed · 51–79"
    ],
    "zone:autonomous": [
      "AI-autonomous · ≥ 80"
    ],
    ceiling: [
      "The ceiling",
      "the most restrictive limit wins"
    ],
    needle: [
      "The delegation level"
    ]
  }
};

export const FR = {
  sections: [
    {
      id: "programme",
      name: "Le programme"
    },
    {
      id: "measure",
      name: "Mesure"
    },
    {
      id: "pdlc",
      name: "PDLC"
    },
    {
      id: "platform",
      name: "Platform"
    },
    {
      id: "people",
      name: "Équipes"
    },
    {
      id: "next",
      name: "Prochaines étapes"
    }
  ],
  concerns: [
    {
      id: "stance",
      name: "Une position claire sur l'IA",
      question: "Chacun sait quels outils sont permis, pour quoi faire et pourquoi"
    },
    {
      id: "data",
      name: "Des données saines",
      question: "Les données internes sont justes, complètes et à jour"
    },
    {
      id: "reach",
      name: "Des données accessibles à l'IA",
      question: "Les outils lisent le code, les docs et les décisions de l'équipe"
    },
    {
      id: "versions",
      name: "Une gestion de versions solide",
      question: "Chaque changement est versionné, relu et facile à annuler"
    },
    {
      id: "batches",
      name: "Des petits lots",
      question: "Des changements petits, livrés souvent, qui échouent petit"
    },
    {
      id: "users",
      name: "L'utilisateur au centre",
      question: "Les équipes mettent l'IA au service des utilisateurs, pas du volume produit"
    },
    {
      id: "platform",
      name: "Une plateforme de qualité",
      question: "Une plateforme interne commune porte les gains d'une équipe à l'autre"
    }
  ],
  shapes: [
    {
      name: "business-intent",
      label: "Business Intent Spec",
      angle: 36
    },
    {
      name: "solution-design",
      label: "Solution Design Spec",
      angle: 108
    },
    {
      name: "code-test",
      label: "Code + Test Specs",
      angle: 180
    },
    {
      name: "runtime",
      label: "Runtime Specs",
      angle: 252
    },
    {
      name: "opportunity",
      label: "Opportunity Spec",
      angle: 324
    },
    {
      name: "retirement",
      label: "Retirement Spec",
      drop: true
    }
  ],
  zones: [
    {
      id: "zone:human",
      from: 0,
      to: 25
    },
    {
      id: "zone:assisted",
      from: 26,
      to: 50
    },
    {
      id: "zone:executed",
      from: 51,
      to: 79,
      soft: true
    },
    {
      id: "zone:autonomous",
      from: 80,
      to: 100
    }
  ],
  leads: {
    "stage:1": [
      "Phase 1 · Diagnostic",
      "deux mois environ"
    ],
    "stage:2": [
      "Phase 2 · Pilote",
      "deux trimestres environ"
    ],
    "stage:3": [
      "Phase 3 · Passage à l'échelle",
      "l'année suivante"
    ],
    "energy-line": [
      "La Spec",
      "court du moteur jusqu'au nez"
    ],
    moon: [
      "La cible",
      "un PDLC natif IA pour chaque équipe"
    ],
    "pillar:pdlc": [
      "PDLC",
      "le moteur"
    ],
    "pillar:platform": [
      "Platform",
      "les couches sous la roue"
    ],
    "pillar:measure": [
      "Mesure",
      "le cockpit"
    ],
    "pillar:people": [
      "Équipes",
      "la trappe de l'équipage"
    ],
    "part:line": [
      "1.1 · La Spec",
      "la ligne d'énergie"
    ],
    "part:bay": [
      "1.2 · Le moteur"
    ],
    "part:hatch": [
      "2.1 · La trappe de l'équipage"
    ],
    "part:cabin": [
      "2.2 · La cabine"
    ],
    "part:bays": [
      "3.1 · Les baies moteur"
    ],
    "part:conduit": [
      "3.2 · Les baies d'outils"
    ],
    "part:cockpit": [
      "4.1 · Le cockpit"
    ],
    "part:dials": [
      "4.2 · Les cadrans"
    ],
    "inst:throughput": [
      "Throughput"
    ],
    "inst:stability": [
      "Stability"
    ],
    "inst:cost": [
      "Quality"
    ],
    "inst:productivity": [
      "Value"
    ],
    "inst:experience": [
      "Transformation"
    ],
    seats: [
      "Sièges pilotes"
    ],
    columns: [
      "Manches"
    ],
    specialisation: [
      "Spécialisation par profil"
    ],
    "deep-dives": [
      "Sessions d'approfondissement"
    ],
    hackathon: [
      "Un hackathon pour pratiquer"
    ],
    "self-paced": [
      "Apprentissage en autonomie"
    ],
    "screen:site": [
      "Le site du programme"
    ],
    "screen:list": [
      "Sept capacités"
    ],
    "screen:dials": [
      "Les cadrans"
    ],
    "screen:flight": [
      "Le vol"
    ],
    capabilities: [
      "Capabilities",
      "ce que les gens font sur la Spec"
    ],
    "cart:tools": [
      "Outillage",
      "un assistant de code IA, dans l'IDE et la forge"
    ],
    "cart:label": [
      "Description",
      "transformer une Design Spec en code qui marche"
    ],
    "cart:plug": [
      "Plateforme",
      "l'AI Gateway pour les modèles · le Context Nexus pour le contexte"
    ],
    "cart:clamp": [
      "Garde-fous",
      "relecture humaine, merge request et CI complète"
    ],
    "cart:dial": [
      "Score d'autonomie",
      "les critères que lit le contrat"
    ],
    "bay:manual": [
      "Choisi à la main",
      "dans l'assistant de chat interne ou un autre outil"
    ],
    "bay:selector": [
      "Meilleur modèle",
      "proposé à partir du contexte"
    ],
    "bay:indicator": [
      "Indicateur de performance"
    ],
    "bay:context": [
      "Réinjecté dans le contexte"
    ],
    "bay:bench": [
      "Benchmark trimestriel",
      "chaque modèle face à votre propre jeu d'évaluation"
    ],
    "ring:score": [
      "Le score",
      "la tâche"
    ],
    "ring:rule": [
      "Règle bloquante",
      "la capability"
    ],
    "ring:ceiling": [
      "Plafond du socle",
      "la plateforme"
    ],
    "zone:human": [
      "Human · ≤ 25"
    ],
    "zone:assisted": [
      "AI-assisted · 26–50"
    ],
    "zone:executed": [
      "AI-executed · 51–79"
    ],
    "zone:autonomous": [
      "AI-autonomous · ≥ 80"
    ],
    ceiling: [
      "Le plafond",
      "la limite la plus stricte l'emporte"
    ],
    needle: [
      "Le niveau de délégation"
    ]
  }
};

deckPatch({ en: EN, fr: FR });
