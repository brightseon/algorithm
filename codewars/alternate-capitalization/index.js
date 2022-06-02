function capitalize(s) {
    return s.split('').reduce((a, b, i) => {
        a[0] = `${a[0] || ''}${b[i % 2 === 0 ? 'toUpperCase' : 'toLowerCase']()}`;
        a[1] = `${a[1] || ''}${b[i % 2 === 0 ? 'toLowerCase' : 'toUpperCase']()}`;

        return a;
    }, []);
}

console.log(capitalize('abcdef'));
console.log(capitalize('codewars'));
console.log(capitalize('abracadabra'));
console.log(capitalize('codewarriors'));
