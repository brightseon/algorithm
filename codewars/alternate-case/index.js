function alternateCase(s) {
    return s.replace(/./g, (c) => (/[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase()));
}

console.log(alternateCase('abc'));
console.log(alternateCase('ABC'));
console.log(alternateCase('Hello World'));
