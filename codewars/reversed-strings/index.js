function solution(str) {
    if (str.length <= 1) return str;

    return str.split('').reverse().join('');
}

// ------------------------------------------
// const solution = s => [...s].reverse().join('')

console.log(solution('world'));
console.log(solution('word'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));
