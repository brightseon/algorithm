function solution(s) {
    return s.slice(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}

console.log(solution('abcde'));
console.log(solution('qwer'));
