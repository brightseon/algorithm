// Sum Numbers
function sum(numbers) {
    'use strict';
    return numbers.reduce((a, b) => a + b, 0);
}

const sum1 = sum([1, 5.2, 4, 0, -1]);
const sum2 = sum([]);

console.log(sum1);
console.log(sum2);
