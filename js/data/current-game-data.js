const currentGameRoleIds = [
  "de-agent",
  "de-alwetende-uil",
  "de-bommenwerper",
  "de-burger",
  "de-burgerlijke-burger",
  "cupido",
  "de-dictator",
  "de-dodenbezweerder",
  "de-dokter",
  "de-dorpsgek",
  "de-dorpsoudste",
  "de-genezer",
  "de-grafrover",
  "de-husselaar",
  "de-hypocriet",
  "de-jager",
  "de-jaloerse-ex",
  "de-journalist",
  "de-leerling",
  "de-onderduiker",
  "de-papegaai",
  "de-rebel",
  "de-ridder-met-het-roestige-zwaard",
  "de-samurai",
  "de-siamese-tweeling",
  "de-smid",
  "de-stalker",
  "de-stotterende-raadsheer",
  "de-toneelspeler",
  "de-twijfelaar",
  "de-valse-erfgenaam",
  "de-verkenner",
  "de-veteraan",
  "de-verwarde-ziener",
  "de-vos",
  "de-vriend",
  "de-waakengel",
  "de-wachter",
  "de-wethouder",
  "de-ziener",
  "de-zondebok",
  "het-toegewijde-dienstmeisje",
  "het-zwarte-schaap",
  "harige-harry",
  "het-medium",
  "het-onschuldige-sletje",
  "de-fluitspeler",
  "de-pyromaan",
  "de-verloren-ziel",
  "de-heks",
  "de-kleine-wilde",
  "de-onderdrukker",
  "de-weerwolf",
  "de-besmettelijke-raaf",
  "de-twee-gescheiden-gezusters",
  "de-witte-weerwolf",
  "de-besmettelijke-oerwolf",
  "de-concierge",
  "de-glitterende-toverwolf",
  "de-jachtwolf",
  "de-slager",
  "de-verdoemde",
  "de-welp",
  "de-wolf-in-schaapskleren",
  "de-wolf-in-winterslaap",
  "de-wolvenmeester",
  "de-burgemeester",
  "de-geliefde",
  "de-verlammer",
  "de-feestwolf",
  "de-illusionist",
  "het-wolfsspook",
  "de-wolfsoudste",
  "de-wingman",
  "de-onzekere-grenswachter",
  "de-klier",
  "de-omroeper",
  "de-premiejager",
  "de-vervloekte-wolf",
  "de-boze-wolf",
  "de-wolfsschrijver",
  "de-charmante-dealer",
  "de-aasgier",
  "de-sekteleider",
  "de-betoverde",
  "de-herrezene",
  "de-onderdrukte",
  "de-verlamde",
  "de-vermomde",
  "het-sektelid",
  "de-droomwever",
  "de-fotograaf",
  "de-verdwaalde-wolf",
  "de-dief",
  "de-twee-gezusters",
  "de-drie-gebroeders"
];

const currentGameNumber = 16;

const currentGameMasters = [
  "Rick"
];

const activeExpansionKeys = [
  "de-dorpsbrouwerij",
  "de-boeren",
  "basis-rollen",
  "de-cirkelzitting",
  "dronkenschap"
];

const activeExpansionVariants = {};

const excludedActiveExpansionRoleIds = [];

const currentGameBasisRoleIds = [
  "cupido",
  "de-genezer",
  "de-fotograaf",
  "de-vriend",
  "de-jager",
  "de-burger",
  "barman-bob",
  "barman-bert",
  "de-dief"
];

const currentGameBasisWerewolfRoleId = null;

const currentGamePlayers = [
  {
    "name": "Jeron",
    "alive": true,
    "circleOrder": 6
  },
  {
    "name": "Daphne",
    "alive": true,
    "circleOrder": 24
  },
  {
    "name": "Julian",
    "alive": true,
    "circleOrder": 3
  },
  {
    "name": "Lara",
    "alive": true,
    "circleOrder": 18
  },
  {
    "name": "Nina",
    "alive": true,
    "circleOrder": 9
  },
  {
    "name": "Pepijn",
    "alive": true,
    "circleOrder": 21
  },
  {
    "name": "Jolly",
    "alive": true,
    "circleOrder": 14
  },
  {
    "name": "Nick",
    "alive": true,
    "circleOrder": 27
  },
  {
    "name": "Maik",
    "alive": true,
    "circleOrder": 5
  },
  {
    "name": "Solène",
    "alive": true,
    "circleOrder": 16
  },
  {
    "name": "Ruben",
    "alive": true,
    "circleOrder": 22
  },
  {
    "name": "Tijs",
    "alive": true,
    "circleOrder": 10
  },
  {
    "name": "Mats",
    "alive": true,
    "circleOrder": 1
  },
  {
    "name": "Micha",
    "alive": true,
    "circleOrder": 25
  },
  {
    "name": "Per",
    "alive": true,
    "circleOrder": 8
  },
  {
    "name": "Kayen",
    "alive": true,
    "circleOrder": 19
  },
  {
    "name": "Fajjaaz",
    "alive": true,
    "circleOrder": 29
  },
  {
    "name": "Magnus",
    "alive": true,
    "circleOrder": 7
  },
  {
    "name": "Barry",
    "alive": true,
    "circleOrder": 23
  },
  {
    "name": "Donovan",
    "alive": true,
    "circleOrder": 11
  },
  {
    "name": "Michel",
    "alive": true,
    "circleOrder": 20
  },
  {
    "name": "Bouke",
    "alive": true,
    "circleOrder": 26
  },
  {
    "name": "Nienke",
    "alive": true,
    "circleOrder": 15
  },
  {
    "name": "Benji",
    "alive": true,
    "circleOrder": 2
  },
  {
    "name": "Megan",
    "alive": true,
    "circleOrder": 13
  },
  {
    "name": "Niels",
    "alive": true,
    "circleOrder": 28
  },
  {
    "name": "Ivar",
    "alive": true,
    "circleOrder": 17
  },
  {
    "name": "Shannon",
    "alive": true,
    "circleOrder": 4
  }
];

const currentGameAnnouncements = [
  {
    "datetime": "2026-08-31T14:00:04",
    "label": "31 augustus 14:00",
    "message": "Lucas heeft toch het dorp verlaten."
  },
  {
    "datetime": "2026-08-31T14:00:01",
    "label": "31 augustus 14:00",
    "message": "Lotte heeft het dorp verlaten."
  },
  {
    "datetime": "2026-08-31T14:00:02",
    "label": "31 augustus 14:00",
    "message": "Niels koos voor het dorp en is herrezen."
  },
  {
    "datetime": "2026-08-31T14:00:03",
    "label": "31 augustus 14:00",
    "message": "Shannon koos voor het dorp en is herrezen."
  },
  {
    "datetime": "2026-08-30T21:00:01",
    "label": "30 augustus 21:00",
    "message": "Niels is gestorven door te lang twijfelen."
  },
  {
    "datetime": "2026-08-30T21:00:02",
    "label": "30 augustus 21:00",
    "message": "Lotte is gestorven door te lang twijfelen."
  },
  {
    "datetime": "2026-08-30T21:00:03",
    "label": "30 augustus 21:00",
    "message": "Shannon is gestorven door te lang twijfelen."
  }
];

const currentGameTalentNames = [];

const currentGameExtraTalents = [];
