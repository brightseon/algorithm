function sumArray(array) {
    if (!array || array.length < 2) return 0;

    return array.reduce((a, b) => a + b, 0) - (Math.max(...array) + Math.min(...array));
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
