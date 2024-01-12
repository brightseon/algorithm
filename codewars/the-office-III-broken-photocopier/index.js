function broken(x) {
    return x
        .split('')
        .map((x) => `${+x ^ 1}`)
        .join('');
}

console.log(broken('1'));
console.log(broken('10000000101101111110011001000'));
console.log(broken('100010'));
