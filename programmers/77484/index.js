const solution = (lottos, win_nums) => {
    const RANKING = [6, 5, 4, 3, 2, 1];
    if (lottos.join('') === '000000') return [1, 6];

    const [top, bottom] = lottos.reduce(
        (a, b) => {
            if (b === 0) return [a[0] + 1, a[1]];
            if (win_nums.indexOf(b) === -1) return a;

            return [a[0] + 1, a[1] + 1];
        },
        [0, 0]
    );

    return [RANKING[Math.max(top - 1, 0)], RANKING[Math.max(bottom - 1, 0)]];
};

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
