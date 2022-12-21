def solve(arr):
  return list(sorted(set(arr), key=lambda a: arr.index(a)))


print(solve([3,4,4,3,6,3]))
print(solve([1,2,1,2,1,2,3]))
print(solve([1,2,3,4]))
print(solve([1,1,4,5,1,2,1]))