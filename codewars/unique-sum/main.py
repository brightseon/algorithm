def unique_sum(lst):
  if len(lst) == 0:
    return None

  return sum(set(lst))


print(unique_sum([1, 2, 3]))
print(unique_sum([1, 3, 8, 1, 8]))
print(unique_sum([-1, -1, 5, 2, -7]))
