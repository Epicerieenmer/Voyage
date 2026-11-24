const POLYNESIE_FRANCAISE_DATA = {
  archipels: [
    {
      id: "iles-du-vent",
      title: "Archipel : 1. Îles du Vent",
      mapLabel: "Îles du Vent",
      lat: -17.6797,
      lng: -149.4068,
      zoom: 9,
      intro: "Tahiti, Moorea, Tetiaroa, Maiao et Mehetia — Vallées volcaniques, cascades, baies, atolls, plages, marchés, sites historiques et spots de surf/plongée.",
      islands: [
        {
          id: "tahiti",
          label: "Tahiti",
          lat: -17.6509,
          lng: -149.426,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Vallée de la Papenoo & sentiers intérieurs de Tahiti",
              summary: "Immersion sauvage au cœur d'une grande caldeira volcanique entre rivières, végétation dense et cascades.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Papeete / côte Est",
              price: 85,
              priceLabel: "~85 €/p",
              transport: "🚙 4x4 / Randonnée",
              lat: -17.51667,
              lng: -149.41667
            },
            {
              theme: "rando",
              title: "Ascension du Mont Aorai (Tahiti)",
              summary: "Randonnée exigeante d'altitude offrant des panoramas saisissants sur les sommets de Tahiti et Moorea.",
              duration: "Journée (ou 2 jours avec refuge)",
              departure: "Depuis Pirae / Belvédère",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied / Refuge",
              lat: -17.614313,
              lng: -149.495103
            },
            {
              theme: "rando",
              title: "Vallée de la Fautaua & Cascade (Tahiti)",
              summary: "Marche en forêt tropicale menant à l'une des cascades les plus emblématiques et hautes de Tahiti.",
              duration: "3h à 4h",
              departure: "Depuis Papeete",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🥾 À pied",
              lat: -17.59656,
              lng: -149.52429
            },
            {
              theme: "rando",
              title: "Cascades de Faarumai / Les 3 Cascades (Tiarei, Tahiti)",
              summary: "Accès facile à plusieurs chutes d'eau entourées de fougères arborescentes sur la côte au vent.",
              duration: "1h30 à 2h",
              departure: "Depuis Tiarei / Papeete",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 Voiture / À pied",
              lat: -17.53865,
              lng: -149.40065
            },
            {
              theme: "parc",
              title: "Jardins d'Eau de Vaipahi (Teva I Uta, Tahiti)",
              summary: "Promenade paisible le long de bassins, cascades et sentiers botaniques ombragés au sud de l'île.",
              duration: "1h à 1h30",
              departure: "Depuis Papeete (côte Sud)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Bus",
              lat: -17.76034,
              lng: -149.38964
            },
            {
              theme: "parc",
              title: "Grottes de Mara'a (Pā'ea, Tahiti)",
              summary: "Cavités creusées dans la roche volcanique bordées d'une végétation luxuriante le long de la route côtière.",
              duration: "45 min à 1h",
              departure: "Depuis Papeete (côte Ouest)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Bus",
              lat: -17.74519,
              lng: -149.56643
            },
            {
              theme: "parc",
              title: "Pointe Vénus, phare & plage de sable noir (Māhina, Tahiti)",
              summary: "Site historique lié aux explorations maritimes avec phare, parc ombragé et étendue de sable volcanique.",
              duration: "1h30 à 2h",
              departure: "Depuis Papeete / Māhina",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Bus",
              lat: -17.494289,
              lng: -149.494353
            },
            {
              theme: "parc",
              title: "Parc Bougainville & front de mer de Papeete",
              summary: "Espace vert urbain agréable pour une pause à l'ombre avant de flâner sur le front de mer de la capitale.",
              duration: "1h",
              departure: "Depuis le centre de Papeete",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Bus",
              lat: -17.5417,
              lng: -149.5725
            },
            {
              theme: "point-de-vue",
              title: "Le trou du souffleur d'Arahoho (Hitia'a O Te Ra, Tahiti)",
              summary: "Phénomène naturel où la houle s'engouffre sous la roche et jaillit en gerbe d'eau et d'embruns.",
              duration: "30 min à 45 min",
              departure: "Depuis Papeete / Hitia'a",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture",
              lat: -17.52435,
              lng: -149.39059
            },
            {
              theme: "point-de-vue",
              title: "Belvédère du Tahara'a (vue sur Papeete & Moorea)",
              summary: "Point de vue panoramique dominant la rade de Papeete, le lagon et l'île sœur de Moorea au coucher du soleil.",
              duration: "30 min à 1h",
              departure: "Depuis Arue / Papeete",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture",
              lat: -17.5512,
              lng: -149.5594
            },
            {
              theme: "monument",
              title: "Marae Maha'iatea & site historique (Papara, Tahiti)",
              summary: "Vestige d'un ancien lieu cérémoniel polynésien témoignant de l'organisation traditionnelle de l'île.",
              duration: "45 min à 1h",
              departure: "Depuis Papeete / Papara",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture",
              lat: -17.77732,
              lng: -149.47721
            },
            {
              theme: "monument",
              title: "Cathédrale Notre-Dame de Papeete & temple chinois Kanti",
              summary: "Deux repères culturels et architecturaux contrastés au cœur de Papeete illustrant le métissage local.",
              duration: "1h",
              departure: "Depuis le centre de Papeete",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied",
              lat: -17.5396,
              lng: -149.5682
            },
            {
              theme: "monument",
              title: "Musée de Tahiti et des Îles (Punaauia)",
              summary: "Parcours complet sur l'histoire, la navigation, les arts et les cultures des archipels polynésiens face au lagon.",
              duration: "2h à 2h30",
              departure: "Depuis Papeete / Punaauia",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚗 Voiture / Bus",
              lat: -17.6742,
              lng: -149.5839
            },
            {
              theme: "marche",
              title: "Marché municipal de Papeete (fruits, vanille, monoï, artisanat)",
              summary: "Lieu vivant incontournable pour découvrir les fruits tropicaux, poissons, huiles parfumées et vanneries.",
              duration: "1h30 à 2h",
              departure: "Depuis le centre de Papeete",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚶 À pied / Bus",
              lat: -17.5384,
              lng: -149.5695
            },
            {
              theme: "activite",
              title: "Spot de surf de Teahupo'o (Taiarapu-Ouest, Tahiti)",
              summary: "Lieu mythique du surf mondial réputé pour sa vague puissante sur récif et l'ambiance authentique de la presqu'île.",
              duration: "1h30 à 3h",
              departure: "Depuis Teahupo'o / Papeete",
              price: 0,
              priceLabel: "Gratuit (bord)",
              transport: "🏄 Voiture / Bateau",
              lat: -17.845983,
              lng: -149.264976
            },
            {
              theme: "activite",
              title: "Dîner aux roulottes de la place Vaiete (Papeete)",
              summary: "Ambiance conviviale en soirée autour de food-trucks proposant poisson cru, grillades, plats locaux et crêpes.",
              duration: "1h30 à 2h",
              departure: "Depuis le front de mer de Papeete",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚶 À pied / Voiture",
              lat: -17.5415,
              lng: -149.5755
            }
          ]
        },
        {
          id: "moorea",
          label: "Moorea",
          lat: -17.5388,
          lng: -149.8295,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Crêtes du Mont Rōtui entre Cook et Opunohu (Moorea)",
              summary: "Marche panoramique offrant des vues plongeantes sur les deux célèbres baies découpées de Moorea.",
              duration: "3h à 4h",
              departure: "Depuis Paopao / baies de Moorea",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -17.51139,
              lng: -149.8375
            },
            {
              theme: "rando",
              title: "Mouaputa / Montagne Percée (Moorea)",
              summary: "Randonnée sportive jusqu'à l'ouverture naturelle dans la roche et ses points de vue sur l'île.",
              duration: "2h30 à 3h30",
              departure: "Depuis Afareaitu / Paopao",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -17.52629,
              lng: -149.80328
            },
            {
              theme: "rando",
              title: "Sentier & Col des Trois Pinus (Moorea)",
              summary: "Sentier forestier et de crête alternant sous-bois de pins et échappées sur l'intérieur volcanique.",
              duration: "2h30 à 3h",
              departure: "Depuis Opunohu / Paopao",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -17.53555,
              lng: -149.82501
            },
            {
              theme: "rando",
              title: "Cascade d'Afareaitu (Moorea)",
              summary: "Courte marche accessible dans la vallée d'Afareaitu menant à une chute d'eau rafraîchissante.",
              duration: "1h à 1h30",
              departure: "Depuis Afareaitu (côte Est)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -17.54957,
              lng: -149.79056
            },
            {
              theme: "parc",
              title: "Plage publique de Temae (Maharepa, Moorea)",
              summary: "Belle plage de sable blanc face au lagon et à Tahiti, idéale pour se baigner et se détendre.",
              duration: "2h à Demi-journée",
              departure: "Depuis Maharepa / quai des ferries",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛴️ Ferry / Voiture",
              lat: -17.49819,
              lng: -149.76065
            },
            {
              theme: "parc",
              title: "Jardin botanique & verger tropical de la vallée d'Ōpūnohu",
              summary: "Découverte d'essences locales, plantes médicinales et arbres fruitiers au cœur d'une vallée fertile.",
              duration: "1h à 1h30",
              departure: "Depuis la vallée d'Ōpūnohu",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Vélo",
              lat: -17.5432,
              lng: -149.8415
            },
            {
              theme: "point-de-vue",
              title: "Belvédère d'Opunohu & vues sur les baies (Moorea)",
              summary: "Panorama classique encadré par le Mont Rotui entre les baies de Cook et d'Ōpūnohu.",
              duration: "45 min",
              departure: "Depuis Paopao / côte Nord",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛴️ Ferry / Voiture",
              lat: -17.54038,
              lng: -149.82682
            },
            {
              theme: "point-de-vue",
              title: "Baie d'Ōpūnohu & Baie de Cook (Moorea)",
              summary: "Deux échancrures spectaculaires bordées de pics volcaniques verdoyants et d'eaux calmes.",
              duration: "1h30 à 2h",
              departure: "Depuis Paopao / Hauru",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛴️ Ferry / Voiture",
              lat: -17.503889,
              lng: -149.856111
            },
            {
              theme: "monument",
              title: "Complexe archéologique des marae d'Ōpūnohu (Moorea)",
              summary: "Ensemble de structures en pierre restaurées en forêt illustrant l'histoire ancienne de Moorea.",
              duration: "1h à 1h30",
              departure: "Depuis la vallée d'Ōpūnohu",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Vélo",
              lat: -17.5448,
              lng: -149.8398
            },
            {
              theme: "marche",
              title: "Marché local de Paopao / Maharepa (ananas, confitures, artisanat)",
              summary: "Parfait pour goûter les célèbres ananas de Moorea, confitures artisanales et produits du terroir.",
              duration: "1h",
              departure: "Depuis Paopao ou Maharepa",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚗 Voiture / Scooter",
              lat: -17.4885,
              lng: -149.8732
            },
            {
              theme: "activite",
              title: "Sortie lagon, raies & requins à Moorea",
              summary: "Excursion nautique dans le lagon pour observer raies pastenagues, requins pointes noires et jardins coralliens.",
              duration: "3h à Demi-journée",
              departure: "Depuis les baies / côte Nord",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🚤 Ferry + Bateau",
              lat: -17.503889,
              lng: -149.856111
            },
            {
              theme: "activite",
              title: "Lycée agricole d'Opunohu (glaces & jus maison)",
              summary: "Pause gourmande avec glaces, sorbets et jus préparés à partir des fruits cultivés sur place.",
              duration: "45 min à 1h",
              departure: "Depuis Ōpūnohu / Paopao",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚗 Voiture / Scooter",
              lat: -17.5295,
              lng: -149.8115
            }
          ]
        },
        {
          id: "tetiaroa",
          label: "Tetiaroa",
          lat: -17.0111,
          lng: -149.5583,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Motu aux oiseaux & sanctuaire naturel de Tetiaroa",
              summary: "Atoll préservé abritant d'importantes colonies d'oiseaux marins et un écosystème corallien fragile.",
              duration: "1h30 à 2h",
              departure: "Depuis Tahiti / Moorea (excursion)",
              price: 0,
              priceLabel: "Inclus / Réglementé",
              transport: "🚤 Bateau / Excursion",
              lat: -17.0185,
              lng: -149.564
            },
            {
              theme: "point-de-vue",
              title: "Lagon turquoise & chapelet de motu de Tetiaroa",
              summary: "Eaux limpides entourant une douzaine d'îlots coralliens au nord des Îles du Vent.",
              duration: "1h à 2h",
              departure: "Depuis l'atoll de Tetiaroa",
              price: 0,
              priceLabel: "Inclus / Excursion",
              transport: "🚤 Bateau / Excursion",
              lat: -17.005,
              lng: -149.552
            },
            {
              theme: "activite",
              title: "Excursion lagon, snorkeling & motu de l'atoll de Tetiaroa",
              summary: "Journée d'évasion sur l'atoll entre baignade en eau claire, exploration des motu et déjeuner polynésien.",
              duration: "Journée",
              departure: "Depuis Tahiti ou Moorea",
              price: 100,
              priceLabel: "~100 €/p",
              transport: "🚤 Bateau / Excursion",
              lat: -17.0111,
              lng: -149.5583
            }
          ]
        },
        {
          id: "maiao",
          label: "Maiao",
          lat: -17.6556,
          lng: -150.6292,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Double lagon & côtes préservées de Maiao",
              summary: "Petite île discrète à l'ouest de Moorea remarquable par ses lagons communicants et son atmosphère intacte.",
              duration: "1h30 à 2h",
              departure: "Depuis Moorea ou Tahiti",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau / Avion",
              lat: -17.6556,
              lng: -150.6292
            },
            {
              theme: "monument",
              title: "Sites anciens & traditions insulaires de Maiao",
              summary: "Découverte tranquille du mode de vie insulaire et des repères culturels locaux.",
              duration: "1h à 1h30",
              departure: "Depuis le village de Maiao",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied",
              lat: -17.652,
              lng: -150.625
            },
            {
              theme: "activite",
              title: "Pêche lagonaire & balade sur le motu de Maiao",
              summary: "Sortie calme sur l'eau et moment de détente sur les rives coralliennes de l'île.",
              duration: "2h à 3h",
              departure: "Depuis le rivage de Maiao",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🚤 Pirogue / Bateau",
              lat: -17.658,
              lng: -150.632
            }
          ]
        },
        {
          id: "mehetia",
          label: "Mehetia",
          lat: -17.875,
          lng: -148.0667,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Cône volcanique isolé de Mehetia au large des Îles du Vent",
              summary: "Volcan jeune et très isolé à l'est de Tahiti, visible surtout lors de navigations hauturières.",
              duration: "1h (observation)",
              departure: "Depuis la côte Est de Tahiti",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau",
              lat: -17.875,
              lng: -148.0667
            },
            {
              theme: "rando",
              title: "Approche des flancs volcaniques & cratère de Mehetia",
              summary: "Découverte très sauvage soumise aux conditions de mer et aux autorisations locales.",
              duration: "2h à 3h",
              departure: "Depuis le mouillage de Mehetia",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau / À pied",
              lat: -17.873,
              lng: -148.065
            },
            {
              theme: "activite",
              title: "Navigation hauturière & observation marine autour de Mehetia",
              summary: "Traversée au large idéale pour l'observation des oiseaux pélagiques et de la faune du Pacifique.",
              duration: "Journée / Traversée",
              departure: "Depuis Tahiti",
              price: 95,
              priceLabel: "~95 €/p",
              transport: "⛵ Voilier / Bateau",
              lat: -17.878,
              lng: -148.07
            }
          ]
        }
      ]
    },
    {
      id: "iles-sous-le-vent",
      title: "Archipel : 2. Îles Sous-le-Vent",
      mapLabel: "Îles Sous-le-Vent",
      lat: -16.5004,
      lng: -151.7415,
      zoom: 9,
      intro: "Bora Bora, Raiatea, Taha'a, Huahine, Maupiti, Tupai, Maupihaa, Manuae et Motu One — Lagons émeraude, motu, navigation et marae sacrés.",
      islands: [
        {
          id: "bora-bora",
          label: "Bora Bora",
          lat: -16.5004,
          lng: -151.7415,
          zoom: 12,
          activities: [
            {
              theme: "rando",
              title: "Sentier des canons de la Seconde Guerre mondiale & crêtes de Bora Bora",
              summary: "Parcours sur les hauteurs mêlant vestiges militaires et vues dégagées sur le lagon.",
              duration: "2h30 à 3h30",
              departure: "Depuis Vaitape / hauteurs de Bora Bora",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🥾 4x4 / Randonnée",
              lat: -16.512,
              lng: -151.735
            },
            {
              theme: "parc",
              title: "Plage de Matira & bord de lagon de Bora Bora",
              summary: "L'une des plages les plus connues de l'île, propice à la baignade et aux couchers de soleil.",
              duration: "2h à Demi-journée",
              departure: "Depuis Matira / Vaitape",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / Voiture",
              lat: -16.535,
              lng: -151.742
            },
            {
              theme: "point-de-vue",
              title: "Vue sur le Mont Otemanu et le lagon émeraude de Bora Bora",
              summary: "Dégradés de bleu et de turquoise face au pic emblématique de Bora Bora.",
              duration: "1h à 2h",
              departure: "Depuis Vaitape ou le lagon",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Voiture",
              lat: -16.495,
              lng: -151.745
            },
            {
              theme: "monument",
              title: "Marae Fare Opu & vestiges côtiers de Bora Bora",
              summary: "Site ancien orné de gravures rupestres évoquant la mémoire traditionnelle de l'île.",
              duration: "45 min",
              departure: "Depuis Vaitape / côte Ouest",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Vélo",
              lat: -16.485,
              lng: -151.728
            },
            {
              theme: "marche",
              title: "Étalages locaux & artisanat de Vaitape (Bora Bora)",
              summary: "Flânerie dans le bourg principal pour découvrir paréos, sculptures, perles et saveurs locales.",
              duration: "1h à 1h30",
              departure: "Depuis le quai de Vaitape",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚶 À pied / Vélo",
              lat: -16.504,
              lng: -151.751
            },
            {
              theme: "activite",
              title: "Lagon, raies manta & jardin de corail de Bora Bora",
              summary: "Sortie phare sur le lagon pour nager près des raies, observer le corail et profiter d'un motu.",
              duration: "Demi-journée",
              departure: "Depuis Vaitape / pontons du lagon",
              price: 90,
              priceLabel: "~90 €/p",
              transport: "🚤 Bateau / Pirogue",
              lat: -16.5004,
              lng: -151.7415
            }
          ]
        },
        {
          id: "raiatea",
          label: "Raiatea",
          lat: -16.8244,
          lng: -151.4419,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Randonnée du Mont Tapioi au-dessus d'Uturoa (Raiatea)",
              summary: "Montée panoramique dominant Uturoa, le lagon et l'île voisine de Taha'a.",
              duration: "1h30 à 2h",
              departure: "Depuis Uturoa",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -16.735,
              lng: -151.445
            },
            {
              theme: "parc",
              title: "Jardin botanique & rives de la rivière Faaroa (Raiatea)",
              summary: "Ambiance verdoyante et paisible entre flore polynésienne et berges fluviales.",
              duration: "1h à 1h30",
              departure: "Depuis Uturoa / côte Est",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture",
              lat: -16.835,
              lng: -151.425
            },
            {
              theme: "point-de-vue",
              title: "Remontée de la rivière Faaroa — seule rivière navigable de Polynésie",
              summary: "Glissade paisible sous les frondaisons et bambous au fil d'une rivière tropicale unique.",
              duration: "1h30 à 2h",
              departure: "Depuis l'embouchure de la Faaroa",
              price: 40,
              priceLabel: "~40 €/p",
              transport: "🛶 Kayak / Bateau",
              lat: -16.84,
              lng: -151.42
            },
            {
              theme: "monument",
              title: "Marae royal de Taputapuatea (UNESCO, Raiatea)",
              summary: "Haut lieu spirituel et historique du triangle polynésien, inscrit au patrimoine mondial de l'UNESCO.",
              duration: "1h30 à 2h",
              departure: "Depuis Opoa / Uturoa",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture",
              lat: -16.8315,
              lng: -151.3585
            },
            {
              theme: "marche",
              title: "Marché d'Uturoa (fruits locaux, poissons, artisanat — Raiatea)",
              summary: "Marché animé au bord de l'eau pour s'approvisionner en produits frais et créations artisanales.",
              duration: "1h à 1h30",
              departure: "Depuis le centre d'Uturoa",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚶 À pied / Voiture",
              lat: -16.7265,
              lng: -151.441
            },
            {
              theme: "activite",
              title: "Navigation sur le lagon partagé Raiatea–Taha'a & corail",
              summary: "Croisière ou sortie à la journée entre lagon abrité, motu et spots de snorkeling.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Uturoa / marinas de Raiatea",
              price: 75,
              priceLabel: "~75 €/p",
              transport: "⛵ Voilier / Bateau",
              lat: -16.78,
              lng: -151.46
            }
          ]
        },
        {
          id: "tahaa",
          label: "Taha'a",
          lat: -16.6236,
          lng: -151.5036,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Crêtes & sentiers panoramiques de l'île Vanille (Taha'a)",
              summary: "Balades sur les reliefs de Taha'a offrant de belles échappées sur les baies et le lagon.",
              duration: "2h à 3h",
              departure: "Depuis Patio / baies de Taha'a",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied / 4x4",
              lat: -16.615,
              lng: -151.515
            },
            {
              theme: "point-de-vue",
              title: "Baie d'Haamene & panorama sur Bora Bora depuis Taha'a",
              summary: "Découpe côtière encadrée de collines verdoyantes et points de vue tournés vers Bora Bora.",
              duration: "1h à 1h30",
              departure: "Depuis Haamene ou le tour de l'île",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Bateau",
              lat: -16.588,
              lng: -151.505
            },
            {
              theme: "monument",
              title: "Marae & sites traditionnels de Taha'a",
              summary: "Découverte discrète du patrimoine ancien de l'île au fil des chemins côtiers.",
              duration: "1h",
              departure: "Depuis les villages de Taha'a",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture",
              lat: -16.635,
              lng: -151.48
            },
            {
              theme: "marche",
              title: "Vanilleraies, fermes perlières & producteurs locaux de Taha'a",
              summary: "Rencontre avec les cultivateurs de vanille et perliculteurs qui font la réputation de Taha'a.",
              duration: "2h à 3h",
              departure: "Depuis Patio / le tour de l'île",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚗 Voiture / Bateau",
              lat: -16.61,
              lng: -151.535
            },
            {
              theme: "activite",
              title: "Distilleries de rhum & dérivant corallien à Taha'a",
              summary: "Dégustation locale suivie d'une baignade rafraîchissante portée par le courant dans le lagon.",
              duration: "2h à 3h",
              departure: "Depuis Taha'a ou Raiatea",
              price: 40,
              priceLabel: "~40 €/p",
              transport: "⛵ Bateau",
              lat: -16.6236,
              lng: -151.5036
            }
          ]
        },
        {
          id: "huahine",
          label: "Huahine",
          lat: -16.7467,
          lng: -151.005,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Tour de Huahine, baie de Maroe & plages (Huahine Nui & Huahine Iti)",
              summary: "Découverte des deux îles reliées par un pont entre baies profondes, villages et petites plages.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Fare",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🛵 Scooter / Vélo",
              lat: -16.7467,
              lng: -151.005
            },
            {
              theme: "parc",
              title: "Anguilles sacrées aux yeux bleus de Faie & plages d'Avea",
              summary: "Observation célèbre des anguilles de rivière à Faie puis détente sur le sable clair d'Avea.",
              duration: "1h30 à 2h",
              departure: "Depuis Fare ou le Sud de l'île",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Scooter",
              lat: -16.752,
              lng: -151.018
            },
            {
              theme: "point-de-vue",
              title: "Belvédère sur la baie de Maroe & le pont de Maeva (Huahine)",
              summary: "Vue étendue sur la baie de Maroe et le passage reliant Huahine Nui à Huahine Iti.",
              duration: "45 min à 1h",
              departure: "Depuis Fare / côte Est",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Scooter",
              lat: -16.732,
              lng: -150.992
            },
            {
              theme: "monument",
              title: "Complexe des marae & pièges à poissons de Maeva (Huahine)",
              summary: "Ensemble archéologique majeur au bord du lac Fauna Nui et anciens pièges à poissons en pierre.",
              duration: "1h30 à 2h",
              departure: "Depuis Maeva / Fare",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Vélo",
              lat: -16.712,
              lng: -151.012
            },
            {
              theme: "marche",
              title: "Petits marchés & étals de fruits / artisanat de Fare (Huahine)",
              summary: "Ambiance décontractée dans le village principal pour goûter les fruits et découvrir l'artisanat.",
              duration: "1h",
              departure: "Depuis le centre de Fare",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚶 À pied / Vélo",
              lat: -16.723,
              lng: -151.028
            },
            {
              theme: "activite",
              title: "Sortie lagon, ferme perlière & motu de Huahine",
              summary: "Exploration des eaux claires de Huahine avec visite perlière et pause baignade sur motu.",
              duration: "Demi-journée",
              departure: "Depuis Fare / côte Ouest",
              price: 65,
              priceLabel: "~65 €/p",
              transport: "🚤 Bateau / Pirogue",
              lat: -16.76,
              lng: -151.03
            }
          ]
        },
        {
          id: "maupiti",
          label: "Maupiti",
          lat: -16.4436,
          lng: -152.2564,
          zoom: 12,
          activities: [
            {
              theme: "rando",
              title: "Ascension du Mont Teurafaatiu & crêtes de Maupiti",
              summary: "Grimpée soutenue récompensée par une vue circulaire sur le lagon fermé et les motu de Maupiti.",
              duration: "2h à 3h",
              departure: "Depuis le village de Maupiti",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -16.448,
              lng: -152.255
            },
            {
              theme: "parc",
              title: "Plage de Tereia & motu Tiapaa (Maupiti)",
              summary: "Sable blanc et eau translucide dans un cadre intime à l'écart des foules.",
              duration: "2h à Demi-journée",
              departure: "Depuis le village / bord de lagon",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / Pirogue",
              lat: -16.438,
              lng: -152.248
            },
            {
              theme: "point-de-vue",
              title: "Panorama sur le lagon fermé et les motu de Maupiti",
              summary: "Contraste saisissant entre le relief volcanique central et la couronne de motu coralliens.",
              duration: "1h à 1h30",
              departure: "Depuis les hauteurs ou le lagon",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied / Bateau",
              lat: -16.445,
              lng: -152.26
            },
            {
              theme: "monument",
              title: "Pétroglyphes, marae & sites anciens de Maupiti",
              summary: "Témoignages discrets du passé polynésien disséminés autour de l'île principale.",
              duration: "1h à 1h30",
              departure: "Depuis le tour de l'île",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -16.441,
              lng: -152.252
            },
            {
              theme: "activite",
              title: "Raies manta, corail & tour des motu à Maupiti",
              summary: "Sortie nautique conviviale pour observer les raies manta et longer les motu de sable blanc.",
              duration: "Demi-journée",
              departure: "Depuis le quai de Maupiti",
              price: 60,
              priceLabel: "~60 €/p",
              transport: "🚤 Bateau / Pirogue",
              lat: -16.4436,
              lng: -152.2564
            }
          ]
        },
        {
          id: "tupai",
          label: "Tupai",
          lat: -16.2461,
          lng: -151.8167,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Atoll en forme de cœur de Tupai vu du ciel ou du lagon",
              summary: "Silhouette emblématique en forme de cœur entourée d'un lagon paisible au nord de Bora Bora.",
              duration: "1h à 1h30",
              departure: "Depuis Bora Bora",
              price: 0,
              priceLabel: "Gratuit (vue)",
              transport: "🚤 Bateau / Avion",
              lat: -16.2461,
              lng: -151.8167
            },
            {
              theme: "parc",
              title: "Cocoteraies & plages sauvages de l'atoll de Tupai",
              summary: "Cadre naturel et peu fréquenté bordé de cocotiers et de plages tranquilles.",
              duration: "1h30 à 2h",
              departure: "Depuis le lagon de Tupai",
              price: 0,
              priceLabel: "Inclus / Excursion",
              transport: "🚤 Bateau",
              lat: -16.25,
              lng: -151.82
            },
            {
              theme: "activite",
              title: "Excursion journée à l'atoll de Tupai depuis Bora Bora",
              summary: "Traversée à la journée combinant navigation, snorkeling et détente sur l'atoll.",
              duration: "Journée",
              departure: "Depuis Bora Bora",
              price: 95,
              priceLabel: "~95 €/p",
              transport: "🚤 Bateau",
              lat: -16.244,
              lng: -151.812
            }
          ]
        },
        {
          id: "maupihaa",
          label: "Maupihaa (Mopelia)",
          lat: -16.8167,
          lng: -153.95,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Lagon isolé & motu de l'atoll de Maupihaa (Mopelia)",
              summary: "Atoll reculé à l'ouest des Îles Sous-le-Vent offrant des paysages marins très sauvages.",
              duration: "1h30 à 2h",
              departure: "Depuis les Îles Sous-le-Vent (navigation)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Voilier / Avion",
              lat: -16.8167,
              lng: -153.95
            },
            {
              theme: "parc",
              title: "Plages préservées & faune marine de Maupihaa",
              summary: "Rivages calmes et eaux riches en faune marine loin des circuits habituels.",
              duration: "2h à 3h",
              departure: "Depuis le mouillage de Maupihaa",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau / À pied",
              lat: -16.82,
              lng: -153.945
            },
            {
              theme: "activite",
              title: "Snorkeling & navigation autour de l'atoll de Maupihaa",
              summary: "Exploration aquatique et navigation dans un environnement océanique isolé.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Maupihaa",
              price: 80,
              priceLabel: "~80 €/p",
              transport: "⛵ Voilier / Bateau",
              lat: -16.813,
              lng: -153.955
            }
          ]
        },
        {
          id: "manuae",
          label: "Manuae (Scilly)",
          lat: -16.5167,
          lng: -154.6833,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Double atoll & passes de Manuae (Scilly)",
              summary: "Atoll composé de deux lagons reliés, très isolé à l'extrémité ouest de l'archipel.",
              duration: "1h30 à 2h",
              departure: "Depuis Maupihaa / Îles Sous-le-Vent",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Voilier / Avion",
              lat: -16.5167,
              lng: -154.6833
            },
            {
              theme: "parc",
              title: "Motu coralliens & tortues marines de Manuae",
              summary: "Site naturel recherché pour l'observation des tortues marines et la tranquillité des motu.",
              duration: "2h",
              departure: "Depuis le lagon de Manuae",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau",
              lat: -16.515,
              lng: -154.68
            },
            {
              theme: "activite",
              title: "Exploration lagonaire & plongée à Manuae",
              summary: "Sortie dédiée à la découverte des fonds coralliens et à la navigation en atoll isolé.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Manuae",
              price: 85,
              priceLabel: "~85 €/p",
              transport: "⛵ Voilier / Bateau",
              lat: -16.519,
              lng: -154.686
            }
          ]
        },
        {
          id: "motu-one",
          label: "Motu One",
          lat: -15.8,
          lng: -154.5333,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Atoll septentrional de Motu One (Bellinghausen)",
              summary: "Atoll le plus septentrional des Îles Sous-le-Vent, accessible surtout en navigation hauturière.",
              duration: "1h (passage / mouillage)",
              departure: "Depuis les Îles Sous-le-Vent",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Voilier",
              lat: -15.8,
              lng: -154.5333
            },
            {
              theme: "parc",
              title: "Îlots coralliens & oiseaux marins de Motu One",
              summary: "Petits bancs de sable et végétation basse abritant une vie marine et aviaire sauvage.",
              duration: "1h30 à 2h",
              departure: "Depuis l'atoll de Motu One",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau",
              lat: -15.802,
              lng: -154.53
            }
          ]
        }
      ]
    },
    {
      id: "tuamotu",
      title: "Archipel : 3. Tuamotu",
      mapLabel: "Archipel des Tuamotu",
      lat: -15.1469,
      lng: -147.6536,
      zoom: 7,
      intro: "Atolls coralliens, passes dérivantes, perliculture et plongée — Rangiroa, Fakarava, Tikehau, Manihi et l'ensemble des atolls.",
      islands: [
        {
          id: "rangiroa",
          label: "Rangiroa",
          lat: -14.9833,
          lng: -147.6333,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Les Sables Roses & motu du lagon de Rangiroa",
              summary: "Bancs de sable aux reflets rosés au milieu d'une mer intérieure immense et paisible.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Avatoru ou Tiputa",
              price: 75,
              priceLabel: "~75 €/p",
              transport: "🚤 Bateau",
              lat: -15.05,
              lng: -147.72
            },
            {
              theme: "point-de-vue",
              title: "Courant et dauphins à la passe d'Avatoru / Tiputa (Rangiroa)",
              summary: "Spectacle fréquent des dauphins jouant dans les vagues et courants de la passe.",
              duration: "1h à 1h30",
              departure: "Depuis Avatoru ou Tiputa",
              price: 0,
              priceLabel: "Gratuit (bord)",
              transport: "🚶 À pied / Bateau",
              lat: -14.955,
              lng: -147.715
            },
            {
              theme: "marche",
              title: "Fermes perlières & vignobles coralliens de Rangiroa",
              summary: "Découverte de la culture de la perle noire et des vignes singulières poussant sur sol corallien.",
              duration: "1h30 à 2h",
              departure: "Depuis Avatoru / Tiputa",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚲 Vélo / Voiture",
              lat: -14.96,
              lng: -147.69
            },
            {
              theme: "activite",
              title: "Passe de Tiputa & Lagon Bleu (Rangiroa)",
              summary: "Plongée ou snorkeling inoubliable dans la passe puis excursion vers le célèbre Lagon Bleu.",
              duration: "Journée",
              departure: "Depuis Tiputa / Avatoru",
              price: 95,
              priceLabel: "~95 €/p",
              transport: "🤿 Bateau / Plongée",
              lat: -14.9833,
              lng: -147.6333
            }
          ]
        },
        {
          id: "fakarava",
          label: "Fakarava",
          lat: -16.3,
          lng: -145.6167,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Balade côtière le long du lagon & des motu de Fakarava",
              summary: "Promenade tranquille entre cocoteraies, petites criques et eau turquoise de l'atoll.",
              duration: "1h30 à 2h30",
              departure: "Depuis Rotoava",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -16.06,
              lng: -145.62
            },
            {
              theme: "parc",
              title: "Réserve de biosphère de Fakarava & plage rose (Sud)",
              summary: "Environnement classé UNESCO avec eaux très poissonneuses et plages au sable teinté de rose.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Rotoava ou Tetamanu (Sud)",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚲 Vélo / Bateau",
              lat: -16.05,
              lng: -145.6167
            },
            {
              theme: "monument",
              title: "Ancien phare & église en corail de Rotoava (Fakarava)",
              summary: "Patrimoine local construit avec les matériaux de l'atoll au cœur d'une ambiance paisible.",
              duration: "45 min à 1h",
              departure: "Depuis le centre de Rotoava",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -16.055,
              lng: -145.622
            },
            {
              theme: "activite",
              title: "Plongée / snorkeling dans la passe de Garuae ou Tumakohua",
              summary: "Exploration sous-marine réputée pour ses bancs de poissons, requins et courants riches.",
              duration: "Demi-journée",
              departure: "Depuis Rotoava (Nord) ou Tetamanu (Sud)",
              price: 90,
              priceLabel: "~90 €/p",
              transport: "🤿 Bateau / Plongée",
              lat: -16.07,
              lng: -145.63
            }
          ]
        },
        {
          id: "tikehau",
          label: "Tikehau",
          lat: -15.0167,
          lng: -148.1667,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Île aux Oiseaux & plages de sable rose de Tikehau",
              summary: "Réserve d'oiseaux marins et plages claires bordant un lagon réputé pour sa richesse aquatique.",
              duration: "Demi-journée",
              departure: "Depuis Tuherahera (Tikehau)",
              price: 0,
              priceLabel: "Gratuit (bord)",
              transport: "🚤 Bateau",
              lat: -15.01,
              lng: -148.175
            },
            {
              theme: "point-de-vue",
              title: "Coucher de soleil sur le lagon poissonneux de Tikehau",
              summary: "Reflets dorés et roses sur l'eau calme en fin de journée dans une atmosphère très sereine.",
              duration: "1h",
              departure: "Depuis Tuherahera / bord du lagon",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Bateau",
              lat: -15.0167,
              lng: -148.1667
            },
            {
              theme: "activite",
              title: "Snorkeling raies manta, requins & motu à Tikehau",
              summary: "Sortie bateau conviviale alliant observation marine, baignade et détente sur un motu.",
              duration: "Demi-journée",
              departure: "Depuis Tuherahera",
              price: 75,
              priceLabel: "~75 €/p",
              transport: "🚤 Bateau",
              lat: -15.02,
              lng: -148.16
            }
          ]
        },
        {
          id: "manihi",
          label: "Manihi",
          lat: -14.4,
          lng: -145.95,
          zoom: 11,
          activities: [
            {
              theme: "marche",
              title: "Visite des fermes perlières historiques de Manihi",
              summary: "Découverte des étapes de la perliculture sur l'atoll pionnier de la perle de culture en Polynésie.",
              duration: "1h30 à 2h",
              departure: "Depuis le village de Manihi",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚲 Vélo / Bateau",
              lat: -14.4,
              lng: -145.95
            },
            {
              theme: "parc",
              title: "Motu & eaux cristallines du lagon de Manihi",
              summary: "Baignade et balade tranquille le long des îlots coralliens et de l'eau claire.",
              duration: "2h à Demi-journée",
              departure: "Depuis le lagon de Manihi",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau",
              lat: -14.405,
              lng: -145.945
            },
            {
              theme: "activite",
              title: "Plongée dérivante dans la passe de Tairapa (Manihi)",
              summary: "Dérive sous-marine animée dans la passe de l'atoll avec une belle diversité de faune.",
              duration: "Demi-journée",
              departure: "Depuis Manihi",
              price: 85,
              priceLabel: "~85 €/p",
              transport: "🤿 Bateau / Plongée",
              lat: -14.395,
              lng: -145.96
            }
          ]
        },
        {
          id: "makemo",
          label: "Makemo",
          lat: -16.5833,
          lng: -143.7,
          zoom: 10,
          activities: [
            {
              theme: "point-de-vue",
              title: "Grand lagon & motu de l'atoll de Makemo",
              summary: "Vastité et calme d'un grand atoll central des Tuamotu bordé de cocoteraies.",
              duration: "1h30 à 2h",
              departure: "Depuis Pouheva (Makemo)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Vélo",
              lat: -16.5833,
              lng: -143.7
            },
            {
              theme: "marche",
              title: "Artisanat tressé en pandanus & perliculture de Makemo",
              summary: "Aperçu des savoir-faire locaux entre tressage traditionnel et fermes perlières.",
              duration: "1h à 1h30",
              departure: "Depuis Pouheva",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚲 Vélo / À pied",
              lat: -16.58,
              lng: -143.695
            },
            {
              theme: "activite",
              title: "Excursion motu & baignade dans le lagon de Makemo",
              summary: "Sortie détente sur l'eau pour profiter des eaux calmes et des motu de l'atoll.",
              duration: "Demi-journée",
              departure: "Depuis Pouheva",
              price: 55,
              priceLabel: "~55 €/p",
              transport: "🚤 Bateau",
              lat: -16.586,
              lng: -143.705
            }
          ]
        },
        {
          id: "anaa",
          label: "Anaa",
          lat: -17.4,
          lng: -145.5,
          zoom: 11,
          activities: [
            {
              theme: "monument",
              title: "Histoire et sites anciens de l'atoll d'Anaa",
              summary: "Atoll chargé d'histoire dans les Tuamotu avec un rythme de vie authentique.",
              duration: "1h30 à 2h",
              departure: "Depuis Tukuhora (Anaa)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -17.4,
              lng: -145.5
            },
            {
              theme: "point-de-vue",
              title: "Cocoteraies & rivages d'Anaa",
              summary: "Balade à vélo à l'ombre des cocotiers le long des rives de l'atoll.",
              duration: "1h à 1h30",
              departure: "Depuis Tukuhora",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo",
              lat: -17.395,
              lng: -145.495
            },
            {
              theme: "activite",
              title: "Sortie lagon & pêche traditionnelle à Anaa",
              summary: "Immersion dans les pratiques maritimes locales sur le lagon.",
              duration: "2h à 3h",
              departure: "Depuis le rivage d'Anaa",
              price: 50,
              priceLabel: "~50 €/p",
              transport: "🚤 Bateau / Pirogue",
              lat: -17.405,
              lng: -145.505
            }
          ]
        },
        {
          id: "kauehi",
          label: "Kauehi",
          lat: -15.8833,
          lng: -145.15,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Lagon calme & motu de Kauehi",
              summary: "Atoll paisible offrant des eaux abritées et un cadre reposant.",
              duration: "1h à 2h",
              departure: "Depuis Tearavero (Kauehi)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Vélo",
              lat: -15.8833,
              lng: -145.15
            },
            {
              theme: "activite",
              title: "Snorkeling & pique-nique sur un motu de Kauehi",
              summary: "Moment simple et authentique entre baignade et pause sur le sable.",
              duration: "Demi-journée",
              departure: "Depuis Tearavero",
              price: 55,
              priceLabel: "~55 €/p",
              transport: "🚤 Bateau",
              lat: -15.886,
              lng: -145.145
            }
          ]
        },
        {
          id: "arutua",
          label: "Arutua",
          lat: -15.3167,
          lng: -146.7333,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Motu & lagons d'Arutua",
              summary: "Atoll discret aux eaux claires et aux motu tranquilles au nord-ouest des Tuamotu.",
              duration: "1h30 à 2h",
              departure: "Depuis Rautini (Arutua)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Vélo",
              lat: -15.3167,
              lng: -146.7333
            },
            {
              theme: "activite",
              title: "Découverte lagonaire & observation marine à Arutua",
              summary: "Balade aquatique et navigation douce dans le lagon.",
              duration: "2h à 3h",
              departure: "Depuis Rautini",
              price: 55,
              priceLabel: "~55 €/p",
              transport: "🚤 Bateau",
              lat: -15.32,
              lng: -146.73
            }
          ]
        },
        {
          id: "kaukura",
          label: "Kaukura",
          lat: -15.75,
          lng: -146.6833,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Lagon & motu sauvages de Kaukura",
              summary: "Atoll allongé et préservé réputé pour la clarté de son lagon et ses motu calmes.",
              duration: "1h30 à 2h",
              departure: "Depuis Raitahiti (Kaukura)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Vélo",
              lat: -15.75,
              lng: -146.6833
            },
            {
              theme: "activite",
              title: "Snorkeling & balade sur le motu de Kaukura",
              summary: "Sortie bateau idéale pour explorer les fonds coralliens et profiter d'un motu.",
              duration: "Demi-journée",
              departure: "Depuis Raitahiti",
              price: 60,
              priceLabel: "~60 €/p",
              transport: "🚤 Bateau",
              lat: -15.753,
              lng: -146.68
            }
          ]
        },
        {
          id: "mataiva",
          label: "Mataiva",
          lat: -14.8833,
          lng: -148.6667,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Lagon en damier & motu de Mataiva",
              summary: "Curiosité géographique d'un lagon compartimenté par de nombreux petits récifs et bassins.",
              duration: "1h30 à 2h",
              departure: "Depuis Pahua (Mataiva)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Vélo",
              lat: -14.8833,
              lng: -148.6667
            },
            {
              theme: "parc",
              title: "Réservoirs aquatiques & nature préservée de Mataiva",
              summary: "Balade nature au cœur d'un atoll très calme à l'ouest de Rangiroa.",
              duration: "1h30",
              departure: "Depuis Pahua",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -14.886,
              lng: -148.663
            },
            {
              theme: "activite",
              title: "Excursion lagon & pique-nique sur un motu de Mataiva",
              summary: "Journée ou demi-journée sur l'eau pour découvrir les motu et les eaux calmes.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Pahua",
              price: 65,
              priceLabel: "~65 €/p",
              transport: "🚤 Bateau",
              lat: -14.88,
              lng: -148.67
            }
          ]
        },
        {
          id: "takapoto",
          label: "Takapoto",
          lat: -14.6167,
          lng: -145.2,
          zoom: 11,
          activities: [
            {
              theme: "marche",
              title: "Perliculture & artisanat local de Takapoto",
              summary: "Découverte des fermes perlières et des créations artisanales sur un atoll sans passe.",
              duration: "1h30",
              departure: "Depuis Fakatopatere (Takapoto)",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚲 Vélo / Voiture",
              lat: -14.6167,
              lng: -145.2
            },
            {
              theme: "point-de-vue",
              title: "Lagon étroit & côtes coralliennes de Takapoto",
              summary: "Balade à vélo le long de l'atoll entre lagon intérieur et récifs océaniques.",
              duration: "1h à 1h30",
              departure: "Depuis Fakatopatere",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo",
              lat: -14.62,
              lng: -145.195
            }
          ]
        },
        {
          id: "takaroa",
          label: "Takaroa",
          lat: -14.45,
          lng: -144.9667,
          zoom: 11,
          activities: [
            {
              theme: "marche",
              title: "Fermes perlières & savoir-faire de Takaroa",
              summary: "Visite liée à l'élevage d'huîtres perlières dans le lagon de Takaroa.",
              duration: "1h30",
              departure: "Depuis Teavaroa (Takaroa)",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚲 Vélo / Voiture",
              lat: -14.45,
              lng: -144.9667
            },
            {
              theme: "point-de-vue",
              title: "Lagon & motu de l'atoll de Takaroa",
              summary: "Paysages coralliens paisibles au nord des Tuamotu.",
              duration: "1h à 1h30",
              departure: "Depuis Teavaroa",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Vélo",
              lat: -14.448,
              lng: -144.97
            }
          ]
        },
        {
          id: "hikueru",
          label: "Hikueru",
          lat: -17.5833,
          lng: -142.6167,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Rivages coralliens & motu de l'atoll de Hikueru",
              summary: "Atoll isolé des Tuamotu centrales offrant un cadre sobre et maritime.",
              duration: "1h à 1h30",
              departure: "Depuis Tupapati (Hikueru)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Vélo",
              lat: -17.5833,
              lng: -142.6167
            },
            {
              theme: "activite",
              title: "Balade lagonaire & découverte locale à Hikueru",
              summary: "Sortie simple pour approcher le lagon et le quotidien insulaire.",
              duration: "2h",
              departure: "Depuis le rivage de Hikueru",
              price: 50,
              priceLabel: "~50 €/p",
              transport: "🚤 Bateau",
              lat: -17.585,
              lng: -142.615
            }
          ]
        },
        {
          id: "hao",
          label: "Hao",
          lat: -18.2333,
          lng: -140.8833,
          zoom: 10,
          activities: [
            {
              theme: "point-de-vue",
              title: "Vaste lagon & passe de Kaki sur l'atoll de Hao",
              summary: "L'un des plus grands lagons des Tuamotu, marqué par une passe large et des eaux profondes.",
              duration: "1h30 à 2h",
              departure: "Depuis Otepa (Hao)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Bateau",
              lat: -18.2333,
              lng: -140.8833
            },
            {
              theme: "activite",
              title: "Sortie bateau sur le lagon de Hao",
              summary: "Navigation à travers les étendues du lagon et découverte des motu environnants.",
              duration: "Demi-journée",
              departure: "Depuis Otepa",
              price: 70,
              priceLabel: "~70 €/p",
              transport: "🚤 Bateau",
              lat: -18.22,
              lng: -140.9
            }
          ]
        },
        {
          id: "reao",
          label: "Reao",
          lat: -18.5167,
          lng: -136.3667,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Atoll isolé de l'Est des Tuamotu à Reao",
              summary: "Étape très éloignée à l'est des Tuamotu, réputée pour son isolement et son authenticité.",
              duration: "1h30",
              departure: "Depuis Tapuarava (Reao)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Avion",
              lat: -18.5167,
              lng: -136.3667
            },
            {
              theme: "parc",
              title: "Plages & cocoteraies de Reao",
              summary: "Promenade tranquille entre sable blanc, cocotiers et brise océanique.",
              duration: "1h à 2h",
              departure: "Depuis le village de Reao",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Vélo",
              lat: -18.52,
              lng: -136.365
            }
          ]
        },
        {
          id: "puka-puka",
          label: "Puka Puka",
          lat: -14.8167,
          lng: -138.8,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Atoll reculé de Puka Puka au Nord-Est des Tuamotu",
              summary: "L'un des atolls les plus isolés de l'archipel, offrant un dépaysement total.",
              duration: "1h30",
              departure: "Depuis le village de Puka Puka",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Avion",
              lat: -14.8167,
              lng: -138.8
            },
            {
              theme: "parc",
              title: "Motu & côtes sauvages de Puka Puka",
              summary: "Marche paisible le long d'un littoral préservé et peu fréquenté.",
              duration: "1h30 à 2h",
              departure: "Depuis le rivage de Puka Puka",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied",
              lat: -14.815,
              lng: -138.798
            }
          ]
        },
        {
          id: "napuka",
          label: "Napuka",
          lat: -14.1667,
          lng: -141.2333,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Lagon & motu de l'atoll de Napuka",
              summary: "Atoll du nord-est des Tuamotu au cadre naturel et à l'atmosphère très calme.",
              duration: "1h30",
              departure: "Depuis Tepukamaruia (Napuka)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Avion",
              lat: -14.1667,
              lng: -141.2333
            },
            {
              theme: "activite",
              title: "Découverte du lagon & traditions de Napuka",
              summary: "Approche des eaux lagunaires et de la vie locale sur l'atoll.",
              duration: "2h",
              departure: "Depuis Napuka",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🚤 Bateau / Pirogue",
              lat: -14.168,
              lng: -141.23
            }
          ]
        },
        {
          id: "fangatau",
          label: "Fangatau",
          lat: -15.8167,
          lng: -140.8667,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Rivages coralliens & motu de Fangatau",
              summary: "Petit atoll discret entouré d'un lagon limpide et de motu bordés de cocotiers.",
              duration: "1h à 1h30",
              departure: "Depuis Teana (Fangatau)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Avion",
              lat: -15.8167,
              lng: -140.8667
            },
            {
              theme: "parc",
              title: "Cocoteraies & plages tranquilles de Fangatau",
              summary: "Balade calme à pied ou à vélo le long des chemins de l'atoll.",
              duration: "1h à 1h30",
              departure: "Depuis le village de Fangatau",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Vélo",
              lat: -15.818,
              lng: -140.865
            }
          ]
        },
        {
          id: "fakahina",
          label: "Fakahina",
          lat: -15.9833,
          lng: -140.1333,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Atoll & lagon préservé de Fakahina",
              summary: "Atoll à l'écart des routes fréquentées offrant un environnement naturel intact.",
              duration: "1h30",
              departure: "Depuis le village de Fakahina",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / Avion",
              lat: -15.9833,
              lng: -140.1333
            },
            {
              theme: "activite",
              title: "Balade lagonaire & découverte de Fakahina",
              summary: "Sortie tranquille sur le lagon pour profiter du calme absolu de l'atoll.",
              duration: "2h",
              departure: "Depuis Fakahina",
              price: 50,
              priceLabel: "~50 €/p",
              transport: "🚤 Bateau",
              lat: -15.985,
              lng: -140.13
            }
          ]
        },
        {
          id: "tikei",
          label: "Tikei",
          lat: -14.95,
          lng: -144.55,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Petit atoll sauvage & lagon de Tikei",
              summary: "Atoll compact et peu fréquenté au cœur des Tuamotu.",
              duration: "1h à 1h30",
              departure: "Depuis l'atoll de Tikei",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau / Avion",
              lat: -14.95,
              lng: -144.55
            },
            {
              theme: "parc",
              title: "Plages & oiseaux marins de Tikei",
              summary: "Découverte sauvage et paisible des plages coralliennes de l'atoll.",
              duration: "1h30",
              departure: "Depuis le rivage de Tikei",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied",
              lat: -14.952,
              lng: -144.548
            }
          ]
        }
      ]
    },
    {
      id: "marquises",
      title: "Archipel : 4. Marquises",
      mapLabel: "Archipel des Marquises",
      lat: -8.909,
      lng: -140.002,
      zoom: 8,
      intro: "Nuku Hiva, Hiva Oa, Ua Pou, Ua Huka, Tahuata, Fatu Hiva et Fatu Huku — Falaises vertigineuses, vallées sauvages et sculptures tiki.",
      islands: [
        {
          id: "nuku-hiva",
          label: "Nuku Hiva",
          lat: -8.8667,
          lng: -140.1333,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Cascade de Vaipo & baie des Contrôleurs (Nuku Hiva)",
              summary: "Randonnée spectaculaire dans la vallée d'Hakaui menant à l'une des plus hautes chutes d'eau.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Taiohae ou Hakaui",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🥾 4x4 / Randonnée",
              lat: -8.9167,
              lng: -140.1
            },
            {
              theme: "point-de-vue",
              title: "Baie de Taiohae & falaises volcaniques de Nuku Hiva",
              summary: "Cirque impressionnant de falaises abruptes plongeant dans une baie profonde.",
              duration: "1h à 1h30",
              departure: "Depuis Taiohae",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 4x4 / À pied",
              lat: -8.91,
              lng: -140.105
            },
            {
              theme: "monument",
              title: "Site archéologique de Tohua Kamuihei & tiki de Taipivai (Nuku Hiva)",
              summary: "Grande place cérémonielle en forêt et sculptures marquisiens au cœur de la vallée de Taipivai.",
              duration: "2h à 3h",
              departure: "Depuis Taiohae / vallée de Taipivai",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚗 4x4 / À pied",
              lat: -8.875,
              lng: -140.045
            },
            {
              theme: "marche",
              title: "Sculptures sur bois, os et pierre à Taiohae (Nuku Hiva)",
              summary: "Rencontre avec les artisans sculpteurs réputés pour la finesse des motifs marquisiens.",
              duration: "1h à 1h30",
              departure: "Depuis le centre de Taiohae",
              price: 30,
              priceLabel: "~30 €/p",
              transport: "🚶 À pied",
              lat: -8.908,
              lng: -140.102
            }
          ]
        },
        {
          id: "hiva-oa",
          label: "Hiva Oa",
          lat: -9.75,
          lng: -139,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Sentiers des vallées de Puamau ou Hanaiapa (Hiva Oa)",
              summary: "Marches au milieu de vallées verdoyantes, rivières et reliefs volcaniques marqués.",
              duration: "2h à 4h",
              departure: "Depuis Atuona / Puamau",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 4x4 / À pied",
              lat: -9.78,
              lng: -138.98
            },
            {
              theme: "point-de-vue",
              title: "Atuona, site d'Upeke & baie de Hanaiapa (Hiva Oa)",
              summary: "Vues contrastées entre baies encaissées, vallées et pentes escarpées d'Hiva Oa.",
              duration: "1h30 à 2h",
              departure: "Depuis Atuona",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / 4x4",
              lat: -9.8025,
              lng: -139.0325
            },
            {
              theme: "monument",
              title: "Tiki géants de Puamau & cimetière marin d'Atuona (Hiva Oa)",
              summary: "Site abritant les plus grands tiki des Marquises et belvédère surplombant la baie d'Atuona.",
              duration: "2h à 3h",
              departure: "Depuis Atuona",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚗 4x4",
              lat: -9.775,
              lng: -138.82
            },
            {
              theme: "marche",
              title: "Artisanat marquisien & produits locaux d'Atuona (Hiva Oa)",
              summary: "Découverte des créations locales et saveurs de l'île autour d'Atuona.",
              duration: "1h à 1h30",
              departure: "Depuis le centre d'Atuona",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚶 À pied",
              lat: -9.803,
              lng: -139.035
            }
          ]
        },
        {
          id: "ua-pou",
          label: "Ua Pou",
          lat: -9.4,
          lng: -140.0667,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Randonnée vers les cols & sommets des pics basaltiques d'Ua Pou",
              summary: "Marche sportive au pied de formations volcaniques élancées uniques dans le Pacifique.",
              duration: "3h à 5h",
              departure: "Depuis Hakahau",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🥾 4x4 / Randonnée",
              lat: -9.405,
              lng: -140.07
            },
            {
              theme: "point-de-vue",
              title: "Pits / pains de sucre basaltiques & baie d'Hakahau (Ua Pou)",
              summary: "Silhouette spectaculaire des pics basaltiques dominant la baie et le village d'Hakahau.",
              duration: "1h à 1h30",
              departure: "Depuis Hakahau",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 4x4 / À pied",
              lat: -9.36,
              lng: -140.075
            },
            {
              theme: "monument",
              title: "Sculptures de pierre fleurie (pierre grise) & sites culturels d'Ua Pou",
              summary: "Découverte de la pierre fleurie, roche volcanique tachetée propre à l'île, et des repères locaux.",
              duration: "1h à 1h30",
              departure: "Depuis Hakahau",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / 4x4",
              lat: -9.362,
              lng: -140.072
            },
            {
              theme: "marche",
              title: "Atelier de sculpture sur pierre fleurie à Hakahau (Ua Pou)",
              summary: "Visite d'atelier pour observer le travail de cette pierre singulière sculptée à la main.",
              duration: "1h",
              departure: "Depuis le centre d'Hakahau",
              price: 30,
              priceLabel: "~30 €/p",
              transport: "🚶 À pied",
              lat: -9.361,
              lng: -140.074
            }
          ]
        },
        {
          id: "ua-huka",
          label: "Ua Huka",
          lat: -8.9,
          lng: -139.55,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Arboretum d'Ua Huka & chevaux sauvages de l'île",
              summary: "Espace boisé et vallons secs où l'on croise fréquemment les chevaux en liberté.",
              duration: "1h30 à 2h",
              departure: "Depuis Vaipaee / Hane",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 4x4",
              lat: -8.905,
              lng: -139.545
            },
            {
              theme: "point-de-vue",
              title: "Côtes arides, falaises & baies d'Ua Huka",
              summary: "Paysages minéraux et sauvages alternant plateaux secs, falaises et baies découpées.",
              duration: "1h30 à 2h30",
              departure: "Depuis Vaipaee",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 4x4",
              lat: -8.9,
              lng: -139.55
            },
            {
              theme: "monument",
              title: "Pétroglyphes, marae & musée de la mer d'Ua Huka",
              summary: "Plongée dans l'histoire maritime et les gravures anciennes de l'île.",
              duration: "1h30 à 2h",
              departure: "Depuis Vaipaee / Hane",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚗 4x4 / À pied",
              lat: -8.902,
              lng: -139.548
            },
            {
              theme: "activite",
              title: "Balade à cheval ou 4x4 dans les vallées d'Ua Huka",
              summary: "Parcours immersif à travers les pistes et vallons typiques d'Ua Huka.",
              duration: "2h à 3h",
              departure: "Depuis les villages d'Ua Huka",
              price: 55,
              priceLabel: "~55 €/p",
              transport: "🐎 Cheval / 4x4",
              lat: -8.898,
              lng: -139.552
            }
          ]
        },
        {
          id: "tahuata",
          label: "Tahuata",
          lat: -9.95,
          lng: -139.0833,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Baie de Vaitahu & plages de sable blanc de Tahuata",
              summary: "Petite île au sud d'Hiva Oa offrant de jolies plages claires dans des baies abritées.",
              duration: "2h à Demi-journée",
              departure: "Depuis Vaitahu (ou Hiva Oa en bateau)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / À pied",
              lat: -9.945,
              lng: -139.105
            },
            {
              theme: "monument",
              title: "Sites historiques & église de Vaitahu (Tahuata)",
              summary: "Découverte du village principal et des repères historiques liés aux premiers contacts européens.",
              duration: "1h",
              departure: "Depuis le débarcadère de Vaitahu",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied",
              lat: -9.944,
              lng: -139.106
            },
            {
              theme: "activite",
              title: "Excursion côtière & snorkeling autour de Tahuata",
              summary: "Navigation le long des falaises et baignade dans les criques de l'île.",
              duration: "Demi-journée",
              departure: "Depuis Vaitahu ou Hiva Oa",
              price: 60,
              priceLabel: "~60 €/p",
              transport: "🚤 Bateau",
              lat: -9.95,
              lng: -139.0833
            }
          ]
        },
        {
          id: "fatu-hiva",
          label: "Fatu Hiva",
          lat: -10.4833,
          lng: -138.65,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Sentier de crête entre Hanavave et Omoa (Fatu Hiva)",
              summary: "Traversée pédestre mythique reliant les deux villages à travers des reliefs escarpés.",
              duration: "4h à 6h",
              departure: "Depuis Hanavave ou Omoa",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -10.475,
              lng: -138.66
            },
            {
              theme: "point-de-vue",
              title: "La Baie des Vierges (Hanavave) & falaises de Fatu Hiva",
              summary: "Site célèbre pour ses aiguilles rocheuses et ses falaises vertigineuses tombant dans la baie.",
              duration: "1h à 2h",
              departure: "Depuis Hanavave",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Bateau / À pied",
              lat: -10.465,
              lng: -138.665
            },
            {
              theme: "marche",
              title: "Tapa (écorce battue) & artisanat traditionnel d'Omoa / Hanavave",
              summary: "Savoir-faire ancestral du tapa peint et artisanat marquisien perpétué sur l'île.",
              duration: "1h à 1h30",
              departure: "Depuis Omoa ou Hanavave",
              price: 30,
              priceLabel: "~30 €/p",
              transport: "🚶 À pied",
              lat: -10.505,
              lng: -138.662
            }
          ]
        },
        {
          id: "fatu-huku",
          label: "Fatu Huku",
          lat: -9.4333,
          lng: -138.9333,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Plateau tabulaire & falaises de l'île inhabitée de Fatu Huku",
              summary: "Îlot escarpé et plat au sommet au nord d'Hiva Oa, observé surtout depuis la mer.",
              duration: "1h (observation)",
              departure: "Depuis Hiva Oa / Ua Pou",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau",
              lat: -9.4333,
              lng: -138.9333
            },
            {
              theme: "parc",
              title: "Réserve ornithologique & côtes de Fatu Huku",
              summary: "Site naturel très sauvage fréquenté par les oiseaux marins au large des Marquises.",
              duration: "1h à 1h30",
              departure: "Depuis le large de Fatu Huku",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau",
              lat: -9.435,
              lng: -138.93
            }
          ]
        }
      ]
    },
    {
      id: "australes",
      title: "Archipel : 5. Australes",
      mapLabel: "Archipel des Australes",
      lat: -23.35,
      lng: -149.4833,
      zoom: 7,
      intro: "Rurutu, Tubuai, Raivavae, Rimatara, Rapa et îles Maria — Grottes calcaires, plages de sable blanc et baleines à bosse en saison.",
      islands: [
        {
          id: "rurutu",
          label: "Rurutu",
          lat: -22.4667,
          lng: -151.3333,
          zoom: 12,
          activities: [
            {
              theme: "rando",
              title: "Sentiers côtiers & crêtes calcaires de Rurutu",
              summary: "Balades entre falaises coralliennes soulevées, vallons et vues sur l'océan austral.",
              duration: "2h à 3h",
              departure: "Depuis Moerai / Avera",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied / Scooter",
              lat: -22.46,
              lng: -151.34
            },
            {
              theme: "point-de-vue",
              title: "Falaises et grottes de Rurutu (observation des baleines en saison)",
              summary: "Côtes sculptées et grottes littorales, avec observation des baleines à bosse en saison hivernale.",
              duration: "2h à Demi-journée",
              departure: "Depuis les côtes de Rurutu",
              price: 50,
              priceLabel: "~50 €/p",
              transport: "🐋 Bateau / Randonnée",
              lat: -22.45,
              lng: -151.3333
            },
            {
              theme: "marche",
              title: "Vannerie tressée (nape, chapeaux) & produits locaux de Rurutu",
              summary: "Réputation reconnue de la vannerie locale et accueil chaleureux dans les villages.",
              duration: "1h",
              departure: "Depuis Moerai",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚶 À pied / Scooter",
              lat: -22.455,
              lng: -151.345
            }
          ]
        },
        {
          id: "tubuai",
          label: "Tubuai",
          lat: -23.3667,
          lng: -149.4833,
          zoom: 12,
          activities: [
            {
              theme: "rando",
              title: "Mont Taitaa & sentiers intérieurs de Tubuai",
              summary: "Montée offrant de larges perspectives sur l'île, son lagon et les motu.",
              duration: "2h à 3h",
              departure: "Depuis Mataura (Tubuai)",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -23.355,
              lng: -149.485
            },
            {
              theme: "parc",
              title: "Motu et plages de sable blanc de Tubuai",
              summary: "Étapes paisibles sur les motu bordant le lagon aux eaux calmes de Tubuai.",
              duration: "2h à Demi-journée",
              departure: "Depuis Mataura / bord de lagon",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -23.35,
              lng: -149.4833
            },
            {
              theme: "monument",
              title: "Fort George (vestiges de la révolte de la Bounty) à Tubuai",
              summary: "Site historique rappelant l'épisode des révoltés de la Bounty sur l'île.",
              duration: "45 min à 1h",
              departure: "Depuis Mahu / Mataura",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚗 Voiture / Vélo",
              lat: -23.345,
              lng: -149.455
            },
            {
              theme: "activite",
              title: "Excursion lagon & motu de Tubuai",
              summary: "Sortie bateau conviviale pour explorer le lagon et faire halte sur un motu.",
              duration: "Demi-journée",
              departure: "Depuis le quai de Tubuai",
              price: 55,
              priceLabel: "~55 €/p",
              transport: "🚤 Bateau",
              lat: -23.335,
              lng: -149.465
            }
          ]
        },
        {
          id: "raivavae",
          label: "Raivavae",
          lat: -23.8667,
          lng: -147.6667,
          zoom: 12,
          activities: [
            {
              theme: "rando",
              title: "Ascension du Mont Hiro (point culminant de Raivavae)",
              summary: "Randonnée sur les hauteurs dominant le lagon aux teintes émeraude et turquoise.",
              duration: "2h à 3h",
              departure: "Depuis Rairua / Anatonu",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -23.87,
              lng: -147.67
            },
            {
              theme: "parc",
              title: "Motu Vaiamanu & plages du lagon de Raivavae",
              summary: "Sable blanc et eau translucide dans l'un des lagons les plus réputés des Australes.",
              duration: "Demi-journée",
              departure: "Depuis le village de Raivavae",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚤 Pirogue / Vélo",
              lat: -23.865,
              lng: -147.65
            },
            {
              theme: "monument",
              title: "Tiki & sites archéologiques de Raivavae",
              summary: "Sculptures en pierre et vestiges anciens témoignant de la culture passée de l'île.",
              duration: "1h à 1h30",
              departure: "Depuis le tour de l'île",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -23.868,
              lng: -147.668
            },
            {
              theme: "activite",
              title: "Balade en pirogue sur le lagon turquoise de Raivavae",
              summary: "Navigation douce au fil des nuances de bleu et de vert du lagon.",
              duration: "2h à Demi-journée",
              departure: "Depuis le rivage de Raivavae",
              price: 60,
              priceLabel: "~60 €/p",
              transport: "🚤 Pirogue / Bateau",
              lat: -23.8667,
              lng: -147.6667
            }
          ]
        },
        {
          id: "rimatara",
          label: "Rimatara",
          lat: -22.65,
          lng: -152.8,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Forêt & habitat du Lori de Rimatara (petit oiseau endémique)",
              summary: "Île verdoyante abritant le lori de Rimatara, petit oiseau coloré protégé.",
              duration: "1h30 à 2h",
              departure: "Depuis Amaru / Anapoto",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo / À pied",
              lat: -22.65,
              lng: -152.8
            },
            {
              theme: "point-de-vue",
              title: "Tour de l'île circulaire de Rimatara & plages",
              summary: "Boucle paisible à vélo à travers villages, champs et littoraux tranquilles.",
              duration: "1h30 à 2h",
              departure: "Depuis Amaru",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚲 Vélo",
              lat: -22.645,
              lng: -152.805
            },
            {
              theme: "activite",
              title: "Découverte naturelle & balade à Rimatara",
              summary: "Exploration douce d'une île intime et préservée à l'ouest des Australes.",
              duration: "2h à 3h",
              departure: "Depuis les villages de Rimatara",
              price: 40,
              priceLabel: "~40 €/p",
              transport: "🚲 Vélo / Bateau",
              lat: -22.655,
              lng: -152.795
            }
          ]
        },
        {
          id: "rapa",
          label: "Rapa",
          lat: -27.6,
          lng: -144.3333,
          zoom: 12,
          activities: [
            {
              theme: "rando",
              title: "Sentiers de crête & baies escarpées de Rapa Iti",
              summary: "Randonnées sauvages et ventées sur une île australe très isolée au relief accidenté.",
              duration: "3h à 5h",
              departure: "Depuis Ahurei",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -27.6,
              lng: -144.3333
            },
            {
              theme: "monument",
              title: "Pā (anciennes forteresses fortifiées sur les hauteurs de Rapa)",
              summary: "Vestiges de fortifications perchées sur les crêtes témoignant de l'organisation défensive locale.",
              duration: "2h à 3h",
              departure: "Depuis Ahurei",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied",
              lat: -27.595,
              lng: -144.34
            },
            {
              theme: "point-de-vue",
              title: "Baie d'Ahurei & paysages australes de Rapa",
              summary: "Panorama saisissant sur la baie abritée et les pentes verdoyantes de Rapa.",
              duration: "1h à 2h",
              departure: "Depuis Ahurei",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🥾 À pied / Bateau",
              lat: -27.615,
              lng: -144.335
            }
          ]
        },
        {
          id: "maria",
          label: "Îles Maria",
          lat: -21.8,
          lng: -154.7,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Atoll occidental des Australes aux Îles Maria (Nororotu)",
              summary: "Groupe de quatre motu formant un atoll isolé à l'ouest de l'archipel des Australes.",
              duration: "1h30",
              departure: "Depuis Rimatara / Îles Sous-le-Vent",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau / Avion",
              lat: -21.8,
              lng: -154.7
            },
            {
              theme: "parc",
              title: "Motu coralliens & plages isolées des Îles Maria",
              summary: "Environnement maritime sauvage et paisible loin des lieux fréquentés.",
              duration: "1h30 à 2h",
              departure: "Depuis le mouillage des Îles Maria",
              price: 0,
              priceLabel: "Gratuit",
              transport: "⛵ Bateau",
              lat: -21.802,
              lng: -154.698
            }
          ]
        }
      ]
    }
  ]
};
