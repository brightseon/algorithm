/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length < 2) return nums;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] !== 0) continue;

        const temp = nums[i];

        nums.splice(i, 1);
        nums.push(temp);
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
