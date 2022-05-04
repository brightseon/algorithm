function number(busStops) {
    return busStops.reduce((a, b) => {
        return a + (b[0] - b[1]);
    }, 0);
}

console.log(
    number([
        [10, 0],
        [3, 5],
        [5, 8]
    ])
);
console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10]
    ])
);
console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8]
    ])
);
console.log(number([[0, 0]]));
