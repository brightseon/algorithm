def beggars(values, n):
    return [sum(values[r::n]) for r in range(n)]


print(beggars([1, 2, 3, 4, 5], 1))
print(beggars([1, 2, 3, 4, 5], 2))
print(beggars([1, 2, 3, 4, 5], 3))
print(beggars([1, 2, 3, 4, 5], 6))
print(beggars([1, 2, 3, 4, 5], 0))
