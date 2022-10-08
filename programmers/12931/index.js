function solution(n) {
    return `${n}`.split('').reduce((a, b) => a + +b, 0);
}

console.log(solution(123));
console.log(solution(987));
