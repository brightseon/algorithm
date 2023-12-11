def solve(arr):
  asc = sorted(arr)
  desc = sorted(arr, reverse=True)

  return [desc.pop(0) if i % 2 == 0 else asc.pop(0) for i in range(len(arr))]


print(solve([15, 11, 10, 7, 12]))
print(solve([91, 75, 86, 14, 82]))
print(solve([84, 79, 76, 61, 78]))
print(solve([52, 77, 72, 44, 74, 76, 40]))
print(solve([1, 6, 9, 4, 3, 7, 8, 2]))
print(solve([78, 79, 52, 87, 16, 74, 31, 63, 80]))
