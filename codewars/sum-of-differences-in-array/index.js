function sumOfDifferences(arr) {
    if (arr.length === 0) return 0;
    return Math.max(...arr) - Math.min(...arr);
}

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
console.log(sumOfDifferences([]));
