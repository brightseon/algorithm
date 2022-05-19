function digPow(n, p) {
    const sum = `${n}`.split('').reduce((a, b, i) => a + Math.pow(b, p + i), 0);
    return sum % n ? -1 : sum / n;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
console.log(digPow(46288, 5));
