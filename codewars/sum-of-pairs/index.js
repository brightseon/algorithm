function sumPairs(ints, s) {
    let arr = new Set([ints[0]]);

    for (let i = 1; i < ints.length; i++) {
        const two = ints[i];
        const one = s - two;

        if (arr.has(one)) return [one, two];

        arr.add(two);
    }

    return;
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([20, -13, 40], -7));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([4, -2, 3, 3, 4], 8));
console.log(sumPairs([0, 2, 0], 0));
console.log(sumPairs([5, 9, 13, -3], 10));
