function average(scores) {
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

console.log(average([49, 3, 5, 300, 7]));
console.log(average([90, 98, 89, 100, 100, 86, 94]));
