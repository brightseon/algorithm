function solution(n) {
    return +`${n}`
        .split('')
        .sort((a, b) => b - a)
        .join('');
}

console.log(solution(118372));
