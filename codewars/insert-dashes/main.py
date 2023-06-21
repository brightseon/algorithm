import re


def insert_dash(num):
  return re.sub('[13579]+', lambda match: '-'.join(list(match.group())),
                str(num))


print(insert_dash(454793))
print(insert_dash(123456))
print(insert_dash(1003567))
print(insert_dash(24680))
print(insert_dash(13579))
