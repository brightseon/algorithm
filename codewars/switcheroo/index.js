function switcheroo(x) {
    return x.replace(/[ab]/g, (str) => (str === 'a' ? 'b' : 'a'));
}

console.log(switcheroo('abc'));
console.log(switcheroo('aaabcccbaaa'));
console.log(switcheroo('ccccc'));
