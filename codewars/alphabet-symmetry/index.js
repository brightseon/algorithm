const checking = (s) => {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

    return s
        .slice(0, ALPHABET.length)
        .split('')
        .reduce((a, b, i) => (ALPHABET[i] === b.toLowerCase() ? a + 1 : a), 0);
};

function solve(arr) {
    return arr.map((a) => checking(a));
}

console.log(solve(['abode', 'ABc', 'xyzD']));
console.log(solve(['abide', 'ABc', 'xyz']));
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']));
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD']));
