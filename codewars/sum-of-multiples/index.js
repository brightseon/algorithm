function sumMul(n, m) {
    if (n >= m) return 'INVALID';

    return Array(Math.floor(m / n))
        .fill(n)
        .reduce((a, b, i) => a + b * (i + 1), 0);
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));
