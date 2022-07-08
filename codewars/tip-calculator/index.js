function calculateTip(amount, rating) {
    const RATING = {
        excellent: 20,
        great: 15,
        good: 10,
        poor: 5,
        terrible: 0
    };

    const rate = RATING[rating.toLowerCase()];

    if (rate !== 0 && !rate) return 'Rating not recognised';

    return Math.ceil(amount * (rate / 100));
}

console.log(calculateTip(20, 'Excellent'));
console.log(calculateTip(26.95, 'good'));
console.log(calculateTip(20, 'hi'));
console.log(calculateTip(10, 'Terrible'));
console.log(calculateTip(26.95, 'gOod'));
console.log(calculateTip(107.65, 'GReat'));
console.log(calculateTip(26.95, 'gOod'));
