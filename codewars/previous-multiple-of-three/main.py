def prev_mult_of_three(n):
  while n > 0 and n % 3 != 0:
    n //= 10

  if n == 0:
    return None
  else:
    return n


print(prev_mult_of_three(1))
print(prev_mult_of_three(25))
print(prev_mult_of_three(36))
print(prev_mult_of_three(1244))
print(prev_mult_of_three(952406))
