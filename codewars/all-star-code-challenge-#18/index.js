function strCount(str, letter) {
    return str.replace(new RegExp(`[^${letter}]`, 'gi'), '').length;
}

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));
