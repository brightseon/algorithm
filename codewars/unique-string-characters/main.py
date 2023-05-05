def solve(a, b):
    for s in a:
        size = len(b)
        b = b.replace(s, '')

        if len(b) < size:
            a = a.replace(s, '')

    return a + b


print(solve("xyab", "xzca"))
print(solve("xyabb", "xzca"))
print(solve("abcd", "xyz"))
print(solve("xxx", "xzca"))
