function solution(n) {
    return `${n}`.split('').reduce((a, b) => [+b, ...a], []);
}

console.log(solution(12345));
