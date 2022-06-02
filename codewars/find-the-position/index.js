function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1}`;
}

console.log(position('a'));
console.log(position('z'));
console.log(position('e'));
