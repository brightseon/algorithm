function sumDigPow(a, b) {
    let arr = [];
    for (let i = a; i < b; i++) {
        if (i < 10) {
            arr.push(i);
            continue;
        }
        const result = `${i}`.split('').reduce((a, b, i) => a + Math.pow(b, i + 1), 0);

        if (i === result) arr.push(i);
    }

    return arr;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(90, 150));
console.log(sumDigPow(50, 150));
console.log(sumDigPow(10, 150));
