function revrot(str, sz) {
    if (!str || sz === 0 || str.length < sz) return '';

    let arr = [];
    for (let i = 0; i < Math.floor(str.length / sz); i++) {
        const sliceStr = str.slice(i * sz, (i + 1) * sz);
        if (sliceStr.length < sz) break;
        const splitStr = sliceStr.split('');
        if (splitStr.reduce((a, b) => a + Math.pow(b, 3), 0) % 2 === 0) {
            arr = [...arr, splitStr.reverse().join('')];
            continue;
        }

        arr = [...arr, [...splitStr.slice(1), splitStr[0]].join('')];
    }

    return arr.join('');
}

console.log(revrot('1234', 0));
console.log(revrot('', 0));
console.log(revrot('1234', 5));
console.log(revrot('733049910872815764', 5));
console.log(revrot('56300065573446948588855', 3));
