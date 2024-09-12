def fibonacci(n: int) -> int:
    if n < 2:
        return n

    cache = [0, 1]

    for i in range(0, n):
        cache.append(cache[i]+cache[i+1])

    return cache[n]


print(fibonacci(0))
print(fibonacci(1))
print(fibonacci(2))
print(fibonacci(3))
print(fibonacci(4))
print(fibonacci(5))
print(fibonacci(6))
print(fibonacci(34))
print(fibonacci(299))
