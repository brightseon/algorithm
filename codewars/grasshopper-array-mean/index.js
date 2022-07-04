var findAverage = function (nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
};

console.log(findAverage([1]));
console.log(findAverage([1, 3, 5, 7]));
