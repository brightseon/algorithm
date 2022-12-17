function Xbonacci(signature, n) {
    if (signature.length >= n) return signature.slice(0, n);

    let arr = [...signature, signature.reduce((a, b) => a + b, 0)];

    for (let i = 0; i < n - signature.length - 1; i++) {
        arr.push(arr.slice(arr.length - signature.length).reduce((a, b) => a + b, 0));
    }

    return arr;
}

console.log(Xbonacci([0, 1], 10));
console.log(Xbonacci([1, 1], 10));
console.log(Xbonacci([0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20));
console.log(Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9));
