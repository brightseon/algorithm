def array_leaders(numbers):
  total = sum(numbers)
  output = []

  for num in numbers:
    total = total - num

    if num > total:
      output.append(num)

  return output


print(array_leaders([1, 2, 3, 4, 0]))
print(array_leaders([16, 17, 4, 3, 5, 2]))

print(array_leaders([-1, -29, -26, -2]))
print(array_leaders([-36, -12, -27]))

print(array_leaders([5, 2]))
print(array_leaders([0, -1, -29, 3, 2]))
