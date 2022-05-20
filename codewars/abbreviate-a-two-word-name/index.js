function abbrevName(name) {
    return name
        .split(' ')
        .reduce((a, b) => [...a, b.charAt(0).toUpperCase()], [])
        .join('.');
}

console.log(abbrevName('Sam Harris'));
console.log(abbrevName('Patrick Feenan'));
console.log(abbrevName('Evan Cole'));
console.log(abbrevName('P Favuzzi'));
console.log(abbrevName('David Mendieta'));
