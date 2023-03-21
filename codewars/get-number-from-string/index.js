function getNumberFromString(s) {
    return +s.replace(/[^\d]/g, '');
}

console.log(getNumberFromString('1'));
console.log(getNumberFromString('123'));
console.log(getNumberFromString('this is number: 7'));
