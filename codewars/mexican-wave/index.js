function wave(str) {
    return str
        .toUpperCase()
        .split('')
        .reduce((a, b, i) => {
            if (/\s/g.test(b)) return a;

            return [...a, `${str.slice(0, Math.max(i, 0))}${b}${str.slice(i + 1)}`];
        }, []);
}

console.log(wave('hello'));
console.log(wave('codewars'));
console.log(wave('two words'));
console.log(wave(' gap '));
