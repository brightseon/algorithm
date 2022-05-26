function tribonacci(signature, n) {
    if (signature.length >= n) return signature.slice(0, n);
    let tribo = [...signature, signature.reduce((a, b) => a + b)];
    let prev = tribo[tribo.length - 1];

    for (let i = tribo.length; i < n; i++) {
        tribo.push(2 * prev - tribo[i - 4]);
        prev = tribo[tribo.length - 1];
    }

    return tribo;
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([1, 2, 3], 10));
console.log(tribonacci([3, 2, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300, 200, 100], 0));
console.log(tribonacci([0.5, 0.5, 0.5], 30));
console.log(tribonacci([1, 1, 1], 1));
