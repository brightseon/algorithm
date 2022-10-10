function solution(s) {
    return s.replace(/p/gi, '').length === s.replace(/y/gi, '').length;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
