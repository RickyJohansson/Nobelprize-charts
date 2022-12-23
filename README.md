# Nobelprize-charts

## Använda diagram:

Tillagda kommentarer i koden som beskriver tillvägagångsättet för att få datan för varje diagram, likt exemplet nedan.

Exempelvis: 
Antal pristagare inom de olika kategorierna, även tillagt extra funktionalitet som att kunna välja det år man vill se.
- Tagit hänsyn till att samma pristagare kan ha tagit nobelpris ur fler kategorier ett visst år.
- Isåfall fördelas den deltagare ut över samtliga kategorier den fick pris i vid det året.

Totalt antal pristagare som fördelas över de olika kategorierna.
- Alla pristagare hämtas, tar hänsyn till att dom kan ha vunnit i flera kategorier.
- För om dem har vunnit i fler kategorier, bör samma pristagare fördelas över dessa.
- Därför kollas det även av att det inte är samma kategori som tas med flera gånger, utan endast enskild.


* Linje-diagram
- Genomsnittlig prissumma per år.

* Stapel-diagram
- Antal pristagare inom de olika kategorierna, även tillagt extra funktionalitet som att kunna välja det år man vill se.

* Cirkel-diagram
- För fördelningen av män/kvinnor bland pristagare
- Totalt antal pristagare som fördelas över de olika kategorierna

-----------------------------------------------------------------------------------------------------------------------------

## Animeringar:

* Alfred Nobel rullar in på skärmen vid uppstart

* Snö/Stjärnor/Objekt rör sig kontinuerligt över skärmen

* Navigeringarna har knapp-tryck effekter

* Navigeringarna har även svag glow-effekt.

* 'Choose among the animations'- strängen för navigeringarna skakar till för att uppmärksamma användaren.

* Fade: Diagrammen fadar in på skärmen.

* Dive: Diagrammen dyker ner uppifrån med en bounce-effekt.

* Stairy: Diagrammen går in och positionerar sig efter några trapp-steg.

* Slide: Diagrammen glider in från sidan av skärmen.

* Roll: Diagrammen rullar roterande in från sidan av skärmen.

--------------------------------------------------------------------------------------------------------------------------------

## Animationernas grundprinciper

Exempel:

* Squash and stretch
- Knapparna minskar storlek för att få en naturligare känsla av att de trycks ned.

* Anticipation
- Alfred Nobel rullar in på skärmen i början samt snö/stjärna/objekten börjar röra sig runt gränssnittets bakgrund.
- Användaren förväntas/förbereds på att sidan kan innehålla ett antal animering.

* Straight ahead action and pose to pose
- Straight ahead action: Stairy animationen innehåller utvalda steg för att få en visuell upplevelse av att diagrammet rör sig i trapp-steg.
- Pose to pose: Animationerna innehåller start-slutvärden för att hamna på rätt positioner.

* Follow through
- Dive animationen bouncar en del vid landning, för en mer realistisk fysik än att det skulle fastna tvärt vid landningen.

* Slow in and slow out
- Olika easing funktioner har använts för animationerna för att åstadkomma mer realistiska rörelser där det finns behov av det.

* Secondary action
- 'Choose among the animations' strängen skakar till som en secondary action till den primära vilket bara är en statisk beskrivning med hjälp av text.

* Timing
- Stairy funktionen rör sig stegvis och beror funktionellt på tid/förflyttning.

* Appeal
- Den kontinuerliga animationen i bakgrunden skapar lite karisma till gränssnittet, det skapar ett mer tilltalande helhetsintryck.
- Den kan bidra till att man blir lite mer sugen på att navigera sig vidare på sidan.


