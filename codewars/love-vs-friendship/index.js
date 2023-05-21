function wordsToMarks(string) {
    const CHARACTERS = [
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

    return string.split('').reduce((a, b) => {
        const num = CHARACTERS.indexOf(b) + 1;

        return a + num;
    }, 0);
}

console.log(wordsToMarks('attitude'));
console.log(wordsToMarks('friends'));
console.log(wordsToMarks('family'));
console.log(wordsToMarks('selfness'));
console.log(wordsToMarks('knowledge'));
