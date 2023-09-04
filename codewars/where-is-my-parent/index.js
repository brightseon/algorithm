function findChildren(dancingBrigade) {
    return dancingBrigade
        .replace(/[a-z]/g, '')
        .split('')
        .sort()
        .map((a) => a + dancingBrigade.replace(new RegExp(`[^${a.toLowerCase()}]`, 'g'), ''))
        .join('');
}

console.log(findChildren('abBA'));
console.log(findChildren('AaaaaZazzz'));
console.log(findChildren('CbcBcbaA'));
console.log(findChildren('xXfuUuuF'));
console.log(findChildren(''));
