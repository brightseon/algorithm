function saleHotdogs(n) {
    let sale = 95;

    if (n < 5) sale = 100;
    if (n > 9) sale = 90;

    return n * sale;
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));
