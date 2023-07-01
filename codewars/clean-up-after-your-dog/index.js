function crap(x, bags, cap) {
    const remaining = x.flat(1).join('').replace(/_/g, '');

    if (remaining.includes('D')) {
        return 'Dog!!';
    }

    return remaining.length > bags * cap ? 'Cr@p' : 'Clean';
}

console.log(
    crap(
        [
            ['_', '_', '_', '_'],
            ['_', '_', '_', '@'],
            ['_', '_', '@', '_']
        ],
        2,
        2
    )
);
console.log(
    crap(
        [
            ['_', '_', '_', '_'],
            ['_', '_', '_', '@'],
            ['_', '_', '@', '_']
        ],
        1,
        1
    )
);
console.log(
    crap(
        [
            ['_', '_'],
            ['_', '@'],
            ['D', '_']
        ],
        2,
        2
    )
);
