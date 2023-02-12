/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false;

    const maxIdx = arr.indexOf(Math.max(...arr));

    if (maxIdx === 0 || maxIdx === arr.length - 1) return false;

    for (let i = 1; i <= maxIdx; i++) {
        if (arr[i - 1] < arr[i]) continue;

        return false;
    }

    for (let i = maxIdx; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) continue;

        return false;
    }

    return true;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(validMountainArray([3, 6, 5, 6, 7, 6, 5, 3, 0]));
