import re


def find_children(dancing_brigade):
  return ''.join([
    s + re.sub(f'[^{s.lower()}]', '', dancing_brigade)
    for s in list(sorted(set(dancing_brigade.upper())))
  ])


print(find_children("abBA"))
print(find_children("AaaaaZazzz"))
print(find_children("CbcBcbaA"))
print(find_children("xXfuUuuF"))
print(find_children(""))
