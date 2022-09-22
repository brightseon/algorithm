function kebabize(str) {
    return str
        .replace(/[^a-z]/gi, '')
        .replace(/(^[a-z]$|[a-z][A-Z]+|[A-Z]+)/g, (str) => str.split('').join('-'))
        .toLowerCase();
}

console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('pxt'));
console.log(kebabize('VDln'));
console.log(kebabize('sX3Qj'));
