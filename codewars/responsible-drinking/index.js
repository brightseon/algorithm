function hydrate(s) {
    const water = s
        .replace(/[^\d]/g, '')
        .split('')
        .reduce((a, b) => a + +b, 0);

    if (water === 1) {
        return `${water} glass of water`;
    }

    return `${water} glasses of water`;
}

console.log(hydrate('1 beer'));
console.log(hydrate('2 glasses of wine and 1 shot'));
console.log(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer'));
