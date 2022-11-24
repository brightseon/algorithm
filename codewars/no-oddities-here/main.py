def no_odds(values):
    return list(filter(lambda v: v % 2 == 0, values))


print(no_odds([0, 1]))
print(no_odds([0, 1, 2, 3]))
print(no_odds([0, 2, 4, 6, 8, 10]))
print(no_odds([-1, -3, -5, -7, -9]))
print(no_odds([2, 4, 8, 6, 0]))
print(no_odds([]))
