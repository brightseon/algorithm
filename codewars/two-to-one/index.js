function longest(s1, s2) {
    return `${s1}${s2}`
        .split('')
        .reduce((a, b) => {
            if (a.indexOf(b) !== -1) return a;

            return [...a, b];
        })
        .sort()
        .join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'));
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'));
console.log(longest('inmanylanguages', 'theresapairoffunctions'));
