function tripleX(str) {
    const idx = str.split('').findIndex((str) => str === 'x');

    if (idx < 0) return false;

    return str.slice(idx + 1, idx + 3) === 'xx';
}

console.log(tripleX('abraxxxas'));
console.log(tripleX('xoxotrololololololoxxx'));
console.log(tripleX('soft kitty, warm kitty, xxxxx'));
console.log(tripleX('softx kitty, warm kitty, xxxxx'));
