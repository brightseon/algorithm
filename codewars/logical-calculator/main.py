from functools import reduce

OP = {
  "AND": lambda a, b: a and b,
  "OR": lambda a, b: a or b,
  "XOR": lambda a, b: not b if a else b
}


def logical_calc(array, op):
  return reduce(OP[op], array[1:], array[0])


print(logical_calc([True, False], "AND"))
print(logical_calc([True, False], "OR"))
print(logical_calc([True, False], "XOR"))

print(logical_calc([True, True, False], "AND"))
print(logical_calc([True, True, False], "OR"))
print(logical_calc([True, True, False], "XOR"))
