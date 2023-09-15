def largest(n, xs):
  if n == 0:
    return []

  return sorted(xs)[-1 * n:]


print(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
print(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]))
print(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]))
