function freqSeq(str, sep) {
    const charArr = str.split('');

    return charArr.map((char) => charArr.filter((s) => s === char).length).join(sep);
}

console.log(freqSeq('hello world', '-'));
console.log(freqSeq('19999999', ':'));
console.log(freqSeq('^^^**$', 'x'));
