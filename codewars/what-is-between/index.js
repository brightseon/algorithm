function between(a, b) {
    let arr = [];

    for (let i = 0; i <= b - a; i++) {
        console.log(i);
        arr.push(a + i);
    }

    return arr;
}

console.log(between(1, 4));
console.log(between(-2, 2));
