def cube_odd(arr):
  if all([type(item) is int for item in arr]) is False:
    return None
  
  return sum(filter(lambda a: a % 2 != 0, [a**3 for a in arr]))


print(cube_odd([1, 2, 3, 4]))
print(cube_odd([-3, -2, 2, 3]))
print(cube_odd(["a", 12, 9, "z", 42]))