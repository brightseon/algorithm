function vowelOne(s) {
    return s.replace(/./g, (str) => (/a|e|i|o|u/i.test(str) ? '1' : '0'));
}

console.log(vowelOne('vowelOne'));
console.log(vowelOne('123, arou'));
