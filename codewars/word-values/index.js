function wordValue(a) {
    return a.map((a, i) => {
        return (
            a
                .replace(/\s/g, '')
                .split('')
                .reduce((p, c) => {
                    return p + (c.charCodeAt(0) - 96);
                }, 0) *
            (i + 1)
        );
    });
}

console.log(wordValue(['codewars', 'abc', 'xyz']));
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc']));
