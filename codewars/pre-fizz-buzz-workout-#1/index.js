function preFizz(n) {
    let fizz = [];
    for (let i = 0; i < n; i++) {
        fizz.push(i + 1);
    }

    return fizz;
}

console.log(preFizz(1));
console.log(preFizz(2));
console.log(preFizz(3));
console.log(preFizz(4));
console.log(preFizz(5));
