def consecutive(arr, a, b):
  idx = arr.index(a)

  return arr[max(idx - 1, 0)] == b or arr[min(idx + 1, len(arr) - 1)] == b


print(consecutive([1, 3, 5, 7], 3, 7))
print(consecutive([1, 3, 5, 7], 3, 1))
print(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4))
