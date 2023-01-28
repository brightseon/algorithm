const multiplyAll = (arr) => (num) => {
    return arr.map((a) => a * num);
};

console.log(multiply_all([1])(1));
console.log(multiply_all([1, 2])(1));
console.log(multiply_all([1, 2, 3])(1));
console.log(multiply_all([1, 2, 3])(2));
console.log(multiply_all([1, 2, 3])(0));
