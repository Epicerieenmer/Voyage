const VISITOR_REGIONS_DATA = {
  // ==================== OCÉANIE ====================
  "Australie": {
    flag: "🇦🇺",
    continent: "Océanie",
    subcontinent: "Australasie",
    lat: -25.2744,
    lng: 133.7751,
    zoom: 4,
    unit: "États / territoires",
    regions: [
      { name: "Queensland (QLD)", lat: -26.75, lng: 152.95 },
      { name: "Nouvelle-Galles du Sud (NSW)", lat: -33.8688, lng: 151.2093 },
      { name: "Victoria (VIC)", lat: -37.8136, lng: 144.9631 },
      { name: "Australie-Occidentale (WA)", lat: -31.9505, lng: 115.8605 },
      { name: "Australie-Méridionale (SA)", lat: -34.9285, lng: 138.6007 },
      { name: "Tasmanie (TAS)", lat: -42.8821, lng: 147.3272 },
      { name: "Territoire du Nord (NT)", lat: -25.3444, lng: 131.0369 },
      { name: "Territoire de la Capitale Australienne (ACT)", lat: -35.2809, lng: 149.13 }
    ]
  },
  "Nouvelle-Zélande": {
    flag: "🇳🇿",
    continent: "Océanie",
    subcontinent: "Australasie",
    lat: -40.9006,
    lng: 174.886,
    zoom: 5,
    unit: "régions / îles",
    regions: [
      { name: "Northland", lat: -35.426, lng: 173.926 },
      { name: "Auckland", lat: -36.8485, lng: 174.7633 },
      { name: "Waikato", lat: -37.787, lng: 175.2793 },
      { name: "Bay of Plenty", lat: -37.6878, lng: 176.1651 },
      { name: "Gisborne", lat: -38.6623, lng: 178.0176 },
      { name: "Hawke's Bay", lat: -39.6333, lng: 176.85 },
      { name: "Taranaki", lat: -39.2966, lng: 174.062 },
      { name: "Manawatu-Whanganui", lat: -40.242, lng: 175.475 },
      { name: "Wellington", lat: -41.2865, lng: 174.7762 },
      { name: "Tasman", lat: -41.456, lng: 172.592 },
      { name: "Nelson", lat: -41.2706, lng: 173.284 },
      { name: "Marlborough", lat: -41.5134, lng: 173.9612 },
      { name: "West Coast", lat: -42.45, lng: 171.2 },
      { name: "Canterbury", lat: -43.5321, lng: 172.6362 },
      { name: "Otago", lat: -45.0312, lng: 168.6626 },
      { name: "Southland", lat: -46.4132, lng: 168.3538 }
    ]
  },
  "Fidji": {
    flag: "🇫🇯",
    continent: "Océanie",
    subcontinent: "Mélanésie",
    lat: -17.7134,
    lng: 178.065,
    zoom: 7,
    unit: "divisions / îles",
    regions: [
      { name: "Division centrale (Viti Levu)", lat: -18.1416, lng: 178.4419 },
      { name: "Division occidentale (Nadi / Yasawa / Mamanuca)", lat: -17.7765, lng: 177.4356 },
      { name: "Division septentrionale (Vanua Levu / Taveuni)", lat: -16.576, lng: 179.357 },
      { name: "Division orientale (Lau / Lomaiviti)", lat: -18.234, lng: -178.815 },
      { name: "Rotuma", lat: -12.5025, lng: 177.0825 }
    ]
  },
  "Nouvelle-Calédonie": {
    flag: "🇳🇨",
    continent: "Océanie",
    subcontinent: "Mélanésie",
    lat: -20.9043,
    lng: 165.618,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "Province Sud (Nouméa / Île des Pins)", lat: -22.2758, lng: 166.458 },
      { name: "Province Nord (Koné / Poindimié)", lat: -20.956, lng: 164.862 },
      { name: "Province des îles Loyauté (Lifou / Maré / Ouvéa)", lat: -20.858, lng: 167.235 }
    ]
  },
  "Papouasie-Nouvelle-Guinée": {
    flag: "🇵🇬",
    continent: "Océanie",
    subcontinent: "Mélanésie",
    lat: -6.315,
    lng: 143.9555,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "Central", lat: -9.4438, lng: 147.1803 },
      { name: "Eastern Highlands", lat: -6.5833, lng: 145.6667 },
      { name: "East New Britain", lat: -4.6, lng: 152.0 },
      { name: "East Sepik", lat: -3.55, lng: 143.6333 },
      { name: "Enga", lat: -5.45, lng: 143.6 },
      { name: "Gulf", lat: -7.75, lng: 145.5 },
      { name: "Hela", lat: -5.95, lng: 142.75 },
      { name: "Jiwaka", lat: -5.8, lng: 144.65 },
      { name: "Madang", lat: -5.2215, lng: 145.7878 },
      { name: "Manus", lat: -2.05, lng: 147.0 },
      { name: "Milne Bay", lat: -10.3167, lng: 150.25 },
      { name: "Morobe", lat: -6.7333, lng: 147.0 },
      { name: "New Ireland", lat: -3.3333, lng: 151.8333 },
      { name: "Oro (Northern)", lat: -8.9, lng: 148.3 },
      { name: "Région autonome de Bougainville", lat: -6.2, lng: 155.5667 },
      { name: "Sandaun (West Sepik)", lat: -3.6667, lng: 141.75 },
      { name: "Southern Highlands", lat: -6.15, lng: 143.65 },
      { name: "Western", lat: -7.5, lng: 141.5 },
      { name: "Western Highlands", lat: -5.85, lng: 144.2333 },
      { name: "Port Moresby (NCD)", lat: -9.479, lng: 147.1494 }
    ]
  },
  "Îles Salomon": {
    flag: "🇸🇧",
    continent: "Océanie",
    subcontinent: "Mélanésie",
    lat: -9.6457,
    lng: 160.1562,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Guadalcanal (Honiara)", lat: -9.4333, lng: 159.95 },
      { name: "Province occidentale (Gizo / Munda)", lat: -8.103, lng: 156.8419 },
      { name: "Malaita", lat: -8.95, lng: 161.0 },
      { name: "Makira-Ulawa", lat: -10.5833, lng: 161.8 },
      { name: "Isabel", lat: -8.0, lng: 159.1667 },
      { name: "Province centrale", lat: -9.1, lng: 160.15 },
      { name: "Choiseul", lat: -7.05, lng: 157.0 },
      { name: "Rennell et Bellona", lat: -11.6667, lng: 160.25 },
      { name: "Temotu", lat: -10.7167, lng: 165.8333 }
    ]
  },
  "Vanuatu": {
    flag: "🇻🇺",
    continent: "Océanie",
    subcontinent: "Mélanésie",
    lat: -15.3767,
    lng: 166.9592,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Shéfa (Éfaté / Port-Vila)", lat: -17.7333, lng: 168.3167 },
      { name: "Sanma (Espiritu Santo / Luganville)", lat: -15.519, lng: 167.162 },
      { name: "Malampa (Malakula)", lat: -16.4, lng: 167.5 },
      { name: "Taféa (Tanna)", lat: -19.5, lng: 169.4167 },
      { name: "Pénama (Pentecôte / Ambae / Maéwo)", lat: -15.5, lng: 168.0 },
      { name: "Torba (Îles Banks et Torres)", lat: -13.8333, lng: 167.5 }
    ]
  },
  "Kiribati": {
    flag: "🇰🇮",
    continent: "Océanie",
    subcontinent: "Micronésie",
    lat: 1.8709,
    lng: -157.3629,
    zoom: 4,
    unit: "groupes d'îles",
    regions: [
      { name: "Îles Gilbert (Tarawa)", lat: 1.329, lng: 172.979 },
      { name: "Îles de la Ligne (Kiritimati)", lat: 1.8721, lng: -157.4278 },
      { name: "Îles Phœnix", lat: -3.7, lng: -171.7 }
    ]
  },
  "Îles Marshall": {
    flag: "🇲🇭",
    continent: "Océanie",
    subcontinent: "Micronésie",
    lat: 7.1315,
    lng: 171.1845,
    zoom: 5,
    unit: "atolls / îles",
    regions: [
      { name: "Majuro", lat: 7.0897, lng: 171.3803 },
      { name: "Kwajalein", lat: 8.7167, lng: 167.7333 },
      { name: "Bikini", lat: 11.5833, lng: 165.3833 },
      { name: "Rongelap", lat: 11.35, lng: 166.85 },
      { name: "Arno", lat: 7.0667, lng: 171.55 }
    ]
  },
  "Micronésie": {
    flag: "🇫🇲",
    continent: "Océanie",
    subcontinent: "Micronésie",
    lat: 7.4256,
    lng: 150.5508,
    zoom: 5,
    unit: "États",
    regions: [
      { name: "Pohnpei (Palikir)", lat: 6.9167, lng: 158.1833 },
      { name: "Chuuk", lat: 7.4256, lng: 151.786 },
      { name: "Yap", lat: 9.5167, lng: 138.1167 },
      { name: "Kosrae", lat: 5.3167, lng: 162.9833 }
    ]
  },
  "Nauru": {
    flag: "🇳🇷",
    continent: "Océanie",
    subcontinent: "Micronésie",
    lat: -0.5228,
    lng: 166.9315,
    zoom: 12,
    unit: "districts",
    regions: [
      { name: "Yaren", lat: -0.5467, lng: 166.9211 },
      { name: "Aiwo", lat: -0.5333, lng: 166.9133 },
      { name: "Meneng", lat: -0.5469, lng: 166.9356 },
      { name: "Anabar", lat: -0.5133, lng: 166.9517 }
    ]
  },
  "Palaos": {
    flag: "🇵🇼",
    continent: "Océanie",
    subcontinent: "Micronésie",
    lat: 7.515,
    lng: 134.5825,
    zoom: 8,
    unit: "États",
    regions: [
      { name: "Koror", lat: 7.3426, lng: 134.4789 },
      { name: "Babeldaob (Melekeok / Ngerulmud)", lat: 7.5004, lng: 134.6236 },
      { name: "Peleliu", lat: 7.0222, lng: 134.2556 },
      { name: "Angaur", lat: 6.9, lng: 134.1333 }
    ]
  },
  "Polynésie française": {
    flag: "🇵🇫",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -17.6797,
    lng: -149.4068,
    zoom: 5,
    unit: "archipels",
    regions: [
      { name: "Îles du Vent (Tahiti, Moorea)", lat: -17.6797, lng: -149.4068 },
      { name: "Îles Sous-le-Vent (Bora Bora, Raiatea, Huahine)", lat: -16.5004, lng: -151.7415 },
      { name: "Archipel des Tuamotu", lat: -15.1469, lng: -147.6536 },
      { name: "Archipel des Marquises", lat: -8.909, lng: -140.002 },
      { name: "Îles Australes", lat: -23.35, lng: -149.4833 }
    ]
  },
  "Samoa": {
    flag: "🇼🇸",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -13.759,
    lng: -172.1046,
    zoom: 8,
    unit: "îles / districts",
    regions: [
      { name: "Upolu (Apia)", lat: -13.8333, lng: -171.75 },
      { name: "Savai'i", lat: -13.6, lng: -172.4167 },
      { name: "Manono et Apolima", lat: -13.85, lng: -172.1 }
    ]
  },
  "Tonga": {
    flag: "🇹🇴",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -21.1789,
    lng: -175.1982,
    zoom: 7,
    unit: "divisions",
    regions: [
      { name: "Tongatapu (Nuku'alofa)", lat: -21.2114, lng: -175.1506 },
      { name: "Vava'u", lat: -18.65, lng: -173.9833 },
      { name: "Ha'apai", lat: -19.75, lng: -174.3667 },
      { name: "'Eua", lat: -21.3833, lng: -174.9333 },
      { name: "Niuas", lat: -15.95, lng: -173.7833 }
    ]
  },
  "Tuvalu": {
    flag: "🇹🇻",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -7.1095,
    lng: 177.6493,
    zoom: 7,
    unit: "îles / atolls",
    regions: [
      { name: "Funafuti", lat: -8.5211, lng: 179.1962 },
      { name: "Nanumea", lat: -5.6833, lng: 176.1167 },
      { name: "Nui", lat: -7.2333, lng: 177.15 },
      { name: "Vaitupu", lat: -7.4833, lng: 178.6833 }
    ]
  },
  // ==================== AMÉRIQUES ====================
 
   // ==================== AMÉRIQUES (ajouts) ====================
  "Anguilla": {
    flag: "🇦🇮",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.2206,
    lng: -63.0686,
    zoom: 11,
    unit: "districts",
    regions: [
      { name: "Anguilla", lat: 18.2206, lng: -63.0686 }
    ]
  },
  "Saint-Martin": {
    flag: "🇸🇽",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.0708,
    lng: -63.0501,
    zoom: 11,
    unit: "secteurs",
    regions: [
      { name: "Saint-Martin (partie française)", lat: 18.0731, lng: -63.0497 },
      { name: "Sint Maarten (partie néerlandaise)", lat: 18.0425, lng: -63.0548 }
    ]
  },
  "Saint-Barthélemy": {
    flag: "🇧🇱",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 17.9000,
    lng: -62.8333,
    zoom: 12,
    unit: "quartiers / secteurs",
    regions: [
      { name: "Saint-Barthélemy", lat: 17.9000, lng: -62.8333 }
    ]
  },
  "Îles Vierges britanniques": {
    flag: "🇻🇬",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.4207,
    lng: -64.6400,
    zoom: 10,
    unit: "îles",
    regions: [
      { name: "Îles Vierges britanniques", lat: 18.4207, lng: -64.6400 }
    ]
  },
  "Îles Vierges des États-Unis": {
    flag: "🇻🇮",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.3358,
    lng: -64.8963,
    zoom: 10,
    unit: "îles",
    regions: [
      { name: "Îles Vierges des États-Unis", lat: 18.3358, lng: -64.8963 }
    ]
  },
  "Îles Caïmans": {
    flag: "🇰🇾",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 19.3133,
    lng: -81.2546,
    zoom: 10,
    unit: "îles / districts",
    regions: [
      { name: "Îles Caïmans", lat: 19.3133, lng: -81.2546 }
    ]
  },
  "Îles Turques-et-Caïques": {
    flag: "🇹🇨",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 21.6940,
    lng: -71.7979,
    zoom: 9,
    unit: "îles",
    regions: [
      { name: "Îles Turques-et-Caïques", lat: 21.6940, lng: -71.7979 }
    ]
  },
  "Aruba": {
    flag: "🇦🇼",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 12.5211,
    lng: -69.9683,
    zoom: 11,
    unit: "régions / secteurs",
    regions: [
      { name: "Aruba", lat: 12.5211, lng: -69.9683 }
    ]
  },
  "Curaçao": {
    flag: "🇨🇼",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 12.1696,
    lng: -68.9900,
    zoom: 11,
    unit: "secteurs",
    regions: [
      { name: "Curaçao", lat: 12.1696, lng: -68.9900 }
    ]
  },
  "Bonaire / Pays-Bas caribéens": {
    flag: "🇧🇶",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 12.1784,
    lng: -68.2385,
    zoom: 10,
    unit: "îles",
    regions: [
      { name: "Bonaire / Pays-Bas caribéens", lat: 12.1784, lng: -68.2385 }
    ]
  },
  "Montserrat": {
    flag: "🇲🇸",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 16.7425,
    lng: -62.1874,
    zoom: 11,
    unit: "paroisses / secteurs",
    regions: [
      { name: "Montserrat", lat: 16.7425, lng: -62.1874 }
    ]
  },
  "Bermudes": {
    flag: "🇧🇲",
    continent: "Amériques",
    subcontinent: "Amérique du Nord",
    lat: 32.3078,
    lng: -64.7505,
    zoom: 11,
    unit: "paroisses",
    regions: [
      { name: "Bermudes", lat: 32.3078, lng: -64.7505 }
    ]
  },
  "Saint-Pierre-et-Miquelon": {
    flag: "🇵🇲",
    continent: "Amériques",
    subcontinent: "Amérique du Nord",
    lat: 46.8852,
    lng: -56.3159,
    zoom: 10,
    unit: "îles",
    regions: [
      { name: "Saint-Pierre-et-Miquelon", lat: 46.8852, lng: -56.3159 }
    ]
  },
  "Îles Malouines / Falkland": {
    flag: "🇫🇰",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -51.7963,
    lng: -59.5236,
    zoom: 7,
    unit: "îles",
    regions: [
      { name: "Îles Malouines / Falkland", lat: -51.7963, lng: -59.5236 }
    ]
  },

  // ==================== OCÉANIE (ajouts) ====================
  "Hawaï": {
    flag: "🇺🇸",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: 19.8968,
    lng: -155.5828,
    zoom: 7,
    unit: "îles",
    regions: [
      { name: "Oʻahu (Honolulu / Waikīkī)", lat: 21.3069, lng: -157.8583 },
      { name: "Maui (Haleakalā / Hāna)", lat: 20.7984, lng: -156.3319 },
      { name: "Hawaï / Big Island (Kona / Hilo / Volcans)", lat: 19.5429, lng: -155.6659 },
      { name: "Kauaʻi (Nā Pali / Waimea)", lat: 22.0964, lng: -159.5261 },
      { name: "Molokaʻi & Lānaʻi", lat: 21.1444, lng: -157.0226 }
    ]
  },
  "Île de Pâques": {
    flag: "🇨🇱",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -27.1127,
    lng: -109.3497,
    zoom: 11,
    unit: "secteurs / sites",
    regions: [
      { name: "Hanga Roa", lat: -27.1533, lng: -109.4272 },
      { name: "Rano Raraku (Carrière des Moaï)", lat: -27.1258, lng: -109.2869 },
      { name: "Ahu Tongariki", lat: -27.1258, lng: -109.2772 },
      { name: "Rano Kau & Orongo", lat: -27.1856, lng: -109.4422 },
      { name: "Anakena", lat: -27.0744, lng: -109.3228 }
    ]
  },

  "Guam": {
    flag: "🇬🇺",
    continent: "Océanie",
    subcontinent: "Micronésie",
    lat: 13.4443,
    lng: 144.7937,
    zoom: 10,
    unit: "villages / secteurs",
    regions: [
      { name: "Guam", lat: 13.4443, lng: 144.7937 }
    ]
  },
  "Îles Mariannes du Nord": {
    flag: "🇲🇵",
    continent: "Océanie",
    subcontinent: "Micronésie",
    lat: 15.0979,
    lng: 145.6739,
    zoom: 8,
    unit: "municipalités / îles",
    regions: [
      { name: "Îles Mariannes du Nord", lat: 15.0979, lng: 145.6739 }
    ]
  },
  "Samoa américaines": {
    flag: "🇦🇸",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -14.2710,
    lng: -170.1322,
    zoom: 9,
    unit: "districts / îles",
    regions: [
      { name: "Samoa américaines", lat: -14.2710, lng: -170.1322 }
    ]
  },
  "Îles Cook": {
    flag: "🇨🇰",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -21.2367,
    lng: -159.7777,
    zoom: 7,
    unit: "îles",
    regions: [
      { name: "Îles Cook", lat: -21.2367, lng: -159.7777 }
    ]
  },
  "Niue": {
    flag: "🇳🇺",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -19.0544,
    lng: -169.8672,
    zoom: 11,
    unit: "villages",
    regions: [
      { name: "Niue", lat: -19.0544, lng: -169.8672 }
    ]
  },
  "Tokelau": {
    flag: "🇹🇰",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -9.2002,
    lng: -171.8484,
    zoom: 9,
    unit: "atolls",
    regions: [
      { name: "Tokelau", lat: -9.2002, lng: -171.8484 }
    ]
  },
  "Wallis-et-Futuna": {
    flag: "🇼🇫",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -13.7688,
    lng: -177.1561,
    zoom: 9,
    unit: "îles / circonscriptions",
    regions: [
      { name: "Wallis-et-Futuna", lat: -13.7688, lng: -177.1561 }
    ]
  },
  "Îles Pitcairn": {
    flag: "🇵🇳",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: -24.7036,
    lng: -127.4393,
    zoom: 9,
    unit: "îles",
    regions: [
      { name: "Îles Pitcairn", lat: -24.7036, lng: -127.4393 }
    ]
  },
  "Île Norfolk": {
    flag: "🇳🇫",
    continent: "Océanie",
    subcontinent: "Australasie",
    lat: -29.0408,
    lng: 167.9547,
    zoom: 11,
    unit: "secteurs",
    regions: [
      { name: "Île Norfolk", lat: -29.0408, lng: 167.9547 }
    ]
  },

  // ==================== EUROPE (ajouts) ====================
  "Îles Féroé": {
    flag: "🇫🇴",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 61.8926,
    lng: -6.9118,
    zoom: 8,
    unit: "îles / régions",
    regions: [
      { name: "Îles Féroé", lat: 61.8926, lng: -6.9118 }
    ]
  },
  "Gibraltar": {
    flag: "🇬🇮",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 36.1408,
    lng: -5.3536,
    zoom: 13,
    unit: "secteurs",
    regions: [
      { name: "Gibraltar", lat: 36.1408, lng: -5.3536 }
    ]
  },
  "Île de Man": {
    flag: "🇮🇲",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 54.2361,
    lng: -4.5481,
    zoom: 10,
    unit: "sheaddings / régions",
    regions: [
      { name: "Île de Man", lat: 54.2361, lng: -4.5481 }
    ]
  },
  "Jersey": {
    flag: "🇯🇪",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 49.2144,
    lng: -2.1313,
    zoom: 11,
    unit: "paroisses",
    regions: [
      { name: "Jersey", lat: 49.2144, lng: -2.1313 }
    ]
  },
  "Guernesey": {
    flag: "🇬🇬",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 49.4657,
    lng: -2.5853,
    zoom: 11,
    unit: "paroisses / îles",
    regions: [
      { name: "Guernesey", lat: 49.4657, lng: -2.5853 }
    ]
  },
  "Îles Åland": {
    flag: "🇦🇽",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 60.1785,
    lng: 19.9156,
    zoom: 9,
    unit: "municipalités / îles",
    regions: [
      { name: "Îles Åland", lat: 60.1785, lng: 19.9156 }
    ]
  },

  // ==================== ASIE (ajouts) ====================
  "Hong Kong": {
    flag: "🇭🇰",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 22.3193,
    lng: 114.1694,
    zoom: 10,
    unit: "districts / îles",
    regions: [
      { name: "Hong Kong", lat: 22.3193, lng: 114.1694 }
    ]
  },
  "Macao": {
    flag: "🇲🇴",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 22.1987,
    lng: 113.5439,
    zoom: 12,
    unit: "zones / îles",
    regions: [
      { name: "Macao", lat: 22.1987, lng: 113.5439 }
    ]
  },

  // ==================== AFRIQUE (ajouts) ====================
  "Mayotte": {
    flag: "🇾🇹",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -12.8275,
    lng: 45.1662,
    zoom: 10,
    unit: "communes / secteurs",
    regions: [
      { name: "Mayotte", lat: -12.8275, lng: 45.1662 }
    ]
  },
  "Sainte-Hélène, Ascension et Tristan da Cunha": {
    flag: "🇸🇭",
    continent: "Afrique",
    subcontinent: "Afrique australe",
    lat: -15.9650,
    lng: -5.7160,
    zoom: 8,
    unit: "îles",
    regions: [
      { name: "Sainte-Hélène, Ascension et Tristan da Cunha", lat: -15.9650, lng: -5.7160 }
    ]
  },


  "Canada": {
    flag: "🇨🇦",
    continent: "Amériques",
    subcontinent: "Amérique du Nord",
    lat: 56.1304,
    lng: -106.3468,
    zoom: 3,
    unit: "provinces / territoires",
    regions: [
      { name: "Colombie-Britannique", lat: 53.7267, lng: -127.6476 },
      { name: "Alberta", lat: 53.9333, lng: -116.5765 },
      { name: "Saskatchewan", lat: 52.9399, lng: -106.4509 },
      { name: "Manitoba", lat: 53.7609, lng: -98.8139 },
      { name: "Ontario", lat: 51.2538, lng: -85.3232 },
      { name: "Québec", lat: 52.9399, lng: -73.5491 },
      { name: "Nouveau-Brunswick", lat: 46.5653, lng: -66.4619 },
      { name: "Nouvelle-Écosse", lat: 44.682, lng: -63.7443 },
      { name: "Île-du-Prince-Édouard", lat: 46.5107, lng: -63.4168 },
      { name: "Terre-Neuve-et-Labrador", lat: 53.1355, lng: -57.6604 },
      { name: "Yukon", lat: 64.2823, lng: -135.0 },
      { name: "Territoires du Nord-Ouest", lat: 64.8255, lng: -124.8457 },
      { name: "Nunavut", lat: 70.2998, lng: -83.1076 }
    ]
  },
  "États-Unis": {
    flag: "🇺🇸",
    continent: "Amériques",
    subcontinent: "Amérique du Nord",
    lat: 37.0902,
    lng: -95.7129,
    zoom: 4,
    unit: "États",
    regions: [
      { name: "Alabama", lat: 32.3182, lng: -86.9023 },
      { name: "Alaska", lat: 64.2008, lng: -149.4937 },
      { name: "Arizona", lat: 34.0489, lng: -111.0937 },
      { name: "Arkansas", lat: 35.201, lng: -91.8318 },
      { name: "Californie", lat: 36.7783, lng: -119.4179 },
      { name: "Caroline du Nord", lat: 35.7596, lng: -79.0193 },
      { name: "Caroline du Sud", lat: 33.8361, lng: -81.1637 },
      { name: "Colorado", lat: 39.5501, lng: -105.7821 },
      { name: "Connecticut", lat: 41.6032, lng: -73.0877 },
      { name: "Dakota du Nord", lat: 47.5515, lng: -101.002 },
      { name: "Dakota du Sud", lat: 43.9695, lng: -99.9018 },
      { name: "Delaware", lat: 38.9108, lng: -75.5277 },
      { name: "Floride", lat: 27.6648, lng: -81.5158 },
      { name: "Géorgie", lat: 32.1656, lng: -82.9001 },
      { name: "Hawaï", lat: 19.8968, lng: -155.5828 },
      { name: "Idaho", lat: 44.0682, lng: -114.742 },
      { name: "Illinois", lat: 40.6331, lng: -89.3985 },
      { name: "Indiana", lat: 40.5512, lng: -85.6024 },
      { name: "Iowa", lat: 41.878, lng: -93.0977 },
      { name: "Kansas", lat: 39.0119, lng: -98.4842 },
      { name: "Kentucky", lat: 37.8393, lng: -84.27 },
      { name: "Louisiane", lat: 30.9843, lng: -91.9623 },
      { name: "Maine", lat: 45.2538, lng: -69.4455 },
      { name: "Maryland", lat: 39.0458, lng: -76.6413 },
      { name: "Massachusetts", lat: 42.4072, lng: -71.3824 },
      { name: "Michigan", lat: 44.3148, lng: -85.6024 },
      { name: "Minnesota", lat: 46.7296, lng: -94.6859 },
      { name: "Mississippi", lat: 32.3547, lng: -89.3985 },
      { name: "Missouri", lat: 37.9643, lng: -91.8318 },
      { name: "Montana", lat: 46.8797, lng: -110.3626 },
      { name: "Nebraska", lat: 41.4925, lng: -99.9018 },
      { name: "Nevada", lat: 38.8026, lng: -116.4194 },
      { name: "New Hampshire", lat: 43.1939, lng: -71.5724 },
      { name: "New Jersey", lat: 40.0583, lng: -74.4057 },
      { name: "New York", lat: 40.7128, lng: -74.006 },
      { name: "Nouveau-Mexique", lat: 34.5199, lng: -105.8701 },
      { name: "Ohio", lat: 40.4173, lng: -82.9071 },
      { name: "Oklahoma", lat: 35.0078, lng: -97.0929 },
      { name: "Oregon", lat: 43.8041, lng: -120.5542 },
      { name: "Pennsylvanie", lat: 41.2033, lng: -77.1945 },
      { name: "Rhode Island", lat: 41.5801, lng: -71.4774 },
      { name: "Tennessee", lat: 35.5175, lng: -86.5804 },
      { name: "Texas", lat: 31.9686, lng: -99.9018 },
      { name: "Utah", lat: 39.321, lng: -111.0937 },
      { name: "Vermont", lat: 44.5588, lng: -72.5778 },
      { name: "Virginie", lat: 37.4316, lng: -78.6569 },
      { name: "Virginie-Occidentale", lat: 38.5976, lng: -80.4549 },
      { name: "Washington", lat: 47.7511, lng: -120.7401 },
      { name: "Wisconsin", lat: 43.7844, lng: -88.7879 },
      { name: "Wyoming", lat: 43.076, lng: -107.2903 }
    ]
  },
  "Groenland": {
    flag: "🇬🇱",
    continent: "Amériques",
    subcontinent: "Amérique du Nord",
    lat: 71.7069,
    lng: -42.6043,
    zoom: 4,
    unit: "municipalités",
    regions: [
      { name: "Sermersooq (Nuuk / Tasiilaq)", lat: 64.1814, lng: -51.6941 },
      { name: "Avannaata (Ilulissat / Qaanaaq)", lat: 69.2198, lng: -51.0986 },
      { name: "Qeqertalik (Aasiaat / Qeqertarsuaq)", lat: 68.7098, lng: -52.8695 },
      { name: "Qeqqata (Sisimiut / Maniitsoq)", lat: 66.9395, lng: -53.6735 },
      { name: "Kujalleq (Qaqortoq / Narsaq)", lat: 60.7161, lng: -46.0353 }
    ]
  },
  "Mexique": {
    flag: "🇲🇽",
    continent: "Amériques",
    subcontinent: "Amérique du Nord",
    lat: 23.6345,
    lng: -102.5528,
    zoom: 5,
    unit: "États",
    regions: [
      { name: "Mexico (CDMX)", lat: 19.4326, lng: -99.1332 },
      { name: "Aguascalientes", lat: 21.8853, lng: -102.2916 },
      { name: "Basse-Californie", lat: 32.6245, lng: -115.4523 },
      { name: "Basse-Californie du Sud", lat: 24.1426, lng: -110.3128 },
      { name: "Campeche", lat: 19.8301, lng: -90.5349 },
      { name: "Chiapas", lat: 16.7569, lng: -93.1292 },
      { name: "Chihuahua", lat: 28.6353, lng: -106.0889 },
      { name: "Coahuila", lat: 25.4232, lng: -101.0053 },
      { name: "Colima", lat: 19.2433, lng: -103.7241 },
      { name: "Durango", lat: 24.0277, lng: -104.6532 },
      { name: "État de Mexico", lat: 19.2826, lng: -99.6557 },
      { name: "Guanajuato", lat: 21.019, lng: -101.2574 },
      { name: "Guerrero", lat: 17.5506, lng: -99.5024 },
      { name: "Hidalgo", lat: 20.1011, lng: -98.7591 },
      { name: "Jalisco", lat: 20.6597, lng: -103.3496 },
      { name: "Michoacán", lat: 19.706, lng: -101.195 },
      { name: "Morelos", lat: 18.9242, lng: -99.2216 },
      { name: "Nayarit", lat: 21.7514, lng: -104.8455 },
      { name: "Nuevo León", lat: 25.6866, lng: -100.3161 },
      { name: "Oaxaca", lat: 17.0732, lng: -96.7266 },
      { name: "Puebla", lat: 19.0414, lng: -98.2063 },
      { name: "Querétaro", lat: 20.5888, lng: -100.3899 },
      { name: "Quintana Roo", lat: 20.2114, lng: -87.4654 },
      { name: "San Luis Potosí", lat: 22.1565, lng: -100.9855 },
      { name: "Sinaloa", lat: 24.8091, lng: -107.394 },
      { name: "Sonora", lat: 29.0729, lng: -110.9559 },
      { name: "Tabasco", lat: 17.9892, lng: -92.9475 },
      { name: "Tamaulipas", lat: 23.7369, lng: -99.1411 },
      { name: "Tlaxcala", lat: 19.3182, lng: -98.2375 },
      { name: "Veracruz", lat: 19.1738, lng: -96.1342 },
      { name: "Yucatán", lat: 20.9674, lng: -89.5926 },
      { name: "Zacatecas", lat: 22.7709, lng: -102.5832 }
    ]
  },
  "Belize": {
    flag: "🇧🇿",
    continent: "Amériques",
    subcontinent: "Amérique centrale",
    lat: 17.1899,
    lng: -88.4976,
    zoom: 7,
    unit: "districts",
    regions: [
      { name: "Belize (Belize City / Ambergris Caye)", lat: 17.5046, lng: -88.1962 },
      { name: "Cayo (Belmopan / San Ignacio)", lat: 17.251, lng: -88.759 },
      { name: "Corozal", lat: 18.3938, lng: -88.3885 },
      { name: "Orange Walk", lat: 18.0812, lng: -88.5633 },
      { name: "Stann Creek (Dangriga / Placencia)", lat: 16.9708, lng: -88.2271 },
      { name: "Toledo (Punta Gorda)", lat: 16.0984, lng: -88.8095 }
    ]
  },
  "Costa Rica": {
    flag: "🇨🇷",
    continent: "Amériques",
    subcontinent: "Amérique centrale",
    lat: 9.7489,
    lng: -83.7534,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "San José", lat: 9.9281, lng: -84.0907 },
      { name: "Alajuela (La Fortuna / Arenal)", lat: 10.0162, lng: -84.2116 },
      { name: "Cartago", lat: 9.8644, lng: -83.9194 },
      { name: "Heredia", lat: 9.9989, lng: -84.1165 },
      { name: "Guanacaste (Liberia / Tamarindo)", lat: 10.6346, lng: -85.4408 },
      { name: "Puntarenas (Manuel Antonio / Monteverde)", lat: 9.9763, lng: -84.8384 },
      { name: "Limón (Puerto Viejo)", lat: 9.9907, lng: -83.0359 }
    ]
  },
  "Guatemala": {
    flag: "🇬🇹",
    continent: "Amériques",
    subcontinent: "Amérique centrale",
    lat: 15.7835,
    lng: -90.2308,
    zoom: 7,
    unit: "départements",
    regions: [
      { name: "Guatemala", lat: 14.6349, lng: -90.5069 },
      { name: "Sacatepéquez (Antigua)", lat: 14.5586, lng: -90.7339 },
      { name: "Sololá (Lac Atitlán)", lat: 14.7722, lng: -91.1833 },
      { name: "Petén (Flores / Tikal)", lat: 16.9296, lng: -89.8924 },
      { name: "Alta Verapaz (Cobán / Semuc Champey)", lat: 15.4708, lng: -90.3708 },
      { name: "Quiché (Chichicastenango)", lat: 15.0308, lng: -91.1486 },
      { name: "Quetzaltenango (Xela)", lat: 14.8347, lng: -91.5181 },
      { name: "Huehuetenango", lat: 15.3197, lng: -91.4724 },
      { name: "Izabal (Livingston / Río Dulce)", lat: 15.7356, lng: -88.6 },
      { name: "Escuintla", lat: 14.305, lng: -90.785 }
    ]
  },
  "Honduras": {
    flag: "🇭🇳",
    continent: "Amériques",
    subcontinent: "Amérique centrale",
    lat: 15.2,
    lng: -86.2419,
    zoom: 7,
    unit: "départements",
    regions: [
      { name: "Francisco Morazán (Tegucigalpa)", lat: 14.0723, lng: -87.1921 },
      { name: "Cortés (San Pedro Sula)", lat: 15.5, lng: -88.0333 },
      { name: "Islas de la Bahía (Roatán / Utila)", lat: 16.3237, lng: -86.5535 },
      { name: "Atlántida (La Ceiba)", lat: 15.7667, lng: -86.7833 },
      { name: "Copán (Copán Ruinas)", lat: 14.8333, lng: -89.15 },
      { name: "Comayagua", lat: 14.45, lng: -87.6333 },
      { name: "Olancho", lat: 14.8167, lng: -86.0 }
    ]
  },
  "Nicaragua": {
    flag: "🇳🇮",
    continent: "Amériques",
    subcontinent: "Amérique centrale",
    lat: 12.8654,
    lng: -85.2072,
    zoom: 7,
    unit: "départements / régions",
    regions: [
      { name: "Managua", lat: 12.115, lng: -86.2362 },
      { name: "Granada", lat: 11.9299, lng: -85.956 },
      { name: "León", lat: 12.4379, lng: -86.878 },
      { name: "Rivas (San Juan del Sur / Île d'Ometepe)", lat: 11.4371, lng: -85.8263 },
      { name: "Matagalpa", lat: 12.9256, lng: -85.9175 },
      { name: "Estelí", lat: 13.0919, lng: -86.3539 },
      { name: "Côte caraïbe Sud (Bluefields / Corn Islands)", lat: 12.0137, lng: -83.7636 },
      { name: "Côte caraïbe Nord (Puerto Cabezas)", lat: 14.0351, lng: -83.3888 }
    ]
  },
  "Panama": {
    flag: "🇵🇦",
    continent: "Amériques",
    subcontinent: "Amérique centrale",
    lat: 8.538,
    lng: -80.7821,
    zoom: 7,
    unit: "provinces / comarques",
    regions: [
      { name: "Panamá", lat: 8.9824, lng: -79.5199 },
      { name: "Panamá Oeste", lat: 8.88, lng: -79.78 },
      { name: "Bocas del Toro", lat: 9.3403, lng: -82.2418 },
      { name: "Chiriquí (Boquete / David)", lat: 8.4273, lng: -82.431 },
      { name: "Colón", lat: 9.3598, lng: -79.9014 },
      { name: "Coclé", lat: 8.6, lng: -80.35 },
      { name: "Veraguas (Santa Catalina / Coiba)", lat: 8.1, lng: -81.1 },
      { name: "Guna Yala (San Blas)", lat: 9.35, lng: -78.45 },
      { name: "Darién", lat: 7.9, lng: -77.95 }
    ]
  },
  "Salvador": {
    flag: "🇸🇻",
    continent: "Amériques",
    subcontinent: "Amérique centrale",
    lat: 13.7942,
    lng: -88.8965,
    zoom: 8,
    unit: "départements",
    regions: [
      { name: "San Salvador", lat: 13.6929, lng: -89.2182 },
      { name: "La Libertad (El Tunco)", lat: 13.4883, lng: -89.3222 },
      { name: "Santa Ana (Ruta de las Flores)", lat: 13.9946, lng: -89.5597 },
      { name: "Sonsonate", lat: 13.7189, lng: -89.7242 },
      { name: "Ahuachapán", lat: 13.9214, lng: -89.845 },
      { name: "San Miguel", lat: 13.4833, lng: -88.1833 },
      { name: "La Unión", lat: 13.3369, lng: -87.8439 }
    ]
  },
  "Antigua-et-Barbuda": {
    flag: "🇦🇬",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 17.0608,
    lng: -61.7964,
    zoom: 10,
    unit: "paroisses",
    regions: [
      { name: "Saint John (Saint John's)", lat: 17.1275, lng: -61.8468 },
      { name: "Saint Paul (English Harbour)", lat: 17.0167, lng: -61.7667 },
      { name: "Saint Peter", lat: 17.1, lng: -61.7667 },
      { name: "Saint George", lat: 17.1167, lng: -61.8 },
      { name: "Barbuda", lat: 17.6167, lng: -61.7833 }
    ]
  },
  "Bahamas": {
    flag: "🇧🇸",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 25.0343,
    lng: -77.3963,
    zoom: 6,
    unit: "districts / îles",
    regions: [
      { name: "New Providence (Nassau)", lat: 25.0343, lng: -77.3963 },
      { name: "Grand Bahama (Freeport)", lat: 26.65, lng: -78.5167 },
      { name: "Exuma", lat: 23.6167, lng: -75.9667 },
      { name: "Eleuthera (Harbour Island)", lat: 25.15, lng: -76.1667 },
      { name: "Abacos", lat: 26.5, lng: -77.15 },
      { name: "Andros", lat: 24.4667, lng: -77.8833 }
    ]
  },
  "Barbade": {
    flag: "🇧🇧",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 13.1939,
    lng: -59.5432,
    zoom: 10,
    unit: "paroisses",
    regions: [
      { name: "Saint Michael (Bridgetown)", lat: 13.1132, lng: -59.5988 },
      { name: "Christ Church (Oistins)", lat: 13.0767, lng: -59.5433 },
      { name: "Saint James (Holetown)", lat: 13.1833, lng: -59.6333 },
      { name: "Saint Peter (Speightstown)", lat: 13.25, lng: -59.6333 },
      { name: "Saint Joseph (Bathsheba)", lat: 13.2167, lng: -59.5333 }
    ]
  },
  "Cuba": {
    flag: "🇨🇺",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 21.5218,
    lng: -77.7812,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "La Havane", lat: 23.1136, lng: -82.3666 },
      { name: "Pinar del Río (Viñales)", lat: 22.4175, lng: -83.6981 },
      { name: "Matanzas (Varadero)", lat: 23.0411, lng: -81.5775 },
      { name: "Villa Clara (Santa Clara / Remedios)", lat: 22.4069, lng: -79.9647 },
      { name: "Cienfuegos", lat: 22.1496, lng: -80.4466 },
      { name: "Sancti Spíritus (Trinidad)", lat: 21.9303, lng: -79.3944 },
      { name: "Camagüey", lat: 21.3926, lng: -77.9053 },
      { name: "Holguín", lat: 20.8872, lng: -76.2631 },
      { name: "Santiago de Cuba", lat: 20.0247, lng: -75.8219 },
      { name: "Guantánamo (Baracoa)", lat: 20.1444, lng: -75.2092 }
    ]
  },
  "Dominique": {
    flag: "🇩🇲",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 15.415,
    lng: -61.371,
    zoom: 10,
    unit: "paroisses",
    regions: [
      { name: "Saint George (Roseau)", lat: 15.3017, lng: -61.3881 },
      { name: "Saint John (Portsmouth)", lat: 15.5833, lng: -61.4667 },
      { name: "Saint Patrick", lat: 15.2667, lng: -61.2833 },
      { name: "Saint Paul", lat: 15.3667, lng: -61.3833 },
      { name: "Saint David", lat: 15.4167, lng: -61.2667 }
    ]
  },
  "Grenade": {
    flag: "🇬🇩",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 12.1165,
    lng: -61.679,
    zoom: 10,
    unit: "paroisses",
    regions: [
      { name: "Saint George (Saint-Georges)", lat: 12.0561, lng: -61.7488 },
      { name: "Saint Andrew (Grenville)", lat: 12.1167, lng: -61.6167 },
      { name: "Saint Patrick", lat: 12.2167, lng: -61.6333 },
      { name: "Carriacou et Petite Martinique", lat: 12.4667, lng: -61.4667 }
    ]
  },
  "Guadeloupe": {
    flag: "🇬🇵",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 16.265,
    lng: -61.551,
    zoom: 9,
    unit: "îles / secteurs",
    regions: [
      { name: "Grande-Terre (Pointe-à-Pitre / Sainte-Anne)", lat: 16.32, lng: -61.4 },
      { name: "Basse-Terre (Bouillante / Soufrière)", lat: 16.0833, lng: -61.7 },
      { name: "Marie-Galante", lat: 15.9333, lng: -61.2667 },
      { name: "Les Saintes (Terre-de-Haut)", lat: 15.8667, lng: -61.5833 },
      { name: "La Désirade", lat: 16.3, lng: -61.0667 }
    ]
  },
  "Haïti": {
    flag: "🇭🇹",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.9712,
    lng: -72.2852,
    zoom: 8,
    unit: "départements",
    regions: [
      { name: "Ouest (Port-au-Prince / Jacmel)", lat: 18.5434, lng: -72.3388 },
      { name: "Nord (Cap-Haïtien)", lat: 19.7578, lng: -72.2042 },
      { name: "Sud (Les Cayes)", lat: 18.2, lng: -73.75 },
      { name: "Artibonite (Gonaïves)", lat: 19.45, lng: -72.6833 },
      { name: "Grand'Anse (Jérémie)", lat: 18.6333, lng: -74.1167 }
    ]
  },
  "Jamaïque": {
    flag: "🇯🇲",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.1096,
    lng: -77.2975,
    zoom: 8,
    unit: "paroisses",
    regions: [
      { name: "Saint Andrew / Kingston", lat: 18.0179, lng: -76.8099 },
      { name: "Saint James (Montego Bay)", lat: 18.4762, lng: -77.8939 },
      { name: "Westmoreland (Negril)", lat: 18.2683, lng: -78.3472 },
      { name: "Saint Ann (Ocho Rios)", lat: 18.4074, lng: -77.1027 },
      { name: "Portland (Port Antonio)", lat: 18.1756, lng: -76.45 }
    ]
  },
  "Martinique": {
    flag: "🇲🇶",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 14.6415,
    lng: -61.0242,
    zoom: 10,
    unit: "secteurs",
    regions: [
      { name: "Centre (Fort-de-France / Lamentin)", lat: 14.6161, lng: -61.0588 },
      { name: "Sud Caraïbe (Les Anses-d'Arlet / Sainte-Anne)", lat: 14.4833, lng: -61.0667 },
      { name: "Sud Atlantique (Le François / Le Vauclin)", lat: 14.5833, lng: -60.8667 },
      { name: "Nord Caraïbe (Saint-Pierre / Le Carbet)", lat: 14.7422, lng: -61.1758 },
      { name: "Nord Atlantique (La Trinité / Sainte-Marie)", lat: 14.7389, lng: -60.9625 }
    ]
  },
  "Porto Rico": {
    flag: "🇵🇷",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.2208,
    lng: -66.5901,
    zoom: 9,
    unit: "municipalités / régions",
    regions: [
      { name: "San Juan (Métropole)", lat: 18.4655, lng: -66.1057 },
      { name: "Région Est (El Yunque / Vieques / Culebra)", lat: 18.3, lng: -65.75 },
      { name: "Région Ouest (Rincón / Mayagüez)", lat: 18.3402, lng: -67.25 },
      { name: "Région Sud (Ponce)", lat: 18.0111, lng: -66.6141 },
      { name: "Région Centre (Utuado / Cordillera Central)", lat: 18.2655, lng: -66.7005 }
    ]
  },
  "République dominicaine": {
    flag: "🇩🇴",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 18.7357,
    lng: -70.1627,
    zoom: 8,
    unit: "provinces",
    regions: [
      { name: "Distrito Nacional / Saint-Domingue", lat: 18.4861, lng: -69.9312 },
      { name: "La Altagracia (Punta Cana / Higüey)", lat: 18.582, lng: -68.4055 },
      { name: "Samaná (Las Terrenas)", lat: 19.205, lng: -69.336 },
      { name: "Puerto Plata (Sosúa / Cabarete)", lat: 19.7934, lng: -70.6884 },
      { name: "Santiago", lat: 19.4517, lng: -70.697 },
      { name: "La Romana (Bayahíbe)", lat: 18.4273, lng: -68.9728 },
      { name: "Barahona", lat: 18.2085, lng: -71.1008 }
    ]
  },
  "Saint-Christophe-et-Niévès": {
    flag: "🇰🇳",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 17.3578,
    lng: -62.783,
    zoom: 10,
    unit: "paroisses",
    regions: [
      { name: "Saint-Christophe (Basseterre)", lat: 17.3026, lng: -62.7177 },
      { name: "Niévès (Charlestown)", lat: 17.1333, lng: -62.5833 }
    ]
  },
  "Sainte-Lucie": {
    flag: "🇱🇨",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 13.9094,
    lng: -60.9789,
    zoom: 10,
    unit: "quartiers",
    regions: [
      { name: "Castries", lat: 14.0101, lng: -60.9875 },
      { name: "Soufrière (Les Pitons)", lat: 13.8567, lng: -61.0567 },
      { name: "Gros Islet (Rodney Bay)", lat: 14.0667, lng: -60.95 },
      { name: "Vieux Fort", lat: 13.7167, lng: -60.95 }
    ]
  },
  "Saint-Vincent-et-les-Grenadines": {
    flag: "🇻🇨",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 12.9843,
    lng: -61.2872,
    zoom: 9,
    unit: "paroisses",
    regions: [
      { name: "Saint George (Kingstown)", lat: 13.1587, lng: -61.2248 },
      { name: "Les Grenadines (Bequia / Mustique / Tobago Cays)", lat: 12.65, lng: -61.35 },
      { name: "Charlotte", lat: 13.25, lng: -61.15 }
    ]
  },
  "Trinité-et-Tobago": {
    flag: "🇹🇹",
    continent: "Amériques",
    subcontinent: "Caraïbes",
    lat: 10.6918,
    lng: -61.2225,
    zoom: 9,
    unit: "régions / arrondissements",
    regions: [
      { name: "Trinité Nord (Port-d'Espagne / Maracas)", lat: 10.6549, lng: -61.5019 },
      { name: "Trinité Centre / Sud (San Fernando)", lat: 10.2797, lng: -61.4683 },
      { name: "Tobago (Scarborough)", lat: 11.1833, lng: -60.7333 }
    ]
  },
  "Argentine": {
    flag: "🇦🇷",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -38.4161,
    lng: -63.6167,
    zoom: 4,
    unit: "provinces",
    regions: [
      { name: "Buenos Aires (Ville & Province)", lat: -34.6037, lng: -58.3816 },
      { name: "Córdoba", lat: -31.4201, lng: -64.1888 },
      { name: "Santa Fe", lat: -31.6333, lng: -60.7 },
      { name: "Mendoza", lat: -32.8895, lng: -68.8458 },
      { name: "Salta", lat: -24.7821, lng: -65.4232 },
      { name: "Jujuy", lat: -24.1858, lng: -65.2995 },
      { name: "Misiones (Iguazú)", lat: -26.8754, lng: -54.6516 },
      { name: "Río Negro (Bariloche)", lat: -41.1335, lng: -71.3103 },
      { name: "Neuquén", lat: -38.9516, lng: -68.0591 },
      { name: "Chubut (Péninsule Valdés)", lat: -43.3002, lng: -65.1023 },
      { name: "Santa Cruz (El Calafate / El Chaltén)", lat: -50.3379, lng: -72.2648 },
      { name: "Terre de Feu (Ushuaïa)", lat: -54.8019, lng: -68.303 }
    ]
  },
  "Bolivie": {
    flag: "🇧🇴",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -16.2902,
    lng: -63.5887,
    zoom: 5,
    unit: "départements",
    regions: [
      { name: "La Paz (Lac Titicaca)", lat: -16.5, lng: -68.1193 },
      { name: "Santa Cruz", lat: -17.8146, lng: -63.1561 },
      { name: "Cochabamba", lat: -17.3895, lng: -66.1568 },
      { name: "Potosí (Salar d'Uyuni)", lat: -19.5836, lng: -65.7531 },
      { name: "Chuquisaca (Sucre)", lat: -19.0196, lng: -65.2619 },
      { name: "Tarija", lat: -21.5355, lng: -64.7296 },
      { name: "Oruro", lat: -17.9833, lng: -67.15 },
      { name: "Beni", lat: -14.8333, lng: -64.9 },
      { name: "Pando", lat: -11.0267, lng: -68.7692 }
    ]
  },
  "Brésil": {
    flag: "🇧🇷",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -14.235,
    lng: -51.9253,
    zoom: 4,
    unit: "États",
    regions: [
      { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
      { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
      { name: "Minas Gerais", lat: -19.9167, lng: -43.9345 },
      { name: "Bahia (Salvador / Chapada Diamantina)", lat: -12.9714, lng: -38.5014 },
      { name: "Pernambouc (Recife / Fernando de Noronha)", lat: -8.0476, lng: -34.877 },
      { name: "Ceará (Fortaleza / Jericoacoara)", lat: -3.7172, lng: -38.5433 },
      { name: "Rio Grande do Sul", lat: -30.0346, lng: -51.2177 },
      { name: "Paraná (Curitiba / Foz do Iguaçu)", lat: -25.4284, lng: -49.2733 },
      { name: "Santa Catarina (Florianópolis)", lat: -27.5954, lng: -48.548 },
      { name: "Amazonas (Manaus)", lat: -3.119, lng: -60.0217 },
      { name: "Pará (Belém)", lat: -1.4558, lng: -48.5044 },
      { name: "Mato Grosso do Sul (Pantanal / Bonito)", lat: -20.4697, lng: -54.6201 },
      { name: "District fédéral (Brasília)", lat: -15.8267, lng: -47.9218 }
    ]
  },
  "Chili": {
    flag: "🇨🇱",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -35.6751,
    lng: -71.543,
    zoom: 4,
    unit: "régions",
    regions: [
      { name: "Métropolitaine de Santiago", lat: -33.4489, lng: -70.6693 },
      { name: "Valparaíso (Île de Pâques)", lat: -33.0472, lng: -71.6127 },
      { name: "Antofagasta (San Pedro de Atacama)", lat: -23.6509, lng: -70.3975 },
      { name: "Los Lagos (Puerto Varas / Chiloé)", lat: -41.3178, lng: -72.984 },
      { name: "Aysén (Coyhaique / Cathédrales de marbre)", lat: -45.5752, lng: -72.0662 },
      { name: "Magallanes (Torres del Paine / Punta Arenas)", lat: -53.1638, lng: -70.9171 },
      { name: "Araucanie (Pucón)", lat: -38.7359, lng: -72.5904 },
      { name: "Coquimbo", lat: -29.9533, lng: -71.3395 }
    ]
  },
  "Colombie": {
    flag: "🇨🇴",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: 4.5709,
    lng: -74.2973,
    zoom: 5,
    unit: "départements",
    regions: [
      { name: "Bogotá / Cundinamarca", lat: 4.711, lng: -74.0721 },
      { name: "Bolívar (Carthagène)", lat: 10.391, lng: -75.4794 },
      { name: "Magdalena (Santa Marta / Tayrona)", lat: 11.2408, lng: -74.199 },
      { name: "Antioquia (Medellín / Guatapé)", lat: 6.2442, lng: -75.5812 },
      { name: "Valle del Cauca (Cali)", lat: 3.4516, lng: -76.532 },
      { name: "Quindío / Risaralda (Zone du café)", lat: 4.5339, lng: -75.6811 },
      { name: "San Andrés et Providencia", lat: 12.5847, lng: -81.7006 },
      { name: "Amazonas (Leticia)", lat: -4.2153, lng: -69.9406 }
    ]
  },
  "Équateur": {
    flag: "🇪🇨",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -1.8312,
    lng: -78.1834,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Pichincha (Quito / Mitad del Mundo)", lat: -0.1807, lng: -78.4678 },
      { name: "Galápagos", lat: -0.9538, lng: -90.9656 },
      { name: "Azuay (Cuenca)", lat: -2.9001, lng: -79.0059 },
      { name: "Guayas (Guayaquil)", lat: -2.1894, lng: -79.8891 },
      { name: "Cotopaxi", lat: -0.9333, lng: -78.6167 },
      { name: "Imbabura (Otavalo)", lat: 0.2333, lng: -78.2667 },
      { name: "Napo (Amazonie)", lat: -0.9938, lng: -77.8129 }
    ]
  },
  "Guyana": {
    flag: "🇬🇾",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: 4.8604,
    lng: -58.9302,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Demerara-Mahaica (Georgetown)", lat: 6.8013, lng: -58.1551 },
      { name: "Potaro-Siparuni (Chutes de Kaieteur)", lat: 5.175, lng: -59.4833 },
      { name: "Upper Takutu-Upper Essequibo (Lethem)", lat: 3.3833, lng: -59.8 },
      { name: "East Berbice-Corentyne", lat: 6.25, lng: -57.5 }
    ]
  },
  "Guyane française": {
    flag: "🇬🇫",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: 3.9339,
    lng: -53.2778,
    zoom: 7,
    unit: "secteurs",
    regions: [
      { name: "Littoral central (Cayenne / Rémire-Montjoly)", lat: 4.9224, lng: -52.3135 },
      { name: "Kourou & Îles du Salut", lat: 5.1597, lng: -52.6503 },
      { name: "Saint-Laurent-du-Maroni (Maroni)", lat: 5.4978, lng: -54.0289 },
      { name: "Saint-Georges-de-l'Oyapock (Oyapock)", lat: 3.8936, lng: -51.8031 }
    ]
  },
  "Paraguay": {
    flag: "🇵🇾",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -23.4425,
    lng: -58.4438,
    zoom: 6,
    unit: "départements",
    regions: [
      { name: "Asunción / Central", lat: -25.2637, lng: -57.5759 },
      { name: "Alto Paraná (Ciudad del Este)", lat: -25.5097, lng: -54.6111 },
      { name: "Itapúa (Encarnación / Missions jésuites)", lat: -27.3306, lng: -55.8667 },
      { name: "Cordillera", lat: -25.25, lng: -57.0 },
      { name: "Boquerón (Chaco)", lat: -21.75, lng: -61.5 }
    ]
  },
  "Pérou": {
    flag: "🇵🇪",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -9.19,
    lng: -75.0152,
    zoom: 5,
    unit: "départements / régions",
    regions: [
      { name: "Lima", lat: -12.0464, lng: -77.0428 },
      { name: "Cusco (Machu Picchu / Vallée sacrée)", lat: -13.5319, lng: -71.9675 },
      { name: "Arequipa (Canyon de Colca)", lat: -16.409, lng: -71.5375 },
      { name: "Puno (Lac Titicaca)", lat: -15.8402, lng: -70.0219 },
      { name: "Ancash (Cordillère Blanche / Huaraz)", lat: -9.5299, lng: -77.5289 },
      { name: "Ica (Paracas / Huacachina / Nazca)", lat: -14.0678, lng: -75.7286 },
      { name: "Loreto (Iquitos / Amazonie)", lat: -3.7437, lng: -73.2516 },
      { name: "Madre de Dios (Puerto Maldonado)", lat: -12.5933, lng: -69.1892 }
    ]
  },
  "Suriname": {
    flag: "🇸🇷",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: 3.9193,
    lng: -56.0278,
    zoom: 7,
    unit: "districts",
    regions: [
      { name: "Paramaribo", lat: 5.852, lng: -55.2038 },
      { name: "Commewijne", lat: 5.8833, lng: -54.9167 },
      { name: "Marowijne (Albina)", lat: 5.5, lng: -54.0667 },
      { name: "Brokopondo", lat: 5.0564, lng: -54.9756 },
      { name: "Sipaliwini", lat: 3.5, lng: -56.0 }
    ]
  },
  "Uruguay": {
    flag: "🇺🇾",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -32.5228,
    lng: -55.7658,
    zoom: 7,
    unit: "départements",
    regions: [
      { name: "Montevideo", lat: -34.9011, lng: -56.1645 },
      { name: "Maldonado (Punta del Este)", lat: -34.9, lng: -54.95 },
      { name: "Colonia (Colonia del Sacramento)", lat: -34.4626, lng: -57.82 },
      { name: "Rocha (Cabo Polonio)", lat: -34.4833, lng: -53.8333 },
      { name: "Canelones", lat: -34.5228, lng: -56.2778 }
    ]
  },
  "Venezuela": {
    flag: "🇻🇪",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: 6.4238,
    lng: -66.5897,
    zoom: 6,
    unit: "États",
    regions: [
      { name: "District capital (Caracas)", lat: 10.4806, lng: -66.9036 },
      { name: "Bolívar (Salto Ángel / Gran Sabana)", lat: 6.2, lng: -63.0 },
      { name: "Mérida (Andes)", lat: 8.5667, lng: -71.2167 },
      { name: "Nueva Esparta (Île de Margarita)", lat: 10.997, lng: -63.9113 },
      { name: "Zulia (Maracaibo)", lat: 10.6666, lng: -71.6124 },
      { name: "Falcón (Los Roques / Médanos de Coro)", lat: 11.4045, lng: -69.6734 }
    ]
  },
  // ==================== EUROPE ====================
  "Danemark": {
    flag: "🇩🇰",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 56.2639,
    lng: 9.5018,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Hovedstaden (Copenhague / Bornholm)", lat: 55.6761, lng: 12.5683 },
      { name: "Jutland central (Aarhus)", lat: 56.1629, lng: 10.2039 },
      { name: "Danemark du Sud (Odense)", lat: 55.4038, lng: 10.4024 },
      { name: "Jutland du Nord (Aalborg)", lat: 57.0488, lng: 9.9217 },
      { name: "Sjælland (Roskilde)", lat: 55.6415, lng: 12.0804 }
    ]
  },
  "Estonie": {
    flag: "🇪🇪",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 58.5953,
    lng: 25.0136,
    zoom: 7,
    unit: "comtés",
    regions: [
      { name: "Harju (Tallinn)", lat: 59.437, lng: 24.7536 },
      { name: "Tartu", lat: 58.3776, lng: 26.729 },
      { name: "Pärnu", lat: 58.3859, lng: 24.4971 },
      { name: "Saare (Île de Saaremaa)", lat: 58.2481, lng: 22.5039 },
      { name: "Ida-Viru", lat: 59.3592, lng: 27.4211 }
    ]
  },
  "Finlande": {
    flag: "🇫🇮",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 61.9241,
    lng: 25.7482,
    zoom: 5,
    unit: "régions",
    regions: [
      { name: "Uusimaa (Helsinki)", lat: 60.1699, lng: 24.9384 },
      { name: "Laponie (Rovaniemi)", lat: 66.5039, lng: 25.7294 },
      { name: "Pirkanmaa (Tampere)", lat: 61.4978, lng: 23.761 },
      { name: "Finlande propre (Turku)", lat: 60.4518, lng: 22.2666 },
      { name: "Carélie du Nord", lat: 62.601, lng: 29.7636 },
      { name: "Ostrobotnie du Nord (Oulu)", lat: 65.0121, lng: 25.4651 },
      { name: "Åland", lat: 60.1785, lng: 19.9156 }
    ]
  },
  "Irlande": {
    flag: "🇮🇪",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 53.1424,
    lng: -7.6921,
    zoom: 7,
    unit: "comtés / provinces",
    regions: [
      { name: "Dublin", lat: 53.3498, lng: -6.2603 },
      { name: "Galway (Connemara)", lat: 53.2707, lng: -9.0568 },
      { name: "Cork", lat: 51.8985, lng: -8.4756 },
      { name: "Kerry (Anneau du Kerry / Killarney)", lat: 52.0599, lng: -9.5044 },
      { name: "Clare (Falaises de Moher)", lat: 52.9719, lng: -9.4265 },
      { name: "Donegal", lat: 54.6542, lng: -8.11 }
    ]
  },
  "Islande": {
    flag: "🇮🇸",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 64.9631,
    lng: -19.0208,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Région de la capitale (Reykjavík)", lat: 64.1466, lng: -21.9426 },
      { name: "Suðurland (Cercle d'or / Côte sud)", lat: 63.9333, lng: -20.1 },
      { name: "Vesturland (Snæfellsnes)", lat: 64.8, lng: -21.5 },
      { name: "Vestfirðir (Fjords de l'Ouest)", lat: 66.0758, lng: -23.1236 },
      { name: "Norðurland eystra (Akureyri / Mývatn)", lat: 65.6835, lng: -18.0878 },
      { name: "Austurland (Fjords de l'Est)", lat: 65.0667, lng: -14.4 }
    ]
  },
  "Lettonie": {
    flag: "🇱🇻",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 56.8796,
    lng: 24.6032,
    zoom: 7,
    unit: "municipalités",
    regions: [
      { name: "Riga", lat: 56.9496, lng: 24.1052 },
      { name: "Jūrmala", lat: 56.968, lng: 23.7704 },
      { name: "Sigulda (Gauja)", lat: 57.1538, lng: 24.8595 },
      { name: "Liepāja", lat: 56.5047, lng: 21.0108 },
      { name: "Cēsis", lat: 57.3119, lng: 25.2746 }
    ]
  },
  "Lituanie": {
    flag: "🇱🇹",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 55.1694,
    lng: 23.8813,
    zoom: 7,
    unit: "comtés",
    regions: [
      { name: "Vilnius", lat: 54.6872, lng: 25.2797 },
      { name: "Kaunas", lat: 54.8985, lng: 23.9036 },
      { name: "Klaipėda (Isthme de Courlande)", lat: 55.7033, lng: 21.1443 },
      { name: "Šiauliai", lat: 55.9349, lng: 23.3137 },
      { name: "Panevėžys", lat: 55.7348, lng: 24.3575 }
    ]
  },
  "Norvège": {
    flag: "🇳🇴",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 60.472,
    lng: 8.4689,
    zoom: 5,
    unit: "comtés",
    regions: [
      { name: "Oslo", lat: 59.9139, lng: 10.7522 },
      { name: "Vestland (Bergen / Fjords)", lat: 60.3913, lng: 5.3221 },
      { name: "Nordland (Îles Lofoten / Bodø)", lat: 68.2342, lng: 14.5683 },
      { name: "Troms (Tromsø)", lat: 69.6492, lng: 18.9553 },
      { name: "Finnmark (Cap Nord)", lat: 71.1725, lng: 25.7833 },
      { name: "Møre og Romsdal (Ålesund / Geiranger)", lat: 62.4722, lng: 6.1495 },
      { name: "Trøndelag (Trondheim)", lat: 63.4305, lng: 10.3951 },
      { name: "Rogaland (Stavanger / Preikestolen)", lat: 58.97, lng: 5.7331 }
    ]
  },
  "Royaume-Uni": {
    flag: "🇬🇧",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 55.3781,
    lng: -3.436,
    zoom: 5,
    unit: "nations / régions",
    regions: [
      { name: "Londres (Angleterre)", lat: 51.5074, lng: -0.1278 },
      { name: "Sud-Ouest de l'Angleterre (Cornouailles / Bath)", lat: 50.7184, lng: -3.5339 },
      { name: "Nord-Ouest de l'Angleterre (Lake District / Manchester)", lat: 54.4609, lng: -3.0886 },
      { name: "Écosse (Édimbourg / Highlands / Skye)", lat: 55.9533, lng: -3.1883 },
      { name: "Pays de Galles (Snowdonia / Cardiff)", lat: 51.4816, lng: -3.1791 },
      { name: "Irlande du Nord (Belfast / Chaussée des Géants)", lat: 54.5973, lng: -5.9301 }
    ]
  },
  "Suède": {
    flag: "🇸🇪",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 60.1282,
    lng: 18.6435,
    zoom: 5,
    unit: "comtés",
    regions: [
      { name: "Stockholm", lat: 59.3293, lng: 18.0686 },
      { name: "Västra Götaland (Göteborg)", lat: 57.7089, lng: 11.9746 },
      { name: "Scanie (Malmö)", lat: 55.605, lng: 13.0038 },
      { name: "Dalécarlie", lat: 60.6065, lng: 15.6355 },
      { name: "Norrbotten (Laponie suédoise / Abisko)", lat: 65.5848, lng: 22.1547 },
      { name: "Jämtland", lat: 63.1792, lng: 14.6357 }
    ]
  },
  "Allemagne": {
    flag: "🇩🇪",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 51.1657,
    lng: 10.4515,
    zoom: 6,
    unit: "Länder",
    regions: [
      { name: "Bavière (Munich)", lat: 48.1351, lng: 11.582 },
      { name: "Berlin", lat: 52.52, lng: 13.405 },
      { name: "Bade-Wurtemberg (Forêt-Noire / Stuttgart)", lat: 48.7758, lng: 9.1829 },
      { name: "Rhénanie-du-Nord-Westphalie (Cologne)", lat: 50.9375, lng: 6.9603 },
      { name: "Hambourg", lat: 53.5511, lng: 9.9937 },
      { name: "Hesse (Francfort)", lat: 50.1109, lng: 8.6821 },
      { name: "Saxe (Dresde / Leipzig)", lat: 51.0504, lng: 13.7373 },
      { name: "Basse-Saxe", lat: 52.3759, lng: 9.732 }
    ]
  },
  "Autriche": {
    flag: "🇦🇹",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 47.5162,
    lng: 14.5501,
    zoom: 7,
    unit: "Länder",
    regions: [
      { name: "Vienne", lat: 48.2082, lng: 16.3738 },
      { name: "Tyrol (Innsbruck)", lat: 47.2692, lng: 11.4041 },
      { name: "Salzbourg", lat: 47.8095, lng: 13.055 },
      { name: "Haute-Autriche (Salzkammergut / Hallstatt)", lat: 48.3069, lng: 14.2858 },
      { name: "Styrie (Graz)", lat: 47.0707, lng: 15.4395 },
      { name: "Carinthie", lat: 46.6247, lng: 14.3052 },
      { name: "Vorarlberg", lat: 47.243, lng: 9.903 }
    ]
  },
  "Belgique": {
    flag: "🇧🇪",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 50.5039,
    lng: 4.4699,
    zoom: 8,
    unit: "régions / provinces",
    regions: [
      { name: "Région de Bruxelles-Capitale", lat: 50.8503, lng: 4.3517 },
      { name: "Flandre (Bruges / Gand / Anvers)", lat: 51.2093, lng: 3.2247 },
      { name: "Wallonie (Ardennes / Namur / Liège)", lat: 50.4674, lng: 4.8718 }
    ]
  },
  "France": {
    flag: "🇫🇷",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 46.6034,
    lng: 1.8883,
    zoom: 5,
    unit: "régions",
    regions: [
      { name: "Nouvelle-Aquitaine (Bassin d'Arcachon / Bordeaux)", lat: 44.8378, lng: -0.5792 },
      { name: "Île-de-France (Paris)", lat: 48.8566, lng: 2.3522 },
      { name: "Provence-Alpes-Côte d'Azur", lat: 43.9352, lng: 6.0679 },
      { name: "Auvergne-Rhône-Alpes", lat: 45.764, lng: 4.8357 },
      { name: "Occitanie", lat: 43.6047, lng: 1.4442 },
      { name: "Bretagne", lat: 48.202, lng: -2.9326 },
      { name: "Normandie", lat: 49.1829, lng: -0.3707 },
      { name: "Grand Est", lat: 48.5734, lng: 7.7521 },
      { name: "Hauts-de-France", lat: 50.6292, lng: 3.0573 },
      { name: "Pays de la Loire", lat: 47.2184, lng: -1.5536 },
      { name: "Bourgogne-Franche-Comté", lat: 47.2805, lng: 4.9994 },
      { name: "Centre-Val de Loire", lat: 47.7516, lng: 1.6751 },
      { name: "Corse", lat: 42.0396, lng: 9.0129 }
    ]
  },
  "Liechtenstein": {
    flag: "🇱🇮",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 47.166,
    lng: 9.5554,
    zoom: 11,
    unit: "communes",
    regions: [
      { name: "Vaduz", lat: 47.141, lng: 9.5209 },
      { name: "Triesenberg / Malbun", lat: 47.1167, lng: 9.55 },
      { name: "Schaan", lat: 47.1667, lng: 9.5083 },
      { name: "Balzers", lat: 47.0667, lng: 9.5 }
    ]
  },
  "Luxembourg": {
    flag: "🇱🇺",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 49.8153,
    lng: 6.1296,
    zoom: 9,
    unit: "cantons",
    regions: [
      { name: "Luxembourg-Ville", lat: 49.6116, lng: 6.1319 },
      { name: "Esch-sur-Alzette", lat: 49.4958, lng: 5.9806 },
      { name: "Vianden / Ardennes luxembourgeoises", lat: 49.9333, lng: 6.2083 },
      { name: "Vallée de la Moselle (Remich)", lat: 49.545, lng: 6.365 }
    ]
  },
  "Monaco": {
    flag: "🇲🇨",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 43.7384,
    lng: 7.4246,
    zoom: 13,
    unit: "quartiers",
    regions: [
      { name: "Monte-Carlo", lat: 43.7396, lng: 7.4261 },
      { name: "Monaco-Ville (Le Rocher)", lat: 43.7311, lng: 7.4206 },
      { name: "La Condamine (Port Hercule)", lat: 43.7347, lng: 7.4214 },
      { name: "Fontvieille", lat: 43.7275, lng: 7.4156 }
    ]
  },
  "Pays-Bas": {
    flag: "🇳🇱",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 52.1326,
    lng: 5.2913,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "Hollande-Septentrionale (Amsterdam)", lat: 52.3676, lng: 4.9041 },
      { name: "Hollande-Méridionale (Rotterdam / La Haye)", lat: 52.0705, lng: 4.3007 },
      { name: "Utrecht", lat: 52.0907, lng: 5.1214 },
      { name: "Brabant-Septentrional (Eindhoven)", lat: 51.4827, lng: 5.2322 },
      { name: "Gueldre", lat: 52.0452, lng: 5.8718 },
      { name: "Frise (Îles Wadden)", lat: 53.2012, lng: 5.8086 },
      { name: "Zélande", lat: 51.494, lng: 3.8497 }
    ]
  },
  "Suisse": {
    flag: "🇨🇭",
    continent: "Europe",
    subcontinent: "Europe de l'Ouest",
    lat: 46.8182,
    lng: 8.2275,
    zoom: 7,
    unit: "cantons",
    regions: [
      { name: "Valais (Zermatt / Verbier)", lat: 46.229, lng: 7.359 },
      { name: "Berne (Interlaken / Jungfrau)", lat: 46.948, lng: 7.4474 },
      { name: "Grisons (Saint-Moritz)", lat: 46.6569, lng: 9.578 },
      { name: "Vaud (Lausanne / Montreux)", lat: 46.5197, lng: 6.6323 },
      { name: "Genève", lat: 46.2044, lng: 6.1432 },
      { name: "Zurich", lat: 47.3769, lng: 8.5417 },
      { name: "Lucerne", lat: 47.0502, lng: 8.3093 },
      { name: "Tessin (Lugano / Locarno)", lat: 46.0037, lng: 8.9511 }
    ]
  },
  "Biélorussie": {
    flag: "🇧🇾",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 53.7098,
    lng: 27.9534,
    zoom: 6,
    unit: "voblast",
    regions: [
      { name: "Minsk (Ville & Voblast)", lat: 53.9006, lng: 27.559 },
      { name: "Brest", lat: 52.0976, lng: 23.7341 },
      { name: "Grodno", lat: 53.6693, lng: 23.8131 },
      { name: "Vitebsk", lat: 55.1904, lng: 30.2049 },
      { name: "Gomel", lat: 52.4345, lng: 30.9754 },
      { name: "Moguilev", lat: 53.8945, lng: 30.3307 }
    ]
  },
  "Bulgarie": {
    flag: "🇧🇬",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 42.7339,
    lng: 25.4858,
    zoom: 7,
    unit: "oblast",
    regions: [
      { name: "Sofia", lat: 42.6977, lng: 23.3219 },
      { name: "Plovdiv", lat: 42.1354, lng: 24.7453 },
      { name: "Varna (Mer Noire)", lat: 43.2141, lng: 27.9147 },
      { name: "Bourgas", lat: 42.5048, lng: 27.4626 },
      { name: "Blagoevgrad (Pirin / Bansko)", lat: 42.0119, lng: 23.0943 },
      { name: "Veliko Tarnovo", lat: 43.0757, lng: 25.6172 }
    ]
  },
  "Hongrie": {
    flag: "🇭🇺",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 47.1625,
    lng: 19.5033,
    zoom: 7,
    unit: "comitats",
    regions: [
      { name: "Budapest", lat: 47.4979, lng: 19.0402 },
      { name: "Pest", lat: 47.35, lng: 19.3 },
      { name: "Veszprém (Lac Balaton)", lat: 47.0928, lng: 17.9093 },
      { name: "Hajdú-Bihar (Debrecen)", lat: 47.5316, lng: 21.6273 },
      { name: "Csongrád-Csanád (Szeged)", lat: 46.253, lng: 20.1414 },
      { name: "Győr-Moson-Sopron", lat: 47.6875, lng: 17.6504 }
    ]
  },
  "Moldavie": {
    flag: "🇲🇩",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 47.4116,
    lng: 28.3699,
    zoom: 7,
    unit: "raions / unités",
    regions: [
      { name: "Chișinău", lat: 47.0105, lng: 28.8638 },
      { name: "Orhei (Orheiul Vechi)", lat: 47.3833, lng: 28.8167 },
      { name: "Gagaouzie (Comrat)", lat: 46.3, lng: 28.65 },
      { name: "Bălți", lat: 47.7631, lng: 27.9294 }
    ]
  },
  "Pologne": {
    flag: "🇵🇱",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 51.9194,
    lng: 19.1451,
    zoom: 6,
    unit: "voïvodies",
    regions: [
      { name: "Petite-Pologne (Cracovie / Zakopane)", lat: 50.0647, lng: 19.945 },
      { name: "Mazovie (Varsovie)", lat: 52.2297, lng: 21.0122 },
      { name: "Basse-Silésie (Wrocław)", lat: 51.1079, lng: 17.0385 },
      { name: "Poméranie (Gdańsk)", lat: 54.352, lng: 18.6466 },
      { name: "Grande-Pologne (Poznań)", lat: 52.4064, lng: 16.9252 },
      { name: "Varmie-Mazurie", lat: 53.8665, lng: 20.55 }
    ]
  },
  "République tchèque": {
    flag: "🇨🇿",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 49.8175,
    lng: 15.473,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Prague", lat: 50.0755, lng: 14.4378 },
      { name: "Bohême-du-Sud (Český Krumlov)", lat: 48.8127, lng: 14.3175 },
      { name: "Moravie-du-Sud (Brno)", lat: 49.1951, lng: 16.6068 },
      { name: "Karlovy Vary", lat: 50.2327, lng: 12.8712 },
      { name: "Hradec Králové", lat: 50.2104, lng: 15.8252 }
    ]
  },
  "Roumanie": {
    flag: "🇷🇴",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 45.9432,
    lng: 24.9668,
    zoom: 6,
    unit: "départements",
    regions: [
      { name: "Bucarest", lat: 44.4268, lng: 26.1025 },
      { name: "Brașov (Transylvanie)", lat: 45.6427, lng: 25.5887 },
      { name: "Cluj", lat: 46.7712, lng: 23.6236 },
      { name: "Sibiu", lat: 45.7983, lng: 24.1256 },
      { name: "Suceava (Bucovine)", lat: 47.6514, lng: 26.2555 },
      { name: "Constanța (Littoral / Delta du Danube)", lat: 44.1598, lng: 28.6348 },
      { name: "Maramureș", lat: 47.6573, lng: 23.5681 }
    ]
  },
  "Russie": {
    flag: "🇷🇺",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 61.524,
    lng: 105.3188,
    zoom: 3,
    unit: "sujets fédéraux",
    regions: [
      { name: "Moscou", lat: 55.7558, lng: 37.6173 },
      { name: "Saint-Pétersbourg", lat: 59.9343, lng: 30.3351 },
      { name: "Kraï du Kamtchatka", lat: 53.0452, lng: 158.6529 },
      { name: "Bouriatie / Irkoutsk (Lac Baïkal)", lat: 52.2978, lng: 104.2964 },
      { name: "Kraï de Krasnoïarsk", lat: 56.0153, lng: 92.8932 },
      { name: "Kraï de Krasnodar (Sotchi)", lat: 43.5855, lng: 39.7231 },
      { name: "République de Carélie", lat: 61.785, lng: 34.3469 }
    ]
  },
  "Slovaquie": {
    flag: "🇸🇰",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 48.669,
    lng: 19.699,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Bratislava", lat: 48.1486, lng: 17.1077 },
      { name: "Prešov (Hautes Tatras)", lat: 49.0, lng: 21.2333 },
      { name: "Žilina", lat: 49.2231, lng: 18.7394 },
      { name: "Košice", lat: 48.7164, lng: 21.2611 },
      { name: "Banská Bystrica", lat: 48.7363, lng: 19.1462 }
    ]
  },
  "Ukraine": {
    flag: "🇺🇦",
    continent: "Europe",
    subcontinent: "Europe de l'Est",
    lat: 48.3794,
    lng: 31.1656,
    zoom: 6,
    unit: "oblasts",
    regions: [
      { name: "Kyiv", lat: 50.4501, lng: 30.5234 },
      { name: "Lviv", lat: 49.8397, lng: 24.0297 },
      { name: "Odessa", lat: 46.4825, lng: 30.7233 },
      { name: "Kharkiv", lat: 49.9935, lng: 36.2304 },
      { name: "Ivano-Frankivsk (Carpates)", lat: 48.9226, lng: 24.7111 }
    ]
  },
  "Albanie": {
    flag: "🇦🇱",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 41.1533,
    lng: 20.1683,
    zoom: 7,
    unit: "préfectures",
    regions: [
      { name: "Tirana", lat: 41.3275, lng: 19.8187 },
      { name: "Vlorë (Riviera albanaise / Ksamil)", lat: 40.4667, lng: 19.4833 },
      { name: "Shkodër (Alpes albanaises)", lat: 42.0683, lng: 19.5126 },
      { name: "Berat", lat: 40.7058, lng: 19.9522 },
      { name: "Gjirokastër", lat: 40.0758, lng: 20.1389 },
      { name: "Korçë (Lac d'Ohrid)", lat: 40.6186, lng: 20.7808 }
    ]
  },
  "Andorre": {
    flag: "🇦🇩",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 42.5063,
    lng: 1.5218,
    zoom: 11,
    unit: "paroisses",
    regions: [
      { name: "Andorre-la-Vieille", lat: 42.5063, lng: 1.5218 },
      { name: "Canillo (Grandvalira)", lat: 42.5678, lng: 1.5989 },
      { name: "Ordino", lat: 42.5561, lng: 1.5333 },
      { name: "La Massana", lat: 42.5456, lng: 1.5147 },
      { name: "Encamp", lat: 42.5347, lng: 1.5803 }
    ]
  },
  "Bosnie-Herzégovine": {
    flag: "🇧🇦",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 43.9159,
    lng: 17.6791,
    zoom: 7,
    unit: "entités / cantons",
    regions: [
      { name: "Sarajevo", lat: 43.8563, lng: 18.4131 },
      { name: "Herzégovine-Neretva (Mostar)", lat: 43.3438, lng: 17.8078 },
      { name: "République serbe de Bosnie (Banja Luka)", lat: 44.7722, lng: 17.191 },
      { name: "Una-Sana (Jajce / Bihać)", lat: 44.8169, lng: 15.8697 }
    ]
  },
  "Croatie": {
    flag: "🇭🇷",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 45.1,
    lng: 15.2,
    zoom: 7,
    unit: "comitats",
    regions: [
      { name: "Dubrovnik-Neretva (Dubrovnik / Korčula)", lat: 42.6507, lng: 18.0944 },
      { name: "Split-Dalmatie (Split / Hvar)", lat: 43.5081, lng: 16.4402 },
      { name: "Istrie (Rovinj / Pula)", lat: 45.0812, lng: 13.6387 },
      { name: "Primorje-Gorski Kotar (Rijeka / Krk)", lat: 45.3271, lng: 14.4422 },
      { name: "Zadar", lat: 44.1194, lng: 15.2314 },
      { name: "Lika-Senj (Lacs de Plitvice)", lat: 44.8654, lng: 15.582 },
      { name: "Zagreb", lat: 45.815, lng: 15.9819 }
    ]
  },
  "Espagne": {
    flag: "🇪🇸",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 40.4637,
    lng: -3.7492,
    zoom: 6,
    unit: "communautés autonomes",
    regions: [
      { name: "Catalogne (Barcelone / Costa Brava)", lat: 41.3851, lng: 2.1734 },
      { name: "Andalousie (Séville / Grenade / Málaga)", lat: 37.3891, lng: -5.9845 },
      { name: "Communauté de Madrid", lat: 40.4168, lng: -3.7038 },
      { name: "Communauté valencienne (Valence / Alicante)", lat: 39.4699, lng: -0.3763 },
      { name: "Îles Baléares (Majorque / Ibiza)", lat: 39.5696, lng: 2.6502 },
      { name: "Îles Canaries (Tenerife / Lanzarote / Gran Canaria)", lat: 28.2916, lng: -16.6291 },
      { name: "Galice (Saint-Jacques-de-Compostelle)", lat: 42.8805, lng: -8.5457 },
      { name: "Pays basque espagnol (Saint-Sébastien / Bilbao)", lat: 43.3183, lng: -1.9812 },
      { name: "Castille-et-León", lat: 41.6523, lng: -4.7245 },
      { name: "Aragon", lat: 41.6488, lng: -0.8891 },
      { name: "Asturies", lat: 43.3614, lng: -5.8493 }
    ]
  },
  "Grèce": {
    flag: "🇬🇷",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 39.0742,
    lng: 21.8243,
    zoom: 6,
    unit: "périphéries",
    regions: [
      { name: "Attique (Athènes)", lat: 37.9838, lng: 23.7275 },
      { name: "Égée-Méridionale (Santorin / Mykonos / Rhodes)", lat: 36.3932, lng: 25.4615 },
      { name: "Crète", lat: 35.2401, lng: 24.8093 },
      { name: "Îles Ioniennes (Corfou / Céphalonie / Zakynthos)", lat: 39.6243, lng: 19.9217 },
      { name: "Macédoine-Centrale (Thessalonique / Chalcidique)", lat: 40.6401, lng: 22.9444 },
      { name: "Péloponnèse", lat: 37.5089, lng: 22.3794 },
      { name: "Thessalie (Météores)", lat: 39.7217, lng: 21.6306 }
    ]
  },
  "Italie": {
    flag: "🇮🇹",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 41.8719,
    lng: 12.5674,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Latium (Rome)", lat: 41.9028, lng: 12.4964 },
      { name: "Toscane (Florence / Sienne / Val d'Orcia)", lat: 43.7696, lng: 11.2558 },
      { name: "Vénétie (Venise / Vérone / Dolomites)", lat: 45.4408, lng: 12.3155 },
      { name: "Lombardie (Milan / Lac de Côme)", lat: 45.4642, lng: 9.19 },
      { name: "Campanie (Naples / Côte amalfitaine)", lat: 40.8518, lng: 14.2681 },
      { name: "Sicile", lat: 37.5999, lng: 14.0154 },
      { name: "Sardaigne", lat: 40.1209, lng: 9.0129 },
      { name: "Pouilles", lat: 41.1171, lng: 16.8719 },
      { name: "Ligurie (Cinque Terre / Gênes)", lat: 44.4056, lng: 8.9463 },
      { name: "Piémont (Turin)", lat: 45.0703, lng: 7.6869 },
      { name: "Émilie-Romagne (Bologne)", lat: 44.4949, lng: 11.3426 },
      { name: "Trentin-Haut-Adige (Dolomites)", lat: 46.4983, lng: 11.3548 }
    ]
  },
  "Macédoine du Nord": {
    flag: "🇲🇰",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 41.6086,
    lng: 21.7453,
    zoom: 8,
    unit: "régions statistiques",
    regions: [
      { name: "Skopje", lat: 41.9973, lng: 21.428 },
      { name: "Sud-Ouest (Lac d'Ohrid)", lat: 41.1231, lng: 20.8016 },
      { name: "Pélagonie (Bitola)", lat: 41.0319, lng: 21.3347 },
      { name: "Vardar", lat: 41.55, lng: 21.85 }
    ]
  },
  "Malte": {
    flag: "🇲🇹",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 35.9375,
    lng: 14.3754,
    zoom: 11,
    unit: "régions / îles",
    regions: [
      { name: "Malte (La Valette / Mdina / Sud)", lat: 35.8989, lng: 14.5146 },
      { name: "Gozo (Victoria)", lat: 36.0444, lng: 14.2397 },
      { name: "Comino (Blue Lagoon)", lat: 36.0117, lng: 14.3358 }
    ]
  },
  "Monténégro": {
    flag: "🇲🇪",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 42.7087,
    lng: 19.3744,
    zoom: 8,
    unit: "municipalités",
    regions: [
      { name: "Kotor / Bouches de Kotor", lat: 42.4247, lng: 18.7712 },
      { name: "Budva (Riviera)", lat: 42.2911, lng: 18.8403 },
      { name: "Podgorica", lat: 42.4304, lng: 19.2594 },
      { name: "Žabljak (Durmitor)", lat: 43.1544, lng: 19.1231 },
      { name: "Cetinje (Lovćen)", lat: 42.3906, lng: 18.9142 }
    ]
  },
  "Portugal": {
    flag: "🇵🇹",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 39.3999,
    lng: -8.2245,
    zoom: 7,
    unit: "régions / districts",
    regions: [
      { name: "Grand Lisbonne / Lisbonne", lat: 38.7223, lng: -9.1393 },
      { name: "Nord (Porto / Vallée du Douro)", lat: 41.1579, lng: -8.6291 },
      { name: "Algarve (Faro / Lagos)", lat: 37.0179, lng: -7.9304 },
      { name: "Centre (Coimbra / Nazaré)", lat: 40.2033, lng: -8.4103 },
      { name: "Alentejo (Évora)", lat: 38.5714, lng: -7.9093 },
      { name: "Archipel des Açores", lat: 37.7412, lng: -25.6756 },
      { name: "Archipel de Madère", lat: 32.7607, lng: -16.9595 }
    ]
  },
  "Saint-Marin": {
    flag: "🇸🇲",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 43.9424,
    lng: 12.4578,
    zoom: 12,
    unit: "châteaux",
    regions: [
      { name: "Saint-Marin (Ville)", lat: 43.9366, lng: 12.4463 },
      { name: "Borgo Maggiore", lat: 43.9417, lng: 12.4486 },
      { name: "Serravalle", lat: 43.9689, lng: 12.4767 }
    ]
  },
  "Serbie": {
    flag: "🇷🇸",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 44.0165,
    lng: 21.0059,
    zoom: 7,
    unit: "districts",
    regions: [
      { name: "Belgrade", lat: 44.7866, lng: 20.4489 },
      { name: "Voïvodine (Novi Sad)", lat: 45.2671, lng: 19.8335 },
      { name: "Nišava (Niš)", lat: 43.3209, lng: 21.8958 },
      { name: "Zlatibor", lat: 43.65, lng: 19.7 }
    ]
  },
  "Slovénie": {
    flag: "🇸🇮",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 46.1512,
    lng: 14.9955,
    zoom: 8,
    unit: "régions statistiques",
    regions: [
      { name: "Slovénie centrale (Ljubljana)", lat: 46.0569, lng: 14.5058 },
      { name: "Haute-Carniole (Lac de Bled / Alpes juliennes)", lat: 46.3683, lng: 14.1146 },
      { name: "Littoral-Karst (Piran / Grottes de Postojna)", lat: 45.5283, lng: 13.5683 },
      { name: "Drava (Maribor)", lat: 46.5547, lng: 15.6459 },
      { name: "Gorizia (Vallée de la Soča)", lat: 46.03, lng: 13.62 }
    ]
  },
  "Vatican": {
    flag: "🇻🇦",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 41.9029,
    lng: 12.4534,
    zoom: 15,
    unit: "secteurs",
    regions: [
      { name: "Place et Basilique Saint-Pierre", lat: 41.9022, lng: 12.4539 },
      { name: "Musées du Vatican & Jardins", lat: 41.9065, lng: 12.4536 }
    ]
  },
  // ==================== ASIE ====================
  "Kazakhstan": {
    flag: "🇰🇿",
    continent: "Asie",
    subcontinent: "Asie centrale",
    lat: 48.0196,
    lng: 66.9237,
    zoom: 4,
    unit: "régions",
    regions: [
      { name: "Almaty (Ville & Région / Monts Tian Shan)", lat: 43.222, lng: 76.8512 },
      { name: "Astana", lat: 51.1694, lng: 71.4491 },
      { name: "Manguistaou (Aktau / Vallée des Boules)", lat: 44.65, lng: 51.1667 },
      { name: "Turkestan", lat: 43.2978, lng: 68.2518 },
      { name: "Kazakhstan oriental", lat: 49.9488, lng: 82.6285 }
    ]
  },
  "Kirghizistan": {
    flag: "🇰🇬",
    continent: "Asie",
    subcontinent: "Asie centrale",
    lat: 41.2044,
    lng: 74.7661,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Tchouï (Bichkek)", lat: 42.8746, lng: 74.5698 },
      { name: "Yssyk-Köl (Lac Yssyk-Köl / Karakol)", lat: 42.4907, lng: 78.3936 },
      { name: "Naryn", lat: 41.4287, lng: 75.9911 },
      { name: "Och", lat: 40.514, lng: 72.7976 },
      { name: "Djalal-Abad", lat: 40.9333, lng: 73.0 }
    ]
  },
  "Ouzbékistan": {
    flag: "🇺🇿",
    continent: "Asie",
    subcontinent: "Asie centrale",
    lat: 41.3775,
    lng: 64.5853,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Samarcande", lat: 39.6542, lng: 66.9597 },
      { name: "Boukhara", lat: 39.7681, lng: 64.4556 },
      { name: "Khorezm (Khiva)", lat: 41.3775, lng: 60.3642 },
      { name: "Tachkent", lat: 41.2995, lng: 69.2401 },
      { name: "Vallée de Ferghana", lat: 40.3842, lng: 71.7843 },
      { name: "Karakalpakstan (Noukous / Mer d'Aral)", lat: 42.4531, lng: 59.6103 }
    ]
  },
  "Tadjikistan": {
    flag: "🇹🇯",
    continent: "Asie",
    subcontinent: "Asie centrale",
    lat: 38.861,
    lng: 71.2761,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Douchanbé", lat: 38.5598, lng: 68.787 },
      { name: "Haut-Badakhchan (Route du Pamir)", lat: 37.4966, lng: 71.5456 },
      { name: "Sughd (Khujand / Monts Fann)", lat: 40.2826, lng: 69.6222 },
      { name: "Khatlon", lat: 37.8333, lng: 68.7833 }
    ]
  },
  "Turkménistan": {
    flag: "🇹🇲",
    continent: "Asie",
    subcontinent: "Asie centrale",
    lat: 38.9697,
    lng: 59.5563,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Achgabat / Ahal (Darvaza)", lat: 37.9601, lng: 58.3261 },
      { name: "Mary (Mérou)", lat: 37.5938, lng: 61.8303 },
      { name: "Lebap", lat: 39.0733, lng: 63.5786 },
      { name: "Balkan", lat: 39.5108, lng: 54.3671 }
    ]
  },
  "Chine": {
    flag: "🇨🇳",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 35.8617,
    lng: 104.1954,
    zoom: 4,
    unit: "provinces / régions",
    regions: [
      { name: "Pékin", lat: 39.9042, lng: 116.4074 },
      { name: "Shanghai", lat: 31.2304, lng: 121.4737 },
      { name: "Sichuan (Chengdu / Jiuzhaigou)", lat: 30.5728, lng: 104.0668 },
      { name: "Yunnan (Kunming / Lijiang / Shangri-La)", lat: 25.0389, lng: 102.7183 },
      { name: "Guangxi (Guilin / Yangshuo)", lat: 25.2742, lng: 110.2991 },
      { name: "Région autonome du Tibet (Lhassa)", lat: 29.65, lng: 91.1 },
      { name: "Shaanxi (Xi'an)", lat: 34.3416, lng: 108.9398 },
      { name: "Zhejiang (Hangzhou)", lat: 30.2741, lng: 120.1551 },
      { name: "Hong Kong / Macao", lat: 22.3193, lng: 114.1694 },
      { name: "Xinjiang", lat: 43.8256, lng: 87.6168 }
    ]
  },
  "Corée du Nord": {
    flag: "🇰🇵",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 40.3399,
    lng: 127.5101,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "Pyongyang", lat: 39.0392, lng: 125.7625 },
      { name: "Hwanghae du Nord (Kaesong)", lat: 37.97, lng: 126.554 },
      { name: "Kangwon (Mont Kumgang)", lat: 38.6667, lng: 128.0833 },
      { name: "Hamgyong du Nord", lat: 41.8, lng: 129.7833 }
    ]
  },
  "Corée du Sud": {
    flag: "🇰🇷",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 35.9078,
    lng: 127.7669,
    zoom: 7,
    unit: "provinces / villes métropolitaines",
    regions: [
      { name: "Séoul", lat: 37.5665, lng: 126.978 },
      { name: "Pusan", lat: 35.1796, lng: 129.0756 },
      { name: "Île de Jeju", lat: 33.4996, lng: 126.5312 },
      { name: "Gyeonggi", lat: 37.4138, lng: 127.5183 },
      { name: "Gyeongsang du Nord (Gyeongju)", lat: 35.8562, lng: 129.2247 },
      { name: "Gangwon", lat: 37.8228, lng: 128.1555 }
    ]
  },
  "Japon": {
    flag: "🇯🇵",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 36.2048,
    lng: 138.2529,
    zoom: 5,
    unit: "préfectures",
    regions: [
      { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
      { name: "Kyoto", lat: 35.0116, lng: 135.7681 },
      { name: "Osaka", lat: 34.6937, lng: 135.5023 },
      { name: "Hokkaidō", lat: 43.0618, lng: 141.3545 },
      { name: "Hiroshima", lat: 34.3853, lng: 132.4553 },
      { name: "Nara", lat: 34.6851, lng: 135.8048 },
      { name: "Ishikawa (Kanazawa)", lat: 36.5613, lng: 136.6562 },
      { name: "Nagano (Alpes japonaises)", lat: 36.6513, lng: 138.181 },
      { name: "Okinawa", lat: 26.2124, lng: 127.6809 },
      { name: "Shizuoka (Mont Fuji)", lat: 34.9756, lng: 138.3828 }
    ]
  },
  "Mongolie": {
    flag: "🇲🇳",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 46.8625,
    lng: 103.8467,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "Oulan-Bator", lat: 47.8864, lng: 106.9057 },
      { name: "Ömnögovi (Désert de Gobi)", lat: 43.57, lng: 104.425 },
      { name: "Arkhangaï (Vallée de l'Orkhon)", lat: 47.8981, lng: 101.4525 },
      { name: "Khövsgöl (Lac Khövsgöl)", lat: 50.4567, lng: 100.16 },
      { name: "Bayan-Ölgii (Altaï)", lat: 48.9667, lng: 89.9625 }
    ]
  },
  "Taïwan": {
    flag: "🇹🇼",
    continent: "Asie",
    subcontinent: "Asie de l'Est",
    lat: 23.6978,
    lng: 120.9605,
    zoom: 7,
    unit: "comtés / villes",
    regions: [
      { name: "Taipei / Nouveau Taipei", lat: 25.033, lng: 121.5654 },
      { name: "Hualien (Gorges de Taroko)", lat: 23.9872, lng: 121.6016 },
      { name: "Tainan", lat: 22.9998, lng: 120.227 },
      { name: "Kaohsiung", lat: 22.6273, lng: 120.3014 },
      { name: "Nantou (Lac du Soleil et de la Lune)", lat: 23.8388, lng: 120.9876 },
      { name: "Chiayi (Alishan)", lat: 23.4801, lng: 120.4491 }
    ]
  },
  "Afghanistan": {
    flag: "🇦🇫",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 33.9391,
    lng: 67.71,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Kaboul", lat: 34.5553, lng: 69.2075 },
      { name: "Bâmiyân", lat: 34.81, lng: 67.8211 },
      { name: "Hérat", lat: 34.3529, lng: 62.204 },
      { name: "Balkh (Mazâr-e Charîf)", lat: 36.758, lng: 67.1109 }
    ]
  },
  "Bangladesh": {
    flag: "🇧🇩",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 23.685,
    lng: 90.3563,
    zoom: 7,
    unit: "divisions",
    regions: [
      { name: "Dacca", lat: 23.8103, lng: 90.4125 },
      { name: "Chittagong (Cox's Bazar)", lat: 22.3569, lng: 91.7832 },
      { name: "Sylhet (Srimangal)", lat: 24.8949, lng: 91.8687 },
      { name: "Khulna (Sundarbans)", lat: 22.8456, lng: 89.5403 },
      { name: "Rajshahi", lat: 24.3745, lng: 88.6042 }
    ]
  },
  "Bhoutan": {
    flag: "🇧🇹",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 27.5142,
    lng: 90.4336,
    zoom: 8,
    unit: "districts",
    regions: [
      { name: "Thimphou", lat: 27.4728, lng: 89.639 },
      { name: "Paro (Nid du Tigre)", lat: 27.429, lng: 89.4143 },
      { name: "Punakha", lat: 27.5921, lng: 89.8775 },
      { name: "Bumthang", lat: 27.6417, lng: 90.7286 }
    ]
  },
  "Inde": {
    flag: "🇮🇳",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 20.5937,
    lng: 78.9629,
    zoom: 4,
    unit: "États / territoires",
    regions: [
      { name: "Rajasthan (Jaipur / Udaipur / Jodhpur)", lat: 26.9124, lng: 75.7873 },
      { name: "Kerala (Backwaters / Kochi / Munnar)", lat: 10.8505, lng: 76.2711 },
      { name: "Delhi", lat: 28.6139, lng: 77.209 },
      { name: "Uttar Pradesh (Agra / Varanasi)", lat: 27.1767, lng: 78.0081 },
      { name: "Himachal Pradesh (Manali / Shimla)", lat: 31.1048, lng: 77.1734 },
      { name: "Ladakh (Leh)", lat: 34.1526, lng: 77.5771 },
      { name: "Goa", lat: 15.2993, lng: 74.124 },
      { name: "Maharashtra (Mumbai)", lat: 19.076, lng: 72.8777 },
      { name: "Tamil Nadu", lat: 13.0827, lng: 80.2707 },
      { name: "Bengale-Occidental (Calcutta / Darjeeling)", lat: 22.5726, lng: 88.3639 }
    ]
  },
  "Maldives": {
    flag: "🇲🇻",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 3.2028,
    lng: 73.2207,
    zoom: 7,
    unit: "atolls",
    regions: [
      { name: "Atoll de Malé (Kaafu)", lat: 4.1755, lng: 73.5093 },
      { name: "Atoll d'Ari (Alifu)", lat: 3.8667, lng: 72.8333 },
      { name: "Atoll de Baa", lat: 5.05, lng: 72.95 },
      { name: "Atoll de South Malé", lat: 3.9, lng: 73.45 },
      { name: "Atoll d'Addu", lat: -0.6333, lng: 73.15 }
    ]
  },
  "Népal": {
    flag: "🇳🇵",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 28.3949,
    lng: 84.124,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "Bagmati (Katmandou / Bhaktapur / Langtang)", lat: 27.7172, lng: 85.324 },
      { name: "Gandaki (Pokhara / Annapurna)", lat: 28.2096, lng: 83.9856 },
      { name: "Province n° 1 / Koshi (Everest / Khumbu)", lat: 27.9881, lng: 86.925 },
      { name: "Lumbini (Chitwan / Lumbini)", lat: 27.5291, lng: 84.3542 }
    ]
  },
  "Pakistan": {
    flag: "🇵🇰",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 30.3753,
    lng: 69.3451,
    zoom: 5,
    unit: "provinces / territoires",
    regions: [
      { name: "Gilgit-Baltistan (Hunza / Skardu)", lat: 35.8026, lng: 74.9832 },
      { name: "Pendjab (Lahore / Islamabad)", lat: 31.5204, lng: 74.3587 },
      { name: "Sindh (Karachi)", lat: 24.8607, lng: 67.0011 },
      { name: "Khyber Pakhtunkhwa (Peshawar / Vallée de Swat)", lat: 34.0151, lng: 71.5249 }
    ]
  },
  "Sri Lanka": {
    flag: "🇱🇰",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: 7.8731,
    lng: 80.7718,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "Province du Centre (Kandy / Nuwara Eliya)", lat: 7.2906, lng: 80.6337 },
      { name: "Province du Sud (Galle / Mirissa / Yala)", lat: 6.0535, lng: 80.221 },
      { name: "Province du Centre-Nord (Sigiriya / Anuradhapura)", lat: 7.957, lng: 80.7603 },
      { name: "Province de l'Ouest (Colombo)", lat: 6.9271, lng: 79.8612 },
      { name: "Province d'Uva (Ella)", lat: 6.8667, lng: 81.0466 }
    ]
  },
  "Birmanie": {
    flag: "🇲🇲",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 21.9162,
    lng: 95.956,
    zoom: 6,
    unit: "régions / États",
    regions: [
      { name: "Mandalay (Bagan)", lat: 21.9588, lng: 96.0891 },
      { name: "Rangoun (Yangon)", lat: 16.8661, lng: 96.1951 },
      { name: "État Shan (Lac Inle)", lat: 20.675, lng: 96.915 },
      { name: "Ayeyarwady", lat: 16.7833, lng: 94.7333 }
    ]
  },
  "Brunei": {
    flag: "🇧🇳",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 4.5353,
    lng: 114.7277,
    zoom: 9,
    unit: "districts",
    regions: [
      { name: "Brunei-Muara (Bandar Seri Begawan)", lat: 4.9031, lng: 114.9398 },
      { name: "Temburong (Ulu Temburong)", lat: 4.6167, lng: 115.0833 },
      { name: "Belait", lat: 4.5833, lng: 114.2333 },
      { name: "Tutong", lat: 4.8, lng: 114.65 }
    ]
  },
  "Cambodge": {
    flag: "🇰🇭",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 12.5657,
    lng: 104.991,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "Siem Reap (Angkor)", lat: 13.3633, lng: 103.8564 },
      { name: "Phnom Penh", lat: 11.5564, lng: 104.9282 },
      { name: "Kampot / Kep", lat: 10.5942, lng: 104.1844 },
      { name: "Sihanoukville (Koh Rong)", lat: 10.6094, lng: 103.5296 },
      { name: "Battambang", lat: 13.0957, lng: 103.2022 },
      { name: "Mondolkiri / Ratanakiri", lat: 12.4558, lng: 107.1886 }
    ]
  },
  "Indonésie": {
    flag: "🇮🇩",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: -0.7893,
    lng: 113.9213,
    zoom: 4,
    unit: "provinces / îles",
    regions: [
      { name: "Bali", lat: -8.4095, lng: 115.1889 },
      { name: "Java (Yogyakarta / Bromo / Jakarta)", lat: -7.7956, lng: 110.3695 },
      { name: "Petites îles de la Sonde orientales (Komodo / Flores)", lat: -8.65, lng: 121.0794 },
      { name: "Nusa Tenggara occidental (Lombok / Îles Gili)", lat: -8.5833, lng: 116.1167 },
      { name: "Sulawesi du Sud (Toraja)", lat: -3.0, lng: 119.8 },
      { name: "Sumatra (Lac Toba / Bukit Lawang)", lat: 2.6845, lng: 98.8756 },
      { name: "Papouasie occidentale (Raja Ampat)", lat: -0.5, lng: 130.5 },
      { name: "Bornéo (Kalimantan)", lat: -1.6815, lng: 113.3824 }
    ]
  },
  "Laos": {
    flag: "🇱🇦",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 19.8563,
    lng: 102.4955,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Luang Prabang", lat: 19.8856, lng: 102.1347 },
      { name: "Vientiane", lat: 17.9757, lng: 102.6331 },
      { name: "Vang Vieng", lat: 18.9233, lng: 102.4478 },
      { name: "Champassak (Si Phan Don / 4000 Îles)", lat: 14.9, lng: 105.8 },
      { name: "Xieng Khuang (Plaine des Jarres)", lat: 19.4667, lng: 103.2 }
    ]
  },
  "Malaisie": {
    flag: "🇲🇾",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 4.2105,
    lng: 101.9758,
    zoom: 6,
    unit: "États / territoires",
    regions: [
      { name: "Kuala Lumpur", lat: 3.139, lng: 101.6869 },
      { name: "Penang (George Town)", lat: 5.4141, lng: 100.3288 },
      { name: "Sabah (Bornéo / Kota Kinabalu / Semporna)", lat: 5.9788, lng: 116.0753 },
      { name: "Sarawak (Bornéo / Kuching)", lat: 1.5533, lng: 110.3592 },
      { name: "Pahang (Cameron Highlands / Tioman)", lat: 3.8126, lng: 103.3256 },
      { name: "Malacca", lat: 2.1896, lng: 102.2501 },
      { name: "Terengganu (Îles Perhentian)", lat: 5.3117, lng: 103.1324 }
    ]
  },
  "Philippines": {
    flag: "🇵🇭",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 12.8797,
    lng: 121.774,
    zoom: 5,
    unit: "régions / îles",
    regions: [
      { name: "Palawan (El Nido / Coron)", lat: 11.1949, lng: 119.4013 },
      { name: "Visayas centrales (Cebu / Bohol)", lat: 10.3157, lng: 123.8854 },
      { name: "Caraga (Siargao)", lat: 9.8482, lng: 126.0458 },
      { name: "Luçon (Manille / Banaue)", lat: 14.5995, lng: 120.9842 },
      { name: "Western Visayas (Boracay)", lat: 11.9674, lng: 121.9248 }
    ]
  },
  "Singapour": {
    flag: "🇸🇬",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 1.3521,
    lng: 103.8198,
    zoom: 11,
    unit: "régions",
    regions: [
      { name: "Région centrale (Marina Bay / Chinatown)", lat: 1.2834, lng: 103.8607 },
      { name: "Sentosa", lat: 1.2494, lng: 103.8303 },
      { name: "Région Est (Joo Chiat / Changi)", lat: 1.3148, lng: 103.9022 },
      { name: "Région Nord (Mandai)", lat: 1.4043, lng: 103.789 }
    ]
  },
  "Thaïlande": {
    flag: "🇹🇭",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 15.87,
    lng: 100.9925,
    zoom: 6,
    unit: "provinces / régions",
    regions: [
      { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
      { name: "Chiang Mai (Nord)", lat: 18.7883, lng: 98.9853 },
      { name: "Phuket & Mer d'Andaman (Krabi / Phi Phi)", lat: 7.8804, lng: 98.3923 },
      { name: "Surat Thani (Koh Samui / Koh Phangan)", lat: 9.512, lng: 100.0136 },
      { name: "Mae Hong Son (Pai)", lat: 19.3646, lng: 98.4404 },
      { name: "Kanchanaburi", lat: 14.0023, lng: 99.5328 },
      { name: "Ayutthaya", lat: 14.3692, lng: 100.5877 }
    ]
  },
  "Timor oriental": {
    flag: "🇹🇱",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: -8.8742,
    lng: 125.7275,
    zoom: 8,
    unit: "municipalités",
    regions: [
      { name: "Díli (Île d'Atauro)", lat: -8.5569, lng: 125.5603 },
      { name: "Baucau", lat: -8.4756, lng: 126.4581 },
      { name: "Lautém (Jaco / Tutuala)", lat: -8.3667, lng: 127.2333 },
      { name: "Oecusse", lat: -9.2, lng: 124.3833 }
    ]
  },
  "Viêt Nam": {
    flag: "🇻🇳",
    continent: "Asie",
    subcontinent: "Asie du Sud-Est",
    lat: 14.0583,
    lng: 108.2772,
    zoom: 6,
    unit: "provinces / régions",
    regions: [
      { name: "Nord (Hanoï / Baie d'Ha Long / Sapa)", lat: 21.0285, lng: 105.8542 },
      { name: "Centre (Hội An / Huê / Đà Nẵng)", lat: 15.8801, lng: 108.338 },
      { name: "Sud (Hô Chi Minh-Ville / Delta du Mékong)", lat: 10.8231, lng: 106.6297 },
      { name: "Lâm Đồng (Đà Lạt)", lat: 11.9404, lng: 108.4583 },
      { name: "Khánh Hòa (Nha Trang)", lat: 12.2388, lng: 109.1967 },
      { name: "Kiên Giang (Phú Quốc)", lat: 10.227, lng: 103.9671 }
    ]
  },
  "Arabie saoudite": {
    flag: "🇸🇦",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 23.8859,
    lng: 45.0792,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "Médine (Al-Ula)", lat: 26.6167, lng: 37.9167 },
      { name: "Riyad", lat: 24.7136, lng: 46.6753 },
      { name: "La Mecque (Djeddah)", lat: 21.4858, lng: 39.1925 },
      { name: "Province orientale", lat: 26.4207, lng: 50.0888 },
      { name: "'Asir (Abha)", lat: 18.2164, lng: 42.5053 }
    ]
  },
  "Arménie": {
    flag: "🇦🇲",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 40.0691,
    lng: 45.0382,
    zoom: 8,
    unit: "provinces",
    regions: [
      { name: "Erevan", lat: 40.1792, lng: 44.4991 },
      { name: "Gegharkunik (Lac Sevan)", lat: 40.5569, lng: 44.9585 },
      { name: "Syunik (Tatev / Goris)", lat: 39.5, lng: 46.2 },
      { name: "Tavush (Dilidjan)", lat: 40.7414, lng: 44.8636 },
      { name: "Ararat (Khor Virap)", lat: 39.8764, lng: 44.575 }
    ]
  },
  "Azerbaïdjan": {
    flag: "🇦🇿",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 40.1431,
    lng: 47.5769,
    zoom: 7,
    unit: "régions économiques",
    regions: [
      { name: "Bakou / Abchéron", lat: 40.4093, lng: 49.8671 },
      { name: "Chéki-Zagatala (Chéki)", lat: 41.1919, lng: 47.1706 },
      { name: "Gouba-Khatchmaz", lat: 41.3611, lng: 48.5144 },
      { name: "Gandja-Dashkesan", lat: 40.6828, lng: 46.3606 },
      { name: "Lankaran-Astara", lat: 38.7543, lng: 48.8506 }
    ]
  },
  "Bahreïn": {
    flag: "🇧🇭",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 26.0667,
    lng: 50.5577,
    zoom: 10,
    unit: "gouvernorats",
    regions: [
      { name: "Capitale (Manama)", lat: 26.2285, lng: 50.586 },
      { name: "Muharraq", lat: 26.2572, lng: 50.6119 },
      { name: "Sud (Sakhir / Hawar)", lat: 25.95, lng: 50.55 },
      { name: "Nord", lat: 26.15, lng: 50.4833 }
    ]
  },
  "Chypre": {
    flag: "🇨🇾",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 35.1264,
    lng: 33.4299,
    zoom: 8,
    unit: "districts",
    regions: [
      { name: "Paphos", lat: 34.7754, lng: 32.4245 },
      { name: "Limassol", lat: 34.6841, lng: 33.0379 },
      { name: "Larnaca", lat: 34.9167, lng: 33.6233 },
      { name: "Nicosie", lat: 35.1856, lng: 33.3823 },
      { name: "Famagouste (Ayia Napa)", lat: 34.9821, lng: 34.0018 }
    ]
  },
  "Émirats arabes unis": {
    flag: "🇦🇪",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 23.4241,
    lng: 53.8478,
    zoom: 7,
    unit: "émirats",
    regions: [
      { name: "Dubaï", lat: 25.2048, lng: 55.2708 },
      { name: "Abou Dabi (Al Ain)", lat: 24.4539, lng: 54.3773 },
      { name: "Charjah", lat: 25.3463, lng: 55.4209 },
      { name: "Ras el Khaïmah", lat: 25.7895, lng: 55.9432 },
      { name: "Fujaïrah", lat: 25.1288, lng: 56.3265 }
    ]
  },
  "Géorgie": {
    flag: "🇬🇪",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 42.3154,
    lng: 43.3569,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Tbilissi", lat: 41.7151, lng: 44.8271 },
      { name: "Mtskheta-Mtianeti (Kazbegi / Stepantsminda)", lat: 42.6596, lng: 44.6422 },
      { name: "Kakhétie", lat: 41.6333, lng: 45.7 },
      { name: "Svanétie / Samegrelo (Mestia)", lat: 43.0458, lng: 42.7278 },
      { name: "Adjarie (Batoumi)", lat: 41.6168, lng: 41.6367 },
      { name: "Iméréthie (Koutaïssi)", lat: 42.2679, lng: 42.6946 }
    ]
  },
  "Irak": {
    flag: "🇮🇶",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 33.2232,
    lng: 43.6793,
    zoom: 6,
    unit: "gouvernorats",
    regions: [
      { name: "Bagdad", lat: 33.3152, lng: 44.3661 },
      { name: "Erbil (Kurdistan irakien)", lat: 36.1911, lng: 44.0092 },
      { name: "Duhok", lat: 36.8669, lng: 42.9503 },
      { name: "Nadjaf", lat: 31.9996, lng: 44.3267 },
      { name: "Bassora", lat: 30.5085, lng: 47.7804 }
    ]
  },
  "Iran": {
    flag: "🇮🇷",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 32.4279,
    lng: 53.688,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "Fars (Chiraz / Persépolis)", lat: 29.5918, lng: 52.5837 },
      { name: "Ispahan", lat: 32.6539, lng: 51.666 },
      { name: "Téhéran", lat: 35.6892, lng: 51.389 },
      { name: "Yazd", lat: 31.8974, lng: 54.3569 },
      { name: "Kerman", lat: 30.2839, lng: 57.0834 },
      { name: "Hormozgan (Île de Qeshm)", lat: 26.95, lng: 56.2667 },
      { name: "Khorassan-e Razavi (Machhad)", lat: 36.2605, lng: 59.6168 }
    ]
  },
  "Israël": {
    flag: "🇮🇱",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 31.0461,
    lng: 34.8516,
    zoom: 7,
    unit: "districts",
    regions: [
      { name: "Tel Aviv", lat: 32.0853, lng: 34.7818 },
      { name: "Jérusalem", lat: 31.7683, lng: 35.2137 },
      { name: "Nord (Galilée / Lac de Tibériade)", lat: 32.794, lng: 35.5317 },
      { name: "Sud (Désert du Néguev / Eilat)", lat: 29.5581, lng: 34.9482 },
      { name: "Haïfa", lat: 32.794, lng: 34.9896 }
    ]
  },
  "Jordanie": {
    flag: "🇯🇴",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 30.5852,
    lng: 36.2384,
    zoom: 7,
    unit: "gouvernorats",
    regions: [
      { name: "Amman", lat: 31.9454, lng: 35.9284 },
      { name: "Ma'an (Pétra)", lat: 30.3285, lng: 35.4444 },
      { name: "Aqaba (Wadi Rum / Mer Rouge)", lat: 29.5321, lng: 35.0063 },
      { name: "Madaba / Mer Morte", lat: 31.716, lng: 35.7939 },
      { name: "Ajloun / Jerash", lat: 32.3326, lng: 35.7517 }
    ]
  },
  "Koweït": {
    flag: "🇰🇼",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 29.3117,
    lng: 47.4818,
    zoom: 9,
    unit: "gouvernorats",
    regions: [
      { name: "Al Asimah (Koweït City)", lat: 29.3759, lng: 47.9774 },
      { name: "Hawalli", lat: 29.3328, lng: 48.0286 },
      { name: "Al Ahmadi", lat: 29.0769, lng: 48.0839 },
      { name: "Al Jahra", lat: 29.3375, lng: 47.6581 }
    ]
  },
  "Liban": {
    flag: "🇱🇧",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 33.8547,
    lng: 35.8623,
    zoom: 8,
    unit: "gouvernorats",
    regions: [
      { name: "Beyrouth", lat: 33.8938, lng: 35.5018 },
      { name: "Mont-Liban (Byblos / Chouf)", lat: 34.1236, lng: 35.6511 },
      { name: "Nord (Batroun / Cèdres de Bcharré)", lat: 34.2553, lng: 35.6581 },
      { name: "Bekaa (Baalbek / Ksara)", lat: 34.0058, lng: 36.2181 },
      { name: "Sud (Tyr / Saïda)", lat: 33.2705, lng: 35.2038 }
    ]
  },
  "Oman": {
    flag: "🇴🇲",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 21.4735,
    lng: 55.9754,
    zoom: 6,
    unit: "gouvernorats",
    regions: [
      { name: "Mascate", lat: 23.588, lng: 58.3829 },
      { name: "Ad Dakhiliyah (Nizwa / Djebel Akhdar)", lat: 22.9333, lng: 57.5333 },
      { name: "Chamal ach-Charqiya (Wahiba Sands / Sour)", lat: 22.5667, lng: 59.5289 },
      { name: "Dhofar (Salalah)", lat: 17.0151, lng: 54.0924 },
      { name: "Moussandam (Khasab)", lat: 26.1799, lng: 56.2477 }
    ]
  },
  "Palestine": {
    flag: "🇵🇸",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 31.9522,
    lng: 35.2332,
    zoom: 9,
    unit: "gouvernorats",
    regions: [
      { name: "Bethléem", lat: 31.7054, lng: 35.2024 },
      { name: "Ramallah et Al-Bireh", lat: 31.9038, lng: 35.2034 },
      { name: "Naplouse", lat: 32.2211, lng: 35.2544 },
      { name: "Jéricho", lat: 31.8667, lng: 35.45 },
      { name: "Hébron", lat: 31.5326, lng: 35.0998 }
    ]
  },
  "Qatar": {
    flag: "🇶🇦",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 25.3548,
    lng: 51.1839,
    zoom: 9,
    unit: "municipalités",
    regions: [
      { name: "Doha", lat: 25.2854, lng: 51.531 },
      { name: "Al Wakrah", lat: 25.1715, lng: 51.6034 },
      { name: "Al Khor", lat: 25.6804, lng: 51.5055 },
      { name: "Al Rayyan", lat: 25.2919, lng: 51.4244 }
    ]
  },
  "Syrie": {
    flag: "🇸🇾",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 34.8021,
    lng: 38.9968,
    zoom: 7,
    unit: "gouvernorats",
    regions: [
      { name: "Damas", lat: 33.5138, lng: 36.2765 },
      { name: "Alep", lat: 36.2021, lng: 37.1343 },
      { name: "Homs (Palmyre)", lat: 34.7324, lng: 36.7137 },
      { name: "Lattaquié", lat: 35.5167, lng: 35.7833 }
    ]
  },
  "Turquie": {
    flag: "🇹🇷",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 38.9637,
    lng: 35.2433,
    zoom: 6,
    unit: "provinces / régions",
    regions: [
      { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
      { name: "Nevşehir (Cappadoce)", lat: 38.6431, lng: 34.6857 },
      { name: "Antalya (Riviera turque)", lat: 36.8969, lng: 30.7133 },
      { name: "Muğla (Bodrum / Fethiye / Marmaris)", lat: 37.2153, lng: 28.3636 },
      { name: "Izmir (Éphèse)", lat: 38.4237, lng: 27.1428 },
      { name: "Denizli (Pamukkale)", lat: 37.7765, lng: 29.0864 },
      { name: "Ankara", lat: 39.9334, lng: 32.8597 },
      { name: "Trabzon (Mer Noire)", lat: 41.0027, lng: 39.7168 }
    ]
  },
  "Yémen": {
    flag: "🇾🇪",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 15.5527,
    lng: 48.5164,
    zoom: 6,
    unit: "gouvernorats",
    regions: [
      { name: "Sanaa", lat: 15.3694, lng: 44.191 },
      { name: "Socotra", lat: 12.4634, lng: 53.8237 },
      { name: "Hadramaout (Shibam)", lat: 15.9269, lng: 48.6267 },
      { name: "Aden", lat: 12.7855, lng: 45.0187 }
    ]
  },

  // ==================== AJOUTS COMPLÉMENTAIRES ====================
  
  "Île Christmas": {
    flag: "🇨🇽",
    continent: "Océanie",
    subcontinent: "Australasie",
    lat: -10.4475,
    lng: 105.6904,
    zoom: 11,
    unit: "secteurs",
    regions: [
      { name: "Flying Fish Cove (The Settlement)", lat: -10.4228, lng: 105.6789 },
      { name: "Poon Saan", lat: -10.4333, lng: 105.6833 },
      { name: "Côte & Parc national", lat: -10.4833, lng: 105.6333 }
    ]
  },
  "Îles Cocos (Keeling)": {
    flag: "🇨🇨",
    continent: "Océanie",
    subcontinent: "Australasie",
    lat: -12.1642,
    lng: 96.871,
    zoom: 11,
    unit: "atolls / îles",
    regions: [
      { name: "West Island", lat: -12.1886, lng: 96.8294 },
      { name: "Home Island (Bantam)", lat: -12.1922, lng: 96.8939 },
      { name: "South Keeling Atoll", lat: -12.1642, lng: 96.871 }
    ]
  },
  "Îles mineures éloignées des États-Unis": {
    flag: "🇺🇲",
    continent: "Océanie",
    subcontinent: "Polynésie",
    lat: 19.2823,
    lng: 166.647,
    zoom: 4,
    unit: "îles / atolls",
    regions: [
      { name: "Atoll de Midway", lat: 28.2072, lng: -177.3735 },
      { name: "Île de Wake", lat: 19.2796, lng: 166.6499 },
      { name: "Atoll de Palmyra", lat: 5.8833, lng: -162.0833 },
      { name: "Atoll Johnston", lat: 16.7295, lng: -169.5336 },
      { name: "Île Jarvis / Howland / Baker / Kingman", lat: -0.3744, lng: -159.9967 }
    ]
  },
  "Îles Heard-et-MacDonald": {
    flag: "🇭🇲",
    continent: "Antarctique",
    subcontinent: "Antarctique",
    lat: -53.0818,
    lng: 73.5042,
    zoom: 8,
    unit: "îles",
    regions: [
      { name: "Île Heard (Big Ben)", lat: -53.1086, lng: 73.5133 },
      { name: "Îles McDonald", lat: -53.0333, lng: 72.6 }
    ]
  },
  "Svalbard et île Jan Mayen": {
    flag: "🇸🇯",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 77.5536,
    lng: 23.6703,
    zoom: 5,
    unit: "îles / secteurs",
    regions: [
      { name: "Spitsberg (Longyearbyen / Ny-Ålesund)", lat: 78.2232, lng: 15.6267 },
      { name: "Nordaustlandet", lat: 79.6333, lng: 22.0 },
      { name: "Île aux Ours", lat: 74.475, lng: 19.025 },
      { name: "Île Jan Mayen", lat: 71.0318, lng: -8.292 }
    ]
  },
  "Sercq": {
    flag: "🇬🇬",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 49.4319,
    lng: -2.3611,
    zoom: 13,
    unit: "secteurs",
    regions: [
      { name: "Grand Sercq", lat: 49.4319, lng: -2.3611 },
      { name: "Petit Sercq", lat: 49.4175, lng: -2.3667 }
    ]
  },
  "Kosovo": {
    flag: "🇽🇰",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 42.6026,
    lng: 20.903,
    zoom: 8,
    unit: "districts",
    regions: [
      { name: "Pristina", lat: 42.6629, lng: 21.1655 },
      { name: "Prizren", lat: 42.2139, lng: 20.7397 },
      { name: "Peć (Peja / Rugova)", lat: 42.6592, lng: 20.2883 },
      { name: "Gjakova", lat: 42.3803, lng: 20.4308 },
      { name: "Mitrovica", lat: 42.8914, lng: 20.866 }
    ]
  },
  "Sahara occidental": {
    flag: "🇪🇭",
    continent: "Afrique",
    subcontinent: "Afrique du Nord",
    lat: 24.2155,
    lng: -12.8858,
    zoom: 6,
    unit: "secteurs",
    regions: [
      { name: "Laâyoune", lat: 27.1536, lng: -13.2033 },
      { name: "Dakhla", lat: 23.6848, lng: -15.957 },
      { name: "Smara", lat: 26.7384, lng: -11.6719 },
      { name: "Boujdour", lat: 26.1267, lng: -14.4847 }
    ]
  },
  "Terres australes et antarctiques françaises (TAAF)": {
    flag: "🇹🇫",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -49.2804,
    lng: 69.3486,
    zoom: 5,
    unit: "districts",
    regions: [
      { name: "Archipel des Kerguelen (Port-aux-Français)", lat: -49.3511, lng: 70.2189 },
      { name: "Archipel Crozet", lat: -46.4167, lng: 51.75 },
      { name: "Îles Saint-Paul et Amsterdam", lat: -37.8289, lng: 77.5719 },
      { name: "Îles Éparses (Tromelin / Europa / Bassas da India / Juan de Nova / Glorieuses)", lat: -17.05, lng: 42.7333 }
    ]
  },
  "Territoire britannique de l'océan Indien": {
    flag: "🇮🇴",
    continent: "Asie",
    subcontinent: "Asie du Sud",
    lat: -7.3195,
    lng: 72.4229,
    zoom: 8,
    unit: "atolls",
    regions: [
      { name: "Diego Garcia", lat: -7.3133, lng: 72.4222 },
      { name: "Atoll d'Egmont", lat: -6.65, lng: 71.35 },
      { name: "Atoll Peros Banhos", lat: -5.3333, lng: 71.8333 },
      { name: "Atoll Salomon", lat: -5.35, lng: 72.25 }
    ]
  },
  "Île Bouvet": {
    flag: "🇧🇻",
    continent: "Antarctique",
    subcontinent: "Antarctique",
    lat: -54.4208,
    lng: 3.3464,
    zoom: 10,
    unit: "secteurs",
    regions: [
      { name: "Bouvetøya (Calotte glaciaire)", lat: -54.4208, lng: 3.3464 }
    ]
  },
  "Géorgie du Sud-et-les-Îles Sandwich du Sud": {
    flag: "🇬🇸",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -54.4296,
    lng: -36.5879,
    zoom: 6,
    unit: "archipels / sites",
    regions: [
      { name: "Géorgie du Sud (Grytviken / Cumberland Bay)", lat: -54.2817, lng: -36.5092 },
      { name: "Îles Sandwich du Sud", lat: -57.7, lng: -26.45 }
    ]
  },
  "Îles Galápagos": {
    flag: "🇪🇨",
    continent: "Amériques",
    subcontinent: "Amérique du Sud",
    lat: -0.9538,
    lng: -90.9656,
    zoom: 8,
    unit: "îles",
    regions: [
      { name: "Santa Cruz (Puerto Ayora)", lat: -0.7421, lng: -90.3138 },
      { name: "Isabela (Puerto Villamil)", lat: -0.9556, lng: -90.9667 },
      { name: "San Cristóbal (Puerto Baquerizo Moreno)", lat: -0.9019, lng: -89.6086 },
      { name: "Floreana", lat: -1.2833, lng: -90.4333 }
    ]
  },
  "Îles Canaries": {
    flag: "🇪🇸",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 28.2916,
    lng: -16.6291,
    zoom: 7,
    unit: "îles",
    regions: [
      { name: "Tenerife (Teide / Santa Cruz)", lat: 28.2916, lng: -16.6291 },
      { name: "Grande Canarie (Las Palmas)", lat: 27.9202, lng: -15.5474 },
      { name: "Lanzarote (Timanfaya)", lat: 29.0469, lng: -13.59 },
      { name: "Fuerteventura", lat: 28.3587, lng: -14.0537 },
      { name: "La Palma / La Gomera / El Hierro", lat: 28.6835, lng: -17.7642 }
    ]
  },
  "Îles Baléares": {
    flag: "🇪🇸",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 39.5696,
    lng: 2.6502,
    zoom: 8,
    unit: "îles",
    regions: [
      { name: "Majorque (Palma / Serra de Tramuntana)", lat: 39.6953, lng: 3.0176 },
      { name: "Ibiza", lat: 38.9067, lng: 1.4206 },
      { name: "Minorque", lat: 39.9496, lng: 4.1104 },
      { name: "Formentera", lat: 38.7057, lng: 1.455 }
    ]
  },
  "Açores": {
    flag: "🇵🇹",
    continent: "Europe",
    subcontinent: "Europe du Nord",
    lat: 37.7412,
    lng: -25.6756,
    zoom: 7,
    unit: "îles",
    regions: [
      { name: "São Miguel (Ponta Delgada / Sete Cidades)", lat: 37.7833, lng: -25.5833 },
      { name: "Terceira (Angra do Heroísmo)", lat: 38.7239, lng: -27.2197 },
      { name: "Faial / Pico / São Jorge", lat: 38.5833, lng: -28.7 },
      { name: "Flores & Corvo", lat: 39.45, lng: -31.2167 }
    ]
  },
  "Madère": {
    flag: "🇵🇹",
    continent: "Europe",
    subcontinent: "Europe du Sud",
    lat: 32.7607,
    lng: -16.9595,
    zoom: 10,
    unit: "îles / secteurs",
    regions: [
      { name: "Funchal & Côte Sud", lat: 32.6669, lng: -16.9241 },
      { name: "Pico Ruivo / Santana / Nord", lat: 32.7639, lng: -16.9422 },
      { name: "Porto Santo", lat: 33.0667, lng: -16.3333 }
    ]
  },
  "Zanzibar": {
    flag: "🇹🇿",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -6.1659,
    lng: 39.2026,
    zoom: 9,
    unit: "îles / zones",
    regions: [
      { name: "Unguja (Stone Town / Nungwi / Paje)", lat: -6.1659, lng: 39.2026 },
      { name: "Pemba", lat: -5.0333, lng: 39.7667 }
    ]
  },
  "Socotra": {
    flag: "🇾🇪",
    continent: "Asie",
    subcontinent: "Asie de l'Ouest",
    lat: 12.4634,
    lng: 53.8237,
    zoom: 9,
    unit: "îles / zones",
    regions: [
      { name: "Hadiboh", lat: 12.6506, lng: 54.0256 },
      { name: "Qalansiyah & Detwah", lat: 12.6878, lng: 53.4856 },
      { name: "Dixam & Homhil", lat: 12.4333, lng: 54.0 }
    ]
  },

  
  // ==================== AFRIQUE ====================
  "Algérie": {
    flag: "🇩🇿",
    continent: "Afrique",
    subcontinent: "Afrique du Nord",
    lat: 28.0339,
    lng: 1.6596,
    zoom: 5,
    unit: "wilayas",
    regions: [
      { name: "Alger", lat: 36.7538, lng: 3.0588 },
      { name: "Oran", lat: 35.6971, lng: -0.6308 },
      { name: "Ghardaïa (Vallée du M'Zab)", lat: 32.4909, lng: 3.6735 },
      { name: "Tamanrasset (Hoggar / Tassili)", lat: 22.785, lng: 5.5228 },
      { name: "Constantine", lat: 36.365, lng: 6.6147 },
      { name: "Béjaïa (Kabylie)", lat: 36.7509, lng: 5.0567 }
    ]
  },
  "Égypte": {
    flag: "🇪🇬",
    continent: "Afrique",
    subcontinent: "Afrique du Nord",
    lat: 26.8206,
    lng: 30.8025,
    zoom: 6,
    unit: "gouvernorats",
    regions: [
      { name: "Le Caire & Gizeh", lat: 30.0444, lng: 31.2357 },
      { name: "Louxor", lat: 25.6872, lng: 32.6396 },
      { name: "Assouan", lat: 24.0889, lng: 32.8998 },
      { name: "Mer Rouge (Hurghada / Marsa Alam)", lat: 27.2579, lng: 33.8116 },
      { name: "Sinaï du Sud (Charm el-Cheikh / Dahab)", lat: 27.9158, lng: 34.33 },
      { name: "Alexandrie", lat: 31.2001, lng: 29.9187 }
    ]
  },
  "Libye": {
    flag: "🇱🇾",
    continent: "Afrique",
    subcontinent: "Afrique du Nord",
    lat: 26.3351,
    lng: 17.2283,
    zoom: 5,
    unit: "districts",
    regions: [
      { name: "Tripoli", lat: 32.8872, lng: 13.1913 },
      { name: "Ghat (Akakus)", lat: 24.9633, lng: 10.1803 },
      { name: "Benghazi", lat: 32.119, lng: 20.0868 },
      { name: "Ghadamès", lat: 30.1333, lng: 9.5 }
    ]
  },
  "Maroc": {
    flag: "🇲🇦",
    continent: "Afrique",
    subcontinent: "Afrique du Nord",
    lat: 31.7917,
    lng: -7.0926,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Marrakech-Safi (Marrakech / Essaouira)", lat: 31.6295, lng: -7.9811 },
      { name: "Fès-Meknès (Fès / Meknès)", lat: 34.0181, lng: -5.0078 },
      { name: "Tanger-Tétouan-Al Hoceïma (Chefchaouen / Tanger)", lat: 35.1688, lng: -5.2636 },
      { name: "Drâa-Tafilalet (Merzouga / Ouarzazate / Gorges du Dadès)", lat: 31.9314, lng: -4.4244 },
      { name: "Souss-Massa (Agadir / Taroudant)", lat: 30.4278, lng: -9.5981 },
      { name: "Casablanca-Settat", lat: 33.5731, lng: -7.5898 },
      { name: "Rabat-Salé-Kénitra", lat: 34.0209, lng: -6.8416 }
    ]
  },
  "Soudan": {
    flag: "🇸🇩",
    continent: "Afrique",
    subcontinent: "Afrique du Nord",
    lat: 12.8628,
    lng: 30.2176,
    zoom: 5,
    unit: "États",
    regions: [
      { name: "Khartoum", lat: 15.5007, lng: 32.5599 },
      { name: "Nord (Méru / Kerma)", lat: 18.4833, lng: 31.8167 },
      { name: "Mer Rouge (Port-Soudan)", lat: 19.6158, lng: 37.2164 },
      { name: "Nil", lat: 17.595, lng: 33.963 }
    ]
  },
  "Tunisie": {
    flag: "🇹🇳",
    continent: "Afrique",
    subcontinent: "Afrique du Nord",
    lat: 33.8869,
    lng: 9.5375,
    zoom: 7,
    unit: "gouvernorats",
    regions: [
      { name: "Tunis (Carthage / Sidi Bou Saïd)", lat: 36.8065, lng: 10.1815 },
      { name: "Médenine (Djerba / Tataouine)", lat: 33.8076, lng: 10.8451 },
      { name: "Sousse", lat: 35.8256, lng: 10.6369 },
      { name: "Tozeur (Oasis / Chott el-Jérid)", lat: 33.9197, lng: 8.1335 },
      { name: "Nabeul (Cap Bon / Hammamet)", lat: 36.4561, lng: 10.7376 },
      { name: "Kairouan", lat: 35.6781, lng: 10.0963 }
    ]
  },
  "Bénin": {
    flag: "🇧🇯",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 9.3077,
    lng: 2.3158,
    zoom: 7,
    unit: "départements",
    regions: [
      { name: "Littoral (Cotonou)", lat: 6.3654, lng: 2.4183 },
      { name: "Atlantique (Ouidah / Lac Nokoué)", lat: 6.3667, lng: 2.0833 },
      { name: "Ouémé (Porto-Novo)", lat: 6.4969, lng: 2.6289 },
      { name: "Atacora (Natitingou / Parc de la Pendjari)", lat: 10.3042, lng: 1.3796 },
      { name: "Collines (Dassa-Zoumè)", lat: 7.75, lng: 2.1833 }
    ]
  },
  "Burkina Faso": {
    flag: "🇧🇫",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 12.2383,
    lng: -1.5616,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Centre (Ouagadougou)", lat: 12.3714, lng: -1.5197 },
      { name: "Hauts-Bassins (Bobo-Dioulasso)", lat: 11.1771, lng: -4.2979 },
      { name: "Cascades (Banfora)", lat: 10.6333, lng: -4.7667 },
      { name: "Sahel (Gorom-Gorom)", lat: 14.4428, lng: -0.2347 },
      { name: "Est (Fada N'Gourma)", lat: 12.0614, lng: 0.3583 }
    ]
  },
  "Cap-Vert": {
    flag: "🇨🇻",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 16.0021,
    lng: -24.0132,
    zoom: 8,
    unit: "îles / municipalités",
    regions: [
      { name: "Santiago (Praia / Cidade Velha)", lat: 14.9177, lng: -23.5092 },
      { name: "Santo Antão", lat: 17.0667, lng: -25.1667 },
      { name: "São Vicente (Mindelo)", lat: 16.8833, lng: -24.9833 },
      { name: "Sal", lat: 16.75, lng: -22.9167 },
      { name: "Boa Vista", lat: 16.1333, lng: -22.8333 },
      { name: "Fogo", lat: 14.95, lng: -24.3833 }
    ]
  },
  "Côte d'Ivoire": {
    flag: "🇨🇮",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 7.54,
    lng: -5.5471,
    zoom: 7,
    unit: "districts / régions",
    regions: [
      { name: "District d'Abidjan", lat: 5.36, lng: -4.0083 },
      { name: "Yamoussoukro", lat: 6.8276, lng: -5.2893 },
      { name: "Comoé (Grand-Bassam)", lat: 5.2111, lng: -3.7389 },
      { name: "Montagnes (Man)", lat: 7.4125, lng: -7.5539 },
      { name: "Savanes (Korhogo)", lat: 9.458, lng: -5.6296 },
      { name: "Bas-Sassandra (San-Pédro)", lat: 4.7485, lng: -6.6363 }
    ]
  },
  "Gambie": {
    flag: "🇬🇲",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 13.4432,
    lng: -15.3101,
    zoom: 9,
    unit: "régions",
    regions: [
      { name: "Banjul / Côte Atlantique", lat: 13.4549, lng: -16.579 },
      { name: "West Coast (Serekunda / Gunjur)", lat: 13.3, lng: -16.5 },
      { name: "Central River (Georgetown / Janjanbureh)", lat: 13.5333, lng: -14.7667 },
      { name: "Lower River", lat: 13.4, lng: -15.5 }
    ]
  },
  "Ghana": {
    flag: "🇬🇭",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 7.9465,
    lng: -1.0232,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Greater Accra (Accra)", lat: 5.6037, lng: -0.187 },
      { name: "Ashanti (Kumasi)", lat: 6.6885, lng: -1.6244 },
      { name: "Central (Cape Coast / Elmina)", lat: 5.1053, lng: -1.2466 },
      { name: "Volta", lat: 6.6, lng: 0.4667 },
      { name: "Northern (Tamale / Parc de Mole)", lat: 9.4034, lng: -0.8424 },
      { name: "Eastern (Lac Volta / Aburi)", lat: 6.1, lng: -0.25 }
    ]
  },
  "Guinée": {
    flag: "🇬🇳",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 9.9456,
    lng: -9.6966,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Conakry (Îles de Los)", lat: 9.6412, lng: -13.5784 },
      { name: "Mamou / Labé (Fouta-Djalon)", lat: 11.318, lng: -12.2833 },
      { name: "Kindia", lat: 10.0569, lng: -12.8658 },
      { name: "Kankan (Haute-Guinée)", lat: 10.3842, lng: -9.3057 },
      { name: "N'Zérékoré (Guinée forestière)", lat: 7.7562, lng: -8.8179 }
    ]
  },
  "Guinée-Bissau": {
    flag: "🇬🇼",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 11.8037,
    lng: -15.1804,
    zoom: 8,
    unit: "régions",
    regions: [
      { name: "Bissau", lat: 11.8636, lng: -15.5984 },
      { name: "Bolama (Archipel des Bijagos)", lat: 11.25, lng: -16.1667 },
      { name: "Bafatá", lat: 12.1667, lng: -14.6667 },
      { name: "Cacheu", lat: 12.2667, lng: -16.1667 }
    ]
  },
  "Liberia": {
    flag: "🇱🇷",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 6.4281,
    lng: -9.4295,
    zoom: 7,
    unit: "comtés",
    regions: [
      { name: "Montserrado (Monrovia)", lat: 6.3004, lng: -10.7969 },
      { name: "Grand Bassa (Buchanan)", lat: 5.8769, lng: -10.0497 },
      { name: "Nimba", lat: 6.95, lng: -8.7 },
      { name: "Sinoe (Parc de Sapo)", lat: 5.5, lng: -8.75 }
    ]
  },
  "Mali": {
    flag: "🇲🇱",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 17.5707,
    lng: -3.9962,
    zoom: 5,
    unit: "régions",
    regions: [
      { name: "Bamako", lat: 12.6392, lng: -8.0029 },
      { name: "Mopti (Pays dogon / Djenné)", lat: 14.4843, lng: -4.1829 },
      { name: "Tombouctou", lat: 16.7666, lng: -3.0026 },
      { name: "Ségou", lat: 13.4317, lng: -6.2157 },
      { name: "Sikasso", lat: 11.3176, lng: -5.6665 }
    ]
  },
  "Mauritanie": {
    flag: "🇲🇷",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 21.0079,
    lng: -10.9408,
    zoom: 5,
    unit: "régions",
    regions: [
      { name: "Nouakchott", lat: 18.0735, lng: -15.9582 },
      { name: "Adrar (Atar / Chinguetti)", lat: 20.5167, lng: -13.05 },
      { name: "Dakhlet Nouadhibou (Banc d'Arguin)", lat: 20.9425, lng: -17.0333 },
      { name: "Tagant (Tidjikja)", lat: 18.55, lng: -11.4333 }
    ]
  },
  "Niger": {
    flag: "🇳🇪",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 17.6078,
    lng: 8.0817,
    zoom: 5,
    unit: "régions",
    regions: [
      { name: "Niamey", lat: 13.5116, lng: 2.1254 },
      { name: "Agadez (Aïr / Ténéré)", lat: 16.9739, lng: 7.9908 },
      { name: "Zinder", lat: 13.8072, lng: 8.9881 },
      { name: "Tahoua", lat: 14.8888, lng: 5.2692 }
    ]
  },
  "Nigeria": {
    flag: "🇳🇬",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 9.082,
    lng: 8.6753,
    zoom: 6,
    unit: "États",
    regions: [
      { name: "Lagos", lat: 6.5244, lng: 3.3792 },
      { name: "Territoire de la capitale fédérale (Abuja)", lat: 9.0765, lng: 7.3986 },
      { name: "Cross River (Calabar)", lat: 4.9517, lng: 8.322 },
      { name: "Kano", lat: 12.0022, lng: 8.592 },
      { name: "Oyo (Ibadan)", lat: 7.3775, lng: 3.947 }
    ]
  },
  "Sénégal": {
    flag: "🇸🇳",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 14.4974,
    lng: -14.4524,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Dakar (Gorée / Lac Rose)", lat: 14.7167, lng: -17.4677 },
      { name: "Saint-Louis (Delta du Sénégal)", lat: 16.0179, lng: -16.4896 },
      { name: "Thiès (Petite-Côte / Saly)", lat: 14.7886, lng: -16.926 },
      { name: "Ziguinchor (Casamance)", lat: 12.5681, lng: -16.2719 },
      { name: "Fatick (Sine-Saloum)", lat: 14.3333, lng: -16.4167 },
      { name: "Tambacounda (Niokolo-Koba)", lat: 13.7707, lng: -13.6673 }
    ]
  },
  "Sierra Leone": {
    flag: "🇸🇱",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 8.4606,
    lng: -11.7799,
    zoom: 8,
    unit: "provinces / districts",
    regions: [
      { name: "Western Area (Freetown / Péninsule)", lat: 8.4657, lng: -13.2317 },
      { name: "Southern (Bonthe / Île de Turtle)", lat: 7.5264, lng: -12.505 },
      { name: "Northern (Makeni / Outamba-Kilimi)", lat: 8.8861, lng: -12.0442 },
      { name: "Eastern (Kenema)", lat: 7.8767, lng: -11.19 }
    ]
  },
  "Togo": {
    flag: "🇹🇬",
    continent: "Afrique",
    subcontinent: "Afrique de l'Ouest",
    lat: 8.6195,
    lng: 0.8248,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Maritime (Lomé / Lac Togo)", lat: 6.1319, lng: 1.2228 },
      { name: "Plateaux (Kpalimé / Atakpamé)", lat: 6.9, lng: 0.6333 },
      { name: "Kara (Pays Kabyè)", lat: 9.5511, lng: 1.1861 },
      { name: "Savanes (Dapaong)", lat: 10.8622, lng: 0.2075 }
    ]
  },
  "Angola": {
    flag: "🇦🇴",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: -11.2027,
    lng: 17.8739,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Luanda", lat: -8.839, lng: 13.2894 },
      { name: "Namibe (Désert du Namib / Tombwa)", lat: -15.1961, lng: 12.1522 },
      { name: "Huíla (Lubango / Serra da Leba)", lat: -14.9172, lng: 13.4925 },
      { name: "Benguela (Lobito)", lat: -12.5763, lng: 13.4055 },
      { name: "Malanje (Chutes de Kalandula)", lat: -9.54, lng: 16.34 }
    ]
  },
  "Cameroun": {
    flag: "🇨🇲",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: 7.3697,
    lng: 12.3547,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Centre (Yaoundé)", lat: 3.848, lng: 11.5021 },
      { name: "Littoral (Douala)", lat: 4.0511, lng: 9.7679 },
      { name: "Sud-Ouest (Limbé / Mont Cameroun)", lat: 4.0167, lng: 9.2 },
      { name: "Ouest (Bafoussam / Pays Bamiléké)", lat: 5.4781, lng: 10.4178 },
      { name: "Extrême-Nord (Maroua / Parc de Waza)", lat: 10.591, lng: 14.3159 },
      { name: "Sud (Kribi)", lat: 2.9373, lng: 9.907 }
    ]
  },
  "République centrafricaine": {
    flag: "🇨🇫",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: 6.6111,
    lng: 20.9394,
    zoom: 6,
    unit: "préfectures",
    regions: [
      { name: "Bangui", lat: 4.3947, lng: 18.5582 },
      { name: "Sangha-Mbaéré (Dzanga-Sangha)", lat: 2.9667, lng: 16.1833 },
      { name: "Ouham", lat: 7.0, lng: 17.75 },
      { name: "Lobaye", lat: 4.35, lng: 17.4 }
    ]
  },
  "République du Congo": {
    flag: "🇨🇬",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: -0.228,
    lng: 15.8277,
    zoom: 6,
    unit: "départements",
    regions: [
      { name: "Brazzaville", lat: -4.2634, lng: 15.2429 },
      { name: "Pointe-Noire", lat: -4.7692, lng: 11.8636 },
      { name: "Sangha (Parc d'Odzala-Kokoua)", lat: 1.6167, lng: 15.6333 },
      { name: "Cuvette", lat: -0.4833, lng: 15.8667 }
    ]
  },
  "République démocratique du Congo": {
    flag: "🇨🇩",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: -4.0383,
    lng: 21.7587,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "Kinshasa", lat: -4.4419, lng: 15.2663 },
      { name: "Nord-Kivu (Goma / Virunga)", lat: -1.6792, lng: 29.2228 },
      { name: "Sud-Kivu (Bukavu / Kahuzi-Biéga)", lat: -2.5083, lng: 28.8608 },
      { name: "Haut-Katanga (Lubumbashi)", lat: -11.6876, lng: 27.5026 },
      { name: "Kongo central (Matadi / Banana)", lat: -5.8167, lng: 13.45 }
    ]
  },
  "Gabon": {
    flag: "🇬🇦",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: -0.8037,
    lng: 11.6094,
    zoom: 7,
    unit: "provinces",
    regions: [
      { name: "Estuaire (Libreville)", lat: 0.4162, lng: 9.4673 },
      { name: "Ogooué-Maritime (Port-Gentil / Parc de Loango)", lat: -0.7193, lng: 8.7815 },
      { name: "Ogooué-Ivindo (Parc de la Lopé)", lat: -0.095, lng: 11.595 },
      { name: "Haut-Ogooué (Franceville)", lat: -1.6333, lng: 13.5833 }
    ]
  },
  "Guinée équatoriale": {
    flag: "🇬🇶",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: 1.6508,
    lng: 10.2679,
    zoom: 8,
    unit: "provinces",
    regions: [
      { name: "Bioko Norte (Malabo)", lat: 3.7504, lng: 8.7371 },
      { name: "Litoral (Bata)", lat: 1.8639, lng: 9.7658 },
      { name: "Centro Sur (Evinayong)", lat: 1.4333, lng: 10.55 },
      { name: "Annobón", lat: -1.4333, lng: 5.6333 }
    ]
  },
  "Sao Tomé-et-Principe": {
    flag: "🇸🇹",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: 0.1864,
    lng: 6.6131,
    zoom: 10,
    unit: "provinces",
    regions: [
      { name: "Île de São Tomé", lat: 0.25, lng: 6.6 },
      { name: "Province autonome de Príncipe", lat: 1.6139, lng: 7.4056 }
    ]
  },
  "Tchad": {
    flag: "🇹🇩",
    continent: "Afrique",
    subcontinent: "Afrique centrale",
    lat: 15.4542,
    lng: 18.7322,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "N'Djamena", lat: 12.1348, lng: 15.0557 },
      { name: "Ennedi Est / Ouest", lat: 17.2, lng: 21.85 },
      { name: "Lac (Lac Tchad)", lat: 13.45, lng: 14.1 },
      { name: "Moyen-Chari (Sarh)", lat: 9.1429, lng: 18.3923 }
    ]
  },
  "Burundi": {
    flag: "🇧🇮",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -3.3731,
    lng: 29.9189,
    zoom: 8,
    unit: "provinces",
    regions: [
      { name: "Bujumbura Mairie / Rural (Lac Tanganyika)", lat: -3.3614, lng: 29.3599 },
      { name: "Gitega", lat: -3.4264, lng: 29.9306 },
      { name: "Bururi (Source du Nil)", lat: -3.95, lng: 29.6167 },
      { name: "Ngozi", lat: -2.9075, lng: 29.8306 }
    ]
  },
  "Comores": {
    flag: "🇰🇲",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -11.875,
    lng: 43.8722,
    zoom: 8,
    unit: "îles",
    regions: [
      { name: "Grande Comore / Ngazidja (Moroni / Karthala)", lat: -11.7172, lng: 43.2473 },
      { name: "Anjouan / Nzwani (Mutsamudu)", lat: -12.1667, lng: 44.4 },
      { name: "Mohéli / Mwali (Fomboni)", lat: -12.2833, lng: 43.7333 }
    ]
  },
  "Djibouti": {
    flag: "🇩🇯",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: 11.8251,
    lng: 42.5903,
    zoom: 9,
    unit: "régions",
    regions: [
      { name: "Djibouti-Ville", lat: 11.5721, lng: 43.1456 },
      { name: "Tadjourah (Lac Assal / Lac Abbé)", lat: 11.7878, lng: 42.8822 },
      { name: "Obock", lat: 11.9667, lng: 43.2833 },
      { name: "Ali Sabieh", lat: 11.15, lng: 42.7167 },
      { name: "Arta", lat: 11.525, lng: 42.85 }
    ]
  },
  "Érythrée": {
    flag: "🇪🇷",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: 15.1794,
    lng: 39.7823,
    zoom: 7,
    unit: "régions",
    regions: [
      { name: "Maekel (Asmara)", lat: 15.3229, lng: 38.9251 },
      { name: "Mer Rouge Septentrionale (Massaoua / Dahlak)", lat: 15.6081, lng: 39.4746 },
      { name: "Anseba (Keren)", lat: 15.7778, lng: 38.4581 },
      { name: "Mer Rouge Méridionale (Assab)", lat: 13.0092, lng: 42.7394 }
    ]
  },
  "Éthiopie": {
    flag: "🇪🇹",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: 9.145,
    lng: 40.4897,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Addis-Abeba", lat: 9.03, lng: 38.74 },
      { name: "Amhara (Gondar / Lac Tana / Lalibela / Simien)", lat: 12.0333, lng: 37.7333 },
      { name: "Afar (Dépression de Danakil)", lat: 11.7559, lng: 41.4388 },
      { name: "Région des nations, nationalités et peuples du Sud (Vallée de l'Omo)", lat: 6.0333, lng: 37.3667 },
      { name: "Oromia", lat: 7.546, lng: 40.6347 },
      { name: "Tigré", lat: 13.4967, lng: 39.4753 }
    ]
  },
  "Kenya": {
    flag: "🇰🇪",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -0.0236,
    lng: 37.9062,
    zoom: 6,
    unit: "comtés",
    regions: [
      { name: "Nairobi", lat: -1.2921, lng: 36.8219 },
      { name: "Narok (Maasai Mara)", lat: -1.4061, lng: 35.008 },
      { name: "Mombasa / Kwale (Côte swahilie / Diani)", lat: -4.0435, lng: 39.6682 },
      { name: "Kajiado (Amboseli)", lat: -2.6527, lng: 37.2606 },
      { name: "Laikipia / Nakuru (Vallée du Rift)", lat: -0.3031, lng: 36.08 },
      { name: "Lamu", lat: -2.2717, lng: 40.902 }
    ]
  },
  "La Réunion": {
    flag: "🇷🇪",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -21.1151,
    lng: 55.5364,
    zoom: 9,
    unit: "secteurs / cirques",
    regions: [
      { name: "Cirque de Mafate", lat: -21.0667, lng: 55.4167 },
      { name: "Cirque de Cilaos (Piton des Neiges)", lat: -21.1333, lng: 55.4667 },
      { name: "Cirque de Salazie", lat: -21.0283, lng: 55.5397 },
      { name: "Sud Sauvage & Piton de la Fournaise", lat: -21.2444, lng: 55.7081 },
      { name: "Littoral Ouest (Saint-Gilles / Saint-Leu)", lat: -21.2167, lng: 55.2833 },
      { name: "Nord (Saint-Denis)", lat: -20.8789, lng: 55.4481 }
    ]
  },
  "Madagascar": {
    flag: "🇲🇬",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -18.7669,
    lng: 46.8691,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Analamanga (Antananarivo)", lat: -18.8792, lng: 47.5079 },
      { name: "Menabe (Allée des Baobabs / Morondava)", lat: -20.2833, lng: 44.2833 },
      { name: "Analanjirofo (Île Sainte-Marie)", lat: -16.9, lng: 49.9 },
      { name: "Haute Matsiatra (Fianarantsoa / Isalo)", lat: -21.4527, lng: 47.0857 },
      { name: "Diana (Nosy Be / Diego Suarez)", lat: -13.3167, lng: 48.2667 },
      { name: "Atsimo-Andrefana (Tuléar / Ifaty)", lat: -23.35, lng: 43.6667 }
    ]
  },
  "Malawi": {
    flag: "🇲🇼",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -13.2543,
    lng: 34.3015,
    zoom: 7,
    unit: "districts / régions",
    regions: [
      { name: "Lilongwe", lat: -13.9626, lng: 33.7741 },
      { name: "Mangochi (Lac Malawi Sud)", lat: -14.4781, lng: 35.2645 },
      { name: "Nkhata Bay (Lac Malawi Nord)", lat: -11.6067, lng: 34.29 },
      { name: "Zomba / Mont Mulanje", lat: -15.3833, lng: 35.3333 },
      { name: "Blantyre", lat: -15.7861, lng: 35.0058 }
    ]
  },
  "Maurice": {
    flag: "🇲🇺",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -20.3484,
    lng: 57.5522,
    zoom: 9,
    unit: "districts / îles",
    regions: [
      { name: "Rivière Noire (Le Morne / Chamarel)", lat: -20.36, lng: 57.3667 },
      { name: "Pamplemousses / Rivière du Rempart (Nord)", lat: -20.1, lng: 57.5833 },
      { name: "Flacq (Île aux Cerfs)", lat: -20.2167, lng: 57.7167 },
      { name: "Port-Louis", lat: -20.1609, lng: 57.5012 },
      { name: "Rodrigues", lat: -19.7245, lng: 63.4272 }
    ]
  },
  "Mozambique": {
    flag: "🇲🇿",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -18.6657,
    lng: 35.5296,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "Inhambane (Tofo / Vilankulo / Bazaruto)", lat: -23.865, lng: 35.3833 },
      { name: "Maputo", lat: -25.9692, lng: 32.5732 },
      { name: "Cabo Delgado (Archipel des Quirimbas)", lat: -12.3333, lng: 39.3333 },
      { name: "Sofala (Gorongosa)", lat: -19.8333, lng: 34.85 },
      { name: "Nampula (Île de Mozambique)", lat: -15.0342, lng: 40.7358 }
    ]
  },
  "Ouganda": {
    flag: "🇺🇬",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: 1.3733,
    lng: 32.2903,
    zoom: 7,
    unit: "régions / districts",
    regions: [
      { name: "Région centrale (Kampala / Entebbe)", lat: 0.3476, lng: 32.5825 },
      { name: "Région occidentale (Bwindi / Queen Elizabeth / Fort Portal)", lat: -1.0486, lng: 29.7775 },
      { name: "Région septentrionale (Murchison Falls / Kidepo)", lat: 2.25, lng: 31.7833 },
      { name: "Région orientale (Jinja / Source du Nil)", lat: 0.4244, lng: 33.2041 }
    ]
  },
  "Rwanda": {
    flag: "🇷🇼",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -1.9403,
    lng: 29.8739,
    zoom: 8,
    unit: "provinces",
    regions: [
      { name: "Kigali", lat: -1.9441, lng: 30.0619 },
      { name: "Province du Nord (Volcans / Musanze)", lat: -1.4998, lng: 29.635 },
      { name: "Province de l'Est (Akagera)", lat: -1.95, lng: 30.5 },
      { name: "Province de l'Ouest (Lac Kivu / Rubavu)", lat: -1.7028, lng: 29.2564 },
      { name: "Province du Sud (Nyungwe / Huye)", lat: -2.4833, lng: 29.5833 }
    ]
  },
  "Seychelles": {
    flag: "🇸🇨",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -4.6796,
    lng: 55.492,
    zoom: 9,
    unit: "îles / districts",
    regions: [
      { name: "Mahé (Victoria)", lat: -4.6191, lng: 55.4513 },
      { name: "Praslin (Vallée de Mai)", lat: -4.3196, lng: 55.7361 },
      { name: "La Digue (Anse Source d'Argent)", lat: -4.3583, lng: 55.8286 },
      { name: "Îles extérieures (Aldabra)", lat: -9.4167, lng: 46.3333 }
    ]
  },
  "Somalie": {
    flag: "🇸🇴",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: 5.1521,
    lng: 46.1996,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Banaadir (Mogadiscio)", lat: 2.0469, lng: 45.3182 },
      { name: "Woqooyi Galbeed (Hargeisa / Laas Geel)", lat: 9.56, lng: 44.065 },
      { name: "Bari (Bossasso)", lat: 11.2842, lng: 49.1816 }
    ]
  },
  "Soudan du Sud": {
    flag: "🇸🇸",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: 6.877,
    lng: 31.307,
    zoom: 6,
    unit: "États",
    regions: [
      { name: "Équatoria-Central (Djouba)", lat: 4.8594, lng: 31.5713 },
      { name: "Jonglei (Sudd)", lat: 7.5, lng: 31.5 },
      { name: "Équatoria-Oriental (Torit)", lat: 4.4119, lng: 32.5706 }
    ]
  },
  "Tanzanie": {
    flag: "🇹🇿",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -6.369,
    lng: 34.8888,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Arusha (Ngorongoro / Parc d'Arusha)", lat: -3.3869, lng: 36.683 },
      { name: "Mara (Serengeti)", lat: -2.3333, lng: 34.8333 },
      { name: "Kilimandjaro (Moshi)", lat: -3.0674, lng: 37.3556 },
      { name: "Zanzibar (Stone Town / Nungwi)", lat: -6.1659, lng: 39.2026 },
      { name: "Dar es Salaam", lat: -6.7924, lng: 39.2083 },
      { name: "Iringa (Ruaha)", lat: -7.7667, lng: 35.7 }
    ]
  },
  "Zambie": {
    flag: "🇿🇲",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -13.1339,
    lng: 27.8493,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Province méridionale (Livingstone / Chutes Victoria)", lat: -17.8419, lng: 25.8543 },
      { name: "Lusaka", lat: -15.3875, lng: 28.3228 },
      { name: "Province orientale (South Luangwa)", lat: -13.6333, lng: 32.65 },
      { name: "Province septentrionale", lat: -10.2167, lng: 31.1833 }
    ]
  },
  "Zimbabwe": {
    flag: "🇿🇼",
    continent: "Afrique",
    subcontinent: "Afrique de l'Est",
    lat: -19.0154,
    lng: 29.1549,
    zoom: 6,
    unit: "provinces",
    regions: [
      { name: "Matabeleland Nord (Chutes Victoria / Parc de Hwange)", lat: -17.9243, lng: 25.8572 },
      { name: "Harare", lat: -17.8252, lng: 31.0335 },
      { name: "Manicaland (Montagnes de Chimanimani / Nyanga)", lat: -18.9167, lng: 32.4 },
      { name: "Matabeleland Sud (Matobo)", lat: -20.55, lng: 28.5 },
      { name: "Masvingo (Grand Zimbabwe)", lat: -20.2742, lng: 30.9348 }
    ]
  },
  "Afrique du Sud": {
    flag: "🇿🇦",
    continent: "Afrique",
    subcontinent: "Afrique australe",
    lat: -30.5595,
    lng: 22.9375,
    zoom: 5,
    unit: "provinces",
    regions: [
      { name: "Cap-Occidental (Le Cap / Route des Jardins / Stellenbosch)", lat: -33.9249, lng: 18.4241 },
      { name: "Mpumalanga (Parc national Kruger / Blyde River Canyon)", lat: -25.4753, lng: 30.9694 },
      { name: "Gauteng (Johannesburg / Pretoria)", lat: -26.2041, lng: 28.0473 },
      { name: "KwaZulu-Natal (Durban / Drakensberg)", lat: -29.8587, lng: 31.0218 },
      { name: "Cap-Oriental", lat: -32.2968, lng: 26.4194 },
      { name: "Cap-Nord", lat: -29.0467, lng: 21.8569 },
      { name: "Limpopo", lat: -23.4013, lng: 29.4179 }
    ]
  },
  "Botswana": {
    flag: "🇧🇼",
    continent: "Afrique",
    subcontinent: "Afrique australe",
    lat: -22.3285,
    lng: 24.6849,
    zoom: 6,
    unit: "districts",
    regions: [
      { name: "Nord-Ouest (Delta de l'Okavango / Maun)", lat: -19.9833, lng: 23.4167 },
      { name: "Chobe (Kasane / Parc de Chobe)", lat: -17.8167, lng: 25.15 },
      { name: "Sud-Est (Gaborone)", lat: -24.6282, lng: 25.9231 },
      { name: "Central (Makgadikgadi)", lat: -20.75, lng: 25.5 },
      { name: "Ghanzi (Kalahari central)", lat: -21.6978, lng: 21.6458 }
    ]
  },
  "Eswatini": {
    flag: "🇸🇿",
    continent: "Afrique",
    subcontinent: "Afrique australe",
    lat: -26.5225,
    lng: 31.4659,
    zoom: 8,
    unit: "régions",
    regions: [
      { name: "Hhohho (Mbabane)", lat: -26.3054, lng: 31.1367 },
      { name: "Manzini", lat: -26.4988, lng: 31.38 },
      { name: "Lubombo (Hlane)", lat: -26.25, lng: 31.9 },
      { name: "Shiselweni", lat: -27.1167, lng: 31.2 }
    ]
  },
  "Lesotho": {
    flag: "🇱🇸",
    continent: "Afrique",
    subcontinent: "Afrique australe",
    lat: -29.61,
    lng: 28.2336,
    zoom: 8,
    unit: "districts",
    regions: [
      { name: "Maseru", lat: -29.31, lng: 27.4782 },
      { name: "Thaba-Tseka (Maletsunyane / Hautes Terres)", lat: -29.5228, lng: 28.6083 },
      { name: "Mokhotlong (Sani Pass)", lat: -29.2894, lng: 29.0675 },
      { name: "Berea", lat: -29.1667, lng: 27.75 }
    ]
  },
  "Namibie": {
    flag: "🇳🇦",
    continent: "Afrique",
    subcontinent: "Afrique australe",
    lat: -22.9576,
    lng: 18.4904,
    zoom: 6,
    unit: "régions",
    regions: [
      { name: "Erongo (Swakopmund / Walvis Bay / Spitzkoppe)", lat: -22.6784, lng: 14.5266 },
      { name: "Hardap (Sossusvlei / Désert du Namib)", lat: -24.7275, lng: 15.2919 },
      { name: "Kunene (Damaraland / Kaokoland / Côte des Squelettes)", lat: -20.3667, lng: 14.3 },
      { name: "Khomas (Windhoek)", lat: -22.5609, lng: 17.0658 },
      { name: "Otjozondjupa (Parc national d'Etosha)", lat: -18.8556, lng: 16.3293 },
      { name: "Zambèze (Caprivi)", lat: -17.5033, lng: 24.2756 }
    ]
  },
  // ==================== ANTARCTIQUE ====================
  "Antarctique": {
    flag: "🇦🇶",
    continent: "Antarctique",
    subcontinent: "Antarctique",
    lat: -82.8628,
    lng: 135.0,
    zoom: 3,
    unit: "secteurs / bases",
    regions: [
      { name: "Péninsule Antarctique", lat: -64.7742, lng: -64.0531 },
      { name: "Mer de Ross (Station McMurdo)", lat: -77.8419, lng: 166.6863 },
      { name: "Terre Adélie (Base Dumont d'Urville)", lat: -66.6628, lng: 140.0014 },
      { name: "Pôle Sud (Amundsen-Scott)", lat: -90.0, lng: 0.0 }
    ]
  }
};
  