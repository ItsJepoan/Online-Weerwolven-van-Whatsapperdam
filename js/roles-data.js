const roles = [
  {
    id: "villager",
    name: "Dorpsbewoner",
    image: "images/placeholder-role.jpg",
    alliance: "Burger",
    types: ["Informatief"],
    description: "Voorbeeldtekst: dit is een standaardrol zonder speciale kracht.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "werewolf",
    name: "Weerwolf",
    image: "images/placeholder-role.jpg",
    alliance: "Weerwolf",
    types: ["Moord", "Chaos"],
    description: "Voorbeeldtekst: deze rol hoort bij het weerwolfteam en schakelt anderen uit.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "seer",
    name: "Ziener",
    image: "images/placeholder-role.jpg",
    alliance: "Burger",
    types: ["Informatief"],
    description: "Voorbeeldtekst: deze rol verzamelt informatie over andere spelers.",
    isExpansionRole: false,
    expansionKey: null
  },

  {
    id: "shadow-hunter",
    name: "Schaduwjager",
    image: "images/placeholder-expansion-role.jpg",
    alliance: "Onafhankelijke",
    types: ["Moord", "Zelfredzaamheid", "Uitbreiding"],
    description: "Voorbeeldtekst: deze rol hoort bij een uitbreiding en hoort dus niet in de gewone rollenlijst.",
    isExpansionRole: true,
    expansionKey: "dark-forest"
  },
  {
    id: "moon-priestess",
    name: "Maanpriesteres",
    image: "images/placeholder-expansion-role.jpg",
    alliance: "Burger",
    types: ["Informatief", "Chaos", "Uitbreiding"],
    description: "Voorbeeldtekst: deze rol komt alleen voor binnen een uitbreiding.",
    isExpansionRole: true,
    expansionKey: "dark-forest"
  }
];