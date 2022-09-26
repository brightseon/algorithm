// return masked string
function maskify(cc) {
    if (cc.length < 4) return cc;

    return `${cc.slice(0, cc.length - 4).replace(/./g, '#')}${cc.slice(cc.length - 4)}`;
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));
