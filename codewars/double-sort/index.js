function dbSort(a) {
    return a.sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'string') {
            return -1;
        }

        if (typeof a === 'string' && typeof b === 'number') {
            return 1;
        }

        if (a < b) {
            return -1;
        }

        return a > b ? 1 : 0;
    });
}

console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort([14, 32, 3, 5, 5]));
console.log(dbSort([1, 2, 3, 4, 5]));
console.log(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));
console.log(dbSort(['C', 'W', 'W', 'W', 1, 2, 0]));
console.log(dbSort(['Apple', 46, '287', 574, 'Peach', '3', '69', 78, 'Grape', '423']));
