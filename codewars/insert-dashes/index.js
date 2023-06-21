function insertDash(num) {
    return `${num}`.replace(/[13579]+/g, (match) => match.split('').join('-'));
}

console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));
