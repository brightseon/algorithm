function bandNameGenerator(str) {
    return str[0] === str[str.length - 1]
        ? `${str[0].toUpperCase()}${Array(2).fill(str.slice(1)).join('')}`
        : `The ${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(bandNameGenerator('knife'));
console.log(bandNameGenerator('tart'));
console.log(bandNameGenerator('sandles'));
console.log(bandNameGenerator('bed'));
