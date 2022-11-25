import math


def solution(n):
    primes = [2]

    for num in range(3, n + 1, 2):
        is_prime = True

        for prime in primes:
            if prime > math.floor(math.sqrt(num)):
                break
            if num % prime == 0:
                is_prime = False
                break

        if is_prime is False:
            continue

        primes.append(num)

    return len(primes)


print(solution(10))
# print(solution(5))
