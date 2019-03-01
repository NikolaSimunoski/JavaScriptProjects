function Combatant() {
 
    this.attack = function(target, damage) {
        console.log(this.name +  " has attacked " + target.name + " for " + damage + " damage")
        target.receiveDamage(damage);
    }
    
    this.receiveDamage = function(damage) {
        this.health -= damage;
        this.checkLife();
    }
}

Combatant.prototype = new Being();
