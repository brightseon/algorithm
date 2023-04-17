from math import floor


def pairs(ar):
  return sum([
    1 if abs(ar[i * 2] - ar[(i * 2) + 1]) == 1 else 0
    for i in range(floor(len(ar) / 2))
  ])


print(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]))
print(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))
print(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]))
print(pairs([-55, -56, -7, -6, 56, 55, 63, 62]))
print(pairs([73, 72, 8, 9, 73, 72]))
