function rowSumOddNumbers(n) {
    const start = Math.pow(n, 2) - n + 1;
    return Math.pow(n, 2) + (start - 1) * n;
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(42));
