function reverseWords(str) {
    return str
        .split(' ')
        .map((s) => s.split('').reverse().join(''))
        .join(' ');
}

console.log(reverseWords('This is an example!'));
console.log(reverseWords('double  spaces'));
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));
