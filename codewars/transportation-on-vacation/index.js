function rentalCarCost(d) {
    if (d < 3) return 40 * d;
    if (d < 7) return 40 * d - 20;

    return 40 * d - 50;
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
console.log(rentalCarCost(9));
console.log(rentalCarCost(10));
