
class killer {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    attack(survivor){
        let action = Math.random()
        if (action <= survivor.characteristic.attack ) {
            this.health-=10
            console.log(survivor.name, 'attaque', this.name)
        } else if (action <= survivor.characteristic.attack + survivor.characteristic.die){
            survivor.alive = false
            console.log(this.name,'a tué', survivor.name)
        } else {
            this.health-=15
            survivor.alive = false
            console.log(survivor.name,'a été tué par',this.name, 'mais a réussi à blesser', this.name, 'avant de mourir' )
        }
    }
}

let tueur = new killer('Jason', 100);

class characteristic {
    constructor(name, attack, die, die_attack){
        this.name = name;
        this.attack = attack,
        this.die = die,
        this.die_attack = die_attack
    }
}

let nerd = new characteristic('Nerd', 0.3, 0.6, 0.1)
let aventurer = new characteristic('Aventurer', 0.5, 0.2, 0.3)
let sporty = new characteristic('Sporty', 0.5, 0.1, 0.4)
let dong = new characteristic('The Dong', 0.3, 0.2, 0.5)
let lucky = new characteristic('Lucky', 0.6, 0.1, 0.3)

let name_characteristic = [nerd,aventurer,sporty,dong,lucky]
let name_table = ["Bernadette", "Francis", "Lucas", "Patricia", "Nicolas", "Margarette", "Bob", "Sam", "Henrique"]

class survivor {
    constructor(name, characteristic){
        this.name = name;
        this.characteristic = characteristic;
        this.alive = true;
    }
}

let survivor1 = new survivor(name_table[Math.floor(Math.random()*name_table.length)],name_characteristic[Math.floor(Math.random()*name_characteristic.length)])
let survivor2 = new survivor(name_table[Math.floor(Math.random()*name_table.length)],name_characteristic[Math.floor(Math.random()*name_characteristic.length)])
let survivor3 = new survivor(name_table[Math.floor(Math.random()*name_table.length)],name_characteristic[Math.floor(Math.random()*name_characteristic.length)])
let survivor4 = new survivor(name_table[Math.floor(Math.random()*name_table.length)],name_characteristic[Math.floor(Math.random()*name_characteristic.length)])
let survivor5 = new survivor(name_table[Math.floor(Math.random()*name_table.length)],name_characteristic[Math.floor(Math.random()*name_characteristic.length)])

let survivor_group = [survivor1,survivor2,survivor3,survivor4,survivor5]


function check_atleast_survivor_alive(survivors) {
    let one_alive = false
    survivors.forEach(survivor => {
        if (survivor.alive) {
            one_alive = true
        }
    });
    return one_alive
}

function check_all_dead(survivors){
    let all_dead = true
    survivors.forEach(survivor => {
        if (survivor.alive) {
            all_dead = false
        }
    });
    return all_dead
}

function list_dead(survivors) {
    let list_result = ""
    survivors.forEach(survivor => {
        if (!survivor.alive) {
            list_result += survivor.name + ' ' 
        }
    });
    return list_result
}

while (tueur.health > 0 && check_atleast_survivor_alive(survivor_group)) {
    do{
        var random_survivor = survivor_group[Math.floor(Math.random()*survivor_group.length)]
    } while (!random_survivor.alive)

    tueur.attack(random_survivor)

    if(tueur.health <= 0){
        console.log(tueur.name, 'est mort')
        console.log('Les survivants ont gagné mais RIP à', list_dead(survivor_group))
    }

    if(check_all_dead(survivor_group)){
        console.log(tueur.name, 'a tué tout le monde')
    }
}