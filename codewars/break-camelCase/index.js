// complete the function
function solution(string) {
    if (string.length === 0) return string;
    return string
        .split('')
        .map((s) => `${/[A-Z]/g.test(s) ? ' ' : ''}${s}`)
        .join('');
}

// -------------------------------------------------------------------------------------
// function solution(string) {
//     return (string.replace(/([A-Z])/g, ' $1'));
// }

console.log(solution('camelCasing'));
console.log(solution('identifier'));
console.log(solution(''));
console.log(solution('camelCasingTest'));
