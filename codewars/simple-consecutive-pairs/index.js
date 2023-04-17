function pairs(ar) {
    return Array(Math.floor(ar.length / 2))
        .fill(1)
        .reduce((a, b, i) => {
            const idx = i * 2;

            if (Math.abs(ar[idx] - ar[idx + b]) === 1) return a + 1;

            return a;
        }, 0);
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]));
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]));
console.log(pairs([73, 72, 8, 9, 73, 72]));
