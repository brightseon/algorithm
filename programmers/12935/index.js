function solution(arr) {
    if (arr.length < 2) return [-1];
    const idx = arr.indexOf(Math.min(...arr));

    return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
