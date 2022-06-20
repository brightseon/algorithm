function nbDig(n, d) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        const matchCount = `${i * i}`.match(new RegExp(d, 'g'));
        if (!matchCount) continue;

        count = count + matchCount.length;
    }

    return count;
}

console.log(nbDig(10, 1));
console.log(nbDig(25, 1));
console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));
