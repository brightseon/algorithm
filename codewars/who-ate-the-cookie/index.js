function cookie(x) {
    const PREFIX = 'Who ate the last cookie? It was';

    if (typeof x === 'string') return `${PREFIX} Zach!`;
    if (typeof x === 'number') return `${PREFIX} Monica!`;

    return `${PREFIX} the dog!`;
}

console.log(cookie('Ryan'));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));
