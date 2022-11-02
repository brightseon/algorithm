/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    return Array(n)
        .fill(1)
        .map((a, i) => {
            const num = a + i;

            if (num % (3 * 5) === 0) return 'FizzBuzz';
            if (num % 3 === 0) return 'Fizz';
            if (num % 5 === 0) return 'Buzz';

            return `${num}`;
        });
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
