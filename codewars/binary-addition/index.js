function addBinary(a, b) {
    let sum = a + b,
        binary = [];

    while (sum > 1) {
        binary.unshift(sum % 2);
        sum = Math.floor(sum / 2);
    }

    return [sum, ...binary].join('');
}

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));
