function solution(arr1, arr2) {
    return arr1.map((a1, i1) => a1.map((a, i) => a + arr2[i1][i]));
}

console.log(
    solution(
        [
            [1, 2],
            [2, 3]
        ],
        [
            [3, 4],
            [5, 6]
        ]
    )
);
console.log(solution([[1], [2]], [[3], [4]]));
