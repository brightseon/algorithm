def automorphic(n):
  squared_string = str(n**2)
  idx = -1 * len(str(n))

  if int(squared_string[idx:]) == n:
    return 'Automorphic'

  return 'Not!!'


print(automorphic(1))
print(automorphic(3))
print(automorphic(6))
print(automorphic(9))
print(automorphic(25))
print(automorphic(53))
print(automorphic(76))
print(automorphic(95))
print(automorphic(625))
print(automorphic(225))
