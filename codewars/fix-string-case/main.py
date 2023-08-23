import re


def solve(s):
  upper_count = len(re.findall('[A-Z]', s))
  lower_count = len(s) - upper_count

  if lower_count >= upper_count:
    return s.lower()

  return s.upper()


print(solve("code"))
print(solve("CODe"))
print(solve("COde"))
print(solve("Code"))
