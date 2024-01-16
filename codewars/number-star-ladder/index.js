function pattern(n) {
    return [
        '1',
        ...Array(n - 1)
            .fill(1)
            .map((n, i) => `1${'*'.repeat(n + i)}${n + i + 1}`)
    ].join('\n');
}

console.log(pattern(3));
console.log(pattern(7));
console.log(pattern(20));
