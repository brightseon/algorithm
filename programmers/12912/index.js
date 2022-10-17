function solution(a, b) {
    return Array(Math.abs(a - b) + 1)
        .fill(0)
        .reduce((acc, _, i) => acc + Math.min(a, b) + i, 0);
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
