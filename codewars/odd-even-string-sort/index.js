function sortMyString(S) {
    return S.split('')
        .reduce((a, b, i) => {
            const idx = i % 2 === 0 ? 0 : 1;
            a[idx] = a[idx] + b;

            return a;
        }, Array(2).fill(''))
        .join(' ');
}

console.log(sortMyString('CodeWars'));
console.log(sortMyString("YCOLUE'VREER"));
