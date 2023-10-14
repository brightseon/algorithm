function balancedNum(number) {
    const numbers = `${number}`.split('');
    const size = numbers.length;

    if (size < 3) return 'Balanced';

    const isEven = size % 2 === 0;
    const center = Math.floor(size / 2);
    let left = numbers.slice(0, center);
    let right = numbers.slice(center + 1);

    if (isEven) {
        left = left.slice(0, left.length - 1);
    }

    const leftSum = left.reduce((a, b) => a + +b, 0);
    const rightSum = right.reduce((a, b) => a + +b, 0);

    return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

console.log(balancedNum(7));
console.log(balancedNum(959));
console.log(balancedNum(13));
console.log(balancedNum(432));
console.log(balancedNum(424));

console.log(balancedNum(1024));
console.log(balancedNum(66545));
console.log(balancedNum(295591));
console.log(balancedNum(1230987));
console.log(balancedNum(56239814));
