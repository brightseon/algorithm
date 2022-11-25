function solution(n) {
    const end = n % 2 === 0 ? n - 1 : n;
    let primes = [2];

    for (let i = 0; i < Math.floor(end / 2); i++) {
        const num = 3 + i * 2;
        let isPrime = true;

        for (let j = 0; j < primes.length; j++) {
            const prime = primes[j];
            if (prime > Math.floor(Math.sqrt(num))) break;
            if (num % prime === 0) {
                isPrime = false;
                break;
            }
        }

        isPrime && primes.push(num);
    }

    return primes.length;
}

console.log(solution(10));
console.log(solution(5));
