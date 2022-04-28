function high(x) {
    const ALPHABET = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    const splitStr = x.split(' ');
    const lengthArr = splitStr.map((str) =>
        str.split('').reduce((a, b) => a + (ALPHABET.indexOf(b) + 1), 0)
    );
    const max = Math.max(...lengthArr);

    return splitStr[lengthArr.indexOf(max)];
}

// -----------------------------------------------------------------------------------------------------
// function high(s) {
//     let as = s.split(' ').map(s => [...s.split('')].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
// }

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log(high('take me to semynak'));
console.log(high('aa b'));
console.log(high('b aa'));
console.log(high('bb d'));
console.log(high('d bb'));
console.log(high('aaa b'));
