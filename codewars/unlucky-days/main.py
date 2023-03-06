from datetime import date


def unlucky_days(year):
  return len(
    list(filter(lambda i: date(year, i, 13).weekday() == 4, range(1, 13))))


print(unlucky_days(1634))
print(unlucky_days(2873))
