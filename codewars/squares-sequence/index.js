function squares(x, n) {
    if (n <= 0) return [];

    return Array(n - 1)
        .fill(x)
        .reduce((a, b) => [...a, Math.pow(a[a.length - 1], 2)], [x]);
}

console.log(squares(2, 5));
console.log(squares(3, 3));
console.log(squares(5, 3));
console.log(squares(10, 4));
console.log(squares(2, 0));
console.log(squares(2, -5));
