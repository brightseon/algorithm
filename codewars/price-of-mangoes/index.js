function mango(quantity, price) {
    return (quantity - Math.floor(quantity / 3)) * price;
}

console.log(mango(3, 3));
console.log(mango(9, 5));
