const repeatStr = (n, s) => {
    let i = n,
        str = '';

    while (i > 0) {
        str += s;
        --i;
    }

    return str;
};

// ------------------------------------------
// const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(3, '*'));
console.log(repeatStr(6, 'I'));
console.log(repeatStr(5, 'Hello'));
console.log(repeatStr(5, '#'));
console.log(repeatStr(2, 'ha '));
