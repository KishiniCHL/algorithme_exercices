let music = ["Anissa", "song1", "song2", "song3", "song4"]

class character {
    constructor(name, mentalhealth){
        this.name = name;
        this.mentalhealth = mentalhealth;
    }
}

class trajet {
    constructor (radio, feux, changementsTaxi){
        this.radio = radio;
        this.feux = feux;
        this.changementsTaxi = changementsTaxi;
    }
}

// var rand = Math.floor(Math.random()*music.length);
// var rValue = music[rand];

let route = new trajet(rValue, 30, 0);

let start = new character ("John",10);

for (let i = 0; i <= route.feux; i++) {
    var rand = Math.floor(Math.random()*music.length);
    var rValue = music[rand];
    console.log('encore', route.feux-i, 'feux et il y a', rValue, 'à la radio')
    if (rValue === 'Anissa') {
        start.mentalhealth--;
        console.log('oh nn du Wejdene. On change de taxi. Il vous reste ', start.mentalhealth, 'pv')
        var changer = ++route.changementsTaxi;
        if (start.mentalhealth === 0){
            console.log('EXPLOSION')
            break
        }
    }
    else{
        // console.log('Tout va bien')
    }
}

if(start.mentalhealth > 0){
    console.log('Vous avez fini la route avec', route.changementsTaxi, 'changement de taxi')
}