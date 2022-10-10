import re


def solution(s):
    return len(re.findall('p', s, re.I)) == len(re.findall('y', s, re.I))


print(solution('pPoooyY'))
print(solution('Pyy'))
