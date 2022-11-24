function noOdds(values) {
    return values.filter((value) => value % 2 === 0);
}

console.log(noOdds([0, 1]));
console.log(noOdds([0, 1, 2, 3]));
console.log(noOdds([0, 2, 4, 6, 8, 10]));
console.log(noOdds([-1, -3, -5, -7, -9]));
console.log(noOdds([2, 4, 8, 6, 0]));
console.log(noOdds([]));
