def solution(strings, n):
    return sorted(strings, key=lambda s: (s[n], s))


print(solution(["sun", "bed", "car"], 1))
print(solution(["abce", "abcd", "cdx"], 2))
