
class killer {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }
}

let tueur = new killer('Jason', 100);

class characteristic {
    constructor(name, action){
        this.name = name;
        this.action = action
    }
}

let action =  ['Die', 'Attack', 'Attack and die']
var rand_action= Math.floor(Math.random()*action.length);
var rValue_action = action[rand_action];

// function randomChoice(p) {
//     let rnd = p.reduce( (a, b) => a + b ) * Math.random();
//     return p.findIndex( a => (rnd -= a) < 0 );
// }

// let result = randomChoice([0.10, 0.15, 0.25, 0.50]);


// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

let name_characteristic = ["Nerd", "Aventurer", "Sporty", "Smart", "Lucky"]
var rand_characteristic = Math.floor(Math.random()*name_characteristic.length);
var rValue = name_characteristic[rand_characteristic];

if (rValue === "Lucky") {
    console.log("c lucky")
    var character_lucky = new characteristic(rValue, rValue_action);
    console.log(character_lucky)
    if (rValue_action === 'Attack'){
        console.log('ATTAQUE')
    }
    if(rValue_action === 'Die') {
        console.log('FINITO') 
    }else{
        console.log('boh')
    }
}
if(rValue === "Aventurer"){
    console.log("oop")
}


let name_table = ["Bernadette", "Francis", "Lucas", "Patricia", "Nicolas", "Margarette", "Bob", "Sam"]

class survivor {
    constructor(name_survivor, characteristic_survivor){
        this.name_survivor = name_survivor;
        this.characteristic_survivor = characteristic_survivor;
    }
}