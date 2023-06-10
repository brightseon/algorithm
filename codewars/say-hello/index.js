function greet(name) {
    if (!name) return null;

    return `hello ${name}!`;
}

console.log(greet('Niks'));
console.log(greet(null));
