function minSum(arr) {
    const sortArr = arr.sort((a, b) => a - b);

    return sortArr
        .slice(0, arr.length / 2)
        .reduce((a, b, i) => a + b * sortArr[arr.length - 1 - i], 0);
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
