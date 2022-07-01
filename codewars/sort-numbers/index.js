function solution(nums) {
    if (!nums) return [];
    return nums.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
console.log(solution([]));
console.log(solution([20, 2, 10]));
console.log(solution([2, 20, 10]));
