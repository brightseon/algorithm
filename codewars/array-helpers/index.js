Array.prototype.square = function () {
    return this.map((a) => Math.pow(a, 2));
};

Array.prototype.cube = function () {
    return this.map((a) => Math.pow(a, 3));
};

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};

Array.prototype.average = function () {
    if (this.length < 1) return NaN;

    return this.sum() / this.length;
};

Array.prototype.even = function () {
    return this.filter((a) => a % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((a) => a % 2 !== 0);
};

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());
