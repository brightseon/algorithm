function SeriesSum(n) {
    const sum = new Array(n).fill(1).reduce((a, b, i) => a + b / (i * 3 + 1), 0);
    return sum % 1 === 0 ? `${sum}.00` : `${Math.round(sum * 100) / 100}`.padEnd(4, 0);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
