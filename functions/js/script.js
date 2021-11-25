let myStr = "lol"; //dit is een variabele van het datatype string, waarom?  ______het maakt hem een karakter________ vul je antwoord in op de lijn
let myInt = 6; //dit is een variabele van het datatype ______integer______ waarom? ______Het wordt gebruikt voor getallen______ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _____Zo worden variabelen aangemaakt._______ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ___Function_________ de waarde noemen we een Attribute__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ___zin____ op het scherm met de tekst ____dit is een variabele van het datatype string_____ deze tekst staan op regel ___1___ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____nee______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _________Als je nerop klikt in je HTML, Dan veranderd het plaatje van foto__________ en waar wordt deze in je HTML aangeroepen? ______Bij images______ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _____Je veranderd dan show met de getiepte woord.______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _________Het gebruikt de ID van de naam__________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _________Ze veranderen van foto's__________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______32_______ en wanneer wordt deze aangeroepen ___________ vul je antwoord in op de lijn

    let antwoord = myInt * getal; //waar komt de waarde van myInt vandaan _______Van de getal 3_______ en waar komt de waarde van getal vandaan? ______Van integer______ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _________retourneert het eerste element dat overeenkomt met een opgegeven CSS-selector in het document.__________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? __________Er wordt een som berekent___________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? __________Ik krijg een ander berekening___________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______regel 38________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _______this_______ en waar komt de waarde van kleur vandaan? ______color______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? _____fontsize_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? __________De tekst krijgt een functie___________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven _____Het gaat een alarm melden______ en wanneer gebeurt dat _____Als ik google open maak_____ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _________Ik krijgt een andere melding__________ vul je antwoord in op de lijn.