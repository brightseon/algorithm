from collections import Counter


def product(s):
  counter = Counter(s)

  return counter['!'] * counter['?']


print(product(''))
print(product('!'))
print(product('!!??!!'))
