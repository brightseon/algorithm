function nthChar(words) {
    return words.map((w, i) => w[i]).join('');
}

console.log(nthChar([]));
console.log(nthChar(['yoda', 'best', 'has']));
