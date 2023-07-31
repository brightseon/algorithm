function replace(str) {
    return str.replace(/!/g, 2).replace(/\?/g, 3);
}

function sum(texts) {
    return texts.split('').reduce((a, b) => +a + +b, 0);
}

function balance(left, right) {
    const l = sum(replace(left));
    const r = sum(replace(right));

    if (l > r) {
        return 'Left';
    }

    if (l < r) {
        return 'Right';
    }

    return 'Balance';
}

console.log(balance('!!', '??'));
console.log(balance('!??', '?!!'));
console.log(balance('!?!!', '?!?'));
console.log(balance('!!???!????', '??!!?!!!!!!!'));
