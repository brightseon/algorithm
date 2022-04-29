function findUniq(arr) {
    // do magic
    const [a, b, ...last] = arr.sort();
    return a === b ? last[last.length - 1] : a;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));
