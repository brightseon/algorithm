def sum_no_duplicates(l):
  return sum(filter(lambda x: l.count(x) == 1, l))


print(sum_no_duplicates([1, 1, 2, 3]))
print(sum_no_duplicates([1, 1, 2, 2, 3]))
print(sum_no_duplicates([]))
print(sum_no_duplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]))
print(sum_no_duplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]))
print(sum_no_duplicates([0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2]))
print(sum_no_duplicates([7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5]))
print(sum_no_duplicates([7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5]))
