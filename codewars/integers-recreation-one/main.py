import math

def divisor(num):
  numbers = []

  for n in range(1, math.floor(math.sqrt(num)) + 1):
    if num % n != 0: continue

    numbers.append(math.pow(n, 2))
    if(num / n == n): continue
    numbers.append(math.pow(num / n, 2))

  return sum(numbers)
  

def list_squared(m, n):
  numbers = []
  
  for a in range(m, n):
    sum = divisor(a)

    if float(math.sqrt(sum)).is_integer() == False: continue

    numbers.append([a, sum])

  return numbers

print(list_squared(1, 250))
print(list_squared(42, 250))
print(list_squared(250, 500))