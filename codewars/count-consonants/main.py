import re


def consonant_count(s):
  return len(re.sub('[^bcdfghjklmnpqrstvwxyz]+', '', s.lower()))


print(consonant_count(''))
print(consonant_count('aaaaa'))
print(consonant_count('XaeiouX'))
print(consonant_count('Bbbbb'))
print(consonant_count('helLo world'))
print(consonant_count('h^$&^#$&^elLo world'))
print(consonant_count('0123456789'))
print(consonant_count('012345_Cb'))
