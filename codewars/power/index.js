function numberToPower(number, power) {
    return Array(power)
        .fill(number)
        .reduce((a, b) => a * b, 1);
}

console.log(numberToPower(3, 2));
console.log(numberToPower(2, 3));
console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0));
console.log(numberToPower(10, 6));
