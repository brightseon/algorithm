function twoSort(s) {
    return s.sort()[0].replace(/\B/gi, '***');
}

console.log(
    twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])
);
console.log(
    twoSort([
        'turns',
        'out',
        'random',
        'test',
        'cases',
        'are',
        'easier',
        'than',
        'writing',
        'out',
        'basic',
        'ones'
    ])
);
