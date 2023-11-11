function splitTheBill(x) {
    const avg = Object.values(x).reduce((a, b) => a + b, 0) / Object.keys(x).length;

    return Object.keys(x).reduce(
        (a, b) => {
            a[b] = Math.round((a[b] - avg) * 100) / 100;

            return a;
        },
        { ...x }
    );
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 }));
console.log(splitTheBill({ A: 40, B: 25, X: 10 }));
