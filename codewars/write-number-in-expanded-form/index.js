function expandedForm(num) {
    const str = `${num}`;

    return str
        .split('')
        .reduce((a, b, i) => {
            if (b === '0') return a;
            return [...a, b.padEnd(str.length - i, '0')];
        }, [])
        .join(' + ');
}

// ----------------------------------------------
// function expandedForm(num) {
//     return num.toString().split('')
//         .reverse()
//         .map((num, index) => num * (10 ** index))
//         .filter(num => num !== 0)
//         .reverse()
//         .join(' + ')
// }

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
