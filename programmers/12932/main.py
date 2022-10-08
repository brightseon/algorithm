from functools import reduce


def solution(n):
    return reduce(lambda a, b: [int(b), *a], list(str(n)), [])


print(solution(12345))
