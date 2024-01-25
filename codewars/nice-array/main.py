def is_nice(arr):
  if len(arr) == 0:
    return False

  return all([a + 1 in arr or a - 1 in arr for a in arr])


print(is_nice([2, 10, 9, 3]))
print(is_nice([3, 4, 5, 7]))
