function isPrime(num) {
    if (num === 2) return true;
    if (num <= 1 || num % 2 === 0) return false;

    for (let i = 3; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));

console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(41));
console.log(isPrime(5099));

console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(45));
console.log(isPrime(-5));
console.log(isPrime(-8));
console.log(isPrime(-41));
