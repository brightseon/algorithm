function narcissistic(value) {
    return value === `${value}`.split('').reduce((a, b) => a + Math.pow(b, `${value}`.length), 0);
}

console.log(narcissistic(7));
console.log(narcissistic(371));
