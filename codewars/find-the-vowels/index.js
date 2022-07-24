function vowelIndices(word) {
    return word.split('').reduce((a, b, i) => {
        if (/[aeiouy]/gi.test(b)) return [...a, i + 1];

        return a;
    }, []);
}

console.log(vowelIndices('mmm'));
console.log(vowelIndices('apple'));
console.log(vowelIndices('super'));
console.log(vowelIndices('orange'));
console.log(vowelIndices('supercalifragilisticexpialidocious'));
