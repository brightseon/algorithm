def solution(s):
    return ' '.join([''.join([b.upper() if i %
                     2 == 0 else b for i, b in enumerate(a)]) for a in s.lower().split(' ')])


print(solution("try hello world"))
