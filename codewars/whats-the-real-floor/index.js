function getRealFloor(n) {
    if (n < 0) return n;
    if (n > 13) return n - 2;

    return Math.max(n - 1, 0);
}

console.log(getRealFloor(1));
console.log(getRealFloor(5));
console.log(getRealFloor(15));
console.log(getRealFloor(0));
console.log(getRealFloor(-3));
