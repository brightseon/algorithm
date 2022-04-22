const uniqueInOrder = (iterable) => {
    const arr = typeof iterable === 'string' ? iterable.split('') : iterable;

    return arr.reduce((a, b) => {
        if (a[a.length - 1] === b) return a;

        return [...a, b];
    }, []);
};

// ----------------------

// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
