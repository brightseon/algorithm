function contamination(text, char) {
    return char.repeat(text.length);
}

console.log(contamination('abc', 'z'));
console.log(contamination('', 'z'));
console.log(contamination('abc', ''));
console.log(contamination('_3ebzgh4', '&'));
console.log(contamination('//case', ' '));
