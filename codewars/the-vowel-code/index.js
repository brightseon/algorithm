const PATTERN = ['a', 'e', 'i', 'o', 'u'];

function encode(string) {
    return string.replace(
        new RegExp(`[${PATTERN.join('')}]`, 'gi'),
        (str) => PATTERN.indexOf(str) + 1
    );
}

function decode(string) {
    return string.replace(/[1-5]/gi, (str) => PATTERN[str - 1]);
}

console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(decode('h2ll4'));
