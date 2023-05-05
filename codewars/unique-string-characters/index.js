function solve(a, b) {
    return a
        .split('')
        .reduce(
            (p, c) => {
                if (!b.includes(c)) return p;
                const regex = new RegExp(c, 'g');

                return [p[0].replace(regex, ''), p[1].replace(regex, '')];
            },
            [a, b]
        )
        .join('');
}

console.log(solve('xyab', 'xzca'));
console.log(solve('xyabb', 'xzca'));
console.log(solve('abcd', 'xyz'));
console.log(solve('xxx', 'xzca'));
