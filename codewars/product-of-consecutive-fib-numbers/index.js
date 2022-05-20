function productFib(prod) {
    let fib = [0, 1];

    while (fib[0] * fib[1] < prod) {
        fib = [...fib, fib[0] + fib[1]];
        fib.shift();
    }

    return [...fib, fib[0] * fib[1] === prod];
}

console.log(productFib(4895));
console.log(productFib(5895));
console.log(productFib(74049690));
console.log(productFib(84049690));
console.log(productFib(193864606));
console.log(productFib(447577));
console.log(productFib(602070));
