function solution(price, money, count) {
    return Math.max(
        0,
        Array(count)
            .fill(price)
            .reduce((a, b, i) => a + b * (i + 1), 0) - money
    );
}

console.log(solution(3, 20, 4));
