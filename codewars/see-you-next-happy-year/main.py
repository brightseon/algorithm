def next_happy_year(year):
  while True:
    year += 1

    if len(set(str(year))) == len(str(year)):
      return year


print(next_happy_year(1001))
print(next_happy_year(1123))
print(next_happy_year(2001))
print(next_happy_year(2334))
print(next_happy_year(3331))
print(next_happy_year(1987))
print(next_happy_year(5555))
print(next_happy_year(7712))
print(next_happy_year(8088))
print(next_happy_year(8999))
