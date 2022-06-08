function sortArray(array) {
    if (array.length === 0) return array;
    const odd = array.filter((a) => a % 2 !== 0).sort((a, b) => a - b);

    return array.reduce((a, b) => {
        if (b % 2 === 0) return [...a, b];

        return [...a, odd.shift()];
    }, []);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));
console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
