def sum_triangular_numbers(n):
    if n < 1:
        return 0
    arr = [1]

    for a in range(2, n + 1):
        arr.append(arr[-1] + a)

    return sum(arr)


print(sum_triangular_numbers(6))
# print(sum_triangular_numbers(34))
# print(sum_triangular_numbers(-291))
# print(sum_triangular_numbers(943))
# print(sum_triangular_numbers(-971))
