const findAll = (array, n) => {
    return array.reduce((a, b, i) => {
        if (b === n) a.push(i);

        return a;
    }, []);
};

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16));
console.log(
    findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20)
);
