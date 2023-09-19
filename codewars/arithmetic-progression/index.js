function arithmeticSequenceElements(a, d, n) {
    return Array(n)
        .fill(a)
        .map((x, i) => x + i * d)
        .join(', ');
}

console.log(arithmeticSequenceElements(1, 2, 5));
console.log(arithmeticSequenceElements(1, 0, 5));
console.log(arithmeticSequenceElements(1, -3, 10));
console.log(arithmeticSequenceElements(100, -10, 10));
