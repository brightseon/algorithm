import re


def remove_vowels(strng):
    return re.sub('[aeiou]', '', strng)


print(remove_vowels("drake"))
print(remove_vowels("aeiou"))
