function calculator(a, b, sign) {
    if (!/[+-/*]/.test(sign) || !Number.isInteger(a) || !Number.isInteger(b))
        return 'unknown value';

    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return a / b;
    }
}

console.log(calculator(6, 2, '+'));
console.log(calculator(4, 3, '-'));
console.log(calculator(5, 5, '*'));
console.log(calculator(5, 4, '/'));
console.log(calculator(6, 2, '&'));
