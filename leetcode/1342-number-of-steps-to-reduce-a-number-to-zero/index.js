/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let i = 0,
        n = num;

    while (n > 0) {
        n = n % 2 === 0 ? n / 2 : n - 1;
        i++;
    }

    return i;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
