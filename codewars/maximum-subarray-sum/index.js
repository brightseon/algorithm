var maxSequence = function (arr) {
    if (arr.length === 0) return 0;
    let sequence = 0;

    arr.reduce((a, b) => {
        let max = a + b;

        if (max < 0) return 0;
        if (sequence < max) sequence = max;

        return max;
    }, 0);

    return sequence;
};

console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
