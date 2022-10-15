def solution(n):
    return int(''.join(sorted(list(f'{n}'), reverse=True)))


print(solution(118372))
