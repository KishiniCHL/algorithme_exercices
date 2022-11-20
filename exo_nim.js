class player {
    constructor(name, tour){
        this.name = name;
        this.tour = tour;
    }
}

let joueur1 = new player('Joueur 1', true)
let joueur2 = new player('Joueur 2', false)

var nb=0;
var jeu=true
var container = document.getElementById('container')
var allumette_container = document.getElementById('alumette_container')
var turn = document.getElementById('who_plays')

function return_value(){
    var nb = document.getElementById("nb").value;    

    if(nb<=3 || isNaN(nb)){
        alert("Veuillez entrer un chiffre supérieur à 3");
    }else{
        create_button()
        for (var i=0; i<nb;i++){
            duplicate_allumette();
        }
        jeu=true;
        turn.innerHTML="on commence"
    }
    
}

function duplicate_allumette() {
    const node = document.getElementById("allumette");
    const clone = node.cloneNode(true);
    allumette_container.appendChild(clone);
}

function create_button(){
    container.innerHTML="<button type='button' onclick='remove_allumette(nbr_removed)'>Enlever</button> <input type='text' id='nbr_removed' name='nbr_removed' value=''/><label> allumette(s)</label>"
}

function remove_allumette(){
    var nb = document.getElementById("nb").value;
    var get_removed= document.getElementById("nbr_removed");
    var nbr_removed = parseInt(get_removed.value)

    if(nbr_removed>3 || nbr_removed<=0 || isNaN(nbr_removed)){
        alert("Veuillez entrer un chiffre entre 0 et 3 et supérieur au nombre d'allumettes restantes");
    }else if (nbr_removed>nb){
        alert("Veuillez entrer un chiffre inferieur au nombre d'allumettes restantes");
    } else{
        jeu=!jeu;
        if (jeu==true) {
            console.log(joueur1.name, 'joue')
            turn.innerHTML="Joueur 1 joue"
        }else{
            console.log(joueur2.name, 'joue')
            turn.innerHTML="Joueur 2 joue"
        }
        
        for (var x = nbr_removed-1; x >= 0; x--) {
            allumette_container.removeChild(allumette_container.childNodes[x]);
        }
        nb=nb-nbr_removed;
        console.log(nb)
        console.log(nbr_removed)
    }

    var nbr_removed = document.getElementById("nbr_removed").value="";
    
    if(nb===0){ 
        turn.innerHTML=""
        jeu=!jeu;
        if (jeu==true) {
            alert("Le joueur 1 gagne ! Rechargez la page pour jouer à nouveau");
        }else{
            alert("Le joueur 2 gagne ! Rechargez la page pour jouer à nouveau");
        }
    }
};

