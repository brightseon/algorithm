import math


def isPP(n):
    for i in range(2, math.floor(math.sqrt(n)) + 1):
        times = round(math.log(n) / math.log(i))

        if i ** times == n:
            return [i, times]

    return None


print(isPP(4))
print(isPP(9))
print(isPP(5))
