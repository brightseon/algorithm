function sum(n) {
    const array = new Array(n + 1).fill(0);
    array[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            array[j] += array[j - i];
        }
    }

    return array[n];
}

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));

console.log(sum(5));

console.log(sum(10));
