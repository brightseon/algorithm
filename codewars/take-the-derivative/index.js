function derive(coefficient, exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`;
}

console.log(derive(7, 8));
console.log(derive(5, 9));
