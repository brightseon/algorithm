reverse = function (array) {
    return array.reduce((a, b) => [b, ...a], []);
};

console.log(reverse([1, 2, 3]));
console.log(reverse([1, null, 14, 'two']));
