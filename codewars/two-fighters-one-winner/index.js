function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    const f1Count = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    const f2Count = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    if (f1Count === f2Count) return firstAttacker;

    return f1Count < f2Count ? fighter1.toString() : fighter2.toString();
}

console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'));
console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'));
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harry'));
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harald'));
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Jerry'));
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Harald'));
console.log(declareWinner(new Fighter('Max', 42, 98), new Fighter('Lew', 167, 61), 'Max'));
