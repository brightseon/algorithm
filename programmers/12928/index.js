function solution(n) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i !== 0) continue;

        sum += i;
        if (n / i !== i) sum += n / i;
    }

    return sum;
}

console.log(solution(12));
console.log(solution(5));
console.log(solution(1));
console.log(solution(0));
console.log(solution(16));
console.log(solution(2));
console.log(solution(4));
