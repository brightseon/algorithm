def catch_sign_change(lst):
  count = 0

  if len(lst) > 0:
    start_sign = lst[0]

    for l in lst:
      if start_sign >= 0 and l >= 0:
        continue
      if start_sign < 0 and l < 0:
        continue

      count += 1
      start_sign = l

  return count


print(catch_sign_change([-7, -7, 7, 0]))
print(catch_sign_change([1, 5, 2, -4]))
print(catch_sign_change([-8, 4, -1, 5, -3, -3, -2, -2]))
print(catch_sign_change([-2, -2, -5, -4, 5, 2, 0, 6, 0]))
print(catch_sign_change([2, 6, 3, 0, 5, -3]))
print(catch_sign_change([-3, 3]))
print(catch_sign_change([-1, 2, 2, 2, 2, -8, -1]))
print(catch_sign_change([1, -2, -7, -4, 4, -2, 0, -3, 3]))
print(catch_sign_change([3, 7, -6, 2, 3, 1, 1]))
print(catch_sign_change([13, -7, -6, 2, -1, 1, -1]))

print(catch_sign_change([]))
print(catch_sign_change([0]))
print(catch_sign_change([4, 1]))
print(catch_sign_change([-1, -2, -3]))
