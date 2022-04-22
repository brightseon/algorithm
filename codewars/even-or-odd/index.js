const even_or_odd = (number) => (Math.abs(number) % 2 === 0 ? 'Even' : 'Odd');

// ------------------------------------------------------------------

// function even_or_odd(number) {
//     return number % 2 ? "Odd" : "Even"
// }

console.log(even_or_odd(2));
console.log(even_or_odd(7));
console.log(even_or_odd(-42));
console.log(even_or_odd(7));
console.log(even_or_odd(0));
