const deleteNth = (arr, n) => {
    return arr.reduce((prev, current) => {
        const result = prev.filter((p) => p === current);

        if (result.length === n) return prev;

        return [...prev, current];
    }, []);
};

// -------------------------------------------------------------
// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
