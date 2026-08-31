const scenarios = [
    {
        level: 1, mission: "MISSION 1", title: "Identifier une fonction",
        client: "ShopEasy", logo: "S",
        text: "ShopEasy veut créer une application Web permettant aux clients de consulter les produits, de les ajouter à un panier et de passer une commande.",
        hint: "« Que doit faire le logiciel pour l'utilisateur ? »",
        question: "Quelle information correspond à un besoin fonctionnel ?",
        choices: [
            ["🛡️ Sécurité", "Les informations doivent être chiffrées.", "Aucune exigence de sécurité n'est mentionnée.", "wrong"],
            ["⚙️ Fonctionnel", "Le client doit pouvoir ajouter un produit au panier.", "Le logiciel doit réaliser une action pour l'utilisateur.", "correct"],
            ["⚡ Performance", "La page doit s'afficher en moins d'une seconde.", "Aucune vitesse n'est précisée.", "wrong"],
            ["🌀 Résilience", "Le système doit continuer après une panne.", "Aucune panne n'est décrite.", "wrong"]
        ],
        feedbackGood: "Exact ! Ajouter un produit au panier décrit une action que le logiciel doit permettre. C'est donc un besoin fonctionnel.",
        feedbackBad: "La bonne réponse est « Le client doit pouvoir ajouter un produit au panier ». Un besoin fonctionnel décrit ce que le logiciel doit FAIRE.",
        impact: { relevance: 12, experience: 8 }
    },
    {
        level: 1, mission: "MISSION 2", title: "Reconnaître les utilisateurs",
        client: "CinemaPlus", logo: "C",
        text: "CinemaPlus souhaite créer une plateforme permettant aux spectateurs d'acheter des billets. Les employés du cinéma pourront également utiliser une interface interne pour gérer les horaires et les salles.",
        hint: "« Qui utilise le logiciel ? »",
        question: "Quels types d'utilisateurs sont identifiés dans le contexte ?",
        choices: [
            ["⚡ Performance", "Spectateurs et employés", "Ce sont bien deux groupes qui utilisent le logiciel.", "correct"],
            ["🌐 Mode d'accès", "Ordinateur et téléphone", "Ce sont des appareils, pas des types d'utilisateurs.", "wrong"],
            ["🛡️ Sécurité", "Employés et administrateurs", "Le contexte ne parle pas ici de sécurité.", "wrong"],
            ["🌀 Résilience", "Clients et salles", "Une salle n'est pas un utilisateur.", "wrong"]
        ],
        feedbackGood: "Bien joué ! Le contexte identifie deux types d'utilisateurs : les spectateurs et les employés.",
        feedbackBad: "La bonne réponse est « Spectateurs et employés ». Pour identifier les types d'utilisateurs, demande-toi : « Qui va utiliser le logiciel ? ».",
        impact: { relevance: 10, experience: 10 }
    },
    {
        level: 1, mission: "MISSION 3", title: "Comprendre le mode d'accès",
        client: "FitLife", logo: "F",
        text: "FitLife veut offrir son application aux membres. Ceux-ci pourront l'utiliser depuis leur téléphone intelligent ou leur tablette lorsqu'ils sont à la maison ou au gym.",
        hint: "« Avec quel matériel et comment l'utilisateur accède-t-il au logiciel ? »",
        question: "Quel élément du contexte décrit le mode d'accès au logiciel ?",
        choices: [
            ["👥 Utilisateurs", "Les membres de FitLife", "Cela indique qui utilise le logiciel.", "wrong"],
            ["📱 Mode d'accès", "Téléphone intelligent et tablette", "Ces appareils permettent aux utilisateurs d'accéder au logiciel.", "correct"],
            ["🛡️ Sécurité", "Protéger les comptes des membres", "Aucune protection n'est décrite.", "wrong"],
            ["⚡ Performance", "L'application doit être rapide", "Aucune vitesse n'est mentionnée.", "wrong"]
        ],
        feedbackGood: "Exact ! Le téléphone et la tablette décrivent le matériel utilisé pour accéder au logiciel.",
        feedbackBad: "La bonne réponse est « Téléphone intelligent et tablette ». Le mode d'accès répond notamment à la question : « Comment et avec quel type de matériel les utilisateurs accèdent-ils au logiciel ? ».",
        impact: { relevance: 10, experience: 8 }
    },
    {
        level: 1, mission: "MISSION 4", title: "Faire la différence",
        client: "FoodNow", logo: "F",
        text: "FoodNow permet aux clients de commander des repas. Le client choisit un repas, indique son adresse et confirme sa commande.",
        hint: "« Cherche une action réalisée par le logiciel. »",
        question: "Quelle proposition représente un besoin fonctionnel ?",
        choices: [
            ["🛡️ Sécurité", "L'adresse du client doit être protégée.", "C'est une exigence de sécurité, pas une fonction.", "wrong"],
            ["⚡ Performance", "La confirmation doit être très rapide.", "Cela concerne la performance.", "wrong"],
            ["⚙️ Fonctionnel", "Le système doit permettre de confirmer une commande.", "C'est une action que le logiciel doit réaliser.", "correct"],
            ["🌀 Résilience", "Le système doit rester disponible après une panne.", "Aucune panne n'est mentionnée.", "wrong"]
        ],
        feedbackGood: "Très bien ! Permettre de confirmer une commande décrit directement une fonction du logiciel.",
        feedbackBad: "La bonne réponse est « Le système doit permettre de confirmer une commande ». C'est une action que le logiciel doit offrir.",
        impact: { relevance: 12, experience: 8 }
    },
    {
        level: 1, mission: "MISSION 5", title: "Repérer la performance",
        client: "QuickSearch", logo: "Q",
        text: "QuickSearch est un moteur de recherche interne. Les employés effectueront plusieurs recherches par minute et l'entreprise veut que les résultats apparaissent très rapidement.",
        hint: "« Quel indice indique une exigence sur la vitesse ? »",
        question: "Quel besoin non fonctionnel est clairement présent ?",
        choices: [
            ["🌐 Langue", "L'application doit être en français.", "Aucune langue n'est mentionnée.", "wrong"],
            ["⚡ Performance", "Les résultats doivent apparaître très rapidement.", "Le contexte insiste sur la vitesse de réponse.", "correct"],
            ["👥 Utilisateurs", "Les employés utilisent le système.", "Cela décrit les utilisateurs.", "wrong"],
            ["⚙️ Fonctionnel", "Le système doit permettre de rechercher.", "C'est une fonction, mais ce n'est pas l'élément mis en évidence.", "wrong"]
        ],
        feedbackGood: "Exact ! La vitesse de réponse est directement liée au besoin non fonctionnel de performance.",
        feedbackBad: "La bonne réponse est « Performance ». Les mots « très rapidement » indiquent une exigence concernant la vitesse du système.",
        impact: { relevance: 10, performance: 18 }
    },
    {
        level: 2, mission: "MISSION 6", title: "Distinguer UI et API",
        client: "PayConnect", logo: "P",
        text: "Lorsqu'un client effectue un paiement, il utilise un formulaire Web. Une fois le paiement accepté, le système transmet automatiquement les informations à un logiciel comptable.",
        hint: "« Qui communique avec qui ? »",
        question: "Quelle situation représente une interface machine (API) ?",
        choices: [
            ["👤 UI", "Le client remplit le formulaire de paiement.", "Un humain interagit avec le logiciel.", "wrong"],
            ["📱 UI", "Le client utilise son téléphone.", "C'est un accès humain au logiciel.", "wrong"],
            ["🤖 API", "Le système de paiement transmet les informations au logiciel comptable.", "Deux logiciels communiquent entre eux.", "correct"],
            ["⌨️ UI", "Le client saisit ses informations.", "L'utilisateur interagit directement avec le logiciel.", "wrong"]
        ],
        feedbackGood: "Excellent ! Le système de paiement et le logiciel comptable sont deux composants logiciels qui communiquent : c'est une API.",
        feedbackBad: "La bonne réponse est « Le système de paiement transmet les informations au logiciel comptable ». Une API permet à des logiciels ou composants de communiquer.",
        impact: { relevance: 12, performance: 6, experience: 6 }
    },
    {
        level: 2, mission: "MISSION 7", title: "Détecter la sécurité",
        client: "BankPro", logo: "B",
        text: "BankPro développe une application bancaire. Les clients pourront consulter leurs comptes et effectuer des transactions. Les informations financières sont confidentielles et certaines fonctionnalités doivent être accessibles uniquement aux employés autorisés.",
        hint: "« Qu'est-ce qui doit être protégé ou rendu privé ? »",
        question: "Quel besoin non fonctionnel est particulièrement important ici ?",
        choices: [
            ["🛡️ Sécurité", "Les informations et fonctionnalités privées doivent être protégées.", "Le contexte parle explicitement de confidentialité et d'accès autorisé.", "correct"],
            ["⚡ Performance", "Toutes les transactions doivent être instantanées.", "La vitesse n'est pas mentionnée.", "wrong"],
            ["🌐 Mode d'accès", "Les clients utilisent un ordinateur.", "Cela ne constitue pas le besoin principal décrit.", "wrong"],
            ["🌀 Résilience", "Le système doit fonctionner après une panne.", "Aucune panne n'est mentionnée.", "wrong"]
        ],
        feedbackGood: "Exact ! Les informations confidentielles et les fonctionnalités réservées indiquent clairement un besoin de sécurité.",
        feedbackBad: "La bonne réponse est « Sécurité ». La confidentialité des données et le contrôle des accès sont des indices importants.",
        impact: { relevance: 12, security: 20 }
    },
    {
        level: 2, mission: "MISSION 8", title: "Repérer la fiabilité",
        client: "UrgencePlus", logo: "U",
        text: "UrgencePlus fournit un logiciel utilisé par des centres d'urgence. Le service doit continuer à fonctionner même lorsqu'un serveur rencontre un problème.",
        hint: "« Que doit-il se passer lorsqu'un composant tombe en panne ? »",
        question: "Quel besoin est mis en évidence ?",
        choices: [
            ["⚡ Performance", "Le logiciel doit répondre rapidement.", "La vitesse n'est pas l'information principale.", "wrong"],
            ["🌀 Fiabilité / résilience", "Le service doit continuer malgré la panne d'un serveur.", "Le système doit tolérer une panne.", "correct"],
            ["👥 Utilisateurs", "Les employés utilisent le système.", "Cela identifie les utilisateurs, pas le besoin principal.", "wrong"],
            ["📱 Interface", "Les utilisateurs ont un écran.", "Ce n'est pas l'enjeu décrit.", "wrong"]
        ],
        feedbackGood: "Très bien ! Continuer à fonctionner malgré une panne correspond à la résilience et à la haute disponibilité.",
        feedbackBad: "La bonne réponse est « Résilience ». Le contexte indique clairement que le système doit continuer malgré la panne d'un serveur.",
        impact: { relevance: 12, reliability: 22 }
    },
    {
        level: 2, mission: "MISSION 9", title: "Analyser plusieurs indices",
        client: "TravelGo", logo: "T",
        text: "TravelGo offre une plateforme de réservation accessible sur ordinateur et téléphone. Les clients peuvent rechercher et réserver un voyage. Le nombre d'utilisateurs peut augmenter fortement pendant les vacances.",
        hint: "« Le contexte peut contenir plusieurs types d'informations. »",
        question: "Quelle analyse est la plus pertinente ?",
        choices: [
            ["⚙️ Fonctionnel", "Les clients peuvent réserver un voyage.", "C'est vrai, mais incomplet.", "wrong"],
            ["📱 Accès", "Ordinateur et téléphone.", "C'est un élément important, mais incomplet.", "wrong"],
            ["⚡ Performance", "Le nombre d'utilisateurs augmente.", "Cela indique un enjeu de performance, mais il existe aussi une fonction et un mode d'accès.", "wrong"],
            ["🧩 Plusieurs besoins", "Réserver = fonctionnel, appareils = accès, forte fréquentation = Fiable.", "Cette réponse tient compte des différents indices du contexte.", "correct"]
        ],
        feedbackGood: "Excellent ! Un même contexte peut révéler plusieurs besoins. Il faut apprendre à repérer tous les indices importants.",
        feedbackBad: "La bonne réponse est « Plusieurs besoins ». Le contexte contient une fonction, un mode d'accès et un enjeu potentiel de performance.",
        impact: { relevance: 18, performance: 12, experience: 8 }
    },
    {
        level: 2, mission: "MISSION 10", title: "Comprendre la fréquence des changements",
        client: "StartApp", logo: "S",
        text: "StartApp développe une plateforme Web dont les fonctionnalités sont modifiées presque chaque semaine. L'équipe souhaite pouvoir faire évoluer le logiciel facilement sans devoir tout modifier à chaque changement.",
        hint: "« À quelle fréquence le logiciel doit-il évoluer ? »",
        question: "Quel élément du contexte doit être pris en compte ?",
        choices: [
            ["🌀 Résilience", "Le logiciel doit résister aux pannes.", "Aucune panne n'est mentionnée.", "wrong"],
            ["🛡️ Sécurité", "Les fonctions doivent être protégées.", "Aucune exigence de sécurité n'est décrite.", "wrong"],
            ["🔄 Maintenabilité", "Les fonctionnalités changent souvent et le système doit être facile à faire évoluer.", "Le contexte insiste sur l'évolution fréquente.", "correct"],
            ["📱 Matériel", "Le logiciel doit fonctionner sur une tablette.", "Aucune tablette n'est mentionnée.", "wrong"]
        ],
        feedbackGood: "Exact ! La fréquence élevée des changements est une caractéristique importante du contexte qui doit influencer les besoins du logiciel.",
        feedbackBad: "La bonne réponse est « Fréquence de changements ». Le contexte indique que les fonctionnalités changent presque chaque semaine.",
        impact: { relevance: 16, experience: 12 }
    },
    {
        level: 2, mission: "MISSION 11", title: "Identifier une API",
        client: "LogiTrack", logo: "L",
        text: "LogiTrack possède une application Web utilisée par les employés. Lorsqu'une livraison est enregistrée, le système envoie automatiquement les informations au logiciel de facturation de l'entreprise.",
        hint: "« Est-ce un humain ou un logiciel qui déclenche la communication ? »",
        question: "Quel élément correspond à une interface machine ?",
        choices: [
            ["👤 UI", "L'employé consulte la livraison dans l'application.", "Humain ↔ logiciel.", "wrong"],
            ["🤖 API", "L'application envoie les informations au logiciel de facturation.", "Logiciel ↔ logiciel.", "correct"],
            ["📱 UI", "L'employé utilise son ordinateur.", "C'est un mode d'accès.", "wrong"],
            ["⚡ Performance", "La facture est générée rapidement.", "Aucune exigence de vitesse n'est donnée.", "wrong"]
        ],
        feedbackGood: "Parfait ! L'application et le logiciel de facturation communiquent automatiquement : cette communication passe par une interface machine, généralement une API.",
        feedbackBad: "La bonne réponse est « L'application envoie les informations au logiciel de facturation ». Deux logiciels communiquent : c'est une interface machine/API.",
        impact: { relevance: 12, performance: 8 }
    },
    {
        level: 3, mission: "MISSION 12", title: "Le contexte devient critique",
        client: "MedData", logo: "M",
        text: "MedData conserve des dossiers médicaux accessibles par des professionnels autorisés. Le service doit rester disponible en tout temps et continuer à fonctionner même lorsqu'un composant rencontre un problème.",
        hint: "« Deux risques majeurs sont présents : panne et accès non autorisé. »",
        question: "Quels besoins non fonctionnels sont prioritaires ?",
        choices: [
            ["⚡ Performance seulement", "Les données doivent être affichées rapidement.", "La vitesse n'est pas le principal enjeu.", "wrong"],
            ["🌐 Mode d'accès + UI", "Les professionnels utilisent un écran.", "Cela ne couvre pas les risques décrits.", "wrong"],
            ["🛡️ Sécurité + 🌀 Fiabilité", "Protéger les données et rester disponible malgré les problèmes.", "Les deux exigences sont explicitement présentes.", "correct"],
            ["⚙️ Fonctionnel seulement", "Consulter les dossiers médicaux.", "C'est une fonction, mais elle ne couvre pas les exigences critiques.", "wrong"]
        ],
        feedbackGood: "Excellent ! Tu as repéré les deux enjeux critiques : sécurité des données et résilience/disponibilité du service.",
        feedbackBad: "La bonne réponse est « Sécurité + Résilience ». Il faut protéger les données contre les accès non autorisés ET maintenir le service disponible.",
        impact: { relevance: 18, security: 20, reliability: 20 }
    },
    {
        level: 3, mission: "MISSION 13", title: "Analyser le matériel",
        client: "FieldTech", logo: "F",
        text: "FieldTech développe une application utilisée par des techniciens directement sur le terrain. Ils travaillent principalement avec des tablettes et doivent pouvoir consulter les informations pendant leurs déplacements.",
        hint: "« Le contexte matériel influence la façon dont les utilisateurs accèdent au logiciel. »",
        question: "Quel élément du contexte est particulièrement important ?",
        choices: [
            ["📱 Mode d'accès et matériel", "Les techniciens utilisent principalement des tablettes sur le terrain.", "Le matériel et le contexte d'utilisation influencent les besoins du système.", "correct"],
            ["🛡️ Sécurité seulement", "Les données doivent être chiffrées.", "Aucune exigence de chiffrement n'est donnée.", "wrong"],
            ["🌀 Résilience seulement", "Le serveur doit survivre à une panne.", "Aucune panne n'est mentionnée.", "wrong"],
            ["🤖 API seulement", "Un logiciel externe doit communiquer avec l'application.", "Aucune communication externe n'est décrite.", "wrong"]
        ],
        feedbackGood: "Très bien ! Le type de matériel et le contexte d'utilisation sont des éléments importants pour comprendre les besoins du logiciel.",
        feedbackBad: "La bonne réponse est « Mode d'accès et matériel ». Le contexte précise que les utilisateurs sont sur le terrain et utilisent principalement des tablettes.",
        impact: { relevance: 15, experience: 15 }
    },
    {
        level: 3, mission: "MISSION 14", title: "Centralisées ou réparties",
        client: "GlobalData", logo: "G",
        text: "GlobalData possède plusieurs bureaux dans différentes villes. Les employés doivent consulter les mêmes informations depuis différents endroits. L'entreprise veut éviter que chaque bureau possède une version différente des données.",
        hint: "« Où se trouvent les données et comment doivent-elles être partagées ? »",
        question: "Quelle question de contexte est particulièrement pertinente ?",
        choices: [
            ["⚡ Quelle vitesse de clavier utiliser ?", "Le clavier n'est pas un enjeu décrit.", "Ce n'est pas pertinent ici.", "wrong"],
            ["🌐 Les données doivent-elles être centralisées ou réparties ?", "Les bureaux doivent accéder aux mêmes informations.", "Le contexte soulève directement cette question.", "correct"],
            ["🛡️ Le logo doit-il être sécurisé ?", "Un logo n'est pas un élément de sécurité.", "Ce n'est pas pertinent.", "wrong"],
            ["👥 Combien de couleurs doit avoir l'interface ?", "La couleur ne concerne pas le problème décrit.", "Ce n'est pas une question d'architecture liée au contexte.", "wrong"]
        ],
        feedbackGood: "Exact ! Le contexte soulève directement la question de la centralisation ou de la répartition des données.",
        feedbackBad: "La bonne réponse est « Les données doivent-elles être centralisées ou réparties ? ». Plusieurs bureaux doivent accéder aux mêmes données.",
        impact: { relevance: 18, performance: 6, experience: 8 }
    },
    {
        level: 3, mission: "MISSION 15", title: "Service attendu",
        client: "AirControl", logo: "A",
        text: "AirControl fournit un système utilisé par une entreprise aérienne. Une interruption du service peut empêcher plusieurs opérations importantes. L'entreprise exige donc que le service soit disponible presque en permanence.",
        hint: "« Que se passe-t-il si le système devient indisponible ? »",
        question: "Quel besoin doit être particulièrement considéré ?",
        choices: [
            ["🌀 Résilience / haute disponibilité", "Le service doit rester disponible malgré les problèmes.", "Le caractère critique du service rend la disponibilité essentielle.", "correct"],
            ["🌐 Langue", "Le logiciel doit être disponible en français.", "Aucune langue n'est précisée.", "wrong"],
            ["⚙️ Fonctionnel", "Le logiciel doit afficher un écran.", "Ce n'est pas l'enjeu principal.", "wrong"],
            ["📱 Mode d'accès", "Le logiciel fonctionne sur un téléphone.", "Aucun téléphone n'est mentionné.", "wrong"]
        ],
        feedbackGood: "Exact ! Le caractère critique du service rend la haute disponibilité et la résilience particulièrement importantes.",
        feedbackBad: "La bonne réponse est « Résilience / haute disponibilité ». Le service est critique et une interruption aurait des conséquences importantes.",
        impact: { relevance: 15, reliability: 24 }
    },
    {
        level: 3, mission: "MISSION 16", title: "Minimiser les risques",
        client: "InsurePro", logo: "I",
        text: "InsurePro développe un logiciel qui traite des informations importantes pour ses clients. L'entreprise veut réduire au maximum les conséquences d'une erreur ou d'une défaillance du système.",
        hint: "« Le logiciel doit-il seulement fonctionner, ou doit-il aussi limiter les conséquences d'un problème ? »",
        question: "Quel aspect du contexte est mis en évidence ?",
        choices: [
            ["⚡ Performance", "Le logiciel doit répondre rapidement.", "La rapidité n'est pas mentionnée.", "wrong"],
            ["🛡️ Sécurité uniquement", "Les données doivent être protégées.", "Le contexte est plus large que la sécurité.", "wrong"],
            ["🏢 Tolérance aux failles ", "L'entreprise veut réduire les conséquences d'erreurs ou de défaillances.", "C'est explicitement l'objectif mentionné.", "correct"],
            ["📱 Mode d'accès", "Les clients utilisent une tablette.", "Aucun appareil n'est précisé.", "wrong"]
        ],
        feedbackGood: "Très bien ! Le contexte montre que la minimisation des risques d'entreprise est une préoccupation importante.",
        feedbackBad: "La bonne réponse est « Minimisation des risques d'entreprise ». L'entreprise cherche à réduire les conséquences d'erreurs ou de défaillances.",
        impact: { relevance: 18, reliability: 12, security: 10 }
    },
    {
        level: 3, mission: "MISSION 17", title: "Séparer fonctionnel et non fonctionnel",
        client: "MusicBox", logo: "M",
        text: "MusicBox permettra aux utilisateurs de créer des listes de lecture. L'entreprise exige aussi que les listes de lecture s'affichent en moins de deux secondes.",
        hint: "« Une information dit quoi faire ; l'autre dit comment le système doit se comporter. »",
        question: "Quelle analyse est correcte ?",
        choices: [
            ["⚙️ Les deux sont fonctionnels", "Créer et afficher sont deux actions.", "La contrainte de temps change la nature de la deuxième information.", "wrong"],
            ["⚡ Les deux sont non fonctionnels", "Les deux concernent le comportement.", "Créer une liste de lecture décrit une fonction.", "wrong"],
            ["🧩 Fonctionnel + performance", "Créer une liste = fonctionnel ; affichage en moins de deux secondes = performance.", "Cette distinction est correcte.", "correct"],
            ["🛡️ Fonctionnel + sécurité", "Créer une liste = fonctionnel ; deux secondes = sécurité.", "Le temps concerne la performance.", "wrong"]
        ],
        feedbackGood: "Excellent ! « Créer une liste » indique ce que le logiciel doit faire. « Moins de deux secondes » indique une exigence de performance.",
        feedbackBad: "La bonne réponse est « Fonctionnel + performance ». Le premier élément décrit une fonction ; la limite de deux secondes décrit la performance.",
        impact: { relevance: 20, performance: 18, experience: 8 }
    },
    {
        level: 3, mission: "MISSION 18", title: "Interface humaine ou machine",
        client: "SmartFactory", logo: "S",
        text: "Dans une usine, un opérateur utilise un écran tactile pour démarrer une machine. Le logiciel de gestion de production reçoit ensuite automatiquement l'état de la machine.",
        hint: "« Il y a deux communications différentes dans cette situation. »",
        question: "Quelle analyse des interfaces est correcte ?",
        choices: [
            ["👤 UI puis 🤖 API", "Opérateur → écran tactile ; système → logiciel de production.", "Humain ↔ logiciel puis logiciel ↔ logiciel.", "correct"],
            ["🤖 API puis UI", "Opérateur → écran ; système → logiciel.", "Les deux interfaces sont inversées.", "wrong"],
            ["👤 UI seulement", "Tout passe par l'écran tactile.", "Le logiciel de production reçoit aussi automatiquement des données.", "wrong"],
            ["🤖 API seulement", "Toutes les communications sont entre logiciels.", "L'opérateur interagit directement avec l'écran.", "wrong"]
        ],
        feedbackGood: "Excellent raisonnement ! Il y a deux interfaces : l'opérateur utilise une UI, puis les logiciels communiquent via une interface machine/API.",
        feedbackBad: "La bonne réponse est « UI puis API ». L'opérateur ↔ écran est une UI ; le système ↔ logiciel de production est une communication machine.",
        impact: { relevance: 20, performance: 10, experience: 12 }
    },
    {
        level: 3, mission: "MISSION 19", title: "Le scénario complet",
        client: "MegaEvent", logo: "E",
        text: "MegaEvent lance une plateforme de réservation pour un événement très populaire. Les clients utilisent leur téléphone ou leur ordinateur. Ils doivent pouvoir réserver un billet. Au moment de l'ouverture, des dizaines de milliers de personnes pourraient se connecter simultanément. Un service externe doit aussi recevoir automatiquement les informations de réservation.",
        hint: "« Repère les fonctions, utilisateurs, accès, performance et communication machine. »",
        question: "Quelle analyse est la plus complète ?",
        choices: [
            ["⚙️ Fonctionnel seulement", "Les clients doivent réserver un billet.", "C'est vrai mais très incomplet.", "wrong"],
            ["⚡ Performance seulement", "Des milliers de personnes se connectent.", "C'est important mais ce n'est qu'un des éléments.", "wrong"],
            ["🧩 Contexte multiple", "Réservation = fonctionnel ; téléphone/ordinateur = accès ; forte charge = performance ; service externe = API.", "Cette réponse tient compte de plusieurs indices.", "correct"],
            ["🛡️ Sécurité seulement", "Les billets doivent être protégés.", "La sécurité n'est pas l'élément principal décrit.", "wrong"]
        ],
        feedbackGood: "Bravo ! Tu as fait une véritable analyse de contexte : fonction, utilisateurs et accès, performance et communication avec un autre système.",
        feedbackBad: "La bonne réponse est « Contexte multiple ». Une analyse d'architecture commence justement par identifier plusieurs dimensions du contexte plutôt que de chercher une seule réponse.",
        impact: { relevance: 25, performance: 18, experience: 15 }
    },
    {
        level: 3, mission: "MISSION 20", title: "Le défi de l'architecte",
        client: "TechNova", logo: "T",
        text: "TechNova veut créer un service utilisé par des clients et des employés. Les clients utiliseront un site Web sur ordinateur et téléphone. Le logiciel doit permettre de commander des produits. Les commandes doivent être traitées rapidement, les données confidentielles doivent être protégées et le service doit continuer à fonctionner même lorsqu'un composant tombe en panne. Un logiciel comptable recevra automatiquement les informations de commande.",
        hint: "« Dernière mission : trouve tous les indices importants. »",
        question: "Quelle analyse du contexte est la plus complète ?",
        choices: [
            ["⚙️ Fonctionnel uniquement", "Le logiciel doit permettre de commander.", "Une seule dimension est identifiée.", "wrong"],
            ["🧩 Analyse complète", "Fonctionnel + utilisateurs + accès + performance + sécurité + résilience + API.", "Tous les principaux indices du contexte sont identifiés.", "correct"],
            ["⚡ Performance + sécurité", "Les commandes sont rapides et les données protégées.", "Il manque plusieurs éléments importants.", "wrong"],
            ["🤖 API uniquement", "Le logiciel comptable reçoit les commandes.", "L'API n'est qu'un des éléments du contexte.", "wrong"]
        ],
        feedbackGood: "🏆 Mission accomplie ! Tu as identifié les différentes dimensions du contexte : ce que le logiciel fait, qui l'utilise, comment on y accède, ainsi que performance, sécurité, résilience et communication machine.",
        feedbackBad: "La bonne réponse est « Analyse complète ». Le contexte contient volontairement plusieurs indices : fonctionnel, utilisateurs, accès, performance, sécurité, résilience et API.",
        impact: { relevance: 30, performance: 15, security: 15, reliability: 15, experience: 15 }
    }
];

let state = { index: 0, score: 0, relevance: 0, performance: 0, security: 0, reliability: 0, experience: 0, answered: false, timer: 100, interval: null, wrong: 0, lessons: [] };

const $ = id => document.getElementById(id);
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    $(id).classList.add("active");
}
function clamp(n) { return Math.max(0, Math.min(100, n)) }
function renderMetrics() {
    ["relevance", "performance", "security", "reliability", "experience"].forEach(k => {
        $("m" + k[0].toUpperCase() + k.slice(1)).textContent = state[k];
        $("bar" + k[0].toUpperCase() + k.slice(1)).style.width = state[k] + "%";
    });
}
function toast(msg) { const t = $("toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 1800) }
function startTimer() {
    clearInterval(state.interval); state.timer = 100; $("timer").textContent = 100; $("timer").classList.remove("danger");
    state.interval = setInterval(() => {
        state.timer--; $("timer").textContent = state.timer;
        if (state.timer <= 20) $("timer").classList.add("danger");
        if (state.timer <= 0) { clearInterval(state.interval); if (!state.answered) choose(-1) }
    }, 1000);
}
function loadScenario() {
    if (state.index >= scenarios.length) { finish(); return }
    const s = scenarios[state.index]; state.answered = false;
    $("levelBadge").textContent = "NIVEAU " + s.level;
    $("missionLabel").textContent = s.mission; $("scenarioTitle").textContent = s.title;
    $("progressText").textContent = (state.index + 1) + " / " + scenarios.length;
    $("progressBar").style.width = ((state.index + 1) / scenarios.length * 100) + "%";
    $("clientLogo").textContent = s.logo; $("clientName").textContent = s.client;
    $("scenarioText").textContent = s.text; $("contextHint").textContent = s.hint;
    $("questionText").textContent = s.question;
    $("feedback").className = "feedback hidden"; $("continueBtn").classList.add("hidden");
    $("choiceArea").innerHTML = "";
    s.choices.forEach((c, i) => {
        const b = document.createElement("button"); b.className = "choice"; b.innerHTML = `<strong>${c[0]}</strong><small>${c[1]}</small>`; b.onclick = () => choose(i); $("choiceArea").appendChild(b)
    });
    startTimer(); renderMetrics();
}
function choose(index) {
    if (state.answered) return; state.answered = true; clearInterval(state.interval);
    const s = scenarios[state.index], buttons = [...document.querySelectorAll(".choice")];
    buttons.forEach(b => b.classList.add("disabled"));
    const correct = index >= 0 && s.choices[index][3] === "correct";
    if (index >= 0) buttons[index].classList.add(correct ? "correct" : "wrong");
    if (correct) {
        state.score += Math.round(100 / scenarios.length); Object.entries(s.impact || {}).forEach(([k, v]) => state[k] = clamp(state[k] + v));
        $("feedback").className = "feedback good"; $("feedback").innerHTML = `<strong>✓ Bonne analyse !</strong>${s.feedbackGood}<br><em>Conséquence : ton système gagne en pertinence.</em>`;
        toast("Décision pertinente + points");
    } else {
        state.score -= index < 0 ? 3 : 2; state.wrong++; state.lessons.push(s.feedbackBad);
        if (index >= 0) buttons[index].classList.add("wrong");
        $("feedback").className = "feedback bad"; const correctChoice = s.choices.find(c => c[3] === "correct"); $("feedback").innerHTML = `<strong>△ À revoir</strong>${s.feedbackBad}<br><em>Bonne réponse : <strong>${correctChoice[0]} — ${correctChoice[1]}</strong></em><br><em>Indice : relis les mots importants du contexte.</em>`;
        toast(index < 0 ? "Temps écoulé !" : "Analyse à corriger");
    }
    renderMetrics(); $("continueBtn").classList.remove("hidden");
}
function finish() {
    clearInterval(state.interval); state.score = clamp(state.score);
    let avg = Math.round((state.relevance + state.performance + state.security + state.reliability + state.experience) / 5);
    let final = clamp(Math.round(state.score * .65 + avg * .35)); $("finalScore").textContent = final;
    $("resultIcon").textContent = final >= 85 ? "🏆" : final >= 65 ? "🚀" : "🧭";
    $("resultTitle").textContent = final >= 85 ? "Architecte du contexte !" : final >= 65 ? "Bonne analyse du contexte !" : "Le contexte demande encore un peu d'analyse";
    $("resultText").textContent = `Tu as terminé ${scenarios.length} situations. Ton score reflète ta capacité à transformer des informations de contexte en besoins pertinents.`;
    $("resultMetrics").innerHTML = [["Pertinence", state.relevance], ["Performance", state.performance], ["Sécurité", state.security], ["Fiabilité", state.reliability], ["Expérience", state.experience]].map(x => `<div>${x[0]}<strong>${x[1]}</strong></div>`).join("");
    const unique = [...new Set(state.lessons)];
    $("lessons").innerHTML = `<h3>🧠 Ce qu'il faut retenir</h3><ul>
    <li>Les besoins fonctionnels décrivent <strong>ce que le logiciel doit faire</strong>.</li>
    <li>Les besoins non fonctionnels décrivent notamment performance, sécurité et fiabilité.</li>
    <li>Une UI relie un <strong>humain</strong> au logiciel ; une API relie des <strong>logiciels/composants</strong>.</li>
    ${unique.slice(0, 2).map(x => `<li>${x}</li>`).join("")}</ul>`;
    showScreen("endScreen");
}
function reset() { state = { index: 0, score: 0, relevance: 0, performance: 0, security: 0, reliability: 0, experience: 0, answered: false, timer: 120, interval: null, wrong: 0, lessons: [] }; showScreen("startScreen"); $("levelBadge").textContent = "NIVEAU 1" }
$("startBtn").onclick = () => { reset(); showScreen("gameScreen"); loadScenario() };
$("continueBtn").onclick = () => { state.index++; loadScenario() };
$("restartBtn").onclick = reset; $("playAgainBtn").onclick = () => { showScreen("gameScreen"); reset(); showScreen("gameScreen"); loadScenario() };
