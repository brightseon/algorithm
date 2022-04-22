function getDivisorsCnt(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) arr.push(i);
    }

    return arr.length;
}

// ----------------------------------------
// function getDivisorsCnt(n) {
//     let d = 0;
//     for (let i = n; i > 0; i--) {
//         if (n % i === 0) d++;
//     }

//     return d;
// }

console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(30));
