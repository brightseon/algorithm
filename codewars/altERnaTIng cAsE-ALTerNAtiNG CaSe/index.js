String.prototype.toAlternatingCase = function () {
    return this.split('')
        .map((s) => (/[a-z]/g.test(s) ? s.toUpperCase() : s.toLowerCase()))
        .join('');
};

console.log('hello world'.toAlternatingCase());
console.log('HELLO WORLD'.toAlternatingCase());
console.log('hello WORLD'.toAlternatingCase());
console.log('HeLLo WoRLD'.toAlternatingCase());
console.log('12345'.toAlternatingCase());
console.log('1a2b3c4d5e'.toAlternatingCase());
console.log('String.prototype.toAlternatingCase'.toAlternatingCase());
console.log('Hello World'.toAlternatingCase().toAlternatingCase());
