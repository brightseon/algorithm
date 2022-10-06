from functools import reduce


def solution(arr):
    return reduce(lambda a, b: a + b, arr, 0) / len(arr)


print(solution([1, 2, 3, 4]))
print(solution([5, 5]))
