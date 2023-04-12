const sum = (arr) => arr.reduce((a, b) => a + b, 0);

function lostSheep(friday, saturday, total) {
    return total - (sum(friday) + sum(saturday));
}

console.log(lostSheep([1, 2], [3, 4], 15));
console.log(lostSheep([3, 1, 2], [4, 5], 21));
console.log(lostSheep([5, 1, 4], [5, 4], 29));
console.log(lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300));
console.log(lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1], 255));
console.log(lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355));
console.log(lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30));
console.log(lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89));
console.log(lostSheep([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44));
console.log(lostSheep([], [], 15));
