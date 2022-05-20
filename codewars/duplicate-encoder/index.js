function duplicateEncode(word) {
    return word
        .split('')
        .reduce(
            (a, b) => `${a}${word.match(new RegExp(`[${b}]`, 'gi'), b).length > 1 ? ')' : '('}`,
            ''
        );
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
