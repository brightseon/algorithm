def sum_of_n(n):
  arr = [0]
  flag = 1 if n > 0 else -1

  for i in range(abs(n)):
    arr.append(arr[i] + (i + 1) * flag)

  return arr


print(sum_of_n(3))
print(sum_of_n(-4))
print(sum_of_n(1))
print(sum_of_n(0))
print(sum_of_n(10))
