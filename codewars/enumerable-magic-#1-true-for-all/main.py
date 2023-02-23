def _all(seq, fun):
  return all([fun(s) for s in seq])


print(_all((1, 2, 3, 4, 5), lambda x: x > 9))
print(_all((1, 2, 3, 4, 5), lambda x: x < 9))
