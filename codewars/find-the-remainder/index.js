function remainder(n, m) {
    return Math.max(n, m) % Math.min(n, m);
}

console.log(remainder(17, 5));
console.log(remainder(13, 72), remainder(72, 13));
console.log(remainder(1, 0));
console.log(remainder(0, 0));
