const sumDigits = (number) => {
    return `${Math.abs(number)}`.split('').reduce((a, b) => +a + +b, 0);
};

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
