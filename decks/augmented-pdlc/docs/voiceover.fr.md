# Voix off FR · The Augmented PDLC (v0)

Script parlé, en français, pour les 16 étapes du deck. Durée cible : environ 25 minutes, environ 3 600 mots.

- Les noms restent en anglais, comme à l'écran : Discover, G1 Ready to Spec, le registre Knowledge, Specification Engineer. Une glose française accompagne la première mention.
- `▸ clic · #6.2` marque un beat : la phrase qui suit part avec le clic.
- `> À l'écran :` décrit ce que voit la salle.
- `⟦? …⟧` marque un point à trancher : rien n'y est inventé. La liste complète figure en fin de document.
- Sources : le deck (`index.html`, `src/lists.js`) et le modèle opérationnel cible (TOM) rédigé par Zenika, anonymisé. Aucun chiffre hors l'estimation Zenika de 0,7 ETP.

---

## 1 · Titre (#1) · 0:30

> À l'écran : le moteur tourne au repos, une idée parcourt la roue. Titre « Le PDLC augmenté » (deck EN : « The Augmented PDLC »).

⟦? Accroche personnelle : une scène ou une anecdote à vous ? Sinon, on ouvre directement sur la phrase ci-dessous.⟧

Les agents d'IA savent écrire du code, le tester et le livrer. Pendant vingt-cinq minutes, nous allons assembler devant vous le système de delivery qui va autour. Un seul moteur. À la fin, vous saurez le dessiner sur une serviette en papier, et vous saurez quelle pièce manque chez vous.

---

## 2 · Le problème (#2) · 2:00

> À l'écran : le moteur s'efface derrière la carte « Repenser tout le système ».

Les agents écrivent, testent et livrent du code. Comment la delivery IT doit-elle changer autour d'eux ?

L'IA ne transforme pas le cycle de vie produit en accélérant le code. Elle déplace la contrainte. Le goulot ne se trouve plus dans l'écriture : il passe au contexte qu'on donne aux agents, aux spécifications, aux droits de décision, aux contrôles qualité, à la traçabilité, et à la mesure de la valeur.

Les personnes reviennent donc à un métier d'ingénieur. Elles cadrent l'intention, posent les règles et prennent les décisions. Les agents prennent en charge l'exécution.

Un déploiement d'outils ne porte pas ce changement. Empiler des assistants sur une organisation inchangée, c'est accélérer un endroit et déplacer la pression vers le suivant. Il faut repenser le système entier : un cycle de vie, un contexte partagé, une plateforme, de nouveaux rôles et de nouvelles mesures.

⟦? Preuve marché : faut-il citer ici Faros AI 2026, DORA 2025 ou McKinsey novembre 2025 ? Si oui, quels chiffres exacts ? À défaut, on reste sans chiffre.⟧

**▸ clic · #2.2 · les sept questions**

Concrètement, un comité de direction pose sept questions. Comment nourrir les agents avec le bon contexte ? Comment gouverner les agents et ce qu'ils savent ? Quel harnais les garde sur la route ? Comment sécuriser le flux de bout en bout ? Qui est chaque agent, et qui en répond ? Combien coûteront les tokens, et qui paie ? Comment savoir si l'on progresse ?

Ces sept questions montent dans le bandeau, en haut à gauche. Chaque fois qu'une pièce du moteur y répond, la question s'allume.

---

## 3 · La roue (#3) · 1:20

> À l'écran : la roue se pose, vue de dessus. Les noms des phases apparaissent.

Première pièce : la roue. C'est le chemin du travail.

Cinq phases forment la boucle : Discover, la découverte ; Design, la conception ; Develop ; Deploy ; Deepen, l'observation en production. Une sixième, Drop, reste en dehors de la boucle : elle retire ce qui ne mérite plus sa place.

Chaque phase rend un livrable écrit, et la phase suivante part de ce livrable. Discover produit un Business Intent Spec. Design, un Solution Design Spec. Develop rend le code avec ses spécifications de test. Deploy, les Runtime Specs. Deepen conclut par un Opportunity Spec ou une recommandation de retrait, et Drop par un Retirement Spec.

La règle est simple : ce qui sort d'une phase est exactement ce qui entre dans la suivante. Si les deux listes diffèrent, le modèle casse à la jointure.

Drop ne termine rien. Ce qu'on retire repart dans le backlog de découverte, comme un besoin à part entière.

---

## 4 · L'idée change de forme (#4) · 1:20

> À l'écran : une idée court sur le bord de la roue ; ses formes successives s'affichent.

Suivons une idée. Elle change de forme à chaque phase.

Elle naît comme une idée. Design en fait une spécification. Develop transforme la spécification en code, le construit, le relit. Deploy le met en production et le maintient en service. Deepen l'observe en usage et analyse les résultats.

Ce qu'on apprend devient une opportunité, qui est l'idée suivante, et la roue repart. Une idée qui a fait son temps sort par Drop.

Un changement passe presque inaperçu : dans Develop, l'unité de travail devient la spécification, plus le ticket. Le développeur ne traduit plus un ticket en code. Il valide ce que les agents produisent et garde les décisions d'ingénierie. Sa responsabilité passe de l'écriture à la validation.

---

## 5 · Les gates (#5) · 2:30

> À l'écran : six barrières sur les frontières des phases, chacune avec ce qu'elle vérifie.

Entre deux phases, l'idée s'arrête à une gate, une porte de passage.

Les machines vérifient d'abord : tests, scans, schémas, les critères que la phase avait promis. Une gate est un contrôle déterministe avant d'être un jugement. Ensuite, une personne nommée décide. La plateforme enregistre la décision.

Six gates, une par phase. G1, Ready to Spec, prêt à spécifier : un objectif mesurable, les données pour le suivre, un responsable unique. G2, Ready to Build : tests d'acceptation écrits, interfaces convenues, cibles de qualité fixées. G3, Ready to Release : tous les contrôles passent, les failles sont fermées, une personne nommée signe.

G4, Released and Observable, se déclenche deux fois : au déploiement, puis à chaque activation de fonctionnalité. Livrer n'est pas activer. Chaque changement est tracé, les indicateurs métier sont en place, quelqu'un est d'astreinte.

G5, Opportunity or Retire, est une seule gate avec trois verdicts : on continue, on relance une opportunité, ou on recommande le retrait. Elle compare les résultats à la promesse faite en G1, coût complet compris. Et G6, Retirement Scoped, vérifie qu'on a cartographié les dépendances, prévenu les utilisateurs et préservé ce qu'on savait.

Une gate s'ouvre sur des preuves, jamais sur une affirmation. Quand elle refuse, elle ne bloque pas en silence : elle renvoie le travail en nommant ce qui manque, et à qui parler.

Chaque passage laisse une trace : quels critères, quelle version de la gate, quel acteur, humain ou agent, sous quelle identité, et ce que le passage a coûté en tokens. C'est ce qui permet de rejouer une décision des mois plus tard. Et une gate que personne ne mesure n'est qu'un rituel au ton plus sévère.

---

## 6 · Les registres du Context Nexus (#6) · 2:15

> À l'écran : une colonne monte au centre de la roue. Quatre registres s'allument l'un après l'autre.

Deuxième pièce : le Context Nexus, la mémoire dont partent les personnes et les agents.

Un agent ne connaît ni votre produit, ni vos choix d'architecture, ni vos décisions passées, sauf si on les lui donne. Donnez-lui un contexte périmé : il agira avec une confiance totale. Le Nexus range ce contexte en quatre registres, un rôle chacun.

**▸ (#6) · Knowledge**

Knowledge, ce que nous savons : le domaine, l'architecture, les conventions, les décisions passées et leurs raisons.

**▸ clic · #6.2 · Intent**

Intent, ce que nous voulons : les spécifications, les critères d'acceptation, les décisions à appliquer, la feuille de route.

Une décision donne d'ailleurs deux écrits. Dans Knowledge, son contexte : la situation, les options pesées, pourquoi on a écarté les autres. Dans Intent, sa directive : la règle, dite de façon positive et directement applicable. L'un sert de mémoire, l'autre d'instruction.

**▸ clic · #6.3 · Contracts**

Contracts, ce que nous exigeons : des règles vérifiables, avec un seuil, de la qualité à la sécurité. N'entre dans Contracts que ce qu'une machine sait vérifier. C'est le registre où vivent les gates.

**▸ clic · #6.4 · Operations**

Operations, ce que nous faisons : les runbooks, les procédures d'incident, les étapes de déploiement et de retour arrière.

Les personnes écrivent Intent et Contracts. Les agents les lisent et remontent ce qu'ils observent ; ils ne les modifient jamais.

Personne ne met à jour une base de connaissances parce qu'il le faudrait. Le Nexus s'écrit avec les événements que le cycle produit déjà : une décision d'architecture acceptée, une fusion de code, une gate qui échoue, un incident résolu. Chacun écrit dans un registre nommé.

---

## 7 · L'héritage : Org, BU, Team (#7) · 1:30

> À l'écran : la colonne s'étire en télescope : Org, puis BU, puis le cœur Team.

Le Nexus suit la forme de l'organisation. Une équipe ne travaille jamais directement sous le groupe : elle appartient à une business unit, à un programme, à une ligne de produits.

L'organisation fixe ce dont tout le monde hérite : sécurité, conventions, outils partagés. La BU ajoute ce que ses équipes ont en commun. L'équipe ajoute son propre domaine.

Trois cas quand un niveau touche le même terrain que son parent. Étendre : ajouter une règle que le parent ne couvre pas. C'est toujours permis. Faire une exception : s'écarter d'une règle du parent, en le déclarant, avec l'accord du responsable du niveau parent. Passer outre : contredire le parent sans le dire. C'est bloqué.

Pourquoi cette rigueur ? Une mise à jour globale peut casser un projet en plein cycle. Et un contexte qui couvre toute l'organisation dépasse ce qu'un agent peut lire utilement. Avec l'héritage, une équipe lit son niveau et ce dont elle hérite, pas tout ce que sait le groupe. Et un changement au sommet ne réécrit jamais en silence ce dont une équipe dépend.

---

## 8 · Intent appartient à l'équipe (#8) · 1:00

> À l'écran : vue de dessus sur la colonne ; le registre Intent est seul en lumière.

Trois registres descendent du sommet. Intent, non : il n'existe qu'au niveau de l'équipe, parce que décider quoi construire revient toujours à l'équipe.

L'idée vit ici. Les personnes l'écrivent ; les agents la prennent comme instructions. Un agent peut proposer, observer, signaler. Il ne décide ni de l'intention, ni de ce que « terminé » veut dire.

Une spécification n'est pas un document qu'on écrit une fois. Elle a un responsable et une vie : brouillon, active, périmée, remplacée.

Plus l'intention est nette, meilleur est le résultat.

---

## 9 · Cinq domaines (#9) · 1:15

> À l'écran : cinq bandes glissent sous la roue, vues de côté.

Troisième pièce : sous la roue, treize capacités, de L0 à L12, réparties en cinq domaines. Du plus proche du travail jusqu'aux fondations.

Discover trouve ce qui vaut la peine d'être construit, et ce qui existe déjà. Build transforme la spécification en code qui marche. Contextualise donne à chaque agent le même contexte et les outils qu'il a le droit d'appeler. Measure prouve que le résultat est bon, et continue de le prouver. Platform route, compte et sécurise chaque appel à un modèle, sur un terrain que vous maîtrisez.

Deux principes tiennent l'ensemble. Une couche se définit par son contrat, jamais par son produit : l'outil est un paramètre, il peut changer. Et chaque chose a un seul chemin : un seul passage vers les modèles, la passerelle IA ; un seul passage vers les outils, le registre des agents. Le reste en est client.

Aucune capacité n'entre en service sans compteur, sans quota et sans responsable nommé de ce quota.

---

## 10 · Absorber d'abord (#10) · 1:20

> À l'écran : le moteur éclaté, incliné ; les treize noms en colonne à droite.

Aucune de ces treize couches n'est optionnelle. Mais l'ordre compte.

Les agents multiplient les spécifications, le code et les changements à relire. La relecture manuelle seule cède sous cette charge.

Si rien n'est automatisé à l'intérieur d'une tâche, la gate de phase devient le seul point de contrôle. Elle s'effondre sous le volume.

**▸ clic · #10.2 · L8, L2, L5 en rouge**

Déployez d'abord les couches qui absorbent ce volume. Les gates qualité automatisées, L8. Le développement piloté par la spécification, L2. La Context Factory, L5.

Ensuite seulement, ouvrez les vannes : plus d'assistants, plus d'agents.

---

## 11 · Le contexte sort du Nexus (#11) · 1:20

> À l'écran : la bande Contextualise s'ouvre ; une onde part du Nexus vers L5, L4, puis L6.

Contextualise est le moyeu. C'est là que la colonne du Nexus se raccorde au reste du moteur.

L5, la Context Factory, collecte, date et trie ce que le Nexus contient. Puis elle assemble le brief de chaque agent pour sa tâche : la spécification en main, les directives qui s'appliquent, les contrats en vigueur, les outils disponibles. Un agent ne lit pas une spécification : il l'analyse. La façon dont un registre est lu dicte donc la façon dont il doit être écrit. Et quand la Factory ne trouve pas ce qu'il faut, elle le dit et s'arrête, plutôt que de produire une supposition qui a l'air sûre d'elle.

L4, l'Agent & MCP Registry, liste les agents et les outils que chacun peut appeler. MCP est la manière standard pour un agent d'appeler un outil.

L6, la Multi-agent Orchestration, confie le travail aux agents dans l'ordre, chacun avec son brief, et place les relectures.

Ce que les agents apprennent en test et en production revient dans les registres.

---

## 12 · La colonne vertébrale : L11 (#12) · 1:20

> À l'écran : une tige traverse les cinq bandes ; elle s'allume en rouge avec L3, L4 et L10.

Quand un agent travaille sous le compte d'une personne, ou sous un compte partagé, la trace nomme quelqu'un qui n'a pas pris la décision. Personne ne peut auditer ce travail, le facturer ou l'arrêter.

Chaque agent reçoit donc sa propre identité : avec un périmètre, tracée, révocable à elle seule. C'est L11, Identity & Non-Human Access, la colonne vertébrale du moteur. Un agent qui se comporte mal est coupé ; la personne qui l'a lancé continue de travailler.

Sa clé est vérifiée à trois endroits. À la passerelle IA : quel modèle. Au registre : quel outil. À l'infrastructure : quelles données.

Ce n'est pas un raffinement. Tant que la trace, l'identité et l'attribution des coûts ne sont pas en place, on ne peut confier à un agent aucune décision qu'il tiendrait seul.

Chaque artefact a alors un auteur, et une personne nommée qui en répond.

---

## 13 · Les rôles (#13) · 3:00

> À l'écran : le moteur entier, la colonne déployée. Chaque rôle allume en rouge les pièces qu'il possède.

Dernière pièce : les personnes. Huit rôles font tourner le moteur. Quatre vivent dans chaque équipe, quatre servent toutes les équipes.

**▸ (#13) · Specification Engineer**

Le Specification Engineer transforme l'idée en spécification prête pour les agents. Il tient le registre Intent, la phase Design et l'outillage de spécification. Sa règle : pas de code tant qu'une question reste ouverte.

**▸ clic · #13.2 · Context Engineer**

Le Context Engineer garde ce que savent les agents sourcé, daté et réutilisable : Knowledge, Contracts, et la Context Factory. Sans lui, les agents produisent un résultat techniquement correct et coupé du métier, et les équipes recopient le contexte à chaque session.

**▸ clic · #13.3 · Orchestrator**

L'Orchestrator répartit le travail entre les agents et décide où les personnes relisent.

**▸ clic · #13.4 · Decision Guarantor**

Le Decision Guarantor signe chaque gate en son nom, sur les preuves. Cette signature ne se délègue jamais.

Déléguer à l'IA ne mesure pas combien on s'en sert : cela dit qui tient le verdict. Un développeur qui écrit l'essentiel de son code avec un agent, mais garde la décision de fusion, reste en mode « AI-assisted ». Un pipeline qui bloque une fusion de sa propre autorité est « AI-executed », même si un humain a écrit chacune de ses règles. Au-delà vient « AI-autonomous » : l'humain ne voit plus que les exceptions.

Une étape gagne un niveau sur des preuves fixées à l'avance. Elle le perd automatiquement si les défauts qui passent remontent.

Et certaines décisions restent humaines quelle que soit la maturité : est-ce que cela vaut la peine, et avec quelle priorité ; la décision d'architecture et les critères d'acceptation ; les validations en périmètre réglementé ; peser la valeur contre le coût et le risque ; retirer un produit. Quelqu'un doit en répondre, et une gate ne répond de rien.

**▸ clic · #13.5 · Evaluation Engineer**

Pour toutes les équipes, l'Evaluation Engineer vérifie que ce que produisent les agents reste bon dans la durée. Il tient les jeux de tests, la qualité et l'observabilité.

**▸ clic · #13.6 · AgentOps**

AgentOps garde les agents et leurs outils enregistrés, à jour et en service.

**▸ clic · #13.7 · AI FinOps**

AI FinOps relie la dépense en tokens à ce qu'elle produit, chaque budget avec son responsable. Le prix du token compare des modèles, pas des résultats : un modèle moins cher peut coûter plus s'il faut recommencer plusieurs fois. La mesure qui compte est le coût IA par unité de travail livrée.

**▸ clic · #13.8 · Trace & Audit**

Trace & Audit sait dire qui a fait quoi, personne ou agent, sous quelle identité.

Ce sont des casquettes, pas des recrutements. Mais laissées à elles-mêmes, celles du contexte, de l'orchestration et de la décision retombent sur le tech lead : environ 0,7 ETP en plus de son poste, selon une estimation Zenika.

---

## 14 · Mesurer le système (#14) · 1:45

> À l'écran : la bande Measure s'ouvre ; chaque famille d'indicateurs allume les pièces qui l'alimentent.

L'adoption montre que l'outil sert. Elle ne montre pas qu'il crée de la valeur. Le pourcentage de code écrit par l'IA, par exemple, mesure l'adoption, pas la valeur. Nous mesurons quatre familles.

**▸ (#14) · Delivery**

Delivery : les quatre métriques DORA, délai de livraison, fréquence de déploiement, taux d'échec des changements, temps de rétablissement. Nous mesurons le délai depuis l'entrée du besoin dans le backlog, pas depuis le premier commit : les attentes entre les étapes comptent.

**▸ clic · #14.2 · Quality**

Quality : taux de reprise, taux de passage aux gates, vulnérabilités introduites. Ces indicateurs ne servent pas à prouver un gain : ils servent à réfuter un gain apparent. Aucun indicateur de vitesse sans son indicateur de qualité.

**▸ clic · #14.3 · Transformation**

Transformation : la part des flux de travail menés avec l'IA, les actifs réutilisables en service, les équipes embarquées.

**▸ clic · #14.4 · Value**

Value : la capacité déplacée vers le travail à forte valeur. Additionner les gains mesurés étape par étape surestime le gain réel ; seul le résultat de bout en bout montre si l'IA crée de la valeur.

Toutes ces mesures se font au niveau de l'équipe ou du produit, jamais de l'individu.

Figez une base de référence avant de déployer, avec les mêmes métriques qu'après. ⟦? « Attendez-vous à un creux avant le gain » : la carte le dit, le TOM ne le source pas. On le garde comme position Zenika ?⟧

---

## 15 · La serviette en papier (#15) · 0:45

> À l'écran : le moteur entier, les phases gravées sur la roue, les sept questions allumées.

Voilà le moteur entier.

La roue fait avancer l'idée. Les couches l'alimentent en énergie. Le Nexus la nourrit en contexte. Les personnes la pilotent.

Vous pouvez maintenant le dessiner. Quelle pièce manque à votre organisation ?

---

## 16 · Démarrez votre moteur (#16) · 0:20

> À l'écran : fond sombre, moteur en lignes blanches. Deux liens.

Merci. Tout ce que nous avons montré est en ligne. aixsdlc.zenika.com présente le cadre AI×SDLC de Zenika, étape par étape. cnexus.fr présente le Context Nexus.

---

## Questions ouvertes

1. **Accroche (#1)** : une scène ou une anecdote à vous pour ouvrir ? Le v0 ouvre sans anecdote.
2. **Preuve marché (#2)** : citer Faros AI 2026, DORA 2025 ou McKinsey novembre 2025 ? Si oui, quels chiffres, tels qu'ils figurent dans les rapports ?
3. **Le creux avant le gain (#14)** : on le garde comme position Zenika, ou on le retire ?
4. **Principes du manifeste d'atelier** (« ce qui n'est pas écrit n'existe pas », « le cadre de contrôle ne traîne jamais derrière l'adoption »…) : matériel Zenika réutilisable, ou co-écrit avec le client ? Le v0 ne les cite pas.
5. **AI-autonomous (#13.4)** : le TOM se demande si ce niveau relève de la délégation ou de l'automatisation. Le v0 le présente comme quatrième niveau, sans entrer dans ce débat. On garde ?
