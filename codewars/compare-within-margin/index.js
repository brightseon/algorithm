function closeCompare(a, b, margin) {
    if (Math.abs(a - b) <= margin || a - b === 0) return 0;
    if (a - b > 0) return 1;

    return -1;
}

console.log(closeCompare(4, 5));
console.log(closeCompare(5, 5));
console.log(closeCompare(6, 5));
console.log(closeCompare(-6, -5));

console.log(closeCompare(2, 5, 3));
console.log(closeCompare(8.1, 5, 3));
console.log(closeCompare(1.99, 5, 3));
