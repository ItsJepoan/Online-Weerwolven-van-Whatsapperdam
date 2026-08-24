const currentGameRoleIds = [];

const currentGameNumber = 15;

const currentGameMasters = [
  "Jeron"
];

const activeExpansionKeys = [
  "back-to-basics-wakkerdam-editie"
];

const activeExpansionVariants = {};

const excludedActiveExpansionRoleIds = [];

const currentGameBasisRoleIds = [];

const currentGameBasisWerewolfRoleId = null;

const currentGamePlayers = [
  {
    "name": "Julian",
    "alive": false,
    "circleOrder": 15
  },
  {
    "name": "Solène",
    "alive": false,
    "circleOrder": 16
  },
  {
    "name": "Ilse",
    "alive": false,
    "circleOrder": 13
  },
  {
    "name": "Ruben",
    "alive": false,
    "circleOrder": 28
  },
  {
    "name": "Nina",
    "alive": true,
    "circleOrder": 20
  },
  {
    "name": "Nick",
    "alive": false,
    "circleOrder": 22
  },
  {
    "name": "Barry",
    "alive": true,
    "circleOrder": 8
  },
  {
    "name": "Per",
    "alive": false,
    "circleOrder": 17
  },
  {
    "name": "Micha",
    "alive": false,
    "circleOrder": 9
  },
  {
    "name": "Tijs",
    "alive": true,
    "circleOrder": 2
  },
  {
    "name": "Ivar",
    "alive": false,
    "circleOrder": 4
  },
  {
    "name": "Michel",
    "alive": true,
    "circleOrder": 5
  },
  {
    "name": "Lucas",
    "alive": true,
    "circleOrder": 6
  },
  {
    "name": "Lotte",
    "alive": true,
    "circleOrder": 10
  },
  {
    "name": "Rick",
    "alive": true,
    "circleOrder": 21
  },
  {
    "name": "Magnus",
    "alive": true,
    "circleOrder": 18
  },
  {
    "name": "Nienke",
    "alive": true,
    "circleOrder": 27
  },
  {
    "name": "Fajjaaz",
    "alive": false,
    "circleOrder": 14
  },
  {
    "name": "Mats",
    "alive": true,
    "circleOrder": 3
  },
  {
    "name": "Benji",
    "alive": false,
    "circleOrder": 23
  },
  {
    "name": "Thomas",
    "alive": false,
    "circleOrder": 11
  },
  {
    "name": "Donovan",
    "alive": false,
    "circleOrder": 19
  },
  {
    "name": "Maik",
    "alive": false,
    "circleOrder": 26
  },
  {
    "name": "Shannon",
    "alive": false,
    "circleOrder": 7
  },
  {
    "name": "Kayen",
    "alive": false,
    "circleOrder": 25
  },
  {
    "name": "Megan",
    "alive": true,
    "circleOrder": 12
  },
  {
    "name": "Bouke",
    "alive": true,
    "circleOrder": 1
  },
  {
    "name": "Pepijn",
    "alive": false,
    "circleOrder": 24
  }
];

const currentGameAnnouncements = [
  {
    "datetime": "2026-08-17T00:00",
    "label": "17 augustus",
    "message": "Spel 15 is vandaag gestart."
  },
  {
    "datetime": "2026-08-18T09:00:01",
    "label": "18 augustus 09:00",
    "message": "Kayen is verslonden door de weerwolven en was *De Jager*."
  },
  {
    "datetime": "2026-08-18T09:00:02",
    "label": "18 augustus 09:00",
    "message": "Pepijn stierf aan liefdesverdriet om Kayen en was *De Wakkerdamse Toneelspeler*."
  },
  {
    "datetime": "2026-08-18T09:00:03",
    "label": "18 augustus 09:00",
    "message": "Solène is verslonden door de weerwolven en was *De Stotterende Raadsheer*."
  },
  {
    "datetime": "2026-08-18T09:00:04",
    "label": "18 augustus 09:00",
    "message": "Ivar stierf aan liefdesverdriet om Solène en was *De Dorpsgek*."
  },
  {
    "datetime": "2026-08-18T09:00:05",
    "label": "18 augustus 09:00",
    "message": "Maik werd dodelijk geraakt door een kogel en was *De Zondebok*."
  },
  {
    "datetime": "2026-08-18T20:00",
    "label": "18 augustus 20:00",
    "message": "Julian is op de brandstapel gegooid en was *Cupido*."
  },
  {
    "datetime": "2026-08-19T09:00",
    "label": "19 augustus 09:00",
    "message": "Fajjaaz is vannacht gestorven en was *De Wakkerdamse Grote Boze Wolf*."
  },
  {
    "datetime": "2026-08-19T20:00",
    "label": "19 augustus 20:00",
    "message": "Benji is op de brandstapel gegooid en was *De Weerwolf*."
  },
  {
    "datetime": "2026-08-20T20:00",
    "label": "20 augustus 20:00",
    "message": "Donovan is op de brandstapel gegooid en was *De Burger*."
  },
  {
    "datetime": "2026-08-21T09:00",
    "label": "21 augustus 09:00",
    "message": "Nick is verslonden door de weerwolven en was *De Ziener*."
  },
  {
    "datetime": "2026-08-21T20:00",
    "label": "21 augustus 20:00",
    "message": "Ilse is op de brandstapel gegooid en was *De Verschrikkelijke Sektariër*."
  },
  {
    "datetime": "2026-08-22T09:00",
    "label": "22 augustus 09:00",
    "message": "Per is verslonden door de weerwolven en was *Het Toegewijde Dienstmeisje*."
  },
  {
    "datetime": "2026-08-22T20:00",
    "label": "22 augustus 20:00",
    "message": "Ruben is op de brandstapel gegooid en was *De Wolvige (een van) De Drie Gebroeders*."
  },
  {
    "datetime": "2026-08-23T09:00",
    "label": "23 augustus 09:00",
    "message": "Shannon is verslonden door de weerwolven en was *De Wakkerdamse Vos*."
  },
  {
    "datetime": "2026-08-23T20:00",
    "label": "23 augustus 20:00",
    "message": "Micha is op de brandstapel gegooid en was *De Weerwolf*."
  },
  {
    "datetime": "2026-08-24T09:00",
    "label": "24 augustus 09:00",
    "message": "Thomas is verslonden door de weerwolven en was *Het Onschuldige Meisje*."
  }
];

const currentGameTalentNames = [];

const currentGameExtraTalents = [];
