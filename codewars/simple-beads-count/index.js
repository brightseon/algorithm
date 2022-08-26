function countRedBeads(n) {
    return Math.max((n - 1) * 2, 0);
}

console.log(countRedBeads(0));
console.log(countRedBeads(1));
console.log(countRedBeads(3));
console.log(countRedBeads(5));
