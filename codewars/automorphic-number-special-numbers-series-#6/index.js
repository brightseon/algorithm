function automorphic(n) {
    const squaredString = `${Math.pow(n, 2)}`;
    const idx = `${n}`.length;
    const slicing = squaredString.slice(squaredString.length - idx);

    if (parseInt(slicing) === n) {
        return 'Automorphic';
    }

    return 'Not!!';
}

console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(6));
console.log(automorphic(9));
console.log(automorphic(25));
console.log(automorphic(53));
console.log(automorphic(76));
console.log(automorphic(95));
console.log(automorphic(625));
console.log(automorphic(225));
