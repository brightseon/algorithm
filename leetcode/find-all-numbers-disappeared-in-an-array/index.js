/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const results = [];

    for (let i = 0; i < nums.length; i++) {
        const num = i + 1;
        if (nums.includes(num)) continue;

        results.push(num);
    }

    return results;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
