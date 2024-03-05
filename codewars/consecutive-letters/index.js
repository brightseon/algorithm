function solve(s) {
    if ([...new Set(s)].length !== s.length) return false;

    const sortS = s.split('').sort();

    for (let i = 0; i < s.length - 1; i++) {
        if (sortS[i].charCodeAt(0) + 1 !== sortS[i + 1].charCodeAt(0)) return false;
    }

    return true;
}

console.log(solve('abc'));
console.log(solve('abd'));
console.log(solve('dabc'));
console.log(solve('abbc'));
