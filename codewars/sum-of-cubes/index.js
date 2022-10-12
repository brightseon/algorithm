function sumCubes(n) {
    return Array(n)
        .fill(1)
        .reduce((a, b, i) => a + Math.pow(b + i, 3), 0);
}

console.log(sumCubes(2));
console.log(sumCubes(3));
