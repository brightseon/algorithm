function squareArea(A) {
    return Math.round(Math.pow((A * 2) / Math.PI, 2) * 100) / 100;
}

console.log(squareArea(2));
console.log(squareArea(0));
console.log(squareArea(14.05));
