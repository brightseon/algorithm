// const XO = (str) => (str.match(/[o]/gi)?.length || 0) === (str.match(/[x]/gi)?.length || 0);
const XO = (str) => {
    const x = str.match(/[o]/gi);
    const y = str.match(/[x]/gi);

    return (x ? x.length : 0) === (y ? y.length : 0);
};

// --------------------------------------------------------
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));
