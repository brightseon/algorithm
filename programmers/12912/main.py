
def solution(a, b):
    return sum([i + min(a, b) for i in range(abs(a - b) + 1)])


print(solution(3, 5))
print(solution(3, 3))
print(solution(5, 3))
