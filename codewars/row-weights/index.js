function rowWeights(array) {
    return array.reduce(
        (a, b, i) => {
            const idx = (i + 1) % 2 === 0 ? 1 : 0;
            a[idx] = a[idx] + b;

            return a;
        },
        [0, 0]
    );
}

console.log(rowWeights([80]));
console.log(rowWeights([100, 50]));
console.log(rowWeights([50, 60, 70, 80]));
console.log(rowWeights([13, 27, 49]));
console.log(rowWeights([70, 58, 75, 34, 91]));
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));
console.log(rowWeights([0]));
console.log(rowWeights([100, 51, 50, 100]));
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]));
console.log(rowWeights([0, 1, 0]));
