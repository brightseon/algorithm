import math


def circle_area(r):
  if r < 1:
    raise ValueError()

  return r**2 * math.pi


print(circle_area(1))
print(circle_area(43.2678))
print(circle_area(68))
print(circle_area(0))
print(circle_area(-1))
