function arrayLeaders(numbers) {
    let total = numbers.reduce((a, b) => a + b, 0);

    return numbers.filter((number) => {
        total -= number;

        return number > total;
    });
}

console.log(arrayLeaders([1, 2, 3, 4, 0]));
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));

console.log(arrayLeaders([-1, -29, -26, -2]));
console.log(arrayLeaders([-36, -12, -27]));

console.log(arrayLeaders([5, -2, 2]));
console.log(arrayLeaders([0, -1, -29, 3, 2]));
