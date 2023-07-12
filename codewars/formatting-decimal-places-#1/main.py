import math


def two_decimal_places(number):
  return math.trunc(number * 100) / 100


print(two_decimal_places(10.1289767789))
print(two_decimal_places(-7488.83485834983))
print(two_decimal_places(4.653725356))
