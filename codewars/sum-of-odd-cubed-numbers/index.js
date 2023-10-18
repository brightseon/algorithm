function cubeOdd(arr) {
    const isOnlyNumbers = arr.every((a) => typeof a === 'number');

    if (!isOnlyNumbers) return;

    return arr.reduce((a, b) => {
        const cube = Math.pow(b, 3);

        if (cube % 2 === 0) return a;

        return a + cube;
    }, 0);
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([-3, -2, 2, 3]));
console.log(cubeOdd(['a', 12, 9, 'z', 42]));
