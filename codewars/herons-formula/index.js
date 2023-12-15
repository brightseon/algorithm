function heron(a, b, c) {
    const s = (a + b + c) / 2;

    return Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
}

console.log(heron(3, 4, 5));
console.log(heron(6, 8, 10));
