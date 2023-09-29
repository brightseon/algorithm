function isSortedAndHow(array) {
    if (array.slice(1).every((a, i) => a >= array[i])) return 'yes, ascending';
    if (array.slice(1).every((a, i) => a <= array[i])) return 'yes, descending';

    return 'no';
}

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
