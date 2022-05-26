function remove(string) {
    return string.replace(/!$/, '');
}

console.log(remove('Hi!'));
console.log(remove('Hi!!!'));
console.log(remove('!Hi'));
console.log(remove('!Hi!'));
console.log(remove('Hi! Hi!'));
console.log(remove('Hi'));
