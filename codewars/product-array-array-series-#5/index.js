const multiply = (numbers) => {
    return numbers.reduce((a, b) => a * b, 1);
};

function productArray(numbers) {
    return numbers.map((_, i) => multiply([...numbers.slice(0, i), ...numbers.slice(i + 1)]));
}

console.log(productArray([12, 20]));
console.log(productArray([3, 27, 4, 2]));
console.log(productArray([13, 10, 5, 2, 9]));
console.log(productArray([16, 17, 4, 3, 5, 2]));
