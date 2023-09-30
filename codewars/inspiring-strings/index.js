function longestWord(stringOfWords) {
    return stringOfWords.split(' ').reduce((a, b) => {
        if (a.length > b.length) {
            return a;
        }

        return b;
    }, '');
}

console.log(longestWord('a b c d e fgh'));
console.log(longestWord('one two three'));
console.log(longestWord('red blue grey'));
