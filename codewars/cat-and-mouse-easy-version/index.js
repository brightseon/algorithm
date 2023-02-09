function catMouse(x) {
    return /\./.test(x.replace(/\.{1,3}/, '')) ? 'Escaped!' : 'Caught!';
}

console.log(catMouse('C....m'));
console.log(catMouse('C..m'));
console.log(catMouse('C.....m'));
