const factorial = (n) => {
    if (n < 2) return 1;

    return n * factorial(n - 1);
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
