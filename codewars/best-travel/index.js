const sums = (num, arr, n) => {
    if (n === 0) return num;

    return Array(arr.length - (n - 1))
        .fill(num)
        .reduce((a, b, i) => [...a, sums(b + arr[i], arr.slice(i + 1), n - 1)], []);
};

function chooseBestSum(t, k, ls) {
    if (ls.length < k) return null;

    const arr = ls
        .slice(0, ls.length - (k - 1))
        .map((l, i) => sums(l, ls.slice(i + 1), k - 1))
        .flat(k - 1)
        .filter((a) => a <= t);

    if (arr.length === 0) return null;

    return Math.max(...arr);
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
console.log(chooseBestSum(163, 3, [50]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
console.log(chooseBestSum(331, 2, [91, 74, 73, 85, 73, 81, 87]));
console.log(chooseBestSum(331, 4, [91, 74, 73, 85, 73, 81, 87]));
console.log(chooseBestSum(331, 5, [91, 74, 73, 85, 73, 81, 87]));
