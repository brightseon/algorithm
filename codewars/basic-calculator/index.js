const OPERATION = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

function calculate(num1, operation, num2) {
    try {
        const value = OPERATION[operation](num1, num2);
        return isFinite(value) ? value : null;
    } catch {
        return null;
    }
}

console.log(calculate(3.2, '+', 8));
console.log(calculate(3.2, '-', 8));
console.log(calculate(3.2, '/', 8));
console.log(calculate(3.2, '*', 8));
console.log(calculate(-3, '+', 0));
console.log(calculate(-3, '-', 0));
console.log(calculate(-3, '/', 0));
console.log(calculate(-3, '*', 0));
console.log(calculate(-3, 'w', 0));
