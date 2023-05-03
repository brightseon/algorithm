function newAvg(arr, newavg) {
    try {
        const x = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);

        if (x < 0) throw Error('Expected New Average is too low');

        return Math.ceil(x);
    } catch (err) {
        throw err;
    }
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92));
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2));
