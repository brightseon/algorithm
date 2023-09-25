function numberJoy(n) {
    const total = `${n}`.split('').reduce((a, b) => a + b, 0);
    const reverseTotal = `${total}`.split('').reduceRight((a, b) => `${a}${b}`, '');
}

console.log(numberJoy(1997));
console.log(numberJoy(1998));
console.log(numberJoy(1729));
console.log(numberJoy(18));
console.log(numberJoy(1));
console.log(numberJoy(81));
console.log(numberJoy(1458));
