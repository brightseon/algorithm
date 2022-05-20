function index(array, n) {
    if (array.length <= n) return -1;

    return Math.pow(array[n], n);
}

console.log(index([1, 2, 3, 4], 2));
console.log(index([1, 3, 10, 100], 3));
console.log(index([1, 2], 3));
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9));
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9));
console.log(index([29, 82, 45, 10], 3));
console.log(index([6, 31], 3));
console.log(index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10));
