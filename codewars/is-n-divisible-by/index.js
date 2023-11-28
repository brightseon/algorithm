function isDivisible() {
    const [n, ...nums] = arguments;

    return nums.every((num) => n % num === 0);
}

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4, 2, 5));
