function spEng(sentence) {
    return /english/gi.test(sentence);
}

console.log(spEng('english'));
console.log(spEng('egnlish'));
console.log(spEng('abcEnglishdef'));
console.log(spEng('abcnEglishsef'));
console.log(spEng('eNglisH'));
