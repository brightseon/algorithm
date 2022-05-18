function firstNonConsecutive(arr) {
    if (arr.length < 2) return null;
    const leng = arr.filter((a, i) => arr[0] + i === a).length;

    if (leng === arr.length) return null;
    return arr[leng];
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7]));
console.log(firstNonConsecutive([3, 6, 7, 8, 9]));
console.log(firstNonConsecutive([]));
console.log(firstNonConsecutive([-3, -1, 0, 1, 2]));
console.log(firstNonConsecutive([-4, -3, -2, 0, 1, 2, 3, 4]));
console.log(firstNonConsecutive([10, 11, 12, 13, 14, 15, 16, 17]));
console.log(firstNonConsecutive([4, 6, 7, 8, 9, 10, 11, 12, 13]));
