def solution(x):
    return x % sum(map(lambda a: int(a), list(f'{x}'))) == 0


print(solution(10))
print(solution(12))
print(solution(11))
print(solution(13))
