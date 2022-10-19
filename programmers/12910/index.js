function solution(arr, divisor) {
    const sortArr = arr.sort((a, b) => a - b);
    if (divisor === 1) return sortArr;
    if (sortArr[sortArr.length - 1] < divisor) return [-1];

    const results = sortArr.filter((a) => a % divisor === 0);

    return results.length === 0 ? [-1] : results;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
