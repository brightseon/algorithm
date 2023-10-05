def even_last(numbers):
  even_total = sum(numbers[0::2])

  if even_total == 0:
    return even_total

  return even_total * numbers[-1]


print(even_last([2, 3, 4, 5]))
print(even_last([]))
