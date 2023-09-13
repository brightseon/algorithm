function maxTriSum(numbers) {
    return [...new Set(numbers)]
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((a, b) => a + b, 0);
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]));
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));
console.log(maxTriSum([-3, -27, -4, -2, -27, -2]));
console.log(maxTriSum([-14, -12, -7, -42, -809, -14, -12]));
console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]));
console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
console.log(maxTriSum([-2, 0, 2]));
console.log(maxTriSum([-2, -4, 0, -9, 2]));
console.log(maxTriSum([-5, -1, -9, 0, 2]));
