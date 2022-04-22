const isTriangle = (a, b, c) => {
    const numbers = [a, b, c].sort((a, b) => a - b);

    return numbers[0] + numbers[1] > numbers[numbers.length - 1];
};

// --------------------------------------------------------------------
// function isTriangle(a,b,c) {
//    return a + b > c && a + c > b && c + b > a;
// }

// const isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) /2

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
