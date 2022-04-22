function highAndLow(numbers) {
    const arr = numbers.split(' ').map((n) => +n);

    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// -------------------------------------------------------

// function highAndLow(numbers) {
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));
