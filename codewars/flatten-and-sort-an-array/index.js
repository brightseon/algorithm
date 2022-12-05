'use strict';

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.flat(2).sort((a, b) => a - b);
}

console.log(flattenAndSort([]));
console.log(flattenAndSort([[], []]));
console.log(flattenAndSort([[], [1]]));
console.log(
    flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5]
    ])
);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
