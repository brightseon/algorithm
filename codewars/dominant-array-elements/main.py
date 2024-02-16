def solve(arr):
  return [a for i, a in enumerate(arr) if all(a > x for x in arr[i + 1:])]


print(solve([16, 17, 14, 3, 14, 5, 2]))
print(solve([92, 52, 93, 31, 89, 87, 77, 105]))
print(solve([75, 47, 42, 56, 13, 55]))
print(solve([67, 54, 27, 85, 66, 88, 31, 24, 49]))
print(solve([76, 17, 25, 36, 29]))
print(solve([104, 18, 37, 9, 36, 47, 28]))
