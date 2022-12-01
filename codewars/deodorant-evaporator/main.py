def evaporator(content, evap_per_day, threshold):
  day = 0
  gas = 100

  while gas > threshold:
    gas = gas * ((100 - evap_per_day) / 100)
    day += 1

  return day


print(evaporator(10, 10, 10))
