function abbreviate(string) {
    return string.replace(/\w+/gi, (s) => {
        if (s.length < 4) return s;

        return `${s[0]}${s.length - 2}${s[s.length - 1]}`;
    });
}

console.log(abbreviate('internationalization'));
console.log(abbreviate('accessibility'));
console.log(abbreviate('Accessibility'));
console.log(abbreviate('elephant-ride'));
console.log(abbreviate('You need, need not want, to complete this code-wars mission'));
