function jumpingNumber(n) {
    const splitStr = `${n}`.split('');

    for (let i = 1; i < splitStr.length; i++) {
        if (Math.abs(splitStr[i - 1] - splitStr[i]) === 1) continue;

        return 'Not!!';
    }

    return 'Jumping!!';
}

console.log(jumpingNumber(1));
console.log(jumpingNumber(7));
console.log(jumpingNumber(9));
console.log(jumpingNumber(23));
console.log(jumpingNumber(32));
console.log(jumpingNumber(79));
console.log(jumpingNumber(98));
console.log(jumpingNumber(8987));
console.log(jumpingNumber(4343456));
console.log(jumpingNumber(98789876));
