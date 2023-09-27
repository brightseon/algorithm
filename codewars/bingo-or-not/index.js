function bingo(a) {
    const base = 'a'.charCodeAt(0) - 1;
    const TEXT = 'BINGO';

    return [...new Set(a.filter((a) => TEXT.includes(String.fromCharCode(base + a).toUpperCase())))]
        .length === TEXT.length
        ? 'WIN'
        : 'LOSE';
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));
