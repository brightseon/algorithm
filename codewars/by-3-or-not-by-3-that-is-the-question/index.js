function divisibleByThree(str) {
    return str.split('').reduce((a, b) => a + +b, 0) % 3 === 0;
}

console.log(divisibleByThree('123'));
console.log(divisibleByThree('19254'));
console.log(divisibleByThree('88'));
console.log(divisibleByThree('1'));
