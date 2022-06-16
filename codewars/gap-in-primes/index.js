const isPrimes = (num) => {
    for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
        if (num % i === 0) return false;
    }

    return true;
};

function gap(g, m, n) {
    let primes = [];

    for (let i = m; i <= n; i++) {
        if (!isPrimes(i)) continue;
        if (i - primes[primes.length - 1] === g) {
            primes.push(i);
            break;
        }

        primes = [i];
    }

    return primes.length > 1 ? primes : null;
}

console.log(gap(2, 100, 110));
console.log(gap(4, 100, 110));
console.log(gap(6, 100, 110));
console.log(gap(8, 300, 400));
console.log(gap(10, 300, 400));
