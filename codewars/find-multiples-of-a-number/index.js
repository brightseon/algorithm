function findMultiples(integer, limit) {
    return new Array(Math.floor(limit / integer)).fill(0).map((_, i) => (i + 1) * integer);
}

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));
console.log(findMultiples(4, 27));
console.log(findMultiples(11, 54));
