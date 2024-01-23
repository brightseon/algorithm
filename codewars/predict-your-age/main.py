import math


def predict_age(*ages):
  squared_sum = sum(age**2 for age in ages)
  result = math.sqrt(squared_sum) / 2

  return int(result)


print(predict_age(65, 60, 75, 55, 60, 63, 64, 45))
