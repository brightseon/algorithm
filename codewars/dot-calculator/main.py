def calculator(txt):
  operand1, operator, operand2 = txt.split()

  num1 = len(operand1)
  num2 = len(operand2)

  if operator == '+':
    result = num1 + num2
  elif operator == '-':
    result = num1 - num2
  elif operator == '*':
    result = num1 * num2
  elif operator == '//':
    result = num1 // num2
  else:
    raise ValueError("Invalid operator")

  return '.' * result if result != 0 else ''


print(calculator("..... + ..............."))
print(calculator("..... - ..."))
print(calculator("..... - ."))
print(calculator("..... * ..."))
print(calculator("..... * .."))