function differenceOfSquares(n) {
    const [a, b] = Array(n)
        .fill(1)
        .reduce(
            (a, b, i) => {
                const num = b + i;

                return [a[0] + num, a[1] + Math.pow(num, 2)];
            },
            [0, 0]
        );

    return Math.pow(a, 2) - b;
}

console.log(differenceOfSquares(5));
console.log(differenceOfSquares(10));
console.log(differenceOfSquares(100));
