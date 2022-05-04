function findNextSquare(sq) {
    const num = Math.sqrt(sq);
    if (!Number.isInteger(num)) return -1;

    return Math.pow(num + 1, 2);
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));
console.log(findNextSquare(155));
console.log(findNextSquare(342786627));
