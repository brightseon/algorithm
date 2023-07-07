def disarium_number(number):
  if sum([int(n)**(i + 1) for i, n in enumerate(str(number))]) == number:
    return 'Disarium !!'

  return 'Not !!'


print(disarium_number(89))
print(disarium_number(518))
print(disarium_number(1024))
