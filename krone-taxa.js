/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */
var taxameter = new Taxameter(new TaxaPris());
var cityBilTaxameter = new KroneStatistikDecorateTaxameter(taxameter,"Kurt");
var kroneStatistikTaxameter = new KroneDecorateTaxameter(cityBilTaxameter);

start(cityBilTaxameter);

