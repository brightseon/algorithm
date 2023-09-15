function largest(n, array) {
    const sortedArr = array.sort((a, b) => a - b);

    return sortedArr.slice(sortedArr.length - n);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]));
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]));
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]));
console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5]));
