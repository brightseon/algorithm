function solution(d, budget) {
    const sum = d.reduce((a, b) => a + b, 0);

    if (sum <= budget) return d.length;
    if (d.includes(sum - budget)) return d.length - 1;

    return solution(d.sort((a, b) => a - b).slice(0, d.length - 1), budget);
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
