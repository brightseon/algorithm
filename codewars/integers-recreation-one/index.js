const divisor = (num) => {
    let numbers = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i !== 0) continue;

        numbers.push(i);
        if (num / i === i) continue;
        numbers.push(num / i);
    }

    const sum = numbers.reduce((a, b) => {
        return a + Math.pow(b, 2);
    }, 0);

    return sum;
};

function listSquared(m, n) {
    let list = [];

    for (let i = m; i < n; i++) {
        const sum = divisor(i);

        if (!Number.isInteger(Math.sqrt(sum))) continue;
        list.push([i, sum]);
    }

    return list;
}

console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
