// Architecte de Contexte — version améliorée
// Aucun fetch : les 15 scénarios sont intégrés directement dans le jeu.

const scenarios = [
  {
    "level": 1,
    "mission": "MISSION 1",
    "title": "Repérer une fonction",
    "client": "ShopEasy",
    "logo": "S",
    "text": "ShopEasy veut permettre aux clients de consulter les produits, de les ajouter à un panier et de passer une commande. Aucun délai précis n'est encore demandé.",
    "hint": "Cherche une action que le logiciel doit permettre à l'utilisateur de réaliser.",
    "question": "Quelle phrase décrit directement ce que le logiciel doit faire ?",
    "choices": [
      [
        "Les informations de commande doivent rester confidentielles.",
        "Ce point concerne la protection des données.",
        "wrong"
      ],
      [
        "Le client doit pouvoir ajouter un produit au panier.",
        "C'est une action offerte par le logiciel à l'utilisateur.",
        "correct"
      ],
      [
        "La réponse du serveur doit arriver très rapidement.",
        "Cela décrit une exigence de vitesse.",
        "wrong"
      ],
      [
        "Le service doit continuer si un serveur tombe en panne.",
        "Cela décrit la tolérance à une panne.",
        "wrong"
      ]
    ],
    "feedbackGood": "Ajouter un produit au panier décrit une fonction : une action que le logiciel doit permettre.",
    "feedbackBad": "Une fonction décrit une action réalisée ou permise par le logiciel. Ici, l'indice clé est « ajouter un produit au panier ».",
    "impact": {
      "relevance": 34
    }
  },
  {
    "level": 1,
    "mission": "MISSION 2",
    "title": "Identifier les utilisateurs",
    "client": "CinemaPlus",
    "logo": "C",
    "text": "CinemaPlus prépare une plateforme d'achat de billets. Les spectateurs achètent leurs billets en ligne. Les employés utilisent aussi une interface interne pour modifier les horaires et les salles.",
    "hint": "Demande-toi qui utilise le logiciel et pour quelle activité.",
    "question": "Quelle information du contexte influence le plus la conception des interfaces utilisateur ?",
    "choices": [
      [
        "Les spectateurs et les employés ont des activités différentes.",
        "Deux groupes d'utilisateurs peuvent avoir des besoins et des écrans différents.",
        "correct"
      ],
      [
        "Les billets sont vendus en ligne.",
        "Cela décrit une fonction ou un mode de service, pas directement les profils d'utilisateurs.",
        "wrong"
      ],
      [
        "Les salles et les horaires doivent être modifiables.",
        "Cela décrit une capacité fonctionnelle.",
        "wrong"
      ],
      [
        "Le système devrait être très rapide.",
        "Aucune exigence précise de rapidité n'est donnée.",
        "wrong"
      ]
    ],
    "feedbackGood": "Le contexte identifie deux groupes avec des tâches différentes. Cela influence directement les interfaces et l'expérience utilisateur.",
    "feedbackBad": "Les utilisateurs sont les spectateurs et les employés. Leurs tâches différentes peuvent influencer les interfaces et l'expérience.",
    "impact": {
      "experience": 34
    }
  },
  {
    "level": 1,
    "mission": "MISSION 3",
    "title": "Comprendre l'accès",
    "client": "FitLife",
    "logo": "F",
    "text": "FitLife veut offrir son application aux membres. Ils l'utiliseront sur téléphone intelligent ou tablette, à la maison ou au gym. Le service doit donc être pratique dans ces situations.",
    "hint": "Cherche les indices sur le matériel et la façon d'accéder au logiciel.",
    "question": "Quel élément du contexte peut imposer des choix d'interface et d'adaptation ?",
    "choices": [
      [
        "Les membres pourront consulter leurs activités.",
        "Cela indique une fonction du produit.",
        "wrong"
      ],
      [
        "Le téléphone intelligent et la tablette sont les appareils visés.",
        "Les interfaces devront s'adapter à ces appareils.",
        "correct"
      ],
      [
        "Les comptes des membres contiennent des renseignements privés.",
        "Cela concerne surtout la sécurité.",
        "wrong"
      ],
      [
        "Le service doit continuer malgré une panne.",
        "Cela concerne surtout la fiabilité.",
        "wrong"
      ]
    ],
    "feedbackGood": "Les appareils ciblés influencent l'interface, les interactions et l'adaptation de l'application.",
    "feedbackBad": "Le contexte précise téléphone et tablette. Le matériel d'accès est un facteur important pour concevoir l'interface.",
    "impact": {
      "experience": 33
    }
  },
  {
    "level": 1,
    "mission": "MISSION 4",
    "title": "Mesurer la vitesse",
    "client": "QuickSearch",
    "logo": "Q",
    "text": "QuickSearch est un moteur de recherche interne. Des employés lanceront plusieurs recherches chaque minute. L'entreprise exige que les résultats apparaissent en moins d'une seconde.",
    "hint": "Cherche une exigence mesurable qui concerne le temps de réponse.",
    "question": "Quelle exigence doit être prise en compte comme contrainte de performance ?",
    "choices": [
      [
        "Les résultats doivent apparaître en moins d'une seconde.",
        "Le délai de réponse est explicitement mesurable.",
        "correct"
      ],
      [
        "Les employés doivent pouvoir lancer une recherche.",
        "Cela décrit une fonction.",
        "wrong"
      ],
      [
        "Les données des employés doivent être protégées.",
        "Cela concerne la sécurité.",
        "wrong"
      ],
      [
        "Le service doit rester disponible après une panne.",
        "Cela concerne la fiabilité.",
        "wrong"
      ]
    ],
    "feedbackGood": "« Moins d'une seconde » donne une cible mesurable. C'est un indice fort de performance.",
    "feedbackBad": "L'exigence de performance est le délai de réponse inférieur à une seconde.",
    "impact": {
      "performance": 34
    }
  },
  {
    "level": 1,
    "mission": "MISSION 5",
    "title": "Protéger les données",
    "client": "BankPro",
    "logo": "B",
    "text": "BankPro développe une application bancaire. Les clients consultent leurs comptes et font des transactions. Les informations financières sont confidentielles et seules certaines personnes autorisées peuvent accéder aux fonctions internes.",
    "hint": "Repère ce qui doit être protégé et qui a le droit d'y accéder.",
    "question": "Quelle exigence est la plus directement liée à la protection des données et des accès ?",
    "choices": [
      [
        "Les transactions doivent pouvoir être effectuées.",
        "Cela décrit une fonction.",
        "wrong"
      ],
      [
        "Les informations financières doivent être protégées et les accès contrôlés.",
        "Confidentialité et contrôle des accès sont des enjeux de sécurité.",
        "correct"
      ],
      [
        "Les écrans doivent être adaptés au téléphone.",
        "Cela concerne le mode d'accès et l'expérience.",
        "wrong"
      ],
      [
        "Les résultats doivent s'afficher rapidement.",
        "Cela concerne la performance.",
        "wrong"
      ]
    ],
    "feedbackGood": "La confidentialité et le contrôle des accès sont des exigences de sécurité explicites.",
    "feedbackBad": "Le contexte parle de données confidentielles et d'accès réservés : ce sont des indices de sécurité.",
    "impact": {
      "security": 34
    }
  },
  {
    "level": 2,
    "mission": "MISSION 6",
    "title": "Prévoir la charge",
    "client": "BilletFlash",
    "logo": "B",
    "text": "BilletFlash vend des billets en ligne. Lorsqu'un artiste populaire annonce une vente, des dizaines de milliers de personnes peuvent se connecter presque en même temps.",
    "hint": "Pense à ce qui se passe lorsque le nombre d'utilisateurs augmente brutalement.",
    "question": "Quel élément du contexte risque surtout d'influencer les choix liés à la performance ?",
    "choices": [
      [
        "Le nombre de connexions peut exploser lors d'une vente.",
        "Une forte charge simultanée peut exiger une conception adaptée à la charge.",
        "correct"
      ],
      [
        "Les clients peuvent acheter un billet.",
        "C'est une fonction du système.",
        "wrong"
      ],
      [
        "Les employés ont accès à une interface interne.",
        "Cela concerne les utilisateurs.",
        "wrong"
      ],
      [
        "Les billets contiennent le nom du client.",
        "Cela ne constitue pas ici une exigence de performance.",
        "wrong"
      ]
    ],
    "feedbackGood": "Une hausse massive et simultanée du trafic est un indice de charge et donc de performance.",
    "feedbackBad": "Le point clé est la forte concentration de connexions simultanées, qui influence la capacité à répondre sous charge.",
    "impact": {
      "performance": 33
    }
  },
  {
    "level": 2,
    "mission": "MISSION 7",
    "title": "Tolérer une panne",
    "client": "UrgencePlus",
    "logo": "U",
    "text": "UrgencePlus fournit un logiciel utilisé par des centres d'urgence. Le service est critique : il doit continuer à fonctionner même si un serveur rencontre un problème.",
    "hint": "Imagine qu'un composant cesse de fonctionner. Le service doit-il s'arrêter ?",
    "question": "Quelle exigence influence directement la conception pour résister aux pannes ?",
    "choices": [
      [
        "Le système doit continuer à fonctionner lorsqu'un serveur tombe en panne.",
        "Le contexte exige une tolérance à la défaillance.",
        "correct"
      ],
      [
        "Les opérateurs doivent saisir les informations d'un appel.",
        "Cela décrit une fonction.",
        "wrong"
      ],
      [
        "Les écrans doivent être simples à utiliser.",
        "Cela concerne surtout l'expérience.",
        "wrong"
      ],
      [
        "Les utilisateurs doivent se connecter depuis un navigateur.",
        "Cela décrit un mode d'accès.",
        "wrong"
      ]
    ],
    "feedbackGood": "Le système doit continuer malgré la panne d'un serveur : c'est un besoin de fiabilité et de résilience.",
    "feedbackBad": "La phrase sur la continuité malgré une panne est l'indice de fiabilité/résilience.",
    "impact": {
      "reliability": 34
    }
  },
  {
    "level": 2,
    "mission": "MISSION 8",
    "title": "Sécuriser les échanges",
    "client": "PayConnect",
    "logo": "P",
    "text": "PayConnect reçoit des paiements depuis son site Web. Les données de paiement sont transmises à un service externe. L'entreprise exige que les informations sensibles soient protégées pendant les échanges.",
    "hint": "Le risque apparaît pendant la communication entre le site et un autre service.",
    "question": "Quel besoin doit influencer la protection des communications entre systèmes ?",
    "choices": [
      [
        "Les échanges contenant des données sensibles doivent être protégés.",
        "La transmission de données sensibles implique des mesures de sécurité.",
        "correct"
      ],
      [
        "Les clients doivent pouvoir payer en ligne.",
        "C'est une fonction.",
        "wrong"
      ],
      [
        "Le service doit répondre en moins de deux secondes.",
        "C'est une exigence de performance.",
        "wrong"
      ],
      [
        "Le site doit être utilisable sur mobile.",
        "Cela concerne l'accès et l'expérience.",
        "wrong"
      ]
    ],
    "feedbackGood": "La protection des données pendant leur transmission est un enjeu de sécurité.",
    "feedbackBad": "Le contexte met l'accent sur les données sensibles transmises à un service externe : il faut protéger les échanges.",
    "impact": {
      "security": 33
    }
  },
  {
    "level": 2,
    "mission": "MISSION 9",
    "title": "Concevoir pour l'humain",
    "client": "CliniqueNova",
    "logo": "N",
    "text": "CliniqueNova veut un outil utilisé par du personnel qui doit saisir rapidement des informations pendant des rendez-vous. Les utilisateurs ont peu de temps pour consulter les écrans.",
    "hint": "Pense à la facilité, à la rapidité d'apprentissage et au risque d'erreur humaine.",
    "question": "Quel indice influence directement l'expérience d'utilisation ?",
    "choices": [
      [
        "Les écrans doivent permettre une saisie rapide et limiter les erreurs.",
        "Le temps limité et le risque d'erreur rendent l'ergonomie importante.",
        "correct"
      ],
      [
        "Le système doit survivre à une panne de serveur.",
        "Cela concerne la fiabilité.",
        "wrong"
      ],
      [
        "Les échanges avec un autre logiciel doivent être sécurisés.",
        "Cela concerne la sécurité.",
        "wrong"
      ],
      [
        "Le nombre de requêtes par seconde doit augmenter.",
        "Cela concerne la performance.",
        "wrong"
      ]
    ],
    "feedbackGood": "Le contexte impose une interaction efficace et peu d'erreurs : l'expérience utilisateur devient un facteur important.",
    "feedbackBad": "La saisie rapide et la limitation des erreurs sont directement liées à l'expérience utilisateur.",
    "impact": {
      "experience": 33
    }
  },
  {
    "level": 2,
    "mission": "MISSION 10",
    "title": "Distinguer UI et API",
    "client": "ComptaLink",
    "logo": "C",
    "text": "Un employé utilise un écran Web pour saisir une facture. Après validation, le logiciel envoie automatiquement les données à un service comptable externe.",
    "hint": "Une interaction implique une personne; l'autre implique deux logiciels.",
    "question": "Quelle situation correspond à une communication entre logiciels ?",
    "choices": [
      [
        "L'employé remplit le formulaire Web.",
        "Un humain interagit avec le logiciel.",
        "wrong"
      ],
      [
        "Le navigateur affiche le formulaire.",
        "C'est une interaction de l'interface utilisateur.",
        "wrong"
      ],
      [
        "Le logiciel envoie la facture au service comptable externe.",
        "Deux systèmes logiciels échangent des données.",
        "correct"
      ],
      [
        "L'employé clique sur le bouton Valider.",
        "C'est une interaction humaine.",
        "wrong"
      ]
    ],
    "feedbackGood": "Le logiciel et le service comptable communiquent directement : c'est une interface machine/API.",
    "feedbackBad": "L'échange logiciel ↔ logiciel est la transmission de la facture vers le service comptable.",
    "impact": {
      "relevance": 33
    }
  },
  {
    "level": 3,
    "mission": "MISSION 11",
    "title": "Croiser les contraintes",
    "client": "TravelGo",
    "logo": "T",
    "text": "TravelGo permet de rechercher et réserver des voyages. Le service est accessible sur ordinateur et téléphone. Pendant les vacances, le trafic augmente fortement. Les réservations doivent rester possibles même si un serveur tombe en panne.",
    "hint": "Ne te limite pas à une seule phrase : plusieurs indices peuvent influencer la conception.",
    "question": "Quels éléments du contexte doivent surtout être retenus pour la conception ?",
    "choices": [
      [
        "Le voyage réservé par le client.",
        "C'est un élément fonctionnel, mais la question vise les contraintes de conception.",
        "wrong"
      ],
      [
        "Les appareils, la forte charge et la continuité malgré une panne.",
        "Accès, performance et fiabilité sont tous présents dans le contexte.",
        "correct"
      ],
      [
        "Uniquement le téléphone.",
        "Le contexte contient aussi des contraintes de charge et de panne.",
        "wrong"
      ],
      [
        "Uniquement la panne du serveur.",
        "Cela oublie l'accès et la charge.",
        "wrong"
      ]
    ],
    "feedbackGood": "Une bonne analyse croise plusieurs indices : appareils visés, charge importante et tolérance aux pannes.",
    "feedbackBad": "Il faut retenir les trois facteurs : appareils ciblés, forte charge et continuité malgré une panne.",
    "impact": {
      "reliability": 33
    }
  },
  {
    "level": 3,
    "mission": "MISSION 12",
    "title": "Choisir selon le risque",
    "client": "DossierPro",
    "logo": "D",
    "text": "DossierPro conserve des documents confidentiels. Plusieurs rôles existent et chaque rôle ne doit voir que les dossiers autorisés. Des échanges ont lieu avec un autre système interne.",
    "hint": "Cherche le risque principal lié à l'accès aux informations.",
    "question": "Quel élément du contexte devrait peser fortement dans les décisions de conception ?",
    "choices": [
      [
        "La confidentialité et la séparation des accès selon les rôles.",
        "Le contrôle des autorisations est central dans ce contexte.",
        "correct"
      ],
      [
        "La possibilité de rechercher un dossier.",
        "C'est une fonction.",
        "wrong"
      ],
      [
        "Le fait que les utilisateurs ont un écran.",
        "C'est trop général pour être le principal enjeu.",
        "wrong"
      ],
      [
        "Le besoin de répondre rapidement.",
        "Aucune cible de performance n'est donnée.",
        "wrong"
      ]
    ],
    "feedbackGood": "Les rôles et la confidentialité indiquent une exigence forte de sécurité et d'autorisation.",
    "feedbackBad": "Le contexte met clairement l'accent sur la confidentialité et les autorisations par rôle.",
    "impact": {
      "security": 33
    }
  },
  {
    "level": 3,
    "mission": "MISSION 13",
    "title": "Identifier le point critique",
    "client": "StockLive",
    "logo": "S",
    "text": "StockLive suit les stocks de plusieurs entrepôts. Les informations sont consultées par de nombreux employés et doivent être à jour. Une interruption du service pendant une journée causerait des problèmes importants.",
    "hint": "Le système doit rester utile et disponible malgré les incidents.",
    "question": "Quel enjeu du contexte doit être priorisé pour éviter une interruption importante du service ?",
    "choices": [
      [
        "La disponibilité du service doit être maintenue autant que possible.",
        "Une interruption d'une journée aurait un impact métier important.",
        "correct"
      ],
      [
        "Les employés doivent pouvoir consulter les stocks.",
        "C'est une fonction.",
        "wrong"
      ],
      [
        "Les écrans doivent utiliser de grandes icônes.",
        "Aucune exigence d'ergonomie de ce type n'est donnée.",
        "wrong"
      ],
      [
        "Les données doivent être chiffrées pendant chaque recherche.",
        "La sécurité n'est pas l'enjeu principal décrit ici.",
        "wrong"
      ]
    ],
    "feedbackGood": "L'impact d'une longue interruption rend la disponibilité et la résilience particulièrement importantes.",
    "feedbackBad": "Le contexte insiste sur les conséquences d'une interruption : la disponibilité/fiabilité doit être considérée.",
    "impact": {
      "reliability": 33
    }
  },
  {
    "level": 3,
    "mission": "MISSION 14",
    "title": "Analyser le contexte complet",
    "client": "FoodNow",
    "logo": "F",
    "text": "FoodNow permet de commander des repas. Les clients utilisent surtout leur téléphone. Le vendredi soir, le nombre de commandes augmente fortement. Les paiements sont transmis à un fournisseur externe et les informations personnelles doivent rester protégées.",
    "hint": "Classe mentalement chaque indice avant de choisir.",
    "question": "Quelle analyse décrit le mieux les facteurs qui peuvent influencer l'architecture ?",
    "choices": [
      [
        "Téléphone uniquement.",
        "Cela ne tient pas compte des autres contraintes.",
        "wrong"
      ],
      [
        "Fonction de commande uniquement.",
        "Cela oublie les contraintes de contexte.",
        "wrong"
      ],
      [
        "Accès mobile, charge élevée, communication externe et protection des données.",
        "Le contexte combine accès, performance, intégration et sécurité.",
        "correct"
      ],
      [
        "Protection des données uniquement.",
        "La sécurité est importante, mais elle n'est pas le seul facteur.",
        "wrong"
      ]
    ],
    "feedbackGood": "L'analyse complète retient les quatre facteurs présents : accès mobile, charge, intégration externe et sécurité.",
    "feedbackBad": "Il faut croiser les indices plutôt que choisir une seule dimension : mobile, charge, système externe et données protégées.",
    "impact": {
      "performance": 33
    }
  },
  {
    "level": 3,
    "mission": "MISSION 15",
    "title": "Le briefing de l'architecte",
    "client": "TechNova",
    "logo": "T",
    "text": "TechNova prépare une plateforme de commandes utilisée par des clients et des employés. Les clients utilisent ordinateur et téléphone. Les commandes peuvent augmenter fortement. Les données sensibles doivent être protégées. Le service doit continuer malgré la panne d'un composant. Un système comptable reçoit automatiquement les commandes.",
    "hint": "Dernière mission : une architecture pertinente commence par une lecture complète du contexte.",
    "question": "Quelle synthèse du contexte est la plus utile avant de choisir une architecture ?",
    "choices": [
      [
        "Le logiciel doit permettre de commander.",
        "C'est une fonction importante, mais insuffisante pour guider seule les choix d'architecture.",
        "wrong"
      ],
      [
        "Il faut considérer les utilisateurs, les appareils, la charge, la sécurité, la continuité et les échanges avec le système comptable.",
        "Cette synthèse couvre les principaux facteurs qui influencent les décisions d'architecture.",
        "correct"
      ],
      [
        "Il faut surtout choisir une interface pour téléphone.",
        "Cela ne couvre qu'une partie du contexte.",
        "wrong"
      ],
      [
        "Il faut surtout rendre les pages rapides.",
        "La performance seule ne suffit pas.",
        "wrong"
      ]
    ],
    "feedbackGood": "🏆 Excellent ! Avant de choisir une architecture, il faut transformer le contexte en contraintes et besoins : utilisateurs, accès, charge, sécurité, fiabilité et intégrations.",
    "feedbackBad": "La bonne synthèse croise utilisateurs, accès, charge, sécurité, fiabilité et intégrations. C'est cette lecture du contexte qui prépare le choix d'architecture.",
    "impact": {
      "relevance": 33
    }
  }
];

const CATEGORIES = ["relevance","performance","security","reliability","experience"];
const CATEGORY_LABELS = {
  relevance:"Pertinence", performance:"Performance", security:"Sécurité",
  reliability:"Fiabilité", experience:"Expérience"
};
const CATEGORY_ICONS = {
  relevance:"🎯", performance:"⚡", security:"🛡️", reliability:"🌀", experience:"😊"
};
const CATEGORY_TOTALS = Object.fromEntries(CATEGORIES.map(cat => [
  cat,
  scenarios.filter(s => Object.keys(s.impact || {}).includes(cat)).length
]));
const state = {
  index:0, score:0, correct:0, wrong:0, streak:0, bestStreak:0,
  answered:false, timer:120, interval:null, lessons:[], points:0, categoryCorrect:{}
};

const $ = id => document.getElementById(id);
const clamp = n => Math.max(0, Math.min(100, n));

function validateScenarios() {
  const errors = [];
  if (scenarios.length !== 15) errors.push(`Le jeu doit contenir 15 questions (actuel : ${scenarios.length}).`);

  const missions = new Set();
  scenarios.forEach((s, i) => {
    const n = i + 1;
    if (!s || typeof s !== "object") { errors.push(`Question ${n} : scénario invalide.`); return; }
    ["mission","title","client","text","hint","question","feedbackGood","feedbackBad"].forEach(k => {
      if (!String(s[k] || "").trim()) errors.push(`Question ${n} : champ « ${k} » manquant.`);
    });
    if (missions.has(s.mission)) errors.push(`Question ${n} : mission dupliquée (${s.mission}).`);
    missions.add(s.mission);

    if (!Array.isArray(s.choices) || s.choices.length !== 4) {
      errors.push(`Question ${n} : il faut exactement 4 choix.`);
      return;
    }
    const correct = s.choices.filter(c => Array.isArray(c) && c[2] === "correct").length;
    if (correct !== 1) errors.push(`Question ${n} : il faut exactement 1 bonne réponse.`);
    const texts = new Set();
    s.choices.forEach((c,j) => {
      if (!Array.isArray(c) || c.length !== 3) { errors.push(`Question ${n}, choix ${j+1} invalide.`); return; }
      if (!String(c[0] || "").trim() || !String(c[1] || "").trim()) errors.push(`Question ${n}, choix ${j+1} : texte ou explication manquant.`);
      if (!['correct','wrong'].includes(c[2])) errors.push(`Question ${n}, choix ${j+1} : statut invalide.`);
      const normalized = String(c[0]).trim().toLowerCase();
      if (texts.has(normalized)) errors.push(`Question ${n} : choix dupliqué.`);
      texts.add(normalized);
    });

    const impactKeys = Object.keys(s.impact || {});
    if (impactKeys.length !== 1 || !CATEGORIES.includes(impactKeys[0])) {
      errors.push(`Question ${n} : elle doit alimenter exactement une jauge connue.`);
    }
  });

  CATEGORIES.forEach(cat => {
    if (!CATEGORY_TOTALS[cat]) errors.push(`${CATEGORY_LABELS[cat]} : aucune question associée.`);
  });

  if (errors.length) {
    console.error("Validation des scénarios échouée :", errors);
    $("dataError").textContent = "⚠️ Données du jeu invalides : " + errors.join(" ");
    return false;
  }
  console.info("✓ Validation réussie : 15 questions cohérentes, 1 bonne réponse chacune et toutes les jauges sont couvertes.");
  return true;
}
function resetState() {
  clearInterval(state.interval);
  Object.assign(state, {index:0, score:0, correct:0, wrong:0, streak:0, bestStreak:0,
    answered:false, timer:120, lessons:[], points:0, categoryCorrect:{}});
  CATEGORIES.forEach(k => {
    state[k] = 0;
    state.categoryCorrect[k] = 0;
  });
  renderMetrics();
  $("streak").textContent = "0";
  $("bestStreak").textContent = "0";
}
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function renderMetrics() {
  CATEGORIES.forEach(k => {
    const cap = k[0].toUpperCase() + k.slice(1);
    $("m"+cap).textContent = state[k] || 0;
    $("bar"+cap).style.width = (state[k] || 0) + "%";
  });
  $("scoreLive").textContent = state.score;
  $("correctLive").textContent = state.correct;
}

function categoryOf(scenario) {
  return Object.keys(scenario.impact || {}).find(k => CATEGORIES.includes(k));
}

function awardCategoryPoint(scenario) {
  const cat = categoryOf(scenario);
  if (!cat) return {cat:null, gain:0, value:0};
  const before = state[cat] || 0;
  state.categoryCorrect[cat] = (state.categoryCorrect[cat] || 0) + 1;
  const total = CATEGORY_TOTALS[cat] || 1;
  state[cat] = clamp(Math.round((state.categoryCorrect[cat] / total) * 100));
  return {cat, gain:state[cat] - before, value:state[cat]};
}

function animateMetric(cat) {
  if (!cat) return;
  const cap = cat[0].toUpperCase() + cat.slice(1);
  const metric = $("m"+cap)?.closest(".metric");
  if (!metric) return;
  metric.classList.remove("metric-up");
  void metric.offsetWidth;
  metric.classList.add("metric-up");
}
function shuffle(array) {
  const a = [...array];
  for (let i=a.length-1;i>0;i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function startTimer() {
  clearInterval(state.interval);
  state.timer = 120;
  updateTimer();
  state.interval = setInterval(() => {
    state.timer--;
    updateTimer();
    if (state.timer <= 0) {
      clearInterval(state.interval);
      if (!state.answered) choose(null);
    }
  },1000);
}

function updateTimer() {
  const min = String(Math.floor(state.timer/60)).padStart(2,"0");
  const sec = String(state.timer%60).padStart(2,"0");
  $("timer").textContent = `${min}:${sec}`;
  $("timer").classList.toggle("danger", state.timer <= 20);
}

function loadScenario() {
  if (state.index >= scenarios.length) return finish();
  const s = scenarios[state.index];
  state.answered = false;

  $("levelBadge").textContent = "NIVEAU " + s.level;
  $("missionLabel").textContent = s.mission;
  $("scenarioTitle").textContent = s.title;
  $("progressText").textContent = `${state.index+1} / ${scenarios.length}`;
  $("progressBar").style.width = `${((state.index+1)/scenarios.length)*100}%`;
  $("clientLogo").textContent = s.logo;
  $("clientName").textContent = s.client;
  $("scenarioText").textContent = s.text;
  $("contextHint").textContent = "💡 " + s.hint;
  $("questionText").textContent = s.question;
  const cat = categoryOf(s);
  $("categoryChip").textContent = `${CATEGORY_ICONS[cat] || "◆"} ${CATEGORY_LABELS[cat] || "Contexte"}`;
  $("feedback").className = "feedback hidden";
  $("continueBtn").classList.add("hidden");
  $("choiceArea").innerHTML = "";
  $("questionCard").classList.remove("question-in");
  void $("questionCard").offsetWidth;
  $("questionCard").classList.add("question-in");
  const contextCard = document.querySelector(".context-card");
  contextCard.classList.remove("context-enter");
  void contextCard.offsetWidth;
  contextCard.classList.add("context-enter");
  $("progressBar").classList.remove("progress-pulse");
  void $("progressBar").offsetWidth;
  $("progressBar").classList.add("progress-pulse");

  // Les choix sont mélangés à chaque question : l'ordre de la bonne réponse varie.
  shuffle(s.choices).forEach((c, index) => {
    const b = document.createElement("button");
    b.className = "choice";
    b.dataset.answer = c[2];
    b.innerHTML = `<span class="choice-icon">${String.fromCharCode(65+index)}</span><span>${c[0]}</span>`;
    b.onclick = () => choose(b, c);
    $("choiceArea").appendChild(b);
  });

  renderMetrics();
  startTimer();
}

function burst(text, good=true) {
  const el = document.createElement("div");
  el.className = "float-points " + (good ? "good" : "bad");
  el.textContent = text;
  $("fxLayer").appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

function particles() {
  for (let i=0;i<18;i++) {
    const p=document.createElement("i");
    p.className="particle";
    p.style.left=(35+Math.random()*30)+"%";
    p.style.top=(35+Math.random()*25)+"%";
    p.style.setProperty("--dx", ((Math.random()-.5)*260)+"px");
    p.style.setProperty("--dy", ((Math.random()-.5)*220)+"px");
    $("fxLayer").appendChild(p);
    setTimeout(()=>p.remove(),900);
  }
}

function stars() {
  for (let i=0;i<10;i++) {
    const star=document.createElement("span");
    star.className="fx-star";
    star.textContent=i%3===0?"✦":"✧";
    star.style.left=(43+Math.random()*14)+"%";
    star.style.top=(42+Math.random()*15)+"%";
    star.style.setProperty("--sx",((Math.random()-.5)*330)+"px");
    star.style.setProperty("--sy",(-45-Math.random()*170)+"px");
    $("fxLayer").appendChild(star);
    setTimeout(()=>star.remove(),1150);
  }
}

function toast(msg, good=true) {
  $("toast").textContent=msg;
  $("toast").className="toast show " + (good ? "good":"bad");
  setTimeout(()=>$("toast").classList.remove("show"),1800);
}

function choose(button, choice) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.interval);

  const scenario = scenarios[state.index];
  const buttons=[...document.querySelectorAll(".choice")];
  buttons.forEach(b=>b.classList.add("disabled"));

  const correct = choice && choice[2] === "correct";
  const correctChoice = scenario.choices.find(c=>c[2]==="correct");
  const correctButton = buttons.find(b=>b.dataset.answer === "correct");

  if (correct) {
    state.correct++;
    state.streak++;
    state.bestStreak=Math.max(state.bestStreak,state.streak);
    const base=Math.round(100/scenarios.length);
    const combo=Math.min(4,state.streak);
    const earned=base + (combo-1)*2;
    state.points += earned;
    state.score = clamp(Math.round((state.correct/scenarios.length)*100));
    const metricAward = awardCategoryPoint(scenario);
    button.classList.add("correct");
    $("questionCard").classList.add("success-pop");
    burst(`+${earned} ⚡`,true);
    stars();
    if(state.streak>=2) toast(`🔥 Série de ${state.streak} ! +${earned} points`,true);
    else toast(`✓ Bonne décision ! +${earned}`,true);
    if(state.streak>=3) particles();
    $("feedback").className="feedback good";
    $("feedback").innerHTML=`<strong>✓ Analyse validée</strong>${scenario.feedbackGood}<span class="selected-reason">Pourquoi : ${choice[1]}</span><span class="gauge-note">${CATEGORY_ICONS[metricAward.cat]} ${CATEGORY_LABELS[metricAward.cat]} : +${metricAward.gain} → ${metricAward.value}/100</span>`;
    renderMetrics();
    animateMetric(metricAward.cat);
  } else {
    state.wrong++;
    state.streak=0;
    state.score=clamp(Math.round((state.correct/scenarios.length)*100));
    if(button) button.classList.add("wrong");
    if(correctButton) correctButton.classList.add("reveal-correct");
    $("questionCard").classList.add("error-shake");
    burst("− Série",false);
    toast(button ? "À revoir : compare ton choix aux indices." : "⏱️ Temps écoulé",false);
    const selectedReason = choice ? `<span class="selected-reason"><strong>Pourquoi ce choix ne convient pas :</strong> ${choice[1]}</span>` : `<span class="selected-reason">Le temps est écoulé : aucun choix n'a été validé.</span>`;
    $("feedback").className="feedback bad";
    $("feedback").innerHTML=`<strong>△ Analyse à revoir</strong>${scenario.feedbackBad}${selectedReason}<span class="expected"><strong>Réponse attendue :</strong> ${correctChoice[0]} — ${correctChoice[1]}</span>`;
    state.lessons.push(scenario.feedbackBad);
    renderMetrics();
  }

  $("streak").textContent=state.streak;
  $("bestStreak").textContent=state.bestStreak;
  $("continueBtn").classList.remove("hidden");
}
function finish() {
  clearInterval(state.interval);
  const gaugeAvg=Math.round(CATEGORIES.reduce((sum,k)=>sum+state[k],0)/CATEGORIES.length);
  const final=clamp(Math.round((state.score*0.65)+(gaugeAvg*0.35)));
  $("finalScore").textContent=final;
  $("resultIcon").textContent=final>=90?"🏆":final>=75?"🚀":final>=60?"🧭":"🔧";
  $("resultTitle").textContent=final>=90?"Architecte du contexte !":final>=75?"Très bonne analyse !":final>=60?"Bonne progression !":"Encore quelques indices à maîtriser";
  $("resultText").textContent=`${state.correct} bonne(s) réponse(s) sur ${scenarios.length}. Chaque jauge montre les facteurs de contexte correctement repérés.`;
  $("resultMetrics").innerHTML=CATEGORIES.map(k=>`<div><span>${CATEGORY_LABELS[k]}</span><strong>${state[k]}</strong><div class="mini-meter"><i style="width:${state[k]}%"></i></div></div>`).join("");
  const lessons=[...new Set(state.lessons)];
  $("lessons").innerHTML=`<h3>🧠 À retenir</h3><ul>
    <li><strong>Fonctionnel</strong> = ce que le logiciel doit faire.</li>
    <li><strong>Contexte</strong> = utilisateurs, accès, contraintes et interactions avec d'autres systèmes.</li>
    <li><strong>Performance</strong> = vitesse et capacité sous charge.</li>
    <li><strong>Sécurité</strong> = confidentialité, intégrité et contrôle des accès.</li>
    <li><strong>Fiabilité</strong> = continuité du service et résistance aux pannes.</li>
    ${lessons.slice(0,2).map(x=>`<li>${x}</li>`).join("")}
  </ul>`;
  showScreen("endScreen");
  particles();
}

$("startBtn").onclick=()=>{ resetState(); showScreen("gameScreen"); loadScenario(); };
$("continueBtn").onclick=()=>{ state.index++; loadScenario(); };
$("restartBtn").onclick=()=>{ resetState(); showScreen("startScreen"); };
$("playAgainBtn").onclick=()=>{ resetState(); showScreen("gameScreen"); loadScenario(); };
validateScenarios();
