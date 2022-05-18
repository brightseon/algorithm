function findEvenIndex(arr) {
    let left = 0,
        right = arr.reduce((a, b) => a + b, 0);

    for (let i = 0; i < arr.length; i++) {
        left += arr[i - 1] || 0;
        right -= arr[i];

        if (left === right) return i;
    }

    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
