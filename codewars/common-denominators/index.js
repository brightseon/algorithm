const gcm = (num1, num2) => {
    let a = Math.max(num1, num2),
        b = Math.min(num1, num2);

    while (b > 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
};

const lcm = (a, b) => (a * b) / gcm(a, b);

const reduceFrac = (frac) => {
    const resGCM = gcm(frac[0], frac[1]);

    return frac.map((f) => f / resGCM);
};

function convertFrac(lst) {
    if (lst.length === 0) return '';

    const frac = lst.map(reduceFrac);
    const resLCM = frac.map((a) => a[1]).reduce((a, b) => lcm(a, b));

    return lst
        .map((ll) => {
            const a = resLCM / ll[1];

            return `(${ll.map((l) => l * a).join(',')})`;
        })
        .join('');
}

console.log(
    convertFrac([
        [1, 2],
        [1, 3],
        [1, 4]
    ])
);
console.log(
    convertFrac([
        [2, 4],
        [2, 6],
        [2, 8]
    ])
);
console.log(convertFrac([]));
