function pigIt(str) {
    return str
        .split(' ')
        .map((s) => s)
        .join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));
console.log(pigIt('Hello world !'));
