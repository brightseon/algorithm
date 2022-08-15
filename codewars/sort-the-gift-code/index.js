function sortGiftCode(code) {
    return code.split('').sort().join('');
}

console.log(sortGiftCode('abcdef'));
console.log(sortGiftCode('pqksuvy'));
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'));
