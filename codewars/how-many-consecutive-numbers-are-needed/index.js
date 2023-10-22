function consecutive(array) {
    if (array.length < 2) {
        return 0;
    }

    const consecutiveLength = Math.max(...array) - Math.min(...array) + 1;

    return consecutiveLength - array.length;
}

console.log(consecutive([4, 8, 6]));
console.log(consecutive([1, 2, 3, 4]));
console.log(consecutive([]));
console.log(consecutive([1]));
