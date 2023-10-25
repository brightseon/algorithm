function circleArea(radius) {
    if (radius < 1) throw Error();

    return radius ** 2 * Math.PI;
}

console.log(circleArea(1));
console.log(circleArea(43.2673));
console.log(circleArea(68));
console.log(circleArea(0));
console.log(circleArea(-1));
