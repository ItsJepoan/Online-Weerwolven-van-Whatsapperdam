const rulesSections = [
  {
    title: "Algemeen",
    content: [
      "Weerwolven Online is een 24-uurs spel dat via WhatsApp wordt gespeeld. In het dorp Whatsapperdam wonen burgers en weerwolven. Iedereen krijgt één rol; wat deze rol kan en doet staat in de rollen-uitleg."
    ]
  },
  {
    title: "Dag en nacht",
    content: [
      "Het spel bestaat uit drie vaste momenten binnen een etmaal:"
    ],
    list: [
      "Overdag van 10:00 tot 20:00",
      "Nacht van 20:00 tot 09:00",
      "Het spoeduurtje van 09:00 tot 10:00"
    ],
    extraContent: [
      "Overdag wordt uitsluitend de burgerberaad-chat gebruikt. Hier vinden discussies, verdenkingen, speeches en de stemming voor de brandstapel plaats. Alle levende spelers mogen hier praten en stemmen.",
      "Om 20:00 begint de nacht. De burgerberaad-chat sluit en alleen de weerwolvenchat is actief voor overleg. Tijdens de nacht voeren alle rollen met nachtelijke acties hun krachten uit via een direct bericht aan de GM. Denk aan onderzoeken, beschermen, doden, betoveren of andere speciale acties.",
      "Tussen 09:00 en 10:00 geldt het spoeduurtje. In dit uur worden directe en verplichte nasleep-acties afgehandeld, zoals de jager die iemand meeneemt het graf in of de burgemeester die een opvolger aanwijst. Dit is geen discussieperiode, maar een afhandelingsmoment."
    ]
  },
  {
    title: "Doel",
    list: [
      "Burgers winnen als alle weerwolven dood zijn.",
      "Weerwolven winnen als zij evenveel spelers zijn als de burgers of in de meerderheid komen.",
      "Onafhankelijken hebben hun eigen winconditie en kunnen het spel op hun eigen manier winnen, los van burgers en weerwolven."
    ]
  },
  {
    title: "Rolverdeling",
    content: [
      "Binnen het spel zijn er voor burgers en weerwolven twee categorieën rollen: Basisrollen en Toevoegende rollen."
    ],
    subSections: [
      {
        title: "Basisrollen",
        content: [
          "De basisrollen zijn in ieder spel aanwezig. Deze vormen de vaste kern van zowel de burgers als de weerwolven."
        ]
      },
      {
        title: "Toevoegende rollen",
        content: [
          "Naast de basisrollen zijn er toevoegende rollen. Het totale aantal mogelijke toevoegende rollen ligt altijd hoger dan het aantal spelers. Het wordt niet bekendgemaakt welke en hoeveel van deze rollen daadwerkelijk in het spel zitten.",
          "Dit creëert ruimte voor bluffen, misleiding en strategisch spel, voor zowel burgers als weerwolven.",
          "Binnen de toevoegende rollen kunnen bij de burgers ook basisrollen voorkomen. Dit betekent dat sommige rollen dubbel in het spel aanwezig kunnen zijn."
        ]
      },
      {
        title: "Aantal weerwolven",
        content: [
          "Het aantal weerwolven en burgers is in grote lijnen af te leiden uit voorgaande spellen. Spelers kunnen hier dus rekening mee houden."
        ]
      },
      {
        title: "Onafhankelijke rollen",
        content: [
          "In elk spel zitten altijd twee of drie Onafhankelijke rollen. Welke dit zijn, wordt niet bekendgemaakt. Deze rollen vormen een onvoorspelbare factor binnen het dorp en kunnen de balans sterk beïnvloeden."
        ]
      }
    ]
  },
  {
    title: "Burgemeester",
    content: [
      "Op de eerste dag wordt een burgemeester gekozen via een stemming. Iedereen mag zich kandidaat stellen door een korte speech in de burgerberaad-chat te plaatsen. Ook een weerwolf kan burgemeester zijn.",
      "De speeches mogen worden gegeven tussen 10:00 en 15:00.",
      "Van 15:00 tot 16:30 wordt er via een poll gestemd.",
      "Na 16:30 wordt de nieuwe burgemeester bekendgemaakt.",
      "Daarna opent direct de stemming voor de brandstapel."
    ]
  },
  {
    title: "Stemming",
    content: [
      "Elke dag kan er gestemd worden van 10:00 tot 20:00. Om 20:00 wordt de speler met de meeste stemmen op de brandstapel gegooid."
    ],
    list: [
      "Stemmen doe je met een bericht als: “Ik stem op Rick”.",
      "Polls, bewerkte berichten en stemmen na 20:00 tellen niet mee."
    ]
  },
  {
    title: "Rollen en acties",
    content: [
      "Alle rolkrachten worden gebruikt via een privébericht aan de GM. Informatie die je rol oplevert, ontvang je ook privé van de GM."
    ]
  },
  {
    title: "Weerwolven",
    content: [
      "De weerwolven hebben een aparte groepschat waarin zij ’s nachts overleggen en een slachtoffer kiezen. Deze chat mag alleen ’s nachts gebruikt worden."
    ]
  },
  {
    title: "Dood",
    content: [
      "Als er iemand sterft, wordt dit aangekondigd in de aankondigingen met de naam van de speler en diens rol. Je wordt daarna toegevoegd aan de doden-chat."
    ],
    list: [
      "Doden mogen daar vrij praten en speculeren over het spel. Bluffen en misleiding blijven toegestaan.",
      "De burgerberaad-chat mag nog wel gelezen worden, maar niet gebruikt.",
      "Doden mogen onder geen beding invloed uitoefenen op de levenden. Dus geen berichten, geen hints en ook geen emoji-reacties in de burgerberaad-chat.",
      "’s Nachts beantwoorden doden eventueel de vraag van het medium.",
      "Omdat er rollen bestaan die iemand uit de dood kunnen terughalen, is het niet de bedoeling dat doden volledige rollenlijsten of alle weerwolven gaan onthullen. Het voordeel van de dodenchat is vooral dat spelers nog informatie kunnen delen die zij vlak voor hun dood niet meer konden zeggen."
    ]
  },
  {
    title: "Bluffen en rollen",
    content: [
      "Als jij informatie hebt verkregen via jouw nachtelijke actie, mag je deze delen met het dorp. Om dit overtuigend te laten overkomen mag je claimen dat je deze informatie via jouw rol hebt gekregen en daarbij ook je rol benoemen.",
      "Omdat iedereen dit kan doen en er geen hard bewijs bestaat, geldt dit altijd als bluffen. Niemand is dus volledig te vertrouwen.",
      "Je mag andere spelers niet forceren om hun rol te onthullen. Wel mag je hen vragen hoe zij aan bepaalde informatie zijn gekomen."
    ]
  },
  {
    title: "Chatgedrag",
    content: [
      "Om het spel overzichtelijk en prettig te houden geldt er in de Overdag – Burgerberaad groepsapp een limiet van 20 berichten per persoon per dag.",
      "Er staat geen directe straf op het overschrijden van dit aantal, maar houd hier zelf verantwoordelijkheid in. Het verschil tussen simpelweg praten en jezelf verdedigen is soms niche, dus gebruik je eigen oordeel. Het doel van het limiet is vooral dat het spel voor iedereen goed te volgen blijft.",
      "De burgemeester heeft geen chatlimiet."
    ]
  }
  {
  id: "de-waarzegster",
  name: "De Waarzegster",
  image: "images/De Waarzegster.png",
  alliance: "Burger",
  types: ["Uitbreiding"],
  description: `In een klein huis aan de rand van Whatsapperdam woont de Waarzegster, zus van de Ziener. Waar haar zus in de nacht visioenen ontvangt over personen, leest de Waarzegster de tekens van het dorp zelf. Zij voelt wanneer het lot zich roert en begrijpt de betekenis achter de mysterieuze Dorpshoroscopen die elke ochtend verschijnen.
Elke ochtend tussen 09:00 en 10:00 krijgt de Waarzegster van de GM een meer gedetailleerde uitleg over de Dorpshoroscoop van die dag. Zij hoort wat de voorspelling werkelijk betekent en kan, indien van toepassing, ook te weten komen welke spelers of rollen hierdoor worden geraakt.
Eénmaal per spel mag de Waarzegster, in de ochtend nadat zij dit visioen heeft ontvangen, via een direct bericht aan de GM ervoor kiezen om haar kennis met het hele dorp te delen. Wanneer zij dit doet, maakt de GM de volledige uitleg van de Dorpshoroscoop bekend aan alle spelers. Daarna speelt de Waarzegster verder zonder deze kracht.`,
  isExpansionRole: true,
  expansionKey: "de-dorpshoroscoop"
},
{
  id: "oma",
  name: "Oma",
  image: "images/Oma.png",
  alliance: "Onafhankelijke",
  types: ["Uitbreiding"],
  description: `Oma leeft al sinds het begin der tijden. Een reus, groter dan het dorp zelf, maar soms loopt ze er gewoon tussen. Klein. Onopvallend. Kijkend.
Oma heeft één doel: De Grote Boze Wolf verslaan.
Ze is verbonden met één speler in het dorp. Roodkapje. De bron van haar kracht. Maar wie dat is… weet ze niet.
Drie keer per spel mag Oma besluiten om ’s avonds naar buiten te komen. Deze keuze maakt ze overdag tussen 10:00 en 20:00. Komt ze naar buiten, dan beschermt ze twee spelers, zoals de Genezer, en kiest ze vier spelers. Zit Roodkapje ertussen, dan weet ze dat direct.
Komt Oma tegelijk met De Grote Boze Wolf naar buiten terwijl Roodkapje nog leeft, dan doodt zij hem direct en wint ze de Sprookjesstrijd.
Wanneer Oma buiten is, hebben alle acties die nacht 50% kans om te falen.
Oma kan niet sterven door het dorp. Alleen als De Grote Boze Wolf haar kiest terwijl Roodkapje niet meer leeft.
Oma weet wie De Grote Boze Wolf is.`,
  isExpansionRole: true,
  expansionKey: "de-sprookjesstrijd"
},
{
  id: "de-grote-boze-wolf",
  name: "De Grote Boze Wolf",
  image: "images/De Grote Boze Wolf.png",
  alliance: "Onafhankelijke",
  types: ["Uitbreiding"],
  description: `Ouder dan het bos en groter dan alles wat het dorp kent. Ver boven de gewone weerwolven. Hij jaagt alleen.
Zijn enige doel: Oma verslinden.
Hij weet dat haar kracht bij Roodkapje ligt. Dus zoekt hij. Geduldig. Meedogenloos.
Drie keer per spel mag hij besluiten om ’s avonds naar buiten te komen. Deze keuze maakt hij overdag tussen 10:00 en 20:00. Komt hij naar buiten, dan kiest hij één speler om te verslinden, zoals een normale wolvenaanval, en kiest hij vier spelers. Zit Roodkapje ertussen, dan weet hij dat direct.
Komt hij tegelijk met Oma naar buiten terwijl Roodkapje nog leeft, dan wordt hij direct gedood. Is Roodkapje al gestorven, dan kan hij Oma doden en wint hij de Sprookjesstrijd.
Wanneer De Grote Boze Wolf buiten is, hebben alle acties die nacht 50% kans om te falen.
De Grote Boze Wolf kan niet sterven door het dorp.
De Grote Boze Wolf weet wie Oma is.`,
  isExpansionRole: true,
  expansionKey: "de-sprookjesstrijd"
},
{
  id: "roodkapje",
  name: "Roodkapje",
  image: "images/Roodkapje.png",
  alliance: "Onafhankelijke",
  types: ["Uitbreiding"],
  description: `Eén speler in het dorp is Roodkapje. Geen aparte rol, maar een extra laag bovenop wat diegene al is. Roodkapje kan dus een burger, wolf of onafhankelijke zijn.
Niemand weet wie Roodkapje is. Alleen Oma en De Grote Boze Wolf kunnen haar vinden.
Zolang Roodkapje leeft, beschermt zij Oma onbewust. Sterft Roodkapje, dan verandert de hele strijd en krijgt De Grote Boze Wolf de overhand.
Wanneer Oma of De Grote Boze Wolf buiten zijn, beïnvloedt dit ook Roodkapje. De nacht wordt onstabiel, en acties hebben 50% kans om te falen.`,
  isExpansionRole: true,
  expansionKey: "de-sprookjesstrijd"
},
];