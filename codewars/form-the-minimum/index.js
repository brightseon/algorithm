function minValue(values) {
    return +values
        .filter((a, i) => values.indexOf(a, i + 1) === -1)
        .sort((a, b) => a - b)
        .join('');
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
console.log(minValue([5, 7, 9, 5, 7]));
console.log(minValue([6, 7, 8, 7, 6, 6]));
console.log(minValue([5, 6, 9, 9, 7, 6, 4]));
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
