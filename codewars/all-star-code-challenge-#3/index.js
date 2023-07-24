var removeVowels = function (str) {
    const VOWELS_REGEX = /[aeiou]/g;

    return str.replace(VOWELS_REGEX, '');
};

console.log(removeVowels('drake'));
console.log(removeVowels('aeiou'));
