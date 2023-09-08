import math


def to_time(seconds):
  hours = math.floor(seconds / 3600)
  minutes = math.floor(seconds % 3600 / 60)

  return f'{hours} hour(s) and {minutes} minute(s)'


print(to_time(3600))
print(to_time(3601))
print(to_time(3500))
print(to_time(323500))
print(to_time(0))
