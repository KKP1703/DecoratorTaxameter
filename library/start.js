/**
 * 
 * @param {Taxameter} taxameter 
 */
function start(taxameter) {
    document.addEventListener("DOMContentLoaded", () => {
        const hovedElement = document.createElement("div");
        hovedElement.classList.add("taxameter");

        function nyLabel(tekst) {
            const div = document.createElement("div");

            const label = document.createElement("label");
            label.innerText = tekst;

            const indreDiv = document.createElement("div");

            div.appendChild(label);
            div.appendChild(indreDiv);

            hovedElement.appendChild(div);

            return indreDiv;
        }

        function nyKnap(tekst, klasse) {
            const div = document.createElement("div");

            div.innerText = tekst;
            div.classList.add("knap", klasse);

            hovedElement.appendChild(div);

            return div;
        }

        const elementer = {
            firmaNavn: nyLabel("Firmanavn"),
            prisModelNavn: nyLabel("Prisliste"),
            tid: nyLabel("Tid"),
            afstand: nyLabel("Km"),
            pris: nyLabel("Pris"),
            start: nyKnap("Start", "start"),
            slut: nyKnap("Slut", "slut")
        };

        document.body.appendChild(hovedElement);


        let hastighed = 0;

        setInterval(() => {
            if (taxameter.turStartetTidspunkt === undefined) {
                hastighed = 0;
            } else {

                const r = Math.random();

                if (hastighed === 0) {
                    if (r < 0.2) {
                        hastighed = 5;
                    }
                } else if (r < 0.1) { // 10% for at møde et lyskryds
                    hastighed = 0;
                } else if (r < 0.8) { // 70% for speeder
                    hastighed += Math.random() * 5;
                } else { // 20% for brems
                    hastighed *= 0.7;
                }

                hastighed = Math.max(hastighed, 0);
                hastighed = Math.min(hastighed, 80);

                taxameter.koer(hastighed/50);
            }
        }, 500);

        setInterval(() => {
            if (taxameter.turStartetTidspunkt === undefined) {
                elementer.tid.innerText = '0:00';
            } else {
                const tidGaaet = Math.floor((new Date() - taxameter.turStartetTidspunkt) / 1000);
                const sekunder = ("00" + tidGaaet % 60).slice(-2);
                const minutter = Math.floor(tidGaaet / 60);
                elementer.tid.innerText = minutter + ":" + sekunder;
                elementer.firmaNavn.innerText = taxameter.prisModelNavn();
            }

            elementer.firmaNavn.innerText = taxameter.firmaNavn();
            elementer.prisModelNavn.innerText = taxameter.prisModelNavn();
            elementer.afstand.innerText = Math.round(taxameter.afstand*1000)/1000;
            elementer.pris.innerText = Math.round(taxameter.beregnPris()*100)/100 + " DKK";
        }, 500);

        function opdater() {
            if (taxameter.turStartetTidspunkt === undefined) {
                hovedElement.classList.remove("startet");
            } else {
                hovedElement.classList.add("startet");
            }
        }

        elementer.start.addEventListener("click", () => {
            taxameter.startTur();
            hastighed = 5;
            opdater();
        });
        elementer.slut.addEventListener("click", () => {
            taxameter.slutTur();
            alert("Det bliver: " + taxameter.beregnPris() + " DKK");
            opdater();
        });
    });
}