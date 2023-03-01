/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        arr[nums[i] % 2 === 0 ? 'unshift' : 'push'](nums[i]);
    }

    return arr;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
