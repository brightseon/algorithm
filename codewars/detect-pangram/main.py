import re


def is_pangram(s):
    return len(set(re.findall(r'[a-z]', s.lower()))) == 26

print(is_pangram('The quick, brown fox jumps over the lazy dog!'))
print(is_pangram('1bcdefghijklmnopqrstuvwxyz'))