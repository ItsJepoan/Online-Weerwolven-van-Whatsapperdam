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
          "Naast de basisrollen zijn er toevoegende rollen. Het totale aantal mogelijke toevoegende rollen ligt altijd hoger dan het aantal spelers. Het wordt niet bekendgemaakt welke en hoeveel van deze rollen daadwerkelijk in het spel zitten. Dit creëert ruimte voor bluffen, misleiding en strategisch spel, voor zowel burgers als weerwolven.",
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
    title: "Types",
    content: [
      "Elke rol heeft één of meerdere types. Deze hebben geen directe invloed op de werking van de rol, maar helpen bij het begrijpen en indelen van de rollen."
    ],
    typeDefinitions: [
      { name: "Basis", description: "Standaard in elk spel" },
      { name: "Toevoegend", description: "Mogelijk in elk spel" },
      { name: "Uitbreiding", description: "Alleen actief wanneer een uitbreiding wordt gebruikt" },
      { name: "Bijrol", description: "Een rol bovenop je normale rol, zoals Geliefde of Burgemeester" },
      { name: "Nieuw", description: "Recent toegevoegde rollen" },
      { name: "Dubbel", description: "Kan meerdere keren in één spel voorkomen" },
      { name: "Onzeker", description: "Er zit één of meerdere van in, afhankelijk van het aantal onzekere rollen" },
      { name: "Invloedrijk", description: "Kan iemand of het dorp forceren iets te doen" },
      { name: "Liefde", description: "Heeft te maken met koppels of kan deze vormen" },
      { name: "Beschermer", description: "Kan iemand beschermen tegen de dood" },
      { name: "Informatie", description: "Kan informatie verkrijgen" },
      { name: "Dodelijk", description: "Kan spelers uitschakelen" },
      { name: "Ongrijpbaar", description: "Moeilijk te bezoeken en/of te doden" },
      { name: "Betrouwbaar", description: "Kan vertrouwen opbouwen" },
      { name: "Transformatie", description: "Kan van rol of alliantie veranderen" },
      { name: "Kans", description: "Bevat een kansmechaniek" },
      { name: "Chaos", description: "Zorgt voor onrust in het spel" },
      { name: "Spoed", description: "Heeft een actie buiten dag/nacht om" },
      { name: "Aankondiging", description: "Zorgt voor een zichtbare aankondiging" },
      { name: "Hiernamaals", description: "Heeft interactie met doden" },
      { name: "Kopiëren", description: "Kan rollen of acties kopiëren" },
      { name: "Alleskunner", description: "Heeft meerdere mogelijke uitkomsten" },
      { name: "Gehard", description: "Kan een (wolven)aanval overleven" },
      { name: "Upgrade", description: "Kan rollen of acties verbeteren" },
      { name: "Misinformatie", description: "Geeft of ontvangt verkeerde informatie" },
      { name: "Blokkade", description: "Kan acties of rollen blokkeren" },
      { name: "Aanhanger", description: "Is gebonden aan een andere speler" },
      { name: "Effect", description: "Heeft een langdurig effect op spelers" },
      { name: "Dronken", description: "Bevat een 50% kans of verstoring" },
      { name: "Titaan", description: "Staat buiten het dorp maar beïnvloedt het wel" }
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
];