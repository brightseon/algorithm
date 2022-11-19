const ROUTINE = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
];

function solution(answers) {
    const score = answers.reduce(
        (a, b, i) => {
            if (b === ROUTINE[0][i % ROUTINE[0].length]) a[1] = ++a[1];
            if (b === ROUTINE[1][i % ROUTINE[1].length]) a[2] = ++a[2];
            if (b === ROUTINE[2][i % ROUTINE[2].length]) a[3] = ++a[3];

            return a;
        },
        { 1: 0, 2: 0, 3: 0 }
    );
    const max = Math.max(...Object.values(score));

    return Object.keys(score)
        .filter((s) => score[s] === max)
        .map((s) => +s);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
