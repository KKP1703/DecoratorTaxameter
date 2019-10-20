# Taxameter.js
## En opgave i Strategy Pattern

### Opgave 1
KroneTaxa skal have udviklet et nyt stykke software til at beregne prisen på en taxa tur, og har bedt dig om hjælp. De har allerede et gammelt system til at vise data'en og interagere med systemet - altså skal de bare have hjælp til en lille del af systemet.

Deres prismodel er rimelig simpel: 8,50 kr/km + 6,25 kr/min + 39 kr

Implementér (dvs. færdiggør, udfyld de tomme funktioner) klassen Taxameter.js, herunder KroneTaxas prismodel.

### Opgave 2
KroneTaxa vil også gerne bruge systemet til deres store vogne. Her er prisen: 12 kr/km + 6,67 kr/min + 69 kr.

Lav filerne krone-taxa-stor-vogn.js og krone-taxa-stor-vogn.html, og lav Taxameter.js om så den kan genbruges til både normale og store vogne. (Hint: Strategy Pattern. )


### Opgave 3
KroneTaxas konkurrent CityBilen vil gerne købe dit system. De bruger samme brugergrænseflade, så det er lige til at sætte i deres biler. Dog er deres priser en smule anderledes: 4,50 kr pr. påbegyndt km + 7 kr pr. minut, og der er en minimumspris på 75 kr.

Lav filerne city-bilen.js og city-bilen.html, og lav Taxameter.js om så den kan genbruges til alle 3 systemer.


### Opgave 4
KroneTaxas vil gerne være mere konkurrencedygtige på korte ture med normale vogn, og vil gerne ændre deres km pris til:
5 kr for den første km, derefter 9 kr/km.

Lav de nødvendige ændringer i krone-taxa.js


### Bonus opgave 1 (overkommelig)
Udvid Taxameter.js med et firmanavn og en tekstbeskrivelse af prismodellen. Dette kræver at start.js bliver ændret en smule.


### Bonus opgave 2 (svær)
Elin Rejser har fået adgang til alle prismodellerne, og deres prismodel er altid den billigste af de andre modeller.

Lav filerne elin-rejser.js og elin-rejser.html og genbrug så meget som mulig kode fra de andre systemer uden at have duplikeret kode.