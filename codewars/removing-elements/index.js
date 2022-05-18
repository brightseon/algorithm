function removeEveryOther(arr) {
    return arr.reduce((a, b, i) => {
        if (i % 2 !== 0) return a;

        return [...a, b];
    }, []);
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([[1, 2]]));
console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }]));
