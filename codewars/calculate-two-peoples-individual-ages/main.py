def get_ages(sum_, difference):
  if sum_ < 0 or difference < 0:
    return None

  x = (sum_ + difference) / 2
  y = sum_ - x

  if x < 0 or y < 0:
    return None

  return (x, y)


print(get_ages(24, 4))
print(get_ages(30, 6))
print(get_ages(70, 10))
print(get_ages(18, 4))
print(get_ages(63, 14))
print(get_ages(80, 80))
print(get_ages(63, -14))
print(get_ages(-22, 15))
