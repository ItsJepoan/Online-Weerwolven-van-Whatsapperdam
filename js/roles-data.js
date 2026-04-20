const roles = [
  {
    id: "de-burger",
    name: "De Burger",
    image: "images/De Burger.png",
    alliance: "Burger",
    types: [],
    description: "Een gewone dorpsbewoner zonder verborgen krachten, maar niet zonder invloed. Met scherpe observaties en zijn stem in het burgerberaad probeert hij overdag het kwaad te ontmaskeren en ’s nachts te overleven.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-genezer",
    name: "De Genezer",
    image: "images/De Genezer.png",
    alliance: "Burger",
    types: [],
    description: "Met oude kennis waakt de genezer over het dorp. Van 20:00 tot 09:00 kiest hij via een direct bericht aan de GM één speler die die nacht beschermd is tegen dodelijke invloeden. Hij mag zichzelf kiezen, maar nooit twee nachten achter elkaar dezelfde speler. Zijn bescherming werkt vooral tegen de meeste aanvallen van wolven, maar kan ook verschillende andere moordpogingen tegenhouden. Toch is zijn kracht niet onfeilbaar, en tegen sommige vormen van dood helpt zij niet. In specifieke gevallen kan zijn bescherming ook voorkomen dat de Onderduiker sterft na onderzoek. Ook wanneer de Besmettelijke Oerwolf probeert een beschermde speler te besmetten na een aanval van de weerwolven, zal deze bescherming de besmetting tegenhouden.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-ziener",
    name: "De Ziener",
    image: "images/De Ziener.png",
    alliance: "Burger",
    types: [],
    description: "Gezegend met heldere dromen en fluisterende visioenen draagt de ziener de zware last van kennis. Eens per nacht, tussen 20:00 en 09:00, richt zij haar spirituele krachten op één dorpsgenoot. Door de GM persoonlijk een bericht te sturen, onthult zich diens ware identiteit. Met deze waarheid in handen moet zij bepalen wie zij kan vertrouwen… en wie het dorp in het duister wil storten.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-jager",
    name: "De Jager",
    image: "images/De Jager.png",
    alliance: "Burger",
    types: [],
    description: "Patrouillerend door het dorp doet de jager er alles aan om de burgers te beschermen tegen de weerwolven. Met slechts één kogel in zijn geweer blijft hij vastberaden. Komt de jager om het leven—door weerwolven, de brandstapel of zelfs liefdesverdriet—dan mag hij nog één keer toeslaan en een willekeurige, levende dorpsgenoot aanwijzen die zijn laatste kogel ontvangt.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "cupido",
    name: "Cupido",
    image: "images/Cupido.png",
    alliance: "Burger",
    types: [],
    description: "Hoewel hij zelf geen liefde kent, verbindt Cupido twee dorpsgenoten tot een onafscheidelijk koppel. Zij winnen samen als zij als enigen overblijven, maar sterft één, dan volgt de ander direct aan liefdesverdriet. Tussen 20:00 en 09:00 kiest Cupido in de eerste nacht zijn koppel via een persoonlijk bericht aan de GM. Sterft dit koppel en leeft Cupido nog, dan mag hij nog één laatste koppel stichten. De geliefden worden hier persoonlijk over geïnformeerd door de GM.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-onschuldige-sletje",
    name: "Het Onschuldige Sletje",
    image: "images/Het Onschuldige Sletje.png",
    alliance: "Burger",
    types: [],
    description: "Tussen 20:00 en 09:00 kiest het sletje elke dag één dorpsgenoot bij wie zij de nacht doorbrengt, om uiteraard geheel onschuldige redenen. Zij gaat altijd naar het huis van haar gekozen persoon en blijft daar de hele nacht, ook als diegene om wat voor reden dan ook zelf niet thuis is. Ze kan er ook voor kiezen om een nacht thuis te blijven… maar wat is daar nou het leuke aan? Wordt haar eigen huis door de weerwolven bezocht, dan is zij niet thuis en overleeft zij. Wordt echter het huis van haar gezelschap gekozen, dan deelt zij diens lot. Zij mag nooit twee keer achter elkaar bij dezelfde dorpsgenoot verblijven.",
    isExpansionRole: false,
    expansionKey: null
  },

  {
    id: "de-weerwolf",
    name: "De Weerwolf",
    image: "images/De Weerwolf.png",
    alliance: "Weerwolf",
    types: [],
    description: "Samen met zijn medewolven terroriseert de weerwolf het dorp Whatsapperdam. Elke avond, van 20:00 tot 09:00, bepalen zij gezamenlijk wie hun nachtelijke slachtoffer wordt. De weerwolven winnen zodra zij in de meerderheid zijn of evenveel spelers hebben als de burgers. Dit overleg vindt plaats in een aparte WhatsApp-groep, uitsluitend voor de weerwolven.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-heks",
    name: "De Heks",
    image: "images/De Heks.png",
    alliance: "Weerwolf",
    types: [],
    description: "In dienst van het duister gebruikt de heks haar krachten tegen het dorp en ten gunste van de weerwolven. Eénmaal per nacht, tussen 20:00 en 09:00, mag zij via een persoonlijk bericht aan de GM de identiteit van één speler inzien. De heks speelt mee met de weerwolven en mag ’s nachts ook meestemmen over hun slachtoffer.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-kleine-wilde",
    name: "De Kleine Wilde",
    image: "images/De Kleine Wilde.png",
    alliance: "Weerwolf",
    types: [],
    description: "Als wilde jongen van het dorp kiest de Kleine Wilde bij de opening, of tijdens de eerste dag of nacht, één groot voorbeeld. Zolang dit voorbeeld leeft, blijft hij burger, zelfs als zijn grote voorbeeld een weerwolf is. Sterft het voorbeeld, dan wordt hij direct weerwolf. Hij mag zijn grote voorbeeld wantrouwen en tijdens het burgerberaad tegen hem stemmen. De Kleine Wilde wint met de burgers zolang hij burger is, en met de weerwolven zodra hij weerwolf wordt.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-onderdrukker",
    name: "De Onderdrukker",
    image: "images/De Onderdrukker.png",
    alliance: "Weerwolf",
    types: [],
    description: "Met harde hand houdt de Onderdrukker Whatsapperdam in zijn greep. Hij staat aan de kant van de weerwolven en gebruikt zijn macht om het dorp het zwijgen op te leggen. Eens per nacht, tussen 20:00 en 09:00, kiest hij één speler die de volgende dag volledig wordt onderdrukt, maar nooit twee nachten achter elkaar dezelfde persoon. Deze speler mag in geen enkele groepsapp spreken en geen stem uitbrengen, maar mag wél zijn krachten gebruiken. Communicatie is alleen toegestaan via emoji-reacties en gebarentaal. De Onderdrukker stemt ’s nachts mee met de weerwolven over wie er wordt vermoord. De Onderdrukker mag ook zichzelf of een medewolf onderdrukken om verdenking af te wenden. Een onderdrukte speler is dus niet automatisch onschuldig.",
    isExpansionRole: false,
    expansionKey: null
  },

  {
    id: "de-fluitspeler",
    name: "De Fluitspeler",
    image: "images/De Fluitspeler.png",
    alliance: "Onafhankelijke",
    types: [],
    description: "Met zijn verleidelijke melodie verspreidt de fluitspeler zijn invloed door het dorp. Elke nacht betovert hij twee spelers. Alle betoverden weten van elkaar dat zij betoverd zijn, omdat zij samen in een aparte, stille groeps-app worden geplaatst waarin niet gesproken mag worden. Zij weten echter niet wie de fluitspeler is. De fluitspeler kan zichzelf niet betoveren en geliefden worden apart geraakt. Hij zit zelf niet in de groeps-app, maar weet precies wie hij heeft betoverd. Zodra alleen nog betoverde spelers in leven zijn, wint de fluitspeler onmiddellijk.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-pyromaan",
    name: "De Pyromaan",
    image: "images/De Pyromaan.png",
    alliance: "Onafhankelijke",
    types: [],
    description: "Het conflict tussen burgers en weerwolven interesseert de pyromaan weinig; hij droomt van vuur en chaos. Elke nacht, tussen 20:00 en 09:00, maakt hij een bewuste keuze. Ofwel kiest hij één speler om heimelijk van top tot teen met benzine te overgieten, of – als hij vindt dat het moment is aangebroken – pakt hij de aansteker en steekt hij alle eerder overgoten spelers tegelijk in brand. In de nacht dat hij besluit het vuur te ontsteken, overgiet hij niemand meer; spelers die hem die nacht bezoeken, worden dan dus niet met benzine besprenkeld. Zodra de pyromaan het vuur ontsteekt, is de brand normaal gesproken onstuitbaar en worden alle overgoten spelers gedood. Een brandend slachtoffer kan echter wél gered worden door de genezer, mits deze op tijd bescherming heeft verleend. Daarnaast wordt iedere speler die hem ’s nachts bezoekt, in welke vorm dan ook, automatisch eveneens met benzine overgoten, tenzij hij die nacht kiest voor het aansteken. Het overgieten kan alleen mislukken wanneer het doelwit die nacht niet thuis is.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verloren-ziel",
    name: "De Verloren Ziel",
    image: "images/De Verloren Ziel.png",
    alliance: "Onafhankelijke",
    types: [],
    description: "De weg naar de hemel is niet voor iedereen even duidelijk, maar voor de Verloren Ziel wel. Zijn enige doel is om in de eerste nacht of de eerste dag te sterven. Lukt hem dit, dan wint hij direct het spel. Overleeft hij deze periode, dan is hij voor eeuwig verdoemd en moet hij als straf loyaal en actief met de burgers meespelen.",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-burgerlijke-burger",
    name: "De Burgerlijke Burger",
    image: "images/De Burgerlijke Burger.png",
    alliance: "Burger",
    types: [],
    description: "Uitstralend door het dorp loopt de Burgerlijke Burger, de burgerlijkste burger van heel Whatsapperdam. Open, zichtbaar en zonder geheimen… iemand die je bijna móét vertrouwen.Aan het begin van het spel wordt aangekondigd wie de Burgerlijke Burger is. Iedereen weet dus vanaf het eerste moment wie hij is. Dat kan hem veiligheid bieden… of hem juist een makkelijk doelwit maken voor de wolven.Wat er ook gebeurt, één ding lijkt zeker: de Burgerlijke Burger is altijd te vertrouwen… toch?",
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "barman-bob",
    name: "Barman Bob",
    image: "images/Barman Bob.png",
    alliance: "Burger",
    types: [],
    description: "In de Dorpsbrouwerij staat Bob achter de tap van de ochtendbar. Met een glimlach en een vriendelijk woord begint hij de dag, maar hij ziet precies wie nét iets te veel drinkt. Elke dag tussen 10:00 en 20:00 kiest hij één speler die die nacht dronken naar huis gaat. Een dronken speler kan verkeerde keuzes maken of vervormde informatie krijgen, zonder dat hij zelf merkt dat er iets mis is.\nBob staat aan de kant van de burgers en gebruikt zijn drankjes om het dorp subtiel te helpen. Hij mag niet twee dagen achter elkaar dezelfde speler kiezen. Bob is zelf immuun voor dronkenschap. Als Bob en Bert in dezelfde dag dezelfde speler kiezen, wordt deze tot comazuipen gebracht en zal die persoon die nacht sterven.",
    isExpansionRole: true,
    expansionKey: de-dorpsbrouwerij
  },
  {
    id: "barman-bert",
    name: "Barman Bert",
    image: "images/Barman Bert.png",
    alliance: "Burger",
    types: [],
    description: "In de Dorpsbrouwerij staat Bert achter de tap van de avondbar. In het schemerlicht schenkt hij zijn glazen met een stille, bijna onheilspellende blik. Hij ziet wie te lang blijft hangen… en wie daar de prijs voor zal betalen. Elke dag tussen 10:00 en 20:00 kiest hij één speler die die nacht dronken naar huis gaat. Een dronken speler kan verkeerde keuzes maken of vervormde informatie krijgen, zonder dat hij zelf merkt dat er iets mis is.\nBert staat aan de kant van de weerwolven en gebruikt zijn drankjes om het dorp subtiel te beïnvloeden. Hij mag niet twee dagen achter elkaar dezelfde speler kiezen. Bert is zelf immuun voor dronkenschap. Als Bob en Bert in dezelfde dag dezelfde speler kiezen, wordt deze tot comazuipen gebracht en zal die persoon die nacht sterven.",
    isExpansionRole: true,
    expansionKey: de-dorpsbrouwerij
  }
];