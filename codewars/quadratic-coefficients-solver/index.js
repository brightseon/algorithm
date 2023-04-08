function quadratic(x1, x2) {
    return [1, -(x1 + x2), x1 * x2];
}

console.log(quadratic(0, 1));
console.log(quadratic(1, 1));
console.log(quadratic(-4, -9));
console.log(quadratic(-5, -4));
console.log(quadratic(4, -9));
console.log(quadratic(5, -4));
