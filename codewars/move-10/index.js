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

function moveTen(s) {
    return s
        .split('')
        .map((s) => ALPHABET[(ALPHABET.indexOf(s) + 10) % ALPHABET.length])
        .join('');
}

console.log(moveTen('testcase'));
console.log(moveTen('codewars'));
console.log(moveTen('exampletesthere'));
