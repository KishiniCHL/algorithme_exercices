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

for (let i = 0; i <= 30; i++) {
    var rand = Math.floor(Math.random()*music.length);
    var rValue = music[rand];
    console.log('encore', route.feux--, 'feux')
    console.log(rValue, 'à la radio')
    if (rValue === 'Anissa') {
        var vie_restante = start.mentalhealth --;
        console.log('oh nn du Wejdene.')
        var changer = route.changementsTaxi++;
        console.log('On change de taxi')
        if (start.mentalhealth === 0){
            console.log('EXPLOSION')
            break
        }
    }
    else{
        console.log('Tout va bien')
    }
}