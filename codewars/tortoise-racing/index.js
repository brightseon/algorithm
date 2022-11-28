function race(v1, v2, g) {
    if (v2 - v1 <= 0) return null;
    const time = (g * 3600) / (v2 - v1);

    return [Math.floor(time / 3600), Math.floor((time % 3600) / 60), Math.floor(time % 60)];
}

console.log(race(720, 850, 70));
console.log(race(80, 91, 37));
console.log(race(543, 579, 64));
