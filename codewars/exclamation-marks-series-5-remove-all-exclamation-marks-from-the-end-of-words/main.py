import re


def remove(st):
  return re.sub('(?<=\w)!+', '', st)


print(remove('Hi!'))
print(remove('Hi!!!'), 'Hi')
print(remove('!Hi'))
print(remove('!Hi!'))
print(remove('Hi! Hi!'))
print(remove('!!!Hi !!hi!!! !hi'))
