function extraPerfect(n) {
    let length = Math.floor(n / 2);

    if (n % 2) ++length;

    return Array(length)
        .fill(1)
        .map((n, i) => n + i * 2);
}

console.log(extraPerfect(3));
console.log(extraPerfect(5));
console.log(extraPerfect(7));
console.log(extraPerfect(28));
console.log(extraPerfect(39));
