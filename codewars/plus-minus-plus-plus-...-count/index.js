function catchSignChange(arr) {
    let startSign = arr[0];

    return arr.slice(1).reduce((a, b) => {
        if (startSign >= 0 && b >= 0) return a;
        if (startSign < 0 && b < 0) return a;

        startSign = b;
        a += 1;

        return a;
    }, 0);
}

console.log(catchSignChange([]));
console.log(catchSignChange([1, 3, 4, 5]));
console.log(catchSignChange([-1, -3, -4, -5]));
console.log(catchSignChange([1, -3, -4, 0, 5]));
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77]));
