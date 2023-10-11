def filter_lucky(lst):
    return list(filter(lambda l: str(l).find('7') >= 0, lst))


print(filter_lucky([7]))
print(filter_lucky([1, 2, 3]))
print(filter_lucky([77, 8]))
print(filter_lucky([71]))
print(filter_lucky([71, 9907, 69]))
print(filter_lucky(range(100, 181)))
print(filter_lucky(range(9191, 9292)))
print(filter_lucky(range(1, 801)))
print(filter_lucky(range(1000, 2001)))
