function solution(n) {
    for (let i = 2; i < n; i++) {
        if (Math.floor(n / i) * i === n - 1) return i;
    }
}

console.log(solution(10));
console.log(solution(12));
