function sum() {
    return [...arguments].reduce((a, b) => a + b, 0);
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(5, 7, 9));
console.log(sum(12, 1, 1, 1, 1));
console.log(sum(12, 1, 1, 1, 1, 1, 1));
