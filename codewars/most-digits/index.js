function findLongest(array) {
    return array.slice(1).reduce((a, b) => {
        if (`${a}`.length >= `${b}`.length) return a;

        return b;
    }, array[0]);
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([9000, 8, 800]));
console.log(findLongest([8, 900, 500]));
