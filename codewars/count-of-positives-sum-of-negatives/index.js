const countPositivesSumNegatives = (input) => {
    if (!input || input.length === 0) return [];

    return [
        input.filter((num) => num > 0).length,
        input.filter((num) => num < 0).reduce((a, b) => a + b, 0)
    ];
};

// ----------------------------------------------------------------
// function countPositivesSumNegatives(input) {
//     if (!Array.isArray(input) || !input.length) return [];
//     return input.reduce((arr, n) => {
//         if (n > 0) arr[0]++;
//         if (n < 0) arr[1] += n;
//         return arr;
//     }, [0, 0]);
// }

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 0]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));
