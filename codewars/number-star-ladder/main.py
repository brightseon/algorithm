def pattern(n):
  return '\n'.join(['1'] + [f'1{"*" * i}{i + 1}' for i in range(1, n)])


print(pattern(1))
print(pattern(3))
print(pattern(7))
print(pattern(20))
