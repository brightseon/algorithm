def find_smallest(numbers, to_return):
  min_num = min(numbers)

  if to_return == 'value':
    return min_num
  
  return numbers.index(min_num)


print(find_smallest([5, 4, 3, 2, 1], "value"))
print(find_smallest([5, 4, 3, 2, 1], "index"))
print(find_smallest([8, 0, 9], "index"))
print(find_smallest([8, 0, 9], "value"))
print(find_smallest([1, 1, 0, 0, 1, 1], "value"))
print(find_smallest([1, 1, 0, 0, 1, 1], "index"))
