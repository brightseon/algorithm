function sumTriangularNumbers(n) {
    if (n < 1) return 0;

    return Array(n - 1)
        .fill(2)
        .reduce((a, b, i) => [...a, a[a.length - 1] + b + i], [1])
        .reduce((a, b) => a + b, 0);
}

console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(34));
console.log(sumTriangularNumbers(-291));
console.log(sumTriangularNumbers(943));
console.log(sumTriangularNumbers(-971));
