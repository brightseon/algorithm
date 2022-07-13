function reverseLetter(str) {
    return str
        .replace(/[^a-z]/gi, '')
        .split('')
        .reverse()
        .join('');
}

console.log(reverseLetter('krishan'));
console.log(reverseLetter('ultr53o?n'));
console.log(reverseLetter('ab23c'));
console.log(reverseLetter('krish21an'));
