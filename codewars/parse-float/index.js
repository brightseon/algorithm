function parseF(s) {
    return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF('1'));