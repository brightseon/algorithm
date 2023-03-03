function barTriang(p1, p2, p3) {
    const x0 = +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
    const y0 = +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);

    return [x0, y0];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]));
console.log(barTriang([4, 2], [12, 2], [6, 10]));
console.log(barTriang([4, 8], [8, 2], [16, 6]));
console.log(barTriang([0, 0], [1, 3], [-1, 6]));
console.log(barTriang([0, 0], [1, 6], [8, -6]));
