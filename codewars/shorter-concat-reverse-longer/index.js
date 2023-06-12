function shorter_reverse_longer(a, b) {
    return `${b}${a.split('').reverse().join('')}${b}`;
}

console.log(shorter_reverse_longer('first', 'abcde'));
console.log(shorter_reverse_longer('hello', 'bau'));
console.log(shorter_reverse_longer('fghi', 'abcde'));
