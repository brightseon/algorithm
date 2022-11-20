function peopleWithAgeDrink(old) {
    let drink = 'whisky';

    if (old < 14) drink = 'toddy';
    else if (old < 18) drink = 'coke';
    else if (old < 21) drink = 'beer';

    return `drink ${drink}`;
}

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(14));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(22));
console.log(peopleWithAgeDrink(21));
