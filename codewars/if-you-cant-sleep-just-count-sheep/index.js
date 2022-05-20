var countSheep = function (num) {
    return new Array(num)
        .fill(1)
        .map((_, i) => `${i + 1} sheep...`)
        .join('');
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
