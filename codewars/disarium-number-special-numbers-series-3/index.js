function disariumNumber(n) {
    const disarium = `${n}`.split('').reduce((a, b, i) => a + Math.pow(b, i + 1), 0);

    return disarium === n ? 'Disarium !!' : 'Not !!';
}

console.log(disariumNumber(89));
console.log(disariumNumber(564));
console.log(disariumNumber(1024));
console.log(disariumNumber(135));
console.log(disariumNumber(136586));
