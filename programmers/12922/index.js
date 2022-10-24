function solution(n) {
    const str = '수박';
    return `${str.repeat(n / str.length)}${n % str.length === 0 ? '' : str.slice(0, 1)}`;
}

console.log(solution(3));
console.log(solution(4));
