def squares(x, n):
  if n <= 0:
    return []

  arr = [x]

  for a in range(n - 1):
    arr.append(arr[-1]**2)

  return arr


print(squares(2, 5))
print(squares(3, 3))
print(squares(5, 3))
print(squares(10, 4))
print(squares(2, 0))
print(squares(2, -4))
