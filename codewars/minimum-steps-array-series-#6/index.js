function minimumSteps(numbers, value) {
    const sortNumbers = numbers.sort((a, b) => a - b);
    let num = value;

    for (let i = 0; i < numbers.length; i++) {
        num -= sortNumbers[i];

        if (num < 1) return i;
    }
}

console.log(minimumSteps([4, 6, 3], 7));
console.log(minimumSteps([10, 9, 9, 8], 17));
console.log(minimumSteps([8, 9, 10, 4, 2], 23));
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
console.log(minimumSteps([4, 6, 3], 2));
