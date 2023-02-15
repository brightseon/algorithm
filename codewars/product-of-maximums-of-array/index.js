function maxProduct(numbers, size) {
    return numbers
        .sort((a, b) => b - a)
        .slice(0, size)
        .reduce((a, b) => a * b, 1);
}

console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([10, 8, 7, 9], 3));
console.log(maxProduct([8, 6, 4, 6], 3));
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
console.log(maxProduct([-4, -27, -15, -6, -1], 2));
console.log(maxProduct([-17, -8, -102, -309], 2));
console.log(maxProduct([10, 3, -27, -1], 3));
console.log(maxProduct([14, 29, -28, 39, -16, -48], 4));
console.log(maxProduct([1], 1));
