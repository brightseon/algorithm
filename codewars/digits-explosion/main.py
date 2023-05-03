def explode(s):
  return ''.join([a * int(a) for a in s])


print(explode("312"))
print(explode("102269"))
print(explode("0"))
print(explode("000"))
print(explode("123"))
