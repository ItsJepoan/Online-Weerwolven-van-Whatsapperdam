const roles = [
  {
    id: "de-agent",
    name: "De Agent",
    image: "images/De Agent.png",
    alliance: "Burger",
    types: ["Toevoegend", "Invloedrijk"],
    description: `Orde in het dorp wordt gewaardeerd. Waar de Onderdrukker druk zet, grijpt de Agent in. Stilte afdwingen, rust bewaren… of juist de verkeerde het zwijgen opleggen.

Elke nacht, tussen 20:00 en 09:00, kiest de Agent via een direct bericht aan de GM één speler die de volgende dag gearresteerd is, maar nooit twee nachten achter elkaar dezelfde persoon.

Een gearresteerde speler mag in geen enkele groepsapp spreken en geen stem uitbrengen, maar mag wél zijn krachten gebruiken. Communicatie is alleen toegestaan via emoji-reacties en gebarentaal.

De Agent mag ook zichzelf kiezen… orde begint bij jezelf.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-alwetende-uil",
    name: "De Alwetende Uil",
    image: "images/De Alwetende Uil.png",
    alliance: "Burger",
    types: ["Toevoegend", "Transformatie", "Kans"],
    description: `In de stilte van de nacht ziet hij wat anderen missen. Niet wat er is… maar wat er ontbreekt.

Eénmaal per spel mag hij, tussen 20:00 en 09:00, via een direct bericht aan de GM een burgerrol noemen waarvan hij denkt dat die niet in het spel zit.
Heeft hij gelijk, dan eigent hij zich deze rol toe en speelt hij vanaf dat moment verder met alle bijbehorende krachten.
Zit de rol toch in het spel, dan gebeurt er niets. Zijn kans is verkeken.

Sommige rollen zijn niet aan te nemen door de Alwetende Uil. Deze rollen zijn te vinden in Appendix E: Niet aanneembare rollen.

Soms zit de waarheid niet in wat je ziet… maar in wat er ontbreekt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-bommenwerper",
    name: "De Bommenwerper",
    image: "images/De Bommenwerper.png",
    alliance: "Burger",
    types: ["Toevoegend", "Dodelijk", "Chaos"],
    description: `Hij loopt door het dorp alsof er niks aan de hand is… maar ergens tikt iets. Iets wat niemand ziet. Nog niet.

In de eerste nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM één speler en overhandigt diegene De Bom.

De Bom heeft een verborgen timer, ergens tussen de 2 en 5 dagen. De Bommenwerper weet zelf niet wanneer het moment daar is. En dan… midden op een dag… “Boom!”. Dat is alles wat het dorp te zien krijgt. Er wordt niet aangekondigd wie er sterft, en ook de rol blijft volledig onbekend.

De Bom blijft niet stil liggen. Elke nacht tussen 20:00 en 09:00 moet de drager kiezen: zijn eigen nachtelijke actie gebruiken, of de Bom doorgeven aan een andere levende speler via de GM. Beide kan niet. Probeert hij de Bom door te geven aan iemand die die nacht sterft of niet thuis is, dan faalt dit en blijft de Bom waar hij is.

Gaat de Bom af en leeft de Bommenwerper nog, dan mag hij in de eerstvolgende nacht opnieuw iemand kiezen om een nieuwe Bom te plaatsen. De Bommenwerper is niet immuun… ook hij kan de Bom in handen krijgen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-burger",
    name: "De Burger",
    image: "images/De Burger.png",
    alliance: "Burger",
    types: ["Basis", "Dubbel"],
    description: `Geen verborgen krachten. Geen geheime plannen. Alleen een stem, een mening en de wil om het dorp te laten overleven.

Overdag zoekt de Burger naar leugens en wantrouwen. ’s Nachts hoopt hij simpelweg de volgende ochtend nog mee te maken.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-burgerlijke-burger",
    name: "De Burgerlijke Burger",
    image: "images/De Burgerlijke Burger.png",
    alliance: "Burger",
    types: ["Toevoegend", "Betrouwbaar"],
    description: `Uitstralend door het dorp loopt de Burgerlijke Burger, de burgerlijkste burger van heel Whatsapperdam. Open, zichtbaar en zonder geheimen… iemand die je bijna móét vertrouwen.

Aan het begin van het spel wordt aangekondigd wie de Burgerlijke Burger is. Iedereen weet dus vanaf het eerste moment wie hij is. Dat kan hem veiligheid bieden… of hem juist een makkelijk doelwit maken voor de wolven.

Wat er ook gebeurt, één ding lijkt zeker: de Burgerlijke Burger is altijd te vertrouwen… toch?`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "cupido",
    name: "Cupido",
    image: "images/Cupido.png",
    alliance: "Burger",
    types: ["Basis", "Liefde"],
    description: `Hoewel hij zelf geen liefde kent, brengt Cupido deze juist naar anderen. In de eerste nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM twee spelers die samen een koppel vormen.

Deze spelers worden vanaf dat moment Geliefden. Wat dit precies betekent, welke wincondities daarbij horen en hoe koppels werken, is terug te vinden bij de rol: De Geliefde.

De gekozen spelers worden persoonlijk door de GM geïnformeerd over hun nieuwe band en krijgen samen een aparte app waarin zij met elkaar kunnen praten.

Sterft een volledig door Cupido gevormd koppel terwijl Cupido zelf nog leeft, dan mag hij één laatste keer een nieuw koppel vormen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dictator",
    name: "De Dictator",
    image: "images/De Dictator.png",
    alliance: "Burger",
    types: ["Toevoegend", "Invloedrijk", "Spoed", "Aankondiging"],
    description: `Sommige mensen vertrouwen het dorp. De Dictator vertrouwt alleen zichzelf.

Eénmaal per spel mag hij, zodra de eerste stem van de dag is uitgebracht, tussen 10:00 en 20:00 via een direct bericht aan de GM de volledige stemming naar zijn hand zetten.

Zijn keuze wordt publiek bekendgemaakt en is onomkeerbaar: de aangewezen speler gaat direct naar de brandstapel.

Tot het moment dat de stemming daadwerkelijk eindigt, mag de Dictator zijn keuze nog aanpassen of volledig intrekken.

Is de Dictator die dag onderdrukt, dan kan hij zijn macht niet gebruiken.

Sterft zijn doelwit diezelfde dag al op een andere manier, dan vervalt zijn bevel alsnog en geldt zijn kracht als verbruikt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dodenbezweerder",
    name: "De Dodenbezweerder",
    image: "images/De Dodenbezweerder.png",
    alliance: "Burger",
    types: ["Toevoegend", "Dodelijk", "Hiernamaals"],
    description: `In de stilte van de nacht fluistert hij woorden die beter vergeten hadden kunnen blijven. Waar anderen afscheid nemen, probeert de Dodenbezweerder het onvermijdelijke terug te draaien.

Eénmaal per spel kan hij een ritueel beginnen om een gestorven speler terug tot leven te wekken. Het ritueel start ’s nachts en duurt tot het begin van de volgende nacht. In deze periode mag de Dodenbezweerder door niemand worden bezocht of onderzocht; gebeurt dat wel, dan mislukt het ritueel. Hij mag het later opnieuw proberen zolang het nog niet gelukt is. Tijdens het ritueel mag hij in het burgerberaad op geen enkele manier aankondigen of hinten wat hij doet.

Dit ritueel vraagt echter een offer: wanneer iemand wordt teruggebracht, moet er een leven worden gegeven. Dit kan zijn eigen leven zijn of dat van een andere burger.

De speler die terugkeert is bovendien niet meer helemaal zoals voorheen. Hij keert half levend terug en kan alleen nog communiceren via emoji-reacties en gebarentaal. Zijn rol en krachten blijven verder zoals ze waren op het moment van zijn dood.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dokter",
    name: "De Dokter",
    image: "images/De Dokter.png",
    alliance: "Burger",
    types: ["Toevoegend", "Dodelijk", "Beschermer"],
    description: `Met trillende handen en verboden kennis balanceert de Dokter iedere nacht tussen leven en dood. In zijn bezit liggen twee serums: één dat redt… en één dat doodt.

Elke nacht, tussen 20:00 en 09:00, krijgt de Dokter van de GM alleen te horen wie het doelwit is van de weerwolven. Overleeft deze speler de aanval al door een andere invloed, dan blijft het stil.

Heeft de Dokter zijn levensserum nog, dan mag hij besluiten het slachtoffer van de weerwolven te redden.

Gebruikt hij dit serum niet, of heeft hij het al verbruikt, dan kan hij ervoor kiezen om met zijn gifserum een andere speler te doden. Deze speler wordt de volgende ochtend dood aangetroffen.

Van beide serums bestaat er slechts één. Per nacht kan de Dokter maximaal één serum gebruiken.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dorpsgek",
    name: "De Dorpsgek",
    image: "images/De Dorpsgek.png",
    alliance: "Burger",
    types: ["Toevoegend", "Transformatie", "Betrouwbaar", "Gehard"],
    description: `Lachend op de verkeerde momenten en bloedserieus wanneer niemand luistert. Het dorp ziet hem als een dwaas… maar misschien begrijpt hij juist meer dan iedereen denkt.

Wordt de Dorpsgek tijdens de ochtendstemming als weerwolf aangewezen, dan gebeurt er iets onverwachts. In plaats van angst of woede begint hij alleen maar harder te lachen.

Hij maakt zichzelf bekend als de Dorpsgek en ontsnapt aan de dood.

Vanaf dat moment blijft hij gewoon meespelen, maar verliest hij het recht om te stemmen en kan hij geen burgemeester meer worden.

Door weerwolven of andere dodelijke middelen kan de Dorpsgek echter nog altijd gewoon sterven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dorpsoudste",
    name: "De Dorpsoudste",
    image: "images/De Dorpsoudste.png",
    alliance: "Burger",
    types: ["Toevoegend", "Gehard"],
    description: `Oude botten breken niet zomaar. Al jarenlang draagt de Dorpsoudste de lasten van het dorp, en die koppige levenswil maakt hem moeilijker te doden dan ieder ander.

De Dorpsoudste overleeft de eerste keer dat hij sterft door een vorm van wolvenmoord.

Welke doodsoorzaken hieronder vallen, is terug te vinden in Appendix H: Doodsoorzaken.

Andere vormen van dood, zoals het oordeel van het dorp, het gif van de Dokter of de kogel van de Jager, maken wél direct een einde aan zijn leven.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-genezer",
    name: "De Genezer",
    image: "images/De Genezer.png",
    alliance: "Burger",
    types: ["Basis", "Beschermer"],
    description: `Met oude kennis waakt de genezer over het dorp. Van 20:00 tot 09:00 kiest hij via een direct bericht aan de GM één speler die die nacht beschermd is tegen dodelijke invloeden. Hij mag zichzelf kiezen, maar nooit twee nachten achter elkaar dezelfde speler.

Zijn bescherming werkt vooral tegen de meeste aanvallen van wolven, maar kan ook verschillende andere moordpogingen tegenhouden. Toch is zijn kracht niet onfeilbaar, en tegen sommige vormen van dood helpt zij niet.

In specifieke gevallen kan zijn bescherming ook voorkomen dat de Onderduiker sterft na onderzoek. Ook wanneer de Besmettelijke Oerwolf probeert een beschermde speler te besmetten na een aanval van de weerwolven, zal deze bescherming de besmetting tegenhouden.

Welke effecten en aanvallen wel of niet door de Genezer kunnen worden tegengehouden, zijn terug te vinden in Appendix G: De Genezer.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-grafrover",
    name: "De Grafrover",
    image: "images/De Grafrover.png",
    alliance: "Burger",
    types: ["Toevoegend", "Kopiëren", "Hiernamaals", "Alleskunner"],
    description: `Terwijl het dorp slaapt, dwaalt de Grafrover tussen vergeten graven en verse lijken. Waar anderen de doden met rust laten, zoekt hij juist naar wat zij hebben achtergelaten.

Tussen 20:00 en 09:00 mag hij tweemaal per spel een graf openen door één van de overleden spelers te kiezen. Voor die nacht en de daaropvolgende dag eigent hij zich de krachten van die rol toe.

Kiest hij een weerwolf of weerwolfachtige rol, dan mag hij hun krachten gebruiken, maar niet meestemmen met de weerwolven.

Welke krachten hij precies krijgt, hangt af van de gekozen rol en van wat er nog beschikbaar is. Eenmalige acties werken bijvoorbeeld alleen als ze nog niet eerder gebruikt zijn. Bij twijfel mag de Grafrover dit altijd navragen bij de GM.

Voor een volledig overzicht van welke krachten nog op te graven zijn en wat er per rol nog beschikbaar is, kan de Grafrover gebruikmaken van Appendix A: Grafrover.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-husselaar",
    name: "De Husselaar",
    image: "images/De Husselaar.png",
    alliance: "Burger",
    types: ["Toevoegend", "Chaos", "Transformatie"],
    description: `Ergens aan de rand van het dorp woont hij. Niemand weet precies wat hij doet… alleen dat dingen na zijn bezoek nooit meer hetzelfde zijn.

Eénmaal per spel kiest hij tussen 20:00 en 09:00 via een direct bericht aan de GM 3 tot 5 spelers. Die nacht vervormen hun lichamen… en hun krachten worden door elkaar gehusseld. Het effect treedt pas in bij de volgende dag om 09:00, vanaf dat moment krijgen de gekozen spelers ook hun nieuwe rol te horen.

Allianties blijven hetzelfde. Burger blijft burger. Wolf blijft wolf. Maar hun krachten? Die wisselen volledig. Doelen blijven… de manier waarop verandert.

Onafhankelijke rollen kunnen niet gehusseld worden. Kiest hij er toch één, dan moet hij die nacht nieuwe spelers kiezen. De Husselaar mag onder geen enkel beding aankondigen dat hij zijn actie gebruikt of wie hij heeft gekozen, en kan daardoor ook niet delen wie mogelijk onafhankelijke rollen zijn.

Sterft een van de gekozen spelers vóór 09:00, dan wordt de wissel alsnog uitgevoerd. Zelfs na de dood. Een rol kan dus verdwijnen nog vóórdat hij gebruikt wordt… of juist ergens anders tot leven komen.

Wat er ontstaat is chaos. Nieuwe combinaties. Rollen die nooit eerder hebben bestaan. Wolven dragen hun nieuwe kracht als: Wolvige “Rol”. Burgers als: Burgelijke “Rol”.

De Husselaar zelf? Gewoon een burger. Toch… voelt dat nooit helemaal zo.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-hypocriet",
    name: "De Hypocriet",
    image: "images/De Hypocriet.png",
    alliance: "Burger",
    types: ["Toevoegend", "Informatie"],
    description: `Bang en aarzelend sluipt de Hypocriet door het dorp. Wat hem nog meer angst aanjaagt dan de weerwolven, is het idee dat iemand hem in het duister benadert.

Terwijl anderen slapen, ligt hij wakker, luisterend naar iedere voetstap rondom zijn huis.

Elke nacht krijgt hij te horen wie hem heeft bezocht. Zo weet hij precies welke schaduwen zich rondom hem bewegen, zelfs wanneer niemand hem overdag openlijk beschuldigt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-jager",
    name: "De Jager",
    image: "images/De Jager.png",
    alliance: "Burger",
    types: ["Basis", "Dubbel", "Dodelijk"],
    description: `Patrouillerend door het dorp doet de Jager er alles aan om de burgers te beschermen tegen het kwaad. Met slechts één kogel in zijn geweer blijft hij vastberaden.

Komt de Jager op welke manier dan ook om het leven, dan haalt hij nog één laatste keer de trekker over.

Voordat de Jager zelf sterft, kiest hij één levende speler die direct door zijn laatste schot geraakt wordt en sterft. Pas daarna valt ook de Jager zelf neer.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-jaloerse-ex",
    name: "De Jaloerse Ex",
    image: "images/De Jaloerse Ex.png",
    alliance: "Burger",
    types: ["Toevoegend", "Liefde", "Dodelijk"],
    description: `Hij struimelt door Whatsapperdam… niet op zoek naar een huis, maar naar iets dat hij kwijt is. Liefde. Of beter gezegd… iemand anders zijn liefde.

Elke nacht, tussen 20:00 en 09:00, kiest de Ex via een direct bericht aan de GM één speler. Zijn doelwit. Zijn droom.

Behoort deze speler tot een koppeltje, dan slaat de Ex toe. De huidige partner (of één van de partners, bij meerdere) sterft direct… zonder enig effect van liefdesverdriet. Geen waarschuwing.

De Ex neemt zijn plaats in.

Vanaf dat moment vormen de Ex en zijn nieuwe liefde een koppel. Verbonden. Voor altijd.

Precies zoals hij het wil.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-journalist",
    name: "De Journalist",
    image: "images/De Journalist.png",
    alliance: "Burger",
    types: ["Toevoegend", "Informatie", "Invloedrijk", "Aankondiging"],
    description: `Pen in de hand, ogen scherp. Waar het dorp schreeuwt, stelt hij de vragen die niemand durft te stellen.

Om de dag kiest de Journalist, in de nacht tussen 20:00 en 09:00 via een direct bericht aan de GM, één speler om te interviewen. Dit interview vindt plaats in een aparte app.

De geïnterviewde mag die dag niet praten in de Burgerberaad, ook geen gebarentaal of emoji-reacties. Alleen de Journalist mag spreken.

Aan het einde van de dag stelt de Journalist een verslag op. Dit verslag is kort en bevat alleen de informatie die tijdens het interview naar voren is gekomen. De Journalist mag hierin ook een gok doen naar de rol van de geïnterviewde, maar dit blijft altijd een gok, zelfs als de geïnterviewde zijn rol heeft gedeeld.

Het verslag wordt naar de GM gestuurd, gecontroleerd en vervolgens geplaatst in de aankondigingen. Zodra het verslag is ingediend, mag er niet meer gesproken worden in het interview.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-leerling",
    name: "De Leerling",
    image: "images/De Leerling.png",
    alliance: "Burger",
    types: ["Toevoegend", "Aanhanger", "Transformatie"],
    description: `Nog onervaren, maar leergierig. In de eerste nacht, tussen 20:00 en 09:00, kiest de Leerling via een direct bericht aan de GM één speler als zijn Meester.

Zolang zijn Meester leeft, blijft de Leerling een gewone burger. Sterft zijn Meester, dan is de Leerling uitgeleerd en neemt hij voor het eerst de rol én alliantie van zijn Meester op zich, met alle bijbehorende krachten. Vanaf dat moment gaat hij verder onder een nieuwe naam: De <Rol>'s Leerling.

Sommige rollen zijn echter te uitgebreid om over te nemen. Mocht de Leerling zo’n speler als Meester hebben gekozen, dan wordt hij bij diens dood gezien als "De Spijbelaar". Deze rollen zijn te vinden in Appendix E: Niet Aanneembare Rollen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-onderduiker",
    name: "De Onderduiker",
    image: "images/De Onderduiker.png",
    alliance: "Burger",
    types: ["Toevoegend", "Ongrijpbaar"],
    description: `Terwijl het dorp leeft, praat en sterft, zit de Onderduiker diep verscholen in zijn bunker. Alleen overdag durft hij even naar buiten te komen, altijd bang dat iemand ontdekt waar hij zich verstopt.

Zolang hij ondergedoken zit, is hij beschermd tegen alle vormen van kwaad en vrijwel alle acties die op hem gericht worden. Zelfs wanneer het Onschuldige Sletje zijn bunker in de nacht betreedt, blijft hij veilig verborgen.

Maar zijn grootste vijand is angst.

Wordt de rol van de Onderduiker bekeken door de Ziener of de Heks, dan breekt de paniek volledig door. Zijn hart begeeft het direct, en hij sterft aan een fatale hartaanval.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-papegaai",
    name: "De Papegaai",
    image: "images/De Papegaai.png",
    alliance: "Burger",
    types: ["Toevoegend", "Kopiëren", "Alleskunner"],
    description: `Stil en oplettend zit de Papegaai op zijn tak, luisterend naar wat er in het donker gebeurt.

Elke nacht, tussen 20:00 en 09:00, kiest hij via een persoonlijk bericht aan de GM één speler om te volgen.

Voert deze speler die nacht een actie uit, dan hoort de Papegaai niet wélke actie het was, maar wel dát er een actie is uitgevoerd. Hij mag deze actie vervolgens kopiëren en eventueel op een nieuw doelwit richten. Als de actie informatie oplevert, ontvangt hij deze ook.

In sommige gevallen is een actie wel kopieerbaar, maar niet op een doelwit gericht. Dan hoeft de Papegaai niets te kiezen en ontvangt hij ook geen extra informatie.

Is er geen actie uitgevoerd, of is de actie niet kopieerbaar of niet geldig in deze situatie, dan krijgt de Papegaai te horen dat er geen bruikbare actie was.

De Papegaai mag niet twee nachten achter elkaar dezelfde speler volgen.

Voor een duidelijk overzicht van kopieerbare acties en hun werking kan de Papegaai gebruikmaken van Appendix B: Papegaai.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-rebel",
    name: "De Rebel",
    image: "images/De Rebel.png",
    alliance: "Burger",
    types: ["Toevoegend", "Dodelijk", "Aankondiging"],
    description: `Sommige mensen volgen de regels… anderen breken ze. De Rebel wacht. Kijkt. En slaat toe wanneer het hem uitkomt.

Eénmaal in het spel kan de Rebel, tussen 20:00 en 09:00 via een direct bericht aan de GM, de huidige Burgemeester vermoorden.

Hij neemt zelf de macht niet over. In plaats daarvan wordt er direct de volgende dag een nieuwe verkiezing gestart.

Een nieuw gezicht. Een nieuwe stem. Of gewoon… dezelfde fout opnieuw.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-ridder-met-het-roestige-zwaard",
    name: "De Ridder met het Roestige Zwaard",
    image: "images/De Ridder met het Roestige Zwaard.png",
    alliance: "Burger",
    types: ["Toevoegend", "Dodelijk"],
    description: `Gehuld in oude eer en versleten staal loopt hij door Whatsapperdam. Zijn zwaard… oud, roestig, vergeten door de tijd. Maar nog altijd scherp genoeg.

Wanneer de weerwolven hem ’s nachts verslinden, lijkt het een makkelijke prooi.

Maar iets blijft achter.

Een wond. Vies. Diep. Giftig.

De wolf die hem heeft opgegeten voelt het pas later… en sterft een dag na de aanval alsnog aan het roestige staal.

Pas dus op, wolven… sommige prooien vechten nog, zelfs nadat ze gevallen zijn.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-samurai",
    name: "De Samurai",
    image: "images/De Samurai.png",
    alliance: "Burger",
    types: ["Toevoegend", "Spoed", "Dodelijk"],
    description: `Gedreven door eer en plicht leeft de Samurai volgens één waarheid: sommige offers zijn het waard om te sterven.

Eénmaal per spel mag hij op elk moment, dag of nacht, via een direct bericht aan de GM zichzelf opofferen om samen met één gekozen speler te sterven.

Deze daad is absoluut en niet tegen te houden.

Is zijn doelwit echter al voorbestemd om diezelfde nacht te sterven, dan krijgt de Samurai dit te horen en moet hij direct een ander slachtoffer kiezen. Dit kan alleen tijdens de nacht voorkomen.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-siamese-tweeling",
    name: "De Siamese Tweeling",
    image: "images/De Siamese Tweeling.png",
    alliance: "Burger",
    types: ["Toevoegend", "Kopiëren", "Liefde", "Betrouwbaar"],
    description: `Buiten broeders en gezusters bestaan er in Whatsapperdam nog diepere banden. Twee lichamen… maar onlosmakelijk verbonden.

De Siamese Tweeling telt als twee aparte dorpelingen, maar alles wat de één overkomt, overkomt automatisch ook de ander. Elke actie die op één van hen wordt uitgevoerd, werkt direct door op beide.

Ze leven samen… en vallen samen.

Overdag moeten zij altijd op dezelfde persoon stemmen. Ze mogen onderling overleggen, maar hun keuze is één en dezelfde.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-smid",
    name: "De Smid",
    image: "images/De Smid.png",
    alliance: "Burger",
    types: ["Toevoegend", "Upgrade"],
    description: `Met hamer en vuur vormt hij meer dan alleen staal. Soms… smeedt hij mensen.

Overdag, tussen 10:00 en 20:00, kiest de Smid via een direct bericht aan de GM één speler wiens rol hij voor de aankomende nacht probeert te verbeteren. Hij mag niet twee dagen achter elkaar dezelfde speler kiezen. Zichzelf kiezen mag… maar heeft geen effect.

Hij krijgt zelf niet te horen of dit gelukt is, of wat er precies veranderd is.

Bij de meeste rollen betekent dit dat zij die nacht een extra persoon mogen kiezen voor hun actie. Bij andere rollen kan hun kracht veranderen of anders uitpakken. En sommige rollen… zijn simpelweg niet te verbeteren.

Wat de Smid precies heeft gesmeed… blijft in het donker. Mogelijke verbeteringen zijn te vinden in Appendix X: De Smid.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-stalker",
    name: "De Stalker",
    image: "images/De Stalker.png",
    alliance: "Burger",
    types: ["Toevoegend", "Liefde", "Kans"],
    description: `Zoals velen in dit dorp zoekt de Stalker naar liefde… maar waar anderen hopen, gaat hij er zelf achteraan.

De eerste 5 nachten, tussen 20:00 en 09:00, mag de Stalker via een direct bericht aan de GM de naam noemen van zijn favoriete dorpsbewoner en een liefdesbericht sturen. Dit bericht wordt anoniem verstuurd, maar de Stalker mag er zelf voor kiezen het met een naam te signeren. Het bericht mag geen informatie bevatten buiten zijn liefdesverklaring.

De ontvanger van het bericht kan deze accepteren of afwijzen. Accepteert diegene het, dan vormen de Stalker en zijn geliefde direct een koppeltje.

Wordt het bericht afgewezen, dan blijft de Stalker achter met die afwijzing… maar hij geeft niet op. De volgende nacht mag hij het opnieuw proberen, bij dezelfde persoon of bij iemand anders.

Lukt het hem niet om binnen deze 5 nachten een koppel te vormen… dan sterft hij aan eenzaamheid.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-stotterende-raadsheer",
    name: "De Stotterende Raadsheer",
    image: "images/De Stotterende Raadsheer.png",
    alliance: "Burger",
    types: ["Toevoegend", "Invloedrijk", "Aankondiging"],
    description: `Aarzelend in woorden, maar gevaarlijk in timing. Terwijl anderen spreken met zekerheid, schuift de Raadsheer ongemerkt aan de touwtjes van het bestuur.

Eénmaal per spel mag hij, tijdens de nacht tussen 20:00 en 09:00, via een direct bericht aan de GM beslissen dat er de volgende dag niet één, maar twee stemrondes plaatsvinden.

Zijn fluistering verandert direct het ritme van het dorp.

Op die dag eindigt de eerste stemming om 18:00 en volgt er een tweede stemming die eindigt om 20:00.

Mocht er door bijzondere omstandigheden zelfs een derde stemming nodig zijn, dan wordt ook 15:00 gebruikt als extra stemmoment.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-toneelspeler",
    name: "De Toneelspeler",
    image: "images/De Toneelspeler.png",
    alliance: "Burger",
    types: ["Toevoegend", "Alleskunner", "Transformatie"],
    description: `Een meester van het podium die elke rol geloofwaardig weet te spelen. Aan het begin van het spel krijgt hij van de GM een pool van 3 tot 5 rollen die in dit spel niet voorkomen.

Elke nacht tussen 20:00 en 09:00 mag hij één van deze rollen kiezen via een bericht aan de GM. Voor die nacht en de daaropvolgende dag neemt hij volledig die rol aan, inclusief eventuele nachtactie en alle gevolgen die daarbij horen. Daarna verdwijnt die rol uit zijn repertoire en kan hij die niet opnieuw spelen. Zit er een weerwolfrol tussen, dan mag hij wel de krachten gebruiken, maar niet meestemmen met de weerwolven.

Welke rollen hij tot zijn beschikking heeft, blijft zijn geheim. Hij mag deze onder geen beding onthullen aan het dorp. Wel mag hij de gekozen rol volledig spelen, want een goed toneelstuk hoort gezien te worden.

Alle mogelijke Toneelspeler rollen zijn te vinden in Appendix C: Toneelspeler.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-twijfelaar",
    name: "De Twijfelaar",
    image: "images/De Twijfelaar.png",
    alliance: "Burger",
    types: ["Toevoegend", "Invloedrijk", "Dodelijk"],
    description: `Geen keuze voelt ooit juist. Iedere blik, iedere stem en ieder gefluister vult de Twijfelaar met wantrouwen. Maar één ding weet hij zeker: alleen sterven weigert hij.

Wordt de Twijfelaar door het dorp naar de brandstapel gestuurd, dan grijpt hij in zijn laatste moment nog iemand vast om mee de vlammen in te trekken.

De speler met het op één na hoogste aantal stemmen sterft daarom samen met hem.

Is er sprake van een gelijke tweede plek, dan kiest de Twijfelaar zelf wie hem zal vergezellen in het vuur.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-valse-erfgenaam",
    name: "De Valse Erfgenaam",
    image: "images/De Valse Erfgenaam.png",
    alliance: "Burger",
    types: ["Toevoegend", "Kans", "Transformatie"],
    description: `Waar anderen rouwen, kijkt hij toe. Elke nacht kiest hij één speler en geeft dit tussen 20:00 en 09:00 via een direct bericht aan de GM door.

Sterft deze speler die nacht, door welke oorzaak dan ook, dan grijpt de Valse Erfgenaam zijn kans. Hij neemt de rol volledig over. Alle gebruikte krachten worden hersteld en opnieuw beschikbaar.

Vanaf dat moment leeft hij verder onder een nieuwe naam: De Valse <rol>. Ook de alliantie verandert met hem mee — burger, wolf of onafhankelijke, hij wordt wat hij steelt.

Sommige rollen zijn niet over te nemen door de Valse Erfgenaam. Probeert hij zo’n rol te erven, dan gebeurt er niets en blijft hij wie hij was. Deze rollen zijn te vinden in Appendix E: Niet aanneembare rollen.

Hij erft geen leven… hij neemt het.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verkenner",
    name: "De Verkenner",
    image: "images/De Verkenner.png",
    alliance: "Burger",
    types: ["Toevoegend", "Informatie"],
    description: `Stil en ongezien beweegt de Verkenner zich door Whatsapperdam. Altijd op de achtergrond, altijd oplettend… en zelden opgemerkt. Waar anderen slapen, dwaalt hij door het donker, op zoek naar sporen die anderen missen.

Elke nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM één speler om te volgen. Verborgen in de schaduwen ziet hij precies wie deze speler die nacht heeft bezocht… of dat er niemand is geweest.

Zelf blijft de Verkenner buiten beeld. Hij volgt, kijkt en verdwijnt weer in het donker voordat iemand merkt dat hij er überhaupt was.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-veteraan",
    name: "De Veteraan",
    image: "images/De Veteraan.png",
    alliance: "Burger",
    types: ["Toevoegend", "Gehard"],
    description: `Getekend door oorlog en achtervolgd door oude angsten sleept de Veteraan zich door Whatsapperdam. Hij heeft de dood al eens recht in de ogen gekeken… en weigert haar nogmaals zomaar mee te laten nemen.

Wordt de Veteraan door welke oorzaak dan ook dodelijk getroffen, dan sterft hij niet direct. In plaats daarvan blijft hij nog één volledige dag in leven voordat zijn lot zich uiteindelijk voltrekt.

Zelfs stervend blijft de Veteraan nog even overeind.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verwarde-ziener",
    name: "De Verwarde Ziener",
    image: "images/De Verwarde Ziener.png",
    alliance: "Burger",
    types: ["Toevoegend", "Informatie", "Misinformatie"],
    description: `Al te lang heeft zij zich verdiept in vreemde kruiden, zware dampen en verboden brouwsels. Wat ooit begon als een zoektocht naar kennis, is langzaam veranderd in een mist van hallucinaties en vervormde visioenen.

Aan het begin van het spel ontvangt zij de kaart en uitleg van de Ziener en gelooft zij oprecht dat zij deze gave bezit.

Maar haar geest is niet langer helder.

Wat zij ziet in de nacht is onbetrouwbaar, vervormd of simpelweg verkeerd. Soms spreekt zij de waarheid… soms stuurt zij het dorp recht het duister in.

Haar woorden klinken wijs. Haar overtuiging voelt echt.

En juist dat maakt haar zo gevaarlijk.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-vos",
    name: "De Vos",
    image: "images/De Vos.png",
    alliance: "Burger",
    types: ["Toevoegend", "Informatie", "Kans"],
    description: `Sluw en scherpzinnig sluipt de Vos door de schaduwen van Whatsapperdam, altijd jagend op de geur van het beest. Terwijl anderen slapen, speurt hij naar kleine fouten, verborgen blikken en sporen die alleen hij lijkt op te merken.

Elke nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM drie spelers om te onderzoeken.

Bevindt zich minstens één echte weerwolf tussen deze drie spelers, dan krijgt de Vos dat te horen.

Andere rollen met duistere bedoelingen tellen hierbij niet mee. Het kunnen dus drie burgers zijn, drie weerwolven… of een gevaarlijke mix van beide.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-vriend",
    name: "De Vriend",
    image: "images/De Vriend.png",
    alliance: "Burger",
    types: ["Toevoegend", "Ongrijpbaar", "Kopiëren"],
    description: `Iedereen kent hem, iedereen mag hem. De Vriend logeert elke nacht bij iemand in het dorp en geeft tussen 20:00 en 09:00 via een direct bericht aan de GM door waar hij die nacht verblijft. Zijn gastheer krijgt te horen dat hij niet alleen is.

Doordat hij niet thuis is, hebben acties die op hem gericht zijn vaak geen effect. Maar waar hij logeert, daar deelt hij het lot van zijn gastheer. Alles wat diegene overkomt, gebeurt ook met hem. Bescherming, onderzoek… of een bezoek van de wolven. Gaat de gastheer ten onder, dan gaat de Vriend mee.

Bij dezelfde persoon kan hij niet nog een keer logeren. Soms kiest hij er gewoon voor om een nachtje thuis te blijven.

Welke acties wel en niet effect hebben op de Vriend wanneer hij niet thuis is, staat beschreven in Appendix I: Niet Thuis.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-waakengel",
    name: "De Waakengel",
    image: "images/De Waakengel.png",
    alliance: "Burger",
    types: ["Toevoegend", "Aanhanger", "Beschermer"],
    description: `Aan het begin van het spel verbindt de Waakengel zich aan één dorpsgenoot naar keuze. Een stille belofte. Een onzichtbare band. Deze persoon moet zij met al haar kracht beschermen, wat er ook gebeurt, zelfs als diegene slechte bedoelingen heeft.

Vanaf dat moment kent zij haar beschermeling… volledig. Zijn rol ligt open voor haar, een waarheid die zij met zich meedraagt.

Eénmaal per spel mag de engel haar heilige krachten inzetten om haar beschermeling van zijn noodlot te redden. Gebeurt dit ’s nachts, dan wordt zij hiervan op de hoogte gebracht; overdag moet zij zelf het juiste moment herkennen.

Elke nacht mag de Waakengel haar beschermeling observeren. In dat geval krijgt zij te horen wie haar beschermeling die nacht heeft bezocht, en wie haar beschermeling zelf heeft bezocht.

Sterft haar beschermeling alsnog, dan verliest zij haar vleugels en heilige titel… en blijft zij achter. Gebonden aan het dorp, gedoemd om zonder haar doel verder te strijden tegen het kwaad.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wachter",
    name: "De Wachter",
    image: "images/De Wachter.png",
    alliance: "Burger",
    types: ["Toevoegend", "Blokkade", "Dodelijk", "Beschermer", "Kans"],
    description: `Met de sleutels van het dorp op zak patrouilleert de Wachter door Whatsapperdam, altijd op zoek naar het kwaad dat zich verschuilt achter onschuldige gezichten.

Elke dag, tussen 10:00 en 20:00, mag hij via een persoonlijk bericht aan de GM een speler aanwijzen om op te sluiten. Het is toegestaan om meerdere keuzes door te geven, voor het geval zijn doelwit die dag al sterft.

De gekozen speler wordt die nacht vastgezet en ondervraagd in een één-op-één chat met de Wachter. De gevangene kan die nacht geen actie uitvoeren en is beschermd tegen vrijwel alle invloeden van buitenaf.

Tussen 20:00 en 09:00 beslist de Wachter of hij zijn gevangene executeert. Doet hij dit en blijkt de gevangene een burger, dan sterft de Wachter zelf. Is het een weerwolf of onafhankelijke, dan heeft hij zijn taak volbracht. Laat hij de gevangene leven, dan weet deze voortaan van het bestaan van de Wachter.

Mocht één van hen, of beiden, onderdrukt zijn, dan is alleen een zeer losse vorm van gebaren en emoji-taal toegestaan tijdens het verhoor.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wethouder",
    name: "De Wethouder",
    image: "images/De Wethouder.png",
    alliance: "Burger",
    types: ["Toevoegend", "Aanhanger", "Transformatie", "Alleskunner"],
    description: `Altijd aan de zijde van de macht. Geen leider, maar een volger tot in de kleinste details.

De Wethouder vormt een samenwerking met de burgemeester. Dit betekent dat hij dezelfde rol én alliantie aanneemt als de burgemeester, maar zonder de kennis die daarbij hoort. Hij weet dus niet welke rol of alliantie hij heeft gekregen, en krijgt ook geen toegang tot bijvoorbeeld wolveninformatie of groepschats. Alleen door zijn eigen acties te gebruiken, kan hij proberen te achterhalen wat hij precies is.

Elke nacht kan hij de bijbehorende actie van die rol gebruiken, voor zover dat mogelijk is.

Wanneer er een nieuwe burgemeester komt, verandert de Wethouder direct mee en neemt hij opnieuw diens rol en alliantie aan.

Wordt de Wethouder zelf burgemeester bij de allereerste verkiezing, dan mag hij in plaats daarvan een rol naar keuze aannemen. Gebeurt dit later in het spel, dan blijft hij simpelweg Wethouder zonder extra krachten.

Sommige rollen zijn niet aan te nemen door de Wethouder. Heeft hij zo’n burgemeester, dan blijft hij simpelweg Wethouder zonder speciale actie. Deze rollen zijn te vinden in Appendix E: Niet aanneembare rollen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-ziener",
    name: "De Ziener",
    image: "images/De Ziener.png",
    alliance: "Burger",
    types: ["Basis", "Dubbel", "Informatie"],
    description: `Gezegend met heldere dromen en fluisterende visioenen draagt de Ziener de zware last van kennis. Terwijl het dorp slaapt, ziet zij wat anderen nooit zouden mogen zien.

Elke nacht, tussen 20:00 en 09:00, kiest de Ziener via een direct bericht aan de GM één dorpsgenoot om te onderzoeken. In haar visioenen onthult zich diens ware identiteit, ongeacht wat het dorp denkt te weten.

Toch zijn visioenen niet altijd perfect. In sommige gevallen kan de Ziener zich vergissen, een vervormd beeld krijgen of minder details zien dan er werkelijk zijn.

Met deze kennis staat de Ziener er alleen voor. Want één waarheid op het verkeerde moment kan haar einde betekenen… terwijl zwijgen het dorp juist verder het duister in kan trekken.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-zondebok",
    name: "De Zondebok",
    image: "images/De Zondebok.png",
    alliance: "Burger",
    types: ["Toevoegend", "Aankondiging", "Kans"],
    description: `Wanneer angst het dorp verlamt en niemand een keuze durft te maken, zoekt het volk iemand om de schuld te dragen. En telkens weer valt die last op dezelfde schouders.

Eindigt een stemming in een gelijke stand, dan wordt de Zondebok direct opgeofferd.

Maar zelfs in zijn val krijgt hij nog één laatste moment van macht. Voor hij vertrekt, bepaalt hij éénmalig welke spelers tijdens de volgende stemming hun stem mogen laten horen.

De rest van het dorp blijft zwijgend toekijken.

Wijst de Zondebok slechts één speler aan, en sterft deze speler diezelfde nacht door toedoen van de weerwolven, dan blijft het dorp de volgende ochtend volledig sprakeloos. Er vindt die dag geen stemming plaats.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-toegewijde-dienstmeisje",
    name: "Het Toegewijde Dienstmeisje",
    image: "images/Het Toegewijde Dienstmeisje.png",
    alliance: "Burger",
    types: ["Toevoegend", "Spoed", "Transformatie"],
    description: `Altijd op de achtergrond, stil maar oplettend, beweegt het dienstmeisje zich door Whatsapperdam. Ze hoort meer dan ze laat blijken… en wacht geduldig op het juiste moment om haar lot te veranderen.

Tijdens de stemming van het burgerberaad mag het dienstmeisje éénmaal per spel via een direct bericht aan de GM in het geheim van rol wisselen met de speler die naar de brandstapel gaat. De veroordeelde sterft alsnog, maar wordt aangekondigd als *Het Toegewijde Dienstmeisje* in plaats van zijn oorspronkelijke rol.

Het dienstmeisje leeft verder onder de nieuwe rol en volgt vanaf dat moment diens pad: is het een weerwolf, dan sluit zij zich bij de roedel aan; is het een onafhankelijke rol, dan zet zij diens doel voort; is het een burgerrol, dan krijgt zij de bijbehorende krachten voor zover deze nog beschikbaar zijn.

Wordt het dienstmeisje zelf op de brandstapel gegooid, dan mag zij nog steeds van rol wisselen met zichzelf, al zal dit weinig veranderen… haar lot is dan al bezegeld.

Wanneer het dienstmeisje later sterft, wordt haar nieuwe rol onthuld.

Sommige rollen zijn niet over te nemen door het Dienstmeisje. Mocht zij voor zo’n rol kiezen, dan wordt haar actie niet gebruikt. Deze rollen zijn te vinden in Appendix E: Niet Aanneembare Rollen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-zwarte-schaap",
    name: "Het Zwarte Schaap",
    image: "images/Het Zwarte Schaap.png",
    alliance: "Burger",
    types: ["Toevoegend", "Informatie", "Kans"],
    description: `Altijd een beetje buiten de kudde, nooit helemaal op zijn plek. Het Zwarte Schaap beweegt zich door Whatsapperdam met een stille nieuwsgierigheid… alsof het voelt dat er meer speelt dan het dorp laat zien.

Tussen 10:00 en 20:00 kan hij éénmaal per spel via een direct bericht aan de GM zijn ogen openen naar het weerwolvenkamp. Deze keuze wordt diezelfde nacht uitgevoerd.

Dit gebeurt niet onopgemerkt. De weerwolven krijgen te horen dat zij bespied worden en ontvangen twee namen: die van het Zwarte Schaap en die van een volledig willekeurige burger. Zij weten dus dat één van deze twee het Zwarte Schaap is.

Het Zwarte Schaap ontvangt op zijn beurt ook twee namen: die van een willekeurige weerwolf en die van een willekeurige burger.

Zo kijkt het schaap even over de grens… maar ziet nooit het volledige plaatje. Iedereen weet iets. Niemand weet alles.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "harige-harry",
    name: "Harige Harry",
    image: "images/Harige Harry.png",
    alliance: "Burger",
    types: ["Toevoegend", "Misinformatie"],
    description: `Bij Harry’s geboorte zat er al een grote pluk haar op zijn hoofd, en begonnen de baardharen al bijna door te komen. Zijn hele leven is hij bedekt geweest met een dikke bos haar over zijn hele lichaam… misschien door de afkomst van een van zijn ouders? Niemand weet het zeker.

Maar Harry heeft daar wel een probleempje mee.

Zijn status in het dorp is… gecompliceerd.

Sommige rollen raken volledig in de war van die enorme berg haar van hem. Iedereen zal hem dan ook zien als wolf. Altijd. Ongeacht wat hij werkelijk is.

Tenzij hij betoverd is…`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-medium",
    name: "Het Medium",
    image: "images/Het Medium.png",
    alliance: "Burger",
    types: ["Toevoegend", "Hiernamaals", "Informatie"],
    description: `Terwijl anderen slapen, luistert het Medium naar gefluister vanuit het Hiernamaals. Stemmen van gestorven dorpelingen vullen de nacht… maar de doden spreken zelden met één mond.

Eens per nacht, tussen 20:00 en 09:00, stelt het Medium via een direct bericht aan de GM één vraag aan de overledenen. Iedere dode speler antwoordt hier afzonderlijk met ja of nee op.

Omdat iedere geest zijn eigen herinneringen, meningen en wantrouwen behoudt, zijn de antwoorden vaak tegenstrijdig of verwarrend.

In de eerste nacht blijft het stil. Dan zijn er immers nog geen stemmen om naar te luisteren.

Zelfs na zijn dood verdwijnt het Medium niet volledig. Eénmaal per spel mag hij tijdens een nacht nog een laatste visioen doorgeven aan één levende speler. Dit bericht wordt via de GM verstuurd.

Het visioen mag inhoudelijk zijn, maar mag geen volledig stappenplan of uitgebreide strategie bevatten.

Sommige boodschappen zijn te belangrijk om samen met hun eigenaar te sterven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-onschuldige-sletje",
    name: "Het Onschuldige Sletje",
    image: "images/Het Onschuldige Sletje.png",
    alliance: "Burger",
    types: ["Basis", "Ongrijpbaar"],
    description: `Flirterig, nieuwsgierig en zelden thuis in haar eigen bed dwaalt het Onschuldige Sletje iedere nacht door Whatsapperdam. Wat anderen ook denken… haar bedoelingen zijn natuurlijk volledig onschuldig.

Tussen 20:00 en 09:00 kiest zij elke nacht één dorpsgenoot bij wie zij de nacht doorbrengt. Zij gaat altijd naar het huis van haar gekozen persoon en blijft daar de hele nacht, ook als diegene om wat voor reden dan ook zelf niet thuis is. Ze kan er ook voor kiezen om een nacht thuis te blijven… maar wat is daar nou het leuke aan?

Wordt haar eigen huis door de weerwolven bezocht, dan is zij niet thuis en overleeft zij. Wordt echter het huis van haar gezelschap gekozen, dan deelt zij diens lot.

Zij mag nooit twee keer achter elkaar bij dezelfde dorpsgenoot verblijven.

Welke acties wel en niet effect hebben op het Onschuldige Sletje wanneer zij niet thuis is, staat beschreven in Appendix I: Niet Thuis.`,
    isExpansionRole: false,
    expansionKey: null
  },

  {
    id: "de-fluitspeler",
    name: "De Fluitspeler",
    image: "images/De Fluitspeler.png",
    alliance: "Onafhankelijke",
    types: ["Effect"],
    description: `Met zijn verleidelijke melodie verspreidt de fluitspeler zijn invloed door het dorp.

Elke nacht, tussen 20:00 en 09:00, betovert hij via een direct bericht aan de GM een aantal spelers. Dit is minimaal 2, maar groeit mee met het dorp: hij mag elke nacht 10% van de levende spelers betoveren, afgerond. Bij grotere aantallen loopt dit dus op naar 3 of meer.

Alle betoverden weten van elkaar dat zij betoverd zijn, omdat zij samen in een aparte, stille groeps-app worden geplaatst waarin niet gesproken mag worden. Zij weten echter niet wie de fluitspeler is. Betoverde spelers mogen wél delen dát ze betoverd zijn, maar niet wie of hoeveel anderen betoverd zijn.

De fluitspeler kan zichzelf niet betoveren en geliefden worden apart geraakt. Hij zit zelf niet in de groeps-app, maar weet precies wie hij heeft betoverd.

Zodra alleen nog betoverde spelers in leven zijn, wint de fluitspeler onmiddellijk.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-pyromaan",
    name: "De Pyromaan",
    image: "images/De Pyromaan.png",
    alliance: "Onafhankelijke",
    types: ["Effect", "Dodelijk"],
    description: `Het conflict tussen burgers en weerwolven interesseert de pyromaan weinig; hij droomt van vuur en chaos. Zijn doel is simpel: het hele dorp afbranden en als enige overblijven.

Elke nacht, tussen 20:00 en 09:00, maakt hij een bewuste keuze. Ofwel kiest hij één speler om heimelijk van top tot teen met benzine te overgieten, of als hij vindt dat het moment is aangebroken, pakt hij de aansteker en steekt hij alle eerder overgoten spelers tegelijk in brand.

Zodra de pyromaan het vuur ontsteekt, is de brand normaal gesproken onstuitbaar en worden alle overgoten spelers gedood. Een brandend slachtoffer kan echter wél gered worden door de genezer, mits deze op tijd bescherming heeft verleend.

Daarnaast wordt iedere speler die hem ’s nachts bezoekt, in welke vorm dan ook, automatisch eveneens met benzine overgoten. Het overgieten kan alleen mislukken wanneer het doelwit die nacht niet thuis is.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verloren-ziel",
    name: "De Verloren Ziel",
    image: "images/De Verloren Ziel.png",
    alliance: "Onafhankelijke",
    types: ["Kans"],
    description: `De weg naar de hemel is voor niemand zeker… behalve voor hem. Hij voelt dat zijn tijd gekomen is, en verlangt naar het einde.

Het enige doel van de Verloren Ziel is om tijdens de eerste nacht of de eerste dag te sterven. Lukt hem dit, dan wint hij direct het spel.

Overleeft hij deze periode, dan beseft hij dat zelfs de dood hem niet wil hebben. Vanaf dat moment is hij voor eeuwig verdoemd aan het dorp en moet hij de rest van het spel loyaal en actief met de burgers meespelen.

Hij behoudt verder geen verborgen winconditie meer. Zijn kans op rust was kort… en is nu voorbij.
`,
    isExpansionRole: false,
    expansionKey: null
  },

  {
    id: "de-heks",
    name: "De Heks",
    image: "images/De Heks.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Informatie"],
    description: `Verborgen tussen de burgers fluistert de Heks haar spreuken in dienst van het duister. Terwijl het dorp slaapt, zoekt zij naar geheimen die anderen nooit hadden mogen ontdekken.

Eénmaal per nacht, tussen 20:00 en 09:00, mag zij via een direct bericht aan de GM de identiteit van één speler bekijken.

De Heks speelt mee met de weerwolven en stemt ’s nachts ook mee over het slachtoffer van de roedel.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-kleine-wilde",
    name: "De Kleine Wilde",
    image: "images/De Kleine Wilde.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Onzeker", "Aanhanger", "Transformatie"],
    description: `Opgegroeid tussen de bossen van Whatsapperdam kijkt de Kleine Wilde op naar één persoon boven alle anderen. Een held. Een voorbeeld. Iemand die hij blindelings volgt.

Tijdens de opening van het spel, of gedurende de eerste dag of nacht, kiest hij via de GM zijn grote voorbeeld.

Zolang dit voorbeeld leeft, blijft de Kleine Wilde burger, zelfs wanneer zijn voorbeeld eigenlijk een weerwolf blijkt te zijn. Sterft zijn voorbeeld, dan verandert hij direct in een weerwolf.

Hij mag zijn voorbeeld gewoon wantrouwen en tijdens het burgerberaad tegen hem stemmen.

De Kleine Wilde wint met de burgers zolang hij burger is, en met de weerwolven zodra hij verandert.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-onderdrukker",
    name: "De Onderdrukker",
    image: "images/De Onderdrukker.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Invloedrijk"],
    description: `Met harde hand en een ijzeren wil houdt de Onderdrukker Whatsapperdam in zijn greep. Waar hij verschijnt, vallen gesprekken stil en durft niemand nog vrijuit te spreken.

De Onderdrukker staat aan de kant van de weerwolven en stemt ’s nachts mee over het slachtoffer van de roedel.

Eens per nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM één speler die de volgende dag volledig wordt onderdrukt. Dezelfde speler mag nooit twee nachten achter elkaar gekozen worden.

Een onderdrukte speler mag die dag in geen enkele groepsapp spreken en geen stem uitbrengen, maar behoudt wel gewoon zijn krachten. Communicatie is alleen toegestaan via emoji-reacties en gebarentaal.

De Onderdrukker mag ook zichzelf of een medewolf onderdrukken om verdenking af te wenden.

Een onderdrukte speler is dus lang niet altijd onschuldig.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-weerwolf",
    name: "De Weerwolf",
    image: "images/De Weerwolf.png",
    alliance: "Weerwolf",
    types: ["Basis"],
    description: `Samen met zijn medewolven terroriseert de weerwolf het dorp Whatsapperdam.

Elke avond, van 20:00 tot 09:00, bepalen zij gezamenlijk wie hun nachtelijke slachtoffer wordt. De weerwolven winnen zodra zij in de meerderheid zijn of evenveel spelers hebben als de burgers.

Dit overleg vindt plaats in een aparte WhatsApp-groep, uitsluitend voor de weerwolven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-besmettelijke-raaf",
    name: "De Besmettelijke Raaf",
    image: "images/De Besmettelijke Raaf.png",
    alliance: "Onafhankelijke",
    types: ["Dodelijk", "Effect"],
    description: `Als een schaduw verspreidt de raaf zijn plaag door Whatsapperdam. Zijn doel is simpel: als enige overblijven.

Elke nacht, tussen 20:00 en 09:00, kiest hij via de GM één speler om te besmetten.

Iedere besmette speler die iemand bezoekt, besmet die persoon ook. Daarnaast wordt iedereen die de Besmettelijke Raaf zelf bezoekt die nacht ook besmet. Spelers die door de Raaf besmet raken, kunnen pas vanaf de volgende nacht anderen besmetten wanneer zij iemand bezoeken.

Kiest de Besmettelijke Raaf een speler die al besmet is (door hemzelf of via een ander), dan faalt zijn actie niet, maar mag hij die nacht een andere speler kiezen om alsnog te besmetten.

De raaf kan zelf proberen bij te houden wie er allemaal besmet zijn, al is dat bijna ondoenlijk. Zodra het hele dorp besmet is, krijgt hij dit ’s nachts van de GM te horen. Vanaf dat moment mag hij elke nacht één speler naar keuze doden totdat niemand meer leeft. Dan wint hij het spel.

Na de dood van de Besmettelijke Raaf stopt de verspreiding niet; de besmetting blijft actief en kan zich verder verspreiden zoals voorheen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-twee-gescheiden-gezusters",
    name: "De Twee Gescheiden Gezusters",
    image: "images/De Twee Gescheiden Gezusters.png",
    alliance: "Onafhankelijke",
    types: ["Kans", "Dodelijk"],
    description: `De Twee Gescheiden Gezusters – Er gaan al jaren verhalen rond in Whatsapperdam over twee zussen die ooit uit elkaar zijn gehaald. Nu bewegen zij zich weer in hetzelfde dorp, zonder te weten dat de ander er ook is. Twee spelers ontvangen deze rol, maar kennen elkaars identiteit niet.

De Gezusters kunnen geen deel uitmaken van een koppel.

Elke nacht tussen 20:00 en 09:00 kiezen zij via een direct bericht aan de GM één speler. Kiezen zij in dezelfde nacht dezelfde speler, dan wordt dit slachtoffer de volgende ochtend dood aangetroffen.

De Gezusters mogen onder geen enkel beding duidelijk maken dat zij deze rol hebben. Zij moeten er altijd vanuit gaan dat zij een andere rol zijn en mogen daar net als iedereen naar bluffen.

Wanneer één van de Gezusters ’s nachts per toeval de ander bij naam kiest, krijgt alleen zij van de GM te horen dat zij haar zus heeft gevonden. De andere zus weet dit nog niet. Vanaf dat moment mag zij proberen subtiel te seinen dat zij haar heeft ontdekt, maar wees voorzichtig: als het dorp het eerder doorheeft dan haar zus, kan dat hun einde betekenen. De gebruikelijke regels over wat je wel en niet mag zeggen blijven gelden.

Ook nadat één van de twee haar zus heeft gevonden, blijven beide Gezusters elke nacht een speler kiezen zoals normaal. Dit betekent dat zij nog steeds kunnen proberen dezelfde speler te kiezen om zo samen een slachtoffer te maken.

Sterft één van de Gezusters, dan wordt de ander verteerd door verdriet. Zij krijgt op dat moment de keuze: zelf sterven… of verder leven als onderdeel van de burgers.

De Twee Gescheiden Gezusters winnen wanneer zij elkaar hebben gevonden en beiden nog in leven zijn wanneer het spel eindigt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-witte-weerwolf",
    name: "De Witte Weerwolf",
    image: "images/De Witte Weerwolf.png",
    alliance: "Onafhankelijke",
    types: ["Misinformatie", "Dodelijk"],
    description: `Tussen de roedel schuilt iets dat zelfs de wolven vrezen. De Witte Weerwolf is geen bondgenoot, maar een roofdier in wolfskleren. Hij hoort bij de weerwolven en neemt de plaats in van één van hen, maar speelt in werkelijkheid zijn eigen spel.

De Witte Weerwolf wordt niet bovenop het aantal weerwolven toegevoegd, maar vervangt één van de toegevoegde wolven in het spel. Hierdoor kan hij zich geloofwaardig voordoen als een andere weerwolfrol.

Elke tweede nacht, tussen 20:00 en 09:00, mag hij ontwaken en in het geheim één andere weerwolf doden. Hij mag ervoor kiezen deze actie één keer uit te stellen, maar daarna moet hij bij de volgende mogelijkheid wel toeslaan. Geen stemming, geen overleg — puur verraad in het donker.

Blijft de Witte Weerwolf als enige over, dan wint hij het spel alleen. Hij is een onafhankelijke rol en heeft geen enkele loyaliteit aan de roedel.

Omdat weerwolven onderling hun rollen delen, zal de Witte Weerwolf vertrouwen moeten winnen, informatie delen en meespelen alsof hij loyaal is — terwijl hij in werkelijkheid wacht op het juiste moment om toe te slaan.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-besmettelijke-oerwolf",
    name: "De Besmettelijke Oerwolf",
    image: "images/De Besmettelijke Oerwolf.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Transformatie"],
    description: `Oud, sluw en doordrenkt met een oeroude vloek beweegt deze wolf zich tussen de roedel. Voor de buitenwereld is hij gewoon een weerwolf: hij overlegt ’s nachts met de andere wolven en stemt mee over hun prooi.

Pas wanneer één van zijn medewolven het lootje heeft gelegd, mag de Besmettelijke Oerwolf zijn ware kracht gebruiken. Eénmaal per spel kan hij, nadat de weerwolven een burger hebben gekozen, in het geheim besluiten dat deze speler niet sterft maar wordt besmet. Het slachtoffer ontwaakt dan als nieuwe weerwolf en sluit zich bij de roedel aan. Had deze speler een speciale nachtelijke kracht, dan behoudt hij die.

De Besmettelijke Oerwolf mag onder geen enkel beding laten merken dat hij deze rol heeft of dat er een nieuwe wolf is gecreëerd. Hij houdt de aandacht liever op de andere wolven en doet er zelfs goed aan zich voor te doen als een andere wolvenrol.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-concierge",
    name: "De Conciërge",
    image: "images/De Conciërge.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Misinformatie", "Aankondiging"],
    description: `Bloedvlekken zijn hardnekkiger dan wijnvlekken, maar daar weet de conciërge wel raad mee. Als trouwe aanhanger van de weerwolven stemt hij ’s nachts met hen mee over hun prooi.

Daarnaast mag hij twee keer in het spel, tussen 20:00 en 09:00, via een direct bericht aan de GM één speler aanwijzen. Overlijdt deze speler in die nacht of de daaropvolgende dag, dan wordt diens rol niet bekendgemaakt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-glitterende-toverwolf",
    name: "De Glitterende Toverwolf",
    image: "images/De Glitterende Toverwolf.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Misinformatie"],
    description: `In het donker glinstert hij. Subtiel. Bijna betoverend. Maar wat hij achterlaat… klopt niet.

Elke dag, tussen 10:00 en 20:00, kiest hij via een direct bericht aan de GM één burger uit. Diegene krijgt die volgende nacht een vreemd geurtje… iets magisch, iets dat niet thuishoort in het dorp.

Wie hem die nacht onderzoekt, ziet maar één ding: een wolf, ongeacht zijn echte rol of alliantie. Alsof de waarheid zelf vervormd wordt.

De speler zelf merkt hier niets van… maar voor de rest van het dorp is hij die nacht niets anders dan een WOLF.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-jachtwolf",
    name: "De Jachtwolf",
    image: "images/De Jachtwolf.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Dodelijk"],
    description: `Gedreven door instinct en een ontembare drang naar vergelding jaagt de Jachtwolf door de duisternis van Whatsapperdam. Altijd rusteloos. Altijd wachtend op het juiste moment om terug te slaan.

Wordt de Jachtwolf gedood, dan sterft hij nooit alleen.

In zijn laatste adem kiest hij één levende speler die hij met zich meesleurt de dood in.

Eén naam. Eén slachtoffer.

Geen ontsnappen.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-slager",
    name: "De Slager",
    image: "images/De Slager.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Effect", "Dodelijk"],
    description: `Waar andere weerwolven jagen uit honger, geniet de Slager van voorbereiding. Geduldig kiest hij zijn prooi, wachtend tot het perfecte moment om toe te slaan.

Om de nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM één speler om te marineren.

Blijft deze speler gedurende die nacht én de daaropvolgende dag volledig onberoerd door ieder bezoek of iedere actie, dan slaagt de marinade. De volgende nacht wordt deze speler als extra slachtoffer opgegeten, naast de normale prooi van de weerwolven.

Wordt de gekozen speler tijdens de marineringsnacht of de dag erna toch bezocht, dan mislukt de marinade volledig. In dat geval mag de Slager de eerstvolgende nacht opnieuw iemand kiezen om te marineren.

Verder jaagt de Slager gewoon mee met de roedel en stemt hij ’s nachts mee over het slachtoffer van de weerwolven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verdoemde",
    name: "De Verdoemde",
    image: "images/De Verdoemde.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Onzeker", "Transformatie", "Misinformatie"],
    description: `Onopvallend leeft hij tussen de burgers van Whatsapperdam, ogenschijnlijk niet anders dan de rest. Maar diep vanbinnen draagt hij een vloek die al lang geleden is uitgesproken.

Hij weet het zelf niet… maar iets in hem wacht op het juiste moment om wakker te worden.

Wanneer de Verdoemde sterft door een aanval van de weerwolven, sterft hij niet echt. In plaats daarvan ontwaakt zijn ware aard en sluit hij zich direct bij de roedel aan, alsof hij er altijd al deel van uitmaakte.

Welke doodsoorzaken precies tellen als een wolvenaanval, is terug te vinden in Appendix H: Doodsoorzaken.

Sterft hij op een andere manier, dan blijft zijn vloek ongebruikt en sterft hij zoals ieder ander.
`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-welp",
    name: "De Welp",
    image: "images/De Welp.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Dodelijk", "Kans"],
    description: `Jong. Onervaren. Maar hongerig.

Nog niet welkom bij de roedel, maar wel al deel van hen. Te wild om stil te zitten, te ongeduldig om te wachten. De Welp jaagt alleen.

Elke nacht tussen 20:00 en 09:00 kiest hij via een direct bericht aan de GM één speler… en noemt de rol die hij denkt dat diegene heeft. Heeft hij gelijk, dan slaat hij toe en wordt zijn prooi de volgende nacht dood gevonden, mits diegene thuis was en niet beschermd. Zit hij fout, dan leeft zijn doelwit nog… maar weet diegene dat er iets op hem jaagt.

De Welp groeit op. Nacht 0 tot en met 3 jaagt hij elke nacht, gretig en nieuwsgierig. In nacht 4 en 5 zit hij in zijn rebelse tienerfase en doet hij ’s avonds helemaal niks. In nacht 6 is hij volgroeid en sluit hij zich aan bij de roedel als een volwaardige weerwolf.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wolf-in-schaapskleren",
    name: "De Wolf in Schaapskleren",
    image: "images/De Wolf in Schaapskleren.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Misinformatie", "Kopiëren"],
    description: `Identiteitscrisis is geen grap, zeker niet voor deze wolf.

Tussen 20:00 en 09:00 kiest hij via een persoonlijk bericht aan de GM één levende dorpsgenoot, maar nooit twee nachten achter elkaar dezelfde persoon. Voor die nacht en de volgende dag draagt hij de identiteit van zijn keuze, maar zonder diens krachten.

Wordt zijn identiteit onderzocht, dan verschijnt altijd dit masker. Zelfs bij de brandstapel of een andere dood blijft het intact.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wolf-in-winterslaap",
    name: "De Wolf in Winterslaap",
    image: "images/De Wolf in Winterslaap.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Dodelijk"],
    description: `Diep in een verborgen grot, ver van het dorp, ligt hij. Stil. Onaangeroerd. Alsof de tijd hem vergeten is. Hij hoort bij het wolvenkamp, weet wie de andere wolven zijn en zij weten wie hij is, maar hij spreekt niet en mengt zich nergens in.

Overdag dwaalt hij soms door het dorp voor camouflage, een schaduw tussen de rest. Maar zodra de avond valt, trekt hij zich terug in zijn grot en zakt hij weer weg in zijn diepe winterslaap.

En wee degene die hem stoort… wordt hij ’s nachts bezocht, dan schrikt hij wakker. Verstoord. Woedend. In zijn eerste ademtocht grijpt hij één van zijn bezoekers en verslindt diegene zonder aarzeling. Vanaf dat moment is hij ontwaakt en neemt hij weer volledig deel aan het wolvenkamp, jagend en stemmend alsof hij er altijd al actief bij hoorde.

Blijft hij ongestoord, dan slaapt hij door. Tot het moment komt dat hij nodig is. Wanneer alle andere wolven gestorven zijn, opent hij alsnog zijn ogen. Alleen. Hongerig. En vanaf dat moment jaagt hij verder als een normale weerwolf.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wolvenmeester",
    name: "De Wolvenmeester",
    image: "images/De Wolvenmeester.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Gehard"],
    description: `Deze wolf is niet geboren om te volgen, maar om te leiden. Al van jongs af aan draagt hij de drang in zich om boven iedereen uit te stijgen en ooit het dorp naar zijn hand te zetten.

Zijn grote droom is om burgemeester te worden, al is hij niet verplicht zichzelf kandidaat te stellen. Bereikt hij die macht eenmaal, dan zal hij die met alles wat hij heeft proberen vast te houden.

Alleen wanneer de Wolvenmeester burgemeester is, kan hij niet worden verbrand. Wordt hij in die positie op de brandstapel gegooid, dan weigert het vuur hem te nemen en overleeft hij de executie.

De burgers zullen dus een andere manier moeten vinden om van hem af te komen...`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "barman-bob",
    name: "Barman Bob",
    image: "images/Barman Bob.png",
    alliance: "Burger",
    types: ["Uitbreiding", "Dronken"],
    description: `"In de Dorpsbrouwerij staat Bob achter de tap van de ochtendbar. Met een glimlach en een vriendelijk woord begint hij de dag, maar hij ziet precies wie nét iets te veel drinkt. Elke dag tussen 10:00 en 20:00 kiest hij één speler die die nacht en volgende dag dronken naar huis gaat. Een dronken speler kan verkeerde keuzes maken of vervormde informatie krijgen, zonder dat hij zelf merkt dat er iets mis is.
Bob staat aan de kant van de burgers en gebruikt zijn drankjes om het dorp subtiel te helpen. Hij mag niet twee dagen achter elkaar dezelfde speler kiezen. Bob is zelf immuun voor dronkenschap. Als Bob en Bert in dezelfde dag dezelfde speler kiezen, wordt deze tot comazuipen gebracht en zal die persoon die nacht sterven.`,
    isExpansionRole: true,
    expansionKey: "de-dorpsbrouwerij"
  },
  {
    id: "barman-bert",
    name: "Barman Bert",
    image: "images/Barman Bert.png",
    alliance: "Weerwolf",
    types: ["Uitbreiding", "Dronken"],
    description: `In de Dorpsbrouwerij staat Bert achter de tap van de avondbar. In het schemerlicht schenkt hij zijn glazen met een stille, bijna onheilspellende blik. Hij ziet wie te lang blijft hangen… en wie daar de prijs voor zal betalen. Elke dag tussen 10:00 en 20:00 kiest hij één speler die die nacht en volgende dag dronken naar huis gaat. Een dronken speler kan verkeerde keuzes maken of vervormde informatie krijgen, zonder dat hij zelf merkt dat er iets mis is.
Bert staat aan de kant van de weerwolven en gebruikt zijn drankjes om het dorp subtiel te beïnvloeden. Hij mag niet twee dagen achter elkaar dezelfde speler kiezen. Bert is zelf immuun voor dronkenschap. Als Bob en Bert in dezelfde dag dezelfde speler kiezen, wordt deze tot comazuipen gebracht en zal die persoon die nacht sterven.`,
    isExpansionRole: true,
    expansionKey: "de-dorpsbrouwerij"
  },
  {
    id: "de-waarzegster",
    name: "De Waarzegster",
    image: "images/De Waarzegster.png",
    alliance: "Burger",
    types: ["Uitbreiding", "Informatie"],
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
    alliance: "Titaan",
    types: ["Uitbreiding", "Titaan", "Dodelijk", "Beschermer", "Dronken", "Informatie"],
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
    alliance: "Titaan",
    types: ["Uitbreiding", "Titaan", "Dodelijk", "Dronken", "Informatie"],
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
    alliance: "Onduidelijk",
    types: ["Uitbreiding"],
    description: `Eén speler in het dorp is Roodkapje. Geen aparte rol, maar een extra laag bovenop wat diegene al is. Roodkapje kan dus een burger, wolf of onafhankelijke zijn.
Niemand weet wie Roodkapje is. Alleen Oma en De Grote Boze Wolf kunnen haar vinden.
Zolang Roodkapje leeft, beschermt zij Oma onbewust. Sterft Roodkapje, dan verandert de hele strijd en krijgt De Grote Boze Wolf de overhand.
Wanneer Oma of De Grote Boze Wolf buiten zijn, beïnvloedt dit ook Roodkapje. De nacht wordt onstabiel, en acties hebben 50% kans om te falen.`,
    isExpansionRole: true,
    expansionKey: "de-sprookjesstrijd"
  },
  {
    id: "de-burgemeester",
    name: "De Burgemeester",
    image: "images/De Burgemeester.png",
    alliance: null,
    types: ["Bijrol", "Invloedrijk"],
    description: `De burgemeester wordt gekozen via een speciale algemene stemming, direct vóór de eerste reguliere stemming. Burgers kunnen zich kandidaat stellen en een korte speech houden, waarna één winnaar overblijft. De burgemeesterkaart mag niet worden geweigerd—ook een weerwolf kan burgemeester zijn. Zolang de Zondebok leeft, telt de stem van de burgemeester als één. Is de Zondebok uit het spel, dan telt zijn stem bij een gelijke stand dubbel. Sterft de burgemeester, dan benoemt hij zelf een opvolger.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-geliefde",
    name: "De Geliefde",
    image: "images/De Geliefde.png",
    alliance: null,
    types: ["Bijrol", "Liefde"],
    description: `Een geliefde maakt altijd deel uit van een koppel, al kan dat koppel uit 2 tot wel 4 of meer mensen bestaan. Een geliefde sterft aan liefdesverdriet als haar partner, of één van haar partners, sterft. Het koppel kan gevormd worden door verschillende rollen, waarvan Cupido de bekendste is.

Wanneer het koppel bestaat uit dezelfde alliantie, zoals burger-burger of weerwolf-weerwolf, blijft hun doel ongewijzigd en is dit duidelijk.

Wanneer er binnen een koppel een Romeo en Juliet ontstaat, namelijk een burger en een weerwolf, winnen zij alleen nog samen. Hun gezamenlijke doel wordt dan om de rest van de spelers te elimineren.

Wanneer er een derde partij in het spel komt, een onafhankelijke… wordt het interessanter. Romeo, Juliet… en Dave. In dat geval kunnen zij meeliften met het doel van de onafhankelijke, en wordt het vaak verstandig om dat pad te volgen… als zij willen winnen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verlammer",
    name: "De Verlammer",
    image: "images/De Verlammer.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Effect", "Blokkade", "Dodelijk"],
    description: `Controle. Stilte. Geen ontsnappen.

Op de eerste dag, tussen 10:00 en 20:00, kiest de Verlammer via een direct bericht aan de GM drie spelers. Zodra de nacht begint, worden hun rollen direct geblokkeerd.

Zij weten van elkaar wie ze zijn, maar niet elkaars rol.

Hun krachten blijven geblokkeerd… tot één van hen zichzelf vrijwillig opoffert en direct sterft, of totdat de Verlammer zelf sterft. Pas dan krijgen zij hun rolacties terug.

De Verlammer kan ook een medewolf selecteren. Voor de anderen lijkt het alsof ook deze speler geblokkeerd is, maar in werkelijkheid kan hij gewoon zijn vaardigheden blijven gebruiken.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-feestwolf",
    name: "De Feestwolf",
    image: "images/De Feestwolf.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Aankondiging", "Spoed", "Dodelijk"],
    description: `Een wolf die houdt van een feestje… en dat is te zien. En te horen.

Eénmaal in het spel kan de Feestwolf, wanneer hij maar wil, via een direct bericht aan de GM iemand met een knal uitschakelen. Geen stille jacht, geen schaduwwerk… maar een overdreven, luid einde.

Iedereen zal weten dat hij erachter zit.

Deze actie kan niet gebruikt worden in de eerste dag of nacht.

Daarna… is het altijd tijd voor een feestje.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-illusionist",
    name: "De Illusionist",
    image: "images/De Illusionist.png",
    alliance: "Onafhankelijke",
    types: ["Effect", "Misinformatie", "Dodelijk"],
    description: `Wat echt is… is maar een keuze. En hij kiest wat jij ziet.

Elke nacht, tussen 20:00 en 09:00, kiest de Illusionist via een direct bericht aan de GM één van twee acties: hij vermomt één speler, of hij doodt alle spelers die op dat moment vermomd zijn.

Kiest hij voor vermommen, dan wordt die speler die nacht én alle volgende nachten gezien als "De Illusionist" door alle zienende rollen, ongeacht zijn echte rol.

Kiest hij voor doden, dan sterven alle op dat moment vermomde spelers. Deze worden aangekondigd als "De Illusionist".

Zijn doel is simpel: het dorp uitroeien. Of dat nu gebeurt door zijn eigen hand… of doordat het dorp zichzelf vernietigt door wat hij hen laat zien.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-wolfsspook",
    name: "Het Wolfsspook",
    image: "images/Het Wolfsspook.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Hiernamaals"],
    description: `Een spook van zijn eigen leven. Bij leven is hij een normale weerwolf, deel van de roedel zoals ieder ander.

Maar wanneer het Wolfsspook sterft… verdwijnt hij niet. Ongezien blijft hij aanwezig in het spel. Hij telt niet meer mee in het aantal spelers of wolven, maar zijn invloed blijft.

Hij mag nog steeds stemmen door zijn stem via een direct bericht aan de GM door te geven.

Ook in de nacht blijft hij bij de wolven. Hij kan nog steeds met hen communiceren en meedenken, alsof hij nooit gestorven is.

Doden is dus niet het einde.
Pas op met wat je zegt… sommige stemmen komen van verder dan het graf.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wolfsoudste",
    name: "De Wolfsoudste",
    image: "images/De Wolfsoudste.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Gehard"],
    description: `Oud bloed. Oude littekens. Waar anderen vallen, blijft hij staan.

De Wolfsoudste is een normale weerwolf en jaagt en stemt mee met de roedel.

Eénmaal in het spel weigert hij te sterven. Of het nu de brandstapel is of een andere vorm van geweld… hij overleeft.

Hij heeft dit al eerder meegemaakt. En hij komt er altijd weer doorheen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wingman",
    name: "De Wingman",
    image: "images/De Wingman.png",
    alliance: "Burger",
    types: ["Toevoegend", "Liefde"],
    description: `Liefde voor een dag… meer heeft hij niet nodig. Als anderen het maar even voelen.

Elke nacht, tussen 20:00 en 22:00, mag de Wingman via een direct bericht aan de GM twee spelers kiezen. Eén van deze twee mag hij zelf zijn.

Direct na zijn keuze worden deze twee gekoppeld en komen ze samen in een aparte app. Zij blijven gekoppeld gedurende die nacht en de aansluitende dag. In die tijd delen zij hun lot: sterft één van hen, dan sterft de ander ook.

Aan het begin van de volgende nacht dooft de liefde weer uit, en gaan ze ieder hun eigen weg.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-onzekere-grenswachter",
    name: "De Onzekere Grenswachter",
    image: "images/De Onzekere Grenswachter.png",
    alliance: "Onafhankelijke",
    types: ["Aanhanger", "Gehard"],
    description: `Altijd tussen werelden. Nooit echt ergens thuis. Tot het moment dat de grens wordt overschreden.

Wanneer hij getroffen wordt door een dodelijke aanval, breekt er iets… of juist niet. Op dat moment kiest hij. Hij sterft niet.

In plaats daarvan sluit hij zich aan bij de alliantie van degene die hem probeerde te doden. Was dit een weerwolf, burger of onafhankelijke… dan wordt dat vanaf dat moment zijn kant.

Hij krijgt te weten wie hem probeerde te doden en tot welke alliantie diegene behoort.

Welke doodsoorzaken hem naar welke alliantie laten overstappen, is terug te vinden in Appendix H: Doodsoorzaken.

Vanaf dat moment deelt hij hun doel en wint hij met hen mee… zelfs als hij later alsnog sterft.

Hij sluit zich niet aan bij eventuele groepsapps. Hij blijft op afstand.

Op de grens… maar nooit meer neutraal.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-klier",
    name: "De Klier",
    image: "images/De Klier.png",
    alliance: "Burger",
    types: ["Toevoegend", "Blokkade", "Dodelijk", "Aankondiging"],
    description: `Altijd op zoek naar iemand om te raken. Eerst een tik… daarna pas de schade.

Elke dag, tussen 10:00 en 20:00, kiest de Klier via een direct bericht aan de GM één speler en gooit een steen. Deze speler krijgt een hersenschudding en kan de volgende nacht zijn rol niet gebruiken.

Raakt de Klier iemand die al eerder een hersenschudding heeft gehad, dan wordt de klap fataal en sterft deze speler direct.

Op dat moment wordt de Klier ontmaskerd en wordt zijn rol bekendgemaakt aan het hele dorp.

De Klier kan op deze manier maximaal twee spelers per spel doden.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-omroeper",
    name: "De Omroeper",
    image: "images/De Omroeper.png",
    alliance: "Burger",
    types: ["Toevoegend", "Aankondiging"],
    description: `Waar hij komt, blijft het niet stil… zelfs niet na zijn dood.

In de eerste nacht, tussen 20:00 en 09:00, kiest de Omroeper via een direct bericht aan de GM één speler.

Wanneer de Omroeper sterft, wordt naast zijn eigen rol ook de rol van deze gekozen speler bekendgemaakt.

Sterft deze speler eerder dan de Omroeper, dan mag hij direct een nieuwe speler kiezen.

Iemand neemt hij altijd mee… al is het alleen in de waarheid.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-premiejager",
    name: "De Premiejager",
    image: "images/De Premiejager.png",
    alliance: "Onafhankelijke",
    types: ["Gehard", "Dodelijk"],
    description: `Niet hier voor het dorp. Niet hier voor de wolven. Alleen voor zijn lijst.

Aan het begin van het spel krijgt de Premiejager drie willekeurige spelers toegewezen door de GM. In de eerste nacht, tussen 20:00 en 09:00, kiest hij zelf nog drie andere spelers.

Dit zijn zijn doelwitten.

Zijn doel is simpel: zorg dat deze zes spelers sterven. Hij jaagt niet alleen, en profiteert van de fouten van zowel burgers als wolven.

Eénmaal in het spel kan de Premiejager, tussen 20:00 en 09:00 via een direct bericht aan de GM, één speler markeren. Deze speler kan die nacht niet beschermd of gered worden. Sterft deze speler die nacht, dan mag de Premiejager direct nog een extra slachtoffer kiezen.

Mislukt deze actie, dan mag hij het later nog één keer proberen. Lukt het hem, dan is zijn kracht verbruikt.

De Premiejager is gehard en overleeft één keer een weerwolfaanval.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-vervloekte-wolf",
    name: "De Vervloekte Wolf",
    image: "images/De Vervloekte Wolf.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Transformatie"],
    description: `Ooit gewoon deel van de roedel… tot de vloek zich vastzette. Wat hij achterlaat, sterft niet zomaar.

De Vervloekte Wolf is een normale weerwolf en jaagt en stemt mee met de roedel.

Wanneer de Vervloekte Wolf sterft, treedt zijn vloek in werking. De eerstvolgende wolvenaanval zal niet doden… maar veranderen. Het doelwit van de aanval wordt geen slachtoffer, maar een nieuwe weerwolf.

Wordt dit doelwit beschermd, dan verdwijnt de vloek niet meteen, maar blijft hij nog één dag langer hangen, tot de eerstvolgende kans zich aandient.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-boze-wolf",
    name: "De Boze Wolf",
    image: "images/De Boze Wolf.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Dodelijk"],
    description: `Groter. Sterker. Hongeriger. Hij jaagt met de roedel… maar speelt zijn eigen spel.

De Boze Wolf hoort bij de weerwolven en overlegt met hen zoals normaal, maar waar de roedel samen één prooi kiest, neemt hij er nog één extra.

Elke nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM zijn eigen slachtoffer, bovenop de aanval van de wolven. Dit gaat door… tot het moment dat er een andere weerwolf of de Kleine Wilde sterft.

Vanaf dat moment stopt zijn extra jacht, en blijft hij verder een normale weerwolf.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-wolfsschrijver",
    name: "De Wolfsschrijver",
    image: "images/De Wolfsschrijver.png",
    alliance: "Weerwolf",
    types: ["Toevoegend", "Misinformatie", "Aankondiging"],
    description: `Een meester met de typmachine. Inkt als wapen, woorden als waarheid. Deze wolf jaagt zoals de rest… maar schrijft het einde zelf.

Twee keer in het spel kan de Wolfsschrijver, tussen 20:00 en 09:00 via een direct bericht aan de GM, één speler kiezen. Mocht deze speler die nacht sterven, door welke oorzaak dan ook, dan herschrijft de Wolfsschrijver zijn einde.

Hij bepaalt de doodsoorzaak… en verzint een bijpassende rol.

Wat er die ochtend wordt aangekondigd, is niet de waarheid… maar wat hij heeft geschreven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-charmante-dealer",
    name: "De Charmante Dealer",
    image: "images/De Charmante Dealer.png",
    alliance: "Burger",
    types: ["Toevoegend", "Dodelijk", "Beschermer", "Upgrade", "Chaos", "Kans"],
    description: `Aan de rand van het dorp staat hij. Met zijn kist. Met zijn glimlach. En deals… waar je beter twee keer over nadenkt.

Elke dag, tussen 10:00 en 20:00, biedt de Charmante Dealer via de GM één speler een deal aan. De speler mag deze accepteren of weigeren. Het effect treedt de volgende nacht in.

Accepteert de speler de deal, dan bepaalt het lot wat hij krijgt:
10% – Sterft direct
30% – Bescherming van de Genezer
20% – Krijgt een geweer met één kogel
20% – Zijn rol wordt die nacht geblokkeerd
20% – Er gebeurt niets

Weigeren is veilig…

maar soms is dat precies wat je niet verder helpt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-aasgier",
    name: "De Aasgier",
    image: "images/De Aasgier.png",
    alliance: "Burger",
    types: ["Toevoegend", "Liefde", "Aanhanger"],
    description: `Hoog boven Whatsapperdam cirkelt hij. Wachtend. Geduldig. Op het juiste moment.

Elke nacht, tussen 20:00 en 09:00, kiest de Aasgier via een direct bericht aan de GM één speler om te onderzoeken. Hij blijft zoeken… tot hij een koppel vindt.

Heeft hij een koppel gevonden, dan blijft hij erboven hangen. Kijkend. Wachtend. Tot één van hen sterft.

Op dat moment slaat de Aasgier toe. Hij verdelgt het lichaam van de gestorven partner en voorkomt daarmee het liefdesverdriet.

Hij neemt diens plaats in.

Vanaf dat moment is de Aasgier volledig deel van het koppel… verbonden, en compleet in het leven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
  id: "de-sekteleider",
  name: "De Sekteleider",
  image: "images/De Sekteleider.png",
  alliance: "Onafhankelijke",
  types: ["Dodelijk", "Invloedrijk", "Chaos", "Effect"],
  description: `Woorden als gif, overtuiging als wapen. Langzaam groeit zijn invloed… tot het te laat is.

De Sekteleider is een onafhankelijke rol. Zijn doel is om als enige over te blijven, of samen met zijn overgebleven sekteleden.

Elke nacht, tussen 20:00 en 09:00, kan de Sekteleider via een direct bericht aan de GM één speler overtuigen om toe te treden tot zijn sekte. Deze speler behoudt zijn eigen rol, maar hoort vanaf dat moment bij de sekte.

In plaats van iemand te overtuigen, kan de Sekteleider er ook voor kiezen om één van zijn sekteleden op te offeren om een speler naar keuze te vermoorden.

Een sekte kan uit maximaal 5 leden bestaan, exclusief de Sekteleider zelf.

Overdag mag de Sekteleider, via de GM, privéberichten sturen naar zijn sekteleden.

Sterft de Sekteleider, dan valt de sekte uiteen en verdwijnen alle sekteleden.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-kannibaal",
  name: "De Kannibaal",
  image: "images/De Kannibaal.png",
  alliance: "Moordenaar",
  types: ["Dodelijk", "Chaos"],
  description: `Honger die nooit verdwijnt… alleen groeit. Elke keuze maakt het erger.

Elke nacht, tussen 20:00 en 09:00, kiest de Kannibaal via een direct bericht aan de GM: hij eet één speler… of hij spaart zijn honger.

Voor elke nacht dat hij spaart, bouwt hij één extra honger op, tot een maximum van 5.

Op een nacht naar keuze kan hij deze opgespaarde honger gebruiken en meerdere spelers in één keer verslinden, tot dit maximum.

Hoe langer hij wacht… hoe groter de schade.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-betoverde",
  name: "De Betoverde",
  image: "images/De Betoverde.png",
  alliance: null,
  types: ["Bijrol", "Effect"],
  description: `De melodie van de Fluitspeler heeft zich in je hoofd genesteld. Sindsdien voel je dat je niet de enige bent die veranderd is.

Betoverde spelers worden samen geplaatst in een aparte groepsapp. In deze app mag niet gesproken worden.

Een Betoverde speler mag wel openbaar delen dát hij betoverd is, maar nooit onthullen wie of hoeveel andere spelers ook betoverd zijn.

Verder behoudt de Betoverde gewoon zijn eigen rol, krachten en winconditie… zolang de muziek blijft spelen.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-herrezene",
  name: "De Herrezene",
  image: "images/De Herrezene.png",
  alliance: null,
  types: ["Bijrol", "Hiernamaals"],
  description: `Teruggerukt uit de dood door de Dodenbezweerder dwaalt de Herrezene opnieuw door Whatsapperdam… maar nooit meer helemaal levend.

De Herrezene behoudt zijn rol en krachten zoals die waren op het moment van zijn dood.

Toch heeft de dood sporen achtergelaten. De Herrezene mag alleen nog communiceren via emoji-reacties en gebarentaal.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-onderdrukte",
  name: "De Onderdrukte",
  image: "images/De Onderdrukte.png",
  alliance: null,
  types: ["Bijrol", "Invloedrijk"],
  description: `De stem is verdwenen. Onder druk van de Onderdrukker of de Agent wordt de Onderdrukte tot stilte gedwongen.

Een Onderdrukte speler mag gedurende de dag in geen enkele groepsapp spreken en kan ook geen stem uitbrengen tijdens stemmingen.

Communicatie is alleen toegestaan via emoji-reacties en gebarentaal.

Ondanks de onderdrukking behoudt de speler wel gewoon zijn rol en mag hij zijn krachten blijven gebruiken, tenzij expliciet anders vermeld.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-verlamde",
  name: "De Verlamde",
  image: "images/De Verlamde.png",
  alliance: null,
  types: ["Bijrol", "Blokkade"],
  description: `Alsof er kettingen om je geest liggen, voel je hoe je krachten plots verdwijnen. De greep van de Verlammer laat niet zomaar los.

Een Verlamde speler kan zijn rolkrachten niet gebruiken zolang de verlamming actief is.

Alle Verlamden weten van elkaar wie zij zijn, maar niet welke rollen zij bezitten.

De verlamming eindigt pas wanneer één van de Verlamden zichzelf vrijwillig opoffert en sterft, of wanneer de Verlammer zelf sterft.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-vermomde",
  name: "De Vermomde",
  image: "images/De Vermomde.png",
  alliance: null,
  types: ["Bijrol", "Misinformatie"],
  description: `Iets aan jou klopt niet meer. Voor de ogen van zienende rollen draag je niet langer je eigen gezicht, maar dat van de Illusionist.

Zolang je vermomd bent, word je door alle zienende rollen gezien als “De Illusionist”, ongeacht je echte rol.

Blijf op je hoede.

Want wanneer de Illusionist besluit toe te slaan, sterven alle vermomde spelers tegelijk… en worden zij ook zo aangekondigd.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "het-sektelid",
  name: "Het Sektelid",
  image: "images/Het Sektelid.png",
  alliance: null,
  types: ["Bijrol", "Aanhanger"],
  description: `Onder invloed van de Sekteleider heeft het Sektelid zich aangesloten bij de sekte.

Een Sektelid behoudt zijn eigen rol en krachten, maar deelt ook het doel van de Sekteleider.

De Sekteleider kan via de GM privéberichten sturen naar zijn sekteleden en hen opdracht geven een moord te plegen.

Een Sektelid mag deze opdracht accepteren of weigeren. Accepteert hij, dan voert hij de moord uit en mag hij daarna kiezen of hij in de sekte blijft. Weigert hij, dan ligt zijn lot in handen van de Sekteleider.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-tongtovenaar",
  name: "De Tongtovenaar",
  image: "images/De Tongtovenaar.png",
  alliance: "Burger",
  types: ["Nieuw", "Invloedrijk", "Chaos"],
  isExpansionRole: true,
  expansionKey: "de-tongtovenaar",
  description: "Met natte staf en vervloekte tong heerst de Tongtovenaar over de woorden van Whatsapperdam 👅\n\nWaar hij verschijnt, verandert taal in chaos. Geen gesprek blijft veilig, geen zin blijft normaal. Het dorp buigt zich dagelijks onder nieuwe vreemde spreuken terwijl iedereen wanhopig probeert elkaar nog te begrijpen.\n\nDe Tongtovenaar hoort bij de burgers.\n\nTussen 10:00 en 09:00 mag hij via een direct bericht aan de GM één Tongspreuk kiezen die actief wordt over het dorp. Hij mag kiezen uit bestaande spreuken of zelf een nieuwe bedenken, zolang deze eerst door de GM wordt goedgekeurd.\n\nDeze spreuken veranderen de manier waarop spelers mogen praten. Soms worden berichten beperkt. Soms vervormd. Soms compleet op hun kop gezet.\n\nDe Tongtovenaar mag zijn krachten nooit gebruiken om bewust één alliantie te bevoordelen. Iedere spreuk moet eerlijk gelden voor het hele dorp: burgers, weerwolven en onafhankelijken.\n\nZelfs na zijn dood blijft zijn stem nog door Whatsapperdam galmen. Ook dan mag hij nieuwe spreuken blijven uitspreken."
},
{
  id: "de-boer",
  name: "De Boer",
  image: "images/placeholder-expansion-role.jpg",
  alliance: null,
  types: ["Uitbreiding", "Bijrol"],
  isExpansionRole: true,
  expansionKey: "de-boeren",
  description: `De Boer is geen normale rol, maar een bijrol die bovenop een bestaande rol kan worden uitgedeeld.

Alle Boeren weten van elkaar wie de andere Boeren zijn.
Zij kennen echter niet elkaars rol en weten alleen dat zij samen tot de Boeren behoren.

De Boeren hebben een belangrijke taak: het aanwijzen van de burgemeester.

Aan het begin van het spel kiezen de Boeren gezamenlijk en unaniem een van hun eigen leden als Boerenburgemeester.
Hierdoor vinden er geen normale burgemeesterverkiezingen plaats.

De gekozen Boerenburgemeester krijgt alle gebruikelijke bevoegdheden van een burgemeester.

Wanneer de Boerenburgemeester sterft, wijst hij in zijn laatste moment een andere levende Boer aan als opvolger.
Deze speler wordt direct de nieuwe burgemeester.

Zolang er minstens een Boer in leven is, blijft het burgemeesterschap binnen de Boeren.

Zijn er geen Boeren meer over, dan kan er geen nieuwe burgemeester meer worden aangewezen.`
},
{
  id: "de-adelijke",
  name: "De Adelijke",
  image: "images/placeholder-expansion-role.jpg",
  alliance: null,
  types: ["Uitbreiding", "Bijrol"],
  isExpansionRole: true,
  expansionKey: "de-adelijke-raad",
  description: `De Adelijke is geen normale rol, maar een geheime bijrol die bovenop een bestaande rol kan worden uitgedeeld.

Aan het begin van het spel bestaan er vier Adelijken. Zij zijn allemaal burgerlijk wanneer het spel start.

Iedere nacht, tussen 20:00 en 09:00, mogen de Adelijken met elkaar spreken in hun eigen geheime groepsapp.

Sterft een Adelijke, dan wijst hij een opvolger aan die zijn plaats in de Raad overneemt.
Dit mag iedere speler zijn behalve een huidige Adelijke.

De Raad mag niet bespreken wie hun opvolger wordt of suggesties doen voor mogelijke kandidaten.
De keuze blijft volledig persoonlijk.

Iedere nacht mag de Raad gezamenlijk een speler nomineren.
Sterft deze genomineerde speler tijdens dezelfde nacht of gedurende de daaropvolgende dag, dan ontvangt de Raad de volgende ochtend extra informatie over diens dood.

Het bestaan van de Adellijke Raad is volledig geheim.
Geen enkel raadslid mag de Raad benoemen of onthullen, in leven of dood.`
},
{
  id: "de-ringmeester",
  name: "De Ringmeester",
  image: "images/placeholder-expansion-role.jpg",
  alliance: "Burger",
  types: ["Uitbreiding", "Informatie"],
  isExpansionRole: true,
  expansionKey: "de-talentvolle-burgers",
  description: `Wanneer de Ringmeester in het spel aanwezig is, mag hij iedere nacht het Talent van een speler bekijken.

Hierbij ontdekt hij zowel normale als Geheime Talenten.

Daardoor is de Ringmeester vaak een van de weinige spelers die inzicht heeft in de verborgen krachten die door het dorp verspreid zijn.`
},
];
