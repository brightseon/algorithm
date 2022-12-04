function doubleChar(str) {
    return str.replace(/./g, (s) => `${s}${s}`);
}

console.log(doubleChar('abcd'));
console.log(doubleChar('Adidas'));
console.log(doubleChar('1337'));
console.log(doubleChar('illuminati'));
console.log(doubleChar('123456'));
console.log(doubleChar('%^&*('));
