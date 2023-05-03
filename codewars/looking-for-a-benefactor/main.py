from math import ceil


def new_avg(arr, newavg):
  try:
    x = newavg * (len(arr) + 1) - sum(arr)

    if x < 0:
      raise Exception('Error expected')

    return ceil(x)
  except Exception as e:
    raise Exception(e)


print(new_avg([14, 30, 5, 7, 9, 11, 16], 90))
print(new_avg([14, 30, 5, 7, 9, 11, 15], 92))
print(new_avg([14, 30, 5, 7, 9, 11, 15], 2))
