function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(333));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(2475880078570760549798248454));
