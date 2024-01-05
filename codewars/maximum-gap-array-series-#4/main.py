def max_gap(numbers):
  sort_numbers = sorted(numbers)

  return max(
    [abs(sort_numbers[i] - n) for i, n in enumerate(sort_numbers[1:])])


print(max_gap([13, 10, 2, 9, 5]))
print(max_gap([13, 3, 5]))
print(max_gap([24, 299, 131, 14, 26, 25]))
print(max_gap([-3, -27, -4, -2]))
print(max_gap([-7, -42, -809, -14, -12]))
print(max_gap([12, -5, -7, 0, 290]))
print(max_gap([-54, 37, 0, 64, -15, 640, 0]))
print(max_gap([130, 30, 50]))
print(max_gap([1, 1, 1]))
print(max_gap([-1, -1, -1]))
