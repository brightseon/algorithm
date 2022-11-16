from itertools import combinations


def solution(number):
    return sum([1 if sum([a, b, c]) == 0 else 0 for a, b, c in combinations(number, 3)])


print(solution([-2, 3, 0, 2, -5]))
print(solution([-3, -2, -1, 0, 1, 2, 3]))
print(solution([-1, 1, -1, 1]))
