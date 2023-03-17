def max_diff(lst):

  if len(lst) < 2:
    return 0

  return max(lst) - min(lst)


print(max_diff([0, 1, 2, 3, 4, 5, 6]))
print(max_diff([-0, 1, 2, -3, 4, 5, -6]))
print(max_diff([0, 1, 2, 3, 4, 5, 16]))
print(max_diff([16]))
print(max_diff([]))
