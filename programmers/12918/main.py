from re import fullmatch


def solution(s):
    return fullmatch('\d{4}|\d{6}', s) != None


print(solution('a234'))
print(solution('1234'))
