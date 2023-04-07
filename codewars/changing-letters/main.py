from re import sub


def swap(st):
    return sub('a|e|i|o|u', lambda s: s.group(0).upper(), st)


print(swap("HelloWorld!"))
print(swap("Sunday"))
print(swap("Codewars"))
print(swap("Monday"))
print(swap("Friday"))
print(swap("abracadabra"))
