var isPP = function (n) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        const times = Math.round(Math.log(n) / Math.log(i));

        if (n === i ** times) return [i, times];
    }

    return null;
};

console.log(isPP(4));
console.log(isPP(9));
console.log(isPP(5));
