from datetime import date
from datetime import timedelta


def period_is_late(last, today, cycle_length):
    return last + timedelta(cycle_length) < today


print(period_is_late(date(2016, 6, 13), date(2016, 7, 16), 35))
print(period_is_late(date(2016, 6, 13), date(2016, 7, 16), 28))
print(period_is_late(date(2016, 6, 13), date(2016, 7, 16), 35))
print(period_is_late(date(2016, 6, 13), date(2016, 6, 29), 28))
print(period_is_late(date(2016, 7, 12), date(2016, 8, 9), 28))
print(period_is_late(date(2016, 7, 12), date(2016, 8, 10), 28))
print(period_is_late(date(2016, 7, 1), date(2016, 8, 1), 30))
print(period_is_late(date(2016, 6, 1), date(2016, 6, 30), 30))
print(period_is_late(date(2016, 1, 1), date(2016, 1, 31), 30))
print(period_is_late(date(2016, 1, 1), date(2016, 2, 1), 30))
