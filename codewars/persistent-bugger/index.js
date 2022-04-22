function persistence(num) {
    let count = 0,
        digit = num;
    while (digit >= 10) {
        digit = `${digit}`.split('').reduce((a, b) => {
            return +a * +b;
        }, 1);
        count++;
    }

    return count;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(25));
