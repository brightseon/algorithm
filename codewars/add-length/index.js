function addLength(str) {
    return str.split(' ').map((s) => `${s} ${s.length}`);
}

console.log(addLength('apple ban'));
console.log(addLength('you will win'));
