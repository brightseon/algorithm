def incrementer(nums):
  return [int(f'{n + (i + 1)}'[-1]) for i, n in enumerate(nums)]


print(incrementer([]))
print(incrementer([1, 2, 3]))
print(incrementer([4, 6, 7, 1, 3]))
print(incrementer([3, 6, 9, 8, 9]))
print(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]))
