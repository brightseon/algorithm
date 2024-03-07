function containAllRots(strng, arr) {
    for (let i = 0; i < strng.length; i++) {
        const rotatedStr = strng.slice(i) + strng.slice(0, i);
        if (!arr.includes(rotatedStr)) {
            return false;
        }
    }

    return true;
}

console.log(containAllRots('', []));
console.log(containAllRots('', ['bsjq', 'qbsj']));
console.log(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']));
console.log(
    containAllRots('XjYABhR', [
        'TzYxlgfnhf',
        'yqVAuoLjMLy',
        'BhRXjYA',
        'YABhRXj',
        'hRXjYAB',
        'jYABhRX',
        'XjYABhR',
        'ABhRXjY'
    ])
);
