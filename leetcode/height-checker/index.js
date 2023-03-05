/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const sortHeights = [...heights].sort((a, b) => a - b);

    return heights.filter((height, idx) => height !== sortHeights[idx]).length;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));
