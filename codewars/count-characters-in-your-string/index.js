function count(string) {
    return string.split('').reduce(
        (a, b) => ({
            ...a,
            [b]: (a[b] || 0) + 1
        }),
        {}
    );
}

console.log(count('aba'));
console.log(count(''));
