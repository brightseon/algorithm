function sumOfN(n) {
    const arr = [0];
    const flag = n > 0 ? 1 : -1;

    for (let i = 0; i < Math.abs(n); i++) {
        arr.push(arr[i] + (i + 1) * flag);
    }

    return arr;
}

console.log(sumOfN(3));
console.log(sumOfN(-4));
console.log(sumOfN(1));
console.log(sumOfN(-6));
