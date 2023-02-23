function multiples(m, n) {
    return Array(m)
        .fill(n)
        .map((v, i) => v * (i + 1));
}

console.log(multiples(3, 5));
