const prevMultOfThree = (n) => {
    for (let i = 0; i < `${n}`.length; i++) {
        const num = +`${n}`.slice(0, `${n}`.length - i);

        if (num % 3 === 0) return num;
    }

    return null;
};

console.log(prevMultOfThree(1));
console.log(prevMultOfThree(25));
console.log(prevMultOfThree(36));
console.log(prevMultOfThree(1244));
console.log(prevMultOfThree(952406));
