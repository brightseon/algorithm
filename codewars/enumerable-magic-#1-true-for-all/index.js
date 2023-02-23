function all(arr, fun) {
    return arr.every((a) => fun(a));
}

console.log(
    all([1, 2, 3, 4, 5], function (v) {
        return v < 9;
    })
);
console.log(
    all([1, 2, 3, 4, 5], function (v) {
        return v > 9;
    })
);
