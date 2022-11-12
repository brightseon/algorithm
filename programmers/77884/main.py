import math


def solution(left, right):
    return sum([a * -1 if math.sqrt(a).is_integer() else a * 1 for a in range(left, right + 1)])


print(solution(13, 17))
print(solution(24, 27))
