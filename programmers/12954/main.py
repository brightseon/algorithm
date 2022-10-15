def solution(x, n):
    return [x + x * i for i in range(n)]


print(solution(2, 5))
print(solution(4, 3))
print(solution(-4, 2))
print(solution(0, 5))
