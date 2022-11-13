function solution(strings, n) {
    return strings.sort((a, b) => {
        const aChar = a.charAt(n);
        const bChar = b.charAt(n);
        if (aChar === bChar) return a > b ? 1 : -1;

        return aChar > bChar ? 1 : -1;
    });
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
