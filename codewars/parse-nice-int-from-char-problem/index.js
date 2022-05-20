function getAge(inputString) {
    return +inputString.match(/\d/gi)[0];
}

console.log(getAge('4 years old'));
