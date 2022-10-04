function f(n) {
    if (Number.isInteger(n)) return false;

    return (n * (n - 1)) / 2;
}

console.log(f(100));
console.log(f(300));
console.log(f(50000));
console.log(f('n'));
console.log(f());
console.log(f(3.14));
console.log(f(0));
console.log(f(-10));
