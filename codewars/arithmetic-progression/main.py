def arithmetic_sequence_elements(a, d, n):
  return ', '.join([str(x + (i * d)) for i, x in enumerate([a] * n)])


print(arithmetic_sequence_elements(1, 2, 5))
print(arithmetic_sequence_elements(1, 0, 5))
print(arithmetic_sequence_elements(1, -3, 10))
