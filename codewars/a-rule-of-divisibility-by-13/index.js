function thirt(n) {
    const result = `${n}`
        .split('')
        .reverse()
        .map((n, i) => n * (Math.pow(10, i) % 13))
        .reduce((a, b) => a + b, 0);

    return result === n ? result : thirt(result);
}

console.log(thirt(1234567));
console.log(thirt(8529));
console.log(thirt(85299258));
console.log(thirt(5634));
console.log(thirt(1111111111));
console.log(thirt(987654321));
