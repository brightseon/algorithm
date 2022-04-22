function isPangram(string) {
    const alphabet = [
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
    const str = string.replace(/[0-9.]/g, '').toLowerCase();
    let result = true;

    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) >= 0) continue;

        result = false;
        break;
    }

    return result;
}

// --------------------------------------------------------------------------------------------------------
// function isPangram(string) {
//     const str = string.replace(/[0-9.]/g, '').toLowerCase();
//     return 'abcdefghijklmnopqrstuvwxyz'.split('').every((s) => str.indexOf(s) !== -1);
// }

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));
