var humanYearsCatYearsDogYears = function (humanYears) {
    const cat = [15, 9];
    const dog = [15, 9];
    if (humanYears === 1) return [1, cat[0], dog[0]];

    return [
        humanYears,
        cat.reduce((a, b) => a + b) + 4 * (humanYears - cat.length),
        dog.reduce((a, b) => a + b) + 5 * (humanYears - dog.length)
    ];
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
