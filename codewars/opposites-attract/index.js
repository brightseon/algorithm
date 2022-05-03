function lovefunc(flower1, flower2) {
    return [flower1, flower2].reduce((a, b) => a + b, 0) % 2 !== 0;
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));
