def checking(s):
    ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

    return sum([1 if ALPHABET[i] == a.lower() else 0 for i, a in enumerate(s[0:len(ALPHABET)])])


def solve(arr):
    return [checking(a)for a in arr]


print(solve(["abode", "ABc", "xyzD"]))
print(solve(["abide", "ABc", "xyz"]))
print(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]))
print(solve(["encode", "abc", "xyzD", "ABmD"]))
