function solution(s) {
    return s
        .toLowerCase()
        .split(' ')
        .map((char) =>
            char
                .split('')
                .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c))
                .join('')
        )
        .join(' ');
}

console.log(solution('try hello world'));
