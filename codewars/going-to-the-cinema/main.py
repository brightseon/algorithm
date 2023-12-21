import math


def movie(card, ticket, perc):
    count = 1
    a = ticket * count
    b = card + ticket * perc

    while a <= math.ceil(b):
        count = count + 1
        a = ticket * count
        b = sum([b, ticket * perc**count])

    return count


print(movie(500, 15, 0.9))
print(movie(100, 10, 0.95))
