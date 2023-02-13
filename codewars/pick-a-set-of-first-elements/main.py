def first(seq, n=1):
  return seq[0:n]


seq = ['a', 'b', 'c', 'd', 'e']
print(first(seq))
print(first(seq, 0))
print(first(seq, 1))
print(first(seq, 2))
print(first(seq, 10))
