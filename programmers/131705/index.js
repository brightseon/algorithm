function solution(number) {
    if (number.length === 3) return number[0] + number[1] + number[2] === 0 ? 1 : 0;

    return number
        .slice(0, number.length - 2)
        .reduce(
            (acc, cur, idx) =>
                acc +
                number
                    .slice(idx + 1, number.length - 1)
                    .reduce(
                        (a, b, i) =>
                            a + number.slice(idx + i + 2).filter((l) => cur + b + l === 0).length,
                        0
                    ),
            0
        );
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
