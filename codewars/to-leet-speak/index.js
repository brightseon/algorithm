const LEET_SPEAK = {
    A: '@',
    B: '8',
    C: '(',
    D: 'D',
    E: '3',
    F: 'F',
    G: '6',
    H: '#',
    I: '!',
    J: 'J',
    K: 'K',
    L: '1',
    M: 'M',
    N: 'N',
    O: '0',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: '$',
    T: '7',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: '2'
};

function toLeetSpeak(str) {
    return str
        .split('')
        .map((s) => LEET_SPEAK[s] || s)
        .join('');
}

console.log(toLeetSpeak('LEET'));
console.log(toLeetSpeak('CODEWARS'));
console.log(toLeetSpeak('HELLO WORLD'));
console.log(toLeetSpeak('LOREM IPSUM DOLOR SIT AMET'));
console.log(toLeetSpeak('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'));
