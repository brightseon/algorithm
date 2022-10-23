from math import ceil, floor


def solution(s):
    return s[ceil(len(s)/2) - 1:floor(len(s)/2) + 1]


print(solution('abcde'))
print(solution('qwer'))
