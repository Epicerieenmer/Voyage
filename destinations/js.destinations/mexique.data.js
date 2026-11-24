const DESTINATION_PAGE_DATA = {
  archipels: [
    {
      id: "cdmx",
      title: "État : 1. Mexico (CDMX)",
      mapLabel: "Mexico (CDMX)",
      lat: 19.4326,
      lng: -99.1332,
      zoom: 10,
      intro: "Capitale fédérale — Musées majeurs, gastronomie de rue et de marché, quartiers historiques, canaux et parcs.",
      islands: [
        {
          id: "cdmx-centre-historique",
          label: "Centre historique & Alameda",
          lat: 19.4326,
          lng: -99.1332,
          zoom: 13,
          activities: [
            {
              theme: "monument",
              title: "Zócalo, Cathédrale métropolitaine & ruines du Templo Mayor",
              summary: "Cœur historique de Mexico où se côtoient vestiges aztèques, architecture coloniale et grande place centrale.",
              duration: "2h30 à 3h30",
              departure: "Depuis le Zócalo / Centro Histórico",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚇 Métro Zócalo / À pied",
              lat: 19.4348,
              lng: -99.1315
            },
            {
              theme: "monument",
              title: "Palacio de Bellas Artes, Torre Latinoamericana & Palacio Postal",
              summary: "Ensembles emblématiques mêlant Art nouveau, marbre, fresques murales et vue panoramique sur la ville.",
              duration: "2h à 3h",
              departure: "Depuis Alameda Central / Bellas Artes",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚇 Métro Bellas Artes",
              lat: 19.4352,
              lng: -99.1412
            },
            {
              theme: "marche",
              title: "Marché de San Juan & tacos al pastor / quesadillas traditionnelles",
              summary: "Découverte gourmande des produits frais, spécialités mexicaines et cuisine de rue authentique.",
              duration: "1h30 à 2h",
              departure: "Depuis le Centro Histórico",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚇 Métro / À pied",
              lat: 19.4295,
              lng: -99.1465
            }
          ]
        },
        {
          id: "cdmx-chapultepec-polanco",
          label: "Chapultepec, Polanco & Musées",
          lat: 19.426,
          lng: -99.1862,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Bosque de Chapultepec, Château de Chapultepec & lacs",
              summary: "Immense poumon vert de la capitale abritant sentiers ombragés, plans d'eau et château surplombant la ville.",
              duration: "3h à Demi-journée",
              departure: "Depuis Chapultepec / Reforma",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚇 Métro Chapultepec / Audiorama",
              lat: 19.4204,
              lng: -99.1819
            },
            {
              theme: "monument",
              title: "Musée national d'anthropologie & musée Soumaya",
              summary: "Collections majeures sur les civilisations mésoaméricaines et architecture contemporaine à Polanco.",
              duration: "3h à 4h",
              departure: "Depuis Chapultepec / Polanco",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Métrobus / À pied",
              lat: 19.426,
              lng: -99.1862
            }
          ]
        },
        {
          id: "cdmx-roma-condesa-coyoacan",
          label: "Roma, Condesa, Coyoacán & Xochimilco",
          lat: 19.35,
          lng: -99.162,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Balade dans la Roma Norte, la Condesa & Parc México",
              summary: "Quartiers arborés célèbres pour leurs cafés, façades Art déco, parcs animés et ambiance détendue.",
              duration: "2h à 3h",
              departure: "Depuis Roma Norte / Condesa",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Vélo / Métrobus",
              lat: 19.4119,
              lng: -99.1704
            },
            {
              theme: "monument",
              title: "Coyoacán, place Hidalgo & Musée Frida Kahlo (Casa Azul)",
              summary: "Quartier au charme provincial avec places ombragées, marchés et maison-musée de Frida Kahlo.",
              duration: "2h30 à 3h30",
              departure: "Depuis le centre de Coyoacán",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚇 Métro Coyoacán / Viveros",
              lat: 19.3552,
              lng: -99.1625
            },
            {
              theme: "activite",
              title: "Promenade en trajinera colorée sur les canaux de Xochimilco",
              summary: "Balade festive sur des barques fleuries au fil des anciens canaux et jardins flottants.",
              duration: "2h à 3h",
              departure: "Depuis les embarcadères de Xochimilco",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚤 Tren Ligero / Trajinera",
              lat: 19.2546,
              lng: -99.1036
            }
          ]
        }
      ]
    },
    {
      id: "estado-mexico",
      title: "État : 2. État de Mexico",
      mapLabel: "État de Mexico — Toluca & Teotihuacán",
      lat: 19.2826,
      lng: -99.6557,
      zoom: 8,
      intro: "Capitale : Toluca — Cités préhispaniques monumentales, lacs d'altitude, volcans et villages magiques.",
      islands: [
        {
          id: "teotihuacan",
          label: "Teotihuacán",
          lat: 19.6925,
          lng: -98.8435,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Zone archéologique de Teotihuacán (Pyramide du Soleil, de la Lune & Chaussée des Morts)",
              summary: "Ancienne cité monumentale dotée d'une large perspective urbaine et de pyramides imposantes.",
              duration: "3h à 4h",
              departure: "Depuis Mexico (Terminal Norte)",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus depuis Terminal Norte",
              lat: 19.6925,
              lng: -98.8435
            },
            {
              theme: "activite",
              title: "Survol de Teotihuacán en montgolfière au lever du jour",
              summary: "Vol matinal au-dessus du site archéologique et de la vallée lorsque la lumière se lève.",
              duration: "2h30 à 3h30 (avec transfert)",
              departure: "Depuis Teotihuacán / CDMX",
              price: 95,
              priceLabel: "~95 €/p",
              transport: "🎈 Navette / Transport privé",
              lat: 19.685,
              lng: -98.852
            }
          ]
        },
        {
          id: "valle-de-bravo-toluca",
          label: "Valle de Bravo & Nevado de Toluca",
          lat: 19.1936,
          lng: -100.1306,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Randonnée aux lagunes du Soleil & de la Lune au Nevado de Toluca",
              summary: "Marche en haute altitude dans le cratère d'un volcan endormi abritant deux lagunes d'eau claire.",
              duration: "3h à 4h",
              departure: "Depuis Toluca ou CDMX",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚗 Voiture / Excursion",
              lat: 19.108,
              lng: -99.7606
            },
            {
              theme: "activite",
              title: "Valle de Bravo : lac, cascade Velo de Novia & parapente",
              summary: "Destination nature et plein air mêlant lac entouré de forêts, cascade et vols panoramiques.",
              duration: "Demi-journée à Journée",
              departure: "Depuis le centre de Valle de Bravo",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 19.1936,
              lng: -100.1306
            }
          ]
        }
      ]
    },
    {
      id: "morelos",
      title: "État : 3. Morelos",
      mapLabel: "Morelos — Cuernavaca & Tepoztlán",
      lat: 18.9242,
      lng: -99.2216,
      zoom: 9,
      intro: "Capitale : Cuernavaca — Climat doux, falaises mystiques, anciennes haciendas et sites archéologiques.",
      islands: [
        {
          id: "tepoztlan",
          label: "Tepoztlán",
          lat: 18.9846,
          lng: -99.0956,
          zoom: 12,
          activities: [
            {
              theme: "rando",
              title: "Montée à la pyramide du Tepozteco & falaises de Tepoztlán",
              summary: "Sentier rocailleux menant à un temple perché dominant la vallée et les parois rocheuses.",
              duration: "2h à 3h",
              departure: "Depuis le village de Tepoztlán",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🥾 À pied depuis le village",
              lat: 18.9994,
              lng: -99.0972
            },
            {
              theme: "marche",
              title: "Marché artisanal & gastronomique du dimanche à Tepoztlán",
              summary: "Étalages colorés d'artisanat, fruits, en-cas locaux et atmosphère animée du week-end.",
              duration: "1h30 à 2h",
              departure: "Depuis le centre de Tepoztlán",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚶 À pied / Bus",
              lat: 18.9846,
              lng: -99.0956
            }
          ]
        },
        {
          id: "cuernavaca-xochicalco",
          label: "Cuernavaca & Xochicalco",
          lat: 18.8047,
          lng: -99.2933,
          zoom: 10,
          activities: [
            {
              theme: "monument",
              title: "Cité fortifiée et observatoire astronomique de Xochicalco",
              summary: "Site archéologique perché sur une colline, réputé pour ses bas-reliefs et son observatoire.",
              duration: "2h à 2h30",
              departure: "Depuis Cuernavaca",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚐 Bus / Colectivo",
              lat: 18.8047,
              lng: -99.2933
            },
            {
              theme: "parc",
              title: "Palais de Cortés, jardins Borda & cascades de Cuernavaca",
              summary: "Découverte historique et verte de la ville au climat doux, entre jardins et chutes d'eau.",
              duration: "2h à 3h",
              departure: "Depuis le centre de Cuernavaca",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Bus / Taxi",
              lat: 18.9219,
              lng: -99.2342
            }
          ]
        }
      ]
    },
    {
      id: "puebla",
      title: "État : 4. Puebla",
      mapLabel: "Puebla — Puebla & Cholula",
      lat: 19.0414,
      lng: -98.2063,
      zoom: 8,
      intro: "Capitale : Puebla — Joyaux baroques, talavera, volcan Popocatépetl, forêts de brume et villages magiques.",
      islands: [
        {
          id: "puebla-ville",
          label: "Puebla",
          lat: 19.0431,
          lng: -98.198,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Cathédrale, Bibliothèque Palafoxiana, Capilla del Rosario & Callejón de los Sapos",
              summary: "Promenade architecturale dans le centre historique réputé pour son doré baroque et ses ruelles vivantes.",
              duration: "2h30 à 3h30",
              departure: "Depuis le Zócalo de Puebla",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚶 À pied / Bus",
              lat: 19.0431,
              lng: -98.198
            },
            {
              theme: "marche",
              title: "Dégustation du mole poblano, chiles en nogada & quartier de Talavera",
              summary: "Immersion gastronomique et artisanale autour des plats emblématiques et des céramiques peintes.",
              duration: "2h",
              departure: "Depuis le centre de Puebla",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚶 À pied",
              lat: 19.0465,
              lng: -98.1945
            }
          ]
        },
        {
          id: "cholula-atlixco",
          label: "Cholula & Atlixco",
          lat: 19.0575,
          lng: -98.3019,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Grande Pyramide de Cholula & sanctuaire de Los Remedios face au volcan",
              summary: "Église surplombant une immense pyramide recouverte de végétation avec vue dégagée vers les volcans.",
              duration: "2h",
              departure: "Depuis Puebla / Cholula",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Bus local / Train",
              lat: 19.0575,
              lng: -98.3019
            },
            {
              theme: "parc",
              title: "Atlixco : pépinières fleuries, mirador de San Miguel & fresques murales",
              summary: "Ville fleurie au pied des reliefs offrant points de vue, ruelles colorées et horticultures.",
              duration: "2h à 3h",
              departure: "Depuis Puebla",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 18.9089,
              lng: -98.4425
            }
          ]
        }
      ]
    },
    {
      id: "tlaxcala",
      title: "État : 5. Tlaxcala",
      mapLabel: "Tlaxcala",
      lat: 19.3182,
      lng: -98.2375,
      zoom: 9,
      intro: "Capitale : Tlaxcala — Fresques préhispaniques exceptionnelles, sanctuaires de lucioles et pentes de La Malinche.",
      islands: [
        {
          id: "cacaxtla-xochitecatl",
          label: "Cacaxtla & Xochitécatl",
          lat: 19.2422,
          lng: -98.3478,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Peintures murales de Cacaxtla & pyramide de Xochitécatl",
              summary: "Site remarquable pour ses fresques préhispaniques aux couleurs vives et ses pyramides voisines.",
              duration: "2h à 3h",
              departure: "Depuis Tlaxcala ou Puebla",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚐 Bus / Colectivo",
              lat: 19.2422,
              lng: -98.3478
            }
          ]
        },
        {
          id: "nanacamilpa-malinche",
          label: "Nanacamilpa & La Malinche",
          lat: 19.4833,
          lng: -98.6167,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Sanctuaire des lucioles de Nanacamilpa (en saison) & forêts d'altitude",
              summary: "Balade crépusculaire en forêt pour observer le spectacle lumineux des lucioles à la bonne saison.",
              duration: "2h à 3h (soirée)",
              departure: "Depuis Nanacamilpa",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚐 Bus / Excursion",
              lat: 19.4833,
              lng: -98.6167
            },
            {
              theme: "rando",
              title: "Randonnée dans le parc national de la Malinche",
              summary: "Sentiers forestiers et d'altitude sur les pentes d'un volcan isolé entre Tlaxcala et Puebla.",
              duration: "3h à 5h",
              departure: "Depuis le centre de la Malinche",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚗 Voiture / Randonnée",
              lat: 19.2314,
              lng: -98.0319
            }
          ]
        }
      ]
    },
    {
      id: "hidalgo",
      title: "État : 6. Hidalgo",
      mapLabel: "Hidalgo — Pachuca & Tolantongo",
      lat: 20.1011,
      lng: -98.7591,
      zoom: 8,
      intro: "Capitale : Pachuca — Canyons d'eau thermale turquoise, orgues basaltiques et villages miniers.",
      islands: [
        {
          id: "tolantongo",
          label: "Grutas de Tolantongo",
          lat: 20.6425,
          lng: -98.9889,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Piscines thermales en falaise, rivière turquoise & grotte de Tolantongo",
              summary: "Canyon encaissé célèbre pour ses bassins d'eau chaude à flanc de paroi et sa rivière bleutée.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Ixmiquilpan ou Pachuca",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚐 Bus + Colectivo",
              lat: 20.6425,
              lng: -98.9889
            }
          ]
        },
        {
          id: "prismas-real-del-monte",
          label: "Prismas Basálticos, Huasca & Real del Monte",
          lat: 20.2256,
          lng: -98.5678,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Prismas Basálticos de Santa María Regla & cascade",
              summary: "Colonnes géométriques de basalte bordant une chute d'eau dans un ravin verdoyant.",
              duration: "1h30 à 2h",
              departure: "Depuis Huasca de Ocampo",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚐 Colectivo / Voiture",
              lat: 20.2256,
              lng: -98.5678
            },
            {
              theme: "marche",
              title: "Real del Monte : ruelles d'altitude & dégustation de pastes",
              summary: "Ancien village minier d'altitude conservant l'héritage des pastes (chaussons salés ou sucrés).",
              duration: "1h30 à 2h",
              departure: "Depuis Pachuca",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Colectivo / À pied",
              lat: 20.1389,
              lng: -98.6714
            }
          ]
        }
      ]
    },
    {
      id: "queretaro",
      title: "État : 7. Querétaro",
      mapLabel: "Querétaro — Santiago de Querétaro & Sierra Gorda",
      lat: 20.5888,
      lng: -100.3899,
      zoom: 8,
      intro: "Capitale : Santiago de Querétaro — Aqueduc historique, monolithe de Bernal, vignobles et montagnes de la Sierra Gorda.",
      islands: [
        {
          id: "queretaro-ville",
          label: "Santiago de Querétaro",
          lat: 20.5888,
          lng: -100.3899,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Centre historique de Querétaro, places coloniales & grand aqueduc",
              summary: "Centre soigné et animé marqué par ses arcades en pierre et le majestueux aqueduc du XVIIIe siècle.",
              duration: "2h à 3h",
              departure: "Depuis le centre de Querétaro",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Bus",
              lat: 20.5931,
              lng: -100.3775
            }
          ]
        },
        {
          id: "pena-de-bernal-tequisquiapan",
          label: "Peña de Bernal & Tequisquiapan",
          lat: 20.7436,
          lng: -99.9436,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Escalade/randonnée sur le monolithe de Peña de Bernal",
              summary: "Ascension d'un immense dôme rocheux dominant un village coloré et animé.",
              duration: "2h à 3h",
              departure: "Depuis Bernal ou Querétaro",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Bus / À pied",
              lat: 20.7436,
              lng: -99.9436
            },
            {
              theme: "marche",
              title: "Route des fromages et vignobles autour de Tequisquiapan & Ezequiel Montes",
              summary: "Découverte des domaines viticoles d'altitude, fromageries et ruelles fleuries de Tequisquiapan.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Querétaro ou Tequisquiapan",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🚗 Voiture / Excursion",
              lat: 20.5206,
              lng: -99.8936
            }
          ]
        },
        {
          id: "sierra-gorda",
          label: "Sierra Gorda",
          lat: 21.2167,
          lng: -99.6333,
          zoom: 10,
          activities: [
            {
              theme: "monument",
              title: "Missions franciscaines de la Sierra Gorda & rivières/cascades de Jalpan",
              summary: "Missions baroques inscrites à l'UNESCO au cœur d'une réserve montagneuse aux rivières claires.",
              duration: "Journée",
              departure: "Depuis Jalpan de Serra ou Querétaro",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚗 Voiture / Excursion",
              lat: 21.2167,
              lng: -99.6333
            }
          ]
        }
      ]
    },
    {
      id: "guanajuato",
      title: "État : 8. Guanajuato",
      mapLabel: "Guanajuato — Guanajuato & San Miguel de Allende",
      lat: 21.019,
      lng: -101.2574,
      zoom: 8,
      intro: "Capitale : Guanajuato — Villes coloniales hautes en couleur, tunnels souterrains, mines d'argent et patios fleuris.",
      islands: [
        {
          id: "guanajuato-ville",
          label: "Guanajuato",
          lat: 21.019,
          lng: -101.2574,
          zoom: 13,
          activities: [
            {
              theme: "point-de-vue",
              title: "Mirador del Pípila (vue panoramique sur la ville) & ruelles souterraines",
              summary: "Vue d'ensemble sur les façades colorées serrées dans la vallée et réseau singulier de galeries.",
              duration: "1h30 à 2h",
              departure: "Depuis le centre de Guanajuato",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "Funiculaire / À pied",
              lat: 21.0138,
              lng: -101.2528
            },
            {
              theme: "monument",
              title: "Théâtre Juárez, Université de Guanajuato, Callejón del Beso & mine Valenciana",
              summary: "Parcours entre monuments néoclassiques, ruelles étroites et mémoire minière de l'argent.",
              duration: "3h à 4h",
              departure: "Depuis le centre de Guanajuato",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚶 À pied / Bus",
              lat: 21.0185,
              lng: -101.2545
            }
          ]
        },
        {
          id: "san-miguel-de-allende",
          label: "San Miguel de Allende & Dolores Hidalgo",
          lat: 20.9144,
          lng: -100.7436,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Parroquia de San Miguel Arcángel, jardins & galeries d'art de San Miguel",
              summary: "Flânerie dans un centre historique très animé dominé par la silhouette néogothique de sa paroisse.",
              duration: "2h30 à 3h30",
              departure: "Depuis le jardin principal de San Miguel",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied",
              lat: 20.9144,
              lng: -100.7436
            },
            {
              theme: "marche",
              title: "Dolores Hidalgo : berceau de l'indépendance & glaces artisanales insolites",
              summary: "Étape historique et gourmande célèbre pour ses glaces aux saveurs surprenantes et sa céramique.",
              duration: "1h30 à 2h",
              departure: "Depuis San Miguel de Allende ou Guanajuato",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus régional",
              lat: 21.1561,
              lng: -100.9319
            }
          ]
        }
      ]
    },
    {
      id: "quintana-roo",
      title: "État : 9. Quintana Roo",
      mapLabel: "Quintana Roo — Tulum, Bacalar & Holbox",
      lat: 20.2114,
      lng: -87.4654,
      zoom: 7,
      intro: "Capitale : Chetumal — Mer des Caraïbes, cénotes cristallins, lagune aux sept couleurs, îles et réserves naturelles.",
      islands: [
        {
          id: "tulum-riviera",
          label: "Tulum, Akumal & Cénotes",
          lat: 20.2149,
          lng: -87.429,
          zoom: 11,
          activities: [
            {
              theme: "monument",
              title: "Ruines mayas de Tulum surplombant la mer des Caraïbes",
              summary: "Site archéologique posé sur une falaise calcaire face aux eaux turquoise des Caraïbes.",
              duration: "2h à 2h30",
              departure: "Depuis Tulum pueblo / plage",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚲 Vélo / Colectivo / À pied",
              lat: 20.2149,
              lng: -87.429
            },
            {
              theme: "parc",
              title: "Baignade & snorkeling dans les cénotes (Gran Cenote, Dos Ojos, Cenote Azul)",
              summary: "Aven ouverts ou grottes immergées à l'eau limpide et fraîche au cœur de la péninsule.",
              duration: "2h à Demi-journée",
              departure: "Depuis Tulum",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚲 Vélo / Colectivo / Voiture",
              lat: 20.2469,
              lng: -87.465
            },
            {
              theme: "activite",
              title: "Snorkeling avec les tortues marines à Akumal",
              summary: "Sortie aquatique dans la baie d'Akumal pour observer les tortues dans leur milieu naturel.",
              duration: "2h à 3h",
              departure: "Depuis Akumal ou Tulum",
              price: 40,
              priceLabel: "~40 €/p",
              transport: "🚐 Colectivo / Bateau",
              lat: 20.3956,
              lng: -87.3164
            }
          ]
        },
        {
          id: "bacalar",
          label: "Bacalar",
          lat: 18.6781,
          lng: -88.39,
          zoom: 12,
          activities: [
            {
              theme: "activite",
              title: "Balade en bateau ou kayak sur la lagune de Bacalar & canal des Pirates",
              summary: "Navigation sur une lagune d'eau douce aux multiples nuances de bleu et passage par l'étroit canal.",
              duration: "2h30 à 4h",
              departure: "Depuis le bord de lagune à Bacalar",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "⛵ Bateau / Kayak",
              lat: 18.6781,
              lng: -88.39
            },
            {
              theme: "monument",
              title: "Fort de San Felipe de Bacalar & baignade au Cenote Cocalitos",
              summary: "Ouvrage défensif surplombant la lagune et cénote ouvert propice à la baignade.",
              duration: "2h à 3h",
              departure: "Depuis le centre de Bacalar",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚶 À pied / Taxi",
              lat: 18.6761,
              lng: -88.3894
            }
          ]
        },
        {
          id: "holbox-cozumel-isla-mujeres",
          label: "Isla Holbox, Cozumel & Isla Mujeres",
          lat: 21.5226,
          lng: -87.3796,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Isla Holbox : Punta Cocos, Punta Mosquito, street art & flamants roses",
              summary: "Île paisible sans voitures principales combinant bancs de sable, fresques murales et faune côtière.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Chiquilá (ferry vers Holbox)",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "⛴️ Ferry + Voiturette / Vélo",
              lat: 21.5226,
              lng: -87.3796
            },
            {
              theme: "activite",
              title: "Plongée / snorkeling sur les récifs coralliens de Cozumel ou Isla Mujeres",
              summary: "Exploration des fonds coralliens et eaux claires de la mer des Caraïbes au large de la côte.",
              duration: "Demi-journée",
              departure: "Depuis Playa del Carmen / Cancún / île",
              price: 65,
              priceLabel: "~65 €/p",
              transport: "⛴️ Ferry + Bateau",
              lat: 20.423,
              lng: -86.9223
            }
          ]
        },
        {
          id: "sian-kaan",
          label: "Réserve de Sian Ka'an",
          lat: 19.8667,
          lng: -87.5833,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Exploration de la réserve de biosphère de Sian Ka'an (mangrove, dauphins, canaux)",
              summary: "Vaste aire protégée classée UNESCO mêlant lagunes, mangroves, savanes inondées et littoral.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Tulum / Punta Allen",
              price: 95,
              priceLabel: "~95 €/p",
              transport: "🚤 4x4 / Bateau",
              lat: 19.8667,
              lng: -87.5833
            }
          ]
        }
      ]
    },
    {
      id: "yucatan",
      title: "État : 10. Yucatán",
      mapLabel: "Yucatán — Mérida, Chichén Itzá & Valladolid",
      lat: 20.9674,
      lng: -89.5926,
      zoom: 7,
      intro: "Capitale : Mérida — Grandes cités mayas, villes coloniales pastel, cénotes à ciel ouvert ou souterrains et lagunes roses.",
      islands: [
        {
          id: "chichen-itza-uxmal",
          label: "Chichén Itzá & Route Puuc (Uxmal)",
          lat: 20.6843,
          lng: -88.5678,
          zoom: 9,
          activities: [
            {
              theme: "monument",
              title: "Chichén Itzá (Temple de Kukulcán, jeu de balle & cénote sacré)",
              summary: "Site maya majeur célèbre pour sa pyramide à degrés, son terrain de jeu de balle et son histoire.",
              duration: "3h à 4h",
              departure: "Depuis Valladolid ou Mérida",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🚌 Bus ADO / Colectivo",
              lat: 20.6843,
              lng: -88.5678
            },
            {
              theme: "monument",
              title: "Uxmal & sites mayas de la route Puuc (Kabah, Labná)",
              summary: "Architecture maya finement sculptée dans un cadre souvent plus calme que les grands pôles touristiques.",
              duration: "3h à 4h",
              departure: "Depuis Mérida",
              price: 40,
              priceLabel: "~40 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 20.3606,
              lng: -89.7711
            }
          ]
        },
        {
          id: "merida-valladolid-izamal",
          label: "Mérida, Valladolid & Izamal",
          lat: 20.6897,
          lng: -88.2022,
          zoom: 10,
          activities: [
            {
              theme: "marche",
              title: "Mérida : Paseo de Montejo, marché Lucas de Gálvez & cuisine yucatèque",
              summary: "Boulevards ombragés, marchés vivants et saveurs locales comme la cochinita pibil ou les marquesitas.",
              duration: "2h30 à 4h",
              departure: "Depuis le centre de Mérida",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚶 À pied / Bus / Uber",
              lat: 20.9674,
              lng: -89.6243
            },
            {
              theme: "monument",
              title: "Valladolid (cenote Zací, couvent San Bernardino) & Izamal (ville jaune)",
              summary: "Escales coloniales pleines de charme entre couvents, places colorées et cénotes urbains.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Mérida ou Cancún/Tulum",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus ADO / Colectivo",
              lat: 20.6897,
              lng: -88.2022
            }
          ]
        },
        {
          id: "cenotes-rio-lagartos",
          label: "Cénotes (Homún / Cuzamá) & Río Lagartos",
          lat: 21.5944,
          lng: -88.1528,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Cénotes autour de Homún / Cuzamá (Ik Kil, Suytun ou grottes souterraines)",
              summary: "Baignades dans des puits naturels ou cavernes où la lumière perce parfois jusqu'à l'eau.",
              duration: "2h à 4h",
              departure: "Depuis Valladolid ou Mérida",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚐 Colectivo / Moto-taxi",
              lat: 20.739,
              lng: -89.288
            },
            {
              theme: "activite",
              title: "Sortie en bateau à Río Lagartos & Las Coloradas (salines roses & flamants)",
              summary: "Découverte des marais salants aux reflets roses, mangroves et oiseaux côtiers au nord du Yucatán.",
              duration: "Demi-journée",
              departure: "Depuis Río Lagartos ou Valladolid",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚤 Voiture / Bus + Bateau",
              lat: 21.5944,
              lng: -88.1528
            }
          ]
        }
      ]
    },
    {
      id: "campeche",
      title: "État : 11. Campeche",
      mapLabel: "Campeche — Campeche & Calakmul",
      lat: 19.8301,
      lng: -90.5349,
      zoom: 7,
      intro: "Capitale : San Francisco de Campeche — Ville fortifiée sur le golfe du Mexique et cités mayas en pleine jungle.",
      islands: [
        {
          id: "campeche-ville",
          label: "San Francisco de Campeche",
          lat: 19.8454,
          lng: -90.5356,
          zoom: 13,
          activities: [
            {
              theme: "monument",
              title: "Remparts, bastions, maisons colorées & malecón de Campeche",
              summary: "Balade tranquille dans une ville côtière fortifiée aux façades pastel et au front de mer paisible.",
              duration: "2h à 3h",
              departure: "Depuis le centre de Campeche",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied",
              lat: 19.8454,
              lng: -90.5356
            }
          ]
        },
        {
          id: "calakmul",
          label: "Calakmul",
          lat: 18.1053,
          lng: -89.8106,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Pyramides de Calakmul au-dessus de la canopée de la réserve de biosphère",
              summary: "Cité maya isolée au cœur d'une vaste forêt tropicale offrant une vue dégagée sur la canopée.",
              duration: "Journée (trajet long)",
              departure: "Depuis Xpujil / Escárcega / Campeche",
              price: 80,
              priceLabel: "~80 €/p",
              transport: "🚙 Voiture / Excursion",
              lat: 18.1053,
              lng: -89.8106
            }
          ]
        }
      ]
    },
    {
      id: "chiapas",
      title: "État : 12. Chiapas",
      mapLabel: "Chiapas — Palenque & San Cristóbal",
      lat: 16.7569,
      lng: -93.1292,
      zoom: 7,
      intro: "Capitale : Tuxtla Gutiérrez — Jungle tropicale, cascades, canyons, lagunes et traditions des hauts plateaux.",
      islands: [
        {
          id: "palenque-cascades",
          label: "Palenque, Agua Azul & Misol-Ha",
          lat: 17.4838,
          lng: -92.0466,
          zoom: 10,
          activities: [
            {
              theme: "monument",
              title: "Cité maya de Palenque au cœur de la jungle & singes hurleurs",
              summary: "Temples élégants entourés d'une forêt dense où résonnent les cris des singes hurleurs.",
              duration: "3h à 4h",
              departure: "Depuis Palenque pueblo",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚐 Colectivo / Taxi",
              lat: 17.4838,
              lng: -92.0466
            },
            {
              theme: "parc",
              title: "Cascades d'Agua Azul & cascade de Misol-Ha",
              summary: "Succession de bassins et chutes d'eau entourés de végétation tropicale dans l'intérieur du Chiapas.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Palenque ou San Cristóbal",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚐 Colectivo / Excursion",
              lat: 17.2667,
              lng: -92.1167
            }
          ]
        },
        {
          id: "san-cristobal",
          label: "San Cristóbal de las Casas & villages indigènes",
          lat: 16.737,
          lng: -92.6376,
          zoom: 12,
          activities: [
            {
              theme: "marche",
              title: "San Cristóbal : marchés d'artisanat, Andador Guadalupe & cafés d'altitude",
              summary: "Ville de montagne animée mêlant ruelles piétonnes, textiles, artisanat et cafés locaux.",
              duration: "2h30 à 4h",
              departure: "Depuis le centre de San Cristóbal",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚶 À pied",
              lat: 16.737,
              lng: -92.6376
            },
            {
              theme: "monument",
              title: "Visite de San Juan Chamula & Zinacantán (coutumes & textiles)",
              summary: "Rencontre avec les traditions locales des hauts plateaux (à aborder avec respect et discrétion).",
              duration: "Demi-journée",
              departure: "Depuis San Cristóbal de las Casas",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚐 Colectivo",
              lat: 16.7833,
              lng: -92.6833
            }
          ]
        },
        {
          id: "sumidero-montebello",
          label: "Canyon du Sumidero & Lagunas de Montebello",
          lat: 16.1167,
          lng: -91.7,
          zoom: 10,
          activities: [
            {
              theme: "activite",
              title: "Descente en bateau dans le canyon du Sumidero & points de vue",
              summary: "Navigation entre hautes parois verticales surplombant le fleuve Grijalva et points panoramiques.",
              duration: "2h30 à 3h30",
              departure: "Depuis Chiapa de Corzo / Tuxtla",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚤 Bateau / Colectivo",
              lat: 16.845,
              lng: -93.085
            },
            {
              theme: "parc",
              title: "Parc national des Lagunas de Montebello & cascades de Chiflón",
              summary: "Chapelet de lacs aux teintes variées entourés de forêts de pins et cascades rafraîchissantes.",
              duration: "Journée",
              departure: "Depuis San Cristóbal de las Casas",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚐 Colectivo / Excursion",
              lat: 16.1167,
              lng: -91.7
            }
          ]
        }
      ]
    },
    {
      id: "tabasco",
      title: "État : 13. Tabasco",
      mapLabel: "Tabasco — Villahermosa",
      lat: 17.9892,
      lng: -92.9475,
      zoom: 8,
      intro: "Capitale : Villahermosa — Sculptures monumentales olmèques, fleuves tropicaux et haciendas de cacao.",
      islands: [
        {
          id: "la-venta-cacao",
          label: "Villahermosa & Route du Cacao (Comalcalco)",
          lat: 17.9978,
          lng: -92.9411,
          zoom: 10,
          activities: [
            {
              theme: "monument",
              title: "Parc-musée La Venta (têtes colossales olmèques) & site maya de Comalcalco",
              summary: "Sculptures olmèques en forêt à Villahermosa et cité bâtie en briques d'argile à Comalcalco.",
              duration: "3h à Demi-journée",
              departure: "Depuis Villahermosa",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚌 Bus / Taxi",
              lat: 17.9978,
              lng: -92.9411
            },
            {
              theme: "marche",
              title: "Visite d'une hacienda de cacao & dégustation de chocolat artisanal",
              summary: "Découverte des cacaoyers, de la transformation des fèves et des saveurs du chocolat local.",
              duration: "2h à 3h",
              departure: "Depuis Comalcalco / Villahermosa",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚗 Voiture / Excursion",
              lat: 18.2631,
              lng: -93.2244
            }
          ]
        }
      ]
    },
    {
      id: "oaxaca",
      title: "État : 14. Oaxaca",
      mapLabel: "Oaxaca — Oaxaca, Monte Albán & Côte Pacifique",
      lat: 17.0732,
      lng: -96.7266,
      zoom: 7,
      intro: "Capitale : Oaxaca de Juárez — Capitale gastronomique et artisanale, cités zapotèques, mezcal et plages du Pacifique.",
      islands: [
        {
          id: "oaxaca-monte-alban-hierve",
          label: "Oaxaca, Monte Albán, Mitla & Hierve el Agua",
          lat: 17.0437,
          lng: -96.7678,
          zoom: 11,
          activities: [
            {
              theme: "monument",
              title: "Site archéologique de Monte Albán (vue sur la vallée) & Mitla",
              summary: "Ancienne cité zapotèque sur un plateau panoramique et motifs géométriques remarquables à Mitla.",
              duration: "3h à 4h",
              departure: "Depuis Oaxaca de Juárez",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚐 Colectivo / Bus",
              lat: 17.0437,
              lng: -96.7678
            },
            {
              theme: "marche",
              title: "Marchés d'Oaxaca, ateliers de mezcal (Teotitlán / Santiago Matatlán) & tlayudas",
              summary: "Immersion dans les saveurs d'Oaxaca entre épices, tissages, mezcal artisanal et grandes tlayudas.",
              duration: "3h à Demi-journée",
              departure: "Depuis le centre d'Oaxaca",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚶 À pied / Colectivo",
              lat: 17.0608,
              lng: -96.725
            },
            {
              theme: "point-de-vue",
              title: "Cascades pétrifiées et bassins naturels de Hierve el Agua",
              summary: "Formations minérales évoquant des cascades figées et vasques surplombant la vallée.",
              duration: "3h à Demi-journée",
              departure: "Depuis Oaxaca de Juárez",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚐 Colectivo / Excursion",
              lat: 16.8653,
              lng: -96.2764
            }
          ]
        },
        {
          id: "cote-pacifique-oaxaca",
          label: "Puerto Escondido, Mazunte & Zipolite",
          lat: 15.6656,
          lng: -96.5508,
          zoom: 10,
          activities: [
            {
              theme: "activite",
              title: "Surf, plages & bioluminescence / sorties mer à Puerto Escondido",
              summary: "Littoral animé du Pacifique réputé pour ses vagues, ses plages variées et ses sorties en mer.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Puerto Escondido",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚐 Colectivo / Taxi",
              lat: 15.8622,
              lng: -97.0711
            },
            {
              theme: "point-de-vue",
              title: "Coucher de soleil à Punta Cometa (Mazunte) & plages de Zipolite",
              summary: "Cap rocheux face à l'océan pour voir le soleil décliner et plages plus libres de la côte.",
              duration: "1h30 à 3h",
              departure: "Depuis Mazunte ou Zipolite",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Colectivo",
              lat: 15.6656,
              lng: -96.5508
            }
          ]
        }
      ]
    },
    {
      id: "guerrero",
      title: "État : 15. Guerrero",
      mapLabel: "Guerrero — Taxco & Côte Pacifique",
      lat: 17.5506,
      lng: -99.5024,
      zoom: 7,
      intro: "Capitale : Chilpancingo — Villages perchés d'orfèvrerie d'argent et baies du Pacifique.",
      islands: [
        {
          id: "taxco",
          label: "Taxco de Alarcón",
          lat: 18.5564,
          lng: -99.605,
          zoom: 13,
          activities: [
            {
              theme: "monument",
              title: "Église Santa Prisca, ruelles escarpées & argent massif de Taxco",
              summary: "Ville accrochée à la montagne célèbre pour son église baroque et son travail de l'argent.",
              duration: "2h30 à 3h30",
              departure: "Depuis le centre de Taxco",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Taxi coccinelle",
              lat: 18.5564,
              lng: -99.605
            }
          ]
        },
        {
          id: "zihuatanejo-acapulco",
          label: "Zihuatanejo / Ixtapa & Acapulco",
          lat: 17.6419,
          lng: -101.5514,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Plage Las Gatas, centre de Zihuatanejo & Isla Ixtapa",
              summary: "Ambiance balnéaire et détendue entre criques calmes, front de mer et île proche.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Zihuatanejo",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚤 Bateau / Taxi",
              lat: 17.6419,
              lng: -101.5514
            },
            {
              theme: "point-de-vue",
              title: "Falaises de La Quebrada & baie d'Acapulco",
              summary: "Grande baie du Pacifique et falaises célèbres dominant l'océan.",
              duration: "1h30 à 2h30",
              departure: "Depuis le centre d'Acapulco",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus / Taxi",
              lat: 16.8492,
              lng: -99.9144
            }
          ]
        }
      ]
    },
    {
      id: "veracruz",
      title: "État : 16. Veracruz",
      mapLabel: "Veracruz — Port de Veracruz & El Tajín",
      lat: 19.1738,
      lng: -96.1342,
      zoom: 7,
      intro: "Capitale : Xalapa — Pyramides totonaques, ambiance portuaire afro-caribéenne et montagnes de café.",
      islands: [
        {
          id: "el-tajin-papantla",
          label: "El Tajín & Papantla",
          lat: 20.4486,
          lng: -97.3781,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Pyramide des Niches à El Tajín & voladores de Papantla",
              summary: "Site préhispanique marqué par ses niches sculptées et traditions vivantes de la région.",
              duration: "2h30 à 3h30",
              departure: "Depuis Papantla ou Poza Rica",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus ADO / Colectivo",
              lat: 20.4486,
              lng: -97.3781
            }
          ]
        },
        {
          id: "veracruz-xalapa-coatepec",
          label: "Port de Veracruz, Xalapa & Coatepec",
          lat: 19.1738,
          lng: -96.1342,
          zoom: 10,
          activities: [
            {
              theme: "marche",
              title: "Port de Veracruz (Zócalo, malecón, café lechero) & fincas de café à Coatepec",
              summary: "Ambiance animée sur le port et découverte des plantations de café sur les hauteurs brumeuses.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Veracruz ou Xalapa",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚌 Bus ADO / À pied",
              lat: 19.1738,
              lng: -96.1342
            }
          ]
        }
      ]
    },
    {
      id: "michoacan",
      title: "État : 17. Michoacán",
      mapLabel: "Michoacán — Morelia & Pátzcuaro",
      lat: 19.706,
      lng: -101.195,
      zoom: 7,
      intro: "Capitale : Morelia — Architecture coloniale, lac de Pátzcuaro, île de Janitzio, Fête des Morts et sanctuaires des papillons monarques.",
      islands: [
        {
          id: "morelia",
          label: "Morelia",
          lat: 19.706,
          lng: -101.195,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Cathédrale de Morelia, aqueduc, places historiques & artisanat local",
              summary: "Centre historique de pierre rose élégant, animé par ses places, marchés d'artisanat et cafés.",
              duration: "2h à 3h",
              departure: "Depuis le centre de Morelia",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Bus",
              lat: 19.7026,
              lng: -101.1924
            }
          ]
        },
        {
          id: "patzcuaro-janitzio",
          label: "Lac de Pátzcuaro & Janitzio",
          lat: 19.5147,
          lng: -101.6081,
          zoom: 11,
          activities: [
            {
              theme: "activite",
              title: "Traversée en bateau vers l'île de Janitzio & villages autour du lac de Pátzcuaro",
              summary: "Courte traversée sur le lac d'altitude pour découvrir l'île de Janitzio et les traditions purépechas.",
              duration: "Demi-journée",
              departure: "Depuis l'embarcadère de Pátzcuaro",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚤 Bateau / Bus",
              lat: 19.5736,
              lng: -101.6514
            }
          ]
        },
        {
          id: "papillons-monarques",
          label: "Réserve des papillons monarques (El Rosario / Sierra Chincua)",
          lat: 19.6,
          lng: -100.25,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Observation des papillons monarques dans les forêts d'oyamels (en saison hivernale)",
              summary: "Marche en forêt d'altitude au milieu des sapins où se rassemblent les papillons monarques en hiver.",
              duration: "3h à Demi-journée",
              departure: "Depuis Angangueo / Ocampo / Morelia",
              price: 45,
              priceLabel: "~45 €/p",
              transport: "🚐 Bus + Colectivo / Cheval",
              lat: 19.5917,
              lng: -100.2667
            }
          ]
        }
      ]
    },
    {
      id: "jalisco",
      title: "État : 18. Jalisco",
      mapLabel: "Jalisco — Guadalajara, Tequila & Puerto Vallarta",
      lat: 20.6597,
      lng: -103.3496,
      zoom: 7,
      intro: "Capitale : Guadalajara — Mariachi, charrería, paysages d'agaves bleus, lac de Chapala et côte Pacifique.",
      islands: [
        {
          id: "guadalajara-tlaquepaque-tonala",
          label: "Guadalajara, Tlaquepaque & Tonalá",
          lat: 20.6394,
          lng: -103.3119,
          zoom: 11,
          activities: [
            {
              theme: "monument",
              title: "Centre de Guadalajara (cathédrale, Teatro Degollado, Hospicio Cabañas)",
              summary: "Patrimoine historique et fresques murales au cœur de la grande métropole de Jalisco.",
              duration: "2h30 à 3h30",
              departure: "Depuis le centre de Guadalajara",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚇 Métro / À pied",
              lat: 20.6767,
              lng: -103.3475
            },
            {
              theme: "marche",
              title: "Tlaquepaque & Tonalá : galeries, céramique, marchés & torta ahogada",
              summary: "Découverte des ateliers de céramique, patios fleuris et spécialités culinaires de la région.",
              duration: "3h à Demi-journée",
              departure: "Depuis Guadalajara",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚇 Métro / Bus / Taxi",
              lat: 20.6394,
              lng: -103.3119
            }
          ]
        },
        {
          id: "tequila-agaves",
          label: "Tequila & champs d'agaves",
          lat: 20.8808,
          lng: -103.8364,
          zoom: 11,
          activities: [
            {
              theme: "activite",
              title: "Visite de distilleries, champs d'agaves bleus & village de Tequila",
              summary: "Immersion dans les paysages d'agaves inscrits à l'UNESCO, la fabrication de la tequila et le bourg.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Guadalajara",
              price: 65,
              priceLabel: "~65 €/p",
              transport: "🚂 Train Tequila Express / Bus",
              lat: 20.8808,
              lng: -103.8364
            }
          ]
        },
        {
          id: "puerto-vallarta-costalegre",
          label: "Puerto Vallarta & Costalegre",
          lat: 20.6534,
          lng: -105.2253,
          zoom: 10,
          activities: [
            {
              theme: "point-de-vue",
              title: "Malecón de Puerto Vallarta, Zona Romántica & mirador du Cerro de la Cruz",
              summary: "Front de mer animé, sculptures, ruelles pavées et vue panoramique sur la baie de Banderas.",
              duration: "2h à 3h",
              departure: "Depuis le centre / Zona Romántica",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚶 À pied / Bus",
              lat: 20.6064,
              lng: -105.2369
            },
            {
              theme: "activite",
              title: "Excursion en bateau vers Las Ánimas, Yelapa ou Los Arcos",
              summary: "Sortie nautique le long de la côte vers des criques, plages isolées ou formations rocheuses.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Puerto Vallarta ou Boca de Tomatlán",
              price: 55,
              priceLabel: "~55 €/p",
              transport: "🚤 Bateau / Panga",
              lat: 20.4739,
              lng: -105.3083
            }
          ]
        }
      ]
    },
    {
      id: "nayarit",
      title: "État : 19. Nayarit",
      mapLabel: "Nayarit — Tepic & Côte Pacifique",
      lat: 21.7514,
      lng: -104.8455,
      zoom: 8,
      intro: "Capitale : Tepic — Villages côtiers animés, plages de surf, mangroves et îles protégées.",
      islands: [
        {
          id: "sayulita-san-pancho",
          label: "Sayulita & San Pancho",
          lat: 20.8686,
          lng: -105.4408,
          zoom: 12,
          activities: [
            {
              theme: "activite",
              title: "Surf, plages & ambiance village à Sayulita et San Pancho",
              summary: "Deux ambiances complémentaires sur la côte pacifique : surf et animation à Sayulita, plus calme à San Pancho.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Sayulita ou San Pancho",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚌 Bus / Taxi / À pied",
              lat: 20.8686,
              lng: -105.4408
            }
          ]
        },
        {
          id: "islas-marietas-san-blas",
          label: "Îles Marietas & San Blas",
          lat: 21.0,
          lng: -105.5667,
          zoom: 10,
          activities: [
            {
              theme: "parc",
              title: "Sortie nature aux Îles Marietas ou mangroves & fort de San Blas",
              summary: "Observation de la faune marine et aviaire entre îlots protégés et canaux de mangrove.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Punta de Mita ou San Blas",
              price: 75,
              priceLabel: "~75 €/p",
              transport: "🚤 Bateau",
              lat: 21.0,
              lng: -105.5667
            }
          ]
        }
      ]
    },
    {
      id: "colima",
      title: "État : 20. Colima",
      mapLabel: "Colima — Colima & Comala",
      lat: 19.2433,
      lng: -103.7241,
      zoom: 8,
      intro: "Capitale : Colima — Villages blancs de charme, volcans impressionnants et littoral paisible.",
      islands: [
        {
          id: "comala-colima",
          label: "Comala & Colima",
          lat: 19.3833,
          lng: -103.76,
          zoom: 11,
          activities: [
            {
              theme: "marche",
              title: "Place centrale de Comala, cafés & vues vers le volcan de Colima",
              summary: "Village blanc ombragé réputé pour son café, ses arcades et les échappées vers le volcan.",
              duration: "2h à 3h",
              departure: "Depuis Colima",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Bus / Colectivo",
              lat: 19.3833,
              lng: -103.76
            }
          ]
        },
        {
          id: "manzanillo-cuyutlan",
          label: "Manzanillo & Cuyutlán",
          lat: 19.0522,
          lng: -104.3158,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Lagunes, salines et plages de Cuyutlán & baies de Manzanillo",
              summary: "Littoral varié mêlant lagune, marais salants et longues plages battues par la houle.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Colima ou Manzanillo",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 18.9167,
              lng: -104.0667
            }
          ]
        }
      ]
    },
    {
      id: "aguascalientes",
      title: "État : 21. Aguascalientes",
      mapLabel: "Aguascalientes",
      lat: 21.8853,
      lng: -102.2916,
      zoom: 8,
      intro: "Capitale : Aguascalientes — Places ombragées, histoire ferroviaire, traditions et villages miniers.",
      islands: [
        {
          id: "aguascalientes-centre",
          label: "Centre d'Aguascalientes",
          lat: 21.8853,
          lng: -102.2916,
          zoom: 13,
          activities: [
            {
              theme: "monument",
              title: "Plaza de la Patria, jardin de San Marcos, musée Posada & complexe Tres Centurias",
              summary: "Découverte des places centrales, de l'univers graphique de Posada et de l'ancien site ferroviaire.",
              duration: "2h30 à 3h30",
              departure: "Depuis le centre d'Aguascalientes",
              price: 0,
              priceLabel: "Gratuit (places)",
              transport: "🚶 À pied / Bus",
              lat: 21.8818,
              lng: -102.296
            }
          ]
        },
        {
          id: "real-de-asientos-calvillo",
          label: "Real de Asientos & Calvillo",
          lat: 22.2389,
          lng: -102.09,
          zoom: 10,
          activities: [
            {
              theme: "marche",
              title: "Real de Asientos (ancien village minier) & vergers de goyaves de Calvillo",
              summary: "Échappées autour de la capitale entre patrimoine minier et vergers agricoles de la région.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Aguascalientes",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 22.2389,
              lng: -102.09
            }
          ]
        }
      ]
    },
    {
      id: "san-luis-potosi",
      title: "État : 22. San Luis Potosí",
      mapLabel: "San Luis Potosí — Huasteca Potosina",
      lat: 22.1565,
      lng: -100.9855,
      zoom: 7,
      intro: "Capitale : San Luis Potosí — Cascades turquoise de la Huasteca, jardin surréaliste et village minier d'altitude.",
      islands: [
        {
          id: "huasteca-potosina",
          label: "La Huasteca Potosina (Tamul, Micos, Puente de Dios)",
          lat: 21.3964,
          lng: -98.9936,
          zoom: 10,
          activities: [
            {
              theme: "activite",
              title: "Rivière Tampaón / cascade de Tamul, sauts à Micos ou Puente de Dios",
              summary: "Canyons, rivières d'un bleu intense et cascades propices aux sorties aquatiques et balades en barque.",
              duration: "Journée",
              departure: "Depuis Ciudad Valles",
              price: 50,
              priceLabel: "~50 €/p",
              transport: "🚐 Colectivo / Excursion / Panga",
              lat: 21.8667,
              lng: -99.2167
            }
          ]
        },
        {
          id: "xilitla-las-pozas",
          label: "Xilitla & Jardin d'Edward James (Las Pozas)",
          lat: 21.3964,
          lng: -98.9936,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Jardin sculpté surréaliste de Las Pozas à Xilitla au milieu de la jungle",
              summary: "Sculptures de béton aux formes poétiques disséminées entre cascades et végétation humide.",
              duration: "2h à 3h",
              departure: "Depuis Xilitla ou Ciudad Valles",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚐 Bus / Colectivo / Taxi",
              lat: 21.3964,
              lng: -98.9936
            }
          ]
        },
        {
          id: "real-de-catorce",
          label: "Real de Catorce",
          lat: 23.6908,
          lng: -100.8861,
          zoom: 12,
          activities: [
            {
              theme: "point-de-vue",
              title: "Traversée du tunnel Ogarrio & balade dans Real de Catorce / désert de Wirikuta",
              summary: "Passage par un ancien tunnel de mine pour rejoindre un village d'altitude aux paysages minéraux.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Matehuala",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚙 Bus + Willys / Randonnée",
              lat: 23.6908,
              lng: -100.8861
            }
          ]
        }
      ]
    },
    {
      id: "zacatecas",
      title: "État : 23. Zacatecas",
      mapLabel: "Zacatecas",
      lat: 22.7709,
      lng: -102.5832,
      zoom: 7,
      intro: "Capitale : Zacatecas — Architecture baroque en pierre rose, mines d'argent, cerro de La Bufa et sites archéologiques.",
      islands: [
        {
          id: "zacatecas-ville-bufa",
          label: "Zacatecas, Cerro de la Bufa & Mine d'El Edén",
          lat: 22.7709,
          lng: -102.5832,
          zoom: 13,
          activities: [
            {
              theme: "point-de-vue",
              title: "Téléphérique au-dessus de la ville & panorama depuis le Cerro de la Bufa",
              summary: "Survol aérien des collines et vue panoramique sur Zacatecas et les reliefs alentour.",
              duration: "1h30 à 2h",
              departure: "Depuis le centre de Zacatecas",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚡 Téléphérique / À pied",
              lat: 22.7778,
              lng: -102.5706
            },
            {
              theme: "monument",
              title: "Cathédrale de Zacatecas, musée Rafael Coronel & visite souterraine de la mine El Edén",
              summary: "Façade sculptée en pierre rose, collections d'art populaire et descente dans une ancienne mine.",
              duration: "3h à 4h",
              departure: "Depuis le centre de Zacatecas",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚶 À pied / Train minier",
              lat: 22.7764,
              lng: -102.5789
            }
          ]
        },
        {
          id: "la-quemada-jerez",
          label: "La Quemada & Jerez",
          lat: 22.4167,
          lng: -102.9167,
          zoom: 10,
          activities: [
            {
              theme: "monument",
              title: "Site archéologique de La Quemada & village de Jerez",
              summary: "Vestiges perchés sur un promontoire rocheux et ambiance traditionnelle de Jerez.",
              duration: "Demi-journée",
              departure: "Depuis Zacatecas",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 22.4167,
              lng: -102.9167
            }
          ]
        }
      ]
    },
    {
      id: "baja-california",
      title: "État : 24. Basse-Californie",
      mapLabel: "Basse-Californie — Valle de Guadalupe & Ensenada",
      lat: 32.6245,
      lng: -115.4523,
      zoom: 6,
      intro: "Capitale : Mexicali — Vignobles, gastronomie de la mer, geysers marins et côtes du Pacifique.",
      islands: [
        {
          id: "valle-de-guadalupe-ensenada",
          label: "Valle de Guadalupe, Ensenada & La Bufadora",
          lat: 32.0919,
          lng: -116.5881,
          zoom: 10,
          activities: [
            {
              theme: "marche",
              title: "Route des vins du Valle de Guadalupe & poissons/tacos de la mer à Ensenada",
              summary: "Vallée viticole et cuisine marine du nord-ouest associant vignobles, huîtres et tacos de poisson.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Ensenada ou Tijuana",
              price: 65,
              priceLabel: "~65 €/p",
              transport: "🚗 Voiture / Excursion",
              lat: 32.0919,
              lng: -116.5881
            },
            {
              theme: "point-de-vue",
              title: "Souffleur marin de La Bufadora & côte pacifique",
              summary: "Geyser d'eau de mer propulsé par les vagues contre les falaises rocheuses de la côte.",
              duration: "1h30 à 2h",
              departure: "Depuis Ensenada",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚗 Bus / Voiture",
              lat: 31.7244,
              lng: -116.7167
            }
          ]
        }
      ]
    },
    {
      id: "baja-california-sur",
      title: "État : 25. Basse-Californie du Sud",
      mapLabel: "Basse-Californie du Sud — La Paz & Mer de Cortés",
      lat: 24.1426,
      lng: -110.3128,
      zoom: 6,
      intro: "Capitale : La Paz — Eaux turquoise de la mer de Cortés, îles sauvages, plages de rêve, baleines et oasis.",
      islands: [
        {
          id: "la-paz-balandra-espiritu-santo",
          label: "La Paz, Balandra, Tecolote & Île Espíritu Santo",
          lat: 24.3194,
          lng: -110.3264,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Plage de Balandra (eau turquoise & rocher champignon) & plage El Tecolote",
              summary: "Baie peu profonde aux eaux très claires et longues plages bordant la mer de Cortés.",
              duration: "Demi-journée",
              departure: "Depuis La Paz",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚌 Bus / Voiture / Taxi",
              lat: 24.3194,
              lng: -110.3264
            },
            {
              theme: "activite",
              title: "Excursion en bateau vers l'Île Espíritu Santo & snorkeling avec les otaries",
              summary: "Sortie en mer vers des criques turquoise et baignade à proximité des colonies d'otaries.",
              duration: "Journée",
              departure: "Depuis le malecón de La Paz",
              price: 85,
              priceLabel: "~85 €/p",
              transport: "🚤 Bateau",
              lat: 24.4833,
              lng: -110.35
            }
          ]
        },
        {
          id: "todos-santos-cabo",
          label: "Todos Santos, Cabo San Lucas & San José del Cabo",
          lat: 23.445,
          lng: -110.225,
          zoom: 10,
          activities: [
            {
              theme: "point-de-vue",
              title: "L'Arche de Cabo San Lucas (Lands End) & galeries de Todos Santos / San José",
              summary: "Formation rocheuse emblématique à la pointe de la péninsule et villages artistiques alentour.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Cabo San Lucas ou Todos Santos",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚤 Bateau / Bus / Voiture",
              lat: 22.8789,
              lng: -109.895
            }
          ]
        },
        {
          id: "loreto-san-ignacio",
          label: "Loreto, Mulegé & Laguna San Ignacio",
          lat: 26.8264,
          lng: -113.1536,
          zoom: 9,
          activities: [
            {
              theme: "activite",
              title: "Observation des baleines grises à Laguna San Ignacio / Guerrero Negro ou îles de Loreto",
              summary: "Rencontre saisonnière avec les baleines grises dans les lagunes côtières ou exploration des îles.",
              duration: "Demi-journée à Journée",
              departure: "Depuis San Ignacio, Guerrero Negro ou Loreto",
              price: 85,
              priceLabel: "~85 €/p",
              transport: "🐋 Bus / Bateau",
              lat: 26.8264,
              lng: -113.1536
            }
          ]
        }
      ]
    },
    {
      id: "sonora",
      title: "État : 26. Sonora",
      mapLabel: "Sonora — Hermosillo & Mer de Cortés",
      lat: 29.0729,
      lng: -110.9559,
      zoom: 6,
      intro: "Capitale : Hermosillo — Cratères volcaniques d'El Pinacate, stations balnéaires de la mer de Cortés et pueblos mágicos.",
      islands: [
        {
          id: "el-pinacate-puerto-penasco",
          label: "Désert d'El Pinacate & Puerto Peñasco",
          lat: 31.75,
          lng: -113.5,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Réserve de biosphère d'El Pinacate y Gran Desierto de Altar (cratères & dunes)",
              summary: "Paysages volcaniques et dunaires spectaculaires au nord de la mer de Cortés.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Puerto Peñasco",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚗 Voiture / Excursion",
              lat: 31.75,
              lng: -113.5
            }
          ]
        },
        {
          id: "san-carlos-alamos",
          label: "San Carlos / Guaymas & Álamos",
          lat: 27.95,
          lng: -111.05,
          zoom: 10,
          activities: [
            {
              theme: "point-de-vue",
              title: "Mirador escénico de San Carlos, criques & village colonial d'Álamos",
              summary: "Vues côtières sur la mer de Cortés à San Carlos et ruelles pavées d'Álamos à l'intérieur.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Guaymas / San Carlos ou Navojoa",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 27.95,
              lng: -111.05
            }
          ]
        }
      ]
    },
    {
      id: "sinaloa",
      title: "État : 27. Sinaloa",
      mapLabel: "Sinaloa — Mazatlán & El Fuerte",
      lat: 24.8091,
      lng: -107.394,
      zoom: 6,
      intro: "Capitale : Culiacán — Front de mer historique de Mazatlán, îles proches et départ du train El Chepe.",
      islands: [
        {
          id: "mazatlan",
          label: "Mazatlán (Centro Histórico, Malecón & Isla de la Piedra)",
          lat: 23.2494,
          lng: -106.4111,
          zoom: 12,
          activities: [
            {
              theme: "marche",
              title: "Centro Histórico de Mazatlán, marché Pino Suárez, malecón & phare",
              summary: "Balade entre architecture restaurée, marché couvert, longue promenade maritime et colline du phare.",
              duration: "3h à 4h",
              departure: "Depuis le Centro Histórico de Mazatlán",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚶 À pied / Pulmonía / Bus",
              lat: 23.198,
              lng: -106.423
            },
            {
              theme: "activite",
              title: "Traversée vers l'Isla de la Piedra ou les Îles de Mazatlán",
              summary: "Courte traversée maritime vers des plages plus calmes ou les îlots face à la ville.",
              duration: "Demi-journée",
              departure: "Depuis les embarcadères de Mazatlán",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚤 Panga / Bateau",
              lat: 23.165,
              lng: -106.385
            }
          ]
        },
        {
          id: "el-fuerte",
          label: "El Fuerte",
          lat: 26.4167,
          lng: -108.6167,
          zoom: 12,
          activities: [
            {
              theme: "monument",
              title: "Centre colonial d'El Fuerte & embarquement sur le train El Chepe",
              summary: "Étape historique paisible au bord de la rivière et point de départ ou d'arrivée du train des canyons.",
              duration: "2h à 3h",
              departure: "Depuis le centre d'El Fuerte",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚂 Train / Bus / À pied",
              lat: 26.4167,
              lng: -108.6167
            }
          ]
        }
      ]
    },
    {
      id: "durango",
      title: "État : 28. Durango",
      mapLabel: "Durango",
      lat: 24.0277,
      lng: -104.6532,
      zoom: 6,
      intro: "Capitale : Victoria de Durango — Forêts de la Sierra Madre, canyons, ponts suspendus et villages historiques.",
      islands: [
        {
          id: "durango-nombre-de-dios-sierra",
          label: "Durango, Nombre de Dios & Sierra Madre",
          lat: 23.8469,
          lng: -104.245,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Sentiers, forêts & ponts suspendus dans la Sierra Madre Occidentale",
              summary: "Air frais, forêts de pins et passerelles au-dessus des ravins de la sierra.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Durango",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚌 Bus / Voiture",
              lat: 23.8469,
              lng: -104.245
            },
            {
              theme: "monument",
              title: "Centre historique de Durango & cascades/villages autour de Nombre de Dios",
              summary: "Découverte du patrimoine de Durango et des sites naturels des environs.",
              duration: "2h à 4h",
              departure: "Depuis Durango",
              price: 10,
              priceLabel: "~10 €/p",
              transport: "🚶 À pied / Bus",
              lat: 24.0277,
              lng: -104.6532
            }
          ]
        }
      ]
    },
    {
      id: "chihuahua",
      title: "État : 29. Chihuahua",
      mapLabel: "Chihuahua — Barrancas del Cobre & Creel",
      lat: 28.6353,
      lng: -106.0889,
      zoom: 6,
      intro: "Capitale : Chihuahua — Canyons gigantesques des Barrancas del Cobre, train Chepe, lac d'Arareco et cascades.",
      islands: [
        {
          id: "barrancas-divisadero",
          label: "Barrancas del Cobre & Divisadero",
          lat: 27.5167,
          lng: -107.7667,
          zoom: 11,
          activities: [
            {
              theme: "point-de-vue",
              title: "Belvédères de Divisadero, téléphérique & tyrolienne au-dessus des canyons",
              summary: "Vues vertigineuses sur l'enchevêtrement des gorges de la Sierra Tarahumara.",
              duration: "2h à 4h",
              departure: "Depuis la gare / point de Divisadero",
              price: 85,
              priceLabel: "~85 €/p",
              transport: "🚂 Train El Chepe / Téléphérique",
              lat: 27.5167,
              lng: -107.7667
            }
          ]
        },
        {
          id: "creel-arareco-basaseachi",
          label: "Creel, Lac d'Arareco & Cascade de Basaseachi",
          lat: 28.1656,
          lng: -108.2114,
          zoom: 10,
          activities: [
            {
              theme: "rando",
              title: "Vallée des Moines, Lac d'Arareco & cascade de Basaseachi",
              summary: "Rochers singuliers, lac entouré de sapins et haute chute d'eau dans les montagnes de Chihuahua.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Creel",
              price: 20,
              priceLabel: "~20 €/p",
              transport: "🚌 Bus / Colectivo / Randonnée",
              lat: 28.1656,
              lng: -108.2114
            }
          ]
        }
      ]
    },
    {
      id: "coahuila",
      title: "État : 30. Coahuila",
      mapLabel: "Coahuila — Saltillo & Cuatro Ciénegas",
      lat: 25.4232,
      lng: -101.0053,
      zoom: 6,
      intro: "Capitale : Saltillo — Pozas turquoise en plein désert, dunes blanches, traditions viticoles et montagnes d'Arteaga.",
      islands: [
        {
          id: "cuatro-cienegas",
          label: "Cuatro Ciénegas (Poza Azul & Dunes de Yeso)",
          lat: 26.9869,
          lng: -102.0653,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Poza Azul, río Mezquites & dunes de gypse blanc de Cuatro Ciénegas",
              summary: "Contraste surprenant entre sources d'eau limpide et étendues de sable blanc au cœur du désert.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Cuatro Ciénegas",
              price: 25,
              priceLabel: "~25 €/p",
              transport: "🚌 Bus / Voiture / Vélo",
              lat: 26.9869,
              lng: -102.0653
            }
          ]
        },
        {
          id: "parras-arteaga",
          label: "Parras de la Fuente & Arteaga",
          lat: 25.4419,
          lng: -102.1789,
          zoom: 10,
          activities: [
            {
              theme: "marche",
              title: "Anciens domaines viticoles de Parras & forêts/montagnes d'Arteaga",
              summary: "Oasis viticole historique à Parras et reliefs boisés d'altitude vers Arteaga.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Saltillo ou Torreón",
              price: 35,
              priceLabel: "~35 €/p",
              transport: "🚗 Voiture / Bus",
              lat: 25.4419,
              lng: -102.1789
            }
          ]
        }
      ]
    },
    {
      id: "nuevo-leon",
      title: "État : 31. Nuevo León",
      mapLabel: "Nuevo León — Monterrey",
      lat: 25.6866,
      lng: -100.3161,
      zoom: 7,
      intro: "Capitale : Monterrey — Parois rocheuses monumentales, parcs urbains, cascades et villages de montagne.",
      islands: [
        {
          id: "monterrey-fundidora-santa-lucia",
          label: "Monterrey, Parque Fundidora & Paseo Santa Lucía",
          lat: 25.6786,
          lng: -100.2836,
          zoom: 12,
          activities: [
            {
              theme: "parc",
              title: "Balade le long du canal Santa Lucía & traversée du Parque Fundidora",
              summary: "Promenade aménagée le long d'un canal urbain reliant le centre au grand parc industriel reconverti.",
              duration: "1h30 à 2h30",
              departure: "Depuis le centre de Monterrey",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚇 Métro / À pied / Bateau",
              lat: 25.6786,
              lng: -100.2836
            }
          ]
        },
        {
          id: "chipinque-huasteca-santiago",
          label: "Parc Chipinque, Cañón de la Huasteca & Santiago",
          lat: 25.6228,
          lng: -100.3653,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Randonnée à Chipinque, falaises de La Huasteca ou cascade Cola de Caballo (Santiago)",
              summary: "Échappées nature aux portes de Monterrey entre sentiers de montagne, parois rocheuses et cascade.",
              duration: "Demi-journée",
              departure: "Depuis Monterrey",
              price: 15,
              priceLabel: "~15 €/p",
              transport: "🚗 Voiture / Excursion / Randonnée",
              lat: 25.6228,
              lng: -100.3653
            }
          ]
        }
      ]
    },
    {
      id: "tamaulipas",
      title: "État : 32. Tamaulipas",
      mapLabel: "Tamaulipas — Ciudad Victoria",
      lat: 23.7369,
      lng: -99.1411,
      zoom: 6,
      intro: "Capitale : Ciudad Victoria — Réserve de biosphère de montagne, forêts de nuages et littoral du golfe du Mexique.",
      islands: [
        {
          id: "el-cielo-gomez-farias",
          label: "Réserve de biosphère El Cielo (Gómez Farías)",
          lat: 23.0833,
          lng: -99.1833,
          zoom: 11,
          activities: [
            {
              theme: "rando",
              title: "Randonnées & observation de la faune dans la réserve de biosphère El Cielo",
              summary: "Zone naturelle variée mêlant forêts d'altitude, rivières et observation d'oiseaux et de la faune.",
              duration: "Demi-journée à Journée",
              departure: "Depuis Gómez Farías",
              price: 30,
              priceLabel: "~30 €/p",
              transport: "🚐 4x4 / Bus / Randonnée",
              lat: 23.0833,
              lng: -99.1833
            }
          ]
        },
        {
          id: "tampico-miramar",
          label: "Tampico & Plage Miramar",
          lat: 22.2331,
          lng: -97.8611,
          zoom: 11,
          activities: [
            {
              theme: "parc",
              title: "Laguna del Carpintero, centre historique de Tampico & plage Miramar",
              summary: "Découverte de la lagune urbaine, du centre historique et du littoral du golfe du Mexique.",
              duration: "2h à 4h",
              departure: "Depuis le centre de Tampico",
              price: 0,
              priceLabel: "Gratuit",
              transport: "🚌 Bus / Taxi / À pied",
              lat: 22.2331,
              lng: -97.8611
            }
          ]
        }
      ]
    }
  ]
};
