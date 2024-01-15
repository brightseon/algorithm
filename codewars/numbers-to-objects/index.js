function numObj(s) {
    return s.map((s) => ({ [s]: String.fromCharCode(s) }));
}

console.log(numObj([118, 117, 120]));
console.log(numObj([101, 121, 110, 113, 113, 103]));
