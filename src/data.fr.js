// French strings for index.fr.html, keyed by the ids in data.js. Names (phases, gates, registers, layers, roles)
// stay in English on both decks; only prose moves.   is the narrow no-break space French sets before : ; ? !

export const FR = {
  mention: "© ZENIKA 2026 · Tous droits réservés",
  gates: {
    G1: "Un objectif mesurable, les données pour le suivre, un seul responsable",
    G2: "Tests d'acceptation écrits, interfaces convenues, cibles de qualité fixées",
    G3: "Tous les contrôles passent, failles fermées, une personne nommée signe",
    G4: "Chaque changement tracé, indicateurs métier en place, une astreinte nommée",
    G5: "Résultats face à la promesse, coût complet connu, décision de garder ou de retirer",
    G6: "Dépendances cartographiées, utilisateurs prévenus, savoir préservé",
  },
  shapes: {
    idea: "idée", shape: "cadrage", spec: "spec", code: "code", build: "build", review: "revue",
    deploy: "déploiement", keep: "maintien", observe: "observation", analyse: "analyse",
    opportunity: "opportunité", retirement: "retrait",
  },
  roles: {
    spec: "Transforme l'idée en spec ; pas de code tant qu'une question reste ouverte",
    context: "Garde ce que savent les agents sourcé, daté et réutilisable",
    orchestrator: "Répartit le travail entre les agents et décide où les personnes relisent",
    guarantor: "Signe chaque gate en son nom, sur les preuves ; jamais délégué",
    evaluation: "Vérifie que ce que produisent les agents reste bon dans la durée",
    agentops: "Garde les agents et leurs outils enregistrés, à jour et en service",
    finops: "Relie la dépense en tokens à ce qu'elle produit, chaque budget avec son responsable",
    audit: "Sait dire qui a fait quoi, personne ou agent, sous quelle identité",
  },
  concerns: {
    feed: { name: "Alimenter les pipelines", question: "Comment donner aux agents le bon contexte ?" },
    govern: { name: "Gouverner les agents", question: "Comment gouverner les agents et ce qu'ils savent ?" },
    harness: { name: "Construire le harnais", question: "Quel harnais garde les agents sur la bonne voie ?" },
    secure: { name: "Sécuriser le flux", question: "Comment sécuriser le flux de bout en bout ?" },
    identity: { name: "Identité des agents", question: "Qui est chaque agent, et qui en répond ?" },
    tokens: { name: "Économie des tokens", question: "Combien coûteront les tokens, et qui paie ?" },
    measure: { name: "Mesurer les progrès", question: "Comment savoir si l'on progresse ?" },
  },
  sections: {
    problem: "Le problème", wheel: "La roue", nexus: "Le Nexus", layers: "Les couches",
    people: "Les personnes", measure: "Mesure", napkin: "La serviette",
  },
};
