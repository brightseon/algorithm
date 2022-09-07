function remove(s, n) {
    if (!s.match(/!/g)) return s;
    if (s.match(/!/g).length <= n) return s.replace(/!/g, '');

    let str = s;

    for (let i = 0; i < n; i++) {
        str = str.replace('!', '');
    }

    return str;
}

console.log(remove('Hi!', 1));
console.log(remove('Hi!', 100));
console.log(remove('Hi!!!', 1));
console.log(remove('Hi!!!', 100));
console.log(remove('!Hi', 1));
console.log(remove('!Hi!', 1));
console.log(remove('!Hi!', 100));
console.log(remove('!!!Hi !!hi!!! !hi', 1));
console.log(remove('!!!Hi !!hi!!! !hi', 3));
console.log(remove('!!!Hi !!hi!!! !hi', 5));
console.log(remove('!!!Hi !!hi!!! !hi', 100));
console.log(remove('yclorp kwdlzy', 1));
