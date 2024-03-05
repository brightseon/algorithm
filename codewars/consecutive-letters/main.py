def solve(st):
  if len(set(st)) != len(st):
    return False

  sort_st = sorted(st)

  for a, b in zip(sort_st, sort_st[1:]):
    if ord(a) + 1 != ord(b):
      return False

  return True


print(solve("abc"))
print(solve("abd"))
print(solve("dabc"))
print(solve("abbc"))
