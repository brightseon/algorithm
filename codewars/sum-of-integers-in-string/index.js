function sumOfIntegersInString(s) {
    return [...(s.match(/\d+/g) || [])].reduce((a, b) => a + +b, 0);
}

console.log(sumOfIntegersInString('12.4'));
console.log(sumOfIntegersInString('h3ll0w0rld'));
console.log(sumOfIntegersInString('2 + 3 = '));
console.log(
    sumOfIntegersInString('Our company made approximately 1 million in gross revenue last quarter.')
);
console.log(sumOfIntegersInString('The Great Depression lasted from 1929 to 1939.'));
console.log(sumOfIntegersInString('Dogs are our best friends.'));
console.log(sumOfIntegersInString('C4t5 are 4m4z1ng.'));
console.log(sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'));
