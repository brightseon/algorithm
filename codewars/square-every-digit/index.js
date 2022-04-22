const squareDigits = (num) =>
    parseInt(`${num}`.split('').reduce((a, b) => `${a}${Math.pow(+b, 2)}`, ''));

// ---------------------------------------------------------------------------------------------------------
// function squareDigits(num) {
//     return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
// }

console.log(squareDigits(9119));
console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
