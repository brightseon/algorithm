function whoIsPaying(name) {
    if (name.length <= 2) return [name];

    return [name, name.split('').slice(0, 2).join('')];
}

console.log(whoIsPaying('Mexico'));
console.log(whoIsPaying('Melania'));
console.log(whoIsPaying('Melissa'));
console.log(whoIsPaying('Me'));
console.log(whoIsPaying(''));
console.log(whoIsPaying('I'));
