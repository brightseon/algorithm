def extra_perfect(n: int) -> list[int] :
    return list(range(1, n + 1, 2))

print(extra_perfect(3))
print(extra_perfect(5))
print(extra_perfect(7))
print(extra_perfect(28))
print(extra_perfect(39))