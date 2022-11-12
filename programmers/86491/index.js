function solution(sizes) {
    const [x, y] = sizes.reduce((a, b) => {
        a[0] = Math.max(a[0] || 0, Math.max(...b));
        a[1] = Math.max(a[1] || 0, Math.min(...b));

        return a;
    }, []);

    return x * y;
}

console.log(
    solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40]
    ])
);
console.log(
    solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15]
    ])
);
console.log(
    solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11]
    ])
);
