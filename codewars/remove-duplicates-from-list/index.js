function distinct(a) {
    return [...new Set(a)];
}

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));
