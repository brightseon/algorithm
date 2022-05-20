var number = function (array) {
    return array.map((a, i) => `${i + 1}: ${a}`);
};

console.log(number([]));
console.log(number(['a', 'b', 'c']));
