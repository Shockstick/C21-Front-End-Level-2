let myStr = "Welkom bij mijn andere site!"; 
let myInt = 0; 

function getName(naam){ 
    alert(naam); 
}

function hideMe(){ 
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block";
    document.getElementById("tell").style.display = "none"; 
}

function show(){ 
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "none";
    document.getElementById("tell").style.display = "block"; 

}

function tell(){ 
    document.getElementById("hide").style.display = "block"; 
    document.getElementById("show").style.display = "none";
    document.getElementById("tell").style.display = "none"; 
}

function rekenen(getal){
    let antwoord = myInt + getal; 
    document.querySelector(".som").innerHTML = antwoord;      
}

function setColor(element, kleur, size){ 
    element.style.color = kleur; 
    element.style.fontSize = size; 
}

getName(myStr);
