String.prototype.digit = function () {
    return /^[0-9]$/.test(this);
};

console.log(''.digit());
console.log('7'.digit());
console.log(' '.digit());
console.log('a'.digit());
console.log('a5'.digit());
console.log('14'.digit());
