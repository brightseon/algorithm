import math


def race(v1, v2, g):
  if v2 - v1 <= 0: return None
  time = ((g * 3600) / (v2 - v1))

  return [
    math.floor(time / 3600),
    math.floor((time % 3600) / 60),
    math.floor(time % 60)
  ]


print(race(720, 850, 70))
print(race(80, 91, 37))
