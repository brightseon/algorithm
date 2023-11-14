def minimum_steps(numbers, value):
  sorted_numbers = sorted(numbers)
  num = value

  for i, n in enumerate(sorted_numbers):
    num = num - n

    if num < 1:
      return i


print(minimum_steps([4, 6, 3], 7))
print(minimum_steps([10, 9, 9, 8], 17))
print(minimum_steps([8, 9, 10, 4, 2], 23))
print(minimum_steps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464))
print(minimum_steps([4, 6, 3], 2))
