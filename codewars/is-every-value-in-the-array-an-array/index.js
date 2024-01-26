const arrCheck = (value) => {
    return value.every((val) => Array.isArray(val));
};

console.log(arrCheck([]));
console.log(arrCheck([['string']]));
console.log(arrCheck([[], {}]));
console.log(arrCheck([[1], [2], [3]]));
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']));
