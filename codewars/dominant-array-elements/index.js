function solve(arr) {
    return arr.reduce((a, b, i) => {
        if (arr.slice(i + 1).every((x) => b > x)) a.push(b);

        return a;
    }, []);
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]));
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]));
console.log(solve([75, 47, 42, 56, 13, 55]));
console.log(solve([67, 54, 27, 85, 66, 88, 31, 24, 49]));
console.log(solve([76, 17, 25, 36, 29]));
console.log(solve([104, 18, 37, 9, 36, 47, 28]));
