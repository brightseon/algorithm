function findMissingNumber(sequence) {
    if (sequence.length === 0) return 0;

    const splitSequence = sequence.split(' ').sort((a, b) => +a - +b);
    const onlyNumber = splitSequence.every((s) => Number.isInteger(+s));

    if (!onlyNumber) return 1;

    for (let i = 0; i < splitSequence.length; i++) {
        if (+splitSequence[i] !== i + 1) return i + 1;
    }

    return 0;
}

console.log(findMissingNumber('1 2 3 5'));
console.log(findMissingNumber('1 3'));
console.log(findMissingNumber('1 5'));
console.log(findMissingNumber(''));
console.log(findMissingNumber('1 2 3 4 5'));
console.log(findMissingNumber('2 3 4 5'));
console.log(findMissingNumber('2 6 4 5 3'));
console.log(findMissingNumber('2 1 4 3 a'));
