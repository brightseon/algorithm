function findNb(m) {
    let n = 0;

    while (Math.pow((n * (n + 1)) / 2, 2) <= m) {
        if (Math.pow((n * (n + 1)) / 2, 2) === m) return n;

        n++;
    }

    return -1;
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));
console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));
