function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}

console.log(validate('djI38D55'));
console.log(validate('a2.d412'));
console.log(validate('JHD5FJ53'));
console.log(validate('!fdjn345'));
console.log(validate('jfkdfj3j'));
console.log(validate('123'));
console.log(validate('abc'));
console.log(validate('Password123'));
console.log(validate('fjd3IR9.;'));
