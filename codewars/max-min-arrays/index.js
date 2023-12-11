function solve(arr) {
    const asc = Array.from(arr).sort((a, b) => a - b);
    const desc = Array.from(asc).reverse();

    return arr.map((_, i) => (i % 2 === 0 ? asc.pop() : desc.pop()));
}

console.log(solve([15, 11, 10, 7, 12]));
console.log(solve([91, 75, 86, 14, 82]));
console.log(solve([84, 79, 76, 61, 78]));
console.log(solve([52, 77, 72, 44, 74, 76, 40]));
console.log(solve([1, 6, 9, 4, 3, 7, 8, 2]));
console.log(solve([78, 79, 52, 87, 16, 74, 31, 63, 80]));
