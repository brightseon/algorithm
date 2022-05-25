function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(0));
console.log(roundToNext5(2));
console.log(roundToNext5(3));
console.log(roundToNext5(12));
console.log(roundToNext5(21));
console.log(roundToNext5(30));
console.log(roundToNext5(-2));
console.log(roundToNext5(-5));
