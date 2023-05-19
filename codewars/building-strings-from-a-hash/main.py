def solution(pairs):
  return ','.join([
    f'{key} = {pairs[key]}'
    for key in sorted(pairs, key=lambda k: (isinstance(k, str), k))
  ])


print(solution({'a': 1, 'b': 2}))
print(solution({'a': 'b', 'b': 'a'}))
print(solution({0: 'a', 'b': 2}))
print(solution({'b': 1, 'c': 2, 'e': 3}))
print(solution({}))
