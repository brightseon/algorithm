function factorial(n) {
    if (n < 0 || n > 12) throw Error();
    return new Array(n).fill(1).reduce((a, _, i) => a * (i + 1), 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
