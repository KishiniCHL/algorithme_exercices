class player {
    constructor(name, tour){
        this.name = name;
        this.tour = tour;
    }
}

let joueur1 = new player('Joueur 1', true)
let joueur2 = new player('Joueur 2', false)

let nb=0;
var jeu=true
var container = document.querySelector('#container')
let allumette_container = document.querySelector('#alumette_container')
let turn = document.querySelector('#who_plays')
let left = document.querySelector('#left')

function return_value(){
    for (let i = 0; i < nb; i++) {
        //si on remet une valeur dans l'initialisation on reset avec la nouvelle valeur
        allumette_container.removeChild(allumette_container.children[0]);    
    }
    nb = document.querySelector("#nb").value;    

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
    const node = document.querySelector("#allumette");
    const clone = node.cloneNode(true);
    allumette_container.appendChild(clone);
}

function create_button(){
    container.innerHTML="<button type='button' onclick='remove_allumette(nbr_removed)'>Enlever</button> <input type='text' id='nbr_removed' name='nbr_removed' value=''/><label> allumette(s)</label>"
}

function remove_allumette(){
    var get_removed= document.querySelector("#nbr_removed");
    var nbr_removed = parseInt(get_removed.value)

    if(nbr_removed>3 || nbr_removed<=0 || isNaN(nbr_removed)){
        alert("Veuillez entrer un chiffre entre 0 et 3 et supérieur au nombre d'allumettes restantes");
    }else if (nbr_removed>nb){
        alert("Veuillez entrer un chiffre inferieur au nombre d'allumettes restantes");
    } else{
        jeu=!jeu;
        if (jeu==true) {
            turn.innerHTML="Joueur 1 joue"
        }else{
            turn.innerHTML="Joueur 2 joue"
        }
        for (var x = nbr_removed; x >= 1; x--) {
            allumette_container.removeChild(allumette_container.childNodes[1]);
        }
        nb=nb-nbr_removed;
        console.log(nb)
    }

    left.innerHTML="Il reste "  + nb +" allumette(s)"
    var nbr_removed = document.querySelector("#nbr_removed").value="";
    
    if(nb===0){ 
        turn.innerHTML=""
        jeu=!jeu;
        if (jeu==true) {
            alert("Le joueur 1 gagne ! Entrez une nouvelle valeur pour rejouer");
        }else{
            alert("Le joueur 2 gagne ! Entrez une nouvelle valeur pour rejouer");
        }
    }
};

