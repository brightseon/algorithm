const makeNegative = (num) => {
    if (num === 0) return num;

    return -Math.abs(num);
};

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
