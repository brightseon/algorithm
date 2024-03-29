function solve(arr) {
    return arr.filter((a, i) => arr.indexOf(a, i + 1) === -1);
}

console.log(solve([3, 4, 4, 3, 6, 3]));
console.log(solve([1, 2, 1, 2, 1, 2, 3]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([1, 1, 4, 5, 1, 2, 1]));
console.log(solve([1, 2, 1, 2, 1, 1, 3]));
