function remove(string) {
    return string.replace(/(?<=\w)!+/gi, '');
}

console.log(remove('Hi!'));
console.log(remove('Hi!!!'));
console.log(remove('!Hi'));
console.log(remove('!Hi!'));
console.log(remove('Hi! Hi!'));
console.log(remove('!!!Hi !!hi!!! !hi'));
