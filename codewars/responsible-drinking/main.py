import re


def hydrate(drink_string):
  water = sum(list(map(int, re.findall('[\d]+', drink_string))))

  if water == 1:
    return f'{water} glass of water'

  return f'{water} glasses of water'


print(hydrate("1 beer"))
print(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"))
