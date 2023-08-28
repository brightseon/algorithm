def get_missing_element(seq):
  return sum(list(range(1, 10))) - sum(seq)


print(get_missing_element([0, 5, 1, 3, 2, 9, 7, 6, 4]))
print(get_missing_element([9, 2, 4, 5, 7, 0, 8, 6, 1]))
