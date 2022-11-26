import re


def calculator(x, y, op):
    if f'{x}'.isnumeric() == False or f'{y}'.isnumeric() == False:
        return 'unknown value'

    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '/':
        return x / y
    elif op == '*':
        return x * y

    return 'unknown value'


print(calculator(6, 2, '+'))
print(calculator(4, 3, '-'))
print(calculator(5, 5, '*'))
print(calculator(5, 4, '/'))
print(calculator(6, 2, '&'))
