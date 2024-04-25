function wordSearch(query, seq) {
    const searchWords = seq.filter((s) => new RegExp(query, 'gi').test(s));

    if (searchWords.length > 0) return searchWords;

    return ['Empty'];
}

console.log(wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc']));
console.log(wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc']));
console.log(wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc']));
console.log(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc']));
