function mostFrequentItemCount(collection) {
    console.log(collection);
    const counter = collection.reduce((a, b) => {
        if (!a[b]) {
            a[b] = 0;
        }

        a[b] += 1;

        return a;
    }, {});

    return Math.max(...Object.values(counter), 0);
}

console.log(mostFrequentItemCount([3, -1, -1]));
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));
