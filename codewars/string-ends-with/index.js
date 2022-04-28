function solution(str, ending) {
    return str.endsWith(ending);
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'abc'));
