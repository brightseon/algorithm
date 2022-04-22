const basicOp = (operation, value1, value2) => {
    const expression = {
        '+': () => value1 + value2,
        '-': () => value1 - value2,
        '*': () => value1 * value2,
        '/': () => value1 / value2
    };

    return expression[operation]();
};

// --------------------------------------------------

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));
