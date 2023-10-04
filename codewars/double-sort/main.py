def db_sort(arr):
  return sorted(arr, key=lambda x: (0, x) if isinstance(x, int) else (1, x))


print(db_sort([6, 2, 3, 4, 5]))
print(db_sort([14, 32, 3, 5, 5]))
print(db_sort([1, 2, 3, 4, 5]))
print(db_sort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))
print(db_sort(["C", "W", "W", "W", 1, 2, 0]))
print(db_sort(['come', 'on', 110, '2500', 10, '!', 7, 15, 5, 6, 6]))
print(
  db_sort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]))
