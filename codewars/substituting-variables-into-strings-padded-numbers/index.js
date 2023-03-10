function solution(value) {
    return `Value is ${`${value}`.padStart(5, '0')}`;
}

console.log(solution(5));
console.log(solution(1204));
console.log(solution(109));
console.log(solution(0));
