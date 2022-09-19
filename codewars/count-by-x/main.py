def count_by(x, n):
    return list(map(lambda y: y * x, range(1, n + 1)))

print(count_by(1, 5))
print(count_by(2, 5))
print(count_by(3, 5))
print(count_by(50, 5))
print(count_by(100, 5))