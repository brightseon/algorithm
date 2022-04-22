function find_average(array) {
    if (array.length === 0) return 0;
    return array.reduce((a, b) => a + b, 0) / array.length;
}

console.log(find_average([1, 1, 1]));
console.log(find_average([1, 2, 3]));
console.log(find_average([1, 2, 3, 4]));
console.log(find_average([]));
