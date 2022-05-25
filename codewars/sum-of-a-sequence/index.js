const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    if (begin === end) return begin;
    const count = Math.round((end - begin) / step);

    return count * begin + (step * count * (count + 1)) / 2 + begin;
};

console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
console.log(sequenceSum(0, 15, 3));
console.log(sequenceSum(946, 797, 12));
