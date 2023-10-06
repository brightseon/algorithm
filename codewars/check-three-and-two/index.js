function checkThreeAndTwo(array) {
    return Object.values(
        array.reduce((a, b) => {
            if (!a[b]) a[b] = 0;
            a[b] += 1;

            return a;
        }, {})
    ).every((a) => [3, 2].includes(a));
}

console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b']));
console.log(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b']));
console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a']));
