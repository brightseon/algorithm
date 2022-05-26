function replace(s) {
    return s.replace(/[aeiou]/gi, '!');
}

console.log(replace('Hi!'));
console.log(replace('!Hi! Hi!'));
console.log(replace('aeiou'));
console.log(replace('ABCDE'));
