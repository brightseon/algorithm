function grow(x) {
    return x.reduce((a, b) => a * b, 1);
}

console.log(grow([1, 2, 3, 4]));
console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
