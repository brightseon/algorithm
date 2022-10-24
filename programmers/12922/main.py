def solution(n):
    string = '수박'
    return string * (n // len(string)) + ('' if n % len(string) == 0 else string[0])


print(solution(3))
print(solution(4))
