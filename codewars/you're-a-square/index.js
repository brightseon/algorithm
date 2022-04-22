var isSquare = function (n) {
    return n === Math.pow(Math.floor(Math.sqrt(n)), 2);
};

// --------------------------------------------------------
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
// }

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(22));
