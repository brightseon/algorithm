import math


def strong_num(number):
  total = sum([math.factorial(int(n)) for n in str(number)])

  if number == total:
    return 'STRONG!!!!'

  return 'Not Strong !!'


print(strong_num(1))
print(strong_num(2))
print(strong_num(145))

print(strong_num(7))
print(strong_num(93))
print(strong_num(185))
