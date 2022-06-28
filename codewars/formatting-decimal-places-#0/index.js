function twoDecimalPlaces(n) {
    return Math.round(n * 100) / 100;
}

console.log(twoDecimalPlaces(4.659725356));
console.log(twoDecimalPlaces(173735326.3783732637948948));
console.log(twoDecimalPlaces(4.653725356));
