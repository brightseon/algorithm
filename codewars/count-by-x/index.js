function countBy(x, n) {
    return Array(n)
        .fill(0)
        .map((_, idx) => (idx + 1) * x);
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
