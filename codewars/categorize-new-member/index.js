function openOrSenior(data) {
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'));
}

console.log(
    openOrSenior([
        [18, 20],
        [45, 2],
        [61, 12],
        [37, 6],
        [21, 21],
        [78, 9]
    ])
);
console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20]
    ])
);
console.log(
    openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23]
    ])
);
console.log(
    openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12]
    ])
);
console.log(
    openOrSenior([
        [19, 16],
        [24, 10],
        [29, 7],
        [54, 20],
        [81, 7],
        [11, 7],
        [11, -2],
        [56, 15]
    ])
);
