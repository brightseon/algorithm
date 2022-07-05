function pickIt(arr) {
    var odd = [],
        even = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        current % 2 > 0 ? odd.push(current) : even.push(current);
    }

    return [odd, even];
}

console.log(pickIt([1, 2]));
console.log(pickIt([1, 2, 3]));
console.log(pickIt([3, 2, 1]));
console.log(pickIt([10, 20, 30]));
console.log(pickIt([11, 21, 31]));
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
