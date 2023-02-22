/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    const size = arr.length;
    let max = arr[size - 1];

    for (let i = arr.length - 2; i >= 0; i--) {
        const temp = max;

        if (arr[i] > temp) {
            max = arr[i];
        }

        arr[i] = temp;
    }

    return arr.slice(0, size - 1).concat(-1);
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
