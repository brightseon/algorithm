function accum(s) {
    return s
        .toLowerCase()
        .split('')
        .map((str, idx) => str.toUpperCase().padEnd(idx + 1, str))
        .join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));
console.log(accum('ZpglnRxqenU'));
console.log(accum('NyffsGeyylB'));
console.log(accum('MjtkuBovqrU'));
console.log(accum('EvidjUnokmM'));
console.log(accum('HbideVbxncC'));
