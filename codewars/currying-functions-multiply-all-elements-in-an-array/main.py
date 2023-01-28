def multiply_all(arr):
  def multiply(num):
    return [a * num for a in arr]
  return multiply


print(multiply_all([1])(1))
print(multiply_all([1, 2])(1))
print(multiply_all([1, 2, 3])(1))
print(multiply_all([1, 2, 3])(2))
print(multiply_all([1, 2, 3])(0))
