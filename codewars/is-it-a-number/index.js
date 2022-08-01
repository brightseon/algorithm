function isDigit(s) {
    if (s.trim().length === 0) return false;

    return !Number.isNaN(+s);
}

console.log(isDigit('3'));
console.log(isDigit('  3  '));
console.log(isDigit('-3.23'));
console.log(isDigit('3-4'));
console.log(isDigit('  3   5'));
console.log(isDigit('3 5'));
console.log(isDigit('zero'));
console.log(isDigit('-0'));
console.log(isDigit(' '));
