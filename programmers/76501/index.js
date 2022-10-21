function solution(absolutes, signs) {
    return absolutes.reduce((a, b, i) => a + (signs[i] ? 1 : -1) * b, 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
