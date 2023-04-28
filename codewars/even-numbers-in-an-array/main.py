def even_numbers(arr, n):
  return list(filter(lambda a: a % 2 == 0, arr))[-n:]


print(even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
print(even_numbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
print(even_numbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))
