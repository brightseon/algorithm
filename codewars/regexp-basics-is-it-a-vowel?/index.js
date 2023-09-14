String.prototype.vowel = function () {
    return /^(a|e|i|o|u)$/i.test(this);
};

console.log(''.vowel());
console.log('a'.vowel());
console.log('E'.vowel());
console.log('ou'.vowel());
console.log('z'.vowel());
console.log('lol'.vowel());
