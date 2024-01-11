function consecutive(arr, a, b) {
    const idx = arr.findIndex((item) => item === a);

    return arr[idx - 1] === b || arr[idx + 1] === b;
}

console.log(consecutive([1, 3, 5, 7], 3, 7));
console.log(consecutive([1, 3, 5, 7], 3, 1));
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));
