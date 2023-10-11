var filterLucky = (x) => {
    return x.filter((x) => `${x}`.includes('7'));
};

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
console.log(filterLucky([71, 9907, 69]));
