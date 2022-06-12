function include(arr, item) {
    return arr.indexOf(item) !== -1;
}

console.log(include([1, 2, 3, 4], 3));
console.log(include([1, 2, 4, 5], 3));
