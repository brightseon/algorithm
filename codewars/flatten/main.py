def flatten(lst):
  flattened = []

  for item in lst:
    if isinstance(item, list):
      flattened.extend(item)
    else:
      flattened.append(item)

  return flattened


print(flatten([]))
print(flatten([1, 2, 3]))
print(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]))
print(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3], "a"]))
print(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]))
print(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]))
