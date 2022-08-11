function highestRank(arr) {
    const results = arr.reduce((a, b) => {
        if (!a[b]) a[b] = 0;

        a[b] += 1;

        return a;
    }, {});
    const max = Math.max(...Object.values(results));
    const keys = Object.keys(results).filter((a) => results[a] === max);

    return +keys[keys.length - 1];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
