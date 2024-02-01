function getAges(sum, difference) {
    if (sum < 0 || difference < 0) return null;

    const x = (sum + difference) / 2;
    const y = sum - x;

    if (x < 0 || y < 0) return null;

    return [x, y];
}

console.log(getAges(24, 4));
console.log(getAges(63, -14));
