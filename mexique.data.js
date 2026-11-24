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
              lat: 19.4348,
              lng: -99.1315,
              price: 10,
              transport: "🚇 Métro Zócalo / À pied"
            },
            {
              theme: "monument",
              title: "Palacio de Bellas Artes, Torre Latinoamericana & Palacio Postal",
              lat: 19.4352,
              lng: -99.1412,
              price: 10,
              transport: "🚇 Métro Bellas Artes"
            },
            {
              theme: "marche",
              title: "Marché de San Juan & tacos al pastor / quesadillas traditionnelles",
              lat: 19.4295,
              lng: -99.1465,
              price: 15,
              transport: "🚇 Métro / À pied"
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
              lat: 19.4204,
              lng: -99.1819,
              price: 10,
              transport: "🚇 Métro Chapultepec / Audiorama"
            },
            {
              theme: "monument",
              title: "Musée national d'anthropologie & musée Soumaya",
              lat: 19.426,
              lng: -99.1862,
              price: 10,
              transport: "🚌 Métrobus / À pied"
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
              lat: 19.4119,
              lng: -99.1704,
              price: 0,
              transport: "🚶 À pied / Vélo / Métrobus"
            },
            {
              theme: "monument",
              title: "Coyoacán, place Hidalgo & Musée Frida Kahlo (Casa Azul)",
              lat: 19.3552,
              lng: -99.1625,
              price: 20,
              transport: "🚇 Métro Coyoacán / Viveros"
            },
            {
              theme: "activite",
              title: "Promenade en trajinera colorée sur les canaux de Xochimilco",
              lat: 19.2546,
              lng: -99.1036,
              price: 35,
              transport: "🚤 Tren Ligero / Trajinera"
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
              lat: 19.6925,
              lng: -98.8435,
              price: 15,
              transport: "🚌 Bus depuis Terminal Norte"
            },
            {
              theme: "activite",
              title: "Survol de Teotihuacán en montgolfière au lever du jour",
              lat: 19.685,
              lng: -98.852,
              price: 95,
              transport: "🎈 Navette / Transport privé"
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
              lat: 19.108,
              lng: -99.7606,
              price: 10,
              transport: "🚗 Voiture / Excursion"
            },
            {
              theme: "activite",
              title: "Valle de Bravo : lac, cascade Velo de Novia & parapente",
              lat: 19.1936,
              lng: -100.1306,
              price: 25,
              transport: "🚌 Bus / Voiture"
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
              lat: 18.9994,
              lng: -99.0972,
              price: 10,
              transport: "🥾 À pied depuis le village"
            },
            {
              theme: "marche",
              title: "Marché artisanal & gastronomique du dimanche à Tepoztlán",
              lat: 18.9846,
              lng: -99.0956,
              price: 15,
              transport: "🚶 À pied / Bus"
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
              lat: 18.8047,
              lng: -99.2933,
              price: 15,
              transport: "🚐 Bus / Colectivo"
            },
            {
              theme: "parc",
              title: "Palais de Cortés, jardins Borda & cascades de Cuernavaca",
              lat: 18.9219,
              lng: -99.2342,
              price: 10,
              transport: "🚌 Bus / Taxi"
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
              lat: 19.0431,
              lng: -98.198,
              price: 10,
              transport: "🚶 À pied / Bus"
            },
            {
              theme: "marche",
              title: "Dégustation du mole poblano, chiles en nogada & quartier de Talavera",
              lat: 19.0465,
              lng: -98.1945,
              price: 25,
              transport: "🚶 À pied"
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
              lat: 19.0575,
              lng: -98.3019,
              price: 10,
              transport: "🚌 Bus local / Train"
            },
            {
              theme: "parc",
              title: "Atlixco : pépinières fleuries, mirador de San Miguel & fresques murales",
              lat: 18.9089,
              lng: -98.4425,
              price: 10,
              transport: "🚌 Bus / Voiture"
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
              lat: 19.2422,
              lng: -98.3478,
              price: 15,
              transport: "🚐 Bus / Colectivo"
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
              lat: 19.4833,
              lng: -98.6167,
              price: 25,
              transport: "🚐 Bus / Excursion"
            },
            {
              theme: "rando",
              title: "Randonnée dans le parc national de la Malinche",
              lat: 19.2314,
              lng: -98.0319,
              price: 10,
              transport: "🚗 Voiture / Randonnée"
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
              lat: 20.6425,
              lng: -98.9889,
              price: 35,
              transport: "🚐 Bus + Colectivo"
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
              lat: 20.2256,
              lng: -98.5678,
              price: 15,
              transport: "🚐 Colectivo / Voiture"
            },
            {
              theme: "marche",
              title: "Real del Monte : ruelles d'altitude & dégustation de pastes",
              lat: 20.1389,
              lng: -98.6714,
              price: 15,
              transport: "🚌 Colectivo / À pied"
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
              lat: 20.5931,
              lng: -100.3775,
              price: 0,
              transport: "🚶 À pied / Bus"
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
              lat: 20.7436,
              lng: -99.9436,
              price: 10,
              transport: "🚌 Bus / À pied"
            },
            {
              theme: "marche",
              title: "Route des fromages et vignobles autour de Tequisquiapan & Ezequiel Montes",
              lat: 20.5206,
              lng: -99.8936,
              price: 45,
              transport: "🚗 Voiture / Excursion"
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
              lat: 21.2167,
              lng: -99.6333,
              price: 35,
              transport: "🚗 Voiture / Excursion"
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
              lat: 21.0138,
              lng: -101.2528,
              price: 10,
              transport: " funiculaire / À pied"
            },
            {
              theme: "monument",
              title: "Théâtre Juárez, Université de Guanajuato, Callejón del Beso & mine Valenciana",
              lat: 21.0185,
              lng: -101.2545,
              price: 15,
              transport: "🚶 À pied / Bus"
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
              lat: 20.9144,
              lng: -100.7436,
              price: 0,
              transport: "🚶 À pied"
            },
            {
              theme: "marche",
              title: "Dolores Hidalgo : berceau de l'indépendance & glaces artisanales insolites",
              lat: 21.1561,
              lng: -100.9319,
              price: 15,
              transport: "🚌 Bus régional"
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
              lat: 20.2149,
              lng: -87.429,
              price: 25,
              transport: "🚲 Vélo / Colectivo / À pied"
            },
            {
              theme: "parc",
              title: "Baignade & snorkeling dans les cénotes (Gran Cenote, Dos Ojos, Cenote Azul)",
              lat: 20.2469,
              lng: -87.465,
              price: 35,
              transport: "🚲 Vélo / Colectivo / Voiture"
            },
            {
              theme: "activite",
              title: "Snorkeling avec les tortues marines à Akumal",
              lat: 20.3956,
              lng: -87.3164,
              price: 40,
              transport: "🚐 Colectivo / Bateau"
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
              lat: 18.6781,
              lng: -88.39,
              price: 45,
              transport: "⛵ Bateau / Kayak"
            },
            {
              theme: "monument",
              title: "Fort de San Felipe de Bacalar & baignade au Cenote Cocalitos",
              lat: 18.6761,
              lng: -88.3894,
              price: 15,
              transport: "🚶 À pied / Taxi"
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
              lat: 21.5226,
              lng: -87.3796,
              price: 25,
              transport: "⛴️ Ferry + Voiturette / Vélo"
            },
            {
              theme: "activite",
              title: "Plongée / snorkeling sur les récifs coralliens de Cozumel ou Isla Mujeres",
              lat: 20.423,
              lng: -86.9223,
              price: 65,
              transport: "⛴️ Ferry + Bateau"
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
              lat: 19.8667,
              lng: -87.5833,
              price: 95,
              transport: "🚤 4x4 / Bateau"
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
              lat: 20.6843,
              lng: -88.5678,
              price: 45,
              transport: "🚌 Bus ADO / Colectivo"
            },
            {
              theme: "monument",
              title: "Uxmal & sites mayas de la route Puuc (Kabah, Labná)",
              lat: 20.3606,
              lng: -89.7711,
              price: 40,
              transport: "🚌 Bus / Voiture"
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
              lat: 20.9674,
              lng: -89.6243,
              price: 20,
              transport: "🚶 À pied / Bus / Uber"
            },
            {
              theme: "monument",
              title: "Valladolid (cenote Zací, couvent San Bernardino) & Izamal (ville jaune)",
              lat: 20.6897,
              lng: -88.2022,
              price: 15,
              transport: "🚌 Bus ADO / Colectivo"
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
              lat: 20.739,
              lng: -89.288,
              price: 25,
              transport: "🚐 Colectivo / Moto-taxi"
            },
            {
              theme: "activite",
              title: "Sortie en bateau à Río Lagartos & Las Coloradas (salines roses & flamants)",
              lat: 21.5944,
              lng: -88.1528,
              price: 35,
              transport: "🚤 Voiture / Bus + Bateau"
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
              lat: 19.8454,
              lng: -90.5356,
              price: 0,
              transport: "🚶 À pied"
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
              lat: 18.1053,
              lng: -89.8106,
              price: 80,
              transport: "🚙 Voiture / Excursion"
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
              lat: 17.4838,
              lng: -92.0466,
              price: 25,
              transport: "🚐 Colectivo / Taxi"
            },
            {
              theme: "parc",
              title: "Cascades d'Agua Azul & cascade de Misol-Ha",
              lat: 17.2667,
              lng: -92.1167,
              price: 20,
              transport: "🚐 Colectivo / Excursion"
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
              lat: 16.737,
              lng: -92.6376,
              price: 15,
              transport: "🚶 À pied"
            },
            {
              theme: "monument",
              title: "Visite de San Juan Chamula & Zinacantán (coutumes & textiles)",
              lat: 16.7833,
              lng: -92.6833,
              price: 20,
              transport: "🚐 Colectivo"
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
              lat: 16.845,
              lng: -93.085,
              price: 35,
              transport: "🚤 Bateau / Colectivo"
            },
            {
              theme: "parc",
              title: "Parc national des Lagunas de Montebello & cascades de Chiflón",
              lat: 16.1167,
              lng: -91.7,
              price: 25,
              transport: "🚐 Colectivo / Excursion"
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
              lat: 17.9978,
              lng: -92.9411,
              price: 25,
              transport: "🚌 Bus / Taxi"
            },
            {
              theme: "marche",
              title: "Visite d'une hacienda de cacao & dégustation de chocolat artisanal",
              lat: 18.2631,
              lng: -93.2244,
              price: 25,
              transport: "🚗 Voiture / Excursion"
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
              lat: 17.0437,
              lng: -96.7678,
              price: 20,
              transport: "🚐 Colectivo / Bus"
            },
            {
              theme: "marche",
              title: "Marchés d'Oaxaca, ateliers de mezcal (Teotitlán / Santiago Matatlán) & tlayudas",
              lat: 17.0608,
              lng: -96.725,
              price: 25,
              transport: "🚶 À pied / Colectivo"
            },
            {
              theme: "point-de-vue",
              title: "Cascades pétrifiées et bassins naturels de Hierve el Agua",
              lat: 16.8653,
              lng: -96.2764,
              price: 20,
              transport: "🚐 Colectivo / Excursion"
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
              lat: 15.8622,
              lng: -97.0711,
              price: 20,
              transport: "🚐 Colectivo / Taxi"
            },
            {
              theme: "point-de-vue",
              title: "Coucher de soleil à Punta Cometa (Mazunte) & plages de Zipolite",
              lat: 15.6656,
              lng: -96.5508,
              price: 0,
              transport: "🚶 À pied / Colectivo"
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
              lat: 18.5564,
              lng: -99.605,
              price: 0,
              transport: "🚶 À pied / Taxi coccinelle"
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
              lat: 17.6419,
              lng: -101.5514,
              price: 20,
              transport: "🚤 Bateau / Taxi"
            },
            {
              theme: "point-de-vue",
              title: "Falaises de La Quebrada & baie d'Acapulco",
              lat: 16.8492,
              lng: -99.9144,
              price: 15,
              transport: "🚌 Bus / Taxi"
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
              lat: 20.4486,
              lng: -97.3781,
              price: 15,
              transport: "🚌 Bus ADO / Colectivo"
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
              lat: 19.1738,
              lng: -96.1342,
              price: 20,
              transport: "🚌 Bus ADO / À pied"
            }
          ]
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
              lat: 19.7026,
              lng: -101.1924,
              price: 0,
              transport: "🚶 À pied / Bus"
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
              lat: 19.5736,
              lng: -101.6514,
              price: 15,
              transport: "🚤 Bateau / Bus"
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
              lat: 19.5917,
              lng: -100.2667,
              price: 45,
              transport: "🚐 Bus + Colectivo / Cheval"
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
              lat: 20.6767,
              lng: -103.3475,
              price: 10,
              transport: "🚇 Métro / À pied"
            },
            {
              theme: "marche",
              title: "Tlaquepaque & Tonalá : galeries, céramique, marchés & torta ahogada",
              lat: 20.6394,
              lng: -103.3119,
              price: 15,
              transport: "🚇 Métro / Bus / Taxi"
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
              lat: 20.8808,
              lng: -103.8364,
              price: 65,
              transport: "🚂 Train Tequila Express / Bus"
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
              lat: 20.6064,
              lng: -105.2369,
              price: 0,
              transport: "🚶 À pied / Bus"
            },
            {
              theme: "activite",
              title: "Excursion en bateau vers Las Ánimas, Yelapa ou Los Arcos",
              lat: 20.4739,
              lng: -105.3083,
              price: 55,
              transport: "🚤 Bateau / Panga"
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
              lat: 20.8686,
              lng: -105.4408,
              price: 25,
              transport: "🚌 Bus / Taxi / À pied"
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
              lat: 21.0,
              lng: -105.5667,
              price: 75,
              transport: "🚤 Bateau"
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
              lat: 19.3833,
              lng: -103.76,
              price: 10,
              transport: "🚌 Bus / Colectivo"
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
              lat: 18.9167,
              lng: -104.0667,
              price: 10,
              transport: "🚌 Bus / Voiture"
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
              lat: 21.8818,
              lng: -102.296,
              price: 0,
              transport: "🚶 À pied / Bus"
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
              lat: 22.2389,
              lng: -102.09,
              price: 15,
              transport: "🚌 Bus / Voiture"
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
              lat: 21.8667,
              lng: -99.2167,
              price: 50,
              transport: "🚐 Colectivo / Excursion / Panga"
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
              lat: 21.3964,
              lng: -98.9936,
              price: 25,
              transport: "🚐 Bus / Colectivo / Taxi"
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
              lat: 23.6908,
              lng: -100.8861,
              price: 20,
              transport: "🚙 Bus + Willys / Randonnée"
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
              lat: 22.7778,
              lng: -102.5706,
              price: 15,
              transport: "🚡 Téléphérique / À pied"
            },
            {
              theme: "monument",
              title: "Cathédrale de Zacatecas, musée Rafael Coronel & visite souterraine de la mine El Edén",
              lat: 22.7764,
              lng: -102.5789,
              price: 20,
              transport: "🚶 À pied / Train minier"
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
              lat: 22.4167,
              lng: -102.9167,
              price: 15,
              transport: "🚌 Bus / Voiture"
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
              lat: 32.0919,
              lng: -116.5881,
              price: 65,
              transport: "🚗 Voiture / Excursion"
            },
            {
              theme: "point-de-vue",
              title: "Souffleur marin de La Bufadora & côte pacifique",
              lat: 31.7244,
              lng: -116.7167,
              price: 10,
              transport: "🚗 Bus / Voiture"
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
              lat: 24.3194,
              lng: -110.3264,
              price: 10,
              transport: "🚌 Bus / Voiture / Taxi"
            },
            {
              theme: "activite",
              title: "Excursion en bateau vers l'Île Espíritu Santo & snorkeling avec les otaries",
              lat: 24.4833,
              lng: -110.35,
              price: 85,
              transport: "🚤 Bateau"
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
              lat: 22.8789,
              lng: -109.895,
              price: 35,
              transport: "🚤 Bateau / Bus / Voiture"
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
              lat: 26.8264,
              lng: -113.1536,
              price: 85,
              transport: "🐋 Bus / Bateau"
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
              lat: 31.75,
              lng: -113.5,
              price: 25,
              transport: "🚗 Voiture / Excursion"
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
              lat: 27.95,
              lng: -111.05,
              price: 15,
              transport: "🚌 Bus / Voiture"
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
              lat: 23.198,
              lng: -106.423,
              price: 10,
              transport: "🚶 À pied / Pulmonía / Bus"
            },
            {
              theme: "activite",
              title: "Traversée vers l'Isla de la Piedra ou les Îles de Mazatlán",
              lat: 23.165,
              lng: -106.385,
              price: 20,
              transport: "🚤 Panga / Bateau"
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
              lat: 26.4167,
              lng: -108.6167,
              price: 0,
              transport: "🚂 Train / Bus / À pied"
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
              lat: 23.8469,
              lng: -104.245,
              price: 20,
              transport: "🚌 Bus / Voiture"
            },
            {
              theme: "monument",
              title: "Centre historique de Durango & cascades/villages autour de Nombre de Dios",
              lat: 24.0277,
              lng: -104.6532,
              price: 10,
              transport: "🚶 À pied / Bus"
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
              lat: 27.5167,
              lng: -107.7667,
              price: 85,
              transport: "🚂 Train El Chepe / Téléphérique"
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
              lat: 28.1656,
              lng: -108.2114,
              price: 20,
              transport: "🚌 Bus / Colectivo / Randonnée"
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
              lat: 26.9869,
              lng: -102.0653,
              price: 25,
              transport: "🚌 Bus / Voiture / Vélo"
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
              lat: 25.4419,
              lng: -102.1789,
              price: 35,
              transport: "🚗 Voiture / Bus"
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
              lat: 25.6786,
              lng: -100.2836,
              price: 0,
              transport: "🚇 Métro / À pied / Bateau"
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
              lat: 25.6228,
              lng: -100.3653,
              price: 15,
              transport: "🚗 Voiture / Excursion / Randonnée"
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
              lat: 23.0833,
              lng: -99.1833,
              price: 30,
              transport: "🚐 4x4 / Bus / Randonnée"
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
              lat: 22.2331,
              lng: -97.8611,
              price: 0,
              transport: "🚌 Bus / Taxi / À pied"
            }
          ]
        }
      ]
    }
  ]
};

