def jumping_number(number):
  num_list = list(str(number))

  for i in range(1, len(num_list)):
    if abs(int(num_list[i - 1]) - int(num_list[i])) == 1:
      continue

    return 'Not!!'

  return 'Jumping!!'


print(jumping_number(1))
print(jumping_number(7))
print(jumping_number(9))

print(jumping_number(23))
print(jumping_number(32))
print(jumping_number(79))
print(jumping_number(98))

print(jumping_number(8987))
print(jumping_number(4343456))
print(jumping_number(98789876))
