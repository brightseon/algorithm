function solution(s) {
    return /^(\d{4}|\d{6})$/.test(s);
}

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('12345'));
