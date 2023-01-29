function ensureQuestion(s) {
    return /\?$/.test(s) ? s : `${s}?`;
}

console.log(ensureQuestion(''));
console.log(ensureQuestion('Yes'));
console.log(ensureQuestion('No?'));
