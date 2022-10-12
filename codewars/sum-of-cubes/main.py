from functools import reduce

def sum_cubes(n):
    return reduce(lambda a, b: a + pow(b + 1, 3), range(n), 0)

print(sum_cubes(1))
print(sum_cubes(2))
print(sum_cubes(3))
print(sum_cubes(4))
print(sum_cubes(10))
print(sum_cubes(123))