function sevenAte9(str) {
    str.replace(/79(?=7)/g, '7');
}

console.log(sevenAte9('797'));
console.log(sevenAte9('7979797'));
console.log(sevenAte9('165561786121789797'));
