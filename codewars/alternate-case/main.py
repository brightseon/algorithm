def alternate_case(s):
    return ''.join([c.upper() if c.islower() else c.lower() for c in s])


print(alternate_case("ABC"))
print(alternate_case(""))
print(alternate_case(" "))
print(alternate_case("Hello World"))
print(alternate_case("cODEwARS"))
print(alternate_case("i LIKE MAKING KATAS VERY MUCH"))
