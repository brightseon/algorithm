function dotCalculator(equation) {
    const [operand1, operator, operand2] = equation.split(' ');

    const num1 = operand1.length;
    const num2 = operand2.length;

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '//':
            result = Math.floor(num1 / num2);
            break;
        default:
            throw new Error('Invalid operator');
    }

    return result === 0 ? '' : '.'.repeat(result);
}

console.log(dotCalculator('..... + ...............'));
console.log(dotCalculator('..... - ...'));
console.log(dotCalculator('..... - .'));
console.log(dotCalculator('..... * ...'));
console.log(dotCalculator('..... * ..'));
console.log(dotCalculator('..... // ..'));
console.log(dotCalculator('..... // .'));
console.log(dotCalculator('. // ..'));
console.log(dotCalculator('. - .'));
