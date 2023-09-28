function reverseBits(n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
}

console.log(reverseBits(417));
console.log(reverseBits(267));
console.log(reverseBits(0));
console.log(reverseBits(2017));
console.log(reverseBits(1023));
console.log(reverseBits(1024));
console.log(reverseBits(Number.MAX_SAFE_INTEGER));
