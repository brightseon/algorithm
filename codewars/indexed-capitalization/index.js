function capitalize(s, arr) {
    return arr.reduce((a, b) => {
        return a.slice(0, b) + a.slice(b).replace(/./, (match) => match.toUpperCase());
    }, s);
}

console.log(capitalize('abcdef', [1, 2, 5]));
console.log(capitalize('abcdef', [1, 2, 5, 100]));
console.log(capitalize('codewars', [1, 3, 5, 50]));
console.log(capitalize('abracadabra', [2, 6, 9, 10]));
console.log(capitalize('codewarriors', [5]));
console.log(capitalize('indexinglessons', [0]));
