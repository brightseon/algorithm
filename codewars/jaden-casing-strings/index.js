String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map((s) => s.replace(/^\w/i, (v) => v.toUpperCase()))
        .join(' ');
};

const str = `How can mirrors be real if our eyes aren't real`;
console.log(str.toJadenCase());
