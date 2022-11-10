const ALPHABET = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

function solution(s, n) {
    return s
        .split('')
        .map((a) => {
            if (a === ' ') return a;
            const upper = a.toUpperCase();
            const location = ALPHABET.indexOf(upper);
            let idx = location + n;
            if (!ALPHABET[idx]) idx = Math.abs(ALPHABET.length - idx);

            return a === upper ? ALPHABET[idx] : ALPHABET[idx].toLowerCase();
        })
        .join('');
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
