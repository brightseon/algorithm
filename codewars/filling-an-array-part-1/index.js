const arr = (N) => {
    if (!N) return [];

    return new Array(N).fill(0).map((n, i) => n + i);
};

console.log(arr(4));
console.log(arr(5));
