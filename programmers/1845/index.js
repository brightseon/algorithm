function solution(nums) {
    const count = nums.length / 2;
    const types = nums.filter((num, i) => nums.indexOf(num, i + 1) === -1);

    return types.length > count ? count : types.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
