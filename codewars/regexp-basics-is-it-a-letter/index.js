String.prototype.isLetter = function () {
    return /^[a-z]$/i.test(this);
};

console.log(''.isLetter());
console.log('a'.isLetter());
console.log('X'.isLetter());
console.log('7'.isLetter());
console.log('*'.isLetter());
console.log('ab'.isLetter());
console.log('a\n'.isLetter());
