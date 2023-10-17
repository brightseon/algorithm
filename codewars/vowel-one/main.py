import re


def vowel_one(s):
  return ''.join(
    ['1' if re.match('a|e|i|o|u', s, re.I) is not None else '0' for s in s])


print(vowel_one('vowelOne'))
print(vowel_one('123, arou'))
print(vowel_one('Codewars'))
print(vowel_one('Python'))
