function diamond(n) {
    if (n < 1 || n % 2 === 0) return null;

    return new Array(n)
        .fill('')
        .reduce(
            (a, b, i) =>
                `${a}${b
                    .padStart(Math.abs(i - (n - 1) / 2), ' ')
                    .padEnd(n - Math.abs(i - (n - 1) / 2), '*')}\n`,
            ''
        );
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(2));
console.log(diamond(-3));
console.log(diamond(0));
