function isNice(arr) {
    if (arr.length === 0) return false;

    return arr.every((a) => arr.indexOf(a + 1) >= 0 || arr.indexOf(a - 1) >= 0);
}

console.log(isNice([2, 10, 9, 3]));
console.log(isNice([3, 4, 5, 7]));
