function incrementer(nums) {
    return nums.map((n, i) => {
        const newNumStr = `${n + (i + 1)}`;

        return parseInt(newNumStr[newNumStr.length - 1]);
    });
}

console.log(incrementer([]));
console.log(incrementer([1, 2, 3]));
console.log(incrementer([4, 6, 7, 1, 3]));
console.log(incrementer([3, 6, 9, 8, 9]));
console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]));
