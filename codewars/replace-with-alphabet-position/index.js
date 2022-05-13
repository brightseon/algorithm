function alphabetPosition(text) {
    const a = 'a'.charCodeAt(0);
    return text
        .replace(/[\W]|\s|\d|[-_]/gi, '')
        .toLocaleLowerCase()
        .split('')
        .map((t) => t.charCodeAt(0) - a + 1)
        .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition('The narwhal bacons at midnight'));
console.log(alphabetPosition('The narwhal bacons at midnight?'));
console.log(alphabetPosition('< q{pz4_'));
