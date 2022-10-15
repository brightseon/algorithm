function solution(x, n) {
    return Array(n)
        .fill(x)
        .map((a, i) => a + a * i);
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
console.log(solution(0, 5));
