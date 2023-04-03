function vowel2index(str) {
    return str.replace(/a|e|i|o|u/gi, (_, offset) => offset + 1);
}

console.log(vowel2index('this is my string'));
console.log(vowel2index('Codewars is the best site in the world'));
console.log(vowel2index('Tomorrow is going to be raining'));
console.log(vowel2index(''));
