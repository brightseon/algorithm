function createDict(keys, values) {
    return keys.reduce((a, b, i) => ({ ...a, [b]: values[i] ?? null }), {});
}

console.log(createDict(['a', 'b', 'c'], [1, 2, 3]));
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]));
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));
