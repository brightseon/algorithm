function alternate(n, firstValue, secondValue) {
    return Array(n)
        .fill(firstValue)
        .map((v, i) => (i % 2 > 0 ? secondValue : v));
}

console.log(alternate(5, true, false));
console.log(alternate(20, 'blue', 'red'));
console.log(alternate(0, 'lemons', 'apples'));
