const dataReverse = function (data) {
    if (data.length === 0) return [];

    return Array(data.length / 8)
        .fill(1)
        .map((_, i) => data.slice(i * 8, (i + 1) * 8))
        .reverse()
        .flat(2);
};

console.log(
    dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
        0
    ])
);
console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]));
