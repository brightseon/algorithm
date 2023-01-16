OPERTATION = {
  '+': lambda a, b: a + b,
  '-': lambda a, b: a - b,
  '*': lambda a, b: a * b,
  '/': lambda a, b: a / b
}


def calculate(num1, operation, num2):
  try :
    return OPERTATION[operation](num1, num2)
  except:
    return None


print(calculate(3.2, "+", 8))
print(calculate(3.2, "-", 8))
print(calculate(3.2, "/", 8))
print(calculate(3.2, "*", 8))
print(calculate(-3, "+", 0))
print(calculate(-3, "-", 0))
print(calculate(-2, "/", -2))
print(calculate(-3, "*", 0))
print(calculate(8, "m", 2))
