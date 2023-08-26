def multiplication_table(size):
    return [list(range(i, i * size + 1, i)) for i in range(1, size + 1)]


print(multiplication_table(1))
print(multiplication_table(2))
print(multiplication_table(3))
print(multiplication_table(4))
print(multiplication_table(5))
