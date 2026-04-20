const roles = [
  {
    id: "de-agent",
    name: "De Agent",
    image: "images/De Agent.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `In de stilte van de nacht ziet hij wat anderen missen. Niet wat er is… maar wat er ontbreekt.

Eénmaal per spel mag hij, tussen 20:00 en 09:00, via een direct bericht aan de GM een burgerrol noemen waarvan hij denkt dat die niet in het spel zit.

Heeft hij gelijk, dan eigent hij zich deze rol toe en speelt hij vanaf dat moment verder met alle bijbehorende krachten.

Zit de rol toch in het spel, dan gebeurt er niets. Zijn kans is verkeken.

Soms zit de waarheid niet in wat je ziet… maar in wat er ontbreekt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-bommenwerper",
    name: "De Bommenwerper",
    image: "images/De Bommenwerper.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Basis"],
    description: `Een gewone dorpsbewoner zonder verborgen krachten, maar niet zonder invloed.

Met scherpe observaties en zijn stem in het burgerberaad probeert hij overdag het kwaad te ontmaskeren en ’s nachts te overleven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-burgerlijke-burger",
    name: "De Burgerlijke Burger",
    image: "images/De Burgerlijke Burger.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Basis"],
    description: `Hoewel hij zelf geen liefde kent, verbindt Cupido twee dorpsgenoten tot een onafscheidelijk koppel.

Zij winnen samen als zij als enigen overblijven, maar sterft één, dan volgt de ander direct aan liefdesverdriet.

Tussen 20:00 en 09:00 kiest Cupido in de eerste nacht zijn koppel via een persoonlijk bericht aan de GM. Sterft dit koppel en leeft Cupido nog, dan mag hij nog één laatste koppel stichten. De geliefden worden hier persoonlijk over geïnformeerd door de GM.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dictator",
    name: "De Dictator",
    image: "images/De Dictator.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Overtuigd dat zijn wil boven die van het dorp staat, mag de Dictator éénmaal per spel, zodra de eerste stem is uitgebracht, tussen 10:00 en 20:00 via een direct bericht aan de GM de stemming naar zijn hand zetten.

Zijn keuze wordt publiek gemaakt en is onomkeerbaar: de aangewezen speler gaat naar de brandstapel.

Is de Dictator die dag onderdrukt, dan kan hij zijn macht niet gebruiken. Sterft zijn doelwit diezelfde dag op een andere manier, dan geldt zijn actie alsnog als verbruikt en gaat de stemming verder met de overgebleven spelers.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dodenbezweerder",
    name: "De Dodenbezweerder",
    image: "images/De Dodenbezweerder.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Balancerend tussen leven en dood beschikt de dokter over twee serums: één dat redt en één dat doodt.

Elke nacht, tussen 20:00 en 09:00, krijgt hij van de GM te horen wie door de weerwolven is vermoord.

Alleen wanneer het slachtoffer ook daadwerkelijk sterft, ontvangt de dokter deze informatie. Overleeft de speler de aanval door andere invloeden, zoals bescherming of afwezigheid, dan krijgt de dokter niets te horen.

Heeft de dokter zijn levensserum nog, dan mag hij besluiten dit slachtoffer te redden. Gebruikt hij het niet, of heeft hij het al verbruikt, dan mag hij ervoor kiezen om met zijn gifserum een andere speler te doden, die de volgende ochtend dood wordt aangetroffen.

Van elk serum is er slechts één. Per nacht kan de dokter maximaal één serum gebruiken.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dorpsgek",
    name: "De Dorpsgek",
    image: "images/De Dorpsgek.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Altijd lachend wanneer het niet hoort en zwijgend wanneer het moet, wordt de Dorpsgek zelden serieus genomen.

Wordt hij of zij tijdens de ochtendstemming als weerwolf aangewezen, dan barst hij in lachen uit, maakt zich bekend en ontsnapt aan de dood.

De Dorpsgek blijft meespelen, maar verliest het recht om te stemmen en kan geen burgemeester meer worden. Door weerwolven of andere dodelijke middelen kan de Dorpsgek wél direct worden gedood.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-dorpsoudste",
    name: "De Dorpsoudste",
    image: "images/De Dorpsoudste.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Als oudste en wijste van het dorp heeft de dorpsoudste een sterkere levenswil dan ieder ander.

De weerwolven moeten hem daarom twee keer aanwijzen om hem te doden. Het oordeel van het dorp, de heks of de kogel van de jager maakt echter wél direct een einde aan zijn leven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-genezer",
    name: "De Genezer",
    image: "images/De Genezer.png",
    alliance: "Burger",
    types: ["Basis"],
    description: `Met oude kennis waakt de genezer over het dorp. Van 20:00 tot 09:00 kiest hij via een direct bericht aan de GM één speler die die nacht beschermd is tegen dodelijke invloeden. Hij mag zichzelf kiezen, maar nooit twee nachten achter elkaar dezelfde speler.

Zijn bescherming werkt vooral tegen de meeste aanvallen van wolven, maar kan ook verschillende andere moordpogingen tegenhouden. Toch is zijn kracht niet onfeilbaar, en tegen sommige vormen van dood helpt zij niet.

In specifieke gevallen kan zijn bescherming ook voorkomen dat de Onderduiker sterft na onderzoek. Ook wanneer de Besmettelijke Oerwolf probeert een beschermde speler te besmetten na een aanval van de weerwolven, zal deze bescherming de besmetting tegenhouden.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-grafrover",
    name: "De Grafrover",
    image: "images/De Grafrover.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `In het holst van de nacht schuimt de grafrover het kerkhof af, op zoek naar vergeten geheimen.

Tussen 20:00 en 09:00 mag hij tweemaal in het spel een graf openen door te kiezen uit alle tot dan toe overleden spelers. Voor die nacht en de daaropvolgende dag eigent hij zich de krachten van die rol toe. Kiest hij een weerwolf of weerwolf-achtige rol, dan mag hij hun krachten gebruiken, maar niet meestemmen met de weerwolven.

Welke krachten hij precies krijgt, verschilt per karakter en hangt af van wat er nog beschikbaar is; eenmalige acties werken alleen als ze nog niet zijn gebruikt. Bij twijfel kan de grafrover dit altijd navragen bij de GM.

Voor een duidelijk overzicht van welke krachten nog op te graven zijn en wat er per rol nog beschikbaar is, kan de grafrover gebruikmaken van Appendix A: Grafrover.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-husselaar",
    name: "De Husselaar",
    image: "images/De Husselaar.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Bang en aarzelend sluipt de Hypocriet door het dorp. Wat hem nog meer angst aanjaagt dan de weerwolven, is het idee dat iemand hem in het duister benadert.

Elke nacht krijgt hij te horen wie hem heeft bezocht. Zo weet hij precies welke schaduwen zich rondom hem bewegen, zelfs wanneer niemand hem overdag openlijk beschuldigt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-jager",
    name: "De Jager",
    image: "images/De Jager.png",
    alliance: "Burger",
    types: ["Basis"],
    description: `Patrouillerend door het dorp doet de jager er alles aan om de burgers te beschermen tegen de weerwolven. Met slechts één kogel in zijn geweer blijft hij vastberaden.

Komt de jager om het leven—door weerwolven, de brandstapel of zelfs liefdesverdriet—dan mag hij nog één keer toeslaan en een willekeurige, levende dorpsgenoot aanwijzen die zijn laatste kogel ontvangt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-jaloerse-ex",
    name: "De Jaloerse Ex",
    image: "images/De Jaloerse Ex.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Nog onervaren, maar leergierig. In de eerste nacht, tussen 20:00 en 09:00, kiest de Leerling via een direct bericht aan de GM één speler als zijn Meester.

Zolang zijn Meester leeft, blijft de Leerling een gewone burger. Sterft zijn Meester, dan is de Leerling uitgeleerd en neemt hij voor het eerst de rol én alliantie van zijn Meester op zich, met alle bijbehorende krachten. Vanaf dat moment gaat hij verder onder een nieuwe naam: De <Rol>'s Leerling.

Sommige rollen zijn echter te uitgebreid om over te nemen. Mocht de Leerling zo’n speler als Meester hebben gekozen, dan wordt hij bij diens dood gezien als "De Spijbelaar". Deze rollen zijn te vinden in Appendix X: De Leerling.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-onderduiker",
    name: "De Onderduiker",
    image: "images/De Onderduiker.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Diep verscholen in zijn bunker komt de Onderduiker alleen overdag naar buiten.

Zolang hij ondergedoken is, is hij beschermd tegen alle vormen van kwaad, zelfs als het Onschuldige Sletje ’s nachts zijn bunker betreedt. Wordt zijn rol echter bekeken door de Ziener of de Heks, dan slaat de paniek toe en sterft hij direct aan een fatale hartaanval.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-papegaai",
    name: "De Papegaai",
    image: "images/De Papegaai.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Gedreven door eer strijdt de samurai tegen onrecht.

Eénmaal per spel mag hij op elk moment, dag of nacht, zichzelf opofferen om samen met één gekozen speler te sterven door dit aan de GM door te geven. Deze daad is niet te stoppen.

Is zijn doelwit al tot de dood bestemd, dan krijgt hij dit te horen en moet hij direct een ander kiezen, wat alleen ’s nachts kan voorkomen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-siamese-tweeling",
    name: "De Siamese Tweeling",
    image: "images/De Siamese Tweeling.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Onzeker maar sluw fluistert de raadsheer zijn woorden door de gangen van het bestuur.

Eénmaal per spel mag hij, tijdens de nacht tussen 20:00 en 09:00, via een persoonlijk bericht aan de GM beslissen dat er de volgende dag niet één, maar twee stemrondes plaatsvinden. Zijn aarzelende stem kan zo onverwacht grote gevolgen hebben voor het lot van het dorp.

Op die dag gelden aangepaste tijden: de eerste stemming eindigt om 18:00 en de tweede om 20:00. Mocht er door bijzondere omstandigheden een derde stemming plaatsvinden, dan wordt ook 15:00 als extra stemmoment toegevoegd.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-toneelspeler",
    name: "De Toneelspeler",
    image: "images/De Toneelspeler.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Altijd verscheurd door onzekerheid en wantrouwen weigert de Twijfelaar alleen ten onder te gaan.

Wordt hij door de stemming op de brandstapel gezet, dan trekt hij in zijn laatste moment nog iemand met zich mee. De speler met het op één na hoogste aantal stemmen — de tweede plek van die dag — gaat eveneens het vuur in.

Is er sprake van een gelijke tweede plek, dan beslist de Twijfelaar zelf wie hem zal vergezellen in de vlammen.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-valse-erfgenaam",
    name: "De Valse Erfgenaam",
    image: "images/De Valse Erfgenaam.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Waar anderen rouwen, kijkt hij toe.

Elke nacht kiest hij één speler en geeft dit tussen 20:00 en 09:00 via een direct bericht aan de GM door.

Sterft deze speler die nacht, door welke oorzaak dan ook, dan grijpt de Valse Erfgenaam zijn kans. Hij neemt de rol volledig over, alsof die altijd al van hem was geweest. Alle gebruikte krachten worden hersteld en opnieuw beschikbaar.

Vanaf dat moment leeft hij verder onder een nieuwe naam: De Valse <rol>. Ook de alliantie verandert met hem mee — burger, wolf of onafhankelijke, hij wordt wat hij steelt.

Hij erft geen leven… hij neemt het.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verkenner",
    name: "De Verkenner",
    image: "images/De Verkenner.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Stil en ongezien beweegt de verkenner zich door Whatsapperdam. Altijd op de achtergrond, altijd oplettend… en zelden opgemerkt. Waar anderen slapen, dwaalt hij door het donker, op zoek naar sporen die anderen missen.

Elke nacht, tussen 20:00 en 09:00, kiest hij via een persoonlijk bericht aan de GM één speler om te volgen. Hij blijft op afstand, verscholen in de schaduwen, en ziet precies wie deze persoon die nacht heeft bezocht… of dat er niemand is geweest.

De verkenner ontvangt deze informatie rechtstreeks van de GM.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-veteraan",
    name: "De Veteraan",
    image: "images/De Veteraan.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Getekend door oorlog en achtervolgd door oude angsten leeft de veteraan in het arme dorp Whatsapperdam.

Hij heeft de dood al eens in de ogen gekeken en weigert haar nogmaals direct te ontmoeten. Wordt hij door welke oorzaak dan ook dodelijk getroffen, dan blijft hij nog één volledige dag in leven voordat zijn lot zich voltrekt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verwarde-ziener",
    name: "De Verwarde Ziener",
    image: "images/De Verwarde Ziener.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Al te lang heeft hij zich verdiept in kruiden, dampen en vreemde brouwsels. Wat begon als zoektocht naar inzicht, is ontaard in een voortdurende waas.

Aan het begin van het spel ontvangt hij de kaart en uitleg van de Ziener en gelooft hij oprecht dat hij deze gave bezit. Wat hij echter niet weet, is dat zijn visioenen vervormd en onbetrouwbaar zijn.

Zijn woorden klinken wijs, maar zijn net zo vaak gevaarlijke misleiding.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-vos",
    name: "De Vos",
    image: "images/De Vos.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Sluw en scherpzinnig sluipt de Vos door de schaduwen van Whatsapperdam, altijd speurend naar de geur van het beest.

Elke nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM drie spelers om te onderzoeken. Zit er minstens één echte weerwolf tussen, dan krijgt de Vos dat te horen. Andere rollen met duistere bedoelingen tellen niet mee. Het kunnen dus drie burgers, drie weerwolven of een gemengde groep zijn.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-vriend",
    name: "De Vriend",
    image: "images/De Vriend.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Iedereen kent hem, iedereen mag hem.

De Vriend logeert elke nacht bij iemand in het dorp en geeft tussen 20:00 en 09:00 via een direct bericht aan de GM door waar hij die nacht verblijft. Zijn gastheer krijgt te horen dat hij niet alleen is.

Doordat hij niet thuis is, hebben acties die op hem gericht zijn geen effect. Maar waar hij logeert, daar deelt hij het lot van zijn gastheer. Alles wat diegene overkomt, gebeurt ook met hem. Bescherming, onderzoek… of een bezoek van de wolven. Gaat de gastheer ten onder, dan gaat de Vriend mee.

Bij dezelfde persoon kan hij niet nog een keer logeren. Soms kiest hij er gewoon voor om een nachtje thuis te blijven.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-waakengel",
    name: "De Waakengel",
    image: "images/De Waakengel.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Altijd aan de zijde van de macht. Geen leider, maar een volger tot in de kleinste details.

De Wethouder vormt een samenwerking met de burgemeester. Dit betekent dat hij dezelfde rol én alliantie aanneemt als de burgemeester, maar zonder de kennis die daarbij hoort. Hij weet dus niet welke rol of alliantie hij heeft gekregen, en krijgt ook geen toegang tot bijvoorbeeld wolveninformatie of groepschats. Alleen door zijn eigen acties te gebruiken, kan hij proberen te achterhalen wat hij precies is.

Elke nacht kan hij de bijbehorende actie van die rol gebruiken, voor zover dat mogelijk is.

Wanneer er een nieuwe burgemeester komt, verandert de Wethouder direct mee en neemt hij opnieuw diens rol en alliantie aan.

Wordt de Wethouder zelf burgemeester bij de allereerste verkiezing, dan mag hij in plaats daarvan een rol naar keuze aannemen. Gebeurt dit later in het spel, dan blijft hij simpelweg Wethouder zonder extra krachten.

Sommige rollen zijn niet aan te nemen door de Wethouder. Deze zijn te vinden in Appendix X: De Wethouder.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-ziener",
    name: "De Ziener",
    image: "images/De Ziener.png",
    alliance: "Burger",
    types: ["Basis"],
    description: `Gezegend met heldere dromen en fluisterende visioenen draagt de ziener de zware last van kennis.

Eens per nacht, tussen 20:00 en 09:00, richt zij haar spirituele krachten op één dorpsgenoot. Door de GM persoonlijk een bericht te sturen, onthult zich diens ware identiteit. Met deze waarheid in handen moet zij bepalen wie zij kan vertrouwen… en wie het dorp in het duister wil storten.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-zondebok",
    name: "De Zondebok",
    image: "images/De Zondebok.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Wanneer het dorp geen keuze durft te maken en de stemming eindigt in een gelijke stand, wordt de zondebok opgeofferd.

In zijn laatste daad van wraak of rechtvaardigheid mag hij éénmalig bepalen wie er in de volgende ronde hun stem mogen laten horen. Wijst hij slechts één persoon aan en wordt die diezelfde nacht door de weerwolven gedood, dan blijft het dorp de volgende ochtend sprakeloos en vindt er geen stemming plaats.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-toegewijde-dienstmeisje",
    name: "Het Toegewijde Dienstmeisje",
    image: "images/Het Toegewijde Dienstmeisje.png",
    alliance: "Burger",
    types: ["Toevoegend"],
    description: `Altijd op de achtergrond, stil maar oplettend, beweegt het dienstmeisje zich door Whatsapperdam. Ze hoort meer dan ze laat blijken… en wacht geduldig op het juiste moment om haar lot te veranderen.

Tijdens de stemming van het burgerberaad mag het dienstmeisje éénmaal per spel via een direct bericht aan de GM in het geheim van rol wisselen met de speler die naar de brandstapel gaat. De veroordeelde sterft alsnog, maar wordt aangekondigd als *Het Toegewijde Dienstmeisje* in plaats van zijn oorspronkelijke rol.

Het dienstmeisje leeft verder onder de nieuwe rol en volgt vanaf dat moment diens pad: is het een weerwolf, dan sluit zij zich bij de roedel aan; is het een onafhankelijke rol, dan zet zij diens doel voort; is het een burgerrol, dan krijgt zij de bijbehorende krachten voor zover deze nog beschikbaar zijn.

Wordt het dienstmeisje zelf op de brandstapel gegooid, dan mag zij nog steeds van rol wisselen met zichzelf, al zal dit weinig veranderen… haar lot is dan al bezegeld.

Wanneer het dienstmeisje later sterft, wordt haar nieuwe rol onthuld.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-zwarte-schaap",
    name: "Het Zwarte Schaap",
    image: "images/Het Zwarte Schaap.png",
    alliance: "Burger",
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
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
    types: ["Toevoegend"],
    description: `Eens per nacht, tussen 20:00 en 09:00, gebruikt het medium zijn duistere krachten om met de doden te spreken.

Hij stuurt één vraag persoonlijk naar de GM, waarop alle overleden spelers afzonderlijk met ja of nee antwoorden. Omdat elke geest zijn eigen mening behoudt, is het antwoord zelden eenduidig. In de eerste nacht blijft het stil, want dan zijn er nog geen doden.

Na zijn dood mag het medium éénmaal, tijdens een nacht, een visioen sturen naar één levende speler. Hij schrijft dit bericht naar de GM. Het mag inhoudelijk zijn, maar geen volledig stappenplan of uitgebreide strategie bevatten. De GM bezorgt het bericht de volgende ochtend aan de gekozen speler.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "het-onschuldige-sletje",
    name: "Het Onschuldige Sletje",
    image: "images/Het Onschuldige Sletje.png",
    alliance: "Burger",
    types: ["Basis"],
    description: `Tussen 20:00 en 09:00 kiest het sletje elke dag één dorpsgenoot bij wie zij de nacht doorbrengt, om uiteraard geheel onschuldige redenen.

Zij gaat altijd naar het huis van haar gekozen persoon en blijft daar de hele nacht, ook als diegene om wat voor reden dan ook zelf niet thuis is. Ze kan er ook voor kiezen om een nacht thuis te blijven… maar wat is daar nou het leuke aan?

Wordt haar eigen huis door de weerwolven bezocht, dan is zij niet thuis en overleeft zij. Wordt echter het huis van haar gezelschap gekozen, dan deelt zij diens lot. Zij mag nooit twee keer achter elkaar bij dezelfde dorpsgenoot verblijven.`,
    isExpansionRole: false,
    expansionKey: null
  },

  {
    id: "de-fluitspeler",
    name: "De Fluitspeler",
    image: "images/De Fluitspeler.png",
    alliance: "Onafhankelijke",
    types: [],
    description: `Met zijn verleidelijke melodie verspreidt de fluitspeler zijn invloed door het dorp.

Elke nacht betovert hij twee spelers. Alle betoverden weten van elkaar dat zij betoverd zijn, omdat zij samen in een aparte, stille groeps-app worden geplaatst waarin niet gesproken mag worden. Zij weten echter niet wie de fluitspeler is.

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
    types: [],
    description: `Het conflict tussen burgers en weerwolven interesseert de pyromaan weinig; hij droomt van vuur en chaos.

Elke nacht, tussen 20:00 en 09:00, maakt hij een bewuste keuze. Ofwel kiest hij één speler om heimelijk van top tot teen met benzine te overgieten, of – als hij vindt dat het moment is aangebroken – pakt hij de aansteker en steekt hij alle eerder overgoten spelers tegelijk in brand. In de nacht dat hij besluit het vuur te ontsteken, overgiet hij niemand meer; spelers die hem die nacht bezoeken, worden dan dus niet met benzine besprenkeld.

Zodra de pyromaan het vuur ontsteekt, is de brand normaal gesproken onstuitbaar en worden alle overgoten spelers gedood. Een brandend slachtoffer kan echter wél gered worden door de genezer, mits deze op tijd bescherming heeft verleend.

Daarnaast wordt iedere speler die hem ’s nachts bezoekt, in welke vorm dan ook, automatisch eveneens met benzine overgoten, tenzij hij die nacht kiest voor het aansteken. Het overgieten kan alleen mislukken wanneer het doelwit die nacht niet thuis is.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-verloren-ziel",
    name: "De Verloren Ziel",
    image: "images/De Verloren Ziel.png",
    alliance: "Onafhankelijke",
    types: [],
    description: `De weg naar de hemel is niet voor iedereen even duidelijk, maar voor de Verloren Ziel wel.

Zijn enige doel is om in de eerste nacht of de eerste dag te sterven. Lukt hem dit, dan wint hij direct het spel. Overleeft hij deze periode, dan is hij voor eeuwig verdoemd en moet hij als straf loyaal en actief met de burgers meespelen.`,
    isExpansionRole: false,
    expansionKey: null
  },

  {
    id: "de-heks",
    name: "De Heks",
    image: "images/De Heks.png",
    alliance: "Weerwolf",
    types: ["Toevoegend"],
    description: `In dienst van het duister gebruikt de heks haar krachten tegen het dorp en ten gunste van de weerwolven.

Eénmaal per nacht, tussen 20:00 en 09:00, mag zij via een persoonlijk bericht aan de GM de identiteit van één speler inzien.

De heks speelt mee met de weerwolven en mag ’s nachts ook meestemmen over hun slachtoffer.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-kleine-wilde",
    name: "De Kleine Wilde",
    image: "images/De Kleine Wilde.png",
    alliance: "Weerwolf",
    types: ["Toevoegend"],
    description: `Als wilde jongen van het dorp kiest de Kleine Wilde bij de opening, of tijdens de eerste dag of nacht, één groot voorbeeld.

Zolang dit voorbeeld leeft, blijft hij burger, zelfs als zijn grote voorbeeld een weerwolf is. Sterft het voorbeeld, dan wordt hij direct weerwolf. Hij mag zijn grote voorbeeld wantrouwen en tijdens het burgerberaad tegen hem stemmen.

De Kleine Wilde wint met de burgers zolang hij burger is, en met de weerwolven zodra hij weerwolf wordt.`,
    isExpansionRole: false,
    expansionKey: null
  },
  {
    id: "de-onderdrukker",
    name: "De Onderdrukker",
    image: "images/De Onderdrukker.png",
    alliance: "Weerwolf",
    types: ["Toevoegend"],
    description: `Met harde hand houdt de Onderdrukker Whatsapperdam in zijn greep. Hij staat aan de kant van de weerwolven en gebruikt zijn macht om het dorp het zwijgen op te leggen.

Eens per nacht, tussen 20:00 en 09:00, kiest hij één speler die de volgende dag volledig wordt onderdrukt, maar nooit twee nachten achter elkaar dezelfde persoon.

Deze speler mag in geen enkele groepsapp spreken en geen stem uitbrengen, maar mag wél zijn krachten gebruiken. Communicatie is alleen toegestaan via emoji-reacties en gebarentaal.

De Onderdrukker stemt ’s nachts mee met de weerwolven over wie er wordt vermoord.

De Onderdrukker mag ook zichzelf of een medewolf onderdrukken om verdenking af te wenden. Een onderdrukte speler is dus niet automatisch onschuldig.`,
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
  types: [],
  description: `Als een schaduw verspreidt de raaf zijn plaag door Whatsapperdam.

Elke nacht, tussen 20:00 en 09:00, kiest hij via de GM één speler om te besmetten.

Iedere besmette speler die iemand bezoekt, besmet die persoon ook. Daarnaast wordt iedereen die de Besmettelijke Raaf zelf bezoekt die nacht ook besmet. Spelers die door de Raaf besmet raken, kunnen pas vanaf de volgende nacht anderen besmetten wanneer zij iemand bezoeken.

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
  types: [],
  description: `Er gaan al jaren verhalen rond in Whatsapperdam over twee zussen die ooit uit elkaar zijn gehaald. Nu bewegen zij zich weer in hetzelfde dorp, zonder te weten dat de ander er ook is.

Twee spelers ontvangen deze rol, maar kennen elkaars identiteit niet.

Elke nacht tussen 20:00 en 09:00 kiezen zij via een direct bericht aan de GM één speler. Kiezen zij in dezelfde nacht dezelfde speler, dan wordt dit slachtoffer de volgende ochtend dood aangetroffen.

De Gezusters mogen onder geen enkel beding duidelijk maken dat zij deze rol hebben. Zij moeten er altijd vanuit gaan dat zij een andere rol zijn en mogen daar net als iedereen naar bluffen.

Wanneer één van de Gezusters ’s nachts per toeval de ander bij naam kiest, krijgt alleen zij van de GM te horen dat zij haar zus heeft gevonden. De andere zus weet dit nog niet. Vanaf dat moment mag zij proberen subtiel te seinen dat zij haar heeft ontdekt, maar wees voorzichtig: als het dorp het eerder doorheeft dan haar zus, kan dat hun einde betekenen. De gebruikelijke regels over wat je wel en niet mag zeggen blijven gelden.

Ook nadat één van de twee haar zus heeft gevonden, blijven beide Gezusters elke nacht een speler kiezen zoals normaal. Dit betekent dat zij nog steeds kunnen proberen dezelfde speler te kiezen om zo samen een slachtoffer te maken.

De Twee Gescheiden Gezusters winnen wanneer zij elkaar hebben gevonden en beiden nog in leven zijn wanneer het spel eindigt.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-witte-weerwolf",
  name: "De Witte Weerwolf",
  image: "images/De Witte Weerwolf.png",
  alliance: "Onafhankelijke",
  types: [],
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
  types: ["Toevoegend"],
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
  types: ["Toevoegend"],
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
  types: ["Toevoegend"],
  description: `In het donker glinstert hij. Subtiel. Bijna betoverend. Maar wat hij achterlaat… klopt niet.

Elke nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM één burger uit. Diegene krijgt die nacht een vreemd geurtje… iets magisch, iets dat niet thuishoort in het dorp.

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
  types: ["Toevoegend"],
  description: `Gedreven door instinct en een ontembare drang tot vergelding zwerft de Jachtwolf door het dorp. Hij wacht geduldig op zijn moment, altijd klaar om toe te slaan.

Wordt hij gedood, dan laat hij het daar niet bij. In zijn laatste adem grijpt hij één levende speler en sleurt die met zich mee de dood in. Eén naam. Eén slachtoffer. Geen ontsnappen.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-slager",
  name: "De Slager",
  image: "images/De Slager.png",
  alliance: "Weerwolf",
  types: ["Toevoegend"],
  description: `Een wolf met verfijnde smaak; de Slager verkiest voorbereiding boven haast.

Om de nacht, tussen 20:00 en 09:00, kiest hij via een direct bericht aan de GM één burger om te marineren. Blijft deze speler die nacht én de daaropvolgende dag volledig onberoerd door welk bezoek dan ook, dan is de marinade geslaagd en wordt hij de volgende nacht als extra maal opgegeten, naast de normale prooi van de weerwolven. De nacht daarna mag de Slager weer een nieuwe speler marineren.

Wordt de gekozen speler in de marineringsnacht of de dag erna wél bezocht, dan mislukt de marinade. In dat geval kan de Slager de eerstvolgende nacht opnieuw iemand kiezen om te marineren.

Verder stemt de Slager gewoon mee met de weerwolven en speelt hij volledig aan hun zijde.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-verdoemde",
  name: "De Verdoemde",
  image: "images/De Verdoemde.png",
  alliance: "Weerwolf",
  types: ["Toevoegend", "Onzeker"],
  description: `Onopvallend leeft hij tussen de burgers van Whatsapperdam, ogenschijnlijk niet anders dan de rest. Maar diep vanbinnen draagt hij een lot dat al lang geleden is bezegeld. Hij weet het zelf niet… maar iets in hem wacht.

Wanneer de weerwolven hem ’s nachts bezoeken, sterft hij niet. In plaats daarvan ontwaakt zijn ware aard en sluit hij zich bij hen aan, alsof hij er altijd al bij hoorde.

Wordt hij echter op een andere manier gedood, dan blijft zijn vloek ongebruikt en sterft hij zoals ieder ander.`,
  isExpansionRole: false,
  expansionKey: null
},
{
  id: "de-welp",
  name: "De Welp",
  image: "images/De Welp.png",
  alliance: "Weerwolf",
  types: ["Toevoegend"],
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
  types: ["Toevoegend"],
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
  types: ["Toevoegend"],
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
  types: ["Toevoegend"],
  description: `Deze wolf is niet geboren om te volgen, maar om te leiden. Al van jongs af aan draagt hij de drang in zich om boven iedereen uit te stijgen en ooit het dorp naar zijn hand te zetten.

Zijn grote droom is om burgemeester te worden, al is hij niet verplicht zichzelf kandidaat te stellen. Bereikt hij die macht eenmaal, dan zal hij die met alles wat hij heeft proberen vast te houden.

Alleen wanneer de Wolvenmeester burgemeester is, kan hij niet worden verbrand. Wordt hij in die positie op de brandstapel gegooid, dan weigert het vuur hem te nemen en overleeft hij de executie.

De burgers zullen dus een andere manier moeten vinden om van hem af te komen...`,
  isExpansionRole: false,
  expansionKey: null
}
];