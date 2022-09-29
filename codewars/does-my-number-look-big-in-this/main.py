from functools import reduce

def narcissistic( value ):
    return value == reduce(lambda a, b: a + pow(int(b), len(str(value))), list(str(value)), 0)

print(narcissistic(7))
print(narcissistic(371))
print(narcissistic(122))
print(narcissistic(4887))