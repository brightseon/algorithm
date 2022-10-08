from functools import reduce


def solution(n):
    return reduce(lambda a, b: a + int(b), list(str(n)), 0)


print(solution(123))
print(solution(987))
