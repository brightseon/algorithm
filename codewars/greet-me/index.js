var greet = function (name) {
    return `Hello ${name.toLowerCase().replace(/[a-z]{1}/, (str) => str.toUpperCase())}!`;
};

console.log(greet('riley'));
console.log(greet('JACK'));
