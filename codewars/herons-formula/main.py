import math


def heron(a, b, c):
  s = sum([a, b, c]) / 2

  return round(math.sqrt(s * (s - a) * (s - b) * (s - c)), 2)


print(heron(3, 4, 5))
print(heron(6, 8, 10))