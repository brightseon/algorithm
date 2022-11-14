function solution(array, commands) {
    return commands.reduce((a, b) => {
        return [...a, array.slice(b[0] - 1, b[1]).sort((a, b) => a - b)[b[2] - 1]];
    }, []);
}

console.log(
    solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3]
        ]
    )
);
