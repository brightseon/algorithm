const ALPHABET = [
    ' ',
    '?',
    '!',
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
].reverse();

function switcher(x) {
    return x.map((a) => ALPHABET[+a - 1]).join('');
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']));
console.log(switcher(['4', '24']));
