from math import sqrt, pow


def solution(n):
    return pow(sqrt(n) + 1, 2) if sqrt(n).is_integer() else -1


print(solution(121))
print(solution(3))
