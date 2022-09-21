function divisors(integer) {
    const len = Math.floor(integer / 2) - 1;
    const results = Array(len)
        .fill(3)
        .reduce(
            (a, b, i) => {
                const num = b + i;
                if (integer % num !== 0) return a;

                return [...a, num];
            },
            integer % 2 === 0 ? [2] : []
        );

    if (results.length === 0) return `${integer} is prime`;

    return results;
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));
