import re


def is_letter(s):
    if len(s) == 1 and re.match('^[a-z]$', s, re.I) is not None:
        return True

    return False


print(is_letter(""))
print(is_letter("a"))
print(is_letter("X"))
print(is_letter("7"))
print(is_letter("_"))
print(is_letter("ab"))
print(is_letter("a\n"))
