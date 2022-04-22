function comp(array1, array2) {
    if (!(array1 && array2)) return false;

    const a1 = [...array1].sort();
    const a2 = array2.map((a) => Math.sqrt(a)).sort();

    return JSON.stringify(a1) === JSON.stringify(a2);
}

// --------------------------------------------------------
// function comp(array1, array2) {
//     const a1 = [...array1].sort();
//     const a2 = array2.map((a) => Math.sqrt(a)).sort();

//     return a1.every((a, i) => a === a2[i]);
// }

// function comp(array1, array2) {
//     const a1 = [...array1].sort();
//     const a2 = array2.map((a) => Math.sqrt(a)).sort();

//     return a1.join('') === a2.join('');
// }

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2));
a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a1, a2));
