/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const unique_nums = [...new Set(nums)];

    if (unique_nums.length < 3) return Math.max(...unique_nums);

    return unique_nums.sort((a, b) => b - a)[2];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
