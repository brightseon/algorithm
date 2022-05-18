function cockroachSpeed(s) {
    if (s === 0) return s;

    return Math.floor((s * 100000) / 3600);
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));
