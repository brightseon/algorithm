def gcd(n, m):
    a = min(n, m)
    b = max(n, m)

    if b % a != 0:
        return gcd(a, b % a)

    return a


def solution(n, m):
    g = gcd(n, m)
    return [g, (n * m) / g]


print(solution(3, 12))
print(solution(2, 5))
