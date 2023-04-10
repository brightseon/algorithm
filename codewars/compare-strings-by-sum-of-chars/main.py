from re import match, IGNORECASE


def compare(s1, s2):
    replace_s1 = (s1 if match(
        '^[a-z]+$', s1 if s1 else '', IGNORECASE) else '').upper()
    replace_s2 = (s2 if match(
        '^[a-z]+$', s2 if s2 else '', IGNORECASE) else '').upper()

    return sum([ord(s) for s in replace_s1]) == sum([ord(s) for s in replace_s2])


print(compare("AD", "BC"))
print(compare("AD", "DD"))
print(compare("gf", "FG"))
print(compare("Ad", "DD"))
print(compare("zz1", ""))
print(compare("ZzZz", "ffPFF"))
print(compare("kl", "lz"))
print(compare(None, ""))
print(compare("!!", "7476"))
print(compare("##", "1176"))
