const gcd = (n, m) => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    if (max % min !== 0) return gcd(min, max % min);

    return min;
};

function solution(n, m) {
    const g = gcd(n, m);

    return [g, (n * m) / g];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
