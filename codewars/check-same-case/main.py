def same_case(a, b):
  if str(a).isalpha() is False or str(b).isalpha() is False:
    return -1

  upper_a = a.upper()
  upper_b = b.upper()

  if (upper_a == a and upper_b == b) or (upper_a != a and upper_b != b):
    return 1

  return 0


print(same_case('C', 'B'))
print(same_case('b', 'a'))
print(same_case('d', 'd'))
print(same_case('A', 's'))
print(same_case('c', 'B'))
print(same_case('b', 'Z'))
print(same_case('\t', 'Z'))
print(same_case('H', ':'))
