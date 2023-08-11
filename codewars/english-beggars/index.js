function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

function beggars(values, n) {
    return Array(n)
        .fill(0)
        .map((_, idx) => {
            return sum(values.slice(idx).filter((_, i) => i % n === 0));
        });
}

console.log(beggars([1, 2, 3, 4, 5], 1));
console.log(beggars([1, 2, 3, 4, 5], 2));
console.log(beggars([1, 2, 3, 4, 5], 3));
console.log(beggars([1, 2, 3, 4, 5], 6));
console.log(beggars([1, 2, 3, 4, 5], 0));
