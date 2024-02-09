def divisible_by_three(st):
    s = sum(map(lambda s: int(s), st))
    p = 0

    while p < s:
        p = p + 3

    return p == s


print(divisible_by_three('123'))
print(divisible_by_three('19254'))
print(divisible_by_three('88'))
print(divisible_by_three('1'))
