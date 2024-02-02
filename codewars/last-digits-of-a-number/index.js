function lastDigit(n, d) {
    return `${n}`
        .split('')
        .slice(Math.max(0, `${n}`.length - d))
        .map((n) => +n);
}

console.log(lastDigit(1, 1));
console.log(lastDigit(123767, 4));
console.log(lastDigit(0, 1));
console.log(lastDigit(34625647867585, 10));

console.log(lastDigit(1234, 0));
console.log(lastDigit(24134, -4));

console.log(lastDigit(1343, 5));
