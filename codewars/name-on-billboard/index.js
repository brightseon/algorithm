function billboard(name, price = 30) {
    return Array(price)
        .fill(name.length)
        .reduce((a, b) => a + b, 0);
}

console.log(billboard('Jeong-Ho Aristotelis'));
console.log(billboard('Abishai Charalampos'));
console.log(billboard('Idwal Augustin'));
console.log(billboard('Hadufuns John', 20));
console.log(billboard('Zoroaster Donnchadh'));
console.log(billboard('Claude Miljenko'));
console.log(billboard('Werner Vígi', 15));
console.log(billboard('Anani Fridumar'));
console.log(billboard('Paolo Oli'));
console.log(billboard('Hjalmar Liupold', 40));
console.log(billboard('Simon Eadwulf'));
