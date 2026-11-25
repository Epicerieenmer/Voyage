const DESTINATION_PAGE_DATA = {
  archipels: [
    {
      id: "bangkok",
      title: "Province : 1. Bangkok",
      mapLabel: "Bangkok",
      lat: 13.7563,
      lng: 100.5018,
      zoom: 11,
      intro: "Capitale — Temples royaux, Chao Phraya et khlongs, marchés de fleurs et de nuit, parcs urbains et rooftops.",
      islands: [
        {
          id: "bangkok-rattanakosin-fleuve",
          label: "Rattanakosin, Fleuve Chao Phraya & Thonburi",
          lat: 13.7466,
          lng: 100.4913,
          zoom: 13,
          activities: [
            {
              theme: "monument",
              title: "Grand Palais, Wat Phra Kaew (Bouddha d'Émeraude) & Wat Pho (Bouddha couché)",
              summary: "Ensemble royal emblématique et grand complexe bouddhique réputé pour son Bouddha allongé doré et ses massages traditionnels.",
              duration: "3h à 4h",
              departure: "Depuis Rattanakosin / Embarcadère Tha Tien",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚤 Bateau express Chao Phraya / À pied",
              lat: 13.7517,
              lng: 100.4927
            },
            {
              theme: "monument",
              title: "Traversée vers Wat Arun (Temple de l'Aube), Wat Pho Pier, Soi Tha Suphan & Mont d'Or (Wat Saket)",
              summary: "Pagode ornée de porcelaines au bord du fleuve, coucher de soleil depuis Wat Pho Pier / Soi Tha Suphan et montée au Wat Saket.",
              duration: "2h30 à 3h30",
              departure: "Depuis Tha Tien / Wat Pho Pier / Soi Tha Suphan",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "⛴️ Bac fluvial / Tuk-tuk / À pied",
              lat: 13.7437,
              lng: 100.4889
            },
            {
              theme: "monument",
              title: "Wat Benchamabophit (Temple de Marbre), Wat Ratchanatdaram, Wat Traimit & Maison de Jim Thompson",
              summary: "Temples remarquables de Bangkok, Bouddha d'or massif, demeure traditionnelle en teck et jardins tropicaux.",
              duration: "2h30 à 4h",
              departure: "Depuis Dusit / Phra Nakhon / Hua Lamphong",
              price: 12,
              priceLabel: "~12 € (~450 ฿)/p",
              transport: "🚇 MRT / BTS / Tuk-tuk",
              lat: 13.7669,
              lng: 100.5139
            },
            {
              theme: "monument",
              title: "Bangkok Art & Culture Center (BACC), National Museum Bangkok ou Musée du Siam",
              summary: "Découverte culturelle et artistique des collections nationales, de l'histoire thaïe ou de la création contemporaine.",
              duration: "1h30 à 3h",
              departure: "Depuis Siam / Rattanakosin",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚇 BTS National Stadium / MRT Sanam Chai",
              lat: 13.7466,
              lng: 100.5301
            },
            {
              theme: "activite",
              title: "Balade en long boat sur les khlongs, Khlong Bang Luang Floating Market & Wat Paknam Phasi Charoen",
              summary: "Navigation de 2h dans les canaux aux maisons sur pilotis, arrêt au marché flottant d'art de Khlong Bang Luang et Bouddha géant de 69 m.",
              duration: "2h à 3h",
              departure: "Depuis les canaux de Thonburi / Chao Phraya",
              price: 30,
              priceLabel: "~30 € (~1 120 ฿)/p",
              transport: "🚤 Bateau long-tail",
              lat: 13.7525,
              lng: 100.4597
            },
            {
              theme: "activite",
              title: "Croisière sur le Chao Phraya ou soirée Muay Thai au stade Rajadamnern",
              summary: "Navigation au fil du fleuve ou ambiance vibrante des combats de boxe thaïlandaise en soirée.",
              duration: "2h à 3h",
              departure: "Depuis les embarcadères du Chao Phraya ou Ratchadamnoen Nok",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🚤 Bateau / 🚕 Taxi / MRT",
              lat: 13.7594,
              lng: 100.5106
            },
            {
              theme: "activite",
              title: "Massage thaï traditionnel ou cours de cuisine thaïlandaise à Bangkok",
              summary: "Séance de détente corporelle (notamment à l'école de massage de Wat Pho) ou initiation culinaire locale.",
              duration: "1h30 à 4h",
              departure: "Depuis le centre ou Wat Pho",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚇 BTS / MRT / À pied",
              lat: 13.7465,
              lng: 100.493
            }
          ]
        },
        {
          id: "bangkok-chinatown-marches",
          label: "Chinatown (Yaowarat), Talat Noi, Song Wat & Marchés flottants",
          lat: 13.741,
          lng: 100.5085,
          zoom: 13,
          activities: [
            {
              theme: "marche",
              title: "Marché aux fleurs de Pak Khlong Talat & street food de Yaowarat (Chinatown)",
              summary: "Guirlandes d'offrandes le matin à Pak Khlong Talat puis illuminations et street food du soir avenue Yaowarat Rd.",
              duration: "2h à 3h30",
              departure: "Depuis Pak Khlong Talat ou Yaowarat Road",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚇 MRT Wat Mangkon / Sanam Chai",
              lat: 13.7419,
              lng: 100.5082
            },
            {
              theme: "monument",
              title: "Balade autour de Chinatown : Talat Noi, Song Wat Street Art & Ong Ang Canal",
              summary: "Ruelles pleines de charme, fresques de street art, quartier historique de Talat Noi et berges d'Ong Ang Canal.",
              duration: "2h à 3h",
              departure: "Depuis Chinatown / Talat Noi",
              price: 0,
              priceLabel: "Gratuit (0 ฿)",
              transport: "🚶 À pied / MRT",
              lat: 13.735,
              lng: 100.513
            },
            {
              theme: "marche",
              title: "Marché flottant de Khlong Lat Mayom (week-end) & temple Wat Saphan",
              summary: "Ambiance locale et conviviale au bord de l'eau, stands gourmands et balade en bateau jusqu'au petit marché de Wat Saphan.",
              duration: "2h30 à 4h",
              departure: "Depuis Taling Chan (ouest de Bangkok)",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚕 Taxi / 🚤 Bateau sur le canal",
              lat: 13.7675,
              lng: 100.4158
            },
            {
              theme: "marche",
              title: "Chatuchak Weekend Market, marchés de nuit & flânerie à Khao San",
              summary: "Grand marché du week-end, stands alimentaires et ruelles animées de la capitale.",
              duration: "2h30 à 4h",
              departure: "Depuis Mo Chit / Phra Nakhon / Rama 9",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚇 BTS Mo Chit / MRT / Taxi",
              lat: 13.7999,
              lng: 100.5503
            }
          ]
        },
        {
          id: "bangkok-parcs-panoramas",
          label: "Parcs Lumphini & Benjakitti, Bang Krachao & Rooftops",
          lat: 13.715,
          lng: 100.55,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Parc Lumphini & Parc Benjakitti (lacs, passerelles, pédalo & varans)",
              summary: "Grands espaces verts reliés par une passerelle piétonne offrant un contraste calme et une balade sur l'eau face aux gratte-ciels.",
              duration: "2h à 3h",
              departure: "Depuis Silom / Asok",
              price: 0,
              priceLabel: "Gratuit (0 ฿)",
              transport: "🚇 MRT / BTS / À pied",
              lat: 13.7308,
              lng: 100.5418
            },
            {
              theme: "rando",
              title: "Balade à vélo à Bang Krachao (le poumon vert sur le fleuve)",
              summary: "Presqu'île verdoyante de palmeraies, sentiers surélevés et petits marchés à quelques minutes du fleuve.",
              duration: "2h30 à 4h",
              departure: "Depuis l'embarcadère de Khlong Toei / Bang Na",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "⛴️ Bac + 🚲 Vélo",
              lat: 13.6936,
              lng: 100.5678
            },
            {
              theme: "point-de-vue",
              title: "Mahanakhon SkyWalk, Baiyoke Sky Tower ou coucher de soleil sur un rooftop",
              summary: "Vue panoramique à 360° ou en hauteur sur Bangkok, le fleuve Chao Phraya et les lumières du soir.",
              duration: "1h30 à 2h",
              departure: "Depuis Chong Nonsi / Pratunam / Sathorn",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚇 BTS / MRT / Taxi",
              lat: 13.7234,
              lng: 100.5284
            }
          ]
        }
      ]
    },
    {
      id: "ayutthaya",
      title: "Province : 2. Ayutthaya",
      mapLabel: "Ayutthaya",
      lat: 14.3532,
      lng: 100.568,
      zoom: 12,
      intro: "Ancienne capitale du royaume de Siam classée UNESCO — Prangs de brique, temples entourés de douves, tuk-tuk, vélo et croisières fluviales.",
      islands: [
        {
          id: "ayutthaya-parc-historique",
          label: "Parc historique d'Ayutthaya, Fleuve & Environs",
          lat: 14.3568,
          lng: 100.5675,
          zoom: 13,
          activities: [
            {
              theme: "monument",
              title: "Tour des temples en tuk-tuk ou vélo : Wat Mahathat, Wat Phra Si Sanphet, Wat Ratchaburana, Wat Yai Chai Mongkhon & Wat Lokayasutharam",
              summary: "Découverte des vestiges majeurs d'Ayutthaya (tête de Bouddha dans les racines, chédis royaux, Bouddha couché) en tuk-tuk ou à vélo.",
              duration: "3h à 4h30",
              departure: "Depuis le centre d'Ayutthaya",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🛺 Tuk-tuk / 🚲 Vélo / Scooter",
              lat: 14.3568,
              lng: 100.5675
            },
            {
              theme: "monument",
              title: "Wat Phu Khao Thong (temple-montagne), Musée national Chao Sam Phraya & Wat Niwet Thammaprawat",
              summary: "Chédi blanc dominant les plaines, collections archéologiques d'Ayutthaya et temple de style néogothique accessible en téléphérique.",
              duration: "2h à 3h30",
              departure: "Depuis le nord-ouest ou le sud d'Ayutthaya",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚲 Vélo / Tuk-tuk / Téléphérique",
              lat: 14.3742,
              lng: 100.5436
            },
            {
              theme: "monument",
              title: "Excursion au palais royal d'été de Bang Pa-In au sud d'Ayutthaya",
              summary: "Pavillons royaux mêlant influences thaïes, chinoises et européennes au milieu de jardins et plans d'eau.",
              duration: "2h à 3h",
              departure: "Depuis Ayutthaya (environ 20 km au sud) ou en route vers Bangkok",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚕 Taxi / Train / Voiture",
              lat: 14.2314,
              lng: 100.5789
            },
            {
              theme: "activite",
              title: "Balade fluviale de 2h sur le Chao Phraya : Wat Phanan Choeng, Wat Phutthaisawan & Wat Chaiwatthanaram au coucher du soleil",
              summary: "Croisière en fin d'après-midi sur le fleuve avec arrêts dans ces trois temples et lumière dorée à Wat Chaiwatthanaram.",
              duration: "2h",
              departure: "Depuis l'embarcadère d'Ayutthaya",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚤 Bateau fluvial",
              lat: 14.3319,
              lng: 100.5419
            },
            {
              theme: "marche",
              title: "Krungsri Night Market (week-end), marché flottant d'Ayutthaya & roti sai mai",
              summary: "Marché de nuit convivial au pied du Wat Ratchaburana, spécialités locales (kuay teow reua, roti sai mai) et artisanat.",
              duration: "1h30 à 2h30",
              departure: "Depuis le centre d'Ayutthaya",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied / Tuk-tuk / 🚲 Vélo",
              lat: 14.3578,
              lng: 100.5628
            }
          ]
        }
      ]
    },
    {
      id: "kanchanaburi",
      title: "Province : 3. Kanchanaburi",
      mapLabel: "Kanchanaburi — Pont de la rivière Kwai, Erawan & Sai Yok",
      lat: 14.0228,
      lng: 99.5328,
      zoom: 9,
      intro: "Vallées verdoyantes, cascades à sept niveaux, voie ferrée historique, grottes, temples et parcs nationaux.",
      islands: [
        {
          id: "kanchanaburi-kwai-erawan",
          label: "Rivière Kwai, Hellfire Pass, Cascades d'Erawan & Sai Yok",
          lat: 14.3694,
          lng: 99.1447,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Parc national d'Erawan : montée aux sept niveaux de cascades émeraude",
              summary: "Sentier forestier longeant une série de sept vasques et cascades d'eau claire où l'on peut se baigner.",
              duration: "3h à Demi-journée",
              departure: "Depuis Kanchanaburi",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚌 Bus local / Voiture",
              lat: 14.3694,
              lng: 99.1447
            },
            {
              theme: "parc",
              title: "Parc national de Sai Yok (cascades Sai Yok Noi / Sai Yok Yai & grottes) ou chutes de Huay Mae Khamin",
              summary: "Cascades sauvages, grottes calcaires (Tham Lawa) à Sai Yok ou bassins turquoise plus calmes de Huay Mae Khamin.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Kanchanaburi ou Sai Yok",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚗 Voiture / Bus / Excursion",
              lat: 14.2367,
              lng: 99.0564
            },
            {
              theme: "monument",
              title: "Pont sur la rivière Kwai, train de la mort, cimetière militaire & musée JEATH",
              summary: "Sites historiques liés à la voie ferrée thaïlando-birmane, au cimetière allié et à la mémoire de la Seconde Guerre mondiale.",
              duration: "3h à Demi-journée",
              departure: "Depuis Kanchanaburi",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚂 Train / Bus / Songthaew",
              lat: 14.0411,
              lng: 99.5033
            },
            {
              theme: "monument",
              title: "Wat Tham Suea (Temple de la Grotte du Tigre) & parc historique khmer de Prasat Muang Singh",
              summary: "Ascension de 157 marches vers un grand Bouddha doré dominant les rizières ou découverte des ruines khmères au bord de la rivière.",
              duration: "2h à 3h",
              departure: "Depuis Kanchanaburi / Tha Muang / Sai Yok",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚗 Voiture / Songthaew / Scooter",
              lat: 13.9233,
              lng: 99.6331
            },
            {
              theme: "point-de-vue",
              title: "Skywalk Kanchanaburi City & panorama depuis les hauteurs de Wat Tham Suea",
              summary: "Passerelle vitrée suspendue au-dessus de la confluence des rivières Kwai et Mae Klong ou vue panoramique sur la vallée.",
              duration: "1h30 à 2h",
              departure: "Depuis le centre de Kanchanaburi",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied / Songthaew / Voiture",
              lat: 14.0065,
              lng: 99.5322
            },
            {
              theme: "rando",
              title: "Marche sur l'ancienne tranchée ferroviaire de Hellfire Pass & forêt alentour",
              summary: "Parcours émouvant et forestier taillé dans la roche le long de l'ancien tracé de la voie ferrée.",
              duration: "1h30 à 2h30",
              departure: "Depuis Sai Yok / Kanchanaburi",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚌 Bus / Voiture",
              lat: 14.3553,
              lng: 98.9539
            },
            {
              theme: "activite",
              title: "Balade en bateau long-tail, bamboo rafting ou nuit en maison flottante sur la rivière Kwai",
              summary: "Navigation paisible, descente en radeau de bambou ou nuit au fil de l'eau entouré de jungle.",
              duration: "2h à Nuitée",
              departure: "Depuis Kanchanaburi ou Sai Yok",
              price: 30,
              priceLabel: "~30 € (~1 120 ฿)/p",
              transport: "🚤 Bateau long-tail / Radeau bambou",
              lat: 14.055,
              lng: 99.48
            }
          ]
        }
      ]
    },
    {
      id: "ratchaburi-phetchaburi",
      title: "Province : 4. Ratchaburi & Phetchaburi",
      mapLabel: "Ratchaburi & Phetchaburi",
      lat: 13.111,
      lng: 99.9403,
      zoom: 9,
      intro: "Marchés flottants ou ferroviaires, palais royaux, grottes calcaires, céramiques, parcs nationaux et plages du golfe.",
      islands: [
        {
          id: "damnoen-mae-klong-khao-wang",
          label: "Damnoen Saduak / Mae Klong & Phra Nakhon Khiri (Khao Wang)",
          lat: 13.5194,
          lng: 99.9583,
          zoom: 10,
          activities: [
            {
              theme: "marche",
              title: "Marché flottant de Damnoen Saduak & marché ferroviaire de Mae Klong",
              summary: "Barques chargées de fruits et étals installés au ras des rails où passe le train local.",
              duration: "Demi-journée",
              departure: "Depuis Bangkok ou Ratchaburi",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚐 Van / Train / 🚤 Barque",
              lat: 13.5194,
              lng: 99.9583
            },
            {
              theme: "point-de-vue",
              title: "Palais de Phra Nakhon Khiri (Khao Wang) & grotte de Khao Luang à Phetchaburi",
              summary: "Ancien palais royal dominant la colline et grotte ornée de statues de Bouddha éclairée par un puits de lumière.",
              duration: "2h30 à 3h30",
              departure: "Depuis le centre de Phetchaburi",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "Funiculaire / Songthaew / À pied",
              lat: 13.1108,
              lng: 99.9325
            },
            {
              theme: "monument",
              title: "Temples de Phetchaburi (Wat Yai Suwannaram, Wat Mahathat Worawihan, Wat Ko Kaew Suttharam) & Phra Ram Ratchaniwet",
              summary: "Peintures murales anciennes, grand prang blanc et palais royal construit sous Rama V au cœur de la ville.",
              duration: "2h à 3h",
              departure: "Depuis le centre de Phetchaburi",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied / Songthaew / Tuk-tuk",
              lat: 13.1055,
              lng: 99.9462
            },
            {
              theme: "parc",
              title: "Parc national de Kaeng Krachan (cascade Pa La-U) ou Khao Ngu Stone Park & grottes de Ratchaburi",
              summary: "Grandes forêts et cascades du parc de Kaeng Krachan ou falaises calcaires, lacs et grottes (Khao Bin, Chomphon) à Ratchaburi.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Phetchaburi ou Ratchaburi",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚗 Voiture / Minivan / Songthaew",
              lat: 12.9167,
              lng: 99.6333
            },
            {
              theme: "activite",
              title: "Atelier de céramique Tao Hong Tai à Ratchaburi ou balade sur les plages de Cha-Am / Hat Puek Tian",
              summary: "Découverte des poteries traditionnelles de Ratchaburi ou détente le long du littoral de Phetchaburi et Cha-Am.",
              duration: "1h30 à 3h",
              departure: "Depuis Ratchaburi ou le littoral de Phetchaburi",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Voiture / Songthaew / Scooter",
              lat: 13.5285,
              lng: 99.8142
            }
          ]
        }
      ]
    },
    {
      id: "chiang-mai",
      title: "Province : 5. Chiang Mai",
      mapLabel: "Chiang Mai — Vieille ville, Doi Suthep & Doi Inthanon",
      lat: 18.7883,
      lng: 98.9853,
      zoom: 10,
      intro: "Capitale culturelle du Nord — Vieille ville entourée de douves, centaines de temples, marchés de nuit, montagnes et forêts d'altitude.",
      islands: [
        {
          id: "chiang-mai-ville-suthep",
          label: "Vieille ville de Chiang Mai & Wat Phra That Doi Suthep",
          lat: 18.8048,
          lng: 98.9216,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Temples de la vieille ville (Wat Chedi Luang, Wat Phra Singh, Wat Chiang Man & Wat Sri Suphan) & Wat Phra That Doi Suthep",
              summary: "Cédis anciens, plus vieux temple de la ville, temple d'argent et montée vers le sanctuaire doré sur les hauteurs de Doi Suthep.",
              duration: "3h à Journée",
              departure: "Depuis la vieille ville de Chiang Mai",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚗 Songthaew rouge / Scooter / À pied",
              lat: 18.8048,
              lng: 98.9216
            },
            {
              theme: "monument",
              title: "Wat Umong (tunnels & stupa en forêt) et randonnée Monk's Trail vers Wat Pha Lat au pied du Doi Suthep",
              summary: "Temple-tunnel dans la forêt et marche d'environ 7 km sur le sentier des moines jusqu'au sanctuaire de Wat Pha Lat.",
              duration: "2h à 4h",
              departure: "Depuis l'ouest de Chiang Mai / Université de Chiang Mai",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🛵 Scooter / Songthaew / Grab / 🚶 Randonnée",
              lat: 18.7836,
              lng: 98.9522
            },
            {
              theme: "marche",
              title: "Marché de Warorot (Kad Luang), Night Bazaar, Sunday Walking Street, Wua Lai Market & Jing Jai / Kham Thiang Market",
              summary: "Marchés de jour et de nuit, artisanat local, plantes à Kham Thiang et saveurs du Nord (kao soi, saucisse sai ua).",
              duration: "2h à 4h",
              departure: "Depuis le centre ou le nord de Chiang Mai",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚶 À pied / Songthaew / Grab",
              lat: 18.7903,
              lng: 99.0005
            },
            {
              theme: "activite",
              title: "Cours de cuisine thaïe, combat de Muay Thai, sanctuaire d'éléphants éthique ou massage traditionnel",
              summary: "Ateliers culinaires, soirée boxe thaïlandaise, visite d'un sanctuaire éthique comme Elephant Nature Park ou détente corporelle.",
              duration: "2h à Journée",
              departure: "Depuis Chiang Mai",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🚐 Songthaew / Grab / Navette",
              lat: 18.7877,
              lng: 98.9931
            }
          ]
        },
        {
          id: "doi-inthanon-mae-kampong-bua-thong",
          label: "Parc national de Doi Inthanon, Mae Kampong & Cascades de Bua Thong",
          lat: 18.588,
          lng: 98.4867,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Randonnée sur le sentier de Kew Mae Pan & pagodes royales à Doi Inthanon",
              summary: "Boucle en forêt d'altitude (environ 2,5 km), forêt de nuages et vue panoramique au sommet du toit de la Thaïlande.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Chiang Mai ou Chom Thong",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🚗 Voiture / Songthaew / Excursion",
              lat: 18.588,
              lng: 98.4867
            },
            {
              theme: "point-de-vue",
              title: "Cascades de Wachirathan & Mae Ya dans la région de Doi Inthanon",
              summary: "Grandes chutes d'eau entourées de falaises et de forêts dans les montagnes au sud-ouest de Chiang Mai.",
              duration: "1h30 à 2h30",
              departure: "Depuis Chom Thong ou la route du parc",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Voiture / Songthaew",
              lat: 18.5325,
              lng: 98.6003
            },
            {
              theme: "parc",
              title: "Cascades de Bua Thong (Sticky Waterfalls) au nord de Chiang Mai",
              summary: "Cascades calcaires à la roche adhérente situées à environ 60 km au nord de Chiang Mai.",
              duration: "2h à 3h",
              departure: "Depuis Chang Phueak Bus Terminal / Chiang Mai",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚐 Songthaew / Voiture",
              lat: 19.0672,
              lng: 99.1069
            },
            {
              theme: "parc",
              title: "Village de montagne de Mae Kampong, plantations de thé, cascades & descente en radeau de bambou",
              summary: "Hameau forestier à environ 1h de Chiang Mai, cascade à plusieurs niveaux et balade ou raft en bambou sur la rivière.",
              duration: "Demi-journée",
              departure: "Depuis Chiang Mai",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚐 Songthaew / Voiture / Radeau bambou",
              lat: 18.8672,
              lng: 99.3547
            }
          ]
        }
      ]
    },
    {
      id: "chiang-rai",
      title: "Province : 6. Chiang Rai",
      mapLabel: "Chiang Rai — Wat Rong Khun, Wat Huay Pla Kang, Singha Park & Triangle d'Or",
      lat: 19.9105,
      lng: 99.8406,
      zoom: 9,
      intro: "Extrême nord montagneux — Temples artistiques et statues monumentales, parcs et plantations de thé, cascades, montagnes et Mékong.",
      islands: [
        {
          id: "chiang-rai-temples-the",
          label: "Temples de Chiang Rai, Singha Park, Cascades & Nord/Triangle d'Or",
          lat: 19.8241,
          lng: 99.7631,
          zoom: 11,
          activities: [
            {
              theme: "monument",
              title: "Wat Rong Khun (Temple Blanc), Wat Rong Suea Ten (Temple Bleu) & Baan Dam Museum (Maison Noire)",
              summary: "Trois sites artistiques emblématiques de Chiang Rai répartis autour de la ville, du temple blanc de miroirs au musée sombre de Thawan Duchanee.",
              duration: "3h à Journée",
              departure: "Depuis le centre de Chiang Rai",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Songthaew / Voiture / Tuk-tuk",
              lat: 19.8241,
              lng: 99.7631
            },
            {
              theme: "monument",
              title: "Wat Huay Pla Kang (statue géante & pagode à 9 étages), Wat Phra Kaew de Chiang Rai & Wat Doi CEE",
              summary: "Monumentale statue avec montée panoramique à Wat Huay Pla Kang, temple historique abritant une copie du Bouddha d'Émeraude et parc de Wat Doi CEE.",
              duration: "2h à 3h30",
              departure: "Depuis le centre de Chiang Rai",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🛵 Scooter / Songthaew / Voiture",
              lat: 19.9433,
              lng: 99.8056
            },
            {
              theme: "parc",
              title: "Singha Park Chiang Rai (plantations de thé, lac, vélo, tyrolienne & balade en ferme)",
              summary: "Grand domaine naturel à une douzaine de kilomètres au sud de la ville mêlant champs de thé, lac et activités de plein air.",
              duration: "2h à 4h",
              departure: "Depuis Chiang Rai (environ 12 km au sud)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Voiture / Taxi / 🚲 Vélo sur place",
              lat: 19.8469,
              lng: 99.7436
            },
            {
              theme: "rando",
              title: "Randonnée jusqu'à la cascade de Khun Korn (environ 3 km A/R) ou cascade de Huai Kaeo",
              summary: "Marche ombragée à travers forêt et bambous jusqu'à l'une des hautes cascades de la province.",
              duration: "1h30 à 3h",
              departure: "Depuis Chiang Rai (environ 30 km au sud-ouest)",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🛵 Scooter / Voiture + 🚶 Randonnée",
              lat: 19.8586,
              lng: 99.6089
            },
            {
              theme: "point-de-vue",
              title: "Triangle d'Or (Sop Ruak), plantations de thé Choui Fong / Doi Mae Salong, Doi Tung ou lever du soleil à Phu Chi Fa",
              summary: "Confluence vers le Mékong, terrasses de thé, jardins de Doi Tung, ville frontière de Mae Sai ou panoramas d'altitude.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Chiang Rai",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚗 Voiture / Minivan / Excursion",
              lat: 20.3547,
              lng: 100.0811
            },
            {
              theme: "marche",
              title: "Tour de l'Horloge, marché de nuit de Chiang Rai & dégustation de thés de montagne",
              summary: "Animation du soir autour du Night Bazaar, spécialités locales et découverte des thés cultivés dans la province.",
              duration: "1h30 à 2h30",
              departure: "Depuis le centre de Chiang Rai",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied / Songthaew",
              lat: 19.9085,
              lng: 99.8325
            }
          ]
        }
      ]
    },
    {
      id: "mae-hong-son",
      title: "Province : 7. Mae Hong Son",
      mapLabel: "Mae Hong Son — Pai, Ban Rak Thai & Boucle montagneuse",
      lat: 19.302,
      lng: 97.9654,
      zoom: 9,
      intro: "Vallées isolées, routes sinueuses de montagne, villages chinois de montagne, grottes, cascades, rizières, sources chaudes et atmosphère paisible.",
      islands: [
        {
          id: "pai",
          label: "Pai",
          lat: 19.3586,
          lng: 98.44,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Coucher de soleil au Canyon de Pai, point de vue de Yun Lai & cascades de Pam Bok et Mor Paeng",
              summary: "Crêtes argileuses étroites offrant une vue dégagée sur la vallée, panorama matinal sur la mer de brume et cascades entourées de végétation.",
              duration: "2h à 3h30",
              departure: "Depuis le centre de Pai",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🛵 Scooter / Songthaew",
              lat: 19.3372,
              lng: 98.4142
            },
            {
              theme: "parc",
              title: "Sources chaudes de Tha Pai & Sai Ngam, et balade dans les rizières de la vallée",
              summary: "Bassins d'eau chaude naturelle en forêt et chemins tranquilles au milieu des rizières.",
              duration: "2h à 3h",
              departure: "Depuis Pai",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🛵 Scooter / Vélo",
              lat: 19.3917,
              lng: 98.4639
            },
            {
              theme: "monument",
              title: "Wat Phra That Mae Yen (Grand Bouddha blanc), pont de bambou de Kho Ku So & Memorial Bridge",
              summary: "Vue sur la vallée de Pai depuis les hauteurs, passerelle de bambou serpentant au-dessus des rizières et pont historique de la rivière Pai.",
              duration: "1h30 à 2h30",
              departure: "Depuis Pai",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🛵 Scooter / Vélo",
              lat: 19.3647,
              lng: 98.4481
            },
            {
              theme: "marche",
              title: "Flânerie au marché de nuit de Pai (Pai Walking Street) & village culturel de Santichon",
              summary: "Étalages de street food, encas locaux et artisanat dans le centre piéton en soirée, et découverte du village d'influence yunnanese.",
              duration: "1h30 à 2h30",
              departure: "Depuis le centre de Pai",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied / 🛵 Scooter",
              lat: 19.3595,
              lng: 98.4402
            },
            {
              theme: "activite",
              title: "Exploration en radeau de bambou de la grotte de Tham Lod (Pang Mapha)",
              summary: "Traversée souterraine spectaculaire d'une vaste grotte calcaire le long d'une rivière sur un radeau en bambou guidé à la lanterne.",
              duration: "2h à 3h",
              departure: "Depuis Pai ou Soppong (Pang Mapha)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🛵 Scooter / Minivan + Radeau bambou",
              lat: 19.5675,
              lng: 98.2789
            }
          ]
        },
        {
          id: "mae-hong-son-ban-rak-thai",
          label: "Mae Hong Son Ville, Ban Rak Thai & Pang Ung",
          lat: 19.302,
          lng: 97.9654,
          zoom: 10,
          activities: [
            {
              theme: "point-de-vue",
              title: "Village de Ban Rak Thai autour du lac, plantations de thé & lac forestier de Pang Ung",
              summary: "Maisons en terre au bord d'un lac entouré de théiers d'altitude et promenade matinale au milieu des pins et brumes de Pang Ung.",
              duration: "Demi-journée",
              departure: "Depuis Mae Hong Son ville",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🛵 Scooter / Voiture / Songthaew",
              lat: 19.5861,
              lng: 97.9436
            },
            {
              theme: "monument",
              title: "Wat Phra That Doi Kong Mu & temples de style birman Wat Chong Kham / Wat Chong Klang",
              summary: "Stupas blancs dominant toute la vallée de Mae Hong Son et temples au toit ouvragé reflétés dans le lac Jong Kham.",
              duration: "2h à 3h",
              departure: "Depuis le centre de Mae Hong Son",
              price: 0,
              priceLabel: "Gratuit (0 ฿)",
              transport: "🚶 À pied / Scooter / Tuk-tuk",
              lat: 19.2994,
              lng: 97.9597
            },
            {
              theme: "parc",
              title: "Pont en bambou de Su Tong Pae & parc national de Tham Pla - Namtok Pha Suea",
              summary: "Longue passerelle en bambou traversant les rizières jusqu'à un sanctuaire sur colline, grotte aux poissons et cascade en forêt.",
              duration: "2h à 3h",
              departure: "Depuis Mae Hong Son (route de Ban Rak Thai)",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🛵 Scooter / Voiture",
              lat: 19.3831,
              lng: 97.9614
            }
          ]
        }
      ]
    },
    {
      id: "sukhothai",
      title: "Province : 8. Sukhothai",
      mapLabel: "Sukhothai & Si Satchanalai",
      lat: 17.0156,
      lng: 99.823,
      zoom: 11,
      intro: "Berceau historique de l'écriture et des arts thaïs — Vastes parcs archéologiques classés UNESCO parsemés de lotus, de chédis et de musées.",
      islands: [
        {
          id: "sukhothai-parc-historique",
          label: "Parc historique de Sukhothai & Si Satchanalai",
          lat: 17.0225,
          lng: 99.7031,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Exploration du parc historique de Sukhothai (Wat Mahathat, Wat Si Sawai, Wat Sa Si & Wat Si Chum) à vélo",
              summary: "Ruines élégantes entourées de bassins fleuris de lotus et grand Bouddha assis de 15 mètres du Wat Si Chum dans un cadre paisible.",
              duration: "3h à 4h30",
              departure: "Depuis l'entrée du parc historique (Old Sukhothai)",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚲 Vélo / Tramway / À pied",
              lat: 17.0225,
              lng: 99.7031
            },
            {
              theme: "monument",
              title: "Temples des collines ouest (Wat Saphan Hin) & Musée national Ramkhamhaeng",
              summary: "Montée par un chemin de dalles d'ardoise vers un grand Bouddha debout dominant la plaine et découverte des collections de céramiques Sangkhalok.",
              duration: "2h à 3h",
              departure: "Depuis Old Sukhothai",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚲 Vélo / Scooter / À pied",
              lat: 17.0214,
              lng: 99.6756
            },
            {
              theme: "monument",
              title: "Excursion au parc historique de Si Satchanalai (Wat Chang Lom & Wat Chedi Chet Thaeo)",
              summary: "Ancienne cité sœur plus tranquille au bord de la rivière Yom, entourée d'arbres et de vestiges en latérite.",
              duration: "Demi-journée",
              departure: "Depuis Sukhothai (environ 55 km au nord)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚌 Bus local / Voiture + 🚲 Vélo",
              lat: 17.4317,
              lng: 99.7869
            },
            {
              theme: "parc",
              title: "Balade à vélo à travers les rizières, vergers et ateliers de céramique autour de la vieille ville",
              summary: "Chemins ruraux tranquilles reliant les temples périphériques (Wat Chetuphon) aux fours historiques de poterie.",
              duration: "2h à 3h",
              departure: "Depuis le parc historique de Sukhothai",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🚲 Vélo",
              lat: 17.018,
              lng: 99.692
            },
            {
              theme: "marche",
              title: "Dégustation des nouilles de Sukhothai (Kuay Teow Sukhothai) & marché du soir",
              summary: "Spécialité culinaire emblématique de la ville aux haricots verts, cacahuètes et citron vert, suivie d'une flânerie gourmande.",
              duration: "1h30 à 2h",
              departure: "Depuis Old Sukhothai ou New Sukhothai",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied / Songthaew / 🚲 Vélo",
              lat: 17.0078,
              lng: 99.8233
            }
          ]
        }
      ]
    },
    {
      id: "nakhon-ratchasima",
      title: "Province : 9. Nakhon Ratchasima (Khao Yai)",
      mapLabel: "Khao Yai & Phimai",
      lat: 14.4392,
      lng: 101.3724,
      zoom: 10,
      intro: "Porte de l'Isan — Premier parc national de Thaïlande classé UNESCO, cascades, faune sauvage, grottes aux chauves-souris et vestiges khmers.",
      islands: [
        {
          id: "parc-khao-yai",
          label: "Parc national de Khao Yai, Pak Chong & Phimai",
          lat: 14.4392,
          lng: 101.3724,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Randonnée en forêt & observation de la faune (calaos, gibbons, éléphants) à Khao Yai",
              summary: "Sentiers balisés (KM 33 - Nong Pak Chi ou Kong Kaew) à travers la forêt tropicale humide avec de belles chances d'observer oiseaux et mammifères.",
              duration: "3h à Journée",
              departure: "Depuis Pak Chong ou l'entrée du parc",
              price: 30,
              priceLabel: "~30 € (~1 120 ฿)/p",
              transport: "🚗 Voiture / Guide / Excursion",
              lat: 14.4392,
              lng: 101.3724
            },
            {
              theme: "parc",
              title: "Cascades de Haew Narok & Haew Suwat dans le parc national de Khao Yai",
              summary: "Chutes d'eau spectaculaires entourées de falaises et de jungle au cœur du parc.",
              duration: "1h30 à 3h",
              departure: "Depuis les routes intérieures de Khao Yai",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Voiture / Excursion",
              lat: 14.2875,
              lng: 101.3514
            },
            {
              theme: "point-de-vue",
              title: "Belvédère de Pha Trom Jai, tour d'observation de Nong Pak Chi & envol des chauves-souris à Khao Luk Chang",
              summary: "Panoramas sur les montagnes du parc, clairières d'observation de la faune et nuée spectaculaire de millions de chauves-souris au crépuscule.",
              duration: "2h à 3h",
              departure: "Depuis Khao Yai / Pak Chong",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Voiture / Excursion",
              lat: 14.5311,
              lng: 101.3539
            },
            {
              theme: "parc",
              title: "Source naturelle d'eau cristalline de Ban Tha Chang (Nam Phut Natural Spring)",
              summary: "Bassins naturels d'eau claire et turquoise alimentés par une source en bordure du parc, idéals pour se rafraîchir.",
              duration: "1h30 à 2h",
              departure: "Depuis Pak Chong / Mu Si",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🚗 Voiture / Scooter / Songthaew",
              lat: 14.5256,
              lng: 101.4167
            },
            {
              theme: "monument",
              title: "Temple blanc de Wat Thep Phithak Punnaram ou parc historique khmer de Phimai",
              summary: "Immense Bouddha blanc perché dans les collines de Pak Chong ou remarquable sanctuaire khmer en grès blanc au nord-est de Korat.",
              duration: "2h à Demi-journée",
              departure: "Depuis Pak Chong ou Nakhon Ratchasima",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚗 Voiture / Bus",
              lat: 15.2211,
              lng: 102.4939
            }
          ]
        }
      ]
    },
    {
      id: "chonburi",
      title: "Province : 10. Chonburi",
      mapLabel: "Chonburi — Sanctuaire de la Vérité, Koh Si Chang & Bang Saen",
      lat: 13.3611,
      lng: 100.9847,
      zoom: 10,
      intro: "Littoral est du golfe de Thaïlande — Architecture en bois sculpté au bord de l'eau, îles calmes, jardins botaniques, collines panoramiques et plages.",
      islands: [
        {
          id: "sanctuaire-verite-koh-si-chang",
          label: "Sanctuaire de la Vérité, Koh Si Chang, Pattaya & Bang Saen",
          lat: 13.205,
          lng: 100.8886,
          zoom: 11,
          activities: [
            {
              theme: "monument",
              title: "Visite du Sanctuaire de la Vérité (édifice monumental entièrement sculpté en bois)",
              summary: "Impressionnante structure en bois face à la mer dédiée aux philosophies et traditions asiatiques.",
              duration: "1h30 à 2h30",
              departure: "Depuis Naklua / Pattaya nord",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚕 Songthaew / Grab / Voiture",
              lat: 13.205,
              lng: 100.8886
            },
            {
              theme: "monument",
              title: "Grand Bouddha de Wat Phra Yai, colline de Pratumnak & Bouddha gravé de Khao Chi Chan",
              summary: "Statues monumentales et belvédères dominant la baie de Pattaya et les reliefs alentour.",
              duration: "2h à 3h",
              departure: "Depuis Pattaya / Sattahip",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🚕 Songthaew / Scooter / Grab",
              lat: 12.9175,
              lng: 100.8658
            },
            {
              theme: "activite",
              title: "Escapade à la journée sur l'île de Koh Si Chang (palais Phra Chudadhuj & crique Tham Phang)",
              summary: "Île paisible au rythme local accessible en courte traversée depuis Si Racha avec anciens pavillons royaux et plage calme.",
              duration: "Demi-journée à Journée",
              departure: "Depuis l'embarcadère de Koh Loy (Si Racha)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "⛴️ Bateau + Tuk-tuk local",
              lat: 13.1514,
              lng: 100.8089
            },
            {
              theme: "activite",
              title: "Excursion bateau & snorkeling vers Koh Larn ou Koh Samae San",
              summary: "Plages de sable clair, eaux limpides et fonds marins accessibles à la journée au large de Chonburi.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Bali Hai Pier (Pattaya) ou Sattahip",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "⛴️ Ferry / Speedboat",
              lat: 12.9172,
              lng: 100.7794
            },
            {
              theme: "parc",
              title: "Jardin tropical de Nong Nooch & colline aux singes de Khao Sam Muk (Bang Saen)",
              summary: "Immenses jardins paysagers et collections botaniques au sud de Pattaya, ou promontoire côtier face au golfe près de Bang Saen.",
              duration: "2h30 à 4h",
              departure: "Depuis Pattaya ou Bang Saen",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚗 Voiture / Songthaew / Grab",
              lat: 12.7661,
              lng: 100.9333
            },
            {
              theme: "marche",
              title: "Marché aux poissons d'Ang Sila, marché de nuit de Thepprasit ou Walking Street de Bang Saen",
              summary: "Fruits de mer frais, spécialités côtières et ambiance locale en soirée au bord du golfe.",
              duration: "1h30 à 2h30",
              departure: "Depuis Ang Sila, Bang Saen ou Pattaya",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚕 Songthaew / Grab / À pied",
              lat: 13.3414,
              lng: 100.9239
            }
          ]
        }
      ]
    },
    {
      id: "trat",
      title: "Province : 11. Trat (Koh Chang, Koh Kood & Koh Mak)",
      mapLabel: "Trat — Koh Chang, Koh Mak & Koh Kood",
      lat: 12.05,
      lng: 102.35,
      zoom: 9,
      intro: "Extrême est du golfe — Îles montagneuses et sauvages couvertes de forêt, cascades intérieures, mangroves et eaux claires.",
      islands: [
        {
          id: "koh-chang",
          label: "Koh Chang (côtes opposées)",
          lat: 12.0531,
          lng: 102.3236,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Découverte des deux côtés opposés de Koh Chang, cascades de Klong Plu & Than Mayom",
              summary: "Grande île verdoyante aux deux versants contrastés combinant cascades en forêt, baies calmes et couchers de soleil sur le golfe.",
              duration: "Demi-journée à Journée",
              departure: "Depuis l'embarcadère d'Ao Thammachat / Center Point",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "⛴️ Ferry + Songthaew / Scooter",
              lat: 12.0531,
              lng: 102.3236
            },
            {
              theme: "activite",
              title: "Sortie snorkeling en bateau vers le parc marin de Mu Ko Rang (Koh Rang, Koh Yak & Koh Wai)",
              summary: "Excursion maritime vers les récifs coralliens et plages de sable blanc au sud de Koh Chang.",
              duration: "Journée",
              departure: "Depuis Bang Bao Pier (Koh Chang)",
              price: 40,
              priceLabel: "~40 € (~1 490 ฿)/p",
              transport: "🚤 Bateau / Speedboat",
              lat: 11.7972,
              lng: 102.3853
            },
            {
              theme: "activite",
              title: "Kayak dans la mangrove de Salak Phet ou vers les îlots de Koh Man Nai / Koh Yuak",
              summary: "Navigation calme sur passerelles et canaux bordés de palétuviers au sud de Koh Chang ou pagayage le long des criques.",
              duration: "2h à Demi-journée",
              departure: "Depuis Salak Phet ou Kai Bae / Lonely Beach",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🛶 Kayak / Scooter",
              lat: 11.9769,
              lng: 102.3936
            },
            {
              theme: "point-de-vue",
              title: "Belvédère de Kai Bae, White Sand Beach & village sur pilotis de Bang Bao",
              summary: "Vue panoramique sur les îlots de la côte ouest, longues plages et balade sur la jetée animée de Bang Bao.",
              duration: "1h30 à 2h30",
              departure: "Depuis la côte ouest de Koh Chang",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🛵 Scooter / Songthaew",
              lat: 12.0215,
              lng: 102.2975
            },
            {
              theme: "rando",
              title: "Randonnée dans la jungle intérieure de Koh Chang ou ascension de Khao Laem",
              summary: "Sentiers escarpés au cœur de la forêt tropicale de l'île avec vues dégagées sur les baies.",
              duration: "3h à Demi-journée",
              departure: "Depuis Klong Son ou la côte ouest",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚶 Randonnée / Guide local",
              lat: 12.0833,
              lng: 102.3167
            }
          ]
        },
        {
          id: "koh-kood-koh-mak",
          label: "Koh Kood & Koh Mak",
          lat: 11.6756,
          lng: 102.5533,
          zoom: 11,
          activities: [
            {
              theme: "activite",
              title: "Kayak, snorkeling & détente sur les plages sauvages de Koh Kood (Ao Tapao, Bang Bao) & Koh Mak",
              summary: "Îles plus préservées aux cocoteraies, rivières bordées de forêt, pontons en bois et criques paisibles.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Laem Sok (Trat)",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🚤 Speedboat / Kayak",
              lat: 11.6756,
              lng: 102.5533
            },
            {
              theme: "parc",
              title: "Cascades de Khlong Chao & Huang Nam Keaw et arbres géants Makayuk à Koh Kood",
              summary: "Marche en forêt jusqu'aux bassins d'eau douce et découverte d'arbres centenaires au cœur de Koh Kood.",
              duration: "2h à 3h30",
              departure: "Depuis Ao Phrao / Klong Chao (Koh Kood)",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🛵 Scooter / Songthaew / À pied",
              lat: 11.6625,
              lng: 102.5361
            },
            {
              theme: "activite",
              title: "Balade à vélo sur Koh Mak & traversée en bateau vers l'îlot de Koh Kham",
              summary: "Routes plates sans trafic au milieu des plantations d'hévéas et courte traversée vers les rochers volcaniques noirs de Koh Kham.",
              duration: "Demi-journée",
              departure: "Depuis Ao Suan Yai (Koh Mak)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚲 Vélo + 🚤 Bateau / Kayak",
              lat: 11.8186,
              lng: 102.4792
            }
          ]
        }
      ]
    },
    {
      id: "prachuap-khiri-khan",
      title: "Province : 12. Prachuap Khiri Khan",
      mapLabel: "Prachuap Khiri Khan — Sam Roi Yot, Hua Hin & Ao Manao",
      lat: 12.1833,
      lng: 99.9667,
      zoom: 9,
      intro: "Littoral du golfe — Pics calcaires surgissant des marais, grotte illuminée, stations balnéaires historiques, cascades et longues baies calmes.",
      islands: [
        {
          id: "sam-roi-yot",
          label: "Parc national de Khao Sam Roi Yot, Hua Hin & Baie d'Ao Manao",
          lat: 12.2036,
          lng: 99.9989,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Marche jusqu'à la grotte de Phraya Nakhon & belvédères de Sam Roi Yot",
              summary: "Sentier côtier et forestier menant à une grotte abritant un pavillon royal éclairé par un puits de lumière.",
              duration: "3h à 4h",
              departure: "Depuis Bang Pu / Pranburi / Hua Hin",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚤 Bateau + Randonnée / Voiture",
              lat: 12.2036,
              lng: 99.9989
            },
            {
              theme: "point-de-vue",
              title: "Montée au belvédère de Khao Daeng & balade en bateau sur le canal Khao Daeng",
              summary: "Panorama spectaculaire sur les pitons calcaires de Sam Roi Yot et navigation calme au milieu des mangroves.",
              duration: "2h à 3h",
              departure: "Depuis le village de Khao Daeng (Sam Roi Yot)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚶 Randonnée + 🚤 Bateau long-tail",
              lat: 12.1356,
              lng: 99.9589
            },
            {
              theme: "parc",
              title: "Parc forestier de Pranburi (passerelle dans la mangrove) & baie d'Ao Manao / Khao Chong Krachok",
              summary: "Sentier sur pilotis dans la mangrove près de Hua Hin ou baignade dans la baie protégée d'Ao Manao à Prachuap Khiri Khan.",
              duration: "2h à 3h30",
              departure: "Depuis Pranburi, Hua Hin ou Prachuap Khiri Khan ville",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🛵 Scooter / Voiture / À pied",
              lat: 11.7875,
              lng: 99.8114
            },
            {
              theme: "monument",
              title: "Gare royale en bois de Hua Hin, Wat Huay Mongkol & palais Maruekhathaiyawan",
              summary: "Patrimoine architectural royal en teck au bord de la mer et sanctuaires emblématiques de la région de Hua Hin.",
              duration: "2h à 3h",
              departure: "Depuis Hua Hin / Cha-Am",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚕 Songthaew / Grab / Voiture",
              lat: 12.5672,
              lng: 99.9547
            },
            {
              theme: "marche",
              title: "Cicada Market, Tamarind Market & marché de nuit de Hua Hin",
              summary: "Marchés créatifs et gourmands en plein air réputés pour l'artisanat local, les concerts acoustiques et les fruits de mer.",
              duration: "1h30 à 3h",
              departure: "Depuis le centre ou le sud de Hua Hin (Khao Takiab)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚕 Songthaew vert / Grab / À pied",
              lat: 12.5336,
              lng: 99.9631
            }
          ]
        }
      ]
    },
    {
      id: "surat-thani",
      title: "Province : 13. Surat Thani (Khao Sok & Golfe)",
      mapLabel: "Surat Thani — Khao Sok, Koh Samui, Koh Phangan & Koh Tao",
      lat: 9.1382,
      lng: 99.3331,
      zoom: 8,
      intro: "Forêt tropicale millénaire, lac de Cheow Lan entouré de falaises calcaires, parc marin d'Ang Thong et archipel du golfe (Koh Samui, Koh Phangan, Koh Tao).",
      islands: [
        {
          id: "khao-sok-cheow-lan",
          label: "Parc de Khao Sok & Lac de Cheow Lan",
          lat: 8.9436,
          lng: 98.5269,
          zoom: 10,
          activities: [
            {
              theme: "activite",
              title: "Sortie en bateau sur le lac de Cheow Lan au milieu des pitons calcaires & nuit en bungalow flottant",
              summary: "Navigation sur un vaste lac d'émeraude entouré de falaises abruptes, formation rocheuse des Trois Frères et forêt dense.",
              duration: "Demi-journée à Nuitée",
              departure: "Depuis l'embarcadère de Ratchaprapha / Khao Sok",
              price: 55,
              priceLabel: "~55 € (~2 050 ฿)/p",
              transport: "🚤 Bateau long-tail / Voiture",
              lat: 8.9728,
              lng: 98.8131
            },
            {
              theme: "rando",
              title: "Randonnée dans la jungle de Khao Sok, exploration de grottes (Nam Talu / Pra Kay Petch) & safari nocturne",
              summary: "Exploration de la forêt tropicale humide, observation de la faune nocturne et traversée de grottes calcaires avec guide.",
              duration: "3h à Demi-journée",
              departure: "Depuis le village de Khao Sok ou les raft houses",
              price: 30,
              priceLabel: "~30 € (~1 120 ฿)/p",
              transport: "🚶 Randonnée / 🚤 Bateau",
              lat: 8.9125,
              lng: 98.5311
            },
            {
              theme: "activite",
              title: "Descente en canoë ou bouée (river tubing) sur la rivière Sok & pont suspendu de Khao Pang",
              summary: "Balade paisible au fil de l'eau au pied des falaises karstiques et vue depuis le pont suspendu face aux montagnes.",
              duration: "1h30 à 2h30",
              departure: "Depuis le village de Khao Sok / Baan Ta Khun",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🛶 Canoë / Bouée / À pied",
              lat: 8.9056,
              lng: 98.5308
            }
          ]
        },
        {
          id: "koh-tao-samui-phangan",
          label: "Koh Tao, Koh Samui, Koh Phangan & Parc marin d'Ang Thong",
          lat: 10.0956,
          lng: 99.8404,
          zoom: 9,
          activities: [
            {
              theme: "activite",
              title: "Snorkeling, plongée & tour en bateau à Koh Tao (Shark Bay, Ao Leuk, Mango Bay & Koh Nang Yuan)",
              summary: "Récifs coralliens accessibles depuis le rivage, tortues marines, pointes rocheuses et banc de sable reliant les trois îlots de Koh Nang Yuan.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Mae Haad / Sairee Beach (Koh Tao)",
              price: 45,
              priceLabel: "~45 € (~1 680 ฿)/p",
              transport: "🚤 Bateau long-tail / Speedboat",
              lat: 10.1186,
              lng: 99.8128
            },
            {
              theme: "activite",
              title: "Excursion bateau & kayak dans le parc national marin d'Ang Thong (lagon d'émeraude Thale Nai)",
              summary: "Archipel de 42 îles karstiques inhabitées entre Koh Samui et Koh Phangan avec kayak autour des grottes marines et belvédère.",
              duration: "Journée",
              departure: "Depuis Nathon / Bangrak (Koh Samui) ou Thong Sala (Koh Phangan)",
              price: 60,
              priceLabel: "~60 € (~2 240 ฿)/p",
              transport: "🚤 Speedboat / Bateau + 🛶 Kayak",
              lat: 9.6333,
              lng: 99.6667
            },
            {
              theme: "monument",
              title: "Temples & formations côtières de Koh Samui (Big Buddha, Wat Plai Laem & rochers Hin Ta Hin Yai)",
              summary: "Statues monumentales au nord-est de Samui, pavillons sur l'eau et formations granitiques emblématiques de Lamai.",
              duration: "2h à 3h",
              departure: "Depuis Bophut, Chaweng ou Lamai (Koh Samui)",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🛵 Scooter / Songthaew / Voiture",
              lat: 9.5711,
              lng: 100.0603
            },
            {
              theme: "point-de-vue",
              title: "Belvédère John-Suwan (Koh Tao), cascades de Na Muang (Samui) & plages/points de vue de Koh Phangan",
              summary: "Panoramas sur les baies turquoise de Chalok et Shark Bay, chutes d'eau en forêt et criques sauvages (Bottle Beach, Mae Haad / Koh Ma).",
              duration: "2h à Demi-journée",
              departure: "Depuis Koh Tao, Koh Phangan ou Koh Samui",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🛵 Scooter / Taxi 4x4 / Randonnée",
              lat: 10.0569,
              lng: 99.8289
            },
            {
              theme: "marche",
              title: "Fisherman's Village Walking Street (Bophut, Koh Samui) ou marché de nuit de Pantip (Koh Phangan)",
              summary: "Ruelles animées en bord de mer, spectacles de feu, artisanat et stands de fruits de mer et street food en soirée.",
              duration: "1h30 à 3h",
              departure: "Depuis Bophut (Samui) ou Thong Sala (Phangan)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚶 À pied / Songthaew / Scooter",
              lat: 9.5597,
              lng: 100.0319
            }
          ]
        }
      ]
    },
    {
      id: "phang-nga",
      title: "Province : 14. Phang Nga",
      mapLabel: "Phang Nga — Baie de Phang Nga, Koh Yao Noi, Koh Yao Yai, Khao Lak & Similan",
      lat: 8.13,
      lng: 98.61,
      zoom: 10,
      intro: "Baie de Phang Nga, Khao Lak, îles Similan et Surin, Koh Yao Yai et escapades autour de Koh Yao Noi vers Koh Hong, Paradise Island, Koh Ray et Koh Nok.",
      islands: [
        {
          id: "koh-yao-noi-iles",
          label: "Baie de Phang Nga, Koh Yao Noi, Koh Yao Yai, Khao Lak & Îles Similan",
          lat: 8.1289,
          lng: 98.6131,
          zoom: 10,
          activities: [
            {
              theme: "activite",
              title: "Excursion en bateau depuis Koh Yao Noi vers Koh Hong & Paradise Island",
              summary: "Sortie maritime vers des eaux claires, falaises calcaires et plages abritées autour de Koh Hong et Paradise Island.",
              duration: "Demi-journée à Journée",
              departure: "Depuis les plages ou embarcadères de Koh Yao Noi",
              price: 60,
              priceLabel: "~60 € (~2 240 ฿)/p",
              transport: "🚤 Bateau long-tail",
              lat: 8.0819,
              lng: 98.6789
            },
            {
              theme: "activite",
              title: "Sortie insulaire vers Koh Ray & Koh Nok au départ de Koh Yao Noi",
              summary: "Balade en mer tranquille vers les îlots et plages proches de Koh Yao Noi dans la baie.",
              duration: "Demi-journée",
              departure: "Depuis Koh Yao Noi",
              price: 45,
              priceLabel: "~45 € (~1 680 ฿)/p",
              transport: "🚤 Bateau long-tail",
              lat: 8.175,
              lng: 98.625
            },
            {
              theme: "parc",
              title: "Balade tranquille à vélo ou scooter sur Koh Yao Noi & banc de sable de Laem Haad (Koh Yao Yai)",
              summary: "Îles paisibles entre rizières, villages de pêcheurs, côte et langue de sable blanc face aux pitons calcaires.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Bang Rong Pier (Phuket) ou Thalane (Krabi)",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "⛴️ Bateau + Vélo / Scooter",
              lat: 8.1289,
              lng: 98.6131
            },
            {
              theme: "activite",
              title: "Baie de Phang Nga : kayak dans les grottes marines (Hong), James Bond Island & village sur pilotis de Koh Panyee",
              summary: "Exploration en canoë des lagons cachés sous les falaises karstiques, rocher Khao Phing Kan et village lacustre.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Surakul Pier (Phang Nga) ou Ao Por",
              price: 55,
              priceLabel: "~55 € (~2 050 ฿)/p",
              transport: "🚤 Bateau long-tail + 🛶 Kayak",
              lat: 8.2747,
              lng: 98.5014
            },
            {
              theme: "activite",
              title: "Excursion snorkeling ou plongée aux îles Similan ou îles Surin depuis Khao Lak",
              summary: "Archipels granitiques renommés pour leurs eaux cristallines, récifs coralliens, tortues et plages de sable fin.",
              duration: "Journée",
              departure: "Depuis Thap Lamu Pier ou Khura Buri (Khao Lak)",
              price: 85,
              priceLabel: "~85 € (~3 180 ฿)/p",
              transport: "🚤 Speedboat",
              lat: 8.6514,
              lng: 97.6431
            },
            {
              theme: "parc",
              title: "Cascades de Ton Chong Fa & Sai Rung, parc de Khao Lak-Lam Ru & mémorial du Tsunami (Ban Nam Khem)",
              summary: "Sentiers côtiers et cascades en forêt autour de Khao Lak, et visite émouvante du parc mémorial et du bateau de police 813.",
              duration: "2h30 à 4h",
              departure: "Depuis Khao Lak / Bang Niang",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🛵 Scooter / Taxi / Voiture",
              lat: 8.6361,
              lng: 98.2439
            },
            {
              theme: "point-de-vue",
              title: "Panorama de Samet Nangshe sur la baie de Phang Nga au lever du soleil",
              summary: "Point de vue très photogénique dominant les pitons calcaires émergeant de la mangrove et de la mer.",
              duration: "2h à 3h",
              departure: "Depuis Khlong Khian / Phang Nga",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Voiture / Songthaew",
              lat: 8.2414,
              lng: 98.5306
            }
          ]
        }
      ]
    },
    {
      id: "phuket",
      title: "Province : 15. Phuket",
      mapLabel: "Phuket — Vieille ville, caps, temples & plages",
      lat: 7.8804,
      lng: 98.3923,
      zoom: 11,
      intro: "Plus grande île de Thaïlande — Architecture sino-portugaise en vieille ville, grands temples, caps panoramiques, plages et sorties en mer.",
      islands: [
        {
          id: "phuket-old-town-promthep",
          label: "Phuket Old Town, Cap Promthep & Littoral de Phuket",
          lat: 7.7597,
          lng: 98.3056,
          zoom: 11,
          activities: [
            {
              theme: "monument",
              title: "Balade dans Phuket Old Town (Thalang Road, Soi Romanee, maisons sino-portugaises & street art)",
              summary: "Façades colorées, anciennes demeures de marchands (Chinpracha House) et ruelles animées du centre historique de Phuket.",
              duration: "2h à 3h",
              departure: "Depuis Thalang Road / Old Phuket Town",
              price: 0,
              priceLabel: "Gratuit (0 ฿)",
              transport: "🚶 À pied / Bus bleu / Grab",
              lat: 7.8849,
              lng: 98.3879
            },
            {
              theme: "monument",
              title: "Temple de Wat Chalong (Wat Chaiyathararam) & secteur du Big Buddha de Nakkerd",
              summary: "Plus grand et plus vénéré temple bouddhique de Phuket aux pavillons richement décorés et hauteurs panoramiques du sud de l'île.",
              duration: "1h30 à 2h30",
              departure: "Depuis Chalong / Kata / Phuket Town",
              price: 0,
              priceLabel: "Gratuit (0 ฿)",
              transport: "🛵 Scooter / Voiture / Grab",
              lat: 7.8467,
              lng: 98.3369
            },
            {
              theme: "point-de-vue",
              title: "Coucher de soleil au Cap Promthep, Windmill Viewpoint & belvédère de Karon (Three Beaches)",
              summary: "Pointe méridionale de l'île et belvédères côtiers offrant une vue dégagée sur les baies de Kata Noi, Kata, Karon et Nai Harn.",
              duration: "1h30 à 2h30",
              departure: "Depuis Rawai / Nai Harn / Kata",
              price: 0,
              priceLabel: "Gratuit (0 ฿)",
              transport: "🛵 Scooter / Voiture / Grab",
              lat: 7.7597,
              lng: 98.3056
            },
            {
              theme: "activite",
              title: "Sortie snorkeling ou bateau vers Coral Island (Koh Hey), Koh Racha ou Koh Khai",
              summary: "Journée ou demi-journée sur l'eau pour profiter des plages de sable blanc, criques et fonds marins proches de Phuket.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Chalong Pier ou Rawai",
              price: 55,
              priceLabel: "~55 € (~2 050 ฿)/p",
              transport: "🚤 Speedboat / Long-tail",
              lat: 7.7431,
              lng: 98.3736
            },
            {
              theme: "parc",
              title: "Plages sauvages du nord (Parc national de Sirinat / Nai Yang & Mai Khao) ou criques de Freedom / Banana Beach",
              summary: "Longues plages bordées de filaos près du parc national de Sirinat ou criques préservées accessibles à pied ou en bateau.",
              duration: "2h à Demi-journée",
              departure: "Depuis le nord-ouest ou la côte ouest de Phuket",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🛵 Scooter / Voiture / 🚤 Long-tail",
              lat: 8.0886,
              lng: 98.2981
            },
            {
              theme: "marche",
              title: "Sunday Walking Street Market (Lard Yai), Chillva Market ou marché de fruits de mer à Rawai",
              summary: "Spécialités du Sud, produits de la mer choisis sur place et ambiance vivante en fin de journée.",
              duration: "1h30 à 2h30",
              departure: "Depuis Old Town, Samkong ou Rawai",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚶 À pied / Grab / Scooter",
              lat: 7.886,
              lng: 98.389
            }
          ]
        }
      ]
    },
    {
      id: "krabi",
      title: "Province : 16. Krabi",
      mapLabel: "Krabi — Ao Nang, Plages de Railay, Îles Phi Phi & Koh Lanta",
      lat: 8.0863,
      lng: 98.9063,
      zoom: 10,
      intro: "Falaises calcaires spectaculaires, Ao Nang, plages de Railay, piscine d'Émeraude, îles Phi Phi et Koh Lanta.",
      islands: [
        {
          id: "ao-nang-plages-railay",
          label: "Ao Nang, Plages de Railay, Intérieur de Krabi & Koh Lanta",
          lat: 8.0119,
          lng: 98.8389,
          zoom: 10,
          activities: [
            {
              theme: "point-de-vue",
              title: "Escale à Ao Nang, plages de Railay (Phra Nang) & montée au point de vue / lagon de Railay",
              summary: "Découverte des plages encadrées de falaises calcaires de Railay, grotte de la princesse Phra Nang et vues plongeantes sur la côte.",
              duration: "3h à Demi-journée",
              departure: "Depuis Ao Nang ou Krabi Town",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚤 Bateau long-tail + Randonnée",
              lat: 8.0119,
              lng: 98.8389
            },
            {
              theme: "activite",
              title: "Excursion des 4 Îles (Koh Poda, Chicken Island, Tup & Mor Island) en long-tail boat",
              summary: "Navigation d'île en île au large d'Ao Nang avec banc de sable relié à marée basse (Thale Waek) et snorkeling.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Ao Nang ou Nopparat Thara",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🚤 Bateau long-tail / Speedboat",
              lat: 7.9697,
              lng: 98.8086
            },
            {
              theme: "parc",
              title: "Piscine d'Émeraude (Emerald Pool / Sa Morakot), Blue Pool & sources chaudes de Khlong Thom",
              summary: "Baignade dans un bassin naturel d'eau turquoise au cœur de la forêt de Khao Phra Bang Khram et cascades thermales.",
              duration: "Demi-journée",
              departure: "Depuis Krabi Town ou Ao Nang",
              price: 20,
              priceLabel: "~20 € (~750 ฿)/p",
              transport: "🚐 Minivan / Voiture / Scooter",
              lat: 7.9253,
              lng: 99.2683
            },
            {
              theme: "rando",
              title: "Randonnée au sommet de Dragon Crest (Khao Ngon Nak) & Monkey Trail d'Ao Nang",
              summary: "Ascension forestière offrant l'un des plus beaux panoramas de Krabi sur les pics karstiques et la mer d'Andaman.",
              duration: "3h à 4h",
              departure: "Depuis Tubkaek Beach / Ao Nang",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🛵 Scooter / Taxi + 🚶 Randonnée",
              lat: 8.0969,
              lng: 98.7581
            },
            {
              theme: "activite",
              title: "Séjour & balades sur Koh Lanta (Parc national de Mu Ko Lanta, Old Town & sortie snorkeling Koh Rok)",
              summary: "Étape insulaire paisible entre phare et plages du sud de Koh Lanta, maisons sur pilotis de Lanta Old Town et récifs de Koh Rok.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Koh Lanta ou Krabi",
              price: 30,
              priceLabel: "~30 € (~1 120 ฿)/p",
              transport: "⛴️ Ferry / Scooter / 🚤 Bateau",
              lat: 7.5525,
              lng: 99.0425
            },
            {
              theme: "monument",
              title: "Wat Tham Sua (Temple de la Tigresse) : 1 260 marches vers le sommet & Wat Kaew Korawaram",
              summary: "Ascension exigeante récompensée par un panorama étendu sur la jungle et les reliefs de Krabi, et temple blanc de Krabi Town.",
              duration: "2h à 3h",
              departure: "Depuis Krabi Town ou Ao Nang",
              price: 0,
              priceLabel: "Gratuit (0 ฿)",
              transport: "🚗 Voiture / Songthaew / Scooter",
              lat: 8.1256,
              lng: 98.925
            },
            {
              theme: "activite",
              title: "Kayak dans la mangrove de Ao Thalane ou escalade sur les falaises de Railay",
              summary: "Exploration de canyons de mangrove calmes ou initiation/pratique de l'escalade face à la mer d'Andaman.",
              duration: "2h30 à 4h",
              departure: "Depuis Ao Thalane ou Railay / Tonsai",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🛶 Kayak / Escalade / Bateau",
              lat: 8.1514,
              lng: 98.765
            },
            {
              theme: "marche",
              title: "Krabi Town Night Market (week-end) & marché de nuit d'Ao Nang Landmark",
              summary: "Ambiance conviviale en soirée autour des stands de street food du Sud, fruits de mer grillés et musique.",
              duration: "1h30 à 2h30",
              departure: "Depuis Krabi Town ou Nopparat Thara (Ao Nang)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚶 À pied / Songthaew / Tuk-tuk",
              lat: 8.0631,
              lng: 98.9167
            }
          ]
        },
        {
          id: "iles-phi-phi",
          label: "Îles Phi Phi & Îles de Hong",
          lat: 7.7414,
          lng: 98.7744,
          zoom: 11,
          activities: [
            {
              theme: "activite",
              title: "Excursion en bateau vers les îles Phi Phi ou l'archipel de Hong (lagon, kayak & plage)",
              summary: "Sortie maritime entre eaux turquoise, lagons entourés de falaises et criques de la mer d'Andaman.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Ao Nang / Krabi Town / Nopparat Thara",
              price: 55,
              priceLabel: "~55 € (~2 050 ฿)/p",
              transport: "🚤 Bateau long-tail / Speedboat + 🛶 Kayak",
              lat: 7.7414,
              lng: 98.7744
            },
            {
              theme: "point-de-vue",
              title: "Belvédère de Koh Phi Phi Don (Viewpoint 1, 2 & 3), Maya Bay, Pileh Lagoon & Bamboo Island",
              summary: "Vue panoramique sur les doubles baies de Phi Phi, lagon émeraude de Phi Phi Leh et sable blanc de Koh Mai Phai.",
              duration: "2h à Demi-journée",
              departure: "Depuis Tonsai Pier (Phi Phi Don)",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚶 Randonnée / 🚤 Bateau",
              lat: 7.7414,
              lng: 98.7744
            }
          ]
        }
      ]
    },
    {
      id: "trang",
      title: "Province : 17. Trang",
      mapLabel: "Trang — Koh Mook, Koh Kradan, Koh Ngai & Grotte d'Émeraude",
      lat: 7.5563,
      lng: 99.6114,
      zoom: 10,
      intro: "Côte sud-ouest plus discrète — Îles paisibles, plages de sable blanc, grotte marine menant à une crique intérieure et architecture sino-portugaise.",
      islands: [
        {
          id: "koh-mook-grotte-emeraude",
          label: "Koh Mook (Grotte d'Émeraude), Koh Kradan, Koh Ngai & Trang Ville",
          lat: 7.365,
          lng: 99.2986,
          zoom: 10,
          activities: [
            {
              theme: "activite",
              title: "Baignade à travers la Grotte d'Émeraude (Morakot Cave) à Koh Mook & plages de Koh Kradan",
              summary: "Passage à la nage dans un tunnel rocheux de 80 m débouchant sur une crique entourée de falaises, puis détente insulaire.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Kuan Tung Ku ou Pak Meng Pier (Trang)",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🚤 Bateau long-tail",
              lat: 7.365,
              lng: 99.2986
            },
            {
              theme: "parc",
              title: "Snorkeling sur les récifs au large de Koh Kradan, Koh Ngai & Koh Chueak",
              summary: "Eau limpide, coraux colorés et plages calmes sans routes ni voitures sur les îles préservées de la côte de Trang.",
              duration: "2h à Journée",
              departure: "Depuis Koh Kradan, Koh Mook ou Pak Meng Pier",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚤 Bateau / À la nage",
              lat: 7.3119,
              lng: 99.2536
            },
            {
              theme: "point-de-vue",
              title: "Coucher de soleil à Charlie Beach (Haad Farang) & Sabai Beach sur Koh Mook",
              summary: "Plages sauvages bordées de cocotiers et de falaises à l'ouest de Koh Mook, idéales en fin de journée.",
              duration: "1h30 à 2h30",
              departure: "Depuis le village de Koh Mook",
              price: 5,
              priceLabel: "~5 € (~190 ฿)/p",
              transport: "🚶 À pied / Side-car local",
              lat: 7.3728,
              lng: 99.2869
            },
            {
              theme: "parc",
              title: "Grotte de Le Khao Kob (balade en barque souterraine) & jardin botanique Thung Khai",
              summary: "Navigation allongé en barque sous les stalactites de la grotte de Khao Kob ou passerelle dans la canopée de Thung Khai.",
              duration: "2h à 3h",
              departure: "Depuis Trang ville / Huai Yot",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🚗 Voiture / Minivan / 🚤 Barque",
              lat: 7.7942,
              lng: 99.5736
            },
            {
              theme: "marche",
              title: "Balade dans Trang Old Town (maisons sino-portugaises, street art) & marché de nuit de Cinta Garden",
              summary: "Découverte des façades historiques, petits-déjeuners dim sum de Trang et marché nocturne animé du centre-ville.",
              duration: "1h30 à 2h30",
              departure: "Depuis la gare de Trang / centre-ville",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied / Tuk-tuk tête de grenouille",
              lat: 7.5561,
              lng: 99.6083
            }
          ]
        }
      ]
    },
    {
      id: "satun",
      title: "Province : 18. Satun (Koh Lipe & Parc de Tarutao)",
      mapLabel: "Satun — Koh Lipe, Koh Adang, Koh Bulon & Parc de Tarutao",
      lat: 6.4897,
      lng: 99.3008,
      zoom: 11,
      intro: "Extrême sud de la mer d'Andaman — Eaux limpides, récifs coralliens proches des plages, îles sauvages et parc marin national de Tarutao.",
      islands: [
        {
          id: "koh-lipe-tarutao",
          label: "Koh Lipe, Koh Adang, Koh Rawi & Parc marin de Tarutao",
          lat: 6.4897,
          lng: 99.3008,
          zoom: 11,
          activities: [
            {
              theme: "activite",
              title: "Snorkeling sur les récifs autour de Koh Lipe, Koh Adang, Koh Rawi & Jabang",
              summary: "Sorties en bateau long-tail vers les jardins de coraux mous colorés, eaux cristallines et îles préservées de l'archipel d'Adang-Rawi.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Pattaya Beach / Sunrise Beach (Koh Lipe)",
              price: 35,
              priceLabel: "~35 € (~1 310 ฿)/p",
              transport: "🚤 Bateau long-tail",
              lat: 6.4897,
              lng: 99.3008
            },
            {
              theme: "rando",
              title: "Montée au point de vue de Chado Cliff & cascade des Pirates sur l'île sauvage de Koh Adang",
              summary: "Sentier forestier en face de Koh Lipe menant à trois belvédères dominant l'archipel et les eaux turquoise.",
              duration: "2h à 3h30",
              departure: "Depuis Koh Lipe (courte traversée vers Koh Adang)",
              price: 25,
              priceLabel: "~25 € (~930 ฿)/p",
              transport: "🚤 Long-tail + Randonnée",
              lat: 6.535,
              lng: 99.255
            },
            {
              theme: "activite",
              title: "Kayak transparent ou paddle vers Koh Kra & Koh Usen depuis Sunrise Beach (Koh Lipe)",
              summary: "Courte traversée calme depuis la plage de Sunrise Beach pour explorer les récifs peu profonds autour des îlots voisins.",
              duration: "1h30 à 2h30",
              departure: "Depuis Sunrise Beach (Koh Lipe)",
              price: 15,
              priceLabel: "~15 € (~560 ฿)/p",
              transport: "🛶 Kayak / Paddle",
              lat: 6.4925,
              lng: 99.3106
            },
            {
              theme: "parc",
              title: "Escapade sur les îles paisibles de Koh Tarutao (Ao Son, grotte Crocodile) ou Koh Bulon Leh",
              summary: "Îles préservées du parc marin national de Satun entre forêts côtières, mangroves et longues plages désertes.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Pak Bara Pier (Satun) ou Koh Lipe",
              price: 30,
              priceLabel: "~30 € (~1 120 ฿)/p",
              transport: "🚤 Speedboat / Ferry",
              lat: 6.6667,
              lng: 99.65
            },
            {
              theme: "marche",
              title: "Flânerie sur Walking Street & coucher/lever de soleil sur Sunset, North Point & Sunrise Beach",
              summary: "Ambiance insulaire animée le soir sur la rue piétonne et superbes lumières sur le banc de sable de North Point.",
              duration: "1h30 à 3h",
              departure: "Depuis le centre de Koh Lipe",
              price: 10,
              priceLabel: "~10 € (~370 ฿)/p",
              transport: "🚶 À pied",
              lat: 6.491,
              lng: 99.296
            }
          ]
        }
      ]
    }
  ]
};
