const enemy = [];
var deadPlayer = false;
var deadEnemy = false;

class character {
    constructor (name, strenght, armor, health){
        this.name = name;
        this.strenght = strenght;
        this.armor = armor;
        this.health = health;
    }
    getIsDead = function(){
        if (this.health <= 0){
            this.health = 0;
            return(true);
        }
        else return(false);
    }
    receiveDamage = function(damageRecieved){
        this.health -= damageRecieved;
    }
    attack = function(target){
        if (Math.random() > this.strenght / target.armor)
        return(0);
        else return(this.strenght);
    }
}

var player = new character("Ferko", 20,28,250);
enemy.push(new character("Zombie",15,10,200));
enemy.push(new character('Ghost',20,20,70));
enemy.push(new character('Slime',10,25,240));
enemy.push(new character('Skeleton',10,22,120));


function fight(){
    for (let i = 0; i < enemy.length; i++){
        let round = 1;
        while(deadPlayer == false){
            console.log("Round: " + round);
            enemy[i].receiveDamage(damageDealt = player.attack(enemy[i]));
            deadEnemy = enemy[i].getIsDead();
            if (damageDealt != 0){
                console.log(player.name + " dealt " + damageDealt);
            }
            else console.log(player.name + " missed");
            if (deadEnemy == true){
                console.log(enemy[i].name + " died");
                break;
            }
            else console.log(enemy[i].name + "'s health:" + enemy[i].health);
            player.receiveDamage(damageDealt = enemy[i].attack(player));
            deadPlayer = player.getIsDead();
            if (damageDealt != 0){
                console.log(enemy[i].name + " dealt " + damageDealt);
            }
            else console.log(enemy[i].name + " missed");
            console.log(player.name + "'s health:" + player.health);
            round++;
        }
    }
}
fight();