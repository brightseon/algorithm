function tailSwap(arr) {
    return arr.map((a, i) => a.replace(/(?<=:).+/, arr[i ^ 1].replace(/.+(?=:):/, '')));
}

console.log(tailSwap(['abc:123', 'cde:456']));
console.log(tailSwap(['a:12345', '777:xyz']));
