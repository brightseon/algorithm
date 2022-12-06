import math


def thirt(n):
    result = int(sum([(math.pow(10, i) % 13) * int(a)
                 for i, a in enumerate(list(reversed(list(str(n)))))]))

    return result if result == n else thirt(result)


print(thirt(1234567))
print(thirt(8529))
print(thirt(85299258))
print(thirt(5634))
print(thirt(1111111111))
print(thirt(987654321))
