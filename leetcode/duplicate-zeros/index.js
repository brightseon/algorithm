/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] !== 0) continue;

        arr.splice(i, 0, 0);
        arr.pop();
    }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));
