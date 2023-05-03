function explode(s) {
    return s.split('').reduce((a, b) => `${a}${b.repeat(b)}`, '');
}

console.log(explode(['312']));
console.log(explode(['102269']));
console.log(explode(['0']));
console.log(explode(['000']));
console.log(explode(['123']));
