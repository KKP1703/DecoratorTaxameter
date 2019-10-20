# Taxameter.js
## Nu også en opgave i Decorator Pattern

Følgende opgaver handler om Decorator Pattern. Husk at en decorator altid startes som en klasse der kan det samme som det den dekorerer. F.eks.:
```javascript
class MinKlasse {
    gørNoget() {
        //...
    }
}

class MinKlasseDecorator {
    constructor(minKlasse) {
        this.minKlasse = minKlasse;
    }

    gørNoget() {
        return this.minKlasse.gørNoget();
    }
}
```

### Opgave 1
Hvis ikke allerede du har løst opgaverne i README.md, løs disse. Hvis ikke de er løst med strategy pattern, kan denne opgave godt løses alligevel, men der opfordres til at bruge strategy pattern.

### Opgave 2

Jeg har lavet en decorator som siger at når turen starter er chauførren optaget og når turen slutter er chauførren ledig igen.

### Opgave 3

Jeg har lavet en decorator som holder øje med om turene er over eller under 1 km.

Jeg har også laver en var som beregner hvor mange procent af turene er under 1 km.

### Bonus opgave

Jeg har lavet en decorator som gør at hvis turen er under 2 km så returnere den ikke noget.