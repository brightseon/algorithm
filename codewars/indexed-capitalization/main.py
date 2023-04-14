def capitalize(s, ind):
    for i in ind:
        if len(s) < i:
            continue

        s = s[0:i] + s[i].upper() + s[i + 1:]

    return s


print(capitalize("abcdef", [1, 2, 5]))
print(capitalize("abcdef", [1, 2, 5, 100]))
print(capitalize("codewars", [1, 3, 5, 50]))
print(capitalize("abracadabra", [2, 6, 9, 10]))
print(capitalize("codewarriors", [5]))
